$(document).ready(function () {



// Creo array di oggetti bici

const bikes = [];

bikes.push ({
    nome : "Specialized",
    peso : 6 
});

bikes.push ({
    nome : "Colnago",
    peso : 5 
});

bikes.push ({
    nome : "Cannondale",
    peso : 8 
});

bikes.push ({
    nome : "BMC Timemachine",
    peso : 7 
});

bikes.push ({
    nome : "Wilier Triestina",
    peso : 4 
});

bikes.push ({
    nome : "Trek Domane",
    peso : 9 
});

console.log(bikes);

//Scorro gli oggetti e salvo il peso minore

let pesoMin = bikes[0].peso;
let index = 0;

for (let i = 1; i < bikes.length; i++) {
    if(bikes[i].peso < pesoMin) {
        pesoMin = bikes[i].peso;
        index = i;
    }
}

 // destructuring dell'array bikes

 const [bici1,bici2,bici3,bici4,bici5,bici6] = bikes;
 console.log(bici1,bici2,bici3,bici4,bici5,bici6);
 

    /* console.log("LA BICI COL PESO MINORE E':");
    console.log(bikes[index].nome);
    console.log("IL SUO PESO E':");
    console.log(bikes[index].peso); */

// Stampo con template literal

console.log(
    
    `
    LA BICI CHE PESA MENO E': ${bikes[index].nome}
    IL SUO PESO E': ${bikes[index].peso}

    `
);

   





});