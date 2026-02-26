# 🎨 Logo Customization Guide

**How to customize brand logos in the white-label app**

---

## 📋 Overview

The app has **3 brand-specific logos**:

| Brand | Logo Component | Text | File |
|-------|---------------|------|------|
| **Brand One** | Default (HOMEOWNER) | "HOMEOWNER" | `Logo.tsx` (embedded) |
| **Brand Two** | RealtyLogo | "REALTY" | `RealtyLogo.tsx` |
| **Brand Three** | HousingLogo | "HOUSING" | `HousingLogo.tsx` |

---

## 🏠 Current Logo Structure

### Brand One (Default)
- **Type**: Vector path SVG (not editable as text)
- **Contains**: Purple "H" icon + "HOMEOWNER" text
- **File**: `src/components/svg/Logo.tsx` (DefaultLogoSvg function)
- **Limitation**: Text is drawn as paths, cannot be easily changed

### Brand Two (Realty)
- **Type**: Text-based SVG (easily editable)
- **Contains**: Purple "R" icon + "REALTY" text
- **File**: `src/components/svg/RealtyLogo.tsx`
- **Customization**: Just edit the text string

### Brand Three (Housing)
- **Type**: Text-based SVG (easily editable)
- **Contains**: Purple "H" icon + "HOUSING" text
- **File**: `src/components/svg/HousingLogo.tsx`
- **Customization**: Just edit the text string

---

## ✏️ How to Customize Logos

### Option 1: Edit Text-Based Logos (Easy)

**For Brand 2 (Realty) and Brand 3 (Housing):**

1. **Open the logo file**
   ```bash
   # For Brand 2
   src/components/svg/RealtyLogo.tsx
   
   # For Brand 3
   src/components/svg/HousingLogo.tsx
   ```

2. **Find the text content**
   ```tsx
   // RealtyLogo.tsx - Line 19
   <SvgText 
     x="28" 
     y="20" 
     fontSize="18" 
     fontWeight="600" 
     fill={textColor}
     fontFamily="System"
   >
     REALTY  {/* ← Change this text */}
   </SvgText>
   ```

3. **Replace with your brand name**
   ```tsx
   // Example: Change "REALTY" to "PROPERTIES"
   <SvgText ...>
     PROPERTIES
   </SvgText>
   ```

4. **Adjust styling if needed**
   ```tsx
   // Change font size
   fontSize="16"
   
   // Change font family
   fontFamily="Helvetica"
   
   // Change font weight
   fontWeight="bold"
   ```

---

### Option 2: Replace with Custom SVG Files (Recommended for Production)

**Steps:**

1. **Get your logo as SVG or PNG**
   - Recommended size: 164x30 pixels (or scalable SVG)
   - For PNG: Use @2x and @3x versions for retina displays

2. **Add logo to brand assets**
   ```bash
   # Copy your logo files
   cp your-brand-logo.svg src/app/config/brand2/assets/logo.svg
   cp your-brand-logo.png src/app/config/brand2/assets/logo@2x.png
   cp your-brand-logo.png src/app/config/brand2/assets/logo@3x.png
   ```

3. **Update brand config**
   ```json
   // src/app/config/brand2/app.json
   {
     "expo": {
       "extra": {
         "logoPath": "./assets/logo.png"
       }
     }
   }
   ```

4. **Update Logo.tsx to load image**
   ```tsx
   // In Logo.tsx, modify the useBrandLogo logic
   if (useBrandLogo && logoPath) {
     return (
       <Image
         source={require('@/assets/logo.png')}
         style={{ width: 164, height: 30 }}
         resizeMode="contain"
       />
     );
   }
   ```

---

### Option 3: Create New Text-Based Logo Component

**For a completely new brand:**

1. **Create new logo component**
   ```bash
   touch src/components/svg/NewBrandLogo.tsx
   ```

2. **Copy template**
   ```tsx
   import Svg, { Text as SvgText } from 'react-native-svg';
   import { SvgProps } from 'react-native-svg';

   type Props = SvgProps & {
     textColor?: string;
   };

   export default function NewBrandLogo({ textColor = 'white', ...rest }: Props) {
     return (
       <Svg width="164" height="30" viewBox="0 0 164 30" fill="none" {...rest}>
         {/* Icon */}
         <SvgText x="0" y="22" fontSize="24" fontWeight="bold">
           <TSpan fill="#7C3AED">N</TSpan> {/* Your icon letter */}
         </SvgText>
         
         {/* Brand Name */}
         <SvgText 
           x="28" 
           y="20" 
           fontSize="18" 
           fontWeight="600" 
           fill={textColor}
           fontFamily="System"
         >
           NEW BRAND {/* Your brand name */}
         </SvgText>
       </Svg>
     );
   }
   ```

3. **Add to Logo.tsx switch statement**
   ```tsx
   // In Logo.tsx
   import NewBrandLogo from './NewBrandLogo';

   switch (brandName) {
     case 'Brand Four':
       return <NewBrandLogo textColor={textColor} {...rest} />;
     // ... other cases
   }
   ```

---

## 🎨 Logo Specifications

### Dimensions
- **Width**: 164px
- **Height**: 30px
- **Aspect Ratio**: 5.47:1
- **Safe Area**: Keep text within 164x30 viewBox

### Colors
- **Icon**: `#7C3AED` (Purple - consistent across brands)
- **Text**: Dynamic (uses `textColor` prop, typically brand theme color)
- **Background**: Transparent

### Typography
- **Font Family**: System (iOS: San Francisco, Android: Roboto)
- **Font Size**: 18px
- **Font Weight**: 600 (Semi-bold)
- **Letter Spacing**: Default (adjust with `x` position if needed)

### File Formats

| Format | Use Case | Pros | Cons |
|--------|----------|------|------|
| **SVG (text)** | Development, prototyping | Editable, scalable | Font rendering varies |
| **SVG (paths)** | Production | Consistent rendering | Hard to edit |
| **PNG** | Production | Easy to implement | Not scalable, multiple files needed |
| **PDF** | Production | Scalable, single file | Less support in RN |

---

## 🔧 Troubleshooting

### Issue: Logo text looks blurry

**Solution:**
```tsx
// Increase font size and scale down
<SvgText fontSize="36" style={{ transform: [{ scale: 0.5 }] }}>
```

### Issue: Text is cut off

**Solution:**
```tsx
// Adjust viewBox to give more space
<Svg viewBox="0 0 200 30"> {/* Increase width from 164 to 200 */}

// Or reduce font size
<SvgText fontSize="16"> {/* Reduce from 18 to 16 */}
```

### Issue: Different fonts on iOS and Android

**Solution:**
```tsx
// Specify explicit font family
<SvgText fontFamily="Helvetica"> {/* iOS */}
<SvgText fontFamily="Roboto"> {/* Android */}

// Or use a cross-platform font
<SvgText fontFamily="System"> {/* Uses platform default */}
```

### Issue: Long brand name doesn't fit

**Solution:**
```tsx
// Option 1: Reduce font size
<SvgText fontSize="14">

// Option 2: Adjust letter spacing
<SvgText style={{ letterSpacing: -1 }}>

// Option 3: Increase viewBox width
<Svg viewBox="0 0 200 30">

// Option 4: Use abbreviation
<SvgText>BRAND NAME</SvgText> {/* Instead of "FULL BRAND NAME HERE" */}
```

---

## 📱 Testing Logos

### Test on All Brands

```bash
# Test Brand 1 (Default - HOMEOWNER)
npm run dev:brand1

# Test Brand 2 (Realty)
npm run dev:brand2

# Test Brand 3 (Housing)
npm run dev:brand3
```

### Check on Both Platforms

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

### Verify in Different Sizes

```tsx
// Test different sizes
<Logo size="small" />   {/* 100x20 */}
<Logo size="medium" />  {/* 164x30 */}
<Logo size="large" />   {/* 246x45 */}
```

---

## 🎯 Best Practices

### DO ✅

1. **Use text-based logos for development**
   - Easy to edit and customize
   - Quick to prototype

2. **Use SVG/PNG logos for production**
   - Consistent rendering across devices
   - Professional appearance

3. **Test on multiple devices**
   - Different screen densities
   - Different font rendering

4. **Keep brand name concise**
   - 6-10 characters ideal
   - Avoid very long names

### DON'T ❌

1. **Don't edit vector paths manually**
   - Use design tools (Figma, Illustrator) instead
   - Paths are mathematical curves, not text

2. **Don't use very small font sizes**
   - Minimum 14px for readability
   - Test on actual devices

3. **Don't forget dark mode**
   - Ensure logo works on light and dark backgrounds
   - Use `textColor` prop appropriately

4. **Don't use copyrighted fonts**
   - Stick to system fonts or open-source fonts
   - Check font licenses

---

## 🛠️ Tools for Logo Creation

### Free Tools
- **Figma** - Design and export SVG logos
- **Inkscape** - Open-source vector editor
- **Canva** - Online logo maker

### Paid Tools
- **Adobe Illustrator** - Professional vector editing
- **Sketch** - Mac-only design tool
- **Affinity Designer** - One-time purchase alternative

### Export Settings
```
Format: SVG 1.1 or PNG
Size: 164x30px (base), 328x60px (@2x), 492x90px (@3x)
Color Space: sRGB
Background: Transparent
```

---

## 📞 Need Help?

**Common Questions:**

**Q: Can I use an image file instead of SVG?**
A: Yes! PNG works great. See Option 2 above.

**Q: How do I animate the logo?**
A: Use `react-native-reanimated` with the SVG component, or use Lottie for complex animations.

**Q: Can I have different icons for each brand?**
A: Yes! Edit the `<TSpan>` in each logo component or use different SVG icons.

**Q: The logo looks different on web vs native. Why?**
A: Font rendering varies. Use SVG paths for consistent rendering or specify web fonts.

---

**Last Updated:** February 26, 2026  
**Related Files:** `Logo.tsx`, `RealtyLogo.tsx`, `HousingLogo.tsx`
