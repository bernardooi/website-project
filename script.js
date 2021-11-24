$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});



var images = [
    "Minecraft_cover.png",
    "sekiro.png",
    "batman.jpg"
];


function gamesiteload(i) {
    document.getElementById("#pageimg").src = images[1];
    document.getElementById("#pagetitle").style.visibility='visible';
    document.getElementById("#pagescore").style.visibility='visible';
    document.getElementById("#pagesynopsis").style.visibility='visible';

}