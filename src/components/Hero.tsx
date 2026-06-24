import styles from './Hero.module.css'
import clothingIllustration from '../assets/clothing-illustration.png'

type HeroProps = { onFindPoints: () => void; loading: boolean }

export function Hero({ onFindPoints, loading }: HeroProps) {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span /> moda circular, de verdade</p>
        <h1>Sua roupa merece <em>outro rolê.</em></h1>
        <p className={styles.description}>
          Encontre um ponto de coleta perto de você e faça do seu desapego uma escolha com futuro.
        </p>
        <button className={styles.cta} onClick={onFindPoints} disabled={loading} aria-busy={loading}>
          {loading ? <span className={styles.spinner} aria-hidden="true" /> : <span aria-hidden="true">⌖</span>} {loading ? 'Buscando sua localização…' : 'Usar minha localização'}
        </button>
        <div className={styles.clothingIndicators} aria-label="Itens que podem entrar no ciclo de descarte responsável">
          <span>👕 roupas</span><span>🧥 casacos</span><span>👟 calçados</span><span>👜 acessórios</span>
        </div>
        <p className={styles.hint}>Sua localização só é usada para ordenar os pontos mais próximos.</p>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.sun}><span className={styles.recycle}>♻</span></div>
        <div className={styles.shirt}><img src={clothingIllustration} alt="" /></div>
        <div className={styles.tag}>desapegue<br />com propósito</div>
        <div className={styles.dotOne} /><div className={styles.dotTwo} />
      </div>
    </section>
  )
}
