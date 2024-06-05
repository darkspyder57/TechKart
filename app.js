const filler = document.querySelector('.filler');

function update(){
    filler.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update); 
}
update();