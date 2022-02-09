npm install
Android:
put license to android/app/src/main/assets/
npx jetify
ionic cap run android

iOS:
put license to ios/App/App/
cd ios/App
pod install
select developer profile in App.xcodeproj
cd ../../
ionic cap run ios
