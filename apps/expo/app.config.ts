import type { ExpoConfig, ConfigContext } from '@expo/config'

const CLERK_PUBLISHABLE_KEY = 'pk_test_bGVuaWVudC1tdXN0YW5nLTIxLmNsZXJrLmFjY291bnRzLmRldiQ'

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: 'expo',
  slug: 'expo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/icon.png',
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
      projectId: 'your-project-id',
    },
    CLERK_PUBLISHABLE_KEY,
  },
  plugins: ['./expo-plugins/with-modify-gradle.js'],
})

export default defineConfig
