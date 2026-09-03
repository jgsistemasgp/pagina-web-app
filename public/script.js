const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !service || !message) {
      status.textContent = 'Completá todos los campos para enviar la consulta.';
      status.style.color = '#b42318';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = 'Ingresá un email válido.';
      status.style.color = '#b42318';
      return;
    }

    const company = String(formData.get('company') || '').trim();
    const subject = encodeURIComponent(`Nueva consulta web: ${service}`);
    const body = encodeURIComponent([
      `Nombre: ${name}`,
      `Empresa: ${company || 'No informada'}`,
      `Email: ${email}`,
      `Servicio: ${service}`,
      '',
      'Mensaje:',
      message
    ].join('\n'));

    window.location.href = `mailto:ventas@jgsistemas.com.ar?subject=${subject}&body=${body}`;
    status.textContent = 'Se abrió tu correo con la consulta lista para enviar.';
    status.style.color = '#0d5bdc';
  });
}

const button = document.getElementById('loadMessage');
const message = document.getElementById('message');

if (button && message) {
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
}
