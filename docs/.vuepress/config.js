module.exports = {
    title: '',
    description: 'learn',
    theme: 'reco',
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        // logo: '',
        subSidebar: 'auto',
        lastUpdated: 'lastUpdate',
        nav: [
            { text: '首页', link: '/'},
            { 
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'javascript', link: '/pages/js/index.md'},
                    { text: 'css', link: '/pages/css/index.md'},
                    { text: 'typescript', link: '/pages/ts/index.md'},
                    { text: 'vue', link: '/pages/vue/index.md'},
                    { text: 'react', link: '/pages/react/index.md'},
                    { text: 'http', link: '/pages/http/index.md'},
                    { text: 'webpack', link: '/pages/webpack/index.md'},
                ]
            }
        ],
    }
}