# S&M Consultoria em TI – Site Institucional

Este repositório contém o código‑fonte oficial do site institucional da **S&M Consultoria em TI**, incluindo todas as páginas, estilos, scripts e ativos utilizados para apresentar a empresa ao público. O site foi totalmente renovado com um layout premium, responsivo, suporte a modo claro/escuro, animações de entrada e integração com o portal de suporte via TomTicket.

## 📁 Estrutura do Projeto

```
site_final/
├── index.html               # Página principal com herói, serviços, benefícios da S&M, formulário de contato e rodapé
├── style.css                # Folha de estilos premium (cores, temas, responsividade e animações)
├── script.js                # Lógica de alternância de tema (modo claro/escuro) e animações de scroll
├── privacidade.html         # Política de Privacidade
├── termos.html              # Termos de Uso
├── README.md                # Este documento
└── img/                     # Logos e ícones utilizados no site
    ├── logo.png            # Logo principal (horizontal, fundo transparente, 512 px de largura)
    ├── logo-alt.png        # Logo alternativa horizontal (variação de cores para fundos escuros)
    ├── logo-vertical.png   # Logo vertical utilizada na seção herói
    ├── logo-vertical-alt.png # Logo vertical alternativa
    ├── logo-footer.png     # Logo utilizada no rodapé
    ├── favicon.png         # Ícone do site (192×192)
    ├── facebook.png        # Ícone do Facebook
    ├── whatsapp.png        # Ícone do WhatsApp
    └── instagram.png       # Ícone do Instagram
```

### Recomendações de uso das logos

* `logo.png` — Versão principal da marca. Use nas áreas de cabeçalho e seções internas. Possui fundo transparente para se adaptar a diferentes temas. Redimensionamentos menores podem ser controlados via CSS (`height`/`width`).
* `logo-alt.png` — Versão horizontal alternativa, ideal para fundos muito escuros ou materiais em que a cor principal da marca não contraste adequadamente.
* `logo-vertical.png` — Versão vertical, utilizada na seção herói do site, reforçando a identidade visual em áreas de destaque.
* `logo-vertical-alt.png` — Versão vertical alternativa para variações de layout.
* `logo-footer.png` — Versão otimizada para o rodapé, com tamanho e contraste adequados para ser visualizada em temas claros ou escuros.
* `favicon.png` — Ícone do site (192×192). Deve ser referenciado no `<head>` de todas as páginas.
* As variações de tamanhos (_128 px_, _256 px_, _512 px_) foram removidas do projeto para simplificar a gestão de ativos; use CSS para dimensionar as logos conforme necessário. Mantivemos somente as versões essenciais listadas acima.

## ✨ Funcionalidades

* **Layout premium e responsivo** — O site foi projetado com base em boas práticas de design, utiliza fontes Poppins e Inter e adapta‑se a desktops, tablets e celulares.
* **Modo claro/escuro por padrão** — O script implementa um interruptor de tema no cabeçalho. O site inicia em modo escuro e a preferência do visitante é salva localmente para visitas futuras.
* **Animações suaves** — Elementos sobem e desvanecem conforme a página é rolada, utilizando Intersection Observer para melhor desempenho.
* **Atendimento integrado** — Um formulário do TomTicket direciona potenciais clientes ao time comercial e um link para Help Desk direciona clientes existentes à central de suporte. Telefones foram removidos do layout; um link de WhatsApp permanece no rodapé para contatos rápidos.
* **Seções organizadas** — Herói, serviços, por que escolher a S&M, formulário de contato, rodapé e páginas de termos e privacidade. A antiga seção de clientes & parceiros foi removida para manter o foco nos serviços e benefícios.
* **SEO e redes sociais** — Metadados Open Graph e de descrição foram incluídos para que links compartilhados em redes mostrem título, descrição e imagem apropriados.

## 🏢 Dados institucionais
Este site foi pensado para separar o público interessado (potenciais clientes) dos clientes que já possuem contrato com a S&amp;M. A área de contato direciona novos clientes a um formulário integrado ao nosso Help&nbsp;Desk (TomTicket) e disponibiliza o e‑mail comercial; o link “Acessar Help&nbsp;Desk” leva clientes existentes diretamente à central de chamados.

Os dados institucionais básicos podem ser consultados no rodapé ou nesta tabela:

| Campo          | Conteúdo                                                                  |
|----------------|---------------------------------------------------------------------------|
| **Help&nbsp;Desk**    | [Acessar Help&nbsp;Desk](https://suporte.smconsultoriati.com.br/)        |
| **E‑mail**      | [comercial@smconsultoriati.com.br](mailto:comercial@smconsultoriati.com.br) |

**Observação:** A identidade visual pode ser ajustada via CSS e substituindo as logos na pasta `/img`. Mantivemos apenas as versões essenciais para evitar redundância.

## 🚀 Deploy automático via Netlify

Este projeto está configurado para deploy contínuo na Netlify. Qualquer commit enviado para o branch principal (`main`) no GitHub dispara um novo build e publicação. O certificado SSL é gerado automaticamente e o domínio `smconsultoriati.com.br` é atualizado.

## 🔧 Como personalizar

* **Cores e temas** — Ajuste as variáveis CSS no início de `style.css` para alterar a paleta de cores. Os modos claro e escuro utilizam a mesma base de variáveis.
* **Logos** — Substitua os arquivos na pasta `img/` mantendo os mesmos nomes para refletir novas versões. O site sempre buscará por `logo.png` no cabeçalho e hero, `logo-footer.png` no rodapé e `favicon.png` no favicon. Evite adicionar variações de tamanho; utilize CSS para dimensionar.
* **Seção de clientes** — A antiga seção “Clientes & Parceiros” foi removida nesta versão. Caso deseje exibir logos ou depoimentos de parceiros e clientes, sugerimos criar uma página ou seção específica, mantendo o foco da homepage nos serviços e diferenciais da S&amp;M.
* **Páginas legais** — Os arquivos `privacidade.html` e `termos.html` foram estilizados para refletir a identidade visual do site, com cabeçalho, rodapé e chat integrado. Use as seções e a estrutura já presentes como base para futuras atualizações.

## 📃 Licença

Este repositório é de uso interno da **S&M Consultoria em TI**. A reprodução total ou parcial do conteúdo é permitida apenas com autorização expressa da empresa.

---

Desenvolvido com 💻 e ☕ pela equipe de TI da S&M Consultoria em TI.