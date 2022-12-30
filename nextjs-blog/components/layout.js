import Head from 'next/head';
import Image from 'next/Image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Loren';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}