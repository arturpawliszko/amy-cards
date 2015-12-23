$( "#redeemButton" ).click(function() {
  redeemPrize();
});

$( "#redeemForm" ).keypress(function(e) {
    if(e.which == 13) {
        redeemPrize();
    }
});

function redeemPrize() {
    var code = $('#redeemForm').val().toUpperCase();

    switch(code) {
        case '':
            alert('Please enter a code!');
            break;
        case 'MERRYXMAS':
            //alert('You\'ve won!');
            $('#redeem-container').addClass('animated bounceOutLeft');
            $('#redeem-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('#redeem-prize').attr('style', '');
                $('#redeem-container').attr('style', 'display:none');
                $('#redeem-prize').addClass('animated zoomIn');
            });
            break;
        default:
            alert('Sorry, that\'s not a correct code');
    }
}