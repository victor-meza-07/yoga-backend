require('dotenv').config()
const express = require('express')
const app = express()
const { HTTP_PORT, HTTPS_PORT, BASE_PATH } = require('config')
const { router } = require('./routes/router')


function helperLoggerHTTP() {
  const httpUri = helperUri(HTTP_PORT, 'http')

  console.log('This app is running on ' + httpUri)
  console.log('[HTTP] ' + httpUri + '/' + BASE_PATH)
  console.log('[HTTP] Health: ' + httpUri + '/' + BASE_PATH + '/health')
}
function helperLoggerHTTPS() {
  const httpsUri = helperUri(HTTPS_PORT, 'https')
  
  console.log('This app is running on ' + httpsUri)
  console.log('[HTTPS]:' + httpsUri + '/' + BASE_PATH)
  console.log('[HTTPS] Health: ' + httpsUri + '/' + BASE_PATH + '/health')
}

function helperUri (port, protocol) {
  return protocol + '://' + 'localhost:' + port
}


app.use(express.json())
app.use(router)

app.listen(HTTP_PORT, () => {
  helperLoggerHTTP()
})

//TODO HTTPS 
// app.listen(HTTP_PORTS, () => {
//   helperLoggerHTTP()
// })


