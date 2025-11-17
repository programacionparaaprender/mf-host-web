const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfe1": "http://localhost:3000/remoteEntry.js",   
    "mf-remoto": "http://localhost:4201/remoteEntry.js",   
    //"mf-remoto": "http://mf-host-web-and-remote.s3-website.us-east-2.amazonaws.com/mf-remoto/remoteEntry.js"
    //"mf-remoto":"http://mf-remoto.s3-website.us-east-2.amazonaws.com/remoteEntry.js"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
