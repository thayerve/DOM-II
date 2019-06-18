
// on document load, add background gradient. On press zero key, remove background.

let header = document.querySelector('header');

window.addEventListener('load', event => {
    header.style.background = 'linear-gradient(#FFEBCD, white)';
})

// when click nav link, change background color to #C0C0C0, and preventDefault (so page doesn't refresh)

let nav = document.querySelector('header nav');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));

navLinks.forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        console.log('prevented default!');
        event.target.style.background = '#C0C0C0';
    });
});
        

// when focus header img, change opacity

// let intro = document.querySelector('.intro');
// let headerImg = document.querySelector('.intro > img');

// intro.addEventListener('scroll', event => {
//     event.target.style.opacity = '0.3';
//     console.log(`i'm trying to change opacity!`);
// })

//// !! This ^ doesn't work -- 



// when keydown spacebar on document, set background color to background-color: #17A2B8 (less variable @eastern-blue). cancel on keyup

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



// mouseover .content-destination img, change border radius
let destImg = document.querySelector('.content-destination img');
destImg.addEventListener('mouseenter', (event) => { event.target.style.borderRadius = '50%'; });

destImg.addEventListener('mouseleave', (event) => { event.target.style.borderRadius = null; });


// click any div in class .content-pick, add border: color #FFEBCD, size 2px, dashed

// {event.target.style.border = '2px dashed #FFEBCD';}


// when click on Island Getaway (.destination:lastChild?), alert some Kokomo lyrics

let getaway = document.querySelector('.content-pick').lastElementChild;

function kokomo() {
    alert(`🎶 Off the Florida Keys, there's a place called Kokomo. That's where you want to go to get away from it all.  🎶`);
}
getaway.addEventListener('click', kokomo);


// 


// 


// 