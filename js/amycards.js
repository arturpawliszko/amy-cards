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
            $('#invalid-code').hide();
            $('#no-code').show();
            $('#no-code').addClass('animated shake');
            break;
        case 'MERRYXMAS':
            //alert('You\'ve won!');
            $('#invalid-code').hide();
            $('#no-code').hide();
            $('#redeem-container').addClass('animated bounceOutLeft');
            $('#redeem-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('#redeem-prize').attr('style', '');
                $('#redeem-container').attr('style', 'display:none');
                $('#redeem-prize').addClass('animated zoomIn');
            });
            break;
        default:
            $('#no-code').hide();
            $('#invalid-code').show();
            $('#invalid-code').addClass('animated shake');
    }
}