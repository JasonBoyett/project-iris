import type { ExpoConfig, ConfigContext } from '@expo/config'

const CLERK_PUBLISHABLE_KEY = 'pk_test_bGVuaWVudC1tdXN0YW5nLTIxLmNsZXJrLmFjY291bnRzLmRldiQ'

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: 'iris',
  slug: 'expo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/IRIS-LOGO.png',
    resizeMode: 'contain',
    backgroundColor: '#2e026d',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'your.bundle.identifier',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#2e026d',
    },
  },
  extra: {
    eas: {
      projectId: '0fa37b39-ff25-4053-ba33-a30409f8546e',
    },
    CLERK_PUBLISHABLE_KEY,
  },
  plugins: ['./expo-plugins/with-modify-gradle.js'],
})

export default defineConfig
