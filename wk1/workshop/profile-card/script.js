const bio = document.getElementById("bio");
const togglebtn = document.getElementById('toggle-btn');

togglebtn.addEventListener('click', ()=> {
    if (bio.style.display === 'none') {
        bio.style.display = 'block';
        togglebtn.textContent = 'Hide Bio';
    } else {
        bio.style.display = 'none';
        togglebtn.textContent = 'Show Bio';
    }
})