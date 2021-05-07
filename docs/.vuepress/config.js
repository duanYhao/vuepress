module.exports = {
    title: 'Hello VuePress',
    description: 'learn',
    theme: 'reco',
    head: [
        ['testlink',{rel: 'icon', href:''}]
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '',
        subSidebar: 'auto',
        lastUpdated: 'lastUpdate',
        nav: [
            { text: '首页', link: '/'},
            { 
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'javascript', link: '/pages/js/js.md'},
                    { text: 'css', link: '/pages/css/css.md'},
                    { text: 'typescript', link: '/pages/ts/ts.md'},
                    { text: 'vue', link: '/pages/vue/vue.md'},
                    { text: 'react', link: '/pages/react/react.md'},
                ]
            }
        ],
    }
}