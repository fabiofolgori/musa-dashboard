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
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2022-01-01',
    initialView: 'dayGridMonth',
    height: 600,
    weekNumbers: true,
    weekText: "Settimana ",
    selectable: true,
    events: [
      {
        title: 'Corso Javascript',
        start: '2022-01-11T17:00:00',
        allDay: true,
      },
      {
        title: 'Corso Javascript',
        start: '2022-01-13T17:00:00',
        allDay: true,
      },
      {
        title: 'Corso HTML',
        start: '2022-01-09',
        allDay: true,
      },
      {
        title: 'Corso HTML',
        start: '2022-01-12',
        allDay: true,
      },
      {
        title: 'Corso CSS',
        start: '2022-01-16',
        allDay: true,
      },
      {
        title: 'Corso CSS',
        start: '2022-01-18',
        allDay: true,
      },
      {
        title: 'Corso PYTHON',
        start: '2022-01-17',
        allDay: true,
      },
      {
        title: 'Corso PYTHON',
        start: '2022-01-19',
        allDay: true,
      }
    ],
    eventBackgroundColor: '#072a5e',
    eventBorderColor: 'red',
    eventTextColor: 'yellow',
    selectable: true,
  });

  calendar.render();
});