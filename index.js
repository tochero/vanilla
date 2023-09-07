const body = document.querySelector("#body");

for (let i = 0; i < 1002; i++) {
   const box = document.createElement("div")
   box.classList.add("boxes")
   body.appendChild(box)  
}

const box = document.querySelectorAll(".boxes");

box.forEach(bts =>{
    let randomizer = setColors();
    bts.textContent = randomizer;
    bts.style.backgroundColor = randomizer;
})


function setColors() {
    const color = "0123456789ABCDEF";
    var codes = "#";
    for (let i = 0; i < 6; i++) {
        var mixer = Math.floor(Math.random()*color.length)
        codes += color.substring(mixer, mixer+1);
    }
    return codes
}

setColors()