import defaultTheme from '@vuepress/theme-default'

module.exports = {
    title: 'Menma\'s archive site',
    description: 'This is a VuePress archive site for me and for you',

    // 配置站点根路径
    base: '/archive',

    head: [['link', { rel: 'icon', href: 'https://cdn.staticaly.com/gh/HiMenma/picx-images-hosting@master/20230606/linux-22631.37bjyikht2w0.webp' }]],

    // 配置语言
    locales: {
        '/en-US': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'This is a VuePress archive site for me and for you',
        },
        '/': {
            lang: 'zh-CN',
            title: 'Menma\'s archive site',
            description: 'This is a VuePress archive site for me and for you',
        },
    },

    // 配置主题
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: '技术',
                children: [
                    {
                        text: 'Spring',
                        children: [
                            {
                                text: 'Spring',
                                link: '/tech/Spring/Spring.md'
                            },
                            {
                                text: 'SpringBoot',
                                link: '/tech/Spring/SpringBoot.md'
                            },
                        ]
                    },
                    {
                        text: '大前端',
                        children: [
                            {
                                text: 'NodeJs',
                                link: '/tech/NodeJs/NodeJs.md'
                            },
                        ]
                    },
                ]
            },
            {
                text: '服务器相关',
                children: [
                    {
                        text: '内网穿透',
                        children: [
                            {
                                text: '端口转发',
                                link: '/server/Intranet-penetration/Port-forwarding.md'
                            },
                            {
                                text: 'Frp',
                                link: '/server/Intranet-penetration/frp.md'
                            },
                        ]
                    },
                    {
                        text: '自建RSS',
                        children: [
                            {
                                text: 'ttrss',
                                link: '/server/RSS/ttrss.md'
                            },
                        ]
                    },
                ]
            }
        ],

        repo: 'https://github.com/HiMenma/archive',
    }),

};
