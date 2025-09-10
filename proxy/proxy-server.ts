// proxy-server.ts
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const playwrightPort = 9323; // Default Playwright UI/report port
const proxyPort = 9324; // Port for our proxy server

app.use(
  '/',
  createProxyMiddleware({
    target: `http://localhost:${playwrightPort}`,
    changeOrigin: true,
  })
);

app.listen(proxyPort, () => {
  console.log(`Proxy listening on http://localhost:${proxyPort}`);
  console.log(`Access Playwright UI from your browser at this address.`);
});