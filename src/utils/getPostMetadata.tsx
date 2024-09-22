import fs from 'fs'
import matter from 'gray-matter'
import {Post} from "@/config/types";

export default function getPostMetadata() {
    const basePath = process.cwd() + '/posts'
    const files = fs.readdirSync(basePath)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    const posts: Post[] = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            date: matterResult.data.date,
            update: matterResult.data.update,
            series: matterResult.data.series,
            tags: matterResult.data.tags,
            slug: filename.replace('.md', '')
        }
    })
    return posts
}