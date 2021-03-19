$(document).ready(function () {

    //MILESTONE 1
    
// Definire array oggetti gatti {nome età colore e sesso}

    const cats = [

        {
            nome : "Virgola",
            eta : 8,
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

    cats.forEach((element) => {
        //console.log(` Il gatto  ${element.nome} è di colore ${element.colore}`);
        $("#cats1").append(`<li> Il gatto  ${element.nome} è di colore ${element.colore} </li>`);
    });


    //MILESTONE 2

    //Dividere i gatti in due array in base al sesso con filter

    //primo metodo

    /* const catsM = cats.filter((element) => element.sesso == "M" );
    //console.log(catsM);
    
    catsM.forEach((element) => {
        $("#cats2").append(`<li class = "azzurro"> ${element.nome}  è di colore ${element.colore} <i class="fas fa-ribbon"></i> </li> `);
    });
    

    const catsF = cats.filter((element) => element.sesso == "F" );
    //console.log(catsF);

    catsF.forEach((element) => {
        $("#cats2").append(`<li class = "rosa"> ${element.nome} è di colore ${element.colore} <i class="fas fa-ribbon"></i> </li> `);
    }); */

    // Metodo più flessibile

    cats.forEach((element) => {

        let colore = "azzurro";
        if(element.sesso == "M") {
            let opacity = "young";
            if(element.eta < 5) {
                $("#cats2").append(`<li class = "${colore}"> ${element.nome}  è di colore ${element.colore} <i class="fas fa-ribbon ${opacity}"></i> </li> `);
            } else {
                let opacity = "old";
                $("#cats2").append(`<li class = "${colore}"> ${element.nome}  è di colore ${element.colore} <i class="fas fa-ribbon ${opacity}"></i> </li> `);
            }
            
        } else {
            
            let colore = "rosa";
            let opacity = "young";
            if(element.eta < 5) {
                $("#cats2").append(`<li class = "${colore}"> ${element.nome}  è di colore ${element.colore} <i class="fas fa-ribbon ${opacity}"></i> </li> `);
            } else {
                let opacity = "old";
                $("#cats2").append(`<li class = "${colore}"> ${element.nome}  è di colore ${element.colore} <i class="fas fa-ribbon ${opacity}"></i> </li> `);
            }
        }
       
    });


});