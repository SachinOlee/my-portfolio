const API_BASE_URL = 'http://localhost:3000'; // Change to your deployed backend URL when live

document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (!response.ok) throw new Error('Failed to submit');

    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  } catch (error) {
    alert('There was an error submitting your message. Please try again.');
  }
});
