Package.describe({
  name: 'barbatus:ng2-minifier-js',
  version: '0.0.1',
  summary: 'Angular 2 javascript minifiers based on UglifyJS',
  documentation: null
});

Package.registerBuildPlugin({
  name: "minifyStdJS",
  use: [
    'minifier-js'
  ],
  sources: [
    'minifier.js'
  ]
});

Package.onUse(function(api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function(api) {
});
