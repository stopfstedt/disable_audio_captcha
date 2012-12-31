# "Disable Audio Captcha" - Drupal Module

## About

This module disables the "Audio Challenge" link in Mollom-ized forms for Flash-incapable devices, such as iOS-powered smartphones.  
It uses JavaScript to detect whether Flash is available in the browser.

## Dependencies

### Drupal Modules

In addition to [Mollom](http://drupal.org/project/mollom), the [Libraries API](http://drupal.org/project/libraries) module must be installed and enabled.

### SWFObject

Download and extract the `swfobject.js` script from the latest distribution of the [SWFObject](http://code.google.com/p/swfobject/downloads/list) JavaScript library, and deploy it to a subdirectory named `swfobject` within the `libraries` directory of your Drupal installation.  
In other words, the SWFObject library must be located at `/<path-to-your>/libraries/swfobject/swfobject.js`.

## Get the Code

Get the latest version of this module on its [GitHub project page](https://github.com/ucsflibtopfstedt/disable_audio_captcha).