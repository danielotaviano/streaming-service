const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: process.env.PORT,
    allow_origin: '*'
  }
};


console.log(process.env.PORT)
var nms = new NodeMediaServer(config)
nms.run();