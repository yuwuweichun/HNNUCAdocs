export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // 在组件的 mounted 钩子中插入 Giscus 的 script 标签
  Vue.mixin({
    mounted() {
      const script = document.createElement('script');
      script.src = "https://giscus.app/client.js";
      script.setAttribute('data-repo', "yuwuweichun/HNNUCAdocs");
      script.setAttribute('data-repo-id', "R_kgDOM-_Z-Q");
      script.setAttribute('data-category', "Announcements");
      script.setAttribute('data-category-id', "DIC_kwDOM-_Z-c4CjUMl");
      script.setAttribute('data-mapping', "pathname");
      script.setAttribute('data-strict', "0");
      script.setAttribute('data-reactions-enabled', "1");
      script.setAttribute('data-emit-metadata', "0");
      script.setAttribute('data-input-position', "top");
      script.setAttribute('data-theme', "preferred_color_scheme");
      script.setAttribute('data-lang', "zh-CN");
      script.setAttribute('data-loading', "lazy");
      script.setAttribute('crossorigin', "anonymous");
      script.setAttribute('async', "true");

      // 将 script 标签添加到 body 中
      document.body.appendChild(script);
    }
  });
};
