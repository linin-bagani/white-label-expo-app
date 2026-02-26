# ⚡ Quick Build Commands Reference

**Fast reference for building and deploying your white-label app**

---

## 📱 Development Builds

```bash
# Start development server for each brand
npm run dev:brand1    # Brand One (Green)
npm run dev:brand2    # Brand Two (Orange)
npm run dev:brand3    # Brand Three (Red)

# Or build config only
npm run build:brand1
npm run build:brand2
npm run build:brand3
```

---

## 🍎 iOS Builds (App Store)

### Single Brand

```bash
# Setup brand
npm run build:brand1

# Build for iOS (App Store)
eas build --platform ios --profile production

# Build and submit
eas build --platform ios --profile production
eas submit --platform ios --latest
```

### All Brands

```bash
# Brand 1
npm run build:brand1 && eas build --platform ios --profile production

# Brand 2
npm run build:brand2 && eas build --platform ios --profile production

# Brand 3
npm run build:brand3 && eas build --platform ios --profile production
```

---

## 🤖 Android Builds (Play Store)

### Single Brand

```bash
# Setup brand
npm run build:brand1

# Build for Android (Play Store - AAB format required)
eas build --platform android --profile production --type app-bundle

# Build and submit
eas build --platform android --profile production --type app-bundle
eas submit --platform android --latest
```

### All Brands

```bash
# Brand 1
npm run build:brand1 && eas build --platform android --profile production --type app-bundle

# Brand 2
npm run build:brand2 && eas build --platform android --profile production --type app-bundle

# Brand 3
npm run build:brand3 && eas build --platform android --profile production --type app-bundle
```

---

## 🚀 Full Deployment (Both Platforms)

### Brand 1 (Complete)

```bash
# iOS
npm run build:brand1
eas build --platform ios --profile production
eas submit --platform ios --latest

# Android
eas build --platform android --profile production --type app-bundle
eas submit --platform android --latest
```

### All Brands (Complete)

```bash
# Create a script file: deploy-all.sh
#!/bin/bash

for brand in brand1 brand2 brand3; do
  echo "📱 Building $brand..."
  
  npm run build:$brand
  
  # iOS
  eas build --platform ios --profile production --non-interactive
  eas submit --platform ios --latest
  
  # Android
  eas build --platform android --profile production --type app-bundle --non-interactive
  eas submit --platform android --latest
  
  echo "✅ $brand deployed!"
done
```

---

## 📊 Build Status & Management

```bash
# View build history
eas build:list

# View specific build
eas build:view <BUILD_ID>

# Cancel build
eas build:cancel <BUILD_ID>

# Download build
eas build:download --platform ios --id <BUILD_ID>
eas build:download --platform android --id <BUILD_ID>

# Configure credentials
eas credentials

# Configure project
eas build:configure
```

---

## 🔧 Setup Commands (First Time Only)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS Build
eas build:configure

# Setup iOS credentials
eas credentials --platform ios

# Setup Android credentials
eas credentials --platform android
```

---

## 📝 Version Management

```bash
# Check current version
cat app.json | grep version

# Update version (edit brand config)
# src/app/config/brand1/app.json
{
  "expo": {
    "version": "1.0.1"  # major.minor.patch
  }
}

# Version numbering:
# 1.0.0 → Initial release
# 1.0.1 → Bug fixes
# 1.1.0 → New features
# 2.0.0 → Major changes
```

---

## 🎯 Common Workflows

### Workflow 1: Quick Update (Single Brand)

```bash
# 1. Update code
# 2. Update version in app.json
# 3. Build and submit
npm run build:brand1
eas build --platform ios --profile production
eas submit --platform ios --latest
```

### Workflow 2: Multi-Brand Release

```bash
# 1. Update code
# 2. Update versions in all brand configs
# 3. Build all brands
./deploy-all.sh
```

### Workflow 3: Hotfix (Urgent)

```bash
# Use priority builds (paid feature)
npm run build:brand1
eas build --platform ios --profile production --priority high
eas submit --platform ios --latest
```

### Workflow 4: Test Before Release

```bash
# Build for internal testing
npm run build:brand1
eas build --platform ios --profile preview
eas build:download --platform ios --id <BUILD_ID>

# Test on device
# Then build for production
eas build --platform ios --profile production
```

---

## 📋 Pre-Build Checklist

Before running production builds:

- [ ] Code reviewed and tested
- [ ] Version number updated
- [ ] Brand config verified (bundle IDs unique)
- [ ] Icons and splash screens generated
- [ ] Signing credentials configured
- [ ] EAS project configured
- [ ] Apple Developer account active ($99/year)
- [ ] Google Play Console account active ($25 one-time)
- [ ] Privacy policy URL ready
- [ ] App Store screenshots ready
- [ ] App descriptions written

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| EAS Dashboard | https://expo.dev |
| App Store Connect | https://appstoreconnect.apple.com |
| Play Console | https://play.google.com/console |
| EAS Docs | https://docs.expo.dev/build/introduction/ |

---

## 💡 Pro Tips

1. **Build during off-peak hours** (US nighttime) for faster builds
2. **Use `--non-interactive`** flag in CI/CD scripts
3. **Test with preview builds** before production
4. **Keep build artifacts** for debugging
5. **Use semantic versioning** (major.minor.patch)
6. **Update version before each build**
7. **Submit immediately after build** to avoid delays
8. **Monitor build status** with `eas build:list`

---

**Last Updated:** February 26, 2026  
**For complete guide:** See [PRODUCTION_BUILD_GUIDE.md](./PRODUCTION_BUILD_GUIDE.md)
