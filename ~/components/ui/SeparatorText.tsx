import { View, Text } from 'react-native';

interface SeparatorWithTextProps {
  text?: string;
  lineColor?: string;
}

export default function SeparatorWithText({
  text = 'or',
  lineColor = 'bg-gray-300',
}: SeparatorWithTextProps) {
  return (
    <View className="flex-row items-center py-2">
      <View className={`flex-1 h-px ${lineColor}`} />
      <Text className="mx-2 text-gray-500">{text}</Text>
      <View className={`flex-1 h-px ${lineColor}`} />
    </View>
  );
}
