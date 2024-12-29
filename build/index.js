
/* || GLOBAL VARIABLES */



function homeParallax()
{
    const Stars = document.getElementById("stars");
    const Moon = document.getElementById("moon");
    const InnerCloudMid = document.getElementById("innerCloudMid");
    const InnerCloudLeft = document.getElementById("innerCloudLeft");
    const InnerCloudRight = document.getElementById("innerCloudRight");
    const OuterCloud = document.getElementById("outerCloud");
    const headline = document.getElementById("headline");

    const cloud1 = document.getElementById("cloud1");
    const cloud2 = document.getElementById("cloud2");
    const cloud3 = document.getElementById("cloud3");
    const cloud4 = document.getElementById("cloud4");


    window.addEventListener('scroll', function ()
    {
        var scrollY = window.scrollY;

        Stars.style.top = (scrollY * -1.3) + "px"

        Moon.style.top = (scrollY * 1.1) + "px";
        Moon.style.right = (scrollY * 1.5) + "px";

        InnerCloudMid.style.transform = `translateY(${scrollY * 0.5}px)`;

        // Did this instead because the top + right position is snapping
        InnerCloudLeft.style.transform = `translate(${scrollY * -0.3}px, ${scrollY * -0.1}px)`;
        InnerCloudRight.style.transform = `translate(${scrollY * 0.3}px, ${scrollY * -0.1}px)`;

        headline.style.top = (scrollY * 0.8) + "px";

        cloud1.style.left = (scrollY * 0.8) + "px";
        cloud2.style.transform = `translate(${scrollY * 0.5}px, ${scrollY * 0.3}px)`;
        cloud3.style.transform = `translate(${scrollY * -0.2}px, ${scrollY * 0.3}px)`;
        cloud4.style.right = (scrollY * 0.4) + "px";

    });
}


function AboutParallax()
{
    const aboutContainer = document.getElementById("aboutContainer");
    const Cloud1 = document.getElementById("Cloud1");
    const rocket = document.getElementById("rocket");
    const outerCloudAbout = document.getElementById("outerCloudAbout");
    const rocketSmoke = document.getElementById("rocketSmoke");
    const rocketExplorerText = document.getElementById("rocketExplorerText");


    window.addEventListener('scroll', function ()
    {
        var scrollY = window.scrollY;

        aboutContainer.style.transform = `translateY(${scrollY * 0.5}px)`;

        rocket.style.transform = `translateY(${scrollY * -0.3}px)`;
        rocketExplorerText.style.transform = `translateX(${scrollY * -1}px)`;

        Cloud1.style.transform = `translateY(${scrollY * 0.15}px)`
        outerCloudAbout.style.transform = `translateX(${scrollY * 0.15}px)`

    });
}


/* || START FUNCTIONS */

document.addEventListener("DOMContentLoaded", () =>
{
    homeParallax();
    AboutParallax();
});