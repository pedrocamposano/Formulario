$(".input-file").change(function(){
   var input = (this);
   var image = $(this).siblings('.input-image');
   if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          image.attr('src', e.target.result);
          console.log(this);
        }
        reader.readAsDataURL(input.files[0]);
    }
});