require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require('./router');
  const Sitemap = require('react-router-sitemap').default;
  (
     new Sitemap(router)
        .build("https://skupisz.netlify.app")
        .save('./public/sitemap.xml')
  );