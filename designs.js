// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
  $('#sizePicker').submit(function(){
    event.preventDefault();

    var row, column, color;

    row = $('#inputWidth').val();

    column = $('#inputHeight').val();
    
    makeGrid(row, column);
  });
});

function makeGrid(height, width) {
$('tr').remove();
// Your code goes here!
for(var x = 1; x <= height; x++){
  $('#pixelCanvas').append('<tr></tr>');
  for(var y = 1; y <= width; y++){
    $('tr').filter(':last').append('<td></td>')
  };
};

$('td').click(function(){
  color = $('#colorPicker').val();
  if($(this).attr('style')){
    $(this).removeAttr('style');
  }else{
    $(this).css('background-color',color);
  }
});
}
