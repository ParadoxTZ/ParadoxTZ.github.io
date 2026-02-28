<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>/**
 * 代码块按行数折叠功能
 * 配置: 显示前5行，超过5行折叠
 */
(function() {
  const CONFIG = {
    showLines: 5  // 显示前5行
  };

  function getLineCount(element) {
    // 方法1: 计算 .line 类的数量
    const lineElements = element.querySelectorAll('.line');
    if (lineElements.length > 0) {
      return lineElements.length;
    }
    // 方法2: 计算 tr 元素的数量 (有行号时)
    const trElements = element.querySelectorAll('tr');
    if (trElements.length > 0) {
      return trElements.length;
    }
    // 方法3: 计算行数 (通过换行符)
    const codeElement = element.querySelector('code');
    if (codeElement) {
      const text = codeElement.textContent;
      return text.split('\n').length;
    }
    return 0;
  }

  function initCodeFold() {
    // 选择所有代码块容器
    const codeBlocks = document.querySelectorAll('figure.highlight, pre[class*="language-"]');

    codeBlocks.forEach(function(block) {
      const lineCount = getLineCount(block);
      if (lineCount <= CONFIG.showLines) return;

      // 获取代码内容容器
      let contentContainer;
      if (block.tagName === 'FIGURE') {
        contentContainer = block.querySelector('table');
      } else {
        // PrismJS 的情况
        contentContainer = block.querySelector('code');
        if (!contentContainer) return;
      }

      if (!contentContainer) return;

      // 如果已经处理过，跳过
      if (block.dataset.folded === 'true') return;
      block.dataset.folded = 'true';

      // 创建折叠容器
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-fold';
      wrapper.style.position = 'relative';

      // 创建遮罩层
      const mask = document.createElement('div');
      mask.className = 'code-mask';
      mask.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:' + (CONFIG.showLines * 1.8) + 'em;background:linear-gradient(transparent,#fff);pointer-events:none;z-index:1;';

      // 创建展开按钮
      const btn = document.createElement('div');
      btn.className = 'fold-btn';
      btn.innerHTML = '<i class="fas fa-angle-double-down"></i> 展开代码 (' + lineCount + '行)';
      btn.style.cssText = 'position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(155,155,155,0.25));cursor:pointer;text-align:center;padding:10px;color:#666;font-size:13px;z-index:2;';

      // 设置内容最大高度
      if (contentContainer.tagName === 'TABLE') {
        contentContainer.style.maxHeight = (CONFIG.showLines * 1.8) + 'em';
        contentContainer.style.overflow = 'hidden';
        contentContainer.style.position = 'relative';
      } else {
        // PrismJS / 直接 code 的情况
        contentContainer.style.maxHeight = (CONFIG.showLines * 1.6) + 'em';
        contentContainer.style.overflow = 'hidden';
        contentContainer.style.position = 'relative';
      }

      let expanded = false;

      btn.onclick = function(e) {
        e.stopPropagation();
        expanded = !expanded;
        if (expanded) {
          contentContainer.style.maxHeight = 'none';
          btn.innerHTML = '<i class="fas fa-angle-double-up"></i> 收起代码';
          btn.classList.add('expanded');
          mask.style.display = 'none';
        } else {
          if (contentContainer.tagName === 'TABLE') {
            contentContainer.style.maxHeight = (CONFIG.showLines * 1.8) + 'em';
          } else {
            contentContainer.style.maxHeight = (CONFIG.showLines * 1.6) + 'em';
          }
          btn.innerHTML = '<i class="fas fa-angle-double-down"></i> 展开代码 (' + lineCount + '行)';
          btn.classList.remove('expanded');
          mask.style.display = 'block';
        }
      };

      // 组装元素
      wrapper.appendChild(mask);
      wrapper.appendChild(btn);

      // 插入到代码块之前
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);
    });
  }

  // 延迟执行，确保 DOM 完全渲染
  function executeWhenReady() {
    if (typeof jQuery !== 'undefined' || typeof $ !== 'undefined') {
      // 如果有 jQuery
      setTimeout(initCodeFold, 100);
    } else {
      // 原生 JS
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          setTimeout(initCodeFold, 100);
        });
      } else {
        setTimeout(initCodeFold, 100);
      }
    }
  }

  executeWhenReady();

  // Pjax 支持
  window.addEventListener('pjax:complete', function() {
    setTimeout(initCodeFold, 100);
  });
})();
