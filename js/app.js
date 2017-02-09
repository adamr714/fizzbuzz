$(document).ready(function(){

  $('#number-chooser').on("submit",function() {
    var choice = $("#number-choice").val();
    fizzBuzz(choice);
    event.preventDefault();

  });
});

function fizzBuzz(countTo) {

  var fizzBuzz = [];
  for (var i=1; i <= countTo; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz.push('fizzbuzz');
    }
    else if (i % 5 === 0) {
      fizzBuzz.push('buzz');
    }
    else if (i % 3 === 0) {
      fizzBuzz.push('fizz');
    }
    else {
      fizzBuzz.push(i);
    }
  }
  $('.js-results').html(fizzBuzz.map(function(item) {
      switch(item) {
        case 'fizzbuzz':
          return '<div class="fizz-buzz-item fizzbuzz">' + item + '</div>';
        case 'fizz':
          return '<div class="fizz-buzz-item fizz">' + item + '</div>';
        case 'buzz':
          return '<div class="fizz-buzz-item buzz">' + item + '</div>';
        default:
          return '<div class="fizz-buzz-item">' + item + '</div>';
      }
  }).join(''));
}

