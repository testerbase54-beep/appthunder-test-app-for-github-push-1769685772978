
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.app',
  appName: 'Test App for GitHub Push',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url: 'https://example.com',
    cleartext: true,
    allowNavigation: ['*']
  }
};
export default config;
