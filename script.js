//Loading screen

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

//Array game page system

var save = 2;
console.log(save);

var images = [
    "Images/Minecraft_cover.png",
    "Images/sekiro.png",
    "Images/smite.jpg",
    "Images/dssouls.jpg",
    "Images/starwars.jpg",
    "Images/batman.jpg",
    "Images/league.jpg",
    "Images/age.webp",
    "Images/eu4.jfif"
];

var names = [
    "Minecraft",
    "Sekiro: Shadows Die Twice",
    "Smite",
    "Dark Souls Remastered",
    "Star Wars: Jedi Fallen Order",
    "Batman: Arkham Knight",
    "League of Legends",
    "Age of Empires IV",
    "Europa Universalis IV"
];

var score = [
    "10",
    "9",
    "0",
    "9",
    "7",
    "7",
    "7",
    "7",
    "7"
];

var year = [
    "2011",
    "2019",
    "2014",
    "2018",
    "2019",
    "2015",
    "2009",
    "2021",
    "2013"
]

var developer = [
    "Mojang",
    "From Software",
    "Hi-Rez Studios",
    "From Software",
    "EA",
    "Rocksteady Studios",
    "Riot Games",
    "Xbox Games Studios",
    "Paradox Interactive"
]

//Slideshow

var i=0;

console.log(i);

function gamesiteload(i)
{

    document.getElementById("gpimg").src = images[i];

}





    //document.getElementById("featuredimg")[0].src = BildGalleri[i];

}
