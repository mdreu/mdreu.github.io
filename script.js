
let num = 0;
function dayMode() {
    
    if (num == 0) {
        document.documentElement.style.setProperty('--bg-color', 'rgb(209, 203, 203)');
        document.documentElement.style.setProperty('--other-grad', 'white');
        document.documentElement.style.setProperty('--word-color', 'black');
        document.documentElement.style.setProperty('--special-bg', 'transparent');
        document.documentElement.style.setProperty('--shape-color', '#817d6663');
        num = 1;
    }
    else {
        document.documentElement.style.setProperty('--bg-color', '#171717');
        document.documentElement.style.setProperty('--other-grad', '#333333');
        document.documentElement.style.setProperty('--word-color', 'white');
        document.documentElement.style.setProperty('--special-bg', 'transparent');
        document.documentElement.style.setProperty('--shape-color', '#b2ac8863');
        num = 0;
    }

}
function changeColors() {
    var back = document.getElementById('bg').value;
    var gra = document.getElementById('Gradient').value;
    var wc = document.getElementById('wc').value;
    var sh = document.getElementById('sh').value;
    var ac = document.getElementById('ac').value;
    document.documentElement.style.setProperty('--bg-color', back);
    document.documentElement.style.setProperty('--other-grad', gra);
    document.documentElement.style.setProperty('--word-color', wc);
    document.documentElement.style.setProperty('--shape-color', sh);
    document.documentElement.style.setProperty('--accent-color', ac);
}