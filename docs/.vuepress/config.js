module.exports = {
  base: "/blog/",
  title: "phy-lei",
  description: "残留枝头的樱花瓣，也终将迎来凋零的命运",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon3.ico"
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/icons/icon-152x152.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/icon-144x144.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "vuepress-theme-yilia-plus",
  theme: "reco",

  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/phy-lei",
            icon: "reco-github"
          }
        ]
      }
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    vssueConfig: {
      baseURL: "Github",
      proxy: url => "https://cors-anywhere.azm.workers.dev/" + url,
      owner: "phy-lei",
      repo: "blog",
      clientId: process.env.VSSUE_CLIENTID,
      clientSecret: process.env.VSSUE_CLIENTSECRET,
      autoCreateIssue: false
    },
    logo: "/mine.jpg",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "",
    authorAvatar: "/mine.jpg",
    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      // github-corner(关闭请设置为false)
      github: {
        url: "https://github.com/phy-lei/"
      },
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2020,
        // 网站作者(关闭请设置为false)
        author:
          '<a href="https://github.com/phy-lei/" target="_blank">phy-lei</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为false)
          enable: true
        }
      }
    }
  },
  markdown: {
    lineNumbers: false,
    highlightLines: true
  },
  plugins: {
    "@vuepress/google-analytics": {
      ga: process.env.GA
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: true
    }
  },

  define: {
    "process.env.NODE_ENV": process.env.NODE_ENV,
    "process.env.VSSUE_CLIENTID": process.env.VSSUE_CLIENTID,
    "process.env.VSSUE_CLIENTSECRET": process.env.VSSUE_CLIENTSECRET,
    "process.env.GA": process.env.GA
  }
};
