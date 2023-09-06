const Worker = [
    {
        name: "Amah Israel",
        id: 1,
        job: "Developer",
        pix: "/images/cookies-svgrepo-com.svg",
        details: "When to use iterative development? You should use iterative development only on projects that you want to succeed.”"
    },
        
    {
        name: "Charly charles",
        id: 2,
        job: "Engineer",
        pix: "/images/undraw_in_real_life_v8fk.svg",
        details: "Code is like humor. When you have to explain it, it’s bad."
    },

    {
        name: "Oparaji kc",
        id: 3,
        job: "Tech",
        pix: "/images/undraw_stars_re_6je7.svg",
        details: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code."
    },

    {
        name: "Boss Tochi",
        id: 4,
        job: "IT",
        pix: "/images/undraw_barbecue_3x93.svg",
        details: "When to use iterative development? You should use iterative development only on projects that you want to succeed."
    },
];

const Epix = document.querySelector("#Epix");
const Ename = document.getElementById("Ename");
const Ejob = document.querySelector("#Ejob");
const deal = document.querySelector("#deal");
const btns = document.querySelectorAll(".btn");


currentItem = 0;

window.addEventListener("load", ()=>{
    person();
})

btns.forEach(bts =>{
    bts.addEventListener("click", (e)=>{
        console.log(bts);
        if (e.target.classList.contains("forward")){
            currentItem++
            if (currentItem > Worker.length - 1) {
                currentItem = 0;
            }
            person(); 
        }else if (e.target.classList.contains("back")) {
        currentItem--;
        if (currentItem < 0) {
            currentItem = Worker.length - 1;
        }
        person()
    }else{
        currentItem = Math.floor(Math.random()*Worker.length);
        person()
    }
  
    })
})
function person() {
    Epix.src = Worker[currentItem].pix
    Ename.textContent = Worker[currentItem].name;
    Ejob.textContent = Worker[currentItem].job;
    deal.textContent = Worker[currentItem].details; 
}