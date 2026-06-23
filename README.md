<<<<<<< HEAD
# ModaLoop

Aplicação estática para descobrir pontos de coleta de roupas próximos. Não usa backend, login, banco de dados ou chave de API.

O app também traz um guia de preparação, tipos de itens e condições apropriadas para descarte. O ponto têxtil indicado no Brás é uma referência aproximada: confirme com o operador o funcionamento, os materiais aceitos e o destino final antes de levar peças.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicação no GitHub Pages

O projeto está configurado para o repositório `clothing`: a propriedade `base` em `vite.config.ts` é `/clothing/`. Se o repositório for renomeado, atualize esse valor para `/<novo-repositorio>/` antes do deploy.

1. Envie o código para o repositório no GitHub.
2. Execute `npm run deploy`. O comando gera a pasta estática `dist` e publica seu conteúdo na branch `gh-pages`.
3. No GitHub, abra **Settings → Pages** e selecione **Deploy from a branch**. Escolha a branch `gh-pages` e a pasta `/(root)`.
4. O site ficará disponível em `https://<usuario>.github.io/clothing/`.

Para conferir a versão de produção localmente, execute `npm run build` e depois `npm run preview`.

## Mapa e localização

O navegador solicita localização somente após a ação da pessoa usuária. A coordenada é usada em memória para calcular a distância em linha reta até os pontos cadastrados e não é armazenada. A prévia e a rota usam URLs públicas do Google Maps, sem chave privada. Os dois pontos iniciais e suas coordenadas estão em `src/data/collectionPoints.ts`; ambos devem ser confirmados/ajustados pelos responsáveis antes de um lançamento definitivo.
=======
# modaloop
Plataforma web que conecta usuários a pontos de coleta de roupas usadas, promovendo o descarte têxtil consciente por meio de geolocalização, informações ambientais e acesso facilitado a locais de reciclagem e reaproveitamento.
>>>>>>> origin/main
