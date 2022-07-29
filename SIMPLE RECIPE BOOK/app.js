// const fs = require('fs');
// const buffer = fs.readFileSync("recipes.json");

// var json = require('./recipes.json');

console.log(DATA);


document.addEventListener('DOMContentLoaded', (event) => {

   let card_template=document.querySelector("#bfast-card");
   card_template.querySelector("#card-title").innerText ="hello world";


   for(let x in DATA){

      let card_template_clone= card_template.cloneNode(true);

      //picture of card
      card_template_clone.querySelector("#picture").style.property = "background-image: url('');";


    }

});
