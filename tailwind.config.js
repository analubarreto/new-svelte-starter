const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    colors: {
      // custom colors here
    },
    fontFamily: {
      // custom font family here
    }
  },
  extend: {
    borderRadius: {
      // custom border radius here
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};