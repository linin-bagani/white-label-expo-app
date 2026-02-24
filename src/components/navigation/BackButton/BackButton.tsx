import { ChevronLeft } from '~/lib/icons/ChevronLeft';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {
  navigation: any;
  onPress?: () => void;
};

const BackButton = (props: Props) => {
  const { navigation, onPress } = props;
  return (
    <HeaderBackButton
      label={'Back'}
      backImage={() => <ChevronLeft className={'text-zinc-50'} />}
      tintColor={'#FAfafa'}
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          navigation.goBack();
        }
      }}
    />
  );
};

export default BackButton;
