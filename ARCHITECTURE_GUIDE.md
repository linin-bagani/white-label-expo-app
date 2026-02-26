# 🏗️ White-Label Architecture Guide

**For Developers** - How to work with and extend the white-label branding system

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Where to Add Brand-Specific Data](#where-to-add-brand-specific-data)
3. [Adding a New Brand](#adding-a-new-brand)
4. [Accessing Brand Data in Components](#accessing-brand-data-in-components)
5. [Best Practices](#best-practices)
6. [Common Patterns](#common-patterns)
7. [Troubleshooting](#troubleshooting)

---

## 📌 Overview

This app supports **multiple branded versions** from a single codebase. Each brand has:
- Unique name and identity
- Custom theme colors
- Brand-specific assets (logos, icons)
- Custom API endpoints
- Unique content and messaging
- Separate bundle IDs for app stores

**Current Brands:**
| Brand | Color | Bundle ID | Config Location |
|-------|-------|-----------|-----------------|
| Brand One | Green | `com.brandone.app` | `src/app/config/brand1/` |
| Brand Two | Orange | `com.brandtwo.app` | `src/app/config/brand2/` |
| Brand Three | Red | `com.brandthree.app` | `src/app/config/brand3/` |

---

## 📍 Where to Add Brand-Specific Data

### Decision Matrix

```
Is it a simple value (string, number, boolean)?
├─ YES → Store in app.json → extra
│  └─ Examples: themeColor, feature flags, single URLs
│
└─ NO → Store in brandUtils.ts
   └─ Examples: API endpoint objects, content arrays, complex configs
```

---

### Option 1: `app.json` → `extra` (Simple Values)

**Location:** `src/app/config/brand{1,2,3}/app.json`

**Best for:**
- ✅ Theme colors
- ✅ Feature flags (true/false)
- ✅ Single URLs
- ✅ Numeric configurations
- ✅ Simple strings

**Example:**
```json
{
  "expo": {
    "name": "Brand One",
    "slug": "brand-one",
    "version": "1.0.0",
    "extra": {
      "themeColor": "#00FF00",
      "logoPath": "./assets/logo.svg",
      "apiUrl": "https://api.brandone.com/v1",
      "supportEmail": "support@brandone.com",
      "maxUploadSize": 10485760,
      "enableChatFeature": true,
      "enableVideoCalls": false,
      "sessionTimeout": 3600
    }
  }
}
```

**How to Access:**
```typescript
// Method 1: Direct access (quick, but not type-safe)
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl;
const enableChat = Constants.expoConfig?.extra?.enableChatFeature;

// Method 2: Via useBrand hook (recommended, see below)
import { useBrand } from '@/hooks/useBrand';

const { apiUrl, enableChatFeature } = useBrand();
```

---

### Option 2: `brandUtils.ts` (Complex Data)

**Location:** `utils/brandUtils.ts`

**Best for:**
- ✅ Multiple API endpoints per brand
- ✅ Complex objects/arrays
- ✅ Content that needs TypeScript types
- ✅ Links and URLs that change frequently
- ✅ Feature lists

**Example:**
```typescript
// utils/brandUtils.ts

export const getBrandApiUrls = (brandName: BrandName) => {
  const apiUrls: Record<BrandName, { base: string; auth: string; users: string }> = {
    "Brand One": {
      base: "https://api.brandone.com/v1",
      auth: "https://auth.brandone.com",
      users: "https://users.brandone.com",
    },
    "Brand Two": {
      base: "https://api.brandtwo.com/v1",
      auth: "https://auth.brandtwo.com",
      users: "https://users.brandtwo.com",
    },
    "Brand Three": {
      base: "https://api.brandthree.com/v1",
      auth: "https://auth.brandthree.com",
      users: "https://users.brandthree.com",
    },
  };
  return apiUrls[brandName] || apiUrls["Brand One"];
};

export const getBrandLinks = (brandName: BrandName) => {
  const links: Record<BrandName, { privacy: string; terms: string; help: string }> = {
    "Brand One": {
      privacy: "https://brandone.com/privacy",
      terms: "https://brandone.com/terms",
      help: "https://help.brandone.com",
    },
    "Brand Two": {
      privacy: "https://brandtwo.com/privacy-policy",
      terms: "https://brandtwo.com/terms-of-service",
      help: "https://support.brandtwo.com",
    },
    "Brand Three": {
      privacy: "https://brandthree.com/legal/privacy",
      terms: "https://brandthree.com/legal/terms",
      help: "https://brandthree.com/help",
    },
  };
  return links[brandName] || links["Brand One"];
};

export const getBrandFeatures = (brandName: BrandName) => {
  const features: Record<BrandName, string[]> = {
    "Brand One": ["Feature A", "Feature B", "Feature C"],
    "Brand Two": ["Premium X", "Premium Y", "Premium Z"],
    "Brand Three": ["Exclusive 1", "Exclusive 2", "Exclusive 3"],
  };
  return features[brandName] || features["Brand One"];
};
```

**How to Access:**
```typescript
import { useBrand } from '@/hooks/useBrand';
import { getBrandApiUrls, getBrandLinks, getBrandFeatures } from '@/utils/brandUtils';

const { brandName } = useBrand();
const apiUrls = getBrandApiUrls(brandName);
const links = getBrandLinks(brandName);
const features = getBrandFeatures(brandName);

// Usage
fetch(`${apiUrls.base}/users`);
Linking.openURL(links.privacy);
```

---

## ➕ Adding a New Brand

### Step 1: Create Brand Configuration

```bash
# Create brand directory
mkdir -p src/app/config/brand4/assets
```

**File:** `src/app/config/brand4/app.json`
```json
{
  "expo": {
    "name": "Brand Four",
    "slug": "brand-four",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "scheme": "brandfour",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.brandfour.app"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.brandfour.app",
      "edgeToEdgeEnabled": true,
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "themeColor": "#0000FF",
      "logoPath": "./assets/logo.svg"
    }
  }
}
```

### Step 2: Add Brand Assets

Copy required assets to `src/app/config/brand4/assets/`:
- `icon.png` (1024x1024)
- `splash-icon.png` (1242x2436)
- `adaptive-icon.png` (1024x1024)
- `favicon.png` (48x48)
- `logo.svg` (or .png)

### Step 3: Update `brandUtils.ts`

```typescript
// utils/brandUtils.ts

// Update the BrandName type
export type BrandName = "Brand One" | "Brand Two" | "Brand Three" | "Brand Four";

// Update all brand-specific functions
export const getBrandContent = (brandName: BrandName) => {
  const contentMap: Record<BrandName, { welcomeMessage: string; features: string[]; footerText: string }> = {
    "Brand One": { /* ... */ },
    "Brand Two": { /* ... */ },
    "Brand Three": { /* ... */ },
    "Brand Four": {
      welcomeMessage: "Welcome to Brand Four!",
      features: ["Feature X", "Feature Y"],
      footerText: "© Brand Four 2026",
    },
  };
  return contentMap[brandName] || contentMap["Brand One"];
};
```

### Step 4: Update `useBrand.ts`

```typescript
// hooks/useBrand.ts

export type BrandName = "Brand One" | "Brand Two" | "Brand Three" | "Brand Four";
```

### Step 5: Add Build Scripts

**File:** `package.json`
```json
{
  "scripts": {
    "build:brand4": "node build-brand.js brand4",
    "dev:brand4": "npm run build:brand4 && expo start"
  }
}
```

### Step 6: Test

```bash
npm run dev:brand4
```

---

## 🔌 Accessing Brand Data in Components

### Pattern 1: Using `useBrand()` Hook

```typescript
import { useBrand } from '@/hooks/useBrand';

const MyComponent = () => {
  const { brandName, brandSlug, themeColor, logoPath } = useBrand();
  
  return (
    <View style={{ backgroundColor: themeColor }}>
      <Text>{brandName}</Text>
    </View>
  );
};
```

### Pattern 2: Using Utility Functions

```typescript
import { useBrand } from '@/hooks/useBrand';
import { getBrandLinks, getBrandApiUrls } from '@/utils/brandUtils';

const MyComponent = () => {
  const { brandName } = useBrand();
  const links = getBrandLinks(brandName);
  const apiUrls = getBrandApiUrls(brandName);
  
  return (
    <View>
      <Button onPress={() => Linking.openURL(links.help)}>
        Help
      </Button>
    </View>
  );
};
```

### Pattern 3: Accessing `extra` Fields

```typescript
import Constants from 'expo-constants';

const MyComponent = () => {
  const enableChat = Constants.expoConfig?.extra?.enableChatFeature;
  const apiUrl = Constants.expoConfig?.extra?.apiUrl;
  
  return (
    <View>
      {enableChat && <ChatButton />}
    </View>
  );
};
```

### Pattern 4: Extending `useBrand()` Hook (Recommended)

Update `hooks/useBrand.ts` to include extra fields:

```typescript
// hooks/useBrand.ts
import Constants from "expo-constants";

export type BrandName = "Brand One" | "Brand Two" | "Brand Three";

export interface BrandInfo {
  brandName: BrandName;
  brandSlug: string;
  themeColor: string;
  logoPath?: string;
  // Add extra fields
  apiUrl?: string;
  supportEmail?: string;
  enableChatFeature?: boolean;
}

export const useBrand = (): BrandInfo => {
  const appName = Constants.expoConfig?.name as BrandName;
  const slug = Constants.expoConfig?.slug;
  const extra = Constants.expoConfig?.extra;

  return {
    brandName: appName || "Brand One",
    brandSlug: slug || "brand-one",
    themeColor: extra?.themeColor || "#007AFF",
    logoPath: extra?.logoPath,
    apiUrl: extra?.apiUrl,
    supportEmail: extra?.supportEmail,
    enableChatFeature: extra?.enableChatFeature,
  };
};
```

Now access all in one place:
```typescript
const { themeColor, apiUrl, enableChatFeature, supportEmail } = useBrand();
```

---

## ✅ Best Practices

### DO ✅

1. **Use `brandUtils.ts` for complex data**
   ```typescript
   // Good
   const apiUrls = getBrandApiUrls(brandName);
   ```

2. **Keep `app.json` for simple config**
   ```json
   // Good
   { "extra": { "themeColor": "#00FF00" } }
   ```

3. **Add TypeScript types for new brand data**
   ```typescript
   type BrandLinks = { privacy: string; terms: string };
   ```

4. **Test all brands when adding features**
   ```bash
   npm run dev:brand1
   npm run dev:brand2
   npm run dev:brand3
   ```

5. **Use the `useBrand()` hook consistently**
   ```typescript
   // Good
   const { themeColor } = useBrand();
   ```

### DON'T ❌

1. **Don't hardcode brand-specific values**
   ```typescript
   // Bad
   const color = "#00FF00"; // Hardcoded green
   
   // Good
   const { themeColor } = useBrand();
   ```

2. **Don't store complex objects in `app.json`**
   ```json
   // Bad - too complex
   { "extra": { "apiEndpoints": { "base": "...", "auth": "..." } } }
   
   // Good - use brandUtils.ts
   ```

3. **Don't forget to update all brand functions**
   ```typescript
   // Bad - missing Brand Three
   if (brandName === "Brand One") { /* ... */ }
   
   // Good - use switch or Record
   ```

4. **Don't access `Constants.expoConfig` directly everywhere**
   ```typescript
   // Bad - scattered access
   const color = Constants.expoConfig.extra.themeColor;
   
   // Good - use hook
   const { themeColor } = useBrand();
   ```

---

## 🔧 Common Patterns

### Pattern 1: Brand-Specific API Calls

```typescript
// utils/brandUtils.ts
export const getBrandApiConfig = (brandName: BrandName) => ({
  baseURL: `https://api.${brandName.toLowerCase().replace(' ', '')}.com/v1`,
  timeout: 5000,
  headers: {
    'X-Brand': brandName,
  },
});

// Component
const { brandName } = useBrand();
const apiConfig = getBrandApiConfig(brandName);
const api = axios.create(apiConfig);
```

### Pattern 2: Brand Feature Flags

```typescript
// app.json
{
  "extra": {
    "features": {
      "chat": true,
      "videoCalls": false,
      "aiAssistant": true
    }
  }
}

// Component
const features = Constants.expoConfig?.extra?.features;
if (features?.chat) {
  return <ChatButton />;
}
```

### Pattern 3: Brand-Specific Navigation

```typescript
// utils/brandUtils.ts
export const getBrandNavConfig = (brandName: BrandName) => {
  const configs = {
    "Brand One": { showHome: true, showProfile: true },
    "Brand Two": { showHome: true, showProfile: false },
    "Brand Three": { showHome: false, showProfile: true },
  };
  return configs[brandName];
};

// Navigation component
const { brandName } = useBrand();
const navConfig = getBrandNavConfig(brandName);

{navConfig.showHome && <Stack.Screen name="home" />}
```

### Pattern 4: Brand-Specific Styling

```typescript
// components/branded/BrandedCard.tsx
const BrandedCard = () => {
  const { themeColor } = useBrand();
  
  return (
    <View style={[
      styles.card,
      { 
        borderTopColor: themeColor,
        borderTopWidth: 4,
      }
    ]}>
      {/* content */}
    </View>
  );
};
```

---

## 🐛 Troubleshooting

### Issue: Brand colors not showing

**Check:**
1. Did you run the build script? `npm run dev:brandX`
2. Is `themeColor` defined in `app.json` → `extra`?
3. Are you using `useBrand()` hook correctly?

**Solution:**
```bash
# Clear cache and rebuild
npx expo start -c
npm run dev:brand1
```

---

### Issue: TypeScript errors with new brand

**Check:**
1. Did you update the `BrandName` type in `useBrand.ts`?
2. Did you add the new brand to all functions in `brandUtils.ts`?

**Solution:**
```typescript
// Update type definition
export type BrandName = "Brand One" | "Brand Two" | "Brand Three" | "Brand Four";
```

---

### Issue: `Constants.expoConfig.extra` is undefined

**Check:**
1. Did you run the build script?
2. Is the `extra` section present in `app.json`?

**Solution:**
```bash
# Verify app.json was updated
cat app.json | grep -A 5 "extra"
```

---

### Issue: Assets not showing for new brand

**Check:**
1. Are assets in `src/app/config/brandX/assets/`?
2. Did the build script copy them to `/assets/`?

**Solution:**
```bash
# Manually verify
ls src/app/config/brand1/assets/
ls assets/
```

---

### Issue: Wrong brand showing

**Check:**
1. Which build script did you run last?
2. Is `app.json` showing the correct brand name?

**Solution:**
```bash
# Check current brand
cat app.json | grep '"name"'

# Rebuild with correct brand
npm run dev:brand2
```

---

## 📚 Quick Reference

### File Locations

| File | Purpose |
|------|---------|
| `hooks/useBrand.ts` | Brand detection hook |
| `utils/brandUtils.ts` | Brand-specific content & utilities |
| `src/app/config/brand{1,2,3}/app.json` | Brand configurations |
| `src/components/branded/` | Brand-aware components |
| `src/components/svg/Logo.tsx` | Main logo component (brand-aware) |
| `src/components/svg/RealtyLogo.tsx` | Brand 2 logo ("REALTY") |
| `src/components/svg/HousingLogo.tsx` | Brand 3 logo ("HOUSING") |
| `build-brand.js` | Brand setup script |

### Common Commands

```bash
# Development
npm run dev:brand1      # Start Brand 1 dev server
npm run dev:brand2      # Start Brand 2 dev server
npm run dev:brand3      # Start Brand 3 dev server

# Build only (no server)
npm run build:brand1    # Setup Brand 1 config
npm run build:brand2    # Setup Brand 2 config
npm run build:brand3    # Setup Brand 3 config

# Clear cache
npx expo start -c
```

### Access Patterns

```typescript
// Get brand info
const { brandName, themeColor, brandSlug } = useBrand();

// Get brand content
const { welcomeMessage, footerText } = getBrandContent(brandName);

// Get brand APIs
const { base, auth } = getBrandApiUrls(brandName);

// Get brand links
const { privacy, terms } = getBrandLinks(brandName);

// Get extra config
const apiUrl = Constants.expoConfig?.extra?.apiUrl;
```

---

## 🎓 Learning Resources

- [Expo Constants Documentation](https://docs.expo.dev/versions/latest/sdk/constants/)
- [Expo Configuration (app.json)](https://docs.expo.dev/versions/latest/config/app/)
- [React Native Linking](https://reactnative.dev/docs/linking)

---

**Last Updated:** February 26, 2026  
**Maintained By:** Development Team  
**Questions?** Check `WHITE_LABEL_IMPLEMENTATION.md` or ask a team member
