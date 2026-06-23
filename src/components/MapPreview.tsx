import type { CollectionPoint } from '../data/collectionPoints'
import { mapEmbedUrl, mapsRouteUrl } from '../utils/maps'
import styles from './MapPreview.module.css'

export function MapPreview({ point }: { point: CollectionPoint }) {
  return (
    <section className={styles.section} aria-live="polite">
      <div className={styles.heading}><p className="sectionLabel">seu destino</p><h2>Rota para {point.name}</h2></div>
      <div className={styles.mapFrame}>
        <iframe title={`Mapa de ${point.name}`} src={mapEmbedUrl(point)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a className={styles.route} href={mapsRouteUrl(point)} target="_blank" rel="noreferrer">Abrir rota no Google Maps <span>↗</span></a>
    </section>
  )
}
