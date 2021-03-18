$(document).ready(function () {
    

    //Creo array di oggetti squadre con proprietà nome punti falli

    const squadreCalcio = [];

    squadreCalcio.push ({

        nome : "Juventus",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Milan",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Inter",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Roma",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Lazio",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Fiorentina",
        punti : 0,
        falliSubiti : 0
        
    });

    squadreCalcio.push ({

        nome : "Napoli",
        punti : 0,
        falliSubiti : 0
        
    });

    

    //genera numeri random per le proprietà punti e falli


    for (let i = 0; i < squadreCalcio.length; i++) {
        squadreCalcio[i].punti = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        squadreCalcio[i].falliSubiti =  Math.floor(Math.random() * (100 - 1 + 1) + 1);
    }

        console.log(squadreCalcio);

    // Creo array falli

        const falliSquadre = [];

    // Scorro array squadre 
    // Destrutturo proprietà volute
    // Pusho in array fallI

        for (let i = 0; i < squadreCalcio.length; i++) {
            const {nome,falliSubiti} = squadreCalcio[i];
            falliSquadre.push({nome,falliSubiti})
            /* console.log({nome,falliSubiti}); */
            
        }

        //Stampo array falli

        console.log(falliSquadre);
});