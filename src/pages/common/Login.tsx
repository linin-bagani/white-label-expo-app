import { FC, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { SignInTypes } from "@/constants/SignIn";
import ErrorModal from "@/components/common/ErrorModal/ErrorModal";
import Logo from "@/components/svg/Logo";
import { useTheme } from "@react-navigation/native";
// import Mobil
import { useColorScheme } from "~/lib/useColorScheme";
// import useAuth
import { Redirect } from "expo-router";


const Login: FC = () => {
  const { colors } = useTheme();
  const { isDarkColorScheme } = useColorScheme();
  return (
    <>
      <SafeAreaView className={cn('flex-1 bg-white dark:bg-bacground-dark')} >
        <View className="gap-3 dark p-6">
          <View className="gap-[32px]">
            <View>
              <Logo  color={colors.primary} textColor={isDarkColorScheme ? 'white' : '#0c0B48'}/>
            </View>
            <Text className="text-3xl pb-8 font-semibold dark:text-foreground-light text-foreground-dark">
              Welcome
            </Text>
          </View>
        </View>
        <View className="flex-1 h-full flex justify-center p-6">

        </View>
      </SafeAreaView>
    </>
  )
}

export default Login;
