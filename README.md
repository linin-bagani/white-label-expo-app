# White Label App

A flexible white-label mobile application built with Expo and React Native that supports multiple branded versions from a single codebase.

## 🚀 Features

- Single codebase supporting multiple brands
- Dynamic configuration switching
- Brand-specific assets and theming
- Dark mode support with dev toggle
- Force update mechanism
- Comprehensive UI component library (28+ components)
- 40+ custom SVG icons
- GraphQL integration
- Agent & property management utilities
- Validation utilities
- Modern React Native development with Expo
- TypeScript support

## 📋 Prerequisites

- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator or Android Emulator (for local testing)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd white-label-app
```

2. Install dependencies:
```bash
npm install
```

3. Install Expo CLI globally (if not already installed):
```bash
npm install -g @expo/cli
```

## 🏗️ Architecture Overview

This white-label app follows a configuration-driven approach where different branded versions share the same codebase but use different assets and configurations.

### Directory Structure
```
white-label-expo-app/
├── src/
│   ├── app/                      # Expo Router file-based routing
│   │   ├── config/               # Brand configurations (brand1, brand2, brand3)
│   │   │   └── brand{1,2,3}/
│   │   │       ├── app.json      # Brand-specific Expo config
│   │   │       └── assets/       # Brand-specific assets (icon, splash, logo, etc.)
│   │   ├── src/
│   │   │   └── components/branded/  # Brand-aware components
│   │   │       ├── BrandedButton.tsx
│   │   │       ├── BrandedHeader.tsx
│   │   │       └── BrandedFooter.tsx
│   │   ├── _layout.tsx           # Root layout with providers
│   │   ├── index.tsx             # Home screen (redirects to /login)
│   │   └── login.tsx             # Login page
│   ├── components/               # Shared components
│   │   ├── button/               # Button components with loading states
│   │   ├── common/               # Common components (ErrorModal, etc.)
│   │   ├── ForceUpdate/          # Force update component
│   │   ├── navigation/           # Navigation components (BackButton, etc.)
│   │   ├── routes/               # Route configurations (StackRoutes)
│   │   ├── screens/              # Screen-specific components
│   │   │   ├── signUp/          # Sign-up flow components
│   │   │   └── searchAgents/    # Agent search components
│   │   ├── searchAgents/         # Agent search utilities
│   │   └── svg/                  # 40+ custom SVG icons
│   ├── context/                  # React contexts
│   │   ├── LoadingContext.tsx    # Loading state management
│   │   └── StackBackContext.tsx  # Navigation back state management
│   ├── pages/                    # Additional pages (common pages like Login)
│   ├── constants/                # App constants
│   ├── types/                    # TypeScript type definitions
│   └── util/                     # Utility functions
│       ├── agent.ts              # Agent-related utilities
│       ├── property.ts           # Property utilities
│       ├── validation.ts         # Validation utilities
│       ├── graphql.ts            # GraphQL configuration
│       ├── brief.ts              # Brief utilities
│       ├── number.ts             # Number formatting utilities
│       └── textSizeUtils.ts      # Text size calculations
├── ~/                            # Path alias for shared UI components
│   ├── components/ui/            # 28 reusable UI components
│   │   ├── button.tsx, input.tsx, dialog.tsx, switch.tsx
│   │   ├── accordion.tsx, tabs.tsx, select.tsx, dropdown-menu.tsx
│   │   ├── card.tsx, badge.tsx, avatar.tsx, checkbox.tsx
│   │   ├── datepicker.tsx, stepper.tsx, progress.tsx, textarea.tsx
│   │   └── typography.tsx, separator.tsx, tooltip.tsx, modal.tsx, etc.
│   └── lib/                      # Utility libraries
│       ├── icons/                # Lucide icon wrappers
│       └── useColorScheme.tsx    # Theme management
├── hooks/
│   └── useBrand.ts               # Brand detection hook (name, slug, theme)
├── utils/
│   └── brandUtils.ts             # Brand content & API utilities
├── build-brand.js                # Brand configuration script
├── assets/                       # Active brand assets (dynamically replaced)
│   ├── icon.png, splash-icon.png, logo.svg
│   ├── adaptive-icon.png, favicon.png
├── App.tsx                       # App entry point (expo-router Slot)
├── app.json                      # Expo configuration (replaced by build script)
├── package.json                  # Dependencies and build scripts
├── babel.config.js               # Babel config with path aliases (@, ~)
├── tsconfig.json                 # TypeScript configuration
└── tailwind.config.js            # Tailwind CSS configuration
```

## 🔧 Path Aliases

This project uses the following path aliases (configured in `babel.config.js` and `tsconfig.json`):

| Alias | Maps To | Example |
|-------|---------|---------|
| `@/*` | `./src/*` | `import { x } from '@/components/button'` |
| `~/*` | `./~/*` | `import { Button } from '~/components/ui/button'` |

## 🧪 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode using Expo.

### `npm run android`
Launches the app on an Android emulator/simulator.

### `npm run ios`
Launches the app on an iOS simulator.

### `npm run web`
Runs the app in a web browser.

### `npm run build:brand1`
Sets up configuration for Brand 1.

### `npm run build:brand2`
Sets up configuration for Brand 2.

### `npm run build:brand3`
Sets up configuration for Brand 3.

### `npm run dev:brand1`
Builds Brand 1 configuration and starts the development server.

### `npm run dev:brand2`
Builds Brand 2 configuration and starts the development server.

### `npm run dev:brand3`
Builds Brand 3 configuration and starts the development server.

## 🎨 Brand Configuration

The app supports multiple brands through configuration files located in `app/config/`. Each brand has its own:

- `app.json` - Contains brand-specific metadata (name, theme color, logo path, bundle identifier, etc.)
- `assets/` - Brand-specific assets (icons, splash screens, logos, etc.)

To add a new brand:
1. Create a new directory in `app/config/` (e.g., `brand4`)
2. Add a `app.json` file with your brand configuration
3. Add a `assets/` directory with your brand assets
4. Update `package.json` with new build scripts for your brand

## 🧩 Using Branded Components

The app includes a system for creating components that adapt their appearance and behavior based on the current brand:

- `useBrand()` hook - Provides current brand information (name, slug, theme color)
- `brandUtils.ts` - Utility functions for brand-specific content and API endpoints
- `Branded*` components - Components that render differently based on the current brand

Example usage:
```typescript
import { useBrand } from './src/hooks/useBrand';
import { getBrandContent } from './src/utils/brandUtils';

const MyComponent = () => {
  const { brandName, themeColor, logoPath } = useBrand();
  const { welcomeMessage } = getBrandContent(brandName);
  
  return (
    <View style={{ backgroundColor: themeColor }}>
      <Text>{welcomeMessage}</Text>
      {logoPath && <Image source={{ uri: logoPath }} style={styles.logo} />}
    </View>
  );
};
```

## 🖼️ Brand Assets Configuration

To configure brand-specific assets like logos, add them to the `extra` section of each brand's `app.json`:

```json
{
  "expo": {
    "name": "Brand One",
    "slug": "brand-one",
    "extra": {
      "themeColor": "#00FF00",
      "logoPath": "./assets/brand1-logo.png"
    }
  }
}
```

## 📦 Dependencies

### Core
- **[Expo](https://expo.dev/)** ~54.0.33 - Framework for universal React applications
- **[React Native](https://reactnative.dev/)** 0.81.5 - Framework for building native apps
- **[React](https://reactjs.org/)** 19.1.0 - UI library
- **[Expo Router](https://docs.expo.dev/router/introduction/)** ^6.0.23 - File-based routing for React Native apps

### Styling & UI
- **[NativeWind](https://www.nativewind.dev/)** ^4.2.2 - Tailwind CSS for React Native
- **[Tailwind CSS](https://tailwindcss.com/)** ^3.4.19 - Utility-first CSS framework
- **@rn-primitives/\*** - Primitive UI components (avatar, dialog, dropdown-menu, switch, etc.)
- **[lucide-react-native](https://lucide.dev/)** - Icon library

### Navigation
- **[@react-navigation/native](https://reactnavigation.org/)** ^7.1.8 - Navigation library
- **[@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator)** ^7.3.16 - Stack navigator

### Forms & Validation
- **[react-hook-form](https://react-hook-form.com/)** ^7.71.2 - Performant forms library
- **[zod](https://zod.dev/)** ^4.3.6 - TypeScript-first schema validation
- **[@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation)** ^5.2.2 - Schema validation resolvers

### State & Context
- **React Context** - Built-in contexts (LoadingContext, StackBackContext)

### Utilities
- **[class-variance-authority](https://cva.style/)** ^0.7.1 - Component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** ^3.5.0 - Tailwind class merging
- **[clsx](https://github.com/lukeed/clsx)** ^2.1.1 - Conditional classnames
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** - Prettier plugin

### TypeScript & Build
- **[TypeScript](https://www.typescriptlang.org/)** ~5.9.2 - Typed JavaScript superset
- **[babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)** - Path aliases

### Other Notable Dependencies
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** ~4.1.1 - Animation library
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** ~2.28.0 - Native gesture recognition
- **[React Native SVG](https://github.com/react-native-svg/react-native-svg)** 15.12.1 - SVG support
- **[Expo Updates](https://docs.expo.dev/develop/updates/introduction/)** ~29.0.16 - OTA updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues, please open an issue on the GitHub repository with detailed information about the problem and steps to reproduce.

## 🆘 Support

For support, please open an issue in the repository or contact the maintainers.

---

## 📚 Developer Guides

### For New Team Members

| Guide | Purpose |
|-------|---------|
| **[ARCHITECTURE_GUIDE.md](./ARCHITECTURE_GUIDE.md)** | ⭐ **Start here** - Complete guide to working with the white-label system |
| [WHITE_LABEL_IMPLEMENTATION.md](./WHITE_LABEL_IMPLEMENTATION.md) | Implementation details and what was updated |
| [presentation-slide.md](./presentation-slide.md) | High-level architecture overview |
| [LOGO_CUSTOMIZATION_GUIDE.md](./LOGO_CUSTOMIZATION_GUIDE.md) | 🎨 How to customize brand logos |
| [PRODUCTION_BUILD_GUIDE.md](./PRODUCTION_BUILD_GUIDE.md) | 🚀 Build & deploy to App Store/Play Store |
| [BUILD_COMMANDS_CHEATSHEET.md](./BUILD_COMMANDS_CHEATSHEET.md) | ⚡ Quick reference for build commands |

### Quick Reference

**Adding a new brand?** → See [ARCHITECTURE_GUIDE.md - Adding a New Brand](./ARCHITECTURE_GUIDE.md#-adding-a-new-brand)

**Where to add brand-specific data?** → See [ARCHITECTURE_GUIDE.md - Where to Add Brand-Specific Data](./ARCHITECTURE_GUIDE.md#-where-to-add-brand-specific-data)

**Need common patterns?** → See [ARCHITECTURE_GUIDE.md - Common Patterns](./ARCHITECTURE_GUIDE.md#-common-patterns)

**Customizing logos?** → See [LOGO_CUSTOMIZATION_GUIDE.md](./LOGO_CUSTOMIZATION_GUIDE.md)

**Building for production?** → See [PRODUCTION_BUILD_GUIDE.md](./PRODUCTION_BUILD_GUIDE.md)

**Need build commands?** → See [BUILD_COMMANDS_CHEATSHEET.md](./BUILD_COMMANDS_CHEATSHEET.md)