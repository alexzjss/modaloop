import styles from './LocationButton.module.css'

type LocationButtonProps = { onClick: () => void; loading: boolean }

export function LocationButton({ onClick, loading }: LocationButtonProps) {
  return <button className={styles.button} onClick={onClick} disabled={loading}>
    {loading ? 'Buscando sua localização…' : 'Tentar novamente'}
  </button>
}
