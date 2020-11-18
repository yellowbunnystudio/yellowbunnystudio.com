// this also uses fancybox v3.2 javascript

$(document).ready(function() {
//starting here is javascript settings for all using data-fancybox="editing"
  $('[data-fancybox="editing"]').fancybox({
  idleTime  : false,
  baseClass : 'fancybox-custom-layout',
  margin    : 0,
  gutter    : 0,
  infobar   : false,
  thumbs    : {
    hideOnClose : false,
    parentEl    : '.fancybox-outer'
  },
  touch : {
    vertical : false
  },
  keyboard: true,
  buttons : [
    'close',
    'thumbs',
    'share'
  ],
  animationEffect   : "fade",
  animationDuration : 300,
  onInit : function( instance ) {
    // Create new wrapping element, it is useful for styling
    // and makes easier to position thumbnails
    instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
  },
  caption : function(instance, item) {
    var caption = $(this).data('caption') || '';
    return '<h3>Photography</h3><h5> This is a collection of personal photography that I took</h5>' + caption;
  }
});
//ending here is javascript settings for all using data-fancybox="editing"








 //starting here is javascript settings for all using data-fancybox="color"
  $('[data-fancybox="color"]').fancybox({
  idleTime  : false,
  baseClass : 'fancybox-custom-layout',
  margin    : 0,
  gutter    : 0,
  infobar   : false,
  thumbs    : {
    hideOnClose : false,
    parentEl    : '.fancybox-outer'
  },
  touch : {
    vertical : false
  },
  keyboard: true,
  buttons : [
    'close',
    'thumbs',
    'share'
  ],
  animationEffect   : "fade",
  animationDuration : 300,
  onInit : function( instance ) {
    // Create new wrapping element, it is useful for styling
    // and makes easier to position thumbnails
    instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
  },
  caption : function(instance, item) {
    var caption = $(this).data('caption') || '';
    return '<h3>Design Projects</h3><h5>This collections is a few of the design projects that I have created.</h5>' + caption;
  }
});
//ending here is javascript settings for all using data-fancybox="color"







//starting here is javascript settings for all using data-fancybox="motion graphics"
 $('[data-fancybox="motiongraphics"]').fancybox({
 idleTime  : false,
 baseClass : 'fancybox-custom-layout',
 margin    : 0,
 gutter    : 0,
 infobar   : false,
 thumbs    : {
   hideOnClose : false,
   parentEl    : '.fancybox-outer'
 },
 touch : {
   vertical : false
 },
 keyboard: true,
 buttons : [
   'close',
   'thumbs',
   'share'
 ],
 animationEffect   : "fade",
 animationDuration : 300,
 onInit : function( instance ) {
   // Create new wrapping element, it is useful for styling
   // and makes easier to position thumbnails
   instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
 },
 caption : function(instance, item) {
   var caption = $(this).data('caption') || '';
   return '<h3>Branding Projects</h3><h5>This is a collection of the different branding projects that I have done or taken apart of</h5>' + caption;
 }
});
//ending here is javascript settings for all using data-fancybox="motion graphics"




