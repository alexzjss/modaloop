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
}

// Coordenadas aproximadas, para validação com os responsáveis pelos locais.
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
    acceptedItems: 'Confirme com o responsável pelo ponto.',
    condition: 'Leve as peças limpas e secas.',
    destination: 'Triagem e destino final a confirmar.',
  },
  {
    id: 'renner-paulista',
    name: 'Lojas Renner — Avenida Paulista',
    address: 'Avenida Paulista — Bela Vista, São Paulo - SP (unidade a confirmar)',
    latitude: -23.5618,
    longitude: -46.6552,
    description: 'Referência do programa Ecoestilo para receber roupas e direcioná-las à reciclagem têxtil.',
    type: 'Logística reversa no varejo',
    acceptedItems: 'Roupas de qualquer marca; confirme a aceitação da unidade.',
    condition: 'Peças secas. Não leve itens íntimos, calçados ou acessórios molhados/sujos.',
    destination: 'Triagem para desfibramento e reciclagem têxtil, conforme o programa.',
  },
  {
    id: 'cea-shopping-tatuape',
    name: 'C&A — Shopping Metrô Tatuapé',
    address: 'R. Domingos Agostim, 91 — Cidade Mãe do Céu, São Paulo - SP',
    latitude: -23.5402,
    longitude: -46.5766,
    description: 'Referência do Movimento ReCiclo em um polo de transporte da zona leste.',
    type: 'Logística reversa no varejo',
    acceptedItems: 'Roupas usadas de qualquer marca ou categoria; confirme a disponibilidade da urna.',
    condition: 'Entregue as peças limpas e secas.',
    destination: 'Triagem para reuso por parceiros sociais ou reciclagem têxtil.',
  },
  {
    id: 'gerando-falcoes-indianopolis',
    name: 'Bazar Gerando Falcões — Indianópolis',
    address: 'Av. Ibirapuera — Indianópolis, São Paulo - SP (unidade a confirmar)',
    latitude: -23.6012,
    longitude: -46.6659,
    description: 'Opção de impacto social para ampliar o ciclo de vida das roupas em bom estado.',
    type: 'Bazar circular',
    acceptedItems: 'Roupas em bom estado; confirme diretamente com o bazar antes de sair.',
    condition: 'Peças limpas, secas e em condição adequada para nova utilização.',
    destination: 'Comercialização a preços acessíveis e apoio a projetos sociais da organização.',
  },
  {
    id: 'exercito-salvacao-bosque-saude',
    name: 'Exército de Salvação — Bosque da Saúde',
    address: 'Bosque da Saúde, São Paulo - SP (sede/unidade a confirmar)',
    latitude: -23.6181,
    longitude: -46.6317,
    description: 'Referência da rede tradicional de coleta e triagem de roupas e tecidos.',
    type: 'Doação e impacto social',
    acceptedItems: 'Roupas e tecidos; confirme o recebimento direto no local.',
    condition: 'Peças limpas, secas e embaladas para facilitar a triagem.',
    destination: 'Peças aproveitáveis seguem para bazares; demais materiais podem seguir para reciclagem.',
  },
  {
    id: 'exercito-salvacao-vila-santa-catarina',
    name: 'Exército de Salvação — Vila Santa Catarina',
    address: 'Vila Santa Catarina, São Paulo - SP (unidade a confirmar)',
    latitude: -23.6588,
    longitude: -46.6678,
    description: 'Posto descentralizado de arrecadação para doações locais na zona sul.',
    type: 'Doação e impacto social',
    acceptedItems: 'Roupas e doações locais; confirme a lista da unidade.',
    condition: 'Peças limpas, secas e em condições de triagem.',
    destination: 'Triagem regional e abastecimento do ecossistema de bazares da entidade.',
  },
  {
    id: 'exercito-salvacao-grajau',
    name: 'Exército de Salvação — Grajaú',
    address: 'Grajaú, São Paulo - SP (unidade a confirmar)',
    latitude: -23.7574,
    longitude: -46.6964,
    description: 'Alternativa de economia solidária no extremo sul da capital.',
    type: 'Doação e impacto social',
    acceptedItems: 'Roupas e calçados usados; confirme a aceitação com a unidade.',
    condition: 'Itens limpos, secos e separados em sacos ou caixas.',
    destination: 'Triagem e encaminhamento ao ecossistema social da organização.',
  },
  {
    id: 'exercito-salvacao-sao-bernardo',
    name: 'Exército de Salvação — São Bernardo do Campo',
    address: 'São Bernardo do Campo - SP (unidade a confirmar)',
    latitude: -23.7012,
    longitude: -46.5554,
    description: 'Opção na região do Grande ABC para roupas, retalhos e doações de maior volume.',
    type: 'Doação e impacto social',
    acceptedItems: 'Vestuário e retalhos; confirme o recebimento e o horário.',
    condition: 'Materiais limpos, secos e separados para triagem.',
    destination: 'Triagem para reuso social e encaminhamento de materiais não aproveitáveis.',
  },
  {
    id: 'exercito-salvacao-centro-logistico-sbc',
    name: 'Exército de Salvação — Centro Logístico (SBC)',
    address: 'São Bernardo do Campo - SP (localização operacional aproximada)',
    latitude: -23.7338,
    longitude: -46.5642,
    description: 'Núcleo operacional de consolidação de materiais da Grande São Paulo; não é um ponto público confirmado.',
    type: 'Centro logístico — confirmar antes de ir',
    acceptedItems: 'Não presuma atendimento ao público. Confirme diretamente com a organização.',
    condition: 'Somente após orientação da entidade.',
    destination: 'Consolidação, triagem e possíveis fluxos de reuso ou reciclagem em escala.',
    acceptsPublicDropoff: false,
  },
]
