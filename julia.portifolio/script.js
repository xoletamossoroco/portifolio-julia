document.getElementById('scrollButton').addEventListener('click', () => {
  const next = document.getElementById('sobre');
  if(next){
    next.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  })
});
