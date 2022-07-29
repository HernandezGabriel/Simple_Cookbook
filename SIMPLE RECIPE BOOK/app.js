// const fs = require('fs');
// const buffer = fs.readFileSync("recipes.json");

// var json = require('./recipes.json');



let arr=DATA;
console.log(arr);

document.addEventListener('DOMContentLoaded', (event) => {

   let bfast_card=document.querySelector("#bfast_card");
   bfast_card.querySelector("#card-title").innerText ="hello world";

   let lunch_card=document.querySelector("#lunch_card");
   let snack_card=document.querySelector("#snack_card");

   let bfast_container=document.querySelector("#bfast_container");
   let lunch_container=document.querySelector("#lunch_container");
   let snack_container=document.querySelector("#snack_container");

   arr.forEach( (x)=> {

      if(x.type == "breakfast"){

         bfast_card= bfast_card.cloneNode(true);
         bfast_card.style.display=null;
         bfast_card.querySelector("#card-title").innerText=x.title;

         bfast_container.append(bfast_card);

      }

      if(x.type == "lunch/dinner"){

         bfast_card= bfast_card.cloneNode(true);
         bfast_card.style.display=null;
         bfast_card.querySelector("#card-title").innerText=x.title;

         lunch_container.append(bfast_card);

      }

      if(x.type == "snack"){

         bfast_card= bfast_card.cloneNode(true);
         bfast_card.style.display=null;
         bfast_card.querySelector("#card-title").innerText=x.title;

         snack_container.append(bfast_card);

      }
   })


      //picture of card
      bfast_card.querySelector("#picture").style.property = "background-image: url('');";


});
