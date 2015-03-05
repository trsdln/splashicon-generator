# splashicon-generator

Automatic icon and splash screen resizing for PhoneGap. Create an icon in the root folder of your PhoneGap project and use ```icon.png``` and a ```splash.png``` to automatically resize and copy it for all the platforms your project supports (currently works with iOS, Android and Windows Phone 8).

### Installation

     $ npm install splashicon-generator -g

---

### Usage

Create an ```icon.png``` and a ```splash.png``` file in the root folder of your cordova project and run:

     $ splashicon-generator

For optimal results, your icon file has to be square, and at least 1024x1024px and your splash file has a vertical rectangle, and at least 2208x3925px.

---

### Requirements

#### ImageMagick

Install on a Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows see http://www.imagemagick.org/script/binary-releases.php#windows

---

### Configuring icons

Include in your ```config.xml``` file:

```xml
<icon src="icon.png" />

<!-- App Store -->
<icon src="res/icons/ios/icon-1024.png" gap:platform="ios" width="1024" height="1024" />

<!-- iOS 8.0+ -->
<!-- iPhone 6 Plus  -->
<icon src="res/icons/ios/icon-60@3x.png" gap:platform="ios" width="180" height="180" />
<!-- iOS 7.0+ -->
<!-- iPhone / iPod Touch  -->
<icon src="res/icons/ios/icon-60.png" gap:platform="ios" width="60" height="60" />
<icon src="res/icons/ios/icon-60@2x.png" gap:platform="ios" width="120" height="120" />
<!-- iPad -->
<icon src="res/icons/ios/icon-76.png" gap:platform="ios" width="76" height="76" />
<icon src="res/icons/ios/icon-76@2x.png" gap:platform="ios" width="152" height="152" />
<!-- iOS 6.1 -->
<!-- Spotlight Icon -->
<icon src="res/icons/ios/icon-40.png" gap:platform="ios" width="40" height="40" />
<icon src="res/icons/ios/icon-40@2x.png" gap:platform="ios" width="80" height="80" />
<!-- iPhone / iPod Touch -->
<icon src="res/icons/ios/icon.png" gap:platform="ios" width="57" height="57" />
<icon src="res/icons/ios/icon@2x.png" gap:platform="ios" width="114" height="114" />
<!-- iPad -->
<icon src="res/icons/ios/icon-72.png" gap:platform="ios" width="72" height="72" />
<icon src="res/icons/ios/icon-72@2x.png" gap:platform="ios" width="144" height="144" />
<!-- iPhone Spotlight and Settings Icon -->
<icon src="res/icons/ios/icon-small.png" gap:platform="ios" width="29" height="29" />
<icon src="res/icons/ios/icon-small@2x.png" gap:platform="ios" width="58" height="58" />
<!-- iPad Spotlight and Settings Icon -->
<icon src="res/icons/ios/icon-50.png" gap:platform="ios" width="50" height="50" />
<icon src="res/icons/ios/icon-50@2x.png" gap:platform="ios" width="100" height="100" />



<icon src="res/icons/android/icon-ldpi.png" gap:platform="android" gap:qualifier="ldpi" />
<icon src="res/icons/android/icon-mdpi.png" gap:platform="android" gap:qualifier="mdpi" />
<icon src="res/icons/android/icon-hdpi.png" gap:platform="android" gap:qualifier="hdpi" />
<icon src="res/icons/android/icon-xhdpi.png" gap:platform="android" gap:qualifier="xhdpi" />
<icon src="res/icons/android/icon-xxhdpi.png" gap:platform="android" gap:qualifier="xxhdpi" />
<icon src="res/icons/android/icon-xxxhdpi.png" gap:platform="android" gap:qualifier="xxxhdpi" />

<icon src="res/icons/wp8/ApplicationIcon.png" gap:platform="winphone" />
<icon src="res/icons/wp8/Background.png" gap:platform="winphone" gap:role="background" />
```

---

### Configuring splash

Include in your ```config.xml``` file:

```xml
<gap:splash src="splash.png" />

<gap:splash src="res/splash/ios/Default.png" gap:platform="ios" width="320" height="480" />
<gap:splash src="res/splash/ios/Default@2x.png" gap:platform="ios" width="640" height="960" />
<gap:splash src="res/splash/ios/Default-568h@2x.png" gap:platform="ios" width="640" height="1136" />
<gap:splash src="res/splash/ios/Default-667h@2x.png" gap:platform="ios" width="750" height="1334" />
<gap:splash src="res/splash/ios/Default-Portrait-736h@3x.png" gap:platform="ios" width="1242" height="2208" />
<gap:splash src="res/splash/ios/Default-Landscape-736h@3x.png" gap:platform="ios" width="2208" height="1242" />
<gap:splash src="res/splash/ios/Default-Portrait.png" gap:platform="ios" width="768" height="1024" />
<gap:splash src="res/splash/ios/Default-Landscape.png" gap:platform="ios" width="1024" height="768" />
<gap:splash src="res/splash/ios/Default-Portrait@2x.png" gap:platform="ios" width="1536" height="2048" />
<gap:splash src="res/splash/ios/Default-Landscape@2x.png" gap:platform="ios" width="2048" height="1536" />

<gap:splash src="res/splash/android/ldpi.png" gap:platform="android" />
<gap:splash src="res/splash/android/landscape-ldpi.png" gap:platform="android" gap:qualifier="land-ldpi" />
<gap:splash src="res/splash/android/mdpi.png" gap:platform="android" gap:qualifier="mdpi" />
<gap:splash src="res/splash/android/landscape-mdpi.png" gap:platform="android" gap:qualifier="land-mdpi" />
<gap:splash src="res/splash/android/hdpi.png" gap:platform="android" gap:qualifier="hdpi" />
<gap:splash src="res/splash/android/landscape-hdpi.png" gap:platform="android" gap:qualifier="land-hdpi" />
<gap:splash src="res/splash/android/xhdpi.png" gap:platform="android" gap:qualifier="xhdpi" />
<gap:splash src="res/splash/android/landscape-xhdpi.png" gap:platform="android" gap:qualifier="land-xhdpi" />

<gap:splash src="res/splash/wp8/SplashScreenImage.jpg" gap:platform="winphone" />
```

---

### License

MIT
