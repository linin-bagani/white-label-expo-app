import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
// import { Label, } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import CountryFlag from 'react-native-country-flag';
import countryPhoneInfos from './country-phone-info';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/screens/signUp/selectCountryCode/DropdownMenu';
import { FontAwesome6 } from '@expo/vector-icons';
import { useColorScheme } from '~/lib/useColorScheme';
// import { Dimensions } from 'react-native';
// import { textSm } from '@/util/textSizeUtils';

// const { width } = Dimensions.get('window');

interface SelectCountryCodeProps {
  dialCode?: number;
  setDialCode?: Dispatch<SetStateAction<number>>;
}

const SelectCountryCode: React.FC<SelectCountryCodeProps> = ({ dialCode, setDialCode }) => {
  const { colorScheme } = useColorScheme();
  const triggerRef = useRef<React.ElementRef<typeof DropdownMenuTrigger>>(null);
  const [code, setCode] = useState<string>('AU');
  const dialCodes = new Set([61, 64, 1, 63]);

  const handleSelectCountry = (countryCode: string, dialCode: number) => {
    setCode(countryCode);
    if (setDialCode) setDialCode(dialCode);
    triggerRef.current?.close();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger ref={triggerRef}>
        <View className="flex-row items-center gap-2  bg-background-dark-100 dark:bg-background-dark-300 dark:text-foreground-light">
          <CountryFlag
            isoCode={code || ''}
            size={0}
            style={{
              width: 21,
              height: 21,
              borderRadius: 25,
            }}
          />
          <FontAwesome6
            name="chevron-down"
            size={13}
            aria-hidden={true}
            color={colorScheme === 'dark' ? '#ffffff' : '#111827'}
          />
          <View className="flex-row items-center">
            <FontAwesome6
              name="plus"
              size={8}
              aria-hidden={true}
              color={colorScheme === 'dark' ? '#ffffff' : '#111827'}
            />
            <Text
              nativeID="country-code-label"
              className={`font-medium text-foreground dark:text-foreground-light`}>
              {dialCode}
            </Text>
          </View>
        </View>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={7}
        alignOffset={-21}
        className="w-auto h-[200px] rounded-lg mx-6 p-0 border dark:border-slate-200 bg-background-dark-100 dark:bg-background-dark-300">
        <ScrollView
          className="max-h-[200px]"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {countryPhoneInfos
            .filter(({ dialCode }) => dialCodes.has(dialCode))
            .map((countryPhoneInfo, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={1}
                onPress={() =>
                  handleSelectCountry(countryPhoneInfo?.code, countryPhoneInfo?.dialCode)
                }
                className={cn(
                  'flex-row items-center px-4 py-2',
                  code === countryPhoneInfo?.code && 'dark:bg-primary-500 bg-primary-400',
                  code !== countryPhoneInfo?.code && 'bg-transparent',
                )}>
                <DropdownMenuItem className="px-0 py-0">
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                      handleSelectCountry(countryPhoneInfo?.code, countryPhoneInfo?.dialCode)
                    }>
                    <View className="flex-row items-center gap-[10px]">
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          handleSelectCountry(countryPhoneInfo?.code, countryPhoneInfo?.dialCode)
                        }>
                        <CountryFlag
                          isoCode={countryPhoneInfo.code}
                          size={0}
                          style={{
                            width: 21,
                            height: 21,
                            borderRadius: 25,
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          handleSelectCountry(countryPhoneInfo?.code, countryPhoneInfo?.dialCode)
                        }>
                        <View className="pr-[10px] border-r border-[#272525] dark:border-white">
                          <Text
                            nativeID={`${countryPhoneInfo?.name}-label`}
                            onPress={() =>
                              handleSelectCountry(
                                countryPhoneInfo?.code,
                                countryPhoneInfo?.dialCode,
                              )
                            }>
                            {countryPhoneInfo?.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          handleSelectCountry(countryPhoneInfo?.code, countryPhoneInfo?.dialCode)
                        }>
                        <View className="flex-row items-center">
                          <FontAwesome6
                            name="plus"
                            size={8}
                            aria-hidden={true}
                            color={colorScheme === 'dark' ? '#ffffff' : '#111827'}
                          />
                          <Text
                            onPress={() =>
                              handleSelectCountry(
                                countryPhoneInfo?.name,
                                countryPhoneInfo?.dialCode,
                              )
                            }>
                            {countryPhoneInfo?.dialCode}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </DropdownMenuItem>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectCountryCode;
