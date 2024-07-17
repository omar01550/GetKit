/** @type {import('next').NextConfig} */
const nextConfig = {
     images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "lh3.googleusercontent.com",
              pathname: '/**',
            //   pathname: "/",
            },
            {
              protocol: 'https', // Optional, defaults to 'https'
              hostname: 'firebasestorage.googleapis.com', // Allow images from this domain
              pathname: '/v0/b/graduation-medcine-app.appspot.com/o/**', // Allow images from this specific path within the domain
       
            }
  
     ]
    }
};

export default nextConfig;
