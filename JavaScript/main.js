

let container = document.querySelector(".container");
let botao = document.getElementById("spin");
let number = Math.ceil(Math.random() * 5000);
var deg = 1990;

// botao.onclick = function() {
//     container.style.transform = `rotate(${deg}deg)`;
    
// }



   // vai gerar um número de 1 a 100, para facilitar o uso do percentual e possíveis novas inclusões de valores no array
        
var vezes = 0
function rodar(){
    container.style.transform = `rotate(${deg}deg)`;
}

botao.onclick = function(){
    vezes += 1
    var percentual = (Math.floor((Math.random() * 100)) + 1);
    
    if(percentual <= 40){
        deg = 2150;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 1");
        },6000);

       
    }else if(percentual > 40 && percentual <= 60){
        deg = 2120;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 2");
        },6000);

       
    }else if(percentual > 60 && percentual <= 75){
        deg = 2060;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 3");
        },6000);


    }else if(percentual > 75 && percentual <= 83){
        deg = 2030;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 4");
        },6000);


    }else if(percentual > 83 && percentual <= 91){
        deg = 2000; 
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 5");
        },6000);


    }else if(percentual > 91 && percentual <= 96){
        deg = 2180;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 6");
        },6000);

        
    }else if(percentual > 96 && percentual <= 98){
        deg = 2240;
        rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 7");
        },6000);


    }else if(percentual > 98 && percentual <= 100){
        deg = 2200;
       rodar();
        setTimeout(function(){
            window.alert("Parabens, voce ganhou o premio 8");
        },6000);

    }
    
    setTimeout(function(){
        container.style.transform = `rotate(${0}deg)`;
    },7000);
    
   

  
}

























// var deg = 0;



// var array = [1, 2];

// // vai gerar um número de 1 a 100, para facilitar o uso do percentual e possíveis novas inclusões de valores no array
// var percentual = (Math.floor((Math.random() * 100)) + 1);
// var index = ((percentual > 10) ? 1 : 0);
// var result = array[index];

// var premio = 0
// if(percentual <= 40){
//     deg = 2150;
//     document.getElementById("premio").textContent = `premio: 1 - deg: ${deg}`;

// }else if(percentual > 40 && percentual <= 60){
//     deg = 2120;
//     document.getElementById("premio").textContent = `premio: 2 - deg: ${deg}`;

// }else if(percentual > 60 && percentual <= 75){
//     deg = 2060;
//     document.getElementById("premio").textContent = `premio: 3 - deg: ${deg}`;

// }else if(percentual > 75 && percentual <= 83){
//     deg = 2030;
//     document.getElementById("premio").textContent = `premio: 4 - deg: ${deg}`;
// }else if(percentual > 83 && percentual <= 91){
//     deg = 1990; 
//     document.getElementById("premio").textContent = `premio: 5 - deg: ${deg}`;
// }else if(percentual > 91 && percentual <= 96){
//     deg = 2180;
//     document.getElementById("premio").textContent = `premio: 6 - deg: ${deg}`;
// }else if(percentual > 96 && percentual <= 98){
//     deg = 2240;
//     document.getElementById("premio").textContent = `premio: 7 - deg: ${deg}`;
// }else if(percentual > 98 && percentual <= 100){
//     deg = 2200;
//     document.getElementById("premio").textContent = `premio: 8 - deg: ${deg}`;
// }

// botao.onclick = function()
// {
//     document.getElementById("botao").textContent = `teste-botao: ${deg}`;
//     roleta.style.transform = `rotate(${deg}deg)`;
// }


// var premios = [
//     {"tipo": "premio1", "deg": 2150, "probabilidade": 50},
//     {"tipo": "premio2", "deg": 2120, "probabilidade": 50},
//     {"tipo": "premio3", "deg": 2060, "probabilidade": 80},
//     {"tipo": "premio4", "deg": 2030, "probabilidade": 10},
//     {"tipo": "premio5", "deg": 2000, "probabilidade": 2},
//     {"tipo": "premio6", "deg": 2180, "probabilidade": 30},
//     {"tipo": "premio7", "deg": 2240, "probabilidade": 5},
//     {"tipo": "premio8", "deg": 2200, "probabilidade": 40}
// ]


