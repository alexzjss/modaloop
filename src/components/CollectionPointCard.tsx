import type { CollectionPoint } from '../data/collectionPoints'
import { formatDistance } from '../utils/distance'
import styles from './CollectionPointCard.module.css'

type Props = { point: CollectionPoint; distance: number; selected: boolean; onSelect: (point: CollectionPoint) => void }

export function CollectionPointCard({ point, distance, selected, onSelect }: Props) {
  return (
    <article className={`${styles.card} ${selected ? styles.selected : ''}`}>
      <div className={styles.topline}><span>{point.type}</span><strong>{formatDistance(distance)}</strong></div>
      <h3>{point.name}</h3>
      <p>{point.description}</p>
      <address>{point.address}</address>
      <p className={styles.verification}>Endereço conferido em junho de 2026{point.sourceUrl && <> · <a href={point.sourceUrl} target="_blank" rel="noreferrer">ver fonte</a></>}</p>
      {point.acceptedItems && <dl className={styles.details}>
        <div><dt>👕 Recebe</dt><dd>{point.acceptedItems}</dd></div>
        {point.destination && <div><dt>♻ Destino</dt><dd>{point.destination}</dd></div>}
      </dl>}
      {point.acceptsPublicDropoff === false
        ? <p className={styles.warning}>⚠ Confirme se há atendimento ao público antes de criar uma rota.</p>
        : <button onClick={() => onSelect(point)}>{selected ? 'Ponto selecionado' : 'Escolher este ponto'} <span>→</span></button>}
    </article>
  )
}
