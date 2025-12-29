// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: Infinity,
  proseWrap: "preserve",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
