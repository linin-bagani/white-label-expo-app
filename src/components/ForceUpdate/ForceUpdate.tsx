import { ActivityIndicator, Linking, Platform, View } from 'react-native';
import React, { useState } from 'react';
import * as Application from 'expo-application';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Dialog, DialogClose, DialogContent, DialogFooter } from '~/components/ui/dialog';
import { Label } from '~/components/ui/label';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button-2';
import UpgradeNow from '@/components/svg/UpgradeNow';

// import { useAppVersionByNameQuery } from '@/operations/__generated__/AppVersion.generated';

const ForceUpdate = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [versionStatus, setVersionStatus] = useState<'loading' | 'updated' | 'unupdated'>(
    'updated',
  );

  // useAppVersionByNameQuery({
  //   variables: {
  //     name: Platform.OS === 'ios' ? 'HOMEOWNER_IOS' : 'HOMEOWNER_ANDROID',
  //   },
  //   onCompleted: (data) => {
  //     if (data?.appVersionByName) {
  //       const currentVersion = parseInt(
  //         Application.nativeApplicationVersion?.replaceAll('.', '') ?? '',
  //       );
  //       const newVersion = parseInt(data?.appVersionByName.version?.replaceAll('.', '') ?? '');
  //       // console.log(`currentVersion(${Application.nativeApplicationVersion}):`, currentVersion, `newVersion(${data?.appVersionByName.version}):`, newVersion);
  //       // only flag if it's less than the version on app db.
  //       if (currentVersion < newVersion) {
  //         setVersionStatus('unupdated');
  //       } else {
  //         setVersionStatus('updated');
  //       }
  //     } else {
  //       setVersionStatus('updated');
  //     }
  //   },
  //   onError: (err) => {
  //     setVersionStatus('updated');
  //   },
  // });

  return (
    <>
      {versionStatus === 'updated' ? (
        children
      ) : (
        <SafeAreaView className={'items-center justify-center flex-1'}>
          <ActivityIndicator />
        </SafeAreaView>
      )}
      <Dialog
        open={versionStatus === 'unupdated'}
        onOpenChange={() => {
          setVersionStatus('updated');
        }}>
        <DialogContent className="max-w-[359px] rounded-xl px-12 py-10" showClose={false}>
          <View className="gap-[32px]">
            <View className="gap-8">
              <View className="gap-[19px] items-center">
                <View className="items-center gap-6">
                  <UpgradeNow />
                  <Label
                    nativeID="upgrade-now-label"
                    className="font-bold is414:text-[22px] is320:text-2xl is375:text-[22px] is390:text-[22px] is428:text-2xl is430:text-2xl text-foreground">
                    Upgrade Now
                  </Label>
                </View>
                <Label
                  nativeID="please-update-the-realty-live-app-to-a-new-version-label"
                  className="text-center font-light is414:text-[13px] is320:text-sm is375:text-[13px] is390:text-[13px] is428:text-sm is430:text-sm text-foreground">
                  Please update the Homeowner app to a new version.
                </Label>
              </View>
            </View>
          </View>
          <DialogFooter className="items-center justify-center mt-8">
            <Button
              variant={'ghost'}
              onPress={() => {
                setVersionStatus('updated');
              }}>
              <Text>Close</Text>
            </Button>
            <DialogClose asChild>
              <Button
                size={'lg'}
                className="w-full"
                onPress={async () => {
                  if (Platform.OS === 'ios') {
                    Linking.openURL('https://apps.apple.com/us/app/homeowner/id6742207349');
                  } else {
                    Linking.openURL(
                      'https://play.google.com/store/apps/details?id=com.realtymediagroup.homeowner',
                    );
                  }
                }}>
                <Text className="">Update Now</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForceUpdate;
