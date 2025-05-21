let box = document.querySelectorAll('.btn');
let reset = document.querySelectorAll('#reset');

let turnO = true;
// reset.addEventListener('click',()=>{
    
// })
let winPetrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

box.forEach((boxs)=>{
    boxs.addEventListener('click',()=>{
        if (turnO) {
            boxs.innerHTML = "O"
            boxs.style.color = '#fb0101'
            turnO = false
        }else{
            boxs.innerHTML="X"
            boxs.style.color="#0109fb"
            turnO =true
        }
        boxs.disabled = true
        matchPatarn();
    })
})

const matchPatarn = ()=>{
    for(let patarn of winPetrn){
        let ply1= box[patarn[0]].innerHTML
        let ply2=box[patarn[1]].innerHTML
        let ply3=box[patarn[2]].innerHTML    
        
        if (ply1!="" && ply2!="" &&ply3!="") {
            if (ply1==ply2 && ply2==ply3) {
                // console.log("winner",ply1);
                document.getElementById("win").innerHTML="Winner is " +ply1
            }
        
        }
    }
    
}
matchPatarn()
