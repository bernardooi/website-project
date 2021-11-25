
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});


var save = 2;
console.log(save);

var i=0;

var images = [

    "Images/Minecraft_cover.png",
    "Images/sekiro.png",
    "Images/batman.jpg",
    ""
];
console.log(i);

document.getElementById("pageimg").src = images[0];



function gamesiteload(){
    document.getElementById("pageimg").src = images[i];

    document.getElementById("pagetitle").style.visibility='visible';
    document.getElementById("pagescore").style.visibility='visible';
    document.getElementById("pagesynopsis").style.visibility='visible';
    }


var BildGalleri = ["frame_0_delay-0.1s.gif", "frame_1_delay-0.1s.gif", "frame_2_delay-0.1s.gif", "frame_3_delay-0.1s.gif", "frame_4_delay-0.1s.gif", "frame_5_delay-0.1s.gif"];

document.addEventListener("keydown", changePic)

function changePic(){
    if(event.key == "ArrowLeft"){
        if(i<5){
            i++;
        }
        else if(i==5){
           i=0;
        }
    }

    else if(event.key == "ArrowRight"){
        if(i>0){
            i--;
        }
        else if(i==0){
            i=5;
        }
    }


    document.getElementById("featuredimg")[0].src = BildGalleri[i];

}
