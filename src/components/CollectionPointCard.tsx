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
      <button onClick={() => onSelect(point)}>{selected ? 'Ponto selecionado' : 'Escolher este ponto'} <span>→</span></button>
    </article>
  )
}
