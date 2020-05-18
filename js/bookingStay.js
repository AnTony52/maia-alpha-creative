var guest_number = 0;
var children_number = 0;
var baby_number = 0;
$(document).ready(function(){
    var guest_number = 0;
    var children_number = 0;
    var baby_number = 0;
    $(".guest__plus").click(function(){
        guest_number = guest_number + 1;
        $(".guest__number").html(guest_number);
    });
    $(".guest__minus").click(function(){
        if (guest_number > 0){
            guest_number = guest_number - 1;
            $(".guest__number").html(guest_number);
        }
        
    });
    $(".children__plus").click(function(){
        children_number = children_number + 1;
        $(".children__number").html(children_number);
    });
    $(".children__minus").click(function(){
        if (children_number > 0) {
            children_number = children_number - 1;
            $(".children__number").html(children_number);
        }
        
    });
});