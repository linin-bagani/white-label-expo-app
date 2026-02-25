import { FC } from "react";
import { Stack } from "expo-router";
import { useStackBack } from '@/context/StackBackContext';
import BackButton from "../navigation/BackButton/BackButton";
import { useColorScheme } from "~/lib/useColorScheme";

const StackRoutes: FC = () => {
  const { back } = useStackBack();
  const { isDarkColorScheme } = useColorScheme();

  return (
    <Stack
      screenOptions={({ navigation }) => ({
        contentStyle: {
          backgroundColor: '#ffff',
        },
        headerStyle: {
          backgroundColor: isDarkColorScheme ? '#272525' : '#fafafa',
        },
        headerShadowVisible: false,
        headerShown: true,
        animation: back ? 'slide_from_left' : 'slide_from_right',
        headerLeft: () => <BackButton navigation={navigation} />,
        gestureEnabled: false,
      })}
      initialRouteName="login"
    >
      <Stack.Screen
        key={`index`}
        name={'index'}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        key={`login`}
        name={'login'}
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackRoutes;
