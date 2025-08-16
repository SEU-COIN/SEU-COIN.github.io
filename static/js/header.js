// Header component loader
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    // 检测当前页面
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isIndexPage = currentPage === 'index.html';
    
    // 根据页面设置不同的字体颜色
    const navColor = isIndexPage ? '#ffffff' : 'rgb(32, 120, 221)';
    
    headerContainer.innerHTML = `
      <header id="header" class="fixed-top " style="padding: 8px 0; min-height: 60px;">
        <div class="container d-flex align-items-center">

          <h1 class="logo me-auto" style="display: flex; align-items: center;">
            <a href="index.html"
              style="font-weight: bold; font-size: 28px; display: flex; align-items: center; text-decoration: none;">
              <img src="static/img/coin-small.png" alt="Logo" style="height: 32px; margin-right: 8px;">
              <span style="color:#D6C62E;">CO</span><span style="color:#1D7F3C;">IN</span>
            </a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="index.html">Home</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="news.html">News</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="members.html">Members</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="publication.html">Publication</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="project.html">Project</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="resources.html">Resources</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="graduate.html">Graduate</a></li>
              <li><a style="color: ${navColor}; font-weight: bold; font-size: 18px;" class="nav-link scrollto" href="join.html">Join Us</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

          <!-- GitHub Icon -->
          <div class="github-icon" style="margin-left: 27px;">
            <a href="https://github.com/SEU-COIN" style="display: flex; align-items: center;">
              <img src="static/img/${isIndexPage ? 'github-mark-white.svg' : 'github-mark.svg'}" alt="GitHub" style="height: 24px; width: 24px;">
            </a>  
          </div>

        </div>
      </header><!-- End Header -->
    `;
    
    // Set active nav item based on current page
    window.scrollTo(0, 0);
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
