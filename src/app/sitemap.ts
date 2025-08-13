import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shamimthedev.vercel.app' // Replace with your actual domain
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more pages if you create them in the future
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/contact`,
    //   lastModified: lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}