/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '**',
              },
          ],
    }

}
