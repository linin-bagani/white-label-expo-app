import * as React from 'react';
import { Animated, Pressable, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { cn } from '~/lib/utils';
import { Text } from '~/components/ui/text';

interface DatePickerProps {
  defaultValue?: Date | null;
  placeholder?: string;
  error?: string;
  onChange?: (date: Date) => void;
  topOutputRange?: number[];
  fontSizeOutputRange?: number[];
  disabled?: boolean;
}

const DatePicker = React.forwardRef<any, DatePickerProps>(
  (
    {
      defaultValue = null,
      placeholder = 'dd/mm/yyyy',
      error,
      onChange = () => {},
      topOutputRange = [16, 12], // Floating label animation values
      fontSizeOutputRange = [14, 10],
      disabled = false,
    },
    ref,
  ) => {
    const floatingLabelAnimation = React.useRef(new Animated.Value(0)).current;
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
      defaultValue ?? undefined,
    );
    const [showPicker, setShowPicker] = React.useState(false);

    const formattedDate = selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '';

    const handleFocus = (): void => {
      Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    };

    const handleBlur = (): void => {
      if (!selectedDate) {
        Animated.timing(floatingLabelAnimation, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }).start();
      }
    };

    const showDatePicker = () => {
      setShowPicker(true);
    };

    const hideDatePicker = () => {
      setShowPicker(false);
    };

    const handleConfirm = (date: any) => {
      setSelectedDate(date);
      onChange(date);
      hideDatePicker();
    };

    const floatingLabelStyle = {
      top: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: topOutputRange,
      }),
      fontSize: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: fontSizeOutputRange,
      }),
      color: floatingLabelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [error ? '#ef4444' : '#a1a1aa', error ? '#ef4444' : '#71717A'],
      }),
    };

    React.useEffect(() => {
      if (selectedDate) {
        handleFocus();
      } else {
        handleBlur();
      }
    }, [selectedDate]);

    return (
      <View
        className={cn(
          'bg-background-dark-100 dark:bg-background-dark-300 rounded-xl px-5 h-[60px]',
          disabled ? 'pointer-events-none' : 'pointer-events-auto',
        )}>
        <View className={cn('flex-1', error ? 'border border-red-500' : '')}>
          <Animated.Text
            className={cn('absolute text-zinc-500 dark:text-zinc-500 font-normal')}
            style={floatingLabelStyle}>
            {placeholder}
          </Animated.Text>
          <Pressable
            onPress={showDatePicker}
            className="w-full h-full pt-9 text-xl text-primary-400">
            <Text
              // style={{ color: selectedDate ? '#000' : '#aaa' }}
              className={'text-foreground dark:text-foreground-light'}>
              {formattedDate}
            </Text>
          </Pressable>
        </View>
        <DateTimePickerModal
          date={selectedDate}
          isVisible={showPicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        {error && <Text className="text-red-500 mt-1">{error}</Text>}
      </View>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
