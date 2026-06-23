import styles from './Footer.module.css'

export function Footer() {
  return <footer className={styles.footer}>
    <p className={styles.brand}>Moda<span>Loop</span></p>
    <div><p>Referências</p><a href="https://www.unep.org/news-and-stories/press-release/unsustainable-fashion-and-textiles-focus-international-day-zero" target="_blank" rel="noreferrer">UNEP</a><a href="https://www.eea.europa.eu/en/topics/in-depth/textiles" target="_blank" rel="noreferrer">European Environment Agency</a><a href="https://www.ellenmacarthurfoundation.org/topics/fashion/overview" target="_blank" rel="noreferrer">Ellen MacArthur Foundation</a><a href="https://www.epa.gov/smm/sustainable-management-clothing-and-footwear" target="_blank" rel="noreferrer">EPA: roupas e calçados</a></div>
    <p className={styles.note}>Feito para circular ♻</p>
  </footer>
}
