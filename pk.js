
  
let x = document.getElementById('btn');


x.addEventListener('click' , function(){


    var y=document.getElementById("input1").value ;


    var n= y.length;

    console.log(n);

    let i;

    let j=0;
    let o=0;
    let a={ };


    for(i=0;i<n;i++)
    {
     if(y[i]==' ')
     {
      j++;
//  console.log(j);

     }

     else
     {o++;


     }



    }
    let p=1;


    for(i=1;i<n;i++)
    {

      if(y[i]!=' '&&y[i-1]==' ')
      p++;


    }
  //  console.log(j);

    var g= document.getElementById("ans");
    if(n==0)
    p=0;
    

    g.innerHTML=` <h1> LENGTH OF SENTENCE = ${n}  </h1>   `+ ` <h1> TOTAL CHARACTERS = ${o}  </h1>   `
    +` <h1> TOTAL WORDS = ${p}  </h1>   `
    ;




}











);