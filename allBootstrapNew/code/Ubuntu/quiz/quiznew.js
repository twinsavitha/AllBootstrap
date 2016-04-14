$(document).ready(function(){
    $("#jsModal").click(function(){
        $("#myModalTwo").modal();
        //$("#myModalTwo").animate({left: '250px'});
    });
     $('.vacation').on('keyup', '.quantity', function(){
            var price = +$(this).closest('.vacation').data('price');
            var quanity = +$(this).val();
            alert(quantity.value);// if .value is not used u getta object HTMLInputElement
            $('#total').text(price * quanity);
      });
});