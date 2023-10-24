function callback_nextPage(el, anim_class) {
    return function(){
        el.classList.remove(anim_class);
    }
}
let isPipe1 = false
let pipe1 = document.querySelector("#pipe1")
let con_1 = document.querySelector("#construct_page1")
let build1 = document.querySelector("#building_page1")
let isShake1 = false
let tape = document.querySelector("#tape_page1")
let build2 = document.querySelector("#leftbuilding_page1")
let tree = document.querySelector("#tree_page1")
let isTape = false
let isBuild2 = false
let isTree = false
let chat1 = document.querySelector("#poschat_1")
let chat2 = document.querySelector("#poschat_2")
let chat3 = document.querySelector("#poschat_3")
let chat4 = document.querySelector("#poschat_4")
let isChat1 = false
let isChat2 = false
let isChat3 = false
let isChat4 = false
let prison = document.querySelector("#prison")
let prisonText = document.querySelector("#prisonText")
let page2Bottom = document.querySelector(".page2_bottom")
let isPrison = false
let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
let card3 = document.querySelector("#card3")
let cardPic = document.querySelector(".pic")
let isCard = false
let lastText1 = document.querySelector("#last-text1")
let lastText2 = document.querySelector("#last-text2")
let lastText3 = document.querySelector("#last-text3")
let lastText4 = document.querySelector("#last-text4")
let lastText5 = document.querySelector("#last-text5")
let w = window.innerWidth
let isMobile = false
let isCard1 = false
let isCard2 = false
let isCard3 = false

document.addEventListener("scroll", function(){
    document.body.dataset.y = window.scrollY
    let y = document.body.dataset.y
    console.log(w)
    if(361 <= w && w < 426){
        isMobile = true
    }else{
        isMobile = false
    }
    if(y>=100 && y <400){
        if(isPipe1 == false){
            pipe1.style.animation = "ani_pipe1_out .75s linear"
            isPipe1 = true
            pipe1.style.transform = "scaleY(1)"
        }
        con_1.style.top = "180px"
        con_1.style.opacity = "0"
        build1.style.top = "280px"
        build1.style.opacity = "0"
        isShake1 = false
    }
    else if(y<100){
        if(isPipe1 == true){
            pipe1.style.animation = "ani_pipe1_in .5s linear"
            pipe1.style.transform = "scaleY(-1)"
            isPipe1 = false
        }
    }
    else if(y>=400 && y<900){
        if(isShake1 == false){
            con_1.classList.toggle("structure_building");
            con_1.addEventListener("webkitAnimationEnd", callback_nextPage(con_1, "structure_building"), false);
            build1.classList.toggle("structure_building");
            build1.addEventListener("webkitAnimationEnd", callback_nextPage(build1, "structure_building"), false);
            isShake1 = true
            con_1.style.top = "120px"
            con_1.style.opacity = "1"
            build1.style.top = "220px"
            build1.style.opacity = "1"
        }
        if(isTape == true && isMobile == false){
            tape.style.animation = "left_fadeOut linear .75s"
            tape.style.transform = "translateX(-800px)"
            isTape = false
        }
    }
    else if(y>=900 && y<1100){
        if(isTape == false && isMobile == false){
            tape.style.animation = "left_fadeIn linear .75s"
            tape.style.transform = "translateX(0px)"
            isTape = true
        }
        if(isBuild2 == true && isMobile == false){
            build2.style.animation = "left_fadeOut linear .75s"
            build2.style.transform = "translateX(-800px)"
            isBuild2 = false
        }
    }
    else if(y>=1100 && y<1400){
        if(isBuild2 == false && isMobile == false){
            build2.style.animation = "left_fadeIn linear .75s"
            build2.style.transform = "translateX(0px)"
            isBuild2 = true
        }
        if(isTree == true && isMobile == false){
            tree.style.animation = "left_fadeOut linear .75s"
            tree.style.transform = "translateX(-800px)"
            isTree = false
        }
    }
    else if(y>=1400 && y<1500){
        if(isTree == false && isMobile == false){
            tree.style.animation = "left_fadeIn linear .75s"
            tree.style.transform = "translateX(0px)"
            isTree = true
        }
        if(isChat1 == true && isMobile == false){
            chat1.style.animation = "chat_rfadeOut linear .5s"
            chat1.style.transform = "translateX(300px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "0"
            isChat1 = false
        }
        if(isTape == true && isMobile){
            tape.style.animation = "left_fadeOut linear .5s"
            tape.style.transform = "translateX(-100px)"
            isTape = false
        }
    }else if(y>=1500 && y<1600){
        if(isTape == false && isMobile){
            tape.style.animation = "left_fadeIn linear .5s"
            tape.style.transform = "translateX(0px)"
            isTape = true
        }
        if(isBuild2 == true && isMobile){
            build2.style.animation = "left_fadeOut linear .5s"
            build2.style.transform = "translateX(-200px)"
            isBuild2 = false
        }
    }else if(y>=1600 && y<1700){
        if(isBuild2 == false && isMobile){
            build2.style.animation = "left_fadeIn linear .5s"
            build2.style.transform = "translateX(0px)"
            isBuild2 = true
        }
        if(isTree == true && isMobile){
            tree.style.animation = "left_fadeOut linear .5s"
            tree.style.transform = "translateX(-200px)"
            isTree = false
        }
    }else if(y>=1700 && y<1800){
        if(isTree == false && isMobile){
            tree.style.animation = "left_fadeIn linear .5s"
            tree.style.transform = "translateX(0px)"
            isTree = true
        }
    }
    else if(y>= 1800 && y<1900){
        if(isChat1 == false && isMobile == false){
            chat1.style.animation = "chat_rfadeIn linear .5s"
            chat1.style.transform = "translateX(0px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "1"
            isChat1 = true
        }
        if(isChat2 == true && isMobile == false){
            chat2.style.animation = "chat_lfadeOut linear .5s"
            chat2.style.transform = "translateX(300px)"
            chat2.style.opacity = "0"
            isChat2 = false
        }
    }else if(y>= 1900 && y<2000){
        if(isChat2 == false && isMobile == false){
            chat2.style.animation = "chat_lfadeIn linear .5s"
            chat2.style.transform = "translateX(0px)"
            chat2.style.opacity = "1"
            isChat2 = true
        }
        if(isChat3 == true && isMobile == false){
            chat3.style.animation = "chat_rfadeOut linear .5s"
            chat3.style.transform = "translateX(300px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "0"
            isChat3 = false
        }
    }else if(y>= 2000 && y<2100){
        if(isChat3 == false && isMobile == false){
            chat3.style.animation = "chat_rfadeIn linear .5s"
            chat3.style.transform = "translateX(0px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "1"
            isChat3 = true
        }
        if(isChat4 == true && isMobile == false){
            chat4.style.animation = "chat_lfadeOut linear .5s"
            chat4.style.transform = "translateX(300px)"
            chat4.style.opacity = "0"
            isChat4 = false
        }   
    }else if(y>= 2100 && y<2300){
        if(isChat4 == false && isMobile == false){
            chat4.style.animation = "chat_lfadeIn linear .5s"
            chat4.style.transform = "translateX(0px)"
            chat4.style.opacity = "1"
            isChat4 = true
        }
        if(isChat1 == true && isMobile){
            chat1.style.animation = "chat_rfadeOut linear .5s"
            chat1.style.transform = "translateX(300px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "0"
            isChat1 = false
        }
    }else if(y>= 2300 && y<2375){
        if(isChat1 == false && isMobile){
            chat1.style.animation = "chat_rfadeIn linear .5s"
            chat1.style.transform = "translateX(0px)"
            chat1.style.transform = "scaleX(-1)"
            chat1.style.opacity = "1"
            isChat1 = true
        }
        if(isChat2 == true && isMobile){
            chat2.style.animation = "chat_lfadeOut linear .5s"
            chat2.style.transform = "translateX(300px)"
            chat2.style.opacity = "0"
            isChat2 = false
        }
    }else if(y>= 2375 && y<2450){
        if(isChat2 == false && isMobile){
            chat2.style.animation = "chat_lfadeIn linear .5s"
            chat2.style.transform = "translateX(0px)"
            chat2.style.opacity = "1"
            isChat2 = true
        }
        if(isChat3 == true && isMobile){
            chat3.style.animation = "chat_rfadeOut linear .5s"
            chat3.style.transform = "translateX(300px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "0"
            isChat3 = false
        }
    }else if(y>= 2450 && y<2525){
        if(isChat3 == false && isMobile){
            chat3.style.animation = "chat_rfadeIn linear .5s"
            chat3.style.transform = "translateX(0px)"
            chat3.style.transform = "scaleX(-1)"
            chat3.style.opacity = "1"
            isChat3 = true
        }
        if(isChat4 == true && isMobile){
            chat4.style.animation = "chat_lfadeOut linear .5s"
            chat4.style.transform = "translateX(300px)"
            chat4.style.opacity = "0"
            isChat4 = false
        }   
    }else if(y>= 2525 && y<3300){
        if(isChat4 == false && isMobile){
            chat4.style.animation = "chat_lfadeIn linear .5s"
            chat4.style.transform = "translateX(0px)"
            chat4.style.opacity = "1"
            isChat4 = true
        }
    }
    else if(y>=3300 && y<3400){
        if(!isMobile){
            prison.style.opacity = "1"
            prison.style.transform = "translateY(0px)"
            prison.style.animation = "prison linear .3s .3s"
            prisonText.style.color = "red"
            page2Bottom.style.animation = "prisonText linear .5s .3s"
        }
        if(isCard == true && !isMobile){
            card1.style.animation = "close_card linear .5s"
            card2.style.animation = "close_card linear .5s"
            card3.style.animation = "close_card linear .5s"
            cardPic.style.transform = "translateX(1500px)"
            cardPic.style.opacity = "0"
            isCard = false
        }
    }else if(y>=3550 && y<4800){
        if(isMobile){
            prison.style.opacity = "1"
            prison.style.transform = "translateY(0px)"
            prison.style.animation = "prison linear .3s .3s"
            prisonText.style.color = "red"
            page2Bottom.style.animation = "prisonText linear .5s .3s"
        }
    }else if(y>=4800 && y<5100){
        if(isCard == false && !isMobile){
            cardPic.style.animation = "card_pic linear 1s"
            cardPic.style.transform = "translateX(0px)"
            cardPic.style.opacity = "1"
            card1.style.animation = "open_card linear .5s"
            card1.style.transform = "rotateY(0deg)"
            card2.style.animation = "open_card linear .5s .3s"
            card2.style.transform = "rotateY(0deg)"
            card3.style.animation = "open_card linear .5s .6s"
            card3.style.transform = "rotateY(0deg)"
            isCard = true
        }
        if(isCard1){
            card1.style.transform = "rotateY(180deg) translateX(350px)"
            isCard1 = false
        }
    }else if(y>=5100 && y<5360){
        if(!isCard1 && isMobile){
            card1.style.transform = "rotateY(0deg) translateX(0px)"
            isCard1 = true
        }
        if(isCard2){
            card2.style.transform = "rotateY(180deg) translateX(-350px)"
            isCard2 = false
        }
    }else if(y>=5360 && y<5640){
        if(!isCard2 && isMobile){
            card2.style.transform = "rotateY(0deg) translateX(0px)"
            isCard2 = true
        }
        if(isCard3){
            card3.style.transform = "rotateY(180deg) translateX(350px)"
            isCard3 = false
        }
    }else if(y>=5640 && y<6600){
        if(!isCard3 && isMobile){
            card3.style.transform = "rotateY(0deg) translateX(0px)"
            isCard3 = true
        }
    }else if(y>=6600 && y<6650){
        if(!isMobile){ 
            lastText1.style.transform = "translateY(0px)"
            lastText1.style.animation = "lastText linear .3s .2s"
            lastText1.style.opacity = "1"
        }
    }else if(y>=6650 && y<6700){
        if(!isMobile){ 
            lastText2.style.transform = "translateY(0px)"
            lastText2.style.animation = "lastText linear .3s .2s"
            lastText2.style.opacity = "1"
        }
    }else if(y>=6700 && y<6750){
        if(!isMobile){ 
            lastText3.style.transform = "translateY(0px)"
            lastText3.style.animation = "lastText linear .3s .2s"
            lastText3.style.opacity = "1"
        }
    }else if(y>=6750 && y<6775){
        if(!isMobile){ 
            lastText4.style.transform = "translateY(0px)"
            lastText4.style.animation = "lastText linear .3s .2s"
            lastText4.style.opacity = "1"
        }
    }else if(y>=6775 && y<6800){
        if(isMobile){
            lastText1.style.transform = "translateY(0px)"
            lastText1.style.animation = "lastText linear .3s .2s"
            lastText1.style.opacity = "1"
        }
    }else if(y>=6800 && y<6830){
        if(!isMobile){ 
            lastText5.style.transform = "translateY(0px)"
            lastText5.style.animation = "lastText linear .3s .2s"
            lastText5.style.opacity = "1"
        }
    }else if(y>=6830 && y<6880){
        if(isMobile){
            lastText2.style.transform = "translateY(0px)"
            lastText2.style.animation = "lastText linear .3s .2s"
            lastText2.style.opacity = "1"
        }
    }else if(y>=6880 && y<6930){
        if(isMobile){ 
            lastText3.style.transform = "translateY(0px)"
            lastText3.style.animation = "lastText linear .3s .2s"
            lastText3.style.opacity = "1"
        }
    }else if(y>=6930 && y<6985){
        if(isMobile){ 
            lastText4.style.transform = "translateY(0px)"
            lastText4.style.animation = "lastText linear .3s .2s"
            lastText4.style.opacity = "1"
        }
    }else if(y>=6985){
        if(isMobile){ 
            lastText5.style.transform = "translateY(0px)"
            lastText5.style.animation = "lastText linear .3s .2s"
            lastText5.style.opacity = "1"
        }
    }
})