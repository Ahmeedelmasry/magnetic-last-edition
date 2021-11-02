//START

//fixed nav and video section

let topOne = document.querySelector (".services .top-one");
let topTwo = document.querySelector (".services .top-two");
let topThree = document.querySelector (".services .top-three");
let topFour = document.querySelector (".services .top-four");
let topFive = document.querySelector (".services .top-five");
let topSix = document.querySelector (".services .top-six");
let topSeven = document.querySelector (".services .top-seven");
let topEight = document.querySelector (".services .top-eight");
let topNine = document.querySelector (".services .top-nine");
let navMenu = document.querySelector(".all-header .nav-menu");

//black nav background
window.onscroll = function () {
    if (window.scrollY >= 200) {
        navMenu.style.backgroundColor = "black";
        }

    else if (window.scrollY <= 200)  {
            navMenu.style.backgroundColor = "unset";
        } 
    
   //Video section     
    if (window.scrollY >= 650) {
            topOne.style.transform = "translateY(0)";
            topOne.style.opacity = 1;
            topTwo.style.transform = "translateY(0)";
            topTwo.style.opacity = 1;
            topThree.style.transform = "translateY(0)";
            topThree.style.opacity = 1;

        }

    if (window.scrollY >= 850) { 
            topFour.style.transform = "translateY(0)";
            topFour.style.opacity = 1;
            topFive.style.transform = "translateY(0)";
            topFive.style.opacity = 1;
            topSix.style.transform = "translateY(0)";
            topSix.style.opacity = 1;
        }  

    if (window.scrollY >= 1050) {  
            topSeven.style.transform = "translateY(0)";
            topSeven.style.opacity = 1;
            topEight.style.opacity = 1;
            topEight.style.transform = "translateY(0)";
            topNine.style.transform = "translateY(0)";
            topNine.style.opacity = 1;
        }
};

//responsive menu

let openN = document.querySelector(".responsive-nav .menu-click");
let responsiveNav = document.querySelector('.responsive-nav .dropdown');
let overlay = document.querySelector('.nav-overlay');
let closee = document.querySelector('.responsive-nav .menu-click-two');
let list = document.querySelectorAll('.responsive-nav li');

$(openN).on('click' , () => {
        overlay.style.opacity = 1;
        overlay.style.zIndex = 700;
        responsiveNav.style.transform = "translateX(0)";
        openN.style.display = "none";
        closee.style.display = "block"; 
});

$(overlay).on('click' , () => {
    responsiveNav.style.transform = "translateX(-500px)";
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1500;
    closee.style.display = "none";
    openN.style.display = "block";
});

$(closee).on('click' , () => {
    responsiveNav.style.transform = "translateX(-500px)";
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1500;
    closee.style.display = "none";
    openN.style.display = "block";
});

$(list).on('click' , () => {
    if (responsiveNav.style.transform = "translateX(0)")
    responsiveNav.style.transform = "translateX(-500px)";
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1500;
    closee.style.display = "none";
    openN.style.display = "block";
});

//Works

let logoOne = document.querySelector(".featured-work .shuffle-imgs .two");
let logoTwo = document.querySelector(".featured-work .shuffle-imgs .three");
let websiteOne = document.querySelector(".featured-work .shuffle-imgs .one");
let websiteTwo = document.querySelector(".featured-work .shuffle-imgs .four");
let websiteThree = document.querySelector(".featured-work .shuffle-imgs .seven");
let graphic = document.querySelector(".featured-work .shuffle-imgs .five");
let video = document.querySelector(".featured-work .shuffle-imgs .six");
let marketing = document.querySelector(".featured-work .shuffle-imgs .eight");
let allBlock = document.querySelector(".featured-work");


    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') ==='all' && window.innerWidth < 990) {
            $('.featured-work .shuffle-imgs .col-md').css('opacity', 1);
            $('.featured-work .shuffle-imgs .col-md').css('transform',"unset");
            allBlock.style.height = "unset";
            allBlock.style.overflow = "visible";

        }
        if  ($(this).data('class') !=='all' && window.innerWidth < 990){
                $('.featured-work .shuffle-imgs .col-md').css('opacity', '.08');
                $($(this).data('class')).parent() .css('opacity', 1);
                $('.featured-work .shuffle-imgs .col-md').css('transform',"unset");
                allBlock.style.height = "unset";
                allBlock.style.overflow = "visible"
            }
        

    if ($(this).data("class") === ".websites" && window.innerWidth > 990) {
        graphic.style.opacity = 0;
        graphic.style.transform = "translateX(0) scale(0 , 0)";
        video.style.opacity = 0;
        video.style.transform = "translateX(0) scale(0 , 0)";
        marketing.style.opacity = 0;
        marketing.style.transform = "translateX(0) scale(0 , 0)";        
        logoOne.style.opacity = 0;
        logoOne.style.transform = "translateX(0) scale(0 , 0)";
        logoTwo.style.opacity = 0;
        logoTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteOne.style.opacity = 1;
        websiteOne.style.transform = "translateX(223.5%) scale(1 , 1)";
        websiteTwo.style.opacity = 1;
        websiteTwo.style.transform = "translateX(-335%) scale(1 , 1)";
        websiteThree.style.opacity = 1;
        websiteThree.style.transform = "translate(-112% , -110%) scale(1 , 1)";
        allBlock.style.height = "768px";
        allBlock.style.overflow = "hidden"
    }


    if ($(this).data("class") === ".logos" && window.innerWidth > 990) {
        graphic.style.opacity = 0;
        graphic.style.transform = "translateX(0) scale(0 , 0)";
        video.style.opacity = 0;
        video.style.transform = "translateX(0) scale(0 , 0)";
        marketing.style.opacity = 0;
        marketing.style.transform = "translateX(0) scale(0 , 0)";
        websiteOne.style.opacity = 0;
        websiteOne.style.transform = "translateX(0) scale(0 , 0)";
        websiteTwo.style.opacity = 0;
        websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteThree.style.opacity = 0;
        websiteThree.style.transform = "translateX(0) scale(0 , 0)";
        logoOne.style.opacity = 1;
        logoOne.style.transform = "translateX(0) scale(1 , 1)";
        logoTwo.style.opacity = 1;
        logoTwo.style.transform = "translateX(-223%) scale(1 , 1)";
        allBlock.style.height = "768px";
        allBlock.style.overflow = "hidden"
    }

    if ($(this).data("class") === ".graphic" && window.innerWidth > 990) {
        video.style.opacity = 0;
        video.style.transform = "translateX(0) scale(0 , 0)";
        marketing.style.opacity = 0;
        marketing.style.transform = "translateX(0) scale(0 , 0)";        
        logoOne.style.opacity = 0;
        logoOne.style.transform = "translateX(0) scale(0 , 0)";
        logoTwo.style.opacity = 0;
        logoTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteOne.style.opacity = 0;
        websiteOne.style.transform = "translateX(0) scale(0 , 0)";
        websiteTwo.style.opacity = 0;
        websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteThree.style.opacity = 0;
        websiteThree.style.transform = "translate(0) scale(0 , 0)";
        graphic.style.opacity = 1;
        graphic.style.transform = "translate(0 , -110%) scale(1 , 1)";
        allBlock.style.height = "768px";
        allBlock.style.overflow = "hidden"
    }

    if ($(this).data("class") === ".marketing" && window.innerWidth > 990) {
        video.style.opacity = 0;
        video.style.transform = "translateX(0) scale(0 , 0)";        
        logoOne.style.opacity = 0;
        logoOne.style.transform = "translateX(0) scale(0 , 0)";
        logoTwo.style.opacity = 0;
        logoTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteOne.style.opacity = 0;
        websiteOne.style.transform = "translateX(0) scale(0 , 0)";
        websiteTwo.style.opacity = 0;
        websiteTwo.style.transform = "translateX(0) scale(0 , 0)";
        websiteThree.style.opacity = 0;
        websiteThree.style.transform = "translate(0) scale(0 , 0)";
        graphic.style.opacity = 0;
        graphic.style.transform = "translate(0) scale(0 , 0)";
        marketing.style.opacity = 1;
        marketing.style.transform = "translate(-335% , -110%) scale(1 , 1)";
        allBlock.style.height = "768px";
        allBlock.style.overflow = "hidden"
    }

    if ($(this).data("class") === ".videos" && window.innerWidth > 990) {      
        logoOne.style.opacity = 0;
        logoOne.style.transform = "translateX(0) scale(0,0)";
        logoTwo.style.opacity = 0;
        logoTwo.style.transform = "translateX(0) scale(0,0)";
        websiteOne.style.opacity = 0;
        websiteOne.style.transform = "translateX(0) scale(0,0)";
        websiteTwo.style.opacity = 0;
        websiteTwo.style.transform = "translateX(0) scale(0,0)";
        websiteThree.style.opacity = 0;
        websiteThree.style.transform = "translate(0) scale(0,0)";
        graphic.style.opacity = 0;
        graphic.style.transform = "translate(0) scale(0,0)";
        marketing.style.opacity = 0;
        marketing.style.transform = "translate(0) scale(0,0)";
        video.style.opacity = 1;
        video.style.transform = "translate(-111% , -110%) scale(1 , 1)";
        allBlock.style.height = "768px";
        allBlock.style.overflow = "hidden"
    }

    if ($(this).data("class") === ".all" && window.innerWidth > 990) {
        graphic.style.opacity = 1;
        graphic.style.transform = "translateX(0) scale(1 , 1)";
        video.style.opacity = 1;
        video.style.transform = "translateX(0) scale(1 , 1)";
        marketing.style.opacity = 1;
        marketing.style.transform = "translateX(0) scale(1 , 1)";        
        websiteOne.style.opacity = 1;
        websiteOne.style.transform = "translateX(0) scale(1 , 1)";
        websiteTwo.style.opacity = 1;
        websiteTwo.style.transform = "translateX(0) scale(1 , 1)";
        websiteThree.style.opacity = 1;
        websiteThree.style.transform = "translateX(0) scale(1 , 1)";
        logoOne.style.opacity = 1;
        logoOne.style.transform = "translateX(0) scale(1 , 1)";
        logoTwo.style.opacity = 1;
        logoTwo.style.transform = "translateX(0) scale(1 , 1)";
        allBlock.style.height = "unset";
        allBlock.style.overflow = "unset"
    }
    if (window.innerWidth < 991) {
        return false
    }
});



//Testemonials



