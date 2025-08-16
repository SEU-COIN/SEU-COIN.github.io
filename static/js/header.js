// Header component loader
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = `
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto" style="display: flex; align-items: center;">
            <a href="index.html"
              style="font-weight: bold; font-size: 35px; display: flex; align-items: center; text-decoration: none;">
              <img src="static/img/coin-small.png" alt="Logo" style="height: 40px; margin-right: 10px;">
              <span style="color:#C9D21E;">CO</span><span style="color:#2DA203;">IN</span>
            </a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="index.html">Home</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="news.html">News</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="members.html">Members</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="publication.html">Publication</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="project.html">Project</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="resources.html">Resources</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="graduate.html">Graduate</a></li>
              <li><a style="color: rgb(32, 120, 221); font-weight: bold; font-size: 23px;" class="nav-link scrollto" href="join.html">Join Us</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

        </div>
      </header><!-- End Header -->
    `;
    
    // Set active nav item based on current page
    setActiveNavItem();
  }
}

function setActiveNavItem() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);
