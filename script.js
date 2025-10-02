function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const whatsappNumber = '919711657307';

    // Form se data nikalo
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const services = document.querySelectorAll('input[name="service"]:checked');
    let selectedServices = [];
    services.forEach((service) => {
      selectedServices.push(service.value);
    });
    
  
    let whatsappMessage = `
Hello Rohan, I got your number from your portfolio.
-----------------------------------
*Name:* ${name}
*Email:* ${email}
*Interested Services:* ${selectedServices.join(', ') || 'Not specified'}
*Project Details:*
${message}
-----------------------------------
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  });
});