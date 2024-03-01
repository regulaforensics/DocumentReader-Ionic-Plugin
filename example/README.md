# How to build demo application
1. Get the trial license at [client.regulaforensics.com](https://client.regulaforensics.com/) (`regula.license` file). The license creation wizard will guide you through the necessary steps.
2. Get the trial database at [client.regulaforensics.com/customer/databases](https://client.regulaforensics.com/customer/databases) (`db.dat`)
3. Download or clone this repository using the command `git clone https://github.com/regulaforensics/DocumentReader-Ionic-Plugin.git`.
4. Copy the `regula.license` file to the `example/src/assets/` folder.
5. Copy the `db.dat` file to the `example/src/assets/` folder.
6. Run the following commands in Terminal:
```bash
$ cd example
$ npm install
$ npx jetify
$ ionic cordova prepare
```

7. Android:
  * Run `ionic cordova build android`, then`ionic cordova run android` inside `example` folder - this is just one way to run the app. You can also run it directly from within Android Studio.

8. iOS:
  * Run `ionic cordova build ios`, then `ionic cordova run ios` inside `example` folder - this is just one way to run the app. You can also run it directly from within Xcode.


# Troubleshooting license issues
If you have issues with license verification when running the application, please verify that next is true:
1. The OS, which you use, is specified in the license (e.g., Android and/or iOS).
3. The license is valid (not expired).
4. The date and time on the device, where you run the application, are valid.
5. You use the latest release version of the Document Reader SDK.
6. You placed the `license` into the correct folder as described [here](#how-to-build-demo-application).
