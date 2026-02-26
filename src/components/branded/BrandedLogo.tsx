import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '@/components/svg/Logo';
import { useBrand } from 'hooks/useBrand';

interface BrandedLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

/**
 * BrandedLogo - A brand-aware logo component
 *
 * Automatically uses the brand's logo from config if available,
 * otherwise falls back to the default SVG logo.
 *
 * @param size - Logo size (small: 100x20, medium: 164x30, large: 246x45)
 * @param showText - Whether to show brand name below logo
 */
const BrandedLogo: React.FC<BrandedLogoProps> = ({
  size = 'medium',
  showText = false
}) => {
  const { brandName, themeColor } = useBrand();

  const sizeMap = {
    small: { width: 100, height: 20 },
    medium: { width: 164, height: 30 },
    large: { width: 246, height: 45 },
  };

  const dimensions = sizeMap[size];

  return (
    <View style={styles.container}>
      <Logo
        width={dimensions.width}
        height={dimensions.height}
        textColor={themeColor}
        useBrandLogo={true}
      />
      {showText && (
        <View style={styles.textContainer}>
          <View
            style={[
              styles.brandBadge,
              { backgroundColor: themeColor }
            ]}
          >
            <View style={styles.badgeDot} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  badgeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white',
    margin: 2,
  },
});

export default BrandedLogo;
