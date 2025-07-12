const images = document.querySelectorAll("img");

window.addEventListener("scroll", debounce(checkSlide));

function checkSlide(e) {
    images.forEach((img, index) => {
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        const imageBottom = img.offsetTop + img.height;

        const isHalfShown = slideInAt > img.offsetTop;
        const isScrolledPast = window.scrollY >= imageBottom;

        if (isHalfShown && !isScrolledPast) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
