export default ({ router }) => {
    // 只在浏览器环境加载
    if (typeof window !== 'undefined') {
      // 在路由更新时插入 Giscus 评论组件
      router.afterEach(() => {
        // 首先检查是否已经插入了 Giscus，避免重复加载
        const existingGiscus = document.querySelector('.giscus-frame');
        if (!existingGiscus) {
          // 清空评论容器
          const giscusContainer = document.getElementById('giscus-container');
          if (giscusContainer) {
            giscusContainer.innerHTML = ''; // 确保容器为空
  
            // 创建 <script> 元素用于加载 Giscus
            const giscusScript = document.createElement('script');
            giscusScript.src = 'https://giscus.app/client.js';
            giscusScript.async = true;
            giscusScript.setAttribute('crossorigin', 'anonymous');
            giscusScript.setAttribute('data-repo', 'yuwuweichun/HNNUCAdocs'); // 仓库名
            giscusScript.setAttribute('data-repo-id', 'R_kgDOM-_Z-Q');
            giscusScript.setAttribute('data-category', 'Announcements');
            giscusScript.setAttribute('data-category-id', 'DIC_kwDOM-_Z-c4CjUMl');
            giscusScript.setAttribute('data-mapping', 'pathname'); // 映射关系
            giscusScript.setAttribute('data-strict', '0');
            giscusScript.setAttribute('data-reactions-enabled', '1'); // 表情反应
            giscusScript.setAttribute('data-emit-metadata', '0');
            giscusScript.setAttribute('data-input-position', 'top'); // 评论框在评论区顶部
            giscusScript.setAttribute('data-theme', 'preferred_color_scheme'); // 主题
            giscusScript.setAttribute('data-lang', 'zh-CN'); // 语言
            giscusScript.setAttribute('data-loading', 'lazy'); // 评论懒加载
  
            // 将 <script> 插入到 Giscus 容器中
            giscusContainer.appendChild(giscusScript);
          }
        }
      });
    }
  };
  