// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL = "De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR = "La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let text = document.querySelector("#text");


//2. Set initial content on load

title.innerText = titleNL; 
subtitle.innerText = subtitleNL;
text.innerText = textNL;


//3. Select buttons

let buttonFR = document.querySelector("#btn-fr");
let buttonNL = document.querySelector("#btn-nl");

//4. Add event listeners
buttonNL.addEventListener("click", function(){

    title.innerText = titleNL;
    subtitle.innerText = subtitleNL;
    text.innerText = textNL;
    console.log("test");

    //button state
    buttonFR.disabled = false;
    buttonNL.disabled = true;

});

buttonFR.addEventListener("click", function(){

    title.innerText = titleFR;
    subtitle.innerText = subtitleFR;
    text.innerText = textFR;
    console.log("test");
    //button state
    buttonFR.disabled = true;
    buttonNL.disabled = false;
});

//5. Create, configure and append image
//create
let imgElement = document.createElement("img");

//configure
imgElement.src = "./appel.jpg";
imgElement.alt = "appel foto";

//append
document.querySelector(".article").prepend(imgElement);
