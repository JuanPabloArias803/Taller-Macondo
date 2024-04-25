//¿Cuantos días estuvo en Macondo Hildebrando?
//¿Regresó o murío?
//¿Cuanto dinero gastó?


//global variables
let i=true;
let budget=0;
let decision=0;
let death=false;
let days=0;
let hungry=true;
let suitCase={height:60,length:40,width:20}

const airportFood=function(){
    let i=true;
    let choice=0;
    while(i){
        choice=Number(prompt("¿Que deseas comer?\n1. Almohabana con gaseosa (Precio:15000).\n2. Subway con gaseaosa (Precio 23000).\n3. No comprar nada (Debes comer en Medellín)."));
        if((choice>0)&&(choice<4)){
            i=false;
            break;
        }else{
            alert("Por favor selecciona una opción válida.")
        }
    }
    return choice;
}

const airportSuitCase=function(){
    let i=true;
    let choice=0;
    while(i){
        choice=Number(prompt("¿Que deseas hacer con tu equipaje?\n1. Pagar el sobrecosto por el tamaño del equipaje (Precio:140000).\n2. Acomodar el equipaje para disminuir el tamaño"));
        if((choice>0)&&(choice<3)){
            i=false;
            break;
        }else{
            alert("Por favor selecciona una opción válida");
        }
    }
    return choice;
}

const fixSuitCase=function(suitCase){
    let heightReduction=(55/suitCase.height);
    let lengthReduction=(40/suitCase.length);
    let widthReduction=(20/suitCase.width);
    let lowerReduction=Math.min(heightReduction,lengthReduction,widthReduction);
    let newHeight=parseInt(suitCase.height*lowerReduction);
    let newLength=parseInt(suitCase.length*lowerReduction);
    let newWidth=parseInt(suitCase.width*lowerReduction);
    suitCase={height:newHeight,length:newLength,width:newWidth}
    return suitCase;
}

const showFinalMessage=function(days,budget,death){
    let life= death==false ? "Regresaste vivo de tus vacaciones" : "Moriste en tus vacaciones";
    let expenses=2500000-budget;
    alert("Llegaste al final de tu aventura.\nEstuviste en Macondo un total de "+days+" días.\nGastaste un total de "+expenses+" pesos.\n"+life)
}

const showBudget=function(budget){
    alert("Presupuesto restante:\n"+budget+".");
}


while(i){
    //Friday - Start vacations
    alert("Hola Hildebrando, bienvenido a esta aventura!");
    alert("Acabas de salir de trabajar y recibiste tu pago.\nEn la noche tienes el vuelo a Macondo, destino que escogiste para tus vaciones.");
    budget+=2500000; //payment
    showBudget(budget);
    alert("...Ese día en la noche...");
    alert("Tus pasajes de ida y regreso valieron 700000 pesos, se descontaran de tu presupuesto.");
    budget-=700000; //tickets price
    showBudget(budget);
    alert("Acabas de llegar al aeropuerto y tienes hambre, debes decidir que comprar para comer.")
    decision=airportFood();
    if (decision==1){
        budget-=15000;
        showBudget(budget);
        alert("La almohabana estaba en mal estado, te ha enfermado y tienes que regresar del viaje.");
        i=false;
        break;
    }else if (decision==2){
        budget -=23000;
        showBudget(budget);
        alert("El subway y la gaseosa calman bastante tu hambre.");
        hungry=false;
    }else if (decision==3){
        alert("Recuerda comer en Medellín para calmar tu hambre");
    }
    alert("...Al llegar al check-in...");
    alert("Tu maleta mide "+suitCase.height+" de alto, "+suitCase.length+" de largo y "+suitCase.width+" de ancho. Por lo tanto exede el tamaño máximo permitido para los equipajes de mano (55x40x20).");
    decision=airportSuitCase();
    if(decision==1){
        budget-=140000;
        showBudget(budget);
        alert("Lograste solucionar el problema de la maleta, preparate para viajar a Medellín.")
    }else if(decision==2){
        suitCase=fixSuitCase(suitCase);
        alert("Tu maleta ahora mide "+suitCase.height+" de alto, "+suitCase.length+" de largo y "+suitCase.width+" de ancho.\nAhora esta dentro del máximo permitido para ser equipaje de mano, pero...");
        alert("Organizar tu equipaje te retraso y perdiste el vuelo, debes pagar una multa de 250000.");
        budget-=250000;
        showBudget(budget);
    }
}
showFinalMessage(days,budget,death);