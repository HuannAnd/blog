import Head from 'next/head'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'

import { About, Layout, Date, Contact } from '@/components/index'
import { siteTitle } from '@/components/layout'


import { PostData, getSortedPostsData } from '@/utils/posts'
import Link from 'next/link'
import { BlockList } from 'net'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  let allPostsData = getSortedPostsData()

  // removing the [id].tsx path 

  allPostsData = allPostsData.slice(1)

  return {
    props: {
      allPostsData,
    },
  }
}

type HomeProps = {
  allPostsData: PostData[]
}

export default function Home({ allPostsData }: HomeProps) {


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>]
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <section className={`${styles.headingMd} ${utilStyles.padding1px}`}>
        <About>I'm front-end developer, i like to many things, but the a thing, wich often i do, is listen songs! Its awesome, i'm listen various genders, however im actually listen Rock songs.</About>

        <Contact githubURL='https://github.com/HuannAnd' linkedingURL='https://www.linkedin.com/in/huann-vicente-5092a9261/' />
        
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul style={{ left: '0' }}>
          {allPostsData.map(({ id, date, title }) =>
            <li style={{ listStyle: 'none' }} className={`${utilStyles.listItem} ${utilStyles.fontParagraph}`} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          )}
        </ul>

      </section>
    </Layout>
  )
}
