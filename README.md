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
<platform name="android">
    <icon src="res/android/icon-ldpi.png" density="ldpi" />
    <icon src="res/android/icon-mdpi.png" density="mdpi" />
    <icon src="res/android/icon-hdpi.png" density="hdpi" />
    <icon src="res/android/icon-xhdpi.png" density="xhdpi" />
    <icon src="res/android/icon-xxhdpi.png" density="xxhdpi" />
    <icon src="res/android/icon-xxxhdpi.png" density="xxxhdpi" />
</platform>

<platform name="ios">
    <!-- iOS 7.0+ -->
    <!-- iPhone / iPod Touch  -->
    <icon src="res/ios/icon-60.png" width="60" height="60" />
    <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
    <!-- iPad -->
    <icon src="res/ios/icon-76.png" width="76" height="76" />
    <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
    <!-- iOS 6.1 -->
    <!-- Spotlight Icon -->
    <icon src="res/ios/icon-40.png" width="40" height="40" />
    <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
    <!-- iPhone / iPod Touch -->
    <icon src="res/ios/icon.png" width="57" height="57" />
    <icon src="res/ios/icon@2x.png" width="114" height="114" />
    <!-- iPad -->
    <icon src="res/ios/icon-72.png" width="72" height="72" />
    <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
    <!-- iPhone Spotlight and Settings Icon -->
    <icon src="res/ios/icon-small.png" width="29" height="29" />
    <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
    <!-- iPad Spotlight and Settings Icon -->
    <icon src="res/ios/icon-50.png" width="50" height="50" />
    <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
</platform>

<platform name="wp8">
    <icon src="res/wp8/ApplicationIcon.png" width="99" height="99" />
    <!-- tile image -->
    <icon src="res/wp8/Background.png" width="159" height="159" gap:role="background" />
</platform>
```

### Configuring splash

Include in your ```config.xml``` file:

```xml
<platform name="android">
    <!-- you can use any density that exists in the Android project -->
    <splash src="res/android/splash-land-hdpi.png" density="land-hdpi"/>
    <splash src="res/android/splash-land-ldpi.png" density="land-ldpi"/>
    <splash src="res/android/splash-land-mdpi.png" density="land-mdpi"/>
    <splash src="res/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    <splash src="res/android/splash-port-hdpi.png" density="port-hdpi"/>
    <splash src="res/android/splash-port-ldpi.png" density="port-ldpi"/>
    <splash src="res/android/splash-port-mdpi.png" density="port-mdpi"/>
    <splash src="res/android/splash-port-xhdpi.png" density="port-xhdpi"/>
</platform>

<platform name="ios">
    <!-- images are determined by width and height. The following are supported -->
    <splash src="res/ios/Default~iphone.png" width="320" height="480"/>
    <splash src="res/ios/Default@2x~iphone.png" width="640" height="960"/>
    <splash src="res/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
    <splash src="res/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
    <splash src="res/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
    <splash src="res/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
    <splash src="res/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
    <splash src="res/ios/Default-667h.png" width="750" height="1334"/>
    <splash src="res/ios/Default-736h.png" width="1242" height="2208"/>
    <splash src="res/ios/Default-Landscape-736h.png" width="2208" height="1242"/>
</platform>

<platform name="wp8">
    <!-- images are determined by width and height. The following are supported -->
    <splash src="res/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
</platform>
```

ToDo

```xml
<icon src="icon.png" />

<icon gap:platform="android" src="res/android/icon-ldpi.png" />
<icon gap:platform="android" gap:qualifier="mdpi" src="res/android/icon-mdpi.png" />
<icon gap:platform="android" gap:qualifier="hdpi" src="res/android/icon-hdpi.png" />
<icon gap:platform="android" gap:qualifier="xhdpi" src="res/android/icon-xhdpi.png" />
<icon gap:platform="android" gap:qualifier="xxhdpi" src="res/android/icon-xxhdpi.png" />
<icon gap:platform="android" gap:qualifier="xxxhdpi" src="res/android/icon-xxxhdpi.png" />

<!-- iOS 7.0+ -->
<!-- iPhone / iPod Touch  -->
<icon gap:platform="ios" width="60" height="60" src="res/ios/icon-60.png" />
<icon gap:platform="ios" width="120" height="120" src="res/ios/icon-60@2x.png" />
<!-- iPad -->
<icon gap:platform="ios" width="76" height="76" src="res/ios/icon-76.png" />
<icon gap:platform="ios" width="152" height="152" src="res/ios/icon-76@2x.png" />
<!-- iOS 6.1 -->
<!-- Spotlight Icon -->
<icon gap:platform="ios" width="40" height="40" src="res/ios/icon-40.png" />
<icon gap:platform="ios" width="80" height="80" src="res/ios/icon-40@2x.png" />
<!-- iPhone / iPod Touch -->
<icon gap:platform="ios" width="57" height="57" src="res/ios/icon.png" />
<icon gap:platform="ios" width="114" height="114" src="res/ios/icon@2x.png" />
<!-- iPad -->
<icon gap:platform="ios" width="72" height="72" src="res/ios/icon-72.png" />
<icon gap:platform="ios" width="144" height="144" src="res/ios/icon-72@2x.png" />
<!-- iPhone Spotlight and Settings Icon -->
<icon gap:platform="ios" width="29" height="29" src="res/ios/icon-small.png" />
<icon gap:platform="ios" width="58" height="58" src="res/ios/icon-small@2x.png" />
<!-- iPad Spotlight and Settings Icon -->
<icon gap:platform="ios" width="50" height="50" src="res/ios/icon-50.png" />
<icon gap:platform="ios" width="100" height="100" src="res/ios/icon-50@2x.png" />

<icon gap:platform="winphone" width="99" height="99" src="res/wp8/ApplicationIcon.png" />
<!-- tile image -->
<icon gap:platform="winphone" width="159" height="159" gap:role="background" src="res/wp8/Background.png" />

<!-- you can use any density that exists in the Android project -->
<gap:splash gap:platform="android" gap:qualifier="land" src="res/android/splash-land-ldpi.png" />
<gap:splash gap:platform="android" gap:qualifier="land-mdpi" src="res/android/splash-land-mdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="land-hdpi" src="res/android/splash-land-hdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="land-xhdpi" src="res/android/splash-land-xhdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="land-xxhdpi" src="res/android/splash-land-xxhdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="land-xxxhdpi" src="res/android/splash-land-xxxhdpi.png" />
<gap:splash gap:platform="android" src="res/android/splash-port-ldpi.png" />
<gap:splash gap:platform="android" gap:qualifier="port-mdpi" src="res/android/splash-port-mdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="port-hdpi" src="res/android/splash-port-hdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="port-xhdpi" src="res/android/splash-port-xhdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="port-xxhdpi" src="res/android/splash-port-xxhdpi.png" />
<gap:splash gap:platform="android" gap:qualifier="port-xxxhdpi" src="res/android/splash-port-xxxhdpi.png" />

<!-- images are determined by width and height. The following are supported -->
<gap:splash gap:platform="ios" src="res/ios/Default~iphone.png" width="320" height="480"/>
<gap:splash gap:platform="ios" src="res/ios/Default@2x~iphone.png" width="640" height="960"/>
<gap:splash gap:platform="ios" src="res/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
<gap:splash gap:platform="ios" src="res/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
<gap:splash gap:platform="ios" src="res/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
<gap:splash gap:platform="ios" src="res/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
<gap:splash gap:platform="ios" src="res/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
<gap:splash gap:platform="ios" src="res/ios/Default-667h.png" width="750" height="1334"/>
<gap:splash gap:platform="ios" src="res/ios/Default-736h.png" width="1242" height="2208"/>
<gap:splash gap:platform="ios" src="res/ios/Default-Landscape-736h.png" width="2208" height="1242"/>

<!-- images are determined by width and height. The following are supported -->
<gap:splash gap:platform="winphone" src="res/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
```

### License

MIT
