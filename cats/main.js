$(document).ready(function () {
    
// Definire array oggetti gatti {nome età colore e sesso}

    const cats = [

        {
            nome : "Virgola",
            eta : 10,
            colore : "Bianco",
            sesso : "F"
        },

        {
            nome : "Pallino",
            eta : 3,
            colore : "Tigrato",
            sesso : "M"
        },

        {
            nome : "Nico",
            eta : 5,
            colore : "Nero",
            sesso : "M"
        },

        {
            nome : "Nica",
            eta : 4,
            colore : "Rosso",
            sesso : "F"
        }
    ]

    console.log(cats);

    //Ciclo con for each e stampo proprietà nome e colore

    cats.forEach((element,i,array) => {
        console.log(` Il gatto  ${element.nome} è di colore ${element.colore}`);
        $("#cats").append(`<li> Il gatto  ${element.nome} è di colore ${element.colore} </li>`);
    });

});