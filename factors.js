

var call =() =>{


    let  n=document.getElementById("num").value;
var i;
let a=[];

a.push(1);

let r=Number(n);

if(r<=0)
{
 
     document.getElementById("sol").innerHTML="INVALID INPUT"

return 0;


}

if(r!=1)
a.push(r);
for(i=2;i*i<=n;i++)
{
   if(n%i==0)
   {

    a.push(i);

   if( (n/i) !=i)
   {
a.push(n/i);


   }



   }


}

a.sort( function(a,b) { return a- b; } )

var r1= "THE DIVSORS ARE : "
var r2= document.getElementById("sol")


 r2.innerHTML= r1 + " " + a;

//var s = document.getElementById("sol");





 return 0;



};