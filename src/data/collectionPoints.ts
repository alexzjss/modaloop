export type CollectionPoint = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  description: string
  type: string
  acceptedItems?: string
  condition?: string
  destination?: string
  acceptsPublicDropoff?: boolean
  sourceUrl?: string
}

// Endereços revisados em junho de 2026. Pontos sem endereço público completo
// ou sem indicação clara de atendimento foram retirados da rota para evitar destinos imprecisos.
export const collectionPoints: CollectionPoint[] = [
  {
    id: 'ecoponto-textil-bras',
    name: 'Ecoponto Têxtil Brás',
    address: 'Rua Cachoeira, 958 — Catumbi, São Paulo - SP, 03024-000',
    latitude: -23.532175,
    longitude: -46.607299,
    description: 'Ecoponto municipal dedicado a resíduos têxteis, inaugurado para atender a região do Brás.',
    type: 'Ecoponto têxtil',
    acceptedItems: 'Roupas, tecidos e retalhos limpos e secos.',
    condition: 'Entregue os materiais secos e separados para facilitar a triagem.',
    destination: 'Triagem e encaminhamento da rede municipal para o destino adequado.',
    sourceUrl: 'https://prefeitura.sp.gov.br/w/prefeitura-inaugura-no-br%C3%A1s-primeiro-ecoponto-exclusivo-para-receber-restos-de-tecido-e-combater-descarte-irregular',
  },
  {
    id: 'cea-shopping-tatuape',
    name: 'C&A — Shopping Metrô Tatuapé',
    address: 'Rua Domingos Agostim, 91 — Tatuapé, São Paulo - SP, 03306-010',
    latitude: -23.5402,
    longitude: -46.5766,
    description: 'Loja participante do Movimento ReCiclo, programa de logística reversa da C&A.',
    type: 'Logística reversa no varejo',
    acceptedItems: 'Roupas usadas de qualquer marca ou categoria; confirme a disponibilidade da urna na loja.',
    condition: 'Entregue as peças limpas e secas.',
    destination: 'Triagem para reuso por parceiros sociais ou reciclagem têxtil.',
    sourceUrl: 'https://www.shoppingmetrotatuape.com.br/',
  },
  {
    id: 'renner-patio-paulista',
    name: 'Lojas Renner — Shopping Pátio Paulista',
    address: 'Rua Treze de Maio, 1947 — Bela Vista, São Paulo - SP, 01327-001',
    latitude: -23.5701,
    longitude: -46.6402,
    description: 'Loja da rede Renner, que mantém o programa Ecoestilo para descarte consciente.',
    type: 'Logística reversa no varejo',
    acceptedItems: 'Roupas e embalagens do programa Ecoestilo; confirme a disponibilidade do coletor antes de sair.',
    condition: 'Leve os itens secos e sem resíduos.',
    destination: 'Peças em bom estado seguem para instituições parceiras; demais materiais são encaminhados conforme o programa.',
    sourceUrl: 'https://www.lojasrenner.com.br/nossas-lojas',
  },
]
