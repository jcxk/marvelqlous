module.exports = {

    async redirects() {
        return [
            {
                source: '/',
                destination: '/list/comics',
                permanent: true
            },
        ]
    },


}