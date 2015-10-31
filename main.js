$(document).ready(init);
 
function init(){
  console.log('ready!');
  $('.stack').on('click', selectDisc);
  $('.tower').on('click', moveDisc);
  $('#discButton').on('click', makeDiscs);
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
    alert("YOU WIN!!!");
  }
}


// function makeDiscs(event){
//   $(".disc").remove();
//   $(".stackDiscs").remove();
//   var input = $('#inputVal').val();
//   for (var i = input; i > 0; i--){
//     var $div = $('<div>').addClass('stackDiscs');
//     var j = i;
//     var k = j;
//     var size = 20 + (k * 7) + "px";
//     var margin = (k * 4) + "%";
//     $stack1 = $('#stack1');
//     $div.css("width", size);
//     $div.css("margin-left", margin);
//     $div.css("margin-right", margin);
//     $stack1.prepend($div);
//   }
// }






