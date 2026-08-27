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

    const payload = {
      name,
      company: String(formData.get('company') || '').trim(),
      email,
      service,
      message,
      sentAt: new Date().toISOString()
    };

    console.log('Formulario enviado:', payload);

    status.textContent = 'Consulta enviada correctamente. Nos pondremos en contacto a la brevedad.';
    status.style.color = '#0d5bdc';
    form.reset();
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
