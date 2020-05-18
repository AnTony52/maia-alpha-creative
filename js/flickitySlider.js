 // external js: flickity.pkgd.js

 var gallerySlide = document.querySelector('.gallery-slide');
 var flkty = new Flickity( gallerySlide, {
   imagesLoaded: true,
   percentPosition: false,
   wrapAround: true,
   autoPlay: 3000,
 });
//  get list of images
 var imgs = gallerySlide.querySelectorAll('.gallery-slide-cell img');
 // get transform property
 var docStyle = document.documentElement.style;
 var transformProp = typeof docStyle.transform == 'string' ?
   'transform' : 'WebkitTransform';
 
 flkty.on( 'scroll', function() {
     flkty.slides.forEach( function( slide, i ) {
         var img = imgs[i],
             x   = 0;
 
             if( 0 === i ) {
                 x = Math.abs( flkty.x ) > flkty.slidesWidth ? 
                 ( flkty.slidesWidth + flkty.x + flkty.slides[flkty.slides.length - 1 ].outerWidth + slide.target ) 
                 : ( slide.target + flkty.x );
             } else if( i === flkty.slides.length - 1 ) {
                 x = Math.abs( flkty.x ) + flkty.slides[i].outerWidth < flkty.slidesWidth ? 
                 ( slide.target - flkty.slidesWidth + flkty.x - flkty.slides[i].outerWidth ) 
                 : ( slide.target + flkty.x );
             } else {
                 x = slide.target + flkty.x;
             }
         img.style[ transformProp ] = 'translateX(' + x * ( -1/4 ) + 'px)';
     });
 });

