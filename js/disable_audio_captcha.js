Drupal.behaviors.disableAudioCaptcha = function (context) {
  var version = swfobject.getFlashPlayerVersion();
  // if swfplayer cannot get any info on the flash version then we must assume its not installed
  if (! version.major && ! version.minor) {
     // get the audio-captcha-link(s)
     jQuery('a.mollom-audio-captcha').each(function () {
       // add a class selector so the link can be restyled (e.g. text strikethrough)
       jQuery(this).addClass('disabled-mollom-audio-captcha');
       // unbind any previously attached click event handlers
       jQuery(this).unbind("click");
       // disable click events
       jQuery(this).bind("click", function(event) {
         event.stopPropagation();
         event.preventDefault();
       });
     });
  }
};