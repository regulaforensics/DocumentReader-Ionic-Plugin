import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.regula.documentreader',
  appName: 'DocumentReader',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
