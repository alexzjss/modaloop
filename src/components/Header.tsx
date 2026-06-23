import styles from './Header.module.css'
import uspMark from '../assets/usp-logo-transp.png'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="ModaLoop, início">
        <span className={styles.brandMark}>M</span>
        <span>Moda<span>Loop</span></span>
      </a>
      <span className={styles.usp}><span className={styles.divider} aria-hidden="true" /><img src={uspMark} alt="USP — Universidade de São Paulo" /></span>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a className={styles.link} href="#guia">Guia de descarte</a>
        <a className={styles.link} href="#impacto">Nosso impacto</a>
      </nav>
    </header>
  )
}
