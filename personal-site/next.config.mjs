/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit plain static files to ./out so the site can be served by nginx
  output: "export",
};

export default nextConfig;
