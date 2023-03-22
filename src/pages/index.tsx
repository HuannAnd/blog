import Head from 'next/head'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import utilStyles from '@/styles/utils.module.css'

import { About, Layout } from '@/components/index'
import { siteTitle } from '@/components/layout'

import { AllPostsDataType, getSortedPostsData } from '@/utils/posts'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

type HomeProps = {
  allPostsData: AllPostsDataType
}

export default function Home({ allPostsData }) {


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>]
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      {/* <About>
        Hello i'm <strong>Huann</strong>, and i'm front-end developer, i love listen lo-fi songs when i progamming. If you needed to me or want chat, call me in the discord <strong>LUTO#9448</strong>, bye :D.
        </About> */}
      <section className={`${styles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul>
          {allPostsData.map(({ id: string , date, title }) =>
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          )}
        </ul>
      </section>

    </Layout>
  )
}
