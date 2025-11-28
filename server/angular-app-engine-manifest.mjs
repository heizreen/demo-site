
export default {
  basePath: 'https://heizreen.github.io/demo-site',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
