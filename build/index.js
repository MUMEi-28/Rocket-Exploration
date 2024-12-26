function homeParallax()
{
    const Stars = document.getElementById("Stars");
    const CloudsFloating = document.getElementById("CloudsFloating");
    const Moon = document.getElementById("Moon");
    const InnerCloudMid = document.getElementById("InnerCloudMid");
    const InnerCloudLeft = document.getElementById("InnerCloudLeft");
    const InnerCloudRight = document.getElementById("InnerCloudRight");
    const OuterCloud = document.getElementById("OuterCloud");
    const headline = document.getElementById("headline");


    window.addEventListener('scroll', function ()
    {
        var scrollY = window.scrollY;

        Stars.style.left = (scrollY * 0.5) + "px";
        CloudsFloating.style.right = (scrollY * 1.5) + "px";

        Moon.style.top = (scrollY * 1.1) + "px";
        Moon.style.right = (scrollY * 1.5) + "px";

        InnerCloudMid.style.top = (scrollY * 0.2) + "px";

        // Did this instead because the top + right position is snapping
        InnerCloudLeft.style.transform = `translate(${scrollY * -0.3}px, ${scrollY * -0.1}px)`;
        InnerCloudRight.style.transform = `translate(${scrollY * 0.3}px, ${scrollY * -0.1}px)`;

        headline.style.top = (scrollY * 0.6) + "px";

    });
}

homeParallax();