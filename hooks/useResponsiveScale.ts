import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useDynamicBaseWidth = () => {
  const [baseWidth, setBaseWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    const updateBaseWidth = () => setBaseWidth(Dimensions.get('window').width);
    const subscription = Dimensions.addEventListener('change', updateBaseWidth);
    return () => subscription?.remove();
  }, []);
  return baseWidth;
};

const useResponsiveScale = () => {
  const baseWidth = useDynamicBaseWidth();
  return (size: number) => (Dimensions.get('window').width / baseWidth) * size;
};

export default useResponsiveScale;
