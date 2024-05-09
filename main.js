document.addEventListener('DOMContentLoaded', () => {
    // Function to load content based on hash
    function loadContent() {
      const hash = window.location.hash.substr(1); // Remove '#' from hash
      const container = document.getElementById('content');
  
      // Fetch content based on hash
      fetch(`${hash}.html`)
        .then(response => response.text())
        .then(html => {
          container.innerHTML = html; // Insert HTML content into container
        })
        .catch(error => {
          console.error('Error loading content:', error);
          container.innerHTML = '<p>Content not found.</p>'; // Display error message if content not found
        });
    }
  
    // Load content on page load and hash change
    window.addEventListener('hashchange', loadContent);
    loadContent();
  });
  
  // main.js
document.addEventListener('DOMContentLoaded', function() {
  // Get the current page URL
  var currentPage = window.location.pathname;

  // Get all navigation links
  var navLinks = document.querySelectorAll('nav ul li a');

  // Loop through each link and check if its href matches the current page URL
  navLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
      // If the link's href matches the current page URL, add the active class
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Function to set active link based on hash
  function setActiveLink() {
    const hash = window.location.hash.substr(1); // Remove '#' from hash
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
      if (link.getAttribute('href') === `#${hash}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Set active link on page load and hash change
  window.addEventListener('hashchange', setActiveLink);
  setActiveLink();
});
