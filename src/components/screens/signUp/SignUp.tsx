import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Keyboard,
  LayoutChangeEvent,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '~/components/ui/input';
import { InputFloatingLabel } from '~/components/ui/input-floating-label';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';
import { Button } from '@/components/button/button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema, SignUpSchemaType } from '@/types/FormTypes';
import { Link, router } from 'expo-router';
import SelectCountryCode from '@/components/screens/signUp/selectCountryCode/SelectCountryCode';
import { useCreateAgentFromSignUpMobileMutation } from '@/operations/__generated__/CreateAgentFromSignUpMobile.generated';
import SearchAgencies from '@/components/screens/signUp/searchAgencies/SearchAgencies';
import { ApolloError } from '@apollo/client';
import { redirectTermsPrivacy } from '@/util/Common';
import { Text } from '~/components/ui/text';
import { textBase } from '@/util/textSizeUtils';
import { cn } from '~/lib/utils';
import useResponsiveScale from '@/hooks/useResponsiveScale';

var parseFullName = require('parse-full-name').parseFullName;

const { width } = Dimensions.get('window');

export const SignUp: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      fullName: '',
      mobileNumber: '',
      password: '',
      retypePassword: '',
    },
    mode: 'onChange',
  });
  // const { watch } = methods;
  const [dialCode, setDialCode] = useState<number>(61);
  const [phoneNumberError, setPhoneNumberError] = useState<string>();
  // const mobileNumber = watch('mobileNumber');
  const [createAgentFromSignUpMobileMutation, { loading }] =
    useCreateAgentFromSignUpMobileMutation();

  const [agencies, setAgencies] = useState<
    | {
        __typename?: 'Agency' | undefined;
        id: string;
        name?: string | null | undefined;
        logoUrl?: string | null | undefined;
      }[]
    | undefined
  >([]);
  const [selectedAgency, setSelectedAgency] = useState<{
    agencyId: string;
    agencyName: string;
  }>();
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [topViewLayout, setTopViewLayout] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({ x: 0, y: 0, width: 0, height: 0 });
  const [bottomViewLayout, setBottomViewLayout] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const scale = useResponsiveScale();

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const splitFullName = (fullName: string) => {
    const parsedName = parseFullName(fullName);
    let firstName = parsedName.first;
    let lastName = parsedName.last;
    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) {
      lastName = '';
    } else if (nameParts.length > 2) {
      const middleNameParts = parsedName.middle.split(' ');
      if (middleNameParts.length > 1) {
        firstName = `${firstName} ${middleNameParts[0]}`;
      } else if (parsedName.middle) {
        firstName = `${firstName} ${parsedName.middle}`;
      }
      lastName = `${lastName} ${parsedName.suffix}`.trim();
    }
    return { firstName: firstName.trim(), lastName: lastName.trim() };
  };

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    const { fullName, retypePassword, ...rest } = data;
    const { firstName, lastName } = splitFullName(data?.fullName);
    const input = {
      ...rest,
      userName: fullName.replace(/\s/g, ''),
      firstName: firstName,
      lastName: lastName || '',
      mobileNumber: data.mobileNumber || '',
      ...(selectedAgency?.agencyId ? { agencyId: selectedAgency.agencyId } : {}),
      ...(selectedAgency?.agencyName ? { agencyName: selectedAgency.agencyName } : {}),
    };
    const phoneValidation: { [key: number]: RegExp } = {
      61: /^0[4-5]\d{8}$/,
      64: /^0[34679]\d{7}$/,
      1: /^0[34679]\d{7}$/,
    };
    const isValid = phoneValidation[dialCode]?.test(data.mobileNumber ?? '');
    setPhoneNumberError(isValid ? '' : 'Invalid Phone number');
    if (isValid)
      try {
        await createAgentFromSignUpMobileMutation({
          variables: {
            input: input,
          },
        });
        router.navigate('/signup-success');
      } catch (error) {
        if (error instanceof ApolloError) Alert.alert(error.message);
      }
  };

  const hasHitBottomView = topViewLayout.y + topViewLayout.height >= bottomViewLayout.y;

  return (
    <SafeAreaView className="bg-background dark:bg-background-dark">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="mx-6 mt-[63px] mb-[62px]">
          <View className="h-full justify-between">
            <ScrollView
              scrollEnabled={isKeyboardVisible || hasHitBottomView}
              contentContainerStyle={{ paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled">
              <View
                className="gap-5"
                onLayout={(event: LayoutChangeEvent) => {
                  const { x, y, width, height } = event.nativeEvent.layout;
                  setTopViewLayout({ x, y, width, height });
                }}>
                <View className="gap-8">
                  <View className="gap-[11px]">
                    <View className="gap-[30px]">
                      <Image
                        source={require('@/assets/images/sign-up-logo.png')}
                        style={{
                          width: scale(88),
                          height: scale(41),
                        }}
                      />
                      <Label
                        nativeID="sign-up-label"
                        className={`font-semibold is414:text-[22px] is320:text-2xl is375:text-[22px] is390:text-[22px] is428:text-2xl is430:text-2xl text-purple-500`}>
                        Sign Up
                      </Label>
                    </View>
                    <Label
                      nativeID="go-live-record-,-broadcast-&-share-for-free-label"
                      className={`font-normal is414:text-[13px] is320:text-sm is375:text-[13px] is390:text-[13px] is428:text-sm is430:text-sm text-[#272525]`}>
                      Go LIVE - record, list & share for FREE
                    </Label>
                  </View>
                  <View className="gap-[18px]">
                    <Controller
                      control={methods.control}
                      name="fullName"
                      render={({
                        field: { onChange, value },
                        fieldState: { error: stateError, invalid },
                      }) => {
                        return (
                          <InputFloatingLabel
                            placeholder="Full Name"
                            isInvalid={invalid}
                            errorMessage={stateError?.message}
                            value={value}
                            onChangeText={onChange}
                            keyboardType="default"
                          />
                        );
                      }}
                    />
                    <Controller
                      control={methods.control}
                      name="email"
                      render={({
                        field: { onChange, value },
                        fieldState: { error: stateError, invalid },
                      }) => {
                        return (
                          <InputFloatingLabel
                            placeholder="Email"
                            isInvalid={invalid}
                            errorMessage={stateError?.message}
                            value={value}
                            onChangeText={onChange}
                            keyboardType="email-address"
                          />
                        );
                      }}
                    />
                    <Controller
                      control={methods.control}
                      name="mobileNumber"
                      render={({ field: { onChange, value } }) => {
                        return (
                          <View className="flex-col">
                            <View className={'flex-row'}>
                              <View
                                className={cn(
                                  'flex-1 items-center flex-row bg-background-dark-100 dark:bg-background-dark-300 rounded-xl relative px-5 gap-2',
                                  phoneNumberError ? 'border border-red-500' : '',
                                )}>
                                <SelectCountryCode dialCode={dialCode} setDialCode={setDialCode} />
                                <View className={'flex-1'}>
                                  <Input
                                    placeholder="Phone Number"
                                    value={value || ''}
                                    onChangeText={(text) => {
                                      const isValidPhoneNumber = (
                                        dialCode: number,
                                        number: string,
                                      ) => {
                                        const regexMap: { [key: string]: RegExp } = {
                                          61: /^0[4-5]\d{8}$/,
                                          64: /^0[34679]\d{7}$/,
                                          1: /^0[34679]\d{7}$/,
                                        };
                                        return regexMap[dialCode]?.test(number);
                                      };
                                      const error =
                                        text && !isValidPhoneNumber(dialCode, text)
                                          ? 'Invalid Phone number'
                                          : '';
                                      setPhoneNumberError(error);
                                      onChange(text);
                                    }}
                                    keyboardType="numeric"
                                  />
                                </View>
                              </View>
                            </View>
                            {phoneNumberError && (
                              <Label
                                error={Boolean(phoneNumberError)}
                                nativeID="phone-number-error-label"
                                className="font-normal text-red-500 pt-2 pl-2">
                                {phoneNumberError}
                              </Label>
                            )}
                          </View>
                        );
                      }}
                    />
                    <SearchAgencies
                      selectedAgency={selectedAgency}
                      setSelectedAgency={setSelectedAgency}
                      setAgencies={setAgencies}
                      agencies={agencies}
                    />
                    <Controller
                      control={methods.control}
                      name="password"
                      render={({
                        field: { onChange, value },
                        fieldState: { error: stateError, invalid },
                      }) => {
                        return (
                          <InputFloatingLabel
                            placeholder="Password"
                            isInvalid={invalid}
                            errorMessage={stateError?.message}
                            textContentType={'password'}
                            value={value}
                            autoCapitalize={'none'}
                            onChangeText={onChange}
                          />
                        );
                      }}
                    />
                    <Controller
                      control={methods.control}
                      name="retypePassword"
                      render={({
                        field: { onChange, value },
                        fieldState: { error: stateError, invalid },
                      }) => {
                        return (
                          <InputFloatingLabel
                            placeholder="Retype Password"
                            isInvalid={invalid}
                            errorMessage={stateError?.message}
                            textContentType={'password'}
                            value={value}
                            autoCapitalize={'none'}
                            onChangeText={onChange}
                          />
                        );
                      }}
                    />
                  </View>
                </View>
                <View className="flex-row items-center pl-2">
                  <View className="flex-row items-center gap-2">
                    <Checkbox
                      className="w-4 h-4 rounded-[4px] border border-zinc-400"
                      checked={checked}
                      onCheckedChange={setChecked}
                    />
                    <View className="pr-0.5">
                      <Label
                        nativeID="accept-label"
                        className={`font-normal is414:text-[11px] is320:text-xs is375:text-[11px] is390:text-[11px] is428:text-xs is430:text-xs text-slate-400`}>
                        Accept
                      </Label>
                    </View>
                  </View>
                  <View className="relative">
                    <Label
                      nativeID="terms-of-service-label"
                      className={`font-normal is414:text-[11px] is320:text-xs is375:text-[11px] is390:text-[11px] is428:text-xs is430:text-xs text-zinc-400`}
                      onPress={redirectTermsPrivacy}>
                      Terms and Privacy
                    </Label>
                    <View className="border-b border-zinc-400 w-[84px] h-full absolute top-[-6px]" />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View
              className="gap-[30px]"
              onLayout={(event: LayoutChangeEvent) => {
                const { x, y, width, height } = event.nativeEvent.layout;
                setBottomViewLayout({ x, y, width, height });
              }}>
              <Button
                loading={!checked || loading}
                disabled={!checked || loading}
                className="h-[60px]a"
                color="custom"
                customColorClass={`${textBase(width)}a text-white font-medium text-lg`}
                onPress={methods.handleSubmit(onSubmit)}>
                Sign Up
              </Button>
              <View className="flex-row justify-center gap-2">
                <Text className={'text-foreground text-sm'}>Already have an account?</Text>
                <Link href={'/'}>
                  <Text className={'text-primary-800 text-sm font-semibold'}>Sign In</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
