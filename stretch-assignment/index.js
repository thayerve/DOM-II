// make an array of all rockets
let rockets = Array.from(document.querySelectorAll('.block'))

// add a click event listener for each rocket
rockets.forEach(rocket => {
    rocket.addEventListener('click', event => {
        console.log('a rocket has been clicked');
        let thisRocket = event.target;

        // grab the array position (index) of the clicked rocket
        let thisIndex = rockets.indexOf(thisRocket);

        // only move the rocket if it's not already at the top
        if (thisIndex > 0) {

            // remove the clicked rocket from its position in the array
            rockets.splice(thisIndex, 1);

            // add the clicked rocket to the beginning of the array
            rockets.unshift(thisRocket);

            // set the display order equal to the array index
            rockets.forEach(rocket => {
                rocket.style.order = rockets.indexOf(rocket);
            })
        }
    })
})

