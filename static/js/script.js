AOS.init();

var typed = new Typed('.typing',{
    strings:['','Web Designer','Web developer',"Full stack developer",'python developer'],
    typeSpeed :100,
    backSpeed: 100,
    loop:true
});

const nav = document.querySelector(".navbar"),
    navlist = nav.querySelectorAll("li"),
    totalNavlist = navlist.length,
    allsection = document.querySelectorAll(".section")
    totalsection = allsection.length

    for (let i = 0 ;i < totalNavlist ; i++){
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let i =0 ; i< totalsection ; i++){
                allsection[i].classList.remove("back-section");
            }
            for (let j=0; j<totalNavlist;j++){
                if (navlist[j].querySelector("a").classList.contains("active"))
                {
                    allsection[j].classList.add("back-section");
                }
                navlist[j].querySelector("a").classList.remove('active')
            }
            this.classList.add("active")
            showsection(this)
            if (window.innerWidth<1200){
                asidesectiontoggler();
            }
        })
    }
    function showsection(element){
        for(let i =0 ; i< totalsection ; i++){
            allsection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add('active')
    }
    function updateNav(element){
        for (let i = 0 ; i< totalNavlist; i++){
            navlist[i].querySelector("a").classList.add("active")
            const target = element.getAttribute("href").split("#")[1];
            if (target === navlist[i].querySelector("a").classList.add("active"))
            {
                navlist[i].querySelector("a").classList.add("active");
            }
        }
    }
document.querySelector(".hire_me").addEventListener("click",()=>{
    // const sectionindex = this.getAttribute("data-section-index")
    showsection(this);
    updateNav(this);
    for(let i =0 ; i< totalsection ; i++){
        allsection[i].classList.remove("back-section");
    }
})
const navToggler = document.querySelector('.nav_toggler'),
aside = document.querySelector(".aside");
navToggler.addEventListener("click",()=>{
    asidesectiontoggler();
})
function asidesectiontoggler(){
    aside.classList.toggle("open")
    navToggler.classList.toggle('open')
    for(let i =0 ; i < totalsection;i++)
    {
        allsection[i].classList.toggle("open");
    }
}