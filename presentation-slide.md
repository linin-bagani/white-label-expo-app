# 🏗️ White-Label App Architecture
*One Codebase, Many Brands*

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Expo SDK 54, React Native 0.81.5 |
| **Language** | TypeScript 5.9 |
| **Routing** | Expo Router 6 (file-based) |
| **Styling** | NativeWind 4 (Tailwind CSS) |
| **Navigation** | React Navigation 7 |
| **Forms** | React Hook Form 7 + Zod 4 |
| **UI Components** | @rn-primitives/* + Custom (28+ components) |
| **Icons** | Lucide React Native + 40+ Custom SVGs |
| **State** | React Context (LoadingContext, StackBackContext) |
| **Build** | Babel with module-resolver plugin |

---

## 💪 Strengths

### 1. *Cost Efficiency*
- **Single Codebase**: 1 app → 3+ brands (no duplication)
- **Reduced Dev Time**: New brand in hours, not months
- **Lower Maintenance**: Fix once, deploy everywhere

### 2. *Scalability*
- **Easy Brand Addition**: Config + assets only
- **Consistent Quality**: All brands inherit same robust core
- **Centralized Updates**: Roll out features to all brands at once

### 3. *Flexibility*
- **Customizable Branding**: Colors, logos, names, themes
- **Conditional Logic**: Components adapt per brand

### 4. *Modern Tech Stack*
- React Native + Expo
- TypeScript for safety
- File-based routing with Expo Router
- NativeWind (Tailwind CSS) for styling
- Dark mode support built-in

### 5. *Rich Component Library*
- 28+ reusable UI components (accordion, dialog, tabs, etc.)
- 40+ custom SVG icons
- Brand-aware components (BrandedButton, BrandedHeader, BrandedFooter)
- Comprehensive form components with Zod validation

---

## ⚠️ Weaknesses

### 1. *Complexity Overhead*
- Steeper learning curve
- Nested directory structure (`src/app/src/`)
- Path aliases (`@`, `~`) require configuration understanding
- Brand-specific bugs hard to isolate
- Config management scales poorly

### 2. *Feature Limitations*
- “One-size-fits-all” constraint
- Bloat: unused code shipped to all brands
- UI/UX divergence limits

### 3. *Maintenance Burden*
- Regression testing across brands
- Dependency/version conflicts
- Config drift over time

### 4. *Security Concerns*
- Shared vulnerability surface
- Risk of cross-brand config/data leakage

---

## 🎯 Practical Applications

| Role | Benefit |
|------|---------|
| **Business Owners** | Launch multiple products at ~70–80% lower cost |
| **Developers** | Focus on core logic, not repetitive UI tweaks |
| **Agencies** | Scale client delivery without scaling team size |

---

## ✅ When It Works Best
✔ Similar core functionality  
✔ Branding-only differences  
✔ Shared backend  
✔ Budget & speed priorities

## ❌ When to Avoid
✖ Radically different features/user journeys  
✖ Independent teams or strict isolation needs  
✖ Conflicting tech/integration requirements

## 📱 Visual Examples: Different App Builds

> **Note**: To complete this section with actual screenshots, please generate app builds for each brand:
>
> ```bash
> npm run build:brand1
> npm run build:brand2
> npm run build:brand3
> ```
>
> Then take screenshots of the resulting apps and add them to the HTML presentation slide.

### Brand 1
- Primary color: **Green** (`#00FF00`)
- Bundle ID: `com.brandone.app`
- Deep link scheme: `brandone://`

### Brand 2
- Primary color: **Orange** (`#FFA500`)
- Bundle ID: `com.brandtwo.app`
- Deep link scheme: `brandtwo://`

### Brand 3
- Primary color: **Red** (`#FF0000`)
- Bundle ID: `com.brandthree.app`
- Deep link scheme: `brandthree://`

## 📁 App Structure

```
/white-label-expo-app
├───src/
│   ├───app/                         # Expo Router file-based routing
│   │   ├───config/
│   │   │   ├───brand1/
│   │   │   │   ├───assets/
│   │   │   │   │   ├───adaptive-icon.png
│   │   │   │   │   ├───favicon.png
│   │   │   │   │   ├───icon.png
│   │   │   │   │   ├───logo.svg
│   │   │   │   │   └───splash-icon.png
│   │   │   │   └───app.json
│   │   │   ├───brand2/
│   │   │   │   └───assets/ (same files)
│   │   │   └───brand3/
│   │   │       └───assets/ (same files)
│   │   ├───src/
│   │   │   └───components/branded/
│   │   │       ├───BrandedButton.tsx
│   │   │       ├───BrandedHeader.tsx
│   │   │       └───BrandedFooter.tsx
│   │   ├───_layout.tsx              # Root layout with providers
│   │   ├───index.tsx                # Home (redirects to /login)
│   │   └───login.tsx                # Login page
│   ├───components/
│   │   ├───button/
│   │   ├───common/
│   │   ├───ForceUpdate/
│   │   ├───navigation/
│   │   ├───routes/
│   │   ├───screens/
│   │   │   ├───signUp/
│   │   │   └───searchAgents/
│   │   ├───searchAgents/
│   │   └───svg/ (40+ custom icons)
│   ├───context/
│   │   ├───LoadingContext.tsx
│   │   └───StackBackContext.tsx
│   ├───pages/
│   ├───constants/
│   ├───types/
│   └───util/ (8 utility modules)
├───~/                               # Path alias for shared UI
│   ├───components/ui/ (28 components)
│   │   ├───button.tsx, input.tsx, dialog.tsx, switch.tsx
│   │   ├───accordion.tsx, tabs.tsx, select.tsx, dropdown-menu.tsx
│   │   ├───card.tsx, badge.tsx, avatar.tsx, checkbox.tsx
│   │   └───datepicker.tsx, stepper.tsx, progress.tsx, etc.
│   └───lib/
│       ├───icons/
│       └───useColorScheme.tsx
├───hooks/
│   └───useBrand.ts
├───utils/
│   └───brandUtils.ts
├───build-brand.js
├───App.tsx
├───package.json
└───tsconfig.json
```

---

> 🚀 **Bottom Line**: *Ideal for brands with shared purpose but distinct identity. Success hinges on alignment of core functionality.*