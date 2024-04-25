//¿Cuantos días estuvo en Macondo Hildebrando?
//¿Regresó o murío?
//¿Cuanto dinero gastó?


//global variables
let i=true;
let budget=0;
let decision=0;
let death=false;
let days=0;
let hungry=null;
let suitCase={height:60,length:40,width:20};
let wifiPassword="";
let hotelBooking=null;

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

const airportWifi=function(){
    let i=true;
    let choice=0;
    while(i){
        choice=Number(prompt("¿Que deseas hacer?\n1. Descifrar la clave y pagar el acceso (Precio 50000).\n2. Volar sin realizar la reserva."));
        if((choice>0)&&(choice<3)){
            i=false;
            break;
        }else{
            alert("Por favor selecciona una opción válida");
        }
    }
    return choice;
}

const decodePassword=function(password){
    let stringArray=[];
    let binariesArray=[];
    stringArray=password.split(":")
    binariesArray=stringArray[1].split("-");
    for (let i = 0; i < binariesArray.length; i++) {
        binariesArray[i]=parseInt(binariesArray[i],2);
    }
    stringArray[1]=binariesArray.join("-");
    password=stringArray.join(":")
    return password;
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
    alert("Tus pasajes de ida y regreso valieron 800000 pesos, se descontaran de tu presupuesto.");
    budget-=800000; //tickets price
    showBudget(budget);
    alert("Acabas de llegar al aeropuerto y tienes hambre, debes decidir que comprar para comer.")
    decision=airportFood();//show menu, take user entry
    if (decision==1){
        budget-=15000;//Almohabana price
        showBudget(budget);
        alert("La almohabana estaba en mal estado, te ha enfermado y tienes que regresar del viaje.");
        i=false;//exit the game
        break;
    }else if (decision==2){
        budget -=23000;//subway price
        showBudget(budget);
        alert("El subway y la gaseosa calman bastante tu hambre.");
        hungry=false;
    }else if (decision==3){
        alert("Debes comer en Medellín para calmar tu hambre");
        hungry=true;//flag for eat in Medellin
    }
    alert("...Al llegar al check-in...");
    alert("Tu maleta mide "+suitCase.height+" de alto, "+suitCase.length+" de largo y "+suitCase.width+" de ancho. Por lo tanto exede el tamaño máximo permitido para los equipajes de mano (55x40x20).");
    decision=airportSuitCase();//show menu, save user entry
    if(decision==1){
        budget-=140000;//suitcase pay
        showBudget(budget);
        alert("Lograste solucionar el problema de la maleta, preparate para viajar a Medellín.")
    }else if(decision==2){
        suitCase=fixSuitCase(suitCase);//organiza suitcase size
        alert("Tu maleta ahora mide "+suitCase.height+" de alto, "+suitCase.length+" de largo y "+suitCase.width+" de ancho.\nAhora está dentro del máximo permitido para ser equipaje de mano, pero...");
        alert("Organizar tu equipaje te retrasó y perdiste el vuelo, debes pagar una multa de 250000 para viajar en el siguiente.");
        budget-=250000;//fly fine
        showBudget(budget);
    }
    //Saturday
    alert("...Llegando a Medellin...")
    alert("Estás en Medellín, la ciudad de la eterna primavera. Bienvenido!");
    if(hungry==true){
        alert("¿Recuerdas que no comiste en el aeropuerto de tu ciudad? Ahora el único restaurante abierto es uno de lujo y tienes que pagar 100000 por una cena");
        budget-=100000;//dinner price
        showBudget(budget);
        hungry=false;
    }
    alert("Mientras esperas el vuelo hacía Macondo necesitas hacer la reserva del hotel, pero no tienes internet así que buscas el wifi del aeropuerto.");
    alert("Caminando por el aeropuerto encuentras la clave del wifi, la cuál es: 'ElPassEs:01110010-01101001-01110111-01101001'");
    wifiPassword="ElPassEs:01110010-01101001-01110111-01101001";
    alert("Acceder a la red tiene un costo de 50000 y tienes que tomarte el tiempo de descifrar los números binarios de la clave.");
    decision=airportWifi();//show menu, save user entry
    if(decision==1){
        budget-=50000;
        showBudget(budget);
        wifiPassword=decodePassword(wifiPassword);
        alert(`Logras codificar la contraseña rapidamente (${wifiPassword}) y hacer la reserva antes de que salga el vuelo. La reserva del hotel te salió en 900000`);
        hotelBooking=true;//flag for hotel reservation
        budget-=900000;
        showBudget(budget);
    }else if(decision==2){
        alert("Prefieres volar sin reserva para no arriesgarte a perder otro vuelo, ojala no te salga caro no hacer la reserva.");
        hotelBooking=false;
    }
    alert("Finalmente, esperas que salga tu viaje a Macondo.");
}
showFinalMessage(days,budget,death);//game final message