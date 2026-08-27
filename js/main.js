document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-placeholder');
    const mainContent = document.getElementById('main-content');
  
    // Load sidebar first
    fetch('components/navbar.html')
      .then(response => response.text())
      .then(html => {
        sidebarContainer.innerHTML = html;
        initNavigation();
        loadPage('home.html'); // Initial default page
      })
      .catch(err => console.error('Error loading navbar:', err));
  
    function initNavigation() {
      const navLinks = document.querySelectorAll('.nav-item');
  
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          const targetPage = link.getAttribute('data-page');
          
          // Update active menu highlight
          navLinks.forEach(item => item.classList.remove('active'));
          link.classList.add('active');
  
          loadPage(targetPage);
        });
      });
    }
  
    function loadPage(page) {
      fetch(`pages/${page}`)
        .then(response => {
          if (!response.ok) throw new Error('Page not found');
          return response.text();
        })
        .then(html => {
          mainContent.innerHTML = html;
        })
        .catch(err => {
          mainContent.innerHTML = '<p>Error loading content.</p>';
          console.error(err);
        });
    }
  });