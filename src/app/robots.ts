import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://shamimthedev.vercel.app' // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Block API routes and admin if you have any
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}