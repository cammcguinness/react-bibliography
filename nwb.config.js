module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactBibliography',
      externals: {
        react: 'React'
      }
    }
  }
}
