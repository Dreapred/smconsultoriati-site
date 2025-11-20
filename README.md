# S&M Consultoria em TI – Site Institucional

Este repositório contém o código‑fonte oficial do site institucional da **S&M Consultoria em TI**, incluindo todas as páginas, estilos, scripts e ativos utilizados para apresentar a empresa ao público. O site foi totalmente renovado com um layout premium, responsivo, suporte a modo claro/escuro, animações de entrada e integração com o portal de suporte via TomTicket.

## 📁 Estrutura do Projeto

```
site_final/
├── index.html               # Página principal com hero, serviços, por que escolher a S&M, call‑to‑action para clientes existentes e formulário de contato
├── style.css               # Folha de estilos premium (cores, temas, responsividade e animações)
├── script.js               # Lógica de alternância de tema (modo claro/escuro) e animações de scroll
├── privacidade.html        # Política de Privacidade (atualizada em 20/11/2025)
├── termos.html             # Termos de Uso (atualizados em 20/11/2025)
├── README.md               # Este documento
└── img/                    # Logos e imagens utilizadas no site
    ├── logo.png           # Logo principal (horizontal, fundo transparente, 512px de largura)
    ├── logo-alt.png       # Logo alternativa horizontal (outra variação de cores)
    ├── logo-vertical.png  # Logo vertical utilizada na seção hero
    ├── logo-vertical-alt.png # Logo vertical alternativa
    ├── favicon.png        # Ícone do site (192x192)
    ├── logo_512.png       # Versão 512px da logo principal (para uso em alta resolução)
    ├── logo_256.png       # Versão 256px da logo principal
    ├── logo_128.png       # Versão 128px da logo principal
    ├── logo_alt_512.png   # Versão 512px da logo alternativa
    ├── logo_alt_256.png
    ├── logo_alt_128.png
    ├── logo_vertical_512.png
    ├── logo_vertical_256.png
    ├── logo_vertical_128.png
    ├── logo_vertical_alt_512.png
    ├── logo_vertical_alt_256.png
    └── logo_vertical_alt_128.png
```

### Recomendações de uso das logos

* `logo.png` — Use esta versão nas áreas de cabeçalho e rodapé. Ela tem fundo transparente e largura de 512 px para manter a qualidade em telas de alta resolução. Redimensionamentos menores podem ser controlados via CSS (`height`/`width`).
* `logo-alt.png` — Versão horizontal alternativa, ideal para fundos escuros ou materiais em que a cor principal da marca não contraste adequadamente.
* `logo-vertical.png` — Versão vertical, utilizada na seção hero do site. Ela reforça a identidade visual em áreas de destaque.
* `logo-vertical-alt.png` — Versão vertical alternativa para variações de layout.
* `favicon.png` — Ícone do site (192×192). Pode ser referenciado no `<head>` de todas as páginas.
* As versões `*_512.png`, `*_256.png` e `*_128.png` permanecem no repositório caso haja necessidade de usar imagens menores de forma estática (por exemplo, em materiais impressos ou outros sistemas). No site, preferimos a versão maior com CSS para maior nitidez em diferentes dispositivos.

## ✨ Funcionalidades

* **Layout premium e responsivo** — O site foi projetado com base em boas práticas de design, utiliza fontes Poppins e Inter e adapta‑se a desktops, tablets e celulares.
* **Modo claro/escuro** — O script implementa um interruptor de tema no cabeçalho. O modo escolhido é guardado localmente para visitas futuras.
* **Animações suaves** — Elementos sobem e desvanecem conforme a página é rolada, utilizando Intersection Observer para melhor desempenho.
* **Atendimento integrado** — Um formulário do TomTicket direciona potenciais clientes ao time comercial e um botão de Help Desk direciona clientes existentes à central de suporte. Telefones e WhatsApp foram removidos para simplificar o fluxo e centralizar o atendimento.
* **Seções organizadas** — Hero, serviços, por que escolher a S&M, formulário de contato, rodapé e páginas de termos e privacidade. A antiga seção de clientes & parceiros foi removida para manter o foco nos serviços e benefícios.
* **SEO e redes sociais** — Metadados Open Graph e de descrição foram incluídos para que links compartilhados em redes mostrem título, descrição e imagem apropriados.

## 🏢 Dados institucionais
Este site foi pensado para separar o público interessado (potenciais clientes) dos clientes que já possuem contrato com a S&amp;M. A área de contato direciona novos clientes a um formulário integrado ao nosso Help&nbsp;Desk (TomTicket), enquanto o botão “Acessar Help&nbsp;Desk” leva clientes existentes diretamente à central de chamados.

Os dados institucionais básicos (como o endereço de e‑mail) ficam no rodapé:

| Campo          | Conteúdo                                                              |
|----------------|-----------------------------------------------------------------------|
| **Help&nbsp;Desk**    | [Acessar Help&nbsp;Desk](https://smconsultoriati.tomticket.com?account=4485952P29092025082411) |
| **E‑mail**      | [contato@smconsultoriati.com.br](mailto:contato@smconsultoriati.com.br) |

**Observação:** A identidade visual pode ser ajustada via CSS e substituindo as logos na pasta `/img`. O repositório inclui versões de todos os tamanhos para facilitar a personalização. As antigas informações de telefone e WhatsApp foram removidas do site para simplificar o contato e direcionar todos os atendimentos via Help&nbsp;Desk ou e‑mail.

## 🚀 Deploy automático via Netlify

Este projeto está configurado para deploy contínuo na Netlify. Qualquer commit enviado para o branch principal (`main`) no GitHub dispara um novo build e publicação. O certificado SSL é gerado automaticamente e o domínio `smconsultoriati.com.br` é atualizado.

## 🔧 Como personalizar

* **Cores e temas** — Ajuste as variáveis CSS no início de `style.css` para alterar a paleta de cores. Os modos claro e escuro utilizam a mesma base de variáveis.
* **Logos** — Substitua os arquivos na pasta `img/` mantendo os mesmos nomes para refletir novas versões. O site sempre buscará por `logo.png` no cabeçalho e rodapé, `logo-vertical.png` no hero e `favicon.png` no favicon.
* **Seção de clientes** — A antiga seção “Clientes & Parceiros” foi removida nesta versão. Caso deseje exibir logos ou depoimentos de parceiros e clientes, sugerimos criar uma página ou seção específica, mantendo o foco da homepage nos serviços e diferenciais da S&amp;M.
* **Páginas legais** — Os arquivos `privacidade.html` e `termos.html` podem ser atualizados para refletir novas obrigações ou políticas. Use as seções e a estrutura já presentes como base.

## 📃 Licença

Este repositório é de uso interno da **S&M Consultoria em TI**. A reprodução total ou parcial do conteúdo é permitida apenas com autorização expressa da empresa.

---

Desenvolvido com 💻 e ☕ pela equipe de TI da S&M Consultoria em TI.