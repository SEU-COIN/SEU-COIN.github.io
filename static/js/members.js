// Members page avatar fallback functionality
document.addEventListener('DOMContentLoaded', function() {
    // 预定义的淡色背景数组 - 更丰富的颜色选择
    const lightColors = [
        '#E3F2FD', // 淡蓝色
        '#F3E5F5', // 淡紫色
        '#E8F5E8', // 淡绿色
        '#FFF3E0', // 淡橙色
        '#FCE4EC', // 淡粉色
        '#F1F8E9', // 淡青绿色
        '#E0F2F1', // 淡青色
        '#F9FBE7', // 淡黄色
        '#E8EAF6', // 淡靛蓝色
        '#FFEBEE', // 淡红色
        '#E1F5FE', // 淡天蓝色
        '#FFF8E1', // 淡琥珀色
        '#F5F5F5', // 淡灰色
        '#E8F4FD', // 淡天蓝
        '#F0F8FF', // 淡爱丽丝蓝
        '#F0FFF0', // 淡蜜瓜绿
        '#FFF0F5', // 淡薰衣草粉
        '#FDF5E6', // 淡旧蕾丝
        '#F0F8FF', // 淡爱丽丝蓝
        '#F5F5DC'  // 淡米色
    ];

    // 为每个成员生成随机颜色的函数
    function generateRandomColor(memberName) {
        // 使用成员名字作为种子来生成一致的颜色
        let hash = 0;
        for (let i = 0; i < memberName.length; i++) {
            const char = memberName.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // 转换为32位整数
        }
        return lightColors[Math.abs(hash) % lightColors.length];
    }

    // 创建头像占位符的函数
    function createAvatarPlaceholder(memberName, container) {
        // 移除现有的img元素和占位符
        const existingImg = container.querySelector('img');
        const existingPlaceholder = container.querySelector('.avatar-placeholder');
        if (existingImg) {
            existingImg.remove();
        }
        if (existingPlaceholder) {
            existingPlaceholder.remove();
        }

        // 创建占位符div
        const placeholder = document.createElement('div');
        placeholder.className = 'avatar-placeholder';
        
        // 生成颜色
        const bgColor = generateRandomColor(memberName);
        
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            background-color: ${bgColor};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5em;
            font-weight: 600;
            font-family: "Jost", sans-serif;
            color: #666;
            text-transform: uppercase;
            user-select: none;
            cursor: default;
            letter-spacing: 1px;
        `;

        // 获取成员名字的首字母（优先显示英文首字母）
        let initials = '';
        if (memberName && memberName.trim()) {
            // 清理HTML标签和多余空格
            const cleanName = memberName.replace(/<[^>]*>/g, '').trim();
            
            if (cleanName) {
                // 提取英文名字部分（通常在中文名字后面）
                const englishMatch = cleanName.match(/[A-Za-z]+/g);
                
                if (englishMatch && englishMatch.length > 0) {
                    // 如果有英文名字，取前两个英文单词的首字母
                    if (englishMatch.length >= 2) {
                        initials = englishMatch[0].charAt(0).toUpperCase() + englishMatch[1].charAt(0).toUpperCase();
                    } else {
                        // 如果只有一个英文单词，取首字母
                        initials = englishMatch[0].charAt(0).toUpperCase();
                    }
                } else {
                    // 如果没有英文名字，取中文名字的首字符
                    initials = cleanName.charAt(0);
                }
            } else {
                initials = '?';
            }
        } else {
            initials = '?';
        }

        placeholder.textContent = initials;
        placeholder.title = `Avatar - ${memberName || '未知成员'}`;
        container.appendChild(placeholder);
    }

    // 处理图片加载失败
    function handleImageError(imgElement) {
        const container = imgElement.parentElement;
        const memberCard = container.closest('.member');
        
        // 获取成员名字
        let memberName = '';
        const nameElement = memberCard.querySelector('h4');
        if (nameElement) {
            // 移除HTML标签，只保留文本
            memberName = nameElement.textContent || nameElement.innerText;
        }

        // 调试信息（仅在开发环境显示）
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log(`图片加载失败，为成员 "${memberName}" 创建占位符`);
        }

        createAvatarPlaceholder(memberName, container);
    }

    // 为所有成员头像添加错误处理
    function setupAvatarFallbacks() {
        const avatarImages = document.querySelectorAll('.member .pic img');
        
        avatarImages.forEach(img => {
            // 检查图片是否已经加载失败
            if (img.complete && img.naturalWidth === 0) {
                handleImageError(img);
            } else {
                // 添加错误事件监听器
                img.addEventListener('error', function() {
                    handleImageError(this);
                });
            }
        });
    }

    // 初始化
    setupAvatarFallbacks();

    // 监听动态内容变化（如果有的话）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                setupAvatarFallbacks();
            }
        });
    });

    // 观察整个文档的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
