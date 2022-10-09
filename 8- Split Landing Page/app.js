const Labels = document.querySelectorAll('.form-control label');

Labels.forEach( (label)=> {
    label.innerHTML = label.textContent.split('').map(lett=> `<span>${lett}</span>`).join('');
});