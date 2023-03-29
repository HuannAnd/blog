import { ReactNode } from "react";

import Image from "next/image";

import styles from './styles.module.css';


type ContactProps = {
  githubURL?: string,
  linkedingURL?: string
}

export default function Contact({ githubURL, linkedingURL }: ContactProps) {
  return (!githubURL && !linkedingURL ? (
    <p>There isn't contact here</p>
  ) : (
    <>
      <h2>Contact(s)</h2>
      <article className={styles.contactContainer}>
        {githubURL && (
          <div className={styles.socialMedia}>
            <Image
              src="/assets/github-icon.svg"
              alt="Github icon"
              width={24}
              height={24}
              priority
            />
            <a className={styles.link} target='_blank' href={githubURL}>My GitHub Profile</a>
          </div>
        )}
        {linkedingURL && (
          <div className={styles.socialMedia}>
            <Image
              src="/assets/linkedin-icon.svg"
              alt="Linkedin icon"
              width={24}
              height={24}
              priority
            />
            <a className={styles.link} target='_blank' href={linkedingURL}>My Linkdin Profile</a>
          </div>
        )}
      </article>
    </>
  ))

}