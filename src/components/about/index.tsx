import { ReactNode } from 'react';

import styles from './styles.module.css'


type AboutProps = {
    children?: ReactNode
}

export default function About({ children }: AboutProps) {
    return (
        !children ? (
            <p className={styles.hasNoContent}>The user don't write anything about yourself</p>
        ) : (
            <>
                <h2 className={styles.about}>About</h2>
                <p className={styles.content}>{children}</p>
            </>
        )
    );
}
