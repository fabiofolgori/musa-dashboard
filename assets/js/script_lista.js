// genero numeri randomici
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }


    var nota = {
        list: [
            {
                name: "Schedule meeting with new client",
                status: false,
                quantity: 1
            }, {
                name: "Create email address for new intern",
                status: false,
                quantity: 5
            }, {
                name: "Copy backups to offsite location",
                status: false,
                quantity: 2
            }
        ]
    }
    var bgColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
    ];
    var bordColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
    ]

    //add element
    function addElement() {
        //funzione add element
        let newItemName = prompt("Inserisci il prodotto:");
        let exist = false;

        for (key in nota.list) {
            //salvo elemento status nella variabile
            let item = nota.list[key];
            if (item.name == newItemName) {
                exist = true;
                item.quantity++;
            }
        }

        if (!exist && newItemName != "") {
            let newItem = {
                name: newItemName,
                status: false,
                quantity: 1
            }
            // aggiungere oggetto nell'array
            nota.list.push(newItem);
            // stampa lista html

        }
        if (newItemName == "") {
            alert("Aggiungi un prodotto!!!");
        }

        renderHTML();
    }

    function removeElement(key) {
        nota.list.splice(key, 1);
        renderHTML();
    }

    function removeAll(key) {
        nota.list.splice(key);
        renderHTML();
    }

    function increase(key) {
        let item = nota.list[key];
        item.quantity++;
        renderHTML();
    }

    function decrease(key) {
        let item = nota.list[key];
        if (item.quantity > 1) {
            item.quantity--;
            renderHTML();
        }
    }

    function renderHTML() {
        let output = '<ul>';
        //ciclo la lista
        for (key in nota.list) {
            //salvo elemento status nella variabile
            let item = nota.list[key];
            //verifico elemento status se vero o falso
            let checked = item.status ? "checked" : ""; //operatore ternario
            let random = getRndInteger(0, 5);
            //creo il codice html con le variaibili
            output += `
        <li style="background: ${bgColor[random]}; border: 1px solid ${bordColor[random]}; border-radius:5px; margin: 0.5rem 0;color:${bordColor[random]};">
          <input type="checkbox" ${checked}> <label style="margin-left: 0.5rem" class="label">${item.name}</label> 
                    <span>
                        <span class="simbol" style="color:grey" onclick="removeElement(${key})"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="20" viewBox="0 0 512 512"><title>Trash</title><path fill="${bordColor[random]}" d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></span>
                        <span class="simbol" style="border: 1px solid ${bordColor[random]}; border-radius:5px;" onclick="increase(${key})">+</span>
                        <span class="number">${item.quantity}</span>
                        <span class="simbol" style="border: 1px solid ${bordColor[random]}; border-radius:5px;" onclick="decrease(${key})">-</span>
                    </span>
        </li> 
     `;
        }
        output += '</ul>';
        // sostituisco variabile html all'elemento con #list
        document.getElementById('lista').innerHTML = output;
    }
    // al caricamento delle pagina fai un rendering dell'oggeto
    renderHTML();

