const faqs = document.querySelectorAll('.faq-item');
console.log(faqs);
faqs.forEach((faq) => {
  const faqHeader = faq.querySelector('.faq-header');
  const faqButton = faq.querySelector('.faq-btn');

  const toggleClassName = () => {
    faq.classList.toggle('open');
    if (faq.classList.contains('open')) {
      faqButton.ariaLabel = 'Hide the answer';
    } else {
      faqButton.ariaLabel = 'Show the answer';
    }
  };

  faqHeader.addEventListener('click', () => {
    toggleClassName();
  });
  faqButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleClassName();
    console.log('click from button');
  });
});
