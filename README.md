# filipe.martins-dev

Site pessoal. HTML estático, sem build step.

## Publicar no GitHub Pages

1. Copie **todo o conteúdo desta pasta** para a raiz do repositório `filipe.martins-dev`
2. `git add . && git commit -m "novo site" && git push`
3. Settings > Pages > Source: `Deploy from a branch` > branch `main`, pasta `/ (root)`
4. Em 1-2 minutos: https://filipoow.github.io/filipe.martins-dev/

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | página + todo o CSS |
| `content.js` | textos PT/EN, cases, experiência, depoimentos |
| `bundle.jsx` | componentes React (crachá, seções, terminal) |
| `image-slot.js` | slots de imagem dos cards de case |
| `assets/filipe.jpg` | sua foto |
| `llms.txt` | resumo estruturado pra LLMs |
| `favicon.svg` `404.html` `robots.txt` `sitemap.xml` | básicos |
| `.nojekyll` | impede o Jekyll de processar o site |

## Editar textos

Tudo em `content.js`. Cada bloco existe em `pt` e `en` — mude os dois.
Links (email, LinkedIn, Calendly, Filka) ficam em `window.V3.links`, no topo do arquivo.
O hero (headline, números, crachá) fica em `window.V3.pt.h4` / `.en.h4`, no fim.

## Prints nos cards de case

Os cards têm slots vazios. Rodando localmente pelo editor, arraste uma imagem em cima e ela é salva. Publicado, os slots aparecem como placeholder até você trocar as imagens.

## Domínio próprio

Crie um arquivo `CNAME` na raiz com o domínio dentro (ex: `filipemartins.dev`), aponte o DNS pro GitHub Pages e atualize `SITE` nas metatags do `index.html`.

## Otimização que sobrou

O JSX é transpilado no navegador pelo Babel (~300KB). Pra um site pessoal está ok, mas se quiser deixar mais rápido, rode o JSX por um bundler (Vite/esbuild) e troque as três tags de script por um único arquivo já compilado.
