module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/zutre/'
    : '/',
  runtimeCompiler: true,
}
