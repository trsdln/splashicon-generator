# splashicon-generator

Automatic icon resizing for Cordova. Create an icon in the root folder of your Cordova project and use cordova-icon to automatically resize and copy it for all the platforms your project supports (currenty works with iOS and Android).

### Installation

     $ sudo npm install splashicon-generator -g

### Usage

Create an ```icon.png``` or a ```splash.png``` file in the root folder of your cordova project and run:

     $ splashicon-generator

For optimal results, your file has to be square, and at least 180*180px.
To be future-proof, since the generated file dimensions are going to evolve, you should probably use 512*512px or 1024*1024px.

### Requirements

- ImageMagick

Install on a Mac:

     $ brew install imagemagick

On windows see http://www.imagemagick.org/script/binary-releases.php#windows

On linux:

    $ sudo apt-get install imagemagick

### License

MIT
