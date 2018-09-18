module.exports = {
  // vamos a crear un proxy para que cuando nuestra app 
  // acceda a localhost:8080/api/clima el pedido se mande a Darksky.net en
  // lugar de ser manejado por nuestro servidor local.
  devServer: {
    proxy: {
      '/api/clima': {
        target: 'https://api.darksky.net',
        changeOrigin: true,
        pathRewrite: {
          '^/api/clima': ''
        }
      }
    }
  }
}