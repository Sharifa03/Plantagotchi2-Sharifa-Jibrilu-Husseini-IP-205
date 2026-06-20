//--------------BLOK 0 AANROEPEN IN HTML-----------------//
//QuerySelector: Met hulp van kennis clip querySelector, datatypes en array, variabelen  op DLO, extra uitleg: chatgpt
//selecteert de buttons
let waterBtn = document.querySelector("#water");
let sunlightBtn = document.querySelector("#sunlight");
let happyBtn = document.querySelector("#happy");

// selecteert de bars
let waterBar = document.querySelector("#waterBar");
let sunBar = document.querySelector("#sunBar");
let happyBar = document.querySelector("#happyBar");

//selecteert de reset knop en game text
let gameText = document.querySelector("#gameText");
let resetBtn = document.querySelector("#resetBtn");

//selecteert de afbeelding en controleert de status
let plant = document.querySelector("#plant")
// let imageStatus = true;

//selecteert geluids map in de DOM
let gameOverSound = new Audio("music/alphix-game-over.mp3");
gameOverSound.volume = 1;

//--------------BLOK 1 BUTTONS ON CLICK-----------------//
//Button functions: Met hulp van lesopdracht 4a "lightbulb" kennis clip: EventListeners, functies, recap&console op DLO
//button functions - water
function geefWater() {
    waterBar.value = Number(waterBar.value) + 5;
    console.log("Plant krijgt water");
}
waterBtn.addEventListener("click", geefWater);

//button functions - zonlicht
function geefZon() {
    sunBar.value = Number(sunBar.value) + 5;
    console.log("Plant krijgt zonlicht");
}
sunlightBtn.addEventListener("click", geefZon);

//button functions - happy
function geefHappy() {
    happyBar.value = Number(happyBar.value) + 5;
    console.log("Plant krijgt zonlicht");
}
happyBtn.addEventListener("click", geefHappy);


//-------------BLOK 2 IMAGE CHANGE------------------//


//checkstats functie: met behulp lesopdracht 4a "lightbulb", MDN.COM en Chatgpt
//Afbeelding wordt aangepast zodra de bar 50 punten laag is
function checkStats() {
    console.log(waterBar.value);

    if (waterBar.value >= 50) {
        plant.src = "image/alo-vera-happy.png";
        
    }
    else {
        plant.src = "image/alo-vera-thirsty.png";
        
    }
    
}

//-----------BLOK 3 GAME OVER TEXT AND SOUND-----------------------------------//


// gameOver functie: Met behulp van ifElse kennis clip op DLO, inzicht code klasgenoot en Chatgpt
//functie zorgt ervoor dat "game over tekst tevoorschijn komt"

//Rubriek onderdeel complexiteit: 1 niet in de les behandelde javascript aspect: Muziek
//Bron: Youtube: "Sounds and Music in JavaScript games" by Kenny Yip Coding
// Audio source: https://pixabay.com/sound-effects/search/game/
// Met behulp van chat gpt

function gameOver() {

    if (waterBar.value <= 0 || sunBar.value <= 0 || happyBar.value <= 0) {
        
        gameText.textContent = "Game Over";
        gameOverSound.play();

        console.log("Game Over");

    }
    //hier kan je die dead state plant image neerzetten
    //extra conditie, 
}

//---------------------BLOK 3 WAARDE AND GAME OVER------------------------------------//

//Bar waarde omlaag functies: Met kennis clips: functies, recap&console op DLO, inzicht code klasgenoot, chatgpt
//haalt waarde omlaag van de water bar
function verlaagWater() {
    waterBar.value -= 5;
    checkStats();
    gameOver();

    console.log(waterBar.value);
}
setInterval(verlaagWater, 2000);

//haalt waarde omlaag van de zon bar
function verlaagZon() {
    sunBar.value -= 5;
    checkStats();
    gameOver();

    console.log(sunBar.value);
}
setInterval(verlaagZon, 2000);

//haalt waarde omlaag van de happy bar
function verlaagHappy() {
    happyBar.value -= 5;
    checkStats();
    gameOver();

    console.log(happyBar.value);
}
setInterval(verlaagHappy, 2000);


//------------BLOK 5 RESET-------------------//

// met behulp van chatgpt en kennis clip: Eventlistener, Functies op DLO                                                                                                                                                                                                                                                                           
function resetGame() {

    waterBar.value = 100;
    sunBar.value = 100;
    happyBar.value = 100;
    gameText.textContent = ""; 
}

reset.addEventListener("click", resetGame);



//kleine puntjes: Sommige functies zijn in het engels alles moet dezelfde taal hebben
//ik heb meerdere "geef" en "verlaag" functies, dit kan ik korter schrijven in een if statement of switchcase
//game-over jingle blijft spelen omdat ik gameOver aanroep in de verlaag functies.
//Ookal is de game voorbij blijft de verlaag functie runnen
//regel 28(ish) kan ik ook verkorten door van waterbar.value een variabele te maken

//Gefixt: check states was eerst zowel buiten de scope als binnen de scope, dat was dubbel op
//"game over" bleef staan en ookal is het niet de meest nette manier heb ik door 
// gameText.textContent = ""; te gebruiken de tekst wel weg kunnen halen wanneer je op rest drukt
//reset tag in html veranderd naar resetBtn