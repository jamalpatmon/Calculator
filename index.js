let display = document.getElementById ('display');

let buttons = Array.from(document.getElementsByClassName ('button'));

buttons.map ( buttons => {
    buttons.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                // break; without break it will run the below as well
            default:
                display.innerText += e.target.innerText
        }
    })
})
