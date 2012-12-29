# "Disable Audio Captcha" - Drupal Module
## About

This module disables the "Audio Challenge" link in Mollom-ized forms for Flash-incapable devices, such as iOS-powered smartphones.
It uses JavaScript to detect whether Flash is available in the browser.

## Dependencies

### Drupal Modules

Download and enable the [Mollom](http://drupal.org/project/mollom) and [Libraries API](http://drupal.org/project/libraries) modules.

### SWFObject

Download and extract the `swfobject.js` script from the latest distribution of the [SWFObject](http://code.google.com/p/swfobject/downloads/list) JavaScript library, and deploy it to a subdirectory named `swfobject` within the `libraries` directory of your Drupal installation.
In other words, the SWFObject library must be located at `/<path-to-your>/libraries/swfobject/swfobject.js`.
