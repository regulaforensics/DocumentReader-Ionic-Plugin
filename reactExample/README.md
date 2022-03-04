# How to build demo application
1. Visit [licensing.regulaforensics.com](https://licensing.regulaforensics.com) to get a trial license (`regula.license` file). The license creation wizard will guide you through the necessary steps.
2. Download or clone this repository using the command `git clone https://github.com/regulaforensics/DocumentReader-Ionic-Plugin.git`.
3. Run the following commands in Terminal:
```bash
$ cd reactExample
$ npm install
```
4. Copy the `regula.license` file to the `public/assets` folder.

5. Android:
  * Change the application ID to the one you have specified during the registration at [licensing.regulaforensics.com](https://licensing.regulaforensics.com).
  * Run `npx jetify`, then `ionic cap run android` - this is just one way to run the app. You can also run it directly from within Android Studio.

6. iOS:
  * Change the Bundle Identifier to the one you have specified during the registration at [licensing.regulaforensics.com](https://licensing.regulaforensics.com).
  * Run `ionic cap run ios` - this is just one way to run the app. You can also run it directly from within Xcode.


# Troubleshooting license issues
If you have issues with license verification when running the application, please verify that next is true:
1. The OS, which you use, is specified in the license (e.g., Android and/or iOS).
2. The application (Bundle) ID, which you use, is specified in the license.
3. The license is valid (not expired).
4. The date and time on the device, where you run the application, are valid.
5. You use the latest release version of the Document Reader SDK.
6. You placed the `license` into the correct folder as described [here](#how-to-build-demo-application).
