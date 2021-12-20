window.addEventListener('load', onLoad);

function onLoad() {
    //script JS Fabio
    const ctx = document.getElementById('chart-fabio').getContext('2d');
    const chartFabio = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    //script JS Valerio
    const ctxvalerio = document.getElementById('chart-valerio').getContext('2d');
    const chartValerio = new Chart(ctxvalerio, {
        type: 'pie',
        data: {
            labels: ['IOS', 'Android', 'BlackBurry', 'Symbian', 'Others'],
            datasets: [{
                label: '# of Votes',
                data: [30, 10, 20, 15, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // script marco

    
    const ctx_marco = document.getElementById('chart-marco').getContext('2d');
    const myChart = new Chart(ctx_marco, {
        type: 'polarArea',
        data: {
            labels: ['HTML', 'CSS', 'JS', 'JQuery', 'PHP', 'Python'],
            datasets: [{
                data: [33, 25, 20, 15, 30, 22],
                backgroundColor: [
                    'rgb(229, 76, 33, 0.7)',
                    'rgba(36, 73, 216, 0.7)',
                    'rgba(247, 223, 30, 0.7)',
                    'rgba(7, 100, 164, 0.7)',
                    'rgba(130, 140, 183, 0.7)',
                    'rgba(13, 249, 16, 0.7)'
                ],
                borderColor: [
                    'rgba(229, 76, 33, 1)',
                    'rgba(36, 73, 216, 1)',
                    'rgba(247, 223, 30, 1)',
                    'rgba(7, 100, 164, 1)',
                    'rgba(130, 140, 183, 1)',
                    'rgba(13, 249, 16, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Corsi svolti',
                font: {
                    size: 18,
                }
                }
            }
        },
    });


}
