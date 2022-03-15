
let num = 0;
function dayMode() {
    
    if (num == 0) {
        document.documentElement.style.setProperty('--bg-color', 'rgb(209, 203, 203)');
        document.documentElement.style.setProperty('--other-grad', 'white');
        document.documentElement.style.setProperty('--word-color', 'black');
        document.documentElement.style.setProperty('--special-bg', 'transparent');
        num = 1;
    }
    else {
        document.documentElement.style.setProperty('--bg-color', '#171717');
        document.documentElement.style.setProperty('--other-grad', '#333333');
        document.documentElement.style.setProperty('--word-color', 'white');
        document.documentElement.style.setProperty('--special-bg', '#212121');
        num = 0;
    }

}