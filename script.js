$(function () {

//hover functionality
$('div.seat').mouseenter(function (){
  $(this).addClass('hover');
});
//selected functionality
$('div.seat').on('click', function (){
  $(this).toggleClass('selected')
});

















































})
