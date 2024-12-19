document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = async (selector, file) => {
      const container = document.querySelector(selector);
      if (container) {
        const response = await fetch(file);
        const content = await response.text();
        container.innerHTML = content;
      }
    };
  
    // Load Header and Footer
    loadComponent('#header', 'header.html');
    loadComponent('#footer', 'footer.html');
  });
  