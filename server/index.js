const express = require("express");
const fs = require('fs');
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const resolve = dir => require('path').resolve(__dirname, dir);

const proxyOption = { 
  target: "http://127.0.0.1:8888", // 反向代理地址，和vue.config.js中的proxy一致
  pathRewrite: {
    '/api': ''
  },
  changeOrigoin:true
};

// 静态文件代理
app.use(express.static(resolve('../dist/client'), {index: false}));

const { createBundleRenderer } = require('vue-server-renderer');

const bundle = resolve('../dist/server/vue-ssr-server-bundle.json');
const clientManifest = require(resolve("../dist/client/vue-ssr-client-manifest.json"));

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(resolve("../public/index.html"), "utf-8"),
  clientManifest
})


app.get('*', async(req, res) => {
  try {
    const context = {
      url: req.url
    }
    // 渲染: 得到html字符串
    const html = await renderer.renderToString(context)
    // 发送回前端
    res.send(html)
  } catch (error) {
    res.status(500).send('服务器内部错误')
  }
})

app.use("/api", createProxyMiddleware(proxyOption))

app.listen(3300)