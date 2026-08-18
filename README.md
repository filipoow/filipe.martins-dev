# filipe.martins-dev

Site pessoal. HTML estático, sem build step.

## Publicar

1. Copie **todo o conteúdo desta pasta** para a raiz do repositório `filipe.martins-dev`
2. `git add . && git commit -m "novo site" && git push`
3. Settings > Pages > Source: `Deploy from a branch`, branch `main`, pasta `/ (root)`
4. Em 1 a 2 minutos: https://filipoow.github.io/filipe.martins-dev/

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | página principal, com todo o CSS |
| `content.js` | textos PT/EN, cases, experiência, FAQ, depoimentos, stack |
| `bundle.jsx` | componentes: crachá, seções, terminal, cases |
| `obrigado.html` | página de agradecimento, fora do índice do Google |
| `privacidade.html` | política de privacidade, LGPD |
| `404.html` | erro |
| `image-slot.js` | slots de imagem dos cards de case |
| `assets/` | sua foto e as fotos dos depoimentos |
| `llms.txt` | resumo estruturado pra ChatGPT, Claude e Perplexity |
| `favicon.svg` `robots.txt` `sitemap.xml` | básicos de site |
| `.nojekyll` | impede o GitHub de processar o site pelo Jekyll |

## Editar textos

Tudo em `content.js`, com um bloco `pt` e um `en`. Mude os dois.

- **Links** (email, LinkedIn, GitHub, agenda, Filka): `window.V3.links`, no topo
- **Hero** (headline, números, crachá): `window.V3.pt.h4` e `.en.h4`, no fim
- **FAQ**: bloco `faq` dentro de `pt` e `en`. Se mudar as perguntas, atualize também o JSON-LD no fim do `<head>` do `index.html`
- **Cor de destaque**: variável `--acc` na primeira linha do CSS
- **Stack**: `window.V3.tech`, cada item com nome, cor da marca e slug da logo

## Analytics

Google Analytics 4 já instalado (`G-44M8FWYGWM`). Além do pageview, quatro eventos personalizados:

| Evento | Quando dispara |
|---|---|
| `agenda_hero` | botão de agenda no topo |
| `agenda_cta` | botão de agenda na seção de contato |
| `agenda_mobile` | botão da barra fixa no celular |
| `email_cta` | botão de email |

No GA4, veja em Relatórios > Engajamento > Eventos.

## Prints nos cards de case

Os cards têm slots vazios. Abrindo o site pelo editor, arraste uma imagem em cima do slot e ela fica salva. Publicado, aparecem como placeholder até você trocar.

## Domínio próprio

Crie um arquivo `CNAME` na raiz com o domínio dentro, aponte o DNS pro GitHub Pages e troque a URL nas metatags do `index.html` e no `sitemap.xml`.

## Otimização que sobrou

O JSX é compilado no navegador pelo Babel (~300KB). Pra site pessoal está ok. Se quiser deixar mais rápido, passe o JSX por um bundler (Vite ou esbuild) e troque as três tags de script por um arquivo já compilado.
