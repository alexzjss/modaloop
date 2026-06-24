import styles from './LocationButton.module.css'

type LocationButtonProps = { onClick: () => void; loading: boolean; label?: string }

export function LocationButton({ onClick, loading, label = 'Usar minha localização' }: LocationButtonProps) {
  return <button className={styles.button} onClick={onClick} disabled={loading}>
    {loading ? <span className={styles.spinner} aria-hidden="true" /> : <span aria-hidden="true">⌖</span>}
    {loading ? 'Buscando sua localização…' : label}
  </button>
}
