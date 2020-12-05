$("span.head-finder").on("click",function(){
  $("span.head-finder").slideUp().slideDown().slideUp().slideDown();

});

//DOM query for animation for header
$("span.head-finder").on("mouseover",function(){
$("span.head-finder").addClass("color-animation-head");
setTimeout(function(){
  $("span.head-finder").removeClass(" color-animation-head");
},1000);
});

//DOM query for animation for sub
$("span.sub-finder").on("mouseover",function(){
$("span.sub-finder").addClass("color-animation-sub");
setTimeout(function(){
  $("span.sub-finder").removeClass(" color-animation-sub");
},1000);
});
