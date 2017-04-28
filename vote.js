function main () {  
var resultVote = 0;
 var displayVote = 0;
    var showVote = 0;
  $('#obasanjo').on('click', function() {
    resultVote =  resultVote + 1;
    $(this).text("Thanks For Voting");
    //$(this).next();
      console.log(resultVote+ " " + "Votes for Obasanjo");
      $('#obasanjovotes').html("No of Votes: " + resultVote);
	});
    
    $('#muhammed').on('click', function() {
    displayVote =  displayVote + 1;
    $(this).text("Thanks For Voting");
    //$(this).next();
      console.log(resultVote+ " " + "Votes for Muhammed");
	$('#muhammedvotes').html("No of Votes: " + displayVote);
    });
    
    $('#jonathan').on('click', function() {
    showVote =  showVote + 1;
    $(this).text("Thanks For Voting");
    //$(this).next();
      console.log(resultVote+ " " + "Votes for Jonathan");
	$('#jonathanvotes').html("No of Votes: " + showVote);
    });
}

$(document).ready(main);