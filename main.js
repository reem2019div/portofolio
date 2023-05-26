



let myName = "portfoliooo";
let index = 1;

function writeText() {
  document.querySelector("#imo").textContent = myName.slice(0,index);

  index++
  if(index > myName.length){
    index = 1;
  }

}
setInterval(function(){
    writeText();
    
},100);
