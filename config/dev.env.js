'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    WS_API: '"wss://stream276.forexpros.com/echo/820/skov_3cv/websocket"',
    CY_API: '"wss://api.bbxapp.vip/v1/ifspot/realTime"',
    NLP_API: '"http://192.168.50.100:8999/news/index/"'
})