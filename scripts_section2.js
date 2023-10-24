let building1 = document.querySelector("#building_1")
let building2 = document.querySelector("#building_2")
let building3 = document.querySelector("#building_3")
let building4 = document.querySelector("#building_4")
let is_Shake1 = false
let is_Shake2 = false
let is_Shake3 = false
let is_Shake4 = false
let is_Blinking = false
let is_fade_out_blink = false
let page1_textContainer = document.querySelector(".page1_textContainer");
function callback_nextPage(el, anim_class) {
    return function(){
        el.classList.remove(anim_class);
    }
}
document.addEventListener("scroll",function(){
    document.body.dataset.y = window.scrollY
    let y = parseInt(document.body.dataset.y)
    let text_Change1 = document.querySelector(".page1_text_change1")
    let text_Change2 = document.querySelector(".page1_text_change2")
    let calendar = document.querySelector("#calendar")
    let map_svg = document.querySelector("#map_svg")
    let map_red = document.querySelector("#map_red")
    let water_wave = document.querySelector(".water-wave")
    let wave1 = document.getElementsByClassName("wave")[2]
    let wave2 = document.getElementsByClassName("wave")[3]
    if(y >= 700 && y < 900){
        page1_textContainer.style.position = "relative"
        page1_textContainer.style.top = "700px"
        text_Change2.style.display = "inline-block"
        text_Change2.style.opacity = "100%"
        text_Change1.style.opacity = "0%"
        text_Change1.style.position = "absolute"
        text_Change2.style.position = "static"
        text_Change1.style.transition = "linear 0s, width 0s"
        text_Change2.style.transition = "linear .75s, width .25s"
        text_Change2.style.width = "60px"
        text_Change1.style.width = "60px"
        building1.style.opacity = "1"
        building1.style.top = "220px"
        if(is_Shake1 == false){
            building1.classList.toggle("structure_building");
            building1.addEventListener("webkitAnimationEnd", callback_nextPage(building1, "structure_building"), false);
            is_Shake1 = true
        }
        building2.style.opacity = "0"
        building2.style.top = "710px"
        is_Shake2 = false
    }else if(y < 700){
        page1_textContainer.style.position = "fixed"
        page1_textContainer.style.top = "auto"
        text_Change1.style.display = "inline-block"
        text_Change1.style.opacity = "100%"
        text_Change2.style.opacity = "0%"
        text_Change2.style.position = "absolute"
        text_Change1.style.position = "static"
        text_Change2.style.transition = "linear 0s, width 0s"
        text_Change1.style.transition = "linear .75s, width .25s"
        text_Change2.style.width = "80px"
        text_Change1.style.width = "80px"
        building1.style.opacity = "0"
        building1.style.top = "280px"
        is_Shake1 = false
    }else if(y >= 900 && y < 1000){
        building2.style.opacity = "1"
        building2.style.top = "650px"
        building4.style.opacity = "0"
        building4.style.top = "810px"
        if(is_Shake2 == false){
            building2.classList.toggle("structure_building");
            building2.addEventListener("webkitAnimationEnd", callback_nextPage(building2, "structure_building"), false);
            is_Shake2 = true
        }
        is_Shake4 = false
    }else if(y >= 1000 && y < 1100){
        building4.style.opacity = "1"
        building4.style.top = "750px"
        building3.style.opacity = "0"
        building3.style.top = "860px"
        if(is_Shake4 == false){
            building4.classList.toggle("structure_building");
            building4.addEventListener("webkitAnimationEnd", callback_nextPage(building4, "structure_building"), false);
            is_Shake4 = true
        }
        is_Shake3 = false
    }else if(y >= 1100 && y < 3000){
        building3.style.opacity = "1"
        building3.style.top = "800px"
        if(is_Shake3 == false){
            building3.classList.toggle("structure_building");
            building3.addEventListener("webkitAnimationEnd", callback_nextPage(building3, "structure_building"), false);
            is_Shake3 = true
        }
        if(is_fade_out_blink == true){
            console.log("s")
            is_fade_out_blink = false
            map_red.classList.toggle("blinkingOut");
            map_red.addEventListener("webkitAnimationEnd", callback_nextPage(map_red, "blinkingOut"), false);
            map_svg.classList.toggle("blinkingOut");
            map_svg.addEventListener("webkitAnimationEnd", callback_nextPage(map_svg, "blinkingOut"), false);
            calendar.classList.toggle("calendarOut");
            calendar.addEventListener("webkitAnimationEnd", callback_nextPage(calendar, "calendarOut"), false);
            calendar.style.opacity = "0"
            map_svg.style.opacity = "0"
            map_red.style.opacity = "0"
        }
        is_Blinking = false
    }else if(y >= 3000 && y < 7500){
        if(is_Blinking == false){
            map_red.classList.toggle("blinking");
            map_red.addEventListener("webkitAnimationEnd", callback_nextPage(map_red, "blinking"), false);
            map_svg.classList.toggle("blinkingIn");
            map_svg.addEventListener("webkitAnimationEnd", callback_nextPage(map_svg, "blinkingIn"), false);
            calendar.classList.toggle("calendarIn");
            calendar.addEventListener("webkitAnimationEnd", callback_nextPage(calendar, "calendarIn"), false);
            map_svg.style.opacity = "1"
            map_red.style.opacity = "1"
            calendar.style.opacity = "1"
            is_Blinking = true
            is_fade_out_blink = true
        }
    }else if(y >= 7500){
        water_wave.style.height = (y+162-7500)+"px"
        wave1.style.top = (y-7500+155)+"px"
        wave2.style.top = (y-7500+130)+"px"
    }
})
