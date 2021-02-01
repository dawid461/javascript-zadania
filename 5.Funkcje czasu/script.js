//Zadanie1
var x = 1;
var n = setInterval(() =>
                    {
                      if(x == 15)
                      {
                        clearInterval(n);
                      }
                      console.log("Cześć po raz "  + x++);
                      
                    },3000);


//Zadanie2


const table = [1, 2, 3, 4, 5, 6, 7];

setTimeout(function(){
  for(let i =0; i<table.length;i++)
    {
      console.log(table[i]);
    }
  i=0;
  setInterval(function(){
    if(table.length>i)
      {
        console.log(table[i++]);
      }
  },3000);
},2000);