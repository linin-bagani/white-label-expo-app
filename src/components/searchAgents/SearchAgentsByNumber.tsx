import React, { useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { cn } from "~/lib/utils";
import useResponsiveScale from "hooks/useResponsiveScale";
import SelectCountryCode from "../screens/signUp/selectCountryCode/SelectCountryCode";

interface SearchAgentsByNumberProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  selectedAgentInfo: string | undefined;
  onSelect: (item?: string) => void;
  onSetError: (message: string) => void;
}

const SearchAgentsByNumber = <T extends FieldValues>({
  control,
  name,
  rules,
  selectedAgentInfo,
  onSelect,
  onSetError,
}: SearchAgentsByNumberProps<T>) => {
  const triggerRef = useRef<React.ElementRef<typeof DropdownMenuTrigger>>(null);
  // eslint-disable-next-line no-undef
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [filteredData, setFilteredData] = useState<JSON[]>([]);
  const scale = useResponsiveScale();
  const inputRef = useRef<React.ComponentRef<typeof Input>>(null);

  const handleSelect = (item: string, onChange: (value: string) => void) => {
    onChange(item as string);
    onSelect(item);
    triggerRef.current?.close();
  };

  const dropdownMenuContentCalculateHeight = () => {
    const screenHeight = Dimensions.get("window").height;
    const heightPerItem = 64;
    const maxHeight = screenHeight * 0.4;
    // if (filteredData && filteredData.length > 0) {
    //   const totalHeight = 5 * heightPerItem;
    //   return Math.min(totalHeight, maxHeight);
    // }
    return 0;
  };

  return (
    <DropdownMenu>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Controller
            control={control}
            name={"countryCode" as Path<T>}
            defaultValue={61 as any}
            render={({
              field: { value: countryCode, onChange: onCountryCodeChange },
            }) => (
              <View className="flex flex-col items-start gap-2">
                <View className={"flex-row"}>
                  <Pressable
                    onPress={() => inputRef.current?.focus()}
                    className={cn(
                      "flex-1 items-center flex-row dark:text-foreground-light  bg-background-dark-100 dark:bg-background-dark-300 rounded-xl relative px-5 gap-2",
                      selectedAgentInfo ? "border border-green-500" : "",
                      error?.message ? "border border-destructive" : "",
                    )}
                  >
                    <SelectCountryCode
                      dialCode={countryCode}
                      setDialCode={(text) => {
                        onCountryCodeChange(text);
                        // fetchAgentsByNumber(text as number, value);
                      }}
                    />
                    <DropdownMenuTrigger ref={triggerRef} className="flex-1">
                      <Input
                        ref={inputRef}
                        placeholder="Phone Number"
                        onChangeText={(text) => {
                          onChange(text);
                          // fetchAgentsByNumber(countryCode, text);
                        }}
                        value={value}
                        keyboardType="numeric"
                      />
                    </DropdownMenuTrigger>
                  </Pressable>
                </View>
                {!!error?.message && <Label error>{error.message}</Label>}
                {/*{!!selectedAgentInfo && (*/}
                {/*  <Label className="text-green-600">*/}
                {/*    Agent '{selectedAgentInfo.fullName}' has been selected*/}
                {/*  </Label>*/}
                {/*)}*/}
              </View>
            )}
          />
        )}
      />
      {filteredData && filteredData?.length > 1 && (
        <DropdownMenuContent
          sideOffset={7}
          alignOffset={-21}
          className={cn(
            `w-auto mx-6 border-zinc-200 shadow-[0_1px_5.5px_0_rgba(17,24,39,0.06)] p-2 bg-background dark:bg-background-dark`,
            filteredData?.length > 6 && "h-2/5",
            filteredData?.length < 6 &&
              `h-[${dropdownMenuContentCalculateHeight}]`,
          )}
        >
          <ScrollView
            className="max-h-2/5 "
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {filteredData?.map((agent, i) => (
              <TouchableOpacity
                activeOpacity={1}
                key={agent?.id}
                onPress={() => handleSelect(agent, () => {})}
              >
                <DropdownMenuItem key={i}>
                  <TouchableOpacity
                    className="flex-row gap-[10px] items-center "
                    activeOpacity={1}
                    onPress={() => handleSelect(agent, () => {})}
                  >
                    <Avatar
                      alt={`${agent?.fullName} Avatar`}
                      className="bg-gray-200"
                      style={{
                        width: scale(40),
                        height: scale(40),
                      }}
                    >
                      <AvatarImage
                        source={{
                          uri: agent?.profilePicture
                            ? `${agent?.profilePicture}?w=100&fm=auto`
                            : undefined,
                        }}
                      />
                      <AvatarFallback className={"bg-gray-200"}>
                        <Text className={"text-gray-600"}>
                          {agent?.initials}
                        </Text>
                      </AvatarFallback>
                    </Avatar>
                    <View className="gap-2">
                      <Label
                        onPress={() => handleSelect(agent, () => {})}
                        nativeID={`${agent?.fullName}-label`}
                        className={`font-semibold dark:text-foreground-light text-foreground-dark`}
                      >
                        {agent?.fullName}
                      </Label>
                    </View>
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

export default SearchAgentsByNumber;
