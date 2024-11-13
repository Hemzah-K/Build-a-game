const tictactoe = document.querySelector(".TicTacToe")
const previewTic = document.querySelector(".previewTic")
const TickButton = document.querySelector(".previewTic")
 
tictactoe.addEventListener("mouseover", function(){
        previewfuncOn()
    })
tictactoe.addEventListener("mouseout", function(){
        previewfuncOff()
    })
   
function previewfuncOn(element){
     preview.style.display = "inline"
}
 
function previewfuncOff(element){
    preview.style.display = "none"
}
 