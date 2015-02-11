# splashicon-generator

Automatic icon resizing for Cordova. Create an icon in the root folder of your Cordova project and use cordova-icon to automatically resize and copy it for all the platforms your project supports (currenty works with iOS and Android).

### Installation

     $ sudo npm install splashicon-generator -g

### Usage

Create an ```icon.png``` or a ```splash.png``` file in the root folder of your cordova project and run:

     $ splashicon-generator

For optimal results, your icon file has to be square, and at least 1024x1024px and your splash file has a vertical rectangle, and at least 2208x3925px.

### Requirements

#### ImageMagick

Install on a Mac:

     $ brew install imagemagick

On linux:

    $ sudo apt-get install imagemagick

On windows see http://www.imagemagick.org/script/binary-releases.php#windows

### Configuring icons

Include in your ```config.xml``` file:

```xml
<icon src="icon.png" />

<icon src="res/icons/ios/icon-57.png" gap:platform="ios" width="57" height="57" />
<icon src="res/icons/ios/icon-72.png" gap:platform="ios" width="72" height="72" />
<icon src="res/icons/ios/icon-114.png" gap:platform="ios" width="114" height="114" />
<icon src="res/icons/ios/icon-1024.png" gap:platform="ios" width="1024" height="1024" />
<icon src="res/icons/ios/icon-29.png" gap:platform="ios" width="29" height="29" />
<icon src="res/icons/ios/icon-48.png" gap:platform="ios" width="48" height="48" />
<icon src="res/icons/ios/icon-58.png" gap:platform="ios" width="58" height="58" />
<icon src="res/icons/ios/icon-64.png" gap:platform="ios" width="64" height="64" />
<icon src="res/icons/ios/icon-320.png" gap:platform="ios" width="320" height="320" />

<icon src="res/icons/android/icon-ldpi.png" gap:platform="android" gap:qualifier="ldpi" />
<icon src="res/icons/android/icon-mdpi.png" gap:platform="android" gap:qualifier="mdpi" />
<icon src="res/icons/android/icon-hdpi.png" gap:platform="android" gap:qualifier="hdpi" />
<icon src="res/icons/android/icon-xhdpi.png" gap:platform="android" gap:qualifier="xhdpi" />
<icon src="res/icons/android/icon-xxhdpi.png" gap:platform="android" gap:qualifier="xxhdpi" />
<icon src="res/icons/android/icon-xxxhdpi.png" gap:platform="android" gap:qualifier="xxxhdpi" />

<icon src="res/icons/wp8/ApplicationIcon.png" gap:platform="winphone" />
<icon src="res/icons/wp8/Background.png" gap:platform="winphone" gap:role="background" />
```

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

### License

MIT
