import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { ReactNode } from "react"

import styles from './styles.module.css'
import utilStyles from '@/styles/utils.module.css'

type LayoutProps = {
	children: ReactNode
	home: boolean
}

const name = 'Huann Vicente'

export const siteTitle = 'Next Blog'

export default function Layout({ children, home = false }: LayoutProps) {
	return (
		<div className={styles.container}>
			<Head >
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Only a blog"
				/>
				<meta
					property="og:image"
					// content={`https://og-image.vercel.app/${encodeURI(
					// 	siteTitle
					// )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					// content="aijdasodj"
				/>
				<meta
					name="og:title"
					content='Personal blog'
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/github-profile.jpg"
							className={utilStyles.borderCircle}
							style={{objectFit: 'cover'}}
							width={144}
							height={144}
							alt="Huann profile image"
						/>
						<h1 className={utilStyles.headingXl}>{name}</h1>
					</>
				) : (	
					<>
						<Link href="/">
							<Image
								priority
								src="/images/github-profile.jpg"
								style={{objectFit: 'cover'}}
								className={utilStyles.borderCircle}
								width={144}
								height={144}
								alt="Huann profile image"
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.heading2Xl}>
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/" >Back to home</Link>
				</div>
			)}
		</div>
	);
}