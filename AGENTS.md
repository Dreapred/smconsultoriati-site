# AGENTS.md – Diretrizes do Projeto S&M Consultoria em TI

Documento oficial de orientação para todos os agentes/automações que trabalham no repositório do site da **S&M Consultoria em TI**.

---

## 🎯 Propósito do Agente

Manter consistência visual, técnica e operacional em todo o código do site, garantindo que cada ajuste respeite:

* Identidade visual premium da S&M
* Padrões de UX/UI já aprovados
* Estrutura limpa, organizada e escalável
* Comportamentos consistentes entre todas as páginas

---

## 🖌 Identidade Visual Oficial

### **Cores principais:**

* Azul primário: `#00ABFF`
* Azul escuro/header: `#1B1E22`
* Cinza claro premium: `#E8E8E8`
* Cinza texto neutro: `#33303E`
* Cinza suave: `#ABB4C2`
* Branco: `#FFFFFF`

### **Auditoria de Cores — Obrigatória**
Sempre que editar estilos ou elementos visuais, valide que todas as cores pertencem à paleta oficial acima. Qualquer cor fora dessa paleta deve ser substituída automaticamente, inclusive sombras que devem respeitar a configuração premium: `rgba(0,0,0,0.08)`.

### **Sombra padrão:**

```
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

---

## 🧩 Regras Gerais Para o Código

* Não duplicar containers ou blocos com sombra.
* Utilizar **um único container principal** em formulários e seções de destaque.
* Bordas padrão: `border-radius: 16px;`
* Padding recomendado: `32px` em desktop, `20px` em mobile.
* Sempre alinhar elementos centrais ao centro.
* Evitar espaçamentos grandes demais acima do header.
* Garantir responsividade em todos os breakpoints (min 360px).

### **Padrões Estruturais**
- Todos os formulários devem ficar dentro de um único container principal, sem caixas duplicadas ou sombras repetidas.
- Todos os rodapés devem ser idênticos entre si.
- Não adicionar elementos novos em páginas já prontas sem solicitação explícita.
- Sempre seguir os textos, espaçamentos e hierarquias aprovados.

### **Boas Práticas de UX**
- Itens informativos (como horário de atendimento) devem ir no rodapé, nunca no menu, Hero ou CTA.
- Informações de horário devem aparecer também no chat offline, mas não no chat online.
- Toda mensagem deve ser escrita com clareza, profissionalismo e sem exageros.

---

## 📝 Padrões para Formulários (inclusive TomTicket)

* Inputs com:

```
border: 1px solid #D0D4DC;
border-radius: 10px;
padding: 10px 14px;
```

* Labels com `font-weight: 600;`
* O formulário deve sempre estar dentro de **uma única caixa premium**.
* Nunca colocar formulários dentro de múltiplos balões, cards ou boxes duplicados.

---

## 💬 Padrões para Chat (TomTicket)

### **Frases oficiais:**

* Online: **"Atendimento Online"**
* Offline: **"Atendimento Offline"**

### **Cores do chat:**

#### Atendente:

* Fundo: `#F8FAFC`
* Texto: `#1B1E22`
* Nome: `#005499`

#### Cliente:

* Fundo: `#E8E8E8`
* Texto: `#33303E`
* Nome: `#0077CC`

#### Botão principal:

* Fundo: `#00ABFF`
* Texto: `#FFFFFF`

---

## 📐 Diretrizes de Layout

* Evitar caixas aninhadas.
* Usar espaçamentos consistentes acima e abaixo de cada seção.
* Não repetir elementos visuais sem necessidade.
* Respeitar hierarquia: título → subtítulo → conteúdo.
* Elementos importantes devem vir antes da dobra em mobile.

### **Hero — Informações Proibidas**
- Não inserir textos como “24/7”, “atendimento contínuo”, “suporte 24 horas” ou qualquer variação disso.
- A S&M não opera 24/7; portanto, essas informações são proibidas no Hero e em qualquer parte do site.

---

## 📂 Estrutura Recomendada para Ajustes

Sempre verificar se:

1. A seção tem apenas um container principal.
2. Não há sombras duplicadas.
3. As cores seguem a paleta oficial.
4. O comportamento em mobile reproduz fielmente a versão premium.
5. Links e CTA seguem o estilo do site.

## 🔖 Rodapé — Diretriz Oficial
- O rodapé deve ser idêntico em todas as páginas: Home, Contato, Termos e Privacidade.
- Deve conter obrigatoriamente: telefone oficial e e-mail oficial **contato@smconsultoriati.com.br**.
- Cores e estilos devem ser os mesmos da Home: texto `#ABB4C2`, fundo `#1B1E22` (ou cor definida atualmente para o rodapé), sem caixas adicionais e sem sombras extras.
- A estrutura HTML deve ser replicada sem modificações ou variações.

---

## 📣 Comportamento do Agente

Sempre que alterar código, o agente deve:

* Garantir consistência visual.
* Seguir as cores oficiais.
* Utilizar apenas uma caixa principal por seção.
* Remover redundâncias e containers desnecessários.
* Manter textos revisados e claros.
* Priorizar desempenho e organização.
* Respeitar diretrizes de UX aplicadas a consultorias de TI.

---

## 🧭 Objetivo Geral

Manter o site da S&M Consultoria em TI sempre:

* Premium
* Coerente
* Leve
* Profissional
* Legível
* Adequado à identidade da marca

---

Se novas regras forem definidas ou seções forem adicionadas, este arquivo deve ser atualizado para manter o alinhamento entre o comportamento dos agentes e o padrão visual/técnico da S&M.

---

## 🚫 Atualizações Recentes: Regras Obrigatórias

### **Remoção de Informações Não Autorizadas**

* É proibido inserir textos como **“24/7”**, “suporte 24 horas”, “atendimento contínuo” ou qualquer variação.
* Esses textos não devem aparecer no Hero, no menu, no rodapé, em seções internas ou em componentes reutilizáveis.

### **Botões com Gradiente – Padrão Oficial**

Todos os botões do tipo CTA (como “Ver Serviços”) devem usar exclusivamente o gradiente:

```
background: linear-gradient(90deg, #00ABFF 0%, #0077CC 100%);
color: #FFFFFF;
border-radius: 10px;
font-weight: 600;
```

Nenhum botão deve ser convertido para cor sólida sem autorização.

### **Padronização do Header**

* Todas as páginas devem utilizar o **mesmo header da Home**, incluindo gradiente, menu completo, logo, sombras e comportamento responsivo.
* Páginas internas (Termos e Privacidade) não podem ter header reduzido ou estilos diferentes.

### **Padronização do Rodapé**

* O rodapé deve ser **idêntico em todas as páginas**, com os seguintes itens obrigatórios:

  * Telefone oficial
  * E-mail oficial: **[contato@smconsultoriati.com.br](mailto:contato@smconsultoriati.com.br)**
  * Horário de atendimento: **Seg a Sex, das 08h às 12h e das 13h30 às 18h**
  * Redes sociais
  * Links padrão (Política de Privacidade e Termos de Uso)
* Estrutura HTML, cores, espaçamentos e fontes devem ser clonados da Home.

### **Auditoria Visual Obrigatória**

Sempre validar que **NENHUM** e
