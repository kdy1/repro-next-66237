/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: [
    "@sbb-esta/lyne-components-react",
    "@sbb-esta/lyne-components",
    "@lit/react",
    "@lit/reactive-element",
    "lit",
    "lit-html",
    "lit-element",
  ],
};

export default nextConfig;
