# 🚀 Production Build & App Store Deployment Guide

**Complete guide to building and deploying your white-label app to production**

---

## 📋 Table of Contents

1. [Pre-Build Checklist](#pre-build-checklist)
2. [Building for iOS (Apple App Store)](#building-for-ios-apple-app-store)
3. [Building for Android (Google Play Store)](#building-for-android-google-play-store)
4. [Building Multiple Brands](#building-multiple-brands)
5. [App Store Submission](#app-store-submission)
6. [CI/CD Automation](#cicd-automation)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Pre-Build Checklist

### 1. **Update App Configuration**

For **EACH brand**, verify:

```json
// src/app/config/brand1/app.json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.yourcompany.app"
    },
    "android": {
      "package": "com.yourcompany.app"
    }
  }
}
```

**Required for each brand:**
- ✅ Unique `bundleIdentifier` (iOS)
- ✅ Unique `package` (Android)
- ✅ Unique `slug`
- ✅ Correct `version` (follows semver: `major.minor.patch`)

---

### 2. **Generate App Icons and Splash Screens**

**Required sizes:**

| Asset | Size | Format | Location |
|-------|------|--------|----------|
| **App Icon (iOS)** | 1024x1024 | PNG | `brand{1,2,3}/assets/icon.png` |
| **App Icon (Android)** | 1024x1024 | PNG | `brand{1,2,3}/assets/icon.png` |
| **Splash Screen** | 1242x2436 | PNG | `brand{1,2,3}/assets/splash-icon.png` |
| **Adaptive Icon** | 1024x1024 | PNG | `brand{1,2,3}/assets/adaptive-icon.png` |
| **Favicon** | 48x48 | PNG | `brand{1,2,3}/assets/favicon.png` |

**Generate using Expo:**
```bash
npx expo-generate-icon ./path/to/your/icon.png --output-dir ./brand1/assets
npx expo-generate-splash ./path/to/your/splash.png --output-dir ./brand1/assets
```

---

### 3. **Configure Signing Credentials**

#### **iOS (Apple Developer Account Required)**

1. **Enroll in Apple Developer Program** ($99/year)
   - https://developer.apple.com/

2. **Create App ID**
   - Go to: https://developer.apple.com/account/resources/identifiers
   - Create new App ID with your bundle identifier
   - Example: `com.brandone.app`

3. **Create Certificates**
   - Distribution Certificate (for App Store)
   - Push Notifications Certificate (if using push)

4. **Create Provisioning Profile**
   - Go to: https://developer.apple.com/account/resources/profiles
   - Type: "App Store"
   - Select your App ID and certificate

5. **Configure in EAS** (Recommended)
   ```bash
   eas build:configure --platform ios
   ```

#### **Android (Google Play Console Account Required)**

1. **Enroll in Google Play Console** ($25 one-time)
   - https://play.google.com/console

2. **Create Keystore** (EAS manages this automatically)
   ```bash
   # If managing yourself:
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

3. **Upload Keystore to EAS** (if not using EAS managed)
   ```bash
   eas credentials
   ```

---

### 4. **Setup EAS Build** (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS Build
eas build:configure

# This creates eas.json in your project root
```

**Example `eas.json`:**
```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "distribution": "store"
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@email.com",
        "ascAppId": "1234567890"
      },
      "android": {
        "serviceAccountKeyPath": "./google-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

---

## 🍎 Building for iOS (Apple App Store)

### Step 1: Build Brand Configuration

```bash
# Setup Brand 1
npm run build:brand1

# Verify app.json shows correct brand
cat app.json | grep -A 2 '"name"'
```

### Step 2: Create iOS Build

```bash
# Using EAS Build (Recommended)
eas build --platform ios --profile production

# Or specify brand in command
eas build --platform ios --profile production --non-interactive
```

**Build Options:**

| Command | Use Case | Output |
|---------|----------|--------|
| `eas build --platform ios` | Development | .app file |
| `eas build --platform ios --profile production` | App Store | .ipa file |
| `eas build --platform ios --local` | Build locally | Requires Mac + Xcode |

### Step 3: Wait for Build

```bash
# Check build status
eas build:list

# View specific build logs
eas build:view <BUILD_ID>
```

**Build time:** 10-20 minutes typically

### Step 4: Download Build

```bash
# Download after build completes
eas build:download --platform ios --id <BUILD_ID>
```

---

## 🤖 Building for Android (Google Play Store)

### Step 1: Build Brand Configuration

```bash
# Setup Brand 2
npm run build:brand2
```

### Step 2: Create Android Build

```bash
# Using EAS Build (Recommended)
eas build --platform android --profile production

# Build APK (for testing/distribution)
eas build --platform android --profile production --type apk

# Build AAB (required for Play Store)
eas build --platform android --profile production --type app-bundle
```

### Step 3: Download Build

```bash
# Download APK
eas build:download --platform android --id <BUILD_ID>

# Download AAB
eas build:download --platform android --id <BUILD_ID> --output app-release.aab
```

---

## 🏢 Building Multiple Brands

### Option 1: Sequential Builds (Manual)

```bash
# Brand 1 - iOS
npm run build:brand1
eas build --platform ios --profile production

# Brand 2 - iOS
npm run build:brand2
eas build --platform ios --profile production

# Brand 3 - iOS
npm run build:brand3
eas build --platform ios --profile production

# Repeat for Android
npm run build:brand1
eas build --platform android --profile production --type app-bundle

npm run build:brand2
eas build --platform android --profile production --type app-bundle

npm run build:brand3
eas build --platform android --profile production --type app-bundle
```

### Option 2: Build Script (Automated)

Create `build-all-brands.sh`:

```bash
#!/bin/bash

echo "🚀 Building all brands for production..."

BRANDS=("brand1" "brand2" "brand3")
PLATFORMS=("ios" "android")

for brand in "${BRANDS[@]}"; do
  echo ""
  echo "================================"
  echo "📱 Building $brand..."
  echo "================================"
  
  # Setup brand
  npm run build:$brand
  
  # Build for iOS
  echo "🍎 Building iOS..."
  eas build --platform ios --profile production --non-interactive
  
  # Build for Android
  echo "🤖 Building Android..."
  eas build --platform android --profile production --type app-bundle --non-interactive
  
  echo "✅ $brand build complete!"
done

echo ""
echo "🎉 All brands built successfully!"
```

**Usage:**
```bash
chmod +x build-all-brands.sh
./build-all-brands.sh
```

### Option 3: EAS Build with Project Extensions

Create separate EAS projects for each brand:

```bash
# In eas.json
{
  "build": {
    "brand1_production": {
      "projectId": "brand1-project-id",
      "distribution": "store"
    },
    "brand2_production": {
      "projectId": "brand2-project-id",
      "distribution": "store"
    },
    "brand3_production": {
      "projectId": "brand3-project-id",
      "distribution": "store"
    }
  }
}
```

**Build:**
```bash
eas build --profile brand1_production --platform ios
eas build --profile brand2_production --platform ios
eas build --profile brand3_production --platform ios
```

---

## 📤 App Store Submission

### Apple App Store (iOS)

#### Step 1: Prepare App Store Connect

1. **Go to App Store Connect**
   - https://appstoreconnect.apple.com

2. **Create New App**
   - Click "+" → "New App"
   - Select platform: iOS
   - Enter app name (must be unique)
   - Select primary language
   - Enter bundle ID (must match build)
   - SKU: Your internal identifier (e.g., `brand1-ios-001`)

3. **Fill App Information**
   - Privacy policy URL
   - App category (e.g., Business, Lifestyle)
   - Age rating
   - Contact information

#### Step 2: Upload Build

**Option A: Using Xcode (Manual)**
```bash
# Download .ipa from EAS
eas build:download --platform ios --id <BUILD_ID>

# Open Xcode → Window → Organizer
# Drag and drop .ipa file
# Click "Distribute App" → "App Store Connect" → "Upload"
```

**Option B: Using EAS Submit (Recommended)**
```bash
# Install EAS Submit
npm install -g eas-cli

# Submit to App Store
eas submit --platform ios --latest

# Or specify build ID
eas submit --platform ios --id <BUILD_ID>
```

**Option C: Using Transporter App**
```bash
# Download Transporter from Mac App Store
# Drag and drop .ipa file
# Click Deliver
```

#### Step 3: Complete App Store Listing

**Required Assets:**
- App icon (1024x1024 PNG)
- Screenshots:
  - 6.7" (1284x2778) - 2 minimum
  - 6.5" (1242x2688) - 2 minimum
  - 5.5" (1242x2208) - 2 minimum
- App preview video (optional, 30 sec max)

**Metadata:**
- Title (30 characters)
- Subtitle (30 characters)
- Description (4000 characters)
- Keywords (100 characters)
- Support URL
- Marketing URL (optional)

#### Step 4: Submit for Review

1. **Select Build**
   - Go to App Store Connect → Your App → 1.0 Prepare for Submission
   - Scroll to "Build" section
   - Click "+" and select your uploaded build

2. **App Review Information**
   - Provide demo account if login required
   - Add notes for reviewer
   - Contact information

3. **Submit for Review**
   - Click "Save"
   - Click "Add for Review" → "Submit to Review"

**Review Time:** 24-48 hours typically

---

### Google Play Store (Android)

#### Step 1: Prepare Play Console

1. **Go to Google Play Console**
   - https://play.google.com/console

2. **Create New App**
   - Click "Create app"
   - Enter app name
   - Select default language
   - Choose app or game
   - Free or paid

3. **Set Up App**
   - Complete app access declaration
   - Verify app content policies

#### Step 2: Upload Build

**Option A: Using Play Console (Manual)**
```bash
# Download .aab from EAS
eas build:download --platform android --id <BUILD_ID>

# Go to Play Console → Your App → Production
# Click "Create new release"
# Upload .aab file
```

**Option B: Using EAS Submit**
```bash
# Setup Google Play service account
# Download service account JSON from Google Cloud

# Submit
eas submit --platform android --latest
```

#### Step 3: Complete Store Listing

**Required Assets:**
- App icon (512x512 PNG, 32KB max)
- Feature graphic (1024x500 PNG)
- Screenshots:
  - Phone: 2 minimum (1920x1080 or higher)
  - Tablet: 2 minimum (if supporting tablets)
- Short description (80 characters)
- Full description (4000 characters)

**App Content:**
- Privacy policy URL (required)
- App access declaration
- Content rating questionnaire
- News apps declaration (if applicable)
- COVID-19 contact tracing (if applicable)
- Data safety section

#### Step 4: Submit for Review

1. **Review and Release**
   - Go to "Production" → "Releases"
   - Click "Review release"
   - Fix any errors
   - Click "Start rollout to Production"

**Review Time:** 2-7 days (first release), 24-48 hours (updates)

---

## 🔄 CI/CD Automation

### GitHub Actions Example

Create `.github/workflows/build.yml`:

```yaml
name: Build and Submit

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        brand: [brand1, brand2, brand3]
        platform: [ios, android]

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Setup Expo
        uses: expo/expo-github-action@v8
        with:
          expo-version: latest
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Install dependencies
        run: npm ci

      - name: Build brand config
        run: npm run build:${{ matrix.brand }}

      - name: Build with EAS
        run: eas build --platform ${{ matrix.platform }} --profile production --non-interactive

      - name: Submit to store
        run: eas submit --platform ${{ matrix.platform }} --non-interactive
```

### Build Scripts

**package.json:**
```json
{
  "scripts": {
    "build:ios:brand1": "npm run build:brand1 && eas build --platform ios --profile production",
    "build:ios:brand2": "npm run build:brand2 && eas build --platform ios --profile production",
    "build:ios:brand3": "npm run build:brand3 && eas build --platform ios --profile production",
    
    "build:android:brand1": "npm run build:brand1 && eas build --platform android --profile production --type app-bundle",
    "build:android:brand2": "npm run build:brand2 && eas build --platform android --profile production --type app-bundle",
    "build:android:brand3": "npm run build:brand3 && eas build --platform android --profile production --type app-bundle",
    
    "submit:ios:brand1": "eas submit --platform ios --latest",
    "submit:android:brand1": "eas submit --platform android --latest",
    
    "deploy:brand1": "npm run build:ios:brand1 && npm run build:android:brand1 && npm run submit:ios:brand1 && npm run submit:android:brand1"
  }
}
```

**Usage:**
```bash
# Build and submit Brand 1
npm run deploy:brand1

# Build iOS for Brand 2
npm run build:ios:brand2
```

---

## 🐛 Troubleshooting

### Issue: Build fails with "Provisioning profile not found"

**Solution:**
```bash
# Clear credentials
eas credentials --clear

# Reconfigure
eas build:configure --platform ios

# Build again
eas build --platform ios --profile production
```

---

### Issue: App Store rejects build for metadata reasons

**Common reasons:**
1. **Incomplete metadata**
   - Fill all required fields in App Store Connect
   - Add all required screenshots

2. **Privacy policy missing**
   - Create privacy policy page
   - Add URL to app and store listing

3. **App crashes on launch**
   - Test thoroughly on real devices
   - Check crash logs in App Store Connect

4. **Misleading description**
   - Ensure screenshots match actual app
   - Don't claim features you don't have

---

### Issue: Build takes too long

**Solutions:**
1. **Use EAS Priority Builds** (paid)
   ```bash
   eas build --platform ios --priority high
   ```

2. **Build during off-peak hours**
   - US nighttime = faster builds

3. **Optimize app size**
   - Remove unused dependencies
   - Use Hermes engine
   - Optimize images

---

### Issue: Different brands have same bundle ID

**Solution:**
```json
// Each brand MUST have unique bundle identifier
// Brand 1
"ios": { "bundleIdentifier": "com.brandone.app" }

// Brand 2
"ios": { "bundleIdentifier": "com.brandtwo.app" }

// Brand 3
"ios": { "bundleIdentifier": "com.brandthree.app" }
```

---

### Issue: Version number conflicts

**Solution:**
```bash
# Check current version
cat app.json | grep version

# Update version in brand config
# src/app/config/brand1/app.json
{
  "expo": {
    "version": "1.0.1"  # Increment this
  }
}

# Rebuild
npm run build:brand1
eas build --platform ios --profile production
```

---

## 📊 Build Timeline

| Stage | Time | Notes |
|-------|------|-------|
| **EAS Build (iOS)** | 10-20 min | Varies by queue |
| **EAS Build (Android)** | 10-15 min | Slightly faster |
| **App Store Review** | 24-48 hours | First review longer |
| **Play Store Review** | 2-7 days | First release longer |
| **Rollout** | 24-48 hours | Phased rollout |

**Total time for first release:** 5-10 days (including review)

---

## 💰 Costs

| Service | Cost | Frequency |
|---------|------|-----------|
| **Apple Developer Program** | $99 | Yearly |
| **Google Play Console** | $25 | One-time |
| **EAS Build (Free Tier)** | 10 builds/month | Free |
| **EAS Build (Paid)** | $29-299/month | Per priority |
| **App Store Commission** | 15-30% | Per sale/subscription |

---

## 📋 Pre-Launch Checklist

### For Each Brand

- [ ] Unique bundle identifier configured
- [ ] App icons generated (all sizes)
- [ ] Splash screens configured
- [ ] Version number set (1.0.0)
- [ ] Build number set (1)
- [ ] Signing credentials configured
- [ ] Privacy policy created
- [ ] Terms of service created
- [ ] Support email configured
- [ ] Analytics configured (if using)
- [ ] Push notifications configured (if using)
- [ ] Deep links configured
- [ ] App Store screenshots ready
- [ ] App descriptions written
- [ ] Keywords researched
- [ ] Demo account for reviewers created
- [ ] TestFlight/Internal testing completed
- [ ] Crash reporting setup (e.g., Sentry)
- [ ] Backend APIs configured for production
- [ ] Environment variables set for production

---

## 🔗 Useful Links

- **EAS Build Documentation:** https://docs.expo.dev/build/introduction/
- **App Store Connect:** https://appstoreconnect.apple.com
- **Google Play Console:** https://play.google.com/console
- **Apple Developer:** https://developer.apple.com
- **Google Developer:** https://developer.android.com
- **App Store Review Guidelines:** https://developer.apple.com/app-store/review/guidelines/
- **Play Console Policies:** https://play.google.com/about/developer-content-policy/

---

**Last Updated:** February 26, 2026  
**Status:** Production Ready ✅
