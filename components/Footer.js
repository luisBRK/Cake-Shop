import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.data_info}>
          <Link href="/">
            <h1 className={styles.logo}>
              Sweet <span>cakke</span>
            </h1>
          </Link>

          <p>A memorable flavor made with love. The taste of a good cake.</p>

          <div className={styles.social_media}>
            <Link passHref href="#">
              <a>
                <Image
                  width={30}
                  height={30}
                  src="/img/icons/facebookIcon.svg"
                  alt="facebook icon"
                />
              </a>
            </Link>

            <Link passHref href="#">
              <a>
                <Image
                  width={30}
                  height={30}
                  src="/img/icons/instagramIcon.svg"
                  alt="instagram icon"
                />
              </a>
            </Link>

            <Link passHref href="#">
              <a>
                <Image
                  width={30}
                  height={30}
                  src="/img/icons/tiktokIcon.svg"
                  alt="tiktok icon"
                />
              </a>
            </Link>
          </div>
        </div>

        <nav className={styles.navbar}>
          <p>Quick Links</p>
          <Link href="/most-sale">Most Sale</Link>
          <Link href="/store">Store</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">About Us</Link>
        </nav>

        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
