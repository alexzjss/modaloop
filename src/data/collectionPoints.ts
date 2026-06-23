export type CollectionPoint = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  description: string
  type: string
}

// Coordenadas iniciais aproximadas, para validação com os responsáveis pelos locais.
// Atualize-as quando houver confirmação oficial de cada ponto de coleta.
export const collectionPoints: CollectionPoint[] = [
  {
    id: 'usp-leste',
    name: 'USP Leste',
    address: 'Av. Arlindo Béttio, 1000 — Ermelino Matarazzo, São Paulo - SP',
    latitude: -23.4971,
    longitude: -46.4521,
    description: 'Ponto de partida na zona leste para dar um destino melhor às suas peças.',
    type: 'Campus parceiro',
  },
  {
    id: 'ecoponto-textil-bras',
    name: 'Ecoponto Têxtil no Brás (a confirmar)',
    address: 'Região do Brás — São Paulo - SP',
    latitude: -23.5439,
    longitude: -46.6131,
    description: 'Referência inicial de coleta têxtil na região central. Confirme operação e recebimento antes de ir.',
    type: 'Ponto têxtil a confirmar',
  },
]
