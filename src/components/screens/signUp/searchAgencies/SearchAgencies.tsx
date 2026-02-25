import React, { useRef } from 'react';
import { TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { InputFloatingLabel } from '~/components/ui/input-floating-label';
import { Label } from '~/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './DropdownMenu';
import { useAgencySuggestionsLazyQuery } from '@/operations/__generated__/AgencySuggestions.generated';
import { Avatar, AvatarImage } from '@/components/screens/signUp/searchAgencies/Avatar';
import { cn } from '~/lib/utils';
import debounce from 'lodash/debounce';
import { ApolloError } from '@apollo/client';

interface SearchAgentsProps {
  setAgencies?: React.Dispatch<
    React.SetStateAction<
      | {
          __typename?: 'Agency';
          id: string;
          name?: string | null;
          logoUrl?: string | null;
        }[]
      | undefined
    >
  >;
  agencies?: {
    __typename?: 'Agency';
    id: string;
    name?: string | null;
    logoUrl?: string | null;
  }[];
  setSelectedAgency: React.Dispatch<
    React.SetStateAction<
      | {
          agencyId: string;
          agencyName: string;
        }
      | undefined
    >
  >;
  selectedAgency:
    | {
        agencyId: string;
        agencyName: string;
      }
    | undefined;
}

const SearchAgents: React.FC<SearchAgentsProps> = ({
  setAgencies,
  agencies,
  selectedAgency,
  setSelectedAgency,
}) => {
  const triggerRef = useRef<React.ElementRef<typeof DropdownMenuTrigger>>(null);
  const [agencySuggestions] = useAgencySuggestionsLazyQuery();

  const fetchSuggestions = async (text: string) => {
    try {
      const { data } = await agencySuggestions({
        variables: {
          filter: {
            keyword: text,
            first: 10,
          },
        },
      });
      const suggestions = data?.agencySuggestions?.flatMap((agency) => (agency ? [agency] : []));
      if (setAgencies) setAgencies(suggestions);
      if (!text && setAgencies) setAgencies([]);
      else triggerRef.current?.open();
    } catch (error) {
      if (error instanceof ApolloError) Alert.alert(error.message);
    }
  };

  const debouncedOnChangeText = useRef(debounce(fetchSuggestions, 300)).current;

  const handleSelect = (agencyId: string, agencyName: string) => {
    if (setSelectedAgency) {
      setSelectedAgency({
        agencyId,
        agencyName,
      });
    }
  };

  const dropdownMenuContentCalculateHeight = () => {
    const screenHeight = Dimensions.get('window').height;
    const heightPerItem = 64;
    const maxHeight = screenHeight * 0.4;
    if (agencies && agencies.length > 0) {
      const totalHeight = agencies.length * heightPerItem;
      return Math.min(totalHeight, maxHeight);
    }
    return 0;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger ref={triggerRef}>
        <InputFloatingLabel
          placeholder="Agency"
          onChangeText={(text) => {
            debouncedOnChangeText(text);
            setSelectedAgency((prev) => ({
              agencyId: !text ? '' : (prev?.agencyId ?? ''),
              agencyName: !text ? '' : text,
            }));
          }}
          value={selectedAgency?.agencyName}
        />
      </DropdownMenuTrigger>
      {agencies && agencies?.length > 0 && (
        <DropdownMenuContent
          sideOffset={7}
          alignOffset={-21}
          className={cn(
            `w-auto mx-6 border-zinc-200 shadow-[0_1px_5.5px_0_rgba(17,24,39,0.06)] p-0`,
            agencies?.length > 6 && 'h-2/5',
            agencies?.length < 6 && `h-[${dropdownMenuContentCalculateHeight}]`,
          )}>
          <ScrollView className="max-h-2/5" showsVerticalScrollIndicator={false}>
            {agencies?.map((agency, i) => (
              <TouchableOpacity
                activeOpacity={1}
                key={agency?.id}
                onPress={() => handleSelect(agency?.id, agency?.name ?? '')}
                className={cn(
                  '',
                  selectedAgency?.agencyId === agency?.id && 'bg-zinc-50',
                  selectedAgency?.agencyId !== agency?.id && 'transparent',
                )}>
                <DropdownMenuItem key={i}>
                  <TouchableOpacity
                    className="flex-row items-center gap-2"
                    activeOpacity={1}
                    onPress={() => handleSelect(agency?.id, agency?.name ?? '')}>
                    <Avatar alt={`${agency?.name} Avatar`} className="w-10 h-10">
                      <AvatarImage source={{ uri: agency?.logoUrl || undefined }} />
                    </Avatar>
                    <Label
                      onPress={() => handleSelect(agency?.id, agency?.name ?? '')}
                      nativeID={`${agency?.name}-label`}
                      className="font-semibold native:text-sm text-[#272525]">
                      {agency?.name}
                    </Label>
                  </TouchableOpacity>
                </DropdownMenuItem>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default SearchAgents;
