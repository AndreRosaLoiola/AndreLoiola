// next.config.mjs
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/pdf/",
            publicPath: "/_next/static/pdf/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
