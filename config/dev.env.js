'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    WS_API: '"wss://stream251.forexpros.com/echo/838/z_d753xs/websocket"',
    CY_API: '"wss://api.bbxapp.vip/v1/ifspot/realTime"'
})