// 出版物卡片生成器
class PublicationCardGenerator {
  constructor() {
    this.init();
  }

  init() {
    this.generatePublicationCards();
  }

  // 生成出版物卡片
  generatePublicationCards() {
    const publicationSection = document.getElementById('why-us');
    if (!publicationSection) return;
    
    const container = publicationSection.querySelector('.container-fluid');
    if (!container) return;

    // 清空现有内容（除了section-title）
    const sectionTitle = container.querySelector('.section-title');
    if (!sectionTitle) return;

    // 移除现有的内容（除了section-title）
    const existingContent = container.querySelectorAll('.row');
    existingContent.forEach(el => el.remove());

    let html = '';
    
    // 按年份倒序排列（最新的年份在前）
    const sortedYears = Object.keys(PUBLICATIONS_DATA).sort((a, b) => b - a);
    
    sortedYears.forEach(year => {
      const publications = PUBLICATIONS_DATA[year];
      html += this.generateYearSection(year, publications);
    });

    // 在section-title后插入生成的HTML
    sectionTitle.insertAdjacentHTML('afterend', html);
  }

  // 生成年份部分
  generateYearSection(year, publications) {
    // 反转数组，使最新的出版物在最上面
    const reversedPublications = [...publications].reverse();
    const totalCount = publications.length;
    
    return `
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h3><strong>${year}</strong></h3>
          </div>
          <div class="accordion-list">
            <ul>
              ${reversedPublications.map((publication, index) => this.generatePublicationItem(publication, index + 1, totalCount)).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // 生成单个出版物项目
  generatePublicationItem(publication, index, totalCount) {
    // 计算反向索引（最新的在最上面）
    const reversedIndex = totalCount - index + 1;
    const indexStr = reversedIndex.toString().padStart(2, '0');
    const accordionId = `accordion-list-${publication.id}`;
    
    return `
      <li>
        <a class="publication-header" href="${publication.link}" target="_blank">
          <span>${indexStr}</span> ${publication.title} <i class="bi bi-link-45deg"></i>
        </a>
        <div class="publication-content">
          <p>
            <strong>Authors</strong>: ${publication.authors}
          </p>
          <p>
            <strong>Conference/Journal Name</strong>: ${publication.venue}
          </p>
          <p>
            ${publication.level && publication.level.trim() !== '' ? 
              `<strong>Paper Level</strong>: ${publication.level}` : 
              ''
            }
          </p>
        </div>
      </li>
    `;
  }
}
