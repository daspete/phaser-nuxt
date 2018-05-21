module.exports = {
    head: {
        titleTemplate: 'Phaser Game - %s',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },

    build: {
        extractCSS: true
    },


    plugins: [
        { src: '~/plugins/phaser', ssr: false }
    ]
    
}