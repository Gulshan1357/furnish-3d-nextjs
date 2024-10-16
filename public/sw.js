if (!self.define) {
  let e,
    a = {};
  const i = (i, s) => (
    (i = new URL(i + '.js', s).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[c]) return;
    let r = {};
    const o = (e) => i(e, c),
      d = { module: { uri: c }, exports: r, require: o };
    a[c] = Promise.all(s.map((e) => d[e] || o(e))).then((e) => (n(...e), r));
  };
}
define(['./workbox-c2c0676f'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/0-4ODK3YJUBDkpCptTOiR/_buildManifest.js',
          revision: '2ec694eb52ae4f523f265a46bae4d768',
        },
        {
          url: '/_next/static/0-4ODK3YJUBDkpCptTOiR/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0e5ce63c-317932d253e14adb.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/131.40a6a6c674f525ae.js',
          revision: '40a6a6c674f525ae',
        },
        {
          url: '/_next/static/chunks/203-dd0a1e79d3141bed.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/321.776ff2cc0177f289.js',
          revision: '776ff2cc0177f289',
        },
        {
          url: '/_next/static/chunks/329-1dc1ae1a757314e7.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/38-5d2d4d298e0a6d34.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/403-c4d0302e3a1ebf8a.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/422.8321c70e1a3fd13e.js',
          revision: '8321c70e1a3fd13e',
        },
        {
          url: '/_next/static/chunks/520-1739b4462dc971bc.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/557-110cc2cfed1e736e.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/639-00418f37a067755c.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/8-a4a94e0052218b62.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/916-79069ec9e7410f6b.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-b4cf2299cf6a34c4.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/cart/page-57a5b0c1172cf9b7.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/inventory/layout-9ac7bbef3869f3ed.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/inventory/page-781afc13c9de4dd9.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/layout-8d24c045cf40e829.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/app/page-d17926ef45417bad.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/b536a0f1-26c158a08710bc8d.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/c15bf2b0-c5f2ab0c4ce668d5.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/fd9d1056-8d375c878513e849.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/main-app-a91b9a2b75c58cf4.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/main-d09a0a9dd1b794d8.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-bcbdcabc60fb62c8.js',
          revision: '0-4ODK3YJUBDkpCptTOiR',
        },
        {
          url: '/_next/static/css/fa9a96fbd75697f3.css',
          revision: 'fa9a96fbd75697f3',
        },
        {
          url: '/_next/static/media/LogoDark.ae5fb6b1.svg',
          revision: 'a7b52d1b54600c1facf5db031a5066ed',
        },
        {
          url: '/_next/static/media/LogoLight.d9e18141.svg',
          revision: '051de1391630a1d1efdae77c38955823',
        },
        {
          url: '/_next/static/media/ThreeJS.3068e9a2.svg',
          revision: '1b5ac422c6bb099a59a74ec4d521559d',
        },
        {
          url: '/_next/static/media/a7a42acf8a9f1f49-s.p.woff2',
          revision: 'a1e76b2daf282e753cd9713edc5205e4',
        },
        {
          url: '/_next/static/media/kinde.ee52c91d.svg',
          revision: '22d922e253aa4f5892bb235afdc1b453',
        },
        {
          url: '/_next/static/media/nextjs.da0de5e5.svg',
          revision: 'd4cf6818b1dd6b5e92c54129ea1ea99b',
        },
        {
          url: '/_next/static/media/prisma-2.5cd0d27c.svg',
          revision: 'ece734638af321cb392e377d43a632e3',
        },
        {
          url: '/_next/static/media/typescript.e6a9ddf1.svg',
          revision: 'acddcbc0b3eb600c7d519c1c3f253cf7',
        },
        {
          url: '/_next/static/media/vercel.11d7b70b.svg',
          revision: 'eeac079524e0680ea0f322e51dec6dc8',
        },
        {
          url: '/fonts/Alpino-Variable.woff',
          revision: '706a0f05dfd19c56855d417c6481727a',
        },
        {
          url: '/fonts/Alpino-Variable.woff2',
          revision: 'a1e76b2daf282e753cd9713edc5205e4',
        },
        {
          url: '/hdrs/field.hdr',
          revision: 'aa4526e345d5479fc67e6e73f52544c6',
        },
        {
          url: '/hdrs/lobby.hdr',
          revision: '547588b52b96a899bf93be911921a710',
        },
        {
          url: '/images/Chair.gif',
          revision: '44eeef18686aa97b287a910a4a52dea2',
        },
        {
          url: '/images/Hero.gif',
          revision: '28fc8eb6f1147fc4563c1fd9cf00d8f9',
        },
        {
          url: '/images/PlaceholderBackground.png',
          revision: '2c342a227a974eb9f01ef5cd840a21cf',
        },
        {
          url: '/images/Table.gif',
          revision: 'c882ac71fe4231cb7ad7cacd9465c82a',
        },
        {
          url: '/images/Vase.gif',
          revision: 'd42ff8c94cfd6ffe1385912c4ee17258',
        },
        {
          url: '/images/all-cans-bunched.png',
          revision: '7453e63dc9b5a74c35289b86345e9613',
        },
        {
          url: '/images/bench.gif',
          revision: '4d573c1d9cf83003e8696eb84f0faf56',
        },
        {
          url: '/images/bowl.gif',
          revision: 'd349a78d48ecb8b8eadc8c5e97db698e',
        },
        {
          url: '/images/planter.gif',
          revision: '3553588d5ff88a3afa633d4086541a2e',
        },
        {
          url: '/images/stool.gif',
          revision: '0b17ba29d668835ae95320988cd4ceb2',
        },
        {
          url: '/logo/BrownOnDark.png',
          revision: '9c2c01ca794497abef9e61d73105c2d0',
        },
        {
          url: '/logo/BrownOnWhite.png',
          revision: '2ab2e0b4090496ee82c3d3e921103e8f',
        },
        {
          url: '/logo/LogoDark.svg',
          revision: 'a7b52d1b54600c1facf5db031a5066ed',
        },
        {
          url: '/logo/LogoLight.svg',
          revision: '051de1391630a1d1efdae77c38955823',
        },
        {
          url: '/logo/ThreeJS.svg',
          revision: '1b5ac422c6bb099a59a74ec4d521559d',
        },
        {
          url: '/logo/WhiteOnBrown.png',
          revision: 'f174c8e62c467cc40ba84aae88c154e2',
        },
        {
          url: '/logo/kinde.svg',
          revision: '22d922e253aa4f5892bb235afdc1b453',
        },
        {
          url: '/logo/nextjs.svg',
          revision: 'd4cf6818b1dd6b5e92c54129ea1ea99b',
        },
        {
          url: '/logo/prisma-2.svg',
          revision: 'ece734638af321cb392e377d43a632e3',
        },
        {
          url: '/logo/react.svg',
          revision: '3833bd19b31c14c180a588484dde0cd5',
        },
        {
          url: '/logo/typescript.svg',
          revision: 'acddcbc0b3eb600c7d519c1c3f253cf7',
        },
        {
          url: '/logo/vercel.svg',
          revision: 'eeac079524e0680ea0f322e51dec6dc8',
        },
        {
          url: '/models/chair/WoodenChair-Black/WoodenChair-M_Albedo.png',
          revision: 'caad24581a721398ca34c73c494e7ae8',
        },
        {
          url: '/models/chair/WoodenChair-Black/WoodenChair-M_Normal.png',
          revision: 'ab46f845c6a5a8180cc19505d606e886',
        },
        {
          url: '/models/chair/WoodenChair-Black/WoodenChair-M_Roughness.png',
          revision: '73e20f0fc5ef930b2447205a42b3d606',
        },
        {
          url: '/models/chair/WoodenChair-dark/WoodenChair-dark_Albedo.png',
          revision: '54daf4975782de50d7a7d4bee814caa0',
        },
        {
          url: '/models/chair/WoodenChair-dark/WoodenChair-dark_Normal.png',
          revision: 'bf179fb3700f1ce91a14ae186cdaf930',
        },
        {
          url: '/models/chair/WoodenChair-dark/WoodenChair-dark_Roughness.png',
          revision: 'f850f803e31130478099fbcd09b3765b',
        },
        {
          url: '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Albedo.png',
          revision: '913b6a6d780d4d8fa44cd6737a6e7148',
        },
        {
          url: '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Normal.png',
          revision: 'b1158b4d230cdf2101b143eef2415ed2',
        },
        {
          url: '/models/chair/WoodenChair-oiled/WoodenChair-oiled_Roughness.png',
          revision: '7d3d1baa17bf68d9c6a350caec5a4c45',
        },
        {
          url: '/models/chair/WoodenChair-red/WoodenChair-red_Albedo.png',
          revision: '67fbae65475d6866d7271414cc903079',
        },
        {
          url: '/models/chair/WoodenChair-red/WoodenChair-red_Normal.png',
          revision: 'a87ad25b9e29820ae963361c04829c07',
        },
        {
          url: '/models/chair/WoodenChair-red/WoodenChair-red_Roughness.png',
          revision: '8c8c42dd821d5291fcfee069b2658c69',
        },
        {
          url: '/models/chair/WoodenChair-sky/WoodenChair-sky_Albedo.png',
          revision: 'b18fa920cd84f8b15f46620b28e7069a',
        },
        {
          url: '/models/chair/WoodenChair-sky/WoodenChair-sky_Normal.png',
          revision: 'd8e758621abd5c147e25075865ad64d2',
        },
        {
          url: '/models/chair/WoodenChair-sky/WoodenChair-sky_Roughness.png',
          revision: 'b6aa23e30c0984392e50e2ad5466fd3d',
        },
        {
          url: '/models/chair/WoodenChair.bin',
          revision: '8d3bbf17ace302a717800a40755e47ee',
        },
        {
          url: '/models/chair/WoodenChair.glb',
          revision: '9ccee527773a68c804b078f9349cdea8',
        },
        {
          url: '/models/chair/WoodenChair.gltf',
          revision: '6643e64e75114d2777b4e0459fe37edd',
        },
        {
          url: '/models/chair/WoodenChair_Albedo.png',
          revision: 'fcd52c316e0373a5662936399d3065e3',
        },
        {
          url: '/models/chair/WoodenChair_Normal.png',
          revision: '606c17c6e610716585fcb373c248e1c8',
        },
        {
          url: '/models/chair/WoodenChair_Roughness.png',
          revision: '3cb6777ccbbf8c50f4c67b458477e711',
        },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: a } }) =>
        !(!e || a.startsWith('/api/auth/callback') || !a.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: i }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        i &&
        !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: a }, sameOrigin: i }) =>
        '1' === e.headers.get('RSC') && i && !a.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: a }) => a && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
