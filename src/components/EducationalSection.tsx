import styles from './EducationalSection.module.css'

export function EducationalSection() {
  return (
    <section id="impacto" className={styles.section}>
      <div className={styles.intro}><p className="sectionLabel">cada escolha conta</p><h2>Por que descartar corretamente?</h2></div>
      <div className={styles.cards}>
        <article><span>01</span><h3>Menos pressão no planeta</h3><p>Moda e têxteis estão ligados a emissões, poluição, uso de água e geração de resíduos. Prolongar o ciclo das peças ajuda a mudar essa conta.</p></article>
        <article><span>02</span><h3>Seu guarda-roupa tem impacto</h3><p>O consumo têxtil está entre as maiores fontes de pressão ambiental na Europa — um retrato importante do tamanho do desafio global.</p></article>
        <article><span>03</span><h3>Da linha reta para o ciclo</h3><p>A moda ainda opera muito no modelo produzir-usar-descartar. Coleta, reuso e reciclagem são passos para uma economia mais circular.</p></article>
      </div>
    </section>
  )
}
