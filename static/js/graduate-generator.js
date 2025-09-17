// 毕业生卡片生成器
class GraduateCardGenerator {
  constructor() {
    this.init();
  }

  init() {
    this.generateGraduateCards();
  }

  // 生成毕业生卡片
  generateGraduateCards() {
    const graduateSection = document.getElementById('Graduate');
    if (!graduateSection) return;
    
    const graduateContainer = graduateSection.querySelector('.container');
    if (!graduateContainer) return;
    
    this.generateGraduateCardsInContainer(graduateContainer);
  }

  generateGraduateCardsInContainer(container) {
    // 找到section-title后的位置
    const sectionTitle = container.querySelector('.section-title');
    if (!sectionTitle) return;

    // 移除现有的内容（除了section-title）
    const existingContent = container.querySelectorAll('.content, .row');
    existingContent.forEach(el => el.remove());

    let html = '';
    
    // 按年份倒序排列（最新的年份在前），但"Earlier"放在最后
    const sortedYears = Object.keys(GRADUATES_DATA).sort((a, b) => {
      if (a === 'Earlier') return 1;
      if (b === 'Earlier') return -1;
      return b - a;
    });
    
    sortedYears.forEach(year => {
      const graduates = GRADUATES_DATA[year];
      html += `
        <div class="content">
          <h3><strong>${year}</strong></h3>
        </div>
        <div class="row g-4">
          ${graduates.map(graduate => {
            const destinationHtml = graduate.destination ? `<p><strong>Destination: </strong>${graduate.destination}</p>` : '';
            const emailHtml = graduate.email ? `<p><strong> E-mail: </strong><br>${graduate.email}</p>` : '';
            const githubHtml = graduate.github ? `<p><strong> GitHub: </strong><br><a href="${graduate.github}">${graduate.github}</a></p>` : '';
            const nameHtml = graduate.link
              ? `<a href="${graduate.link}" target="_blank">${graduate.name} ${graduate.englishName || ''} <i class="bi bi-link-45deg"></i></a>`
              : `${graduate.name} ${graduate.englishName || ''}`;

            return `
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="member member--student d-flex align-items-start">
                  <div class="pic">
                    <img src="${graduate.image}" class="img-fluid" alt="" loading="lazy">
                  </div>
                  <div class="member-info">
                    <h4>${nameHtml}</h4>
                    <span></span>
                    <p><strong>${graduate.degree}</strong></p>
                    ${destinationHtml}
                    ${emailHtml}
                    ${githubHtml}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <p></p>
        <p></p>
      `;
    });

    // 在section-title后插入生成的HTML
    sectionTitle.insertAdjacentHTML('afterend', html);
  }
}
