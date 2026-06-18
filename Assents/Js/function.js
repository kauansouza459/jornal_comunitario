document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;

  const destino = new URL(link.href, window.location.href).pathname;
  const atual = window.location.pathname;

  if (destino === atual) {
    e.preventDefault();
    alert('Você já está nesta página');
  }
});