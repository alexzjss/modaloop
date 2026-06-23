import styles from './DisposalGuide.module.css'

const itemTypes = [
  { icon: '👕', title: 'Roupas e tecidos', text: 'Camisetas, calças, vestidos, casacos, roupas de cama e retalhos limpos.' },
  { icon: '👟', title: 'Calçados', text: 'Tênis, sapatos e pares soltos; amarre o par para facilitar a triagem.' },
  { icon: '👜', title: 'Acessórios', text: 'Bolsas, cintos, bonés e mochilas, desde que secos e sem resíduos.' },
]

const conditions = [
  { icon: '✦', title: 'Bom estado', label: 'Reuso ou doação', text: 'Peças limpas, secas, sem mofo e ainda utilizáveis. Lave, seque bem e entregue dobrada ou em saco fechado.' },
  { icon: '↻', title: 'Gastada, mas limpa', label: 'Reaproveitamento de material', text: 'Rasgos, manchas ou zíperes danificados não impedem a separação têxtil, mas só entregue onde o ponto confirmar essa aceitação.' },
  { icon: '!', title: 'Contaminada ou molhada', label: 'Não leve para doação', text: 'Peças com óleo, produtos químicos, fezes, mofo intenso ou umidade podem comprometer um lote inteiro. Procure a orientação do serviço local.' },
]

export function DisposalGuide() {
  return (
    <section id="guia" className={styles.section}>
      <div className={styles.heading}>
        <p className="sectionLabel">guia rápido · peça por peça</p>
        <h2>Antes de soltar a peça, <em>olhe para ela.</em></h2>
        <p>O melhor destino depende do tipo, da condição e da regra de quem recebe. Separar bem aumenta as chances de reuso e reduz contaminação.</p>
      </div>

      <div className={styles.types}>
        {itemTypes.map((item) => <article key={item.title}><span>{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
      </div>

      <div className={styles.conditionHeader}><p className="sectionLabel">cheque o estado</p><h3>Qual é a condição da roupa?</h3></div>
      <div className={styles.conditions}>
        {conditions.map((condition) => <article key={condition.title}><span className={styles.conditionIcon}>{condition.icon}</span><p className={styles.label}>{condition.label}</p><h3>{condition.title}</h3><p>{condition.text}</p></article>)}
      </div>

      <aside className={styles.bras}>
        <div className={styles.brasIcon}>♻<span>👕</span></div>
        <div>
          <p className={styles.brasLabel}>atenção ao ponto do Brás</p>
          <h3>Destino: triagem primeiro, rota confirmada depois.</h3>
          <p>Este app usa o “Ecoponto Têxtil no Brás” como referência inicial de localização. Não há, nesta versão, confirmação pública do operador, dos materiais aceitos ou do destino final desse ponto. Por isso, não trate a prévia do mapa como garantia de recebimento.</p>
          <ol><li><strong>Antes de sair:</strong> confirme horário, aceitação de têxteis e condição permitida diretamente com o local.</li><li><strong>Se receber peças boas:</strong> a rota mais adequada é triagem para reuso/doação.</li><li><strong>Se receber peças sem condição de uso:</strong> confirme se há encaminhamento para reaproveitamento ou reciclagem têxtil.</li></ol>
          <p className={styles.brasNote}>A ModaLoop exibirá o destino específico quando ele for publicado ou validado pelo responsável pelo ponto.</p>
        </div>
      </aside>
    </section>
  )
}
