$( "#redeemButton" ).click(function() {
  redeemPrize();
});

$( "redeemForm" ).keypress(function(e) {
    if(e.which == 13) {
        redeemPrize();
    }
});

function redeemPrize() {
    var code = $('#redeemForm').val();

    switch(code) {
        case '':
            alert('Please enter a code!');
            break;
        case 'MERRYXMAS':
            alert('You\'ve won!');
            break;
        default:
            alert('Sorry, that\'s not a correct code');
    }
}