const toggleMode = document.getElementById('toggle-mode');

toggleMode.onclick = function() {
    document.body.classList.toggle('change-mode-css');
    
    if(document.body.classList.contains('change-mode-css')) {
        toggleMode.innerHTML = 'Light Mode';
        toggleMode.title = 'Click Here to Switch to Light Mode';
    } else {
        toggleMode.innerHTML = 'Dark Mode';
        toggleMode.title = 'Click Here to Switch to Dark Mode';
    }
}
