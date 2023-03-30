import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '/src/pages/posts');

export type PostData = {
  id: string;
  contentHtml: string,
  [key: string]: string
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      contentHtml: '',
      ...data
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsId() {
  const fileNames = fs.readdirSync(postsDirectory);

  const postsData: ({ params: { id: string } } | null)[] = fileNames.map(fileName => fileName !== "[id].tsx" ?
    ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }) : (null)
  ).filter(x => x)

  console.log(postsData)

  return postsData

}

export async function getPostData(id: string) {
  console.log('I spent here baby')

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')


  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }


}
