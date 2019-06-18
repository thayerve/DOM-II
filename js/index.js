
// on document load, ...

// when click nav link, change background color to #C0C0C0, and preventDefault (so page doesn't refresh)

let nav = document.querySelector('header nav');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
console.log(navLinks);

navLinks.forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        console.log('prevented default!');
    });
});
        

// when scroll header img, set border-radius to 50%



// when keydown on document, set background color to background-color: #17A2B8. cancel on keyup



// mouseover .content-destination img, change border radius
let destImg = document.querySelector('.content-destination img');
destImg.addEventListener('mouseenter', (event) => { event.target.style.borderRadius = '50%'; });

destImg.addEventListener('mouseleave', (event) => { event.target.style.borderRadius = null; });


// click any div in class .content-pick, add border: color #FFEBCD, size 2px, dashed




// when click on Island Getaway (.destination:lastChild?), alert some Kokomo lyrics

let getaway = document.querySelector('.content-pick').lastElementChild;

function kokomo() {
    alert(`🎶 Off the Florida Keys, there's a place called Kokomo. That's where you want to go to get away from it all.  🎶`);
}
getaway.addEventListener('click', kokomo);


// 


// 


// 