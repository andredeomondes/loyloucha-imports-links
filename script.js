// Controle do modo escuro/claro com salvamento no localStorage
const body = document.body;
const toggle = document.getElementById('switch');

// inicia com dark mode
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggle.checked = true;
} else {
  body.classList.add('dark');
  toggle.checked = false;
}

toggle.addEventListener('change', () => {
  body.classList.add('transitioning');
  setTimeout(() => body.classList.remove('transitioning'), 400);

  if (toggle.checked) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
