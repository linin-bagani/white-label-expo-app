import React from 'react';
import { View, Text, Modal as ReusableModal, Pressable, ScrollView } from 'react-native';
import { cn } from '~/lib/utils'; // For conditional classNames

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ReusableModalProps> = ({ isOpen, onClose, title, children, className }) => {
  return (
    <ReusableModal visible={isOpen} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 justify-center items-center bg-black/50 p-2">
        <ScrollView horizontal={false}>
          <View className={cn('bg-white w-11/12 p-6 rounded-lg shadow-lg w-fit ')}>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">{title}</Text>
              <Pressable onPress={onClose}>
                <Text className="text-gray-600">X</Text>
              </Pressable>
            </View>
            <View className={className}>{children}</View>
          </View>
        </ScrollView>
      </View>
    </ReusableModal>
  );
};

export default Modal;
