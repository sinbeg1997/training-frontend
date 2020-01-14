$(document).ready(function(){
    $(".js-wp-3").waypoint(function(direction){
        $(".js-wp-3").addClass("animated bounceInLeft")
    },{
        offset: '70%'
    })
    $(".js-wp-1").waypoint(function(direction){
        $(".js-wp-1").addClass("animated bounceInLeft")
    },{
        offset: '70%'
    })
    $(".js-wp-2").waypoint(function(direction){
        $(".js-wp-2").addClass("animated bounceInRight")
    },{
        offset: '70%'
    })
   
})
