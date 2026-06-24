import { useEffect, useMemo, useRef, useState } from 'react'
import { CollectionPointCard } from './components/CollectionPointCard'
import { EducationalSection } from './components/EducationalSection'
import { DisposalGuide } from './components/DisposalGuide'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocationButton } from './components/LocationButton'
import { MapPreview } from './components/MapPreview'
import { collectionPoints, type CollectionPoint } from './data/collectionPoints'
import { distanceInKm } from './utils/distance'
import './App.css'

type UserLocation = { latitude: number; longitude: number }

function App() {
  const [location, setLocation] = useState<UserLocation | null>(null)
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null)
  const [loadingLocation, setLoadingLocation] = useState(false)
  const [locationError, setLocationError] = useState('')
  const selectedDestinationRef = useRef<HTMLDivElement>(null)

  const orderedPoints = useMemo(() => {
    if (!location) return []
    return collectionPoints
      .map((point) => ({ point, distance: distanceInKm(location, point) }))
      .sort((a, b) => a.distance - b.distance)
  }, [location])

  useEffect(() => {
    if (selectedPoint) {
      selectedDestinationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedPoint])

  function findLocation() {
    setLocationError('')
    if (!navigator.geolocation) {
      setLocationError('Seu navegador não oferece suporte à geolocalização.')
      return
    }
    setLoadingLocation(true)
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({ latitude: coords.latitude, longitude: coords.longitude })
        setSelectedPoint(null)
        setLoadingLocation(false)
        window.setTimeout(() => document.getElementById('pontos')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Precisamos da sua permissão para mostrar os pontos mais próximos.'
          : 'Não foi possível obter sua localização agora. Tente novamente.'
        setLocationError(message)
        setLoadingLocation(false)
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    )
  }

  return <><Header /><main><Hero onFindPoints={findLocation} loading={loadingLocation} /><DisposalGuide />
    <section id="pontos" className="pointsSection">
      <div className="pointsIntro"><p className="sectionLabel">encontre um ponto</p><h2>Seu próximo destino começa aqui.</h2><p>Permita sua localização para ver os pontos em ordem de proximidade.</p></div>
      {!location && <div className="locationPrompt"><div className="pin">⌖</div><h3>Vamos encontrar o mais perto?</h3><p>Compartilhe sua localização para organizar os pontos por distância. Nada fica salvo.</p><LocationButton onClick={findLocation} loading={loadingLocation} label="Usar minha localização" />{locationError && <p className="error" role="alert">{locationError}</p>}</div>}
      {location && !selectedPoint && <div className="results"><div className="resultsHeader"><p><span>●</span> Localização recebida — escolha seu ponto de descarte</p><LocationButton onClick={findLocation} loading={loadingLocation} label="Atualizar localização" /></div><div className="pointGrid">{orderedPoints.map(({ point, distance }) => <CollectionPointCard key={point.id} point={point} distance={distance} selected={false} onSelect={setSelectedPoint} />)}</div></div>}
      {selectedPoint && <div ref={selectedDestinationRef} className="selectedDestination"><div className="selectedDestinationHeader"><div><p className="sectionLabel">ponto escolhido</p><h3>{selectedPoint.name}</h3><p>{selectedPoint.address}</p></div><button onClick={() => setSelectedPoint(null)}>Trocar ponto</button></div><MapPreview point={selectedPoint} /></div>}
    </section>
    <EducationalSection />
  </main><Footer /></>
}

export default App
