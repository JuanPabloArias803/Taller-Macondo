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
            alert("La actividad para el día de hoy es disfrutar de la maravillosa playa privada del hotel. Preparate para la arena, el sol y el mar!");
            alert("Al llegar a la playa, un empleado del hotel te recuerda que tienes acceso bar todo incluído.")
            let j=true;
            while(j){
                choice=Number(prompt("¿Te gusta el alcohol?\n1. Si\n2. No"));
                if((choice>0)&&(choice<3)){
                    if(choice==1){
                        alert("En el día juegas voleibol, nadas en el mar, y montas en moto acuatica. Todo es genial pero...");
                        alert("El exeso de alcohol te produce dolores de cabeza y comienzas a perder la visión. Tienes que ir al hospital por lo que terminan tus vacaciones.");
                        j=false;
                        return;
                    }else if(choice==2){
                        alert("En el día juegas voleibol, nadas en el mar y montas en moto acuatica. Todo es genial.");
                        alert("Terminas tu día de maravilla, eres consciente de que el alcohol no es necesario para divertirse");
                        j=false;
                    }
                }else{
                    alert("Ingresa una opción válida");
                }
            }
        }else if(colorSelect=="Azul"){
            alert("La actividad para el día de hoy es disfrutar de los salones que el hotel dispone para sus huespedes. El hotel cuenta con salón de baile, salón de bingo y casino.");
            alert("Debes decidir a cuál de los tres salones asistir durante el día.");
            let j=true;
            while(j){
                choice=Number(prompt("¿Que salón prefieres?\n1. Salón de baile.\n2. Salón de Bingo.\n3. Casino."));
                if((choice>0)&&(choice<4)){
                    if(choice==1){
                        choice=confirm("Bailas todo el día con una persona hermosa. Te invita a pasar la noche juntos ¿Aceptas?");
                        if(choice){
                            alert("Pasan una noche maravillosa juntos, pero al despertar te das cuenta que se fue y te robo tu dinero.");
                            budget=0;
                            showBudget(budget);
                        }else{
                            alert("Decides pasar de la propuesta ya que no te interesan las relaciones pasajeras. Tu día termina bien bailando con otras personas.");
                        }
                        j=false;
                    }else if(choice==2){
                        alert("Cuando llegas al salón de bingo, un recepcionista te avisa que la entrada al juego vale 100000.");
                        let bingoPrice=100000;
                        if (bingoPrice<budget){
                            choice=confirm("¿Deseas entrar al bingo?");
                            if(choice){
                                budget-=bingoPrice;
                                showBudget(budget);
                                let bingoWin=Math.floor(Math.random()*11);
                                if(bingoWin==0){
                                    alert("Ganaste el premio mayor del bingo!!!\nFelicidades, acabas de ganar el premio mayor del bingo, el premio son 5000000");
                                    budget+=5000000;
                                    showBudget(budget);
                                }else{
                                    alert("No ganas en el bingo, pero disfrutas mucho el juego y el buffet ofrecido, tu día termina bien.")
                                }
                            }else{
                                alert("Decides no apostar al bingo, pero el recepcionista te invita a disfrutar del buffet. Tu día termina bien.")
                            }
                        }else{
                            alert("No te alcanza para entrar al Bingo. Pasas todo el día aburrido viendo a los demás huespedes jugar.");
                        }
                        j=false;
                    }else if(choice==3){
                        alert("Bienvenido al casino, el lugar preferido por los ludopatas.");
                        let k=true;
                        while(k){
                            showBudget(budget);
                            choice=confirm("¿Deseas apostar todo tu dinero en la ruleta?");
                            if(choice){
                                let m=true;
                                let rouletteResult=null;
                                while(m){
                                    choice=Number(prompt("¿Negro o Rojo?\n1. Negro.\n2. Rojo."));
                                    rouletteResult=Math.floor(Math.random()*2);
                                    if((choice>0)&&(choice<3)){
                                        if(choice==1){
                                            if(rouletteResult==0){
                                                alert("Escoges Negro.");
                                                alert("La ruleta cae en Negro.");
                                                alert("Ganaste!");
                                                budget*=2;
                                                showBudget(budget);
                                            }else{
                                                alert("Escoges Negro.");
                                                alert("La ruleta cae en Rojo.");
                                                alert("Perdiste...");
                                                budget=0;
                                                showBudget(budget)
                                            }
                                        }else if(choice==2){
                                            if(rouletteResult==1){
                                                alert("Escoges Rojo.");
                                                alert("La ruleta cae en Rojo.");
                                                alert("Ganaste!");
                                                budget*=2;
                                                showBudget(budget);
                                            }else{
                                                alert("Escoges Rojo.");
                                                alert("La ruleta cae en Negro");
                                                alert("Perdiste...");
                                                budget=0;
                                                showBudget(budget);
                                            }
                                        }
                                        m=false;
                                    }else{
                                        alert("Introduce una opción válida.")
                                    }
                                }
                                if(budget==0){
                                    alert("La ludopatia te llevo a perder todo tu dinero, decides volver a tu habitación a llorar en silencio y así termina tu día.");
                                    k=false;
                                }
                            }else{   
                                alert("Terminas el día en el casino disfrutando del buffet ofrecido.");
                                k=false;
                            }
                            
                        }
                        j=false;
                    }
                }else{
                    alert("Introduce una opción válida.")
                }
            }
        }else if(colorSelect=="Verde"){
            let j=true;
            alert("La actividad para el día de hoy es disfrutar una caminata dirigida por un guía del hotel, esoge tu ropa más cómoda ya que avisan que es una caminata larga.");
            while(j){
                choice=Number(prompt("¿Deseas asistir a la caminata guiada, o prefieres salir a conocer el pueblo de Macondo por tu cuenta?\n1. Asistir a la caminata con el guía del hotel.\n2. Conocer Macondo por tu cuenta."));
                if((choice>0)&&(choice<3)){
                    if(choice==1){
                        alert("La caminata inicia de manera aburrida, te comienzas a sentir cansado rapidamente.");
                        alert("El guía del hotel los adentra en un bosque lo cuál empieza a ser sospechoso...");
                        alert("Llegan a la cascada más hermosa que tus ojos han podido ver, aprovechas para fotografiar esta maravilla natural.");
                        alert("Finalmente vuelven sanos al hotel. Terminas el día cansado pero maravillado porl o que viste.").
                        j=false;
                    }else if(choice==2){
                        alert("Decides no ir a la caminata, en lugar de eso salir a conocer el pueblo de Macondo.");
                        alert("Llegas al pueblo y todo es hermoso, las casas tienen una preciosa arquitectura y disfrutas saludar a algunos locales.");
                        alert("Como no hablas Macondes, rapidamente descubren que eres extranjero.");
                        alert("Un grupo de bandidos locales descubren que eres extranjero y te abordan en su camioneta. Te suben encañonado con una pistola y te llevan a un lugar lejano.");
                        alert("Te piden 300000 para dejarte en libertad.");
                        let steal=300000;
                        if(steal>budget){
                            showBudget(budget);
                            alert("Los bandidos deciden matarte por no tener el dinero suficiente. La delincuencia ha acabado con tu vida.");
                            death=true;
                            return;
                        }else{
                            alert("Decides pagarles para que te liberen, no queda más opción cuando tienes una pistola ne la cabeza.");
                            budget-=300000;
                            showBudget(budget);
                            alert("Vuelves al hotel asustado, termina tu día con un poco de pánico.");
                        }
                        j=false;
                    }
                }else{
                    alert("Introduce una opción válida.");
                }
            }
        }
    }
}

const showFinalMessage=function(days,budget,death){
    let life= death==false ? "Regresaste vivo de tus vacaciones" : "Moriste en tus vacaciones";
    let expenses=2500000-budget;
    if(expenses>=0){
        alert("Llegaste al final de tu aventura.\nEstuviste en Macondo un total de "+days+" días.\nGastaste un total de "+expenses+" pesos.\n"+life);
    }else{
        alert("Llegaste al final de tu aventura.\nEstuviste en Macondo un total de "+days+" días.\nGanaste un total de "+(expenses*-1)+" pesos.\n"+life);
    }
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
