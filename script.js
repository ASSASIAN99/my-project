// document.addEventListener("DOMContentLoaded", function() {
//     var readDocs = document.querySelector(".read-instructions");
//     readDocs.style.display = "block";
// });
function openNav() {
	document.getElementById("sideMenu")
		.style.width = "300px";
	document.getElementById("contentArea")
		.style.marginLeft = "300px";
	document.getElementById("header")
		.style.marginLeft = "300px";
}

function closeNav() {
	document.getElementById("sideMenu")
		.style.width = "0";
	document.getElementById("contentArea")
		.style.marginLeft = "0";
		document.getElementById("header")
		.style.marginLeft = "0";
}

function showContent(content) {
	document.getElementById("contentTitle")
		.textContent = content + " page";
	closeNav();
}

document.addEventListener('DOMContentLoaded', () => {
	// Function to set active link based on hash
	function setActiveLink() {
	  const hash = window.location.hash.substr(1); // Remove '#' from hash
	  const locLink = document.getElementById('locLink');
	  const lacLink = document.getElementById('lacLink');
	  const vibLink = document.getElementById('vibLink');
  
	  // Remove 'active' class from all links
	  locLink.classList.remove('active');
	  lacLink.classList.remove('active');
	  vibLink.classList.remove('active');
  
	  // Add 'active' class to the corresponding link
	  if (hash === 'loc') {
		locLink.classList.add('active');
	  } else if (hash === 'lac') {
		lacLink.classList.add('active');
	  } else if (hash === 'index') {
		vibLink.classList.add('active');
	  }
	}
  
	// Set active link on page load and hash change
	window.addEventListener('hashchange', setActiveLink);
	setActiveLink();
  });
// const locLink = document.getElementById('locLink');
// const lacLink = document.getElementById('lacLink');
// const vibrantLink = document.getElementById('vibrantLink');

// function addBorder(link) {
//     link.style.border = '1px solid #333';
// }

// function removeBorder(link) {
//     link.style.border = 'none';
// }

// locLink.addEventListener('mousedown', function() {
//     addBorder(locLink);
// });

// locLink.addEventListener('mouseup', function() {
//     removeBorder(locLink);
// });

// lacLink.addEventListener('mousedown', function() {
//     addBorder(lacLink);
// });

// lacLink.addEventListener('mouseup', function() {
//     removeBorder(lacLink);
// });

// vibrantLink.addEventListener('mousedown', function() {
//     addBorder(vibrantLink);
// });

// vibrantLink.addEventListener('mouseup', function() {
//     removeBorder(vibrantLink);
// });
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth * 3; // Calculate width for three images

    function showSlide(index) {
        currentIndex = index;
        slidesContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    // Show next slide
    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % Math.ceil(slides.length / 3); // Update index based on number of slides
        showSlide(currentIndex);
    });

    // Show previous slide
    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + Math.ceil(slides.length / 3)) % Math.ceil(slides.length / 3); // Update index based on number of slides
        showSlide(currentIndex);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to get the current page's URL fragment
    function getCurrentPage() {
        return window.location.hash.substr(1); // Remove '#' from the URL fragment
    }

    // Update the body class based on the current page
    function updateBodyClass() {
        const currentPage = getCurrentPage();
        switch (currentPage) {
            case 'index':
                document.body.className = 'home-page';
                break;
            case 'loc':
                document.body.className = 'loc-page';
                break;
            case 'lac':
                document.body.className = 'lac-page';
                break;
            default:
                // Default class if no matching fragment found
                document.body.className = 'default-page';
                break;
        }
    }

    // Call updateBodyClass initially to set the class on page load
    updateBodyClass();

    // Update the body class whenever the URL fragment changes (e.g., when navigating within the SPA)
    window.addEventListener('hashchange', updateBodyClass);
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to load content from another HTML file
    function loadPage(pageName) {
        fetch(`${pageName}.html`)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                // Apply animation here (if needed)
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Function to navigate between pages
    function navigateTo(pageName) {
        // Load the content of the selected page
        loadPage(pageName);
    }

    // Initial load of the index page
    loadPage('index');
});
