# S&M Consultoria em TI — Site Institucional (Versão Atual)

Este repositório contém o código-fonte completo do site institucional da **S&M Consultoria em TI**, desenvolvido com foco em identidade visual corporativa, responsividade, animações modernas e integração com o sistema de atendimento TomTicket.

Abaixo estão documentadas todas as estruturas, funcionalidades e decisões de design aplicadas até a versão atual.

---

## ✅ Estrutura do Projeto

```
/
├── index.html              # Página principal
├── privacidade.html        # Política de Privacidade
├── termos.html             # Termos de Uso
├── style.css               # Estilos globais + tema corporativo
├── script.js               # Animações, header shrink e parallax
├── /img                    # Logos, ícones e imagens utilizadas
└── README.md               # Este arquivo
```

---

## 🎨 Identidade Visual

O site segue um design corporativo premium, baseado em:

* Paleta de cores da S&M
* Fonte primária: **Inter**
* Fonte de títulos: **Poppins**
* Bordas arredondadas suaves (6–20px)
* Componentes com sombras leves premium
* Header fixo com comportamento *shrink*
* Hero com gradiente institucional e overlay escuro

---

## ✨ Funcionalidades Principais

### **1. Animações Modernas (IntersectionObserver)**

* Fade + slide suave
* Stagger automático por ordem dos elementos
* Leve parallax no Hero

### **2. Header Inteligente**

* Fixa no topo
* Reduz altura ao rolar (*shrink mode*)
* Navegação com contraste otimizado para fundo escuro

### **3. Seções Institucionais**

* Hero com CTA principal: *Solicitar Proposta*
* Serviços com ícones SVG otimizados
* Por que escolher a S&M (seção de argumentos)
* Contato com TomTicket + mensagem institucional
* Rodapé corporativo com logo, links e redes sociais

### **4. Integração com TomTicket**

* Widget de chat incorporado em todas as páginas
* Uso do parâmetro `account` para carregamento otimizado
* Formulário de contato via iframe estilizado externamente para harmonizar com o design do site
* Estrutura preparada para futura migração para API própria, se desejado

---

## 🧩 Estilização do Formulário (TomTicket)

Como o formulário do TomTicket roda dentro de um iframe, ajustes diretos no CSS interno não são possíveis. Porém, toda a estrutura externa foi estilizada para integração visual:

* Moldura com borda suave
* Sombra premium alinhada ao restante do site
* Altura mínima aumentada para boa legibilidade
* Espaçamento e harmonização dentro da `.contact-box`

Trechos como este garantem a integração:

```css
.contact-box iframe {
    width: 100% !important;
    min-height: 560px;
    margin-top: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
}
```

---

## 🖼️ Ícones e Imagens

* Ícones oficiais das redes sociais
* Logo em alta resolução
* Logo do rodapé com plano de fundo escurecido para melhor leitura

Todos os ícones sociais foram corrigidos para manter cores originais e hover premium.

---

## 🔧 Scripts Importantes

### **TomTicket Chat Loader**

Versão atual utilizada em todas as páginas:

```html
<script type="text/javascript">
var ttChatLoaderS = document.createElement('script');
document.tomticketChatLoaderScriptVersion = 2;
ttChatLoaderS.src = 'https://smconsultoriati.tomticket.com/scripts-chat/chat.min.js'
    + '?id=EP70093'
    + '&account=4485952P29092025082411'
    + '&autoOpen=0'
    + '&hideWhenOffline=0'
    + '&d=smconsultoriati'
    + '&ts=' + new Date().getTime()
    + '&ref=' + encodeURIComponent(document.URL);
document.body.appendChild(ttChatLoaderS);
</script>
```

---

## 🚀 Melhorias Recentes

* Ajustes finos no layout do Hero
* Correção do contraste e filtro dos ícones sociais
* Integração visual do iframe de contato
* Padronização dos botões no estilo "Solicitar Proposta"
* Correções no header claro/escuro
* Revisão do carregamento TomTicket (inclusão de `account`)

---

## 📝 Próximos Passos Possíveis

* Migrar formulário para integração própria via API TomTicket (form nativo)
* Criar páginas adicionais (cases, clientes, SLA, etc.)
* Otimizar imagens via WebP
* Implementar lazy load para imagens pesadas

---

## 📌 Autor

Desenvolvido por **Marciel (S&M Consultoria em TI)** com refinamentos visuais e técnicos realizados nesta versão.

---

## © Direitos Autorais e Licenciamento

Este repositório contém o código do site institucional da **S&M Consultoria em TI**.

Todo o conteúdo — incluindo design, layout, identidade visual, CSS, imagens, ícones, animações e demais elementos — é de propriedade exclusiva da S&M Consultoria em TI.

**Não é permitida a reprodução, redistribuição, modificação ou uso comercial deste conteúdo sem autorização prévia por escrito.**

O repositório está público apenas para fins de deploy (Netlify, CI/CD ou hospedagem estática). Qualquer uso não autorizado poderá resultar em ação legal conforme legislação vigente.

Se quiser, posso gerar também uma versão em inglês, ou uma versão mais técnica voltada para desenvolvedores. Basta pedir!
