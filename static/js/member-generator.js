// 成员卡片生成器
class MemberCardGenerator {
  constructor() {
    this.init();
  }

  init() {
    this.generateFacultyCards();
    this.generatePhdStudentCards();
    this.generateMasterStudentCards();
  }

  // 生成教师卡片
  generateFacultyCards() {
    const facultySection = document.getElementById('faculty');
    if (!facultySection) return;
    
    const facultyContainer = facultySection.querySelector('.row');
    if (!facultyContainer) return;

    facultyContainer.innerHTML = MEMBERS_DATA.faculty.map((member, index) => {
      const isEven = index % 2 === 0;
      // 简化列类逻辑，避免重复的margin类
      const colClass = isEven ? 'col-lg-6' : 'col-lg-6';
      // 只在第二行及以后的卡片上添加顶部边距
      const marginClass = index >= 2 ? 'mt-4' : '';
      
      return `
        <div class="${colClass} ${marginClass}">
          <div class="member member--faculty d-flex align-items-start">
            <div class="pic">
              <img src="${member.image}" class="img-fluid" alt="" loading="lazy">
            </div>
            <div class="faculty-info">
              <h4 style="line-height: 1.5;">
                <a href="${member.link}" target="_blank">
                  ${member.name} <i class="bi bi-link-45deg"></i><br>${member.englishName}
                </a>
              </h4>
              <span style="font-weight: bold;">${member.title}</span>
              <p><strong> E-mail: </strong><br> ${member.email}</p>
              <p><strong> 研究方向: </strong><br> ${member.research}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 生成博士生卡片
  generatePhdStudentCards() {
    const phdSection = document.getElementById('Ph.D. Students');
    if (!phdSection) return;
    
    const phdContainer = phdSection.querySelector('.row');
    if (!phdContainer) return;
    
    this.generatePhdStudentCardsInContainer(phdContainer);
  }

  generatePhdStudentCardsInContainer(container) {
    container.innerHTML = MEMBERS_DATA.phdStudents.map(member => {
      const nameHtml = member.link 
        ? `<a href="${member.link}" target="_blank">${member.name} ${member.englishName} <i class="bi bi-link-45deg"></i></a>`
        : `${member.name} ${member.englishName}`;
      
      const emailHtml = member.email ? `<p><strong> E-mail: </strong><br>${member.email}</p>` : '';
      const githubHtml = member.github ? `<p><strong> GitHub: </strong><br><a href="${member.github}">${member.github}</a></p>` : '';

      return `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="member member--student d-flex align-items-start">
            <div class="pic">
              <img src="static/img/students/Ph.D Candidate/${member.name}.webp" class="img-fluid" alt="" loading="lazy">
            </div>
            <div class="member-info">
              <h4>${nameHtml}</h4>
              <span></span>
              ${emailHtml}
              ${githubHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 生成硕士生卡片
  generateMasterStudentCards() {
    const masterSection = document.getElementById('M.Sc. Student');
    if (!masterSection) return;
    
    const masterContainer = masterSection.querySelector('.container');
    if (!masterContainer) return;
    
    this.generateMasterStudentCardsInContainer(masterContainer);
  }

  generateMasterStudentCardsInContainer(container) {

    // 找到section-title后的位置
    const sectionTitle = container.querySelector('.section-title');
    if (!sectionTitle) return;

    // 移除现有的内容（除了section-title）
    const existingContent = container.querySelectorAll('.content, .row');
    existingContent.forEach(el => el.remove());

    let html = '';
    
    // 按年份倒序排列（最新的年份在前）
    const sortedYears = Object.keys(MEMBERS_DATA.masterStudents).sort((a, b) => b - a);
    
    sortedYears.forEach(year => {
      const students = MEMBERS_DATA.masterStudents[year];
      html += `
        <div class="content">
          <h3><strong>${year}</strong></h3>
        </div>
        <div class="row g-4">
          ${students.map(member => {
            const nameHtml = member.link 
              ? `<a href="${member.link}" target="_blank">${member.name} ${member.englishName} <i class="bi bi-link-45deg"></i></a>`
              : `${member.name} ${member.englishName}`;
            
            const emailHtml = member.email ? `<p><strong> E-mail: </strong><br>${member.email}</p>` : '';
            const githubHtml = member.github ? `<p><strong> GitHub: </strong><br><a href="${member.github}">${member.github}</a></p>` : '';

            return `
              <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="member member--student d-flex align-items-start">
                  <div class="pic">
                    <img src="static/img/students/M.Sc. Student/${member.name}.webp" class="img-fluid" alt="" loading="lazy">
                  </div>
                  <div class="member-info">
                    <h4>${nameHtml}</h4>
                    <span></span>
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
