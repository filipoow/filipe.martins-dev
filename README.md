# filipe.martins-dev

Site pessoal. HTML estático, sem build step.

## Publicar no GitHub Pages

1. Copie **todo o conteúdo desta pasta** para a raiz do repositório `filipe.martins-dev`
2. `git add . && git commit -m "novo site" && git push`
3. Settings > Pages > Source: `Deploy from a branch`, branch `main`, pasta `/ (root)`
4. Em 1 a 2 minutos: https://filipoow.github.io/filipe.martins-dev/

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | página + todo o CSS |
| `content.js` | textos PT/EN, cases, experiência, depoimentos, stack |
| `bundle.jsx` | componentes (crachá, seções, terminal, cases) |
| `image-slot.js` | slots de imagem dos cards de case |
| `assets/` | sua foto e as fotos dos depoimentos |
| `llms.txt` | resumo estruturado pra ChatGPT, Claude e Perplexity |
| `favicon.svg` `404.html` `robots.txt` `sitemap.xml` | básicos de site |
| `.nojekyll` | impede o GitHub de processar o site pelo Jekyll |

## Editar textos

Tudo em `content.js`. Cada bloco existe em `pt` e `en` — mude os dois.

- **Links** (email, LinkedIn, GitHub, Calendly, Filka): `window.V3.links`, no topo
- **Hero** (headline, números, crachá): `window.V3.pt.h4` e `.en.h4`, no fim do arquivo
- **Cor de destaque**: variável `--acc` na primeira linha do CSS em `index.html`
- **Stack**: `window.V3.tech` — cada item tem nome, cor da marca e o slug da logo

## Prints nos cards de case

Os cards têm slots vazios. Abrindo o site pelo editor, arraste uma imagem em cima do slot e ela fica salva. Publicado, aparecem como placeholder até você trocar.

## Domínio próprio

Crie um arquivo `CNAME` na raiz com o domínio dentro (ex: `filipemartins.dev`), aponte o DNS pro GitHub Pages e troque a URL nas metatags do `index.html`.

## Otimização que sobrou

O JSX é compilado no navegador pelo Babel (~300KB). Pra site pessoal está ok. Se quiser deixar mais rápido, passe o JSX por um bundler (Vite ou esbuild) e troque as três tags de script por um arquivo único já compilado.
