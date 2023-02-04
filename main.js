const changeTheme = document.querySelector('.meme')
let ToggleTheme = 0;


changeTheme.addEventListener('click', () => {
if(ToggleTheme == 0) {

    document.documentElement.style.setProperty('--font', '#000000');
    document.documentElement.style.setProperty('--color', '#f1f1f1');
    ToggleTheme++;

}
else {
    document.documentElement.style.setProperty('--font', '#f1f1f1');
    document.documentElement.style.setProperty('--color', '#000000');
    ToggleTheme--;
}
} )