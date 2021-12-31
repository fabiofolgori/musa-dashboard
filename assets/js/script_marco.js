$(document).ready(function(){

    $('.main-carousel').flickity({

        // options
        cellAlign: 'center',
        contain: true,
        autoPlay: true,
        selectedAttraction: 0.009,
        friction: 0.15,
        prevNextButtons: false,
        freeScroll: true,
        wrapAround: true
    });

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
    
    console.log('ciao');

});
