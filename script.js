<script>
// simple scroll animation
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll',()=>{
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.style.transform='translateY(0)';
      card.style.opacity='1';
    }
  });
});

cards.forEach(c=>{
  c.style.transform='translateY(40px)';
  c.style.opacity='0';
  c.style.transition='0.5s';
});
</script>
