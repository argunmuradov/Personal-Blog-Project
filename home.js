const topbar = document.querySelector(".topbar");
topbar.addEventListener('click', function()
{
    const text = document.querySelector('#posttitle');
    text.style.color = "red";
})

const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("damn");
} )