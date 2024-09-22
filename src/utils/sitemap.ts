import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // get site post, url, title, description
    const baseUrl = 'https://www.shinmh.github.io';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}