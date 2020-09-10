console.log("hello");

// let rtime = new Date();
//         console.log(rtime);
// // alert("bhad bsddfbbdk");

// let name= prompt("enter your password");

//let name = confirm("kya aap apni gughjgjfho");





// function displayTime(){
//     time = new Date();
//      console.log(time);
//      document.getElementById('time1').innerHTML =time;
 
//    }

// setInterval(displayTime,1);

function call()
{
    let t=document.getElementById("num").value;

    document.getElementById("pogo").innerHTML=t;


    let i,v;
    
    console.log(t);
   if(t<=0)
  { document.getElementById("pogo").innerHTML= "please enter the number";
    return 0;

   }



   if(t==1)
   {
    document.getElementById("pogo").innerHTML= `${t}` + " is not a prime number";
    return 0;

   }

   v=0;
    for(i=2;i*i<=t;i++)
   {
    if(t%i==0)
    {
     v=1;
     break;

    }


   }


   if(v==0)
   {
    document.getElementById("pogo").innerHTML= `${t}` + " is a prime number";


   }

   else
   {
    
    document.getElementById("pogo").innerHTML= `${t}` + " is not a prime number";


   }
}


function displayTime(){
    time = new Date();
     console.log(time);
     document.getElementById('time1').innerHTML =time;
 
   }

