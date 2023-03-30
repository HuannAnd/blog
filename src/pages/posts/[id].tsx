import Head from "next/head";

import { Layout, Date } from "@/components";

import { getAllPostsId, getPostData, PostData } from '@/utils/posts';

import styles from '@/styles/[id].module.css';


export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h2>{postData.title}</h2>
        <div className={styles.postInfoContainer}>
          <span className={styles.idTitle}>{postData.id}</span>
          <Date style={{ textAlign: 'right', position: 'absolute', right: '0' }} dateString={postData.date} />
        </div>
        <div style={{ fontFamily: 'Roboto', fontWeight: '400' }} dangerouslySetInnerHTML={{ __html: postData.contentHtml! }}></div>
      </article>
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getAllPostsId()
  

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { id: string, contentHtml: string } }) {
  console.log(params.id)
  const postData = await getPostData(params.id)



  return {
    props: {
      postData,
    }
  }

}