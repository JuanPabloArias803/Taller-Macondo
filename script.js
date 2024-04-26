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
let taxiMessage="Taxi me puede llevar al hotel mariposas amarillas";

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

const translateMacondes=function(message){
    let vocalsValidator=["a","e","i","o","u"];
    let newMessage="";
    for (let i = 0; i < message.length; i++) {
        if(vocalsValidator.includes(message[i])){
            newMessage+="i";
        }else{
            newMessage+=message[i];
        }
    }
    return newMessage;
}

const rockPaperScissors=function(){
    let i=true;
    let choice=0;
    let result="";
    let taxiPosibleChoice=["piedra","papel","tijera"];
    let taxiRandomChoice="";
    let gameResults=[{Hildebrando:"papel",taxista:"papel",result:"Hubo empate"},
                    {Hildebrando:"papel",taxista:"piedra",result:"Ganaste"},
                    {Hildebrando:"papel",taxista:"tijera",result:"Perdiste"},
                    {Hildebrando:"piedra",taxista:"papel",result:"Perdiste"},
                    {Hildebrando:"piedra",taxista:"piedra",result:"Hubo empate"},
                    {Hildebrando:"piedra",taxista:"tijera",result:"Ganaste"},
                    {Hildebrando:"tijera",taxista:"papel",result:"Ganaste"},
                    {Hildebrando:"tijera",taxista:"piedra",result:"Perdiste"},
                    {Hildebrando:"tijera",taxista:"tijera",result:"Hubo empate"}];
    while(i){
        choice=Number(prompt("¿Piedra, papel o tijera?\n1. Piedra\n2. Papel\n3. Tijera"));
        if((choice>0)&&(choice<4)){
            if(choice==1){
                alert("Eliges piedra.");
                choice="piedra";
            }else if(choice==2){
                alert("Eliges papel.");
                choice="papel";
            }else if(choice==3){
                alert("Eliges tijera.");
                choice="tijera";
            }
            taxiRandomChoice=taxiPosibleChoice[Math.floor(Math.random()*taxiPosibleChoice.length)];
            alert("El taxista elige "+taxiRandomChoice+".");
            gameResults.forEach(element => {
                if((element.Hildebrando==choice)&&(element.taxista==taxiRandomChoice)){
                    result=element.result;
                }
            });
            i=false;
            break;
        }else{
            alert("Elige una opción válida");
        }
    }
    return result;
}

const macondoDays=function(){
    let colorOptions=["Amarillo","Rojo", "Azul", "Verde"];//dresscode options
    let colorSelect="";
    let choice=0;
    let i=true;//while flag
    alert("Bienvenido al hotel mariposas amarillas! El mejor hotel para disfrutar tus vacaciones en Macondo!.");
    alert("El hotel mariposas amarillas tiene un código de vestimenta por colores, cada día podras vestir de un color diferente y según tu elección el hotel tendrá actividades diferentes definidas para ese día.")
    while(days<4&&i){
        days++;
        let j=true;//while flag
        let menu="¿Que color de vestimenta deseas usar el día de hoy?";
        alert(`Día ${days}.`);
        for (let i = 0; i < colorOptions.length; i++) {
            menu+=`\n${i+1}. ${colorOptions[i]}`
        }
        while(j){
            choice=Number(prompt(menu));
            if((choice>0)&&(choice<colorOptions.length+1)){
                colorSelect=colorOptions[choice-1];
                colorOptions.splice(choice-1,1);
                j=false;
                break;
            }else{
                alert("Introduce una opción valida");
            }
        }
        if(colorSelect=="Amarillo"){
            alert("La actividad para el día de hoy es disfrutar la piscina del hotel, alista tu toalla para relajarte con un baño.");
            alert("Cuando llegas a la piscina descubres que tiene un raro olor...");
            let j=true;
            while(j){
                choice=Number(prompt("¿Que deberías hacer?\n1. No darle importancia al olor y meterte a la piscina.\n2. Evitar la piscina por su olor y disfrutar del sol fuera de esta."));
                if((choice>0)&&(choice<3)){
                    if(choice==1){
                        alert("La piscina tenía una cantidad de cloro mortal para los seres humanos, mueres antes de que alguien pueda briundarte ayuda.");
                        death=true;
                        return;
                    }else if(choice==2){
                        alert("Minutos despues de relajarte en el sol, un empleado corre a decirte que no se puede ingresar a la psicina por que tiene mucho cloro y te puedes morir");
                        alert("Terminas de pasar el día tranquilo bajo el sol");
                    }
                    j=false;
                }else{
                    alert("Selecciona una opción válida");
                }
            }
        }else if(colorSelect=="Rojo"){
            alert(colorSelect);
        }else if(colorSelect=="Azul"){
            alert(colorSelect);
        }else if(colorSelect=="Verde"){
            alert(colorSelect);
        }
    }
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
    alert("...Llegando a Medellin...");
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
        budget-=50000;//wifi conexion price
        showBudget(budget);
        wifiPassword=decodePassword(wifiPassword);//decode the binaries in password
        alert(`Logras codificar la contraseña rapidamente (${wifiPassword}) y hacer la reserva antes de que salga el vuelo. La reserva del hotel te salió en 900000`);
        hotelBooking=true;//flag for hotel reservation
        budget-=900000;//hotel booking price
        showBudget(budget);
    }else if(decision==2){
        alert("Prefieres volar sin reserva para no arriesgarte a perder el vuelo, ojala no te salga caro no hacer la reserva.");
        hotelBooking=false;
    }
    alert("Finalmente, esperas que salga tu viaje a Macondo.");
    alert("...Llegando a Macondo...");
    alert("Cuando estás saliendo del aeropuerto de Macondo, descubres que allí se habla otro idioma completamente diferente.\nEl macondes es un idioma particular que cambia todas las vocales por la letra i.");
    alert("Necesitas tomar un taxi, pero no sabes como decirle al conductor: "+taxiMessage);
    taxiMessage=translateMacondes(taxiMessage);//translate spanish to Macondes
    alert("Despues de pensar un rato, le dices al conductor: "+taxiMessage+".\nFinalmente te entiende y procede a llevarte a tu destino");
    alert("...Llegando al hotel...");
    alert("El taxista te quiere cobrar 300000, pero tu no deseas pagar esta injusta cifra.");
    alert("Logras negociar un juego de piedra papel o tijera. Si ganas no pagas el viaje, si pierdes pagas los 300000 que quiere el taxista y si hay empate solo pagas la mitad.");
    decision=rockPaperScissors();//show rock, paper and scissors minigame
    alert(decision);
    if(decision=="Ganaste"){
        alert("Excelente! evitaste pagar los 300000 que te exigía el taxista.");
    }else if(decision=="Perdiste"){
        alert("Lamentablemente tienes que cumplir el trato y pagar los 300000");
        budget-=300000;
        showBudget(budget);
    }else if(decision=="Hubo empate"){
        alert("Debido al empate solo tienes que pagar 150000, la mitad de lo exigido por el taxista");
        budget-=150000;
        showBudget(budget);
    }
    alert("Después de tu juego con el taxista te dispones a entrar al hotel.");
    if(hotelBooking==false){
        alert("Cuando entras en la recepción del hotel, recuerdas que no hiciste la reserva en el aeropuerto de Medellín.");
        alert("El recepcionista te menciona que por no reservar, el precio de la estadía es de 1100000");
        let hotelPrice=1100000;
        if(hotelPrice>budget){
            showBudget(budget);
            alert("No te alcanza para pagar la estadia en el hotel de tus sueños, la gran desilusión te hace decidir volver de tus vacaciones.");
            days++;//only one day in Macondo
            i=false;//exit the game
            break;
        }else{ 
            budget-=hotelPrice;
            showBudget(budget);
            macondoDays();
        }
    }else{
        macondoDays();
    }
    i=false;
    break;
}
showFinalMessage(days,budget,death);//game final message
