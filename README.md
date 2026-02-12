# White Label App

A flexible white-label mobile application built with Expo and React Native that supports multiple branded versions from a single codebase.

## 🚀 Features

- Single codebase supporting multiple brands
- Dynamic configuration switching
- Brand-specific assets and theming
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
white-label-app/
├── App.tsx                    # Main App Component
├── app.json                   # Expo configuration (dynamically replaced by build script)
├── package.json               # Dependencies and build scripts
├── build-brand.js             # Brand configuration setup script
├── app/                      # Application source code
│   ├── _layout.tsx           # Root layout (Stack navigator)
│   ├── index.tsx             # Home screen component
│   ├── config/               # Brand-specific configurations
│   │   ├── brand1/           # Brand 1 configuration
│   │   │   ├── app.json      # Brand 1 app config
│   │   │   └── assets/       # Brand 1 assets
│   │   ├── brand2/           # Brand 2 configuration
│   │   └── brand3/           # Brand 3 configuration
│   └── src/                  # Shared source code
│       └── components/       # Reusable components
├── assets/                   # Current active assets (dynamically copied)
```

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

- `app.json` - Contains brand-specific metadata (name, theme color, bundle identifier, etc.)
- `assets/` - Brand-specific assets (icons, splash screens, etc.)

To add a new brand:
1. Create a new directory in `app/config/` (e.g., `brand4`)
2. Add a `app.json` file with your brand configuration
3. Add a `assets/` directory with your brand assets
4. Update `package.json` with new build scripts for your brand

## 📦 Dependencies

- [Expo](https://expo.dev/) - Framework for universal React applications
- [React Native](https://reactnative.dev/) - Framework for building native apps
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing for React Native apps
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript superset

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