import styles from './Hero.module.css'

type HeroProps = { onFindPoints: () => void }

export function Hero({ onFindPoints }: HeroProps) {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span /> moda circular, de verdade</p>
        <h1>Sua roupa merece <em>outro rolê.</em></h1>
        <p className={styles.description}>
          Encontre um ponto de coleta perto de você e faça do seu desapego uma escolha com futuro.
        </p>
        <button className={styles.cta} onClick={onFindPoints}>
          <span aria-hidden="true">⌖</span> Usar minha localização
        </button>
        <div className={styles.clothingIndicators} aria-label="Itens que podem entrar no ciclo de descarte responsável">
          <span>👕 roupas</span><span>🧥 casacos</span><span>👟 calçados</span><span>👜 acessórios</span>
        </div>
        <p className={styles.hint}>Sua localização só é usada para ordenar os pontos mais próximos.</p>
      </div>
      <div className={styles.art} aria-hidden="true">
        <div className={styles.sun} />
        <div className={styles.orbit} />
        <div className={styles.shirt}><i>👕</i><span>♻</span></div>
        <div className={styles.tag}>desapegue<br />com propósito</div>
        <div className={styles.dotOne} /><div className={styles.dotTwo} />
      </div>
    </section>
  )
}
