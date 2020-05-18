// var $gallery1 = $('#slider-1 .slides').flickity({
//     pageDots: false,
//     prevNextButtons: false,
//     wrapAround: true,
//     draggable: false
//   });
     
//   var $gallery2 = $('#slider-2 .slides').flickity({
//     pageDots: false,
//     prevNextButtons: false,
//     wrapAround: true,
//     draggable: false
//   });
//   $('.detail-btn-next').on( 'click', function() {
//     $gallery1.flickity('next');
//     $gallery2.flickity('next');
//   });
//   $('.detail-btn-prev').on( 'click', function() {
//     $gallery1.flickity('previous');
//     $gallery2.flickity('previous');
//   });
// 
  var $gallery1 = $('#special-offers-container #slider-1 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    draggable: false
  });
     
  var $gallery2 = $('#special-offers-container #slider-2 .slides').flickity({
    pageDots: false,
    prevNextButtons: false,
    initialIndex: 1,
    wrapAround: true,
    draggable: false
  });
  $('#special-offers-container .detail-btn-next').on( 'click', function() {
    $gallery1.flickity('next');
    $gallery2.flickity('next');
  });
  $('#special-offers-container .detail-btn-prev').on( 'click', function() {
    $gallery1.flickity('previous');
    $gallery2.flickity('previous');
  });
  