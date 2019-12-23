// $(document).ready(function(){
//     $('.images-wrapper').waypoint(function(direction){
//         $('.images-wrapper').addClass("animated bounceInUp")
//     },{
//         offset: '70%'
//     });
// });
$(document).ready(function(){
    $(".js-wp-1").waypoint(function(direction){
        $(".js-wp-1").addClass("animated bounceInUp")
    },{
        offset: '70%'
    })
    $(".iphone-on").waypoint(function(direction){
        $('.iphone-on').addClass('animated fadeIn')
    },{
        offset: '70%'
    })

    $('.iphone-btn').delay(500).animate({top :'3px'},300);
    $('.iphone-btn').delay(500).animate({top :'0px'},300);
})