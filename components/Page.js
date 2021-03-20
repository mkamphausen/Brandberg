import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Page.module.css'
/*
this component defines the general layout of the page
it uses <Header>- and <Footer>-Components and places a div for the page content in between
*/
export default function Page({ children, data }) {
    return (
      <div className={styles.page_layout}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    );
  }