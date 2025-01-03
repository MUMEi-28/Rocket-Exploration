
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
    const cloudAbout1 = document.getElementById("cloudAbout1");
    const cloudAbout2 = document.getElementById("cloudAbout2");
    const rocket = document.getElementById("rocket");
    const outerCloudAbout = document.getElementById("outerCloudAbout");
    const rocketSmoke = document.getElementById("rocketSmoke");
    const rocketExplorerText = document.getElementById("rocketExplorerText");

    console.log(rocketSmoke.style.transform)

    window.addEventListener('scroll', function ()
    {
        var scrollY = window.scrollY;

        const aboutSection = document.getElementById("about");
        const rect = aboutSection.getBoundingClientRect();



        // If the sections lowest area has been scrolled by the user, then make the smoke go up too
        rocketSmoke.style.transform = `translateY(${scrollY * -0.3}px)`; // I CAN'T );

        aboutContainer.style.transform = `translateY(${scrollY * 0.5}px)`;

        rocket.style.transform = `translateY(${scrollY * -0.9}px)`;
        rocketExplorerText.style.transform = `translateX(${scrollY * -1.05}px)`;

        cloudAbout1.style.transform = `translate(${scrollY * 0.1}px, ${scrollY * -0.15}px) 
        scale(${1 + (scrollY * -0.0003)}, ${1 + (scrollY * -0.0003)})`;

        /*   cloudAbout2.style.transform = `translate(${scrollY * 0.3}px, ${scrollY * -0.2}px) 
          scale(${1 + (scrollY * -0.0001)}, ${1 + (scrollY * -0.0001)})`; */



        outerCloudAbout.style.transform = `translateX(${scrollY * 0.15}px)`

    });
}


/// SMOOTHER SCROLLING https://stackoverflow.com/questions/47011055/smooth-vertical-scrolling-on-mouse-wheel-in-vanilla-javascript

function SmoothScroll(target, speed, smooth)
{
    target = target.scrollingElement || target.documentElement || target.body;

    let moving = false, pos = target.scrollTop;

    target.addEventListener('wheel', (e) =>
    {
        e.preventDefault();
        const delta = (e.wheelDelta || -e.detail * 40) / 120; // Normalize wheel delta
        pos = Math.max(0, Math.min(pos - delta * speed, target.scrollHeight - target.clientHeight + 1));
        if (!moving) animate();
    }, { passive: false });

    function animate()
    {
        moving = true;
        const delta = (pos - target.scrollTop) / smooth;
        target.scrollTop += delta;
        if (Math.abs(delta) > 0.1) requestAnimationFrame(animate); // Lower threshold for precision
        else moving = false;
    }
}
function CardParallax()
{
    const tiltEls = document.querySelectorAll('.tilt');

    tiltEls.forEach(tilt =>
    {
        const backgrounds = tilt.querySelectorAll(".starBg");
        const cards = tilt.querySelector(".cards");
        const images = tilt.querySelectorAll(".card__img");
        const range = 50; // Adjusted range for a more balanced effect

        const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1);

        let timeout;

        tilt.addEventListener('mousemove', (e) =>
        {
            if (timeout)
            {
                window.cancelAnimationFrame(timeout);
            }

            timeout = window.requestAnimationFrame(() =>
            {
                const rect = tilt.getBoundingClientRect();
                const y = e.clientY - rect.top;
                const x = e.clientX - rect.left;

                const yValue = calcValue(y, tilt.clientHeight);
                const xValue = calcValue(x, tilt.clientWidth);

                cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

                images.forEach(image =>
                {
                    image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
                });

                backgrounds.forEach(background =>
                {
                    background.style.backgroundPosition = `${xValue * 2}px ${-yValue * 2}px`;
                });
            });
        });

        tilt.addEventListener('mouseout', () =>
        {
            cards.style.transform = `rotateX(0deg) rotateY(0deg)`;

            images.forEach(image =>
            {
                image.style.transform = `translateX(0px) translateY(0px)`;
            });

            backgrounds.forEach(background =>
            {
                background.style.backgroundPosition = `0px 0px`;
            });
        });
    });
}

/* || START FUNCTIONS */

document.addEventListener("DOMContentLoaded", () =>
{
    homeParallax();
    AboutParallax();

    new SmoothScroll(document, 120, 60);

    CardParallax();

});