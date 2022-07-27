let display = document.getElementById ('display');

let buttons = Array.from(document.getElementsByClassName ('button'));

buttons.map ( buttons => {
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
            default:
                display.innerText += e.target.innerText
        }
    })
})
