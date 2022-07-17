import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

// import img logo

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navegation}>
          <Link href="/">
            <h1 className={styles.logo}>
              Sweet <span>cakke</span>
            </h1>
          </Link>

          <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/store">Store</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about-us">About Us</Link>
          </nav>

          <div className={styles.store}>
            <Link passHref href={"/search"}>
              <a>
                <Image
                  width={25}
                  height={25}
                  src="/img/icons/searchIcon.svg"
                  alt="search icon"
                />
              </a>
            </Link>

            <Link passHref href="/shopping-bag">
              <a>
                <Image
                  width={25}
                  height={25}
                  src="/img/icons/shoppingBag.svg"
                  alt="bag shop icon"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
