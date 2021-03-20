import Link from 'next/link';
import Nav from './Nav';
import styles from '../styles/Header.module.css';

//this cmponent provides all header elements
export default function Header() {
    return (
      <header className={styles.background}>
        <div className={styles.bar}>
          <h1>
            <Link href="/">Der Brandberg 🔥⛰️</Link>
          </h1>
        </div>
        <div className={styles.sub_bar}>
          <Nav />
        </div>
      </header>
    );
  }