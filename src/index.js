const NodeMediaServer = require("node-media-server");

const PORT = process.env.PORT || 1935

const config = {
  rtmp: {
    port: PORT,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: "*"
  }
};

var nms = new NodeMediaServer(config);
nms.run();