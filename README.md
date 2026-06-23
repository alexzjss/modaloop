# ModaLoop

Aplicação web estática para localizar pontos de coleta de roupas e orientar o descarte têxtil responsável.

## Stack

- React
- TypeScript
- Vite
- CSS Modules e CSS global
- GitHub Pages para hospedagem

Não há backend, autenticação, banco de dados ou chaves de API.

## Processamento

Os pontos de coleta são dados estáticos no arquivo `src/data/collectionPoints.ts`.

Quando a pessoa usuária seleciona **Usar minha localização**, o navegador solicita permissão pela Geolocation API. A coordenada recebida permanece apenas em memória. O app calcula a distância em linha reta com a fórmula de Haversine e ordena os pontos do mais próximo para o mais distante.

Após a seleção de um ponto, o app mostra uma prévia pública do Google Maps e disponibiliza um link para abrir a rota. Não é usada API privada do Google Maps.

## Dados de localização

Cada ponto possui identificador, nome, endereço, latitude, longitude, descrição e tipo. Alguns registros também incluem informações sobre itens aceitos, condição recomendada e destino informado.

Parte dos endereços e coordenadas é aproximada e está identificada como “a confirmar”. Esses dados devem ser validados com a organização responsável antes de uso operacional. O centro logístico em São Bernardo do Campo não é tratado como ponto público de entrega sem confirmação prévia.

## Referências

- [UNEP — moda e têxteis sustentáveis](https://www.unep.org/news-and-stories/press-release/unsustainable-fashion-and-textiles-focus-international-day-zero)
- [European Environment Agency — têxteis](https://www.eea.europa.eu/en/topics/in-depth/textiles)
- [Ellen MacArthur Foundation — moda circular](https://www.ellenmacarthurfoundation.org/topics/fashion/overview)
- [EPA — gestão sustentável de roupas e calçados](https://www.epa.gov/smm/sustainable-management-clothing-and-footwear)
- [USP — sustentabilidade](https://www5.usp.br/tag/sustentabilidade/)
- [EACH-USP — Escola de Artes, Ciências e Humanidades](https://www.each.usp.br/)
