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
            <i class="bi bi-list mobile-nav-toggle ${!isIndexPage ? 'non-index' : ''}"></i>
          </nav><!-- .navbar -->

          <!-- GitHub Icon -->
          <div class="github-icon" style="margin-left: 27px;">
            <a href="https://github.com/SEU-COIN" style="display: flex; align-items: center;">
              <img src="static/img/${isIndexPage ? 'github-mark-white.svg' : 'github-mark.svg'}" alt="GitHub" style="height: 24px; width: 24px;">
            </a>  
          </div>

        </div>
      </header><!-- End Header -->
      
      <!-- Modern Sidebar Menu -->
      <div class="sidebar-overlay" id="sidebarOverlay" aria-hidden="true" role="presentation"></div>
      <div class="sidebar-menu" id="sidebarMenu" aria-hidden="true" role="navigation" aria-label="Main navigation">
        <div class="sidebar-header">
          <div class="logo">
            <img src="static/img/coin-small.png" alt="COIN Logo">
            <div>
              <span class="co">CO</span><span class="in">IN</span>
            </div>
          </div>
          <button class="sidebar-close" id="sidebarClose" aria-label="Close navigation menu">
            <i class="bi bi-x" aria-hidden="true"></i>
          </button>
        </div>
        
        <nav class="sidebar-nav">
          <ul role="menubar">
            <li role="none"><a href="index.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-house" aria-hidden="true"></i>Home</a></li>
            <li role="none"><a href="news.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-newspaper" aria-hidden="true"></i>News</a></li>
            <li role="none"><a href="members.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-people" aria-hidden="true"></i>Members</a></li>
            <li role="none"><a href="publication.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-journal-text" aria-hidden="true"></i>Publication</a></li>
            <li role="none"><a href="project.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-briefcase" aria-hidden="true"></i>Project</a></li>
            <li role="none"><a href="resources.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-folder" aria-hidden="true"></i>Resources</a></li>
            <li role="none"><a href="graduate.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-mortarboard" aria-hidden="true"></i>Graduate</a></li>
            <li role="none"><a href="join.html" class="sidebar-link" role="menuitem" tabindex="0"><i class="bi bi-person-plus" aria-hidden="true"></i>Join Us</a></li>
          </ul>
        </nav>
        
        <div class="sidebar-footer">
          <a href="https://github.com/SEU-COIN" class="github-link" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub repository">
            <img src="static/img/github-mark-white.svg" alt="GitHub" aria-hidden="true">
            <span>Follow us on GitHub</span>
          </a>
        </div>
      </div>
    `;
    
    // Set active nav item based on current page
    window.scrollTo(0, 0);
    setActiveNavItem();
    
    // 绑定移动端导航事件
    bindMobileNavEvents();
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

// 绑定移动端导航事件
function bindMobileNavEvents() {
  console.log('Binding mobile nav events...');
  
  // 移动端侧滑菜单切换
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');
  
  console.log('Mobile nav toggle element:', mobileNavToggle);
  
  // 打开侧滑菜单
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      console.log('Mobile nav toggle clicked!');
      openSidebar();
    });
  }
  
  // 点击遮罩层关闭菜单
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function(e) {
      closeSidebar();
    });
  }
  
  // 点击关闭按钮关闭菜单
  if (sidebarClose) {
    sidebarClose.addEventListener('click', function(e) {
      closeSidebar();
    });
  }
  
  // 侧滑菜单链接点击事件和键盘导航
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 设置当前页面为激活状态
      setActiveSidebarItem(this.getAttribute('href'));
      
      // 关闭侧滑菜单
      closeSidebar();
      
      // 如果是当前页面，阻止默认行为
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      if (this.getAttribute('href') === currentPage) {
        e.preventDefault();
      }
    });
    
    // 键盘导航支持
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // 键盘ESC键关闭菜单
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });
  
  // 触摸手势支持
  let touchStartX = 0;
  let touchEndX = 0;
  
  // 触摸开始
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  // 触摸结束
  document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  // 处理滑动手势
  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    // 从左向右滑动打开菜单
    if (swipeDistance > swipeThreshold && touchStartX < 50) {
      openSidebar();
    }
    // 从右向左滑动关闭菜单
    else if (swipeDistance < -swipeThreshold && sidebarMenu.classList.contains('active')) {
      closeSidebar();
    }
  }
  
  // 滚动到指定位置的链接
  const scrollLinks = document.querySelectorAll('.scrollto');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const hash = this.hash;
      if (hash && document.querySelector(hash)) {
        e.preventDefault();
        
        // 关闭侧滑菜单
        closeSidebar();
        
        // 滚动到指定位置
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const header = document.querySelector('#header');
          const offset = header ? header.offsetHeight : 0;
          const elementPos = targetElement.offsetTop;
          window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// 打开侧滑菜单
function openSidebar() {
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  
  if (sidebarMenu && sidebarOverlay) {
    // 添加性能优化
    requestAnimationFrame(() => {
      sidebarMenu.classList.add('active');
      sidebarOverlay.classList.add('active');
    });
    
    // 切换汉堡菜单图标
    if (mobileNavToggle) {
      mobileNavToggle.classList.remove('bi-list');
      mobileNavToggle.classList.add('bi-x');
    }
    
    // 禁止body滚动
    document.body.style.overflow = 'hidden';
    
    // 设置焦点管理
    const firstLink = sidebarMenu.querySelector('.sidebar-link');
    if (firstLink) {
      firstLink.focus();
    }
    
    // 添加可访问性属性
    sidebarMenu.setAttribute('aria-hidden', 'false');
    sidebarOverlay.setAttribute('aria-hidden', 'false');
    
    console.log('Sidebar opened');
  }
}

// 关闭侧滑菜单
function closeSidebar() {
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  
  if (sidebarMenu && sidebarOverlay) {
    // 添加性能优化
    requestAnimationFrame(() => {
      sidebarMenu.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
    
    // 切换汉堡菜单图标
    if (mobileNavToggle) {
      mobileNavToggle.classList.remove('bi-x');
      mobileNavToggle.classList.add('bi-list');
    }
    
    // 恢复body滚动
    document.body.style.overflow = '';
    
    // 恢复焦点到汉堡菜单按钮
    if (mobileNavToggle) {
      mobileNavToggle.focus();
    }
    
    // 更新可访问性属性
    sidebarMenu.setAttribute('aria-hidden', 'true');
    sidebarOverlay.setAttribute('aria-hidden', 'true');
    
    console.log('Sidebar closed');
  }
}

// 设置侧滑菜单激活项
function setActiveSidebarItem(href) {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeader);
