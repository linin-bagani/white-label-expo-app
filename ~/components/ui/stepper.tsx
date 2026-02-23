import { FC, JSX } from 'react';
import { View } from 'react-native';
import { Circle } from 'react-native-progress';
import { Separator } from './separator';
import { Text } from '~/components/ui/text';
import { cn } from '~/lib/utils';

interface IStepProps {
  step: number;
  label: string;
  content?: JSX.Element; // Add content property for rendering components
}

interface IStepperProps {
  defaultStep?: number;
  steps: IStepProps[];
  isCircular?: boolean;
}

const StepperAvatar: FC<{ step: number; isActive: boolean }> = ({ step, isActive }) => {
  return (
    <View
      className={cn(
        'flex items-center justify-center rounded-full w-10 h-10',
        isActive ? 'bg-primary' : 'bg-[#52525B]',
      )}>
      <Text className="text-white font-semibold">{step}</Text>
    </View>
  );
};

const DefaultStepper: FC<{
  defaultStep: number;
  steps: IStepProps[];
}> = ({ defaultStep, steps }) => {
  return steps.map((item, index) => {
    const isLastStep = index === steps.length - 1;
    const isPrevStep = defaultStep > item.step;
    const isActive = defaultStep === item.step || isPrevStep;
    return (
      <View key={`stepper-${index}`} className="flex flex-row items-center justify-start gap-2">
        <StepperAvatar step={item.step} isActive={isActive} />
        <Text className={cn('uppercase', isActive ? 'font-semibold' : 'font-normal')}>
          {item.label}
        </Text>
        {!isLastStep && <Separator className={cn('w-10', isActive ? 'bg-[#000000]' : '')} />}
      </View>
    );
  });
};

const CircularStepper: FC<{
  defaultStep: number;
  steps: IStepProps[];
}> = ({ defaultStep, steps }) => {
  const currentStep = steps.find((item) => item.step === defaultStep);
  const nextStep = steps.find((item) => item.step === defaultStep + 1);
  const progress = (currentStep?.step || 0) / steps.length;

  return (
    <View className="flex flex-row justify-between items-center gap-2 w-full">
      <View className="flex flex-col items-start gap-2">
        <Text className="font-semibold text-xl uppercase">{currentStep?.label}</Text>
        {!!nextStep && (
          <Text className="text-sm text-foreground-dark-300  capitalize">
            Next: {nextStep.label}
          </Text>
        )}
      </View>
      <Circle
        progress={progress}
        size={60}
        strokeCap="square"
        thickness={5}
        showsText
        color="#2563eb"
        unfilledColor="#a1a1aa"
        borderColor="transparent"
        formatText={() => (
          <Text className="text-sm text-foreground-dark-300">
            {currentStep?.step} of {steps.length}
          </Text>
        )}
      />
    </View>
  );
};

const Stepper: FC<IStepperProps> = ({ defaultStep = 1, steps, isCircular = false }) => {
  const currentStep = steps.find((step) => step.step === defaultStep);

  return (
    <View className="flex flex-col w-full">
      {/* Stepper Navigation */}
      <View className="flex flex-row flex-wrap items-center justify-start gap-2">
        {isCircular ? (
          <CircularStepper defaultStep={defaultStep} steps={steps} />
        ) : (
          <DefaultStepper defaultStep={defaultStep} steps={steps} />
        )}
      </View>

      {/* Step Content */}
      <View className="mt-6">
        {currentStep?.content ?? <Text className="">No content for this step.</Text>}
      </View>
    </View>
  );
};

export default Stepper;
