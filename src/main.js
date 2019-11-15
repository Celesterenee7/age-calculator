import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){


  const allBlanks = $(':input');
  for (var i = 0; i < boardSetup.length; i++) {
    if (boardSetup[i]) {
      $(allBlanks[i]).val(boardSetup[i]);
    }
  }

  $('button').click(function() {
    const thisBoard = [];
    let thisRow = [];
    const allNumberInputs = $(':input');
    for (var i = 0; i < allNumberInputs.length; i++) {
      const thisNumber = parseInt($(allNumberInputs[i]).val());
      thisRow.push(thisNumber);
      if (thisRow.length === 9) {
        thisBoard.push(thisRow);
        thisRow = [];
      }
    }
    console.log(thisBoard);

  });
});
