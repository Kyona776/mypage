const nextConfig = {
    compiler : {
        styledComponents: true,
        // reactRemoveProperties: true, // remove property named with ^data-test by regex
        removeConsole : true, // remove console.*
    },
    webpack: (config, options) => {
        if (options.isServer) config.output.globalObject = 'this';
        return config
    },
    experimental : {
       // urlImports: ["https://unpkg.com/@mojs/core"]
    }
    /* config options here */
    /*
    webpack: (config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
    }*/
  }
  
  module.exports = nextConfig
  
