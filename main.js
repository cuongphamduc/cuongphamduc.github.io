var where = $("#where"),
    there1 = $("#there_1"),
    is1 = $("#is_1"),
    a = $("#a"),
    woman = $("#woman"),
    there2 = $("#there_2"),
    is2 = $("#is_2"),
    magic = $("#magic"),
    happy = $("#happy"),
    women = $("#women"),
    day = $("#day"),
    plant = $("#plants"),
    star1 = $("#stars_1"),
    star2 = $("#stars_2"),
    star3 = $("#stars_3");
var delay = .3;
var delta = 2;

function mainScene() {
    var tl = new TimelineLite();
    tl.set(plant, {autoAlpha:0})
        .set(where, {autoAlpha:0})
        .set(there1, {autoAlpha:0})
        .set(is1, {autoAlpha:0})
        .set(a, {autoAlpha:0})
        .set(woman, {autoAlpha:0})
        .set(there2, {autoAlpha:0})
        .set(is2, {autoAlpha:0})
        .set(magic, {autoAlpha:0})
        .set(star1, {autoAlpha:0})
        .set(star2, {autoAlpha:0})
        .set(star3, {autoAlpha:0})
        .set("p", {autoAlpha:0});
    tl.add( "start");
    tl.from(plant, 1, {delay: 0.5, autoAlpha:0, ease: Linear.easeNone})
        .to("p", 1, {autoAlpha:1, ease: Linear.easeNone})
        .from(where, delay, {autoAlpha:0, ease: Linear.easeNone})
        .from(there1, delay, {autoAlpha:0, ease: Linear.easeNone})
        .from(is1, delay, {autoAlpha:0, ease: Linear.easeNone})
        .from(a, delay, {autoAlpha:0, ease: Linear.easeNone})
        .to(woman, 1.5, {autoAlpha:1, ease: Linear.easeNone, x: 50, y:-5})
        .from(there2, delay, {autoAlpha:0, ease: Linear.easeNone})
        .from(is2, delay, {autoAlpha:0, ease: Linear.easeNone})
        .to(magic, 1, {autoAlpha:1, ease: Linear.easeNone, x: 20, y:5})
        .to(star1, 1.5, {autoAlpha:1, repeat: -1, ease: Linear.easeNone, rotation: 1, yoyo: true})
        .to(star2, 2, {autoAlpha:1, repeat: -1, ease: Linear.easeNone, rotation: 5, yoyo: true})
        .to(star3, 2.5, {autoAlpha:1, repeat: -1, ease: Linear.easeNone, rotation: -2, yoyo: true});

}


var master = new TimelineLite();
master.add(mainScene(), "mainScene");

document.addEventListener("click", function()
{
    window.location="./index.html";
});