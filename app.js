// Variables to keep track of selected divs and random color div
let selectedColor = null;
const colorDivs = document.querySelectorAll('.color-div');
const randomColorDiv = document.getElementById('randomColorDiv');
const startBtn = document.getElementById('startBtn');
let dv1 = document.getElementById("dv1");
let dv2 = document.getElementById("dv2");
let cbt = document.getElementById("cbt");
let audi =document.getElementById("audi");
let updv = document.getElementById("updv");
let win =document.getElementById("win");
var elements = document.body.getElementsByTagName('*');
let img = document.getElementById('img');
let body=document.getElementsByTagName("body")
audi.style.display="none"
win.style.display="none"
function audioply() {
    audi.play();
}


dv2.style.display="none";
dv1.style.display="none";
function audioplay() {
    
}


function getRandomColor() {
    const colors = [ 'red','blue','purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}


function setRandomColor() {
    randomColorDiv.style.backgroundColor = getRandomColor();
}


colorDivs.forEach(div => {
    div.addEventListener('click', () => {
        selectedColor = div.style.backgroundColor;
        colorDivs.forEach(d => d.style.border = 'none'); // Reset border
        div.style.border = '3px solid black';
        startBtn.disabled=false
    });
})

function aa() {
    if (randomColorDiv.style.backgroundColor === selectedColor) {
    //    dv1.style.display="block"; 
    //    dv2.style.display="block"; 
    //    dv2.style.backgroundImage='URL("you win.gif")'
    
 img.style.display="block";
 cbt.style.display="block"
 img.src="file:///H:/anshu%20coading%20file/you%20win.gif"
    
        win.play();
    } else {
       
        img.style.display="block";
        cbt.style.display="block"
     img.src="file:///H:/anshu%20coading%20file/you%20lose.gif"
        // dv1.style.display="block"; 
        // dv2.style.display="block";
        //  dv2.style.backgroundImage='URL("you lose.gif")';
         

    }
;
}

startBtn.addEventListener('click', () => {
    blk();
    setTimeout(nn,2200)
        
    
    if (!selectedColor) {
       
        alert('Please select a color first!');}
        else {
            setRandomColor();
        setTimeout(aa,3000)
        }
})
    
cbt.addEventListener("click", function() {
    dv1.style.display = "none";
    img.style.display = "none";
    cbt.style.display = "none";
});
function lose() {

        dv2.style.backgroundImage='URL("you lose.gif")';
        console.log("done")
    }


dv2.addEventListener("click",() =>{
    
} )

function blk() {
    updv.style.display="block"
}

function nn() {
    updv.style.display="none"
}
