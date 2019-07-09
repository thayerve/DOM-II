
// 1. on document load, add background gradient. On press zero key, remove background.

let header = document.querySelector('header');

window.addEventListener('load', event => {
    header.style.background = 'linear-gradient(#FFEBCD, white)';
})


// 2. when click nav link, change background color to #C0C0C0, and preventDefault (so page doesn't refresh)

let nav = document.querySelector('header nav');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));

navLinks.forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        console.log('prevented default!');
        event.target.style.background = '#C0C0C0';
    });
});
        

// 3 & 4. when keydown spacebar on document, set background color to background-color: #17A2B8 (less variable @eastern-blue). cancel on keyup

window.addEventListener('keydown', event => {
    if(event.key == 'b'){
        document.body.style.background = '#17A2B8';
    }
})

window.addEventListener('keyup', event => {
    if(event.key == 'b'){
        document.body.style.background = null;
    }
})


// 5 & 6. when mouse is on .content-destination img, change border radius, then change back when mouse leaves
let destImg = document.querySelector('.content-destination img');
destImg.addEventListener('mouseenter', (event) => { event.target.style.borderRadius = '50%'; });

destImg.addEventListener('mouseleave', (event) => { event.target.style.borderRadius = null; });


// 7. when mouse onto footer, change font size 
let footer = document.querySelector('footer > p');
console.log(footer);
footer.addEventListener('mouseover', event => {
    event.target.style.fontSize = '3rem';
})


// 8. when click on Island Getaway (.destination:lastChild?), alert some Kokomo lyrics

let getaway = document.querySelector('.content-pick');

function kokomo() {
    alert(`🎶 Off the Florida Keys, there's a place called Kokomo. That's where you want to go to get away from it all.  🎶`);
}
getaway.addEventListener('dblclick', kokomo);


// 9. resize window, add background image
window.addEventListener('resize', event => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')";
    console.log('you resized it');
})


// 10. dblclick first button, it turns red

let buttonOne = document.querySelector('.content-pick .destination .btn');
buttonOne.addEventListener('dblclick', event => {
    event.target.style.color = 'red';
    event.stopPropagation();
  })


// 