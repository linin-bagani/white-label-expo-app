import { FC, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';
import { SignInTypes } from '@/constants/SignIn';
import ErrorModal from '@/components/common/ErrorModal';
import Logo from '@/components/svg/Logo';
import { useTheme } from '@react-navigation/native';
import { useBrand } from 'hooks/useBrand';
import { getBrandContent } from 'utils/brandUtils';
import MobileForm from './Login/components/MobileForm';
import { useColorScheme } from '~/lib/useColorScheme';

const Login: FC = () => {
  const { colors } = useTheme();
  const { isDarkColorScheme } = useColorScheme();
  const { brandName, themeColor } = useBrand();
  const { welcomeMessage } = getBrandContent(brandName);

  // const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [isShowErrorModal, setIsShowErrorModal] = useState(false);
  const [errorMessage] = useState<string>('');
  const [agentType, setAgentType] = useState<string>(SignInTypes.BA);


  return (
    <>
      <SafeAreaView className={cn('flex-1 bg-white dark:bg-background-dark')}>
        <View className='gap-3 dark p-6'>
          <View className="gap-[32px]">
            <View>
              <Logo color={colors.primary} useBrandLogo={true}
              textColor={isDarkColorScheme ? '#eae8e6' : '#282522'}
              />
            </View>
            <Text
              className={`text-3xl pb-8 font-semibold dark:text-foreground-light text-foreground-dark`}
              >
              {welcomeMessage}
            </Text>
          </View>
        </View>
        <View className={'flex-1 h-full flex justify-center1 p-6'}>
          <MobileForm defaultAgentType={agentType} setAgentType={setAgentType} />
        </View>
      </SafeAreaView>
      <ErrorModal
        visible={isShowErrorModal}
        message={errorMessage}
        onOpenChange={setIsShowErrorModal}
      />
    </>
  );
};

export default Login;
