$(document).ready(function(){
    $(".js-wp-1").waypoint(function(direction){
        $(".js-wp-1").addClass("animated bounceInLeft")
    },{
        offset: '70%'
    })
    $(".js-wp-2").waypoint(function(direction){
        $(".js-wp-2").addClass("animated bounceInUp")
    },{
        offset: '70%'
    })
    $(".js-wp-3").waypoint(function(direction){
        $(".js-wp-3").addClass("animated bounceInRight")
    },{
        offset: '70%'
    })
    $(".js-wp-4").waypoint(function(direction){
        $(".js-wp-4").addClass("animated fadeIn")
    },{
        offset: '70%'
    })
})