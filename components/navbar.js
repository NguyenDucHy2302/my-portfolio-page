import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar} id="navbar">
      <a href="#welcome-section">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
