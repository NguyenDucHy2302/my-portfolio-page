import Head from 'next/head';
import Image from 'next/image';
import styles from '../style/Home.module.css';
import Navbar from '../components/navbar';
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section className={styles.welcomeSection} id="welcome-section">
        <Image
          src="/images/aleksib-strat-book-photo-hltv-v0-iS4qQYjcQ4b2Wljug20toHAHGJ8-SpdyPZz1FEGVGfM.webp"
          alt="Hy's Profile Picture"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <h1>Welcome to My Portfolio</h1>
        <p>Hello, I'm Hy, a developer.</p>
        <Image
          src="/images/SE183790_NGUYỄN ĐỨC HY_page-0001.jpg"
          alt="SE183790 Picture"
          width={800}
          height={400}
          className={styles.seImage}
        />
      </section>

      <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectTile}>
          <a href="https://final-project-app-tau.vercel.app/" target="_blank">Claim Request App</a>
          <p>A project that me and my team made for OJT.</p>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <h2>Contact </h2>
        <p>Find me on :</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/NguyenDucHy2302" target="_blank" className={styles.socialLink}>
            <FaGithub className={styles.socialIcon} />
          </a>
          <a href="https://www.facebook.com/sanizxje2302/" target="_blank" className={styles.socialLink}>
            <FaFacebook className={styles.socialIcon} />
          </a>
          <a href="https://youtube.com/yourusername" target="_blank" className={styles.socialLink}>
            <FaYoutube className={styles.socialIcon} />
          </a>
        </div>
      </section>
    </>
  );
}
