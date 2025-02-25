import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Photo-gallery',
  webDir: 'www',
  bundledWebRuntime:false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidSplashResourceName: "splash", 
      showSpinner:false,
      splashFullScreen:true,
      splashImmersive:true
    },
  }
};

export default config;
