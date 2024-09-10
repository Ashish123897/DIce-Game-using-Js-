
let x=document.getElementById('i1'); 
let xx=document.getElementById('i2');
let h=document.getElementById('h1');
var img1="Dicee+Challenge+-+Starting+Files/images/dice1.png";
var img2="Dicee+Challenge+-+Starting+Files/images/dice2.png";
var img3="Dicee+Challenge+-+Starting+Files/images/dice3.png";
var img4="Dicee+Challenge+-+Starting+Files/images/dice4.png";
var img5="Dicee+Challenge+-+Starting+Files/images/dice5.png";
var img6="Dicee+Challenge+-+Starting+Files/images/dice6.png";
let y=Math.floor(Math.random()*6)+1;
let z=Math.floor(Math.random()*6)+1;
let array=[img1,img2,img3,img4,img5,img6];
console.log(y);
function func()
{
    if(y==0)
    {
        x.src=array[y];
    }
    else
    {
        x.src=array[y-1];
    }

    if(z==0)
    {
        xx.src=array[z];
    }
    else
    {
        xx.src=array[z-1];
    }
    if(z===y)
    {
        console.log("Draw");
    }
    else if(z>y)
    {
        h.innerHTML="Player II won";
        h.style.color="lightgreen";
    }
    else 
    {
        
        h.innerHTML="Player I won";
        h.style.color="lightgreen";
    }
}
