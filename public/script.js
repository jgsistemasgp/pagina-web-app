const button = document.getElementById('loadMessage');
const message = document.getElementById('message');

button.addEventListener('click', async () => {
  message.textContent = 'Cargando...';

  try {
    const response = await fetch('/api/hello');
    const data = await response.json();
    message.textContent = data.message;
  } catch (error) {
    message.textContent = 'Error al conectar con el backend.';
    console.error(error);
  }
});
