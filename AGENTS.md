# AGENTS.md – Diretrizes do Projeto S&M Consultoria em TI

Documento oficial de orientação para todos os agentes/automações que trabalham no repositório do site da **S&M Consultoria em TI**.

---

## 🎯 Propósito do Agente
Manter consistência visual, técnica e operacional em todo o código do site, garantindo que cada ajuste respeite:
- Identidade visual premium da S&M
- Padrões de UX/UI já aprovados
- Estrutura limpa, organizada e escalável
- Comportamentos consistentes entre todas as páginas

---

## 🖌 Identidade Visual Oficial
### **Cores principais:**
- Azul primário: `#00ABFF`
- Azul escuro/header: `#1B1E22`
- Cinza claro premium: `#E8E8E8`
- Cinza texto neutro: `#33303E`
- Cinza suave: `#ABB4C2`
- Branco: `#FFFFFF`

### **Sombra padrão:**
```
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
```

---

## 🧩 Regras Gerais Para o Código
- Não duplicar containers ou blocos com sombra.
- Utilizar **um único container principal** em formulários e seções de destaque.
- Bordas padrão: `border-radius: 16px;`
- Padding recomendado: `32px` em desktop, `20px` em mobile.
- Sempre alinhar elementos centrais ao centro.
- Evitar espaçamentos grandes demais acima do header.
- Garantir responsividade em todos os breakpoints (min 360px).

---

## 📝 Padrões para Formulários (inclusive TomTicket)
- Inputs com:
```
border: 1px solid #D0D4DC;
border-radius: 10px;
padding: 10px 14px;
```
- Labels com `font-weight: 600;`
- O formulário deve sempre estar dentro de **uma única caixa premium**.
- Nunca colocar formulários dentro de múltiplos balões, cards ou boxes duplicados.

---

## 💬 Padrões para Chat (TomTicket)
### **Frases oficiais:**
- Online: **"Atendimento Online"**
- Offline: **"Atendimento Offline"**

### **Cores do chat:**
#### Atendente:
- Fundo: `#F8FAFC`
- Texto: `#1B1E22`
- Nome: `#005499`

#### Cliente:
- Fundo: `#E8E8E8`
- Texto: `#33303E`
- Nome: `#0077CC`

#### Botão principal:
- Fundo: `#00ABFF`
- Texto: `#FFFFFF`

---

## 📐 Diretrizes de Layout
- Evitar caixas aninhadas.
- Usar espaçamentos consistentes acima e abaixo de cada seção.
- Não repetir elementos visuais sem necessidade.
- Respeitar hierarquia: título → subtítulo → conteúdo.
- Elementos importantes devem vir antes da dobra em mobile.

---

## 📂 Estrutura Recomendada para Ajustes
Sempre verificar se:
1. A seção tem apenas um container principal.
2. Não há sombras duplicadas.
3. As cores seguem a paleta oficial.
4. O comportamento em mobile reproduz fielmente a versão premium.
5. Links e CTA seguem o estilo do site.

---

## 📣 Comportamento do Agente
Sempre que alterar código, o agente deve:
- Garantir consistência visual.
- Seguir as cores oficiais.
- Utilizar apenas uma caixa principal por seção.
- Remover redundâncias e containers desnecessários.
- Manter textos revisados e claros.
- Priorizar desempenho e organização.
- Respeitar diretrizes de UX aplicadas a consultorias de TI.

---

## 🧭 Objetivo Geral
Manter o site da S&M Consultoria em TI sempre:
- Premium
- Coerente
- Leve
- Profissional
- Legível
- Adequado à identidade da marca

---

Se novas regras forem definidas ou seções forem adicionadas, este arquivo deve ser atualizado para manter o alinhamento entre o comportamento dos agentes e o padrão visual/técnico da S&M.
