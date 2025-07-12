const container = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 400;

container.addEventListener("mousemove", moveShadows);


function moveShadows(e) {
    const { offsetWidth: width, offsetHeight: height } = container;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));


    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7),
        ${-xWalk}px ${-yWalk}px 0 rgba(0,255,0,0.7),
        ${yWalk}px ${xWalk}px 0 rgba(0,0,255,0.7),
        ${-yWalk}px ${-xWalk}px 0 rgba(255,255,0,0.7)
    `;
}