import React, { FC, useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { Text } from "~/components/ui/text";
import ButtonWithLoading from "@/components/button/ButtonWithLoading";
import {
  Dialog,
  DialogContentWithSafeAreaView,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button-2";
import SearchAgentsByNumber from "@/components/searchAgents/SearchAgentsByNumber";
import { MobileSignInSchema, MobileSignInSchemaType } from "@/types/FormTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface MobileFormProps {
  defaultAgentType: string;
  setAgentType: (type: string) => void;
}

const MobileForm: FC<MobileFormProps> = ({
  defaultAgentType,
  setAgentType,
}) => {
  const [isShowAgentPicker, setIsShowAgentPicker] = useState<boolean>(false);
  const { control, setValue, handleSubmit, setError } =
    useForm<MobileSignInSchemaType>({
      resolver: zodResolver(MobileSignInSchema),
      defaultValues: {
        agentType: defaultAgentType,
        countryCode: 61,
        mobileNumber: "",
      },
    });
  return (
    <>
      <Dialog
        open={isShowAgentPicker}
        onOpenChange={(value) => setIsShowAgentPicker(value)}
      >
        <DialogContentWithSafeAreaView
          overlayProps={{
            closeOnPress: false,
          }}
          className="w-screen max-w-sm p-4 bg-background dark:bg-background-dark border-0"
        >
          <DialogHeader>
            <DialogTitle>Select Account</DialogTitle>
          </DialogHeader>
        </DialogContentWithSafeAreaView>
      </Dialog>
      <View className="flex gap-4">
        <Text className="text-lg font-medium">Your mobile number:</Text>
        <SearchAgentsByNumber
          control={control}
          name="mobileNumber"
          rules={{ required: "Phone number is required" }}
          selectedAgentInfo={undefined}
          onSetError={(message: string) =>
            setError("mobileNumber", {
              type: "manual",
              message: message,
            })
          }
          onSelect={() => {}}
        />
        <View>
          <View className="gap-8 pt-4">
            <Text
              className={`text-md dark:text-foreground-light text-foreground-dark`}
            >
              We will be sending a One Time Password (OTP) to the mobile number
              you provided for verification
            </Text>
            <ButtonWithLoading
              onPress={() => {}}
              variant={"gradient"}
              size={"xl"}
              className={"w-full"}
              loading={false}
            >
              <Text>Send OTP</Text>
            </ButtonWithLoading>
            <View className="flex-row justify-center items-center gap-2">
              <Text className={"text-foreground text-sm"}>
                Don't have an account?
              </Text>
              <Button variant={"link"} onPress={() => {}}>
                <Text className={"text-sm font-semibold"}>Sign Up</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default MobileForm;
