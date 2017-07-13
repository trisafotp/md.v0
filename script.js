$(function () {

var $seats=$('div.seat') //efficient?

//hover functionality
$seats.on('mouseover', function (){
  //$(this).addClass('hover');
  console.log('I see you!')
});
//selected functionality
$seats.on('click', function (){
  $(this).toggleClass('selected')
});

















































})
