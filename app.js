let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        let target = e.target.innerText;
        switch(target){
            case 'x':
                if(display.innerText){
                    display.innerText = '';
                }
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Syntax Error!';
                }
                break;
            default:
                display.innerText += target;
        }
    });
});

