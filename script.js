let screen = document.getElementById('scren')
let btn = document.querySelectorAll('button')
let screenval = ''
for (item of btn) {
    item.addEventListener('click', (e) => {
        bt = e.target.innerText;
        console.log('button is', bt)
        if (bt == '=') {
            screen.value = eval(screenval)
            screenval = ''
        } else if (bt == 'C') {
            screenval = '';
            screen.value = screenval
        }
        // else if(bt=='sqrt'){
        //     // sqrt=math.sqrt
        //     screenval+='sqrt('
        //     screen.value=screenval
        // }
        else if (bt == 'DEL') {
            screenval = screenval.slice(0, -1)
            screen.value = screenval
        } else if (bt == 'X') {
            // screenval+='*';
            bt = '*'
            screenval += bt;
            screen.value = screenval;
        }
        // else if(eval(screenval)=='undefine'){
        //     alert("incorrect input")
        // }
        else {
            screenval += bt;
            screen.value = screenval
        }
    })
}