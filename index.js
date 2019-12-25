(async function() {
  const _ = await import(/*webpackChunkName:'lodash'*/'lodash')
  console.log(_.join(['hello', 'motto'], ' '))
})()
