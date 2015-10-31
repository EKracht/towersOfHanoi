$(document).ready(init);

function init(){
  console.log('ready!');
  $('.stack').on('click', selectDisc);
  $('.tower').on('click', moveDisc);
}

function selectDisc(event){
  var $target = $(this).find(">:first-child");

  var isSelected = $target.hasClass('selected');

  if(isSelected){
    $target.removeClass('selected');
  } else {
    $('.selected').removeClass('selected');
    $target.addClass('selected');
  }
}

function moveDisc(event){
  var $this = $(this).find(">:first-child");

  if (!$('.selected').length || $this.children('.selected').length){
    return;
  }

  var $discy = $this.find(">:first-child");
  var $size = $discy.data('size');
  var $selectedData = $('.selected').data('size');
  console.log($selectedData);
  console.log('$size', $size);
  if ($selectedData < $size || !$size) {
    var $selected = $('.selected').detach().removeClass('selected');
  $this.prepend($selected);
  }
  winningCondition();
}
 
function winningCondition(){
  if ($('#stack3 div').length > 2) {
    alert('YOU WIN!!!');
  }
}








