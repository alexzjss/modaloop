import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="ModaLoop, início">
        <span className={styles.brandMark}>M</span>
        <span>Moda<span>Loop</span></span>
      </a>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a className={styles.link} href="#guia">Guia de descarte</a>
        <a className={styles.link} href="#impacto">Nosso impacto</a>
      </nav>
    </header>
  )
}
