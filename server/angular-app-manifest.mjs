
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
    'index.csr.html': {size: 1470, hash: 'ee4bc3af00e829a18523b35c09f2e07803f218f614e6c13fd55fe19fe22331f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 978, hash: '7187ee462c4fe3791ab2a74c3cd836ca92e016ec69684819f1a6ac9f9e569e79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5453, hash: '35cf7b12237ad55be04162a783f189243a6f5658c8881705baf5a331b58c805e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UVWCJOOJ.css': {size: 3840, hash: 'IMUGOCmHVVs', text: () => import('./assets-chunks/styles-UVWCJOOJ_css.mjs').then(m => m.default)}
  },
};
