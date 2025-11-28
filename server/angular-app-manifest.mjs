
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://heizreen.github.io/demo-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/demo-site"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1470, hash: 'f4d53862f52ed7566f45ae4dd49ce655264d5a4700fe773a9bc94d1296ae53c4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 978, hash: 'dc0918516666c02796b90821b82a7d0e1084a639032c92034822127dbbb795e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5451, hash: '516102841ef0c5115751a8642fbcdbc88d1a376f133560b530e8935abd4033eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UVWCJOOJ.css': {size: 3840, hash: 'IMUGOCmHVVs', text: () => import('./assets-chunks/styles-UVWCJOOJ_css.mjs').then(m => m.default)}
  },
};
