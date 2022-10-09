const Labels = document.querySelectorAll('.form-control label');

Labels.forEach( (label)=> {
    label.innerHTML = label.textContent
    .split('')
    .map((lett , idx)=> `<span style="transition-delay:${idx * 50}ms">${lett}</span>`)
    .join('');
});