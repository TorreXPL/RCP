/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "cache_files/App.vue",
    "revision": "267085e764674ee76f7a6344e9728098"
  },
  {
    "url": "css/base.css",
    "revision": "ba6f00ce39d4ed5e9d98c3bd7e551ddb"
  },
  {
    "url": "css/semantic.css",
    "revision": "1bff3b5b3d8a8c6e60bd39f2bd910649"
  },
  {
    "url": "favicon.svg",
    "revision": "bf423c5ce1faee28d24470d4884f8536"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "fe4534055c6ca46a898e5aa798d5b6f3"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "01455b269af0ac6e749a0753a819cc0a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "6d704920b5170840d7e65a05ae5cfec5"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cac8cb5703dc580ebc098b47cc013b0a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "bfae36669d4f6e8ef05510e8da37fc25"
  },
  {
    "url": "icons/favicon.ico",
    "revision": "c54b04bdb05fa87bfe771c444c772c8f"
  },
  {
    "url": "index.html",
    "revision": "5722d1884adf70f8232aef265380e5ed"
  },
  {
    "url": "index.js",
    "revision": "7649dca6ccd9e6ce698ae9f0df1cc249"
  },
  {
    "url": "manifest.json",
    "revision": "525d239121c7aa7a5665ff419199c7f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

