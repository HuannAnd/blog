import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { ReactNode } from "react"

import styles from './styles.module.css'
import utilStyles from '@/styles/utils.module.css'

type LayoutProps = {
	children: ReactNode
	home?: boolean
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
				/>
				<meta
					name="og:title"
					content='Personal blog'
				/>
				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src="/images/github-profile.jpg"
							className={utilStyles.borderCircle}
							style={{ objectFit: 'cover' }}
							width={100}
							height={100}
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
								style={{ objectFit: 'cover' }}
								className={utilStyles.borderCircle}
								width={100}
								height={100}
								alt="Huann profile image"
							/>
						</Link>
						<h2 className={styles.profileName}>
							<Link style={{color: '#111'}} href="/" >
								{name}
							</Link>
						</h2>
					</>
				)}
			</header>
			<main className={utilStyles.fontParagraph}>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/" >Back to home</Link>
				</div>
			)}
		</div>
	);
}