# MOV Produtora — Landing Pages Task Board
> Arquivo de handoff entre agentes (Claude / Codex).
> **Regra:** Antes de iniciar qualquer etapa, leia este arquivo inteiro.
> Após concluir cada tarefa, atualize o status e deixe notas para o próximo agente.
> Nunca pule uma etapa sem marcar a anterior como concluída.

---

## ROLLBACK
Tag git criada antes de qualquer mudança: `v-pre-landings`
Para desfazer tudo: `git reset --hard v-pre-landings && git push --force origin main`

---

## CONTEXTO DO PROJETO
- Site estático HTML/CSS/JS em `/Users/hansley/DEV/sitemov`
- GitHub: hansleygladberg/sitemov → auto-deploy no Vercel
- Paleta: `--black:#0a0a0a` · `--white:#f5f5f0` · `--red:#d42b2b` · ouro `#C9A961`
- Tipografia: Bebas Neue (títulos) + DM Sans (corpo)
- Tom: sóbrio, cinematográfico, terceira pessoa institucional. Sem "!", sem emoji.
- CTA padrão: "Agendar conversa estratégica" (nunca "Solicite orçamento")
- WA real: `5585991986159`
- GA4: `G-0RPJ90GVQ8`
- **Não mexa em:** `index.html` (exceto footer), `style.css`, páginas existentes
- CSS de cada landing: inline no `<style>` próprio, não alterar style.css global

---

## PROGRESSO GERAL

| # | Etapa | Status | Agente |
|---|-------|--------|--------|
| 1 | `filme-institucional.html` | ✅ CONCLUÍDO | Claude |
| 2 | `eventos-corporativos.html` | ✅ CONCLUÍDO | Claude |
| 3 | `branded-content.html` | ✅ CONCLUÍDO | Claude |
| 4 | Footer `index.html` + `README-landings.md` | ✅ CONCLUÍDO | Claude |
| 5 | Commit e push | 🔄 EM ANDAMENTO | Claude |

---

## ETAPA 1 — `filme-institucional.html`
**Status:** 🔲 PENDENTE
**Arquivo:** `/Users/hansley/DEV/sitemov/filme-institucional.html`
**URL final:** `movprodutora.com.br/filme-institucional`

### Seções (ordem obrigatória)
1. **HERO** — H1: "Filmes institucionais para empresas que comunicam por valor." · Sub · 2 CTAs (rola para #form e #cases) · fundo escuro cinematográfico
2. **PROVA SOCIAL** — logos: Gerdau, UniAteneu, Hospital São Raimundo, Ironberg, Victa Engenharia
3. **POR QUE A MOV** — 3 colunas: Direção Estratégica / Processo Documentado / Equipe Especializada
4. **COMO TRABALHAMOS** — 5 passos numerados: Descoberta → Conceito → Roteiro → Produção → Entrega
5. **CASES** — 3 placeholders horizontais com `<!-- TODO: substituir por case real -->`
6. **FORMULÁRIO** (#form) — campos abaixo + UTM hidden fields + submit Formspree + sucesso inline
7. **RODAPÉ MINIMAL** — logo SVG + email + WA + link home

### Campos do formulário
- Nome completo (required)
- Empresa (required)
- Cargo (required)
- E-mail corporativo (required, type=email)
- WhatsApp (required, type=tel)
- Tipo de projeto (select: Filme institucional / Branded content / Cobertura de evento / Outro)
- Faixa de investimento (select: Até R$10k / R$10–25k / R$25–50k / R$50k+ / A definir)
- Mensagem (textarea, opcional)
- Hidden: utm_source, utm_medium, utm_campaign, utm_content, utm_term, landing_page="filme-institucional"

### SEO
```html
<title>Filme Institucional para Empresas | MOV Produtora Fortaleza</title>
<meta name="description" content="Direção audiovisual estratégica para empresas em Fortaleza e no Brasil. Filmes institucionais com método, processo claro e equipe especializada. Agende uma conversa.">
<link rel="canonical" href="https://www.movprodutora.com.br/filme-institucional">
```

### TODOs obrigatórios a deixar no HTML
- `<!-- TODO: substituir FORMSPREE_ID pelo endpoint real em https://formspree.io -->`
- `<!-- TODO: substituir AW-CONVERSION_ID/LABEL pelo ID real do Google Ads -->`
- `<!-- TODO: substituir cases placeholders por cases reais -->`

### Notas do agente
_(preencher após concluir)_

---

## ETAPA 2 — `eventos-corporativos.html`
**Status:** 🔲 PENDENTE (aguarda Etapa 1)
**Arquivo:** `/Users/hansley/DEV/sitemov/eventos-corporativos.html`
**URL final:** `movprodutora.com.br/eventos-corporativos`

### Seções (ordem obrigatória)
1. **HERO** — H1: "Direção audiovisual em tempo real para eventos corporativos." · destaque em "em tempo real" · 2 CTAs
2. **O QUE A MOV ENTREGA** — 3 blocos: Cobertura para redes / Filme em tempo real / Gravação completa
3. **PROVA SOCIAL** — frase grande: "Operações executadas em Fortaleza, Recife, São Paulo e outras capitais."
4. **POR QUE ENTREGA EM TEMPO REAL MUDA O JOGO** — 3 parágrafos corridos (texto fornecido no prompt original)
5. **EQUIPE LOCAL EM FORTALEZA** — H2: "Sua equipe não precisa cruzar o Brasil para cobrir seu evento." · CTA: "Conversar sobre seu evento"
6. **CASES** — 2 placeholders horizontais
7. **FORMULÁRIO** — campos da landing 1 + Cidade do evento (required) + Data prevista (date) + Tipo de entrega (checkboxes: Cobertura redes / Filme tempo real / Gravação completa / Tudo)
8. **RODAPÉ MINIMAL**

### WA message específica
`Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20de%20Eventos%20Corporativos%20da%20MOV%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`

### Notas do agente
_(preencher após concluir)_

---

## ETAPA 3 — `branded-content.html`
**Status:** 🔲 PENDENTE (aguarda Etapa 2)
**Arquivo:** `/Users/hansley/DEV/sitemov/branded-content.html`
**URL final:** `movprodutora.com.br/branded-content`

### Seções (ordem obrigatória)
1. **HERO** — H1: "Branded content para marcas que precisam de percepção — não só alcance." · 1 CTA
2. **BRANDED vs PUBLICIDADE TRADICIONAL** — 2 colunas comparativas (texto fornecido no prompt original)
3. **QUANDO FAZ SENTIDO** — 6 cenários em lista (lançamento de marca / aniversário / propósito / mídia paga / série LinkedIn/YT / comunicação interna)
4. **PROCESSO** — 4 etapas visuais: Imersão → Conceito autoral → Produção premium → Entrega multicanal
5. **PROVA SOCIAL** — logos Gerdau, UniAteneu, Ironberg
6. **FORMULÁRIO** — igual landing 1 mas tipo projeto adaptado: Vídeo de campanha / Série branded content / Filme de marca / Conteúdo mídia paga / Outro
7. **RODAPÉ MINIMAL**

### WA message específica
`Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20de%20Branded%20Content%20da%20MOV%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.`

### Notas do agente
_(preencher após concluir)_

---

## ETAPA 4 — Footer index.html + README-landings.md
**Status:** 🔲 PENDENTE (aguarda Etapas 1–3)

### index.html — coluna Serviços no footer
Adicionar após `<a href="transmissao-ao-vivo.html">Transmissão ao Vivo</a>`:
```html
<a href="filme-institucional.html">Filme Institucional</a>
<a href="eventos-corporativos.html">Eventos Corporativos</a>
<a href="branded-content.html">Branded Content</a>
```

### README-landings.md
Criar em `/Users/hansley/DEV/sitemov/README-landings.md` com:
- O que foi criado (lista dos 3 arquivos)
- TODOs pendentes de configuração manual
- Como fazer rollback

### Notas do agente
_(preencher após concluir)_

---

## ETAPA 5 — Commit e push
**Status:** 🔲 PENDENTE (aguarda Etapa 4)

```bash
git add filme-institucional.html eventos-corporativos.html branded-content.html \
        README-landings.md index.html .ai/LANDINGS_TASKS.md
git commit -m "add 3 landing pages com formulário, UTM tracking e conversão GA4"
git push origin main
```

Após push, atualizar tabela de progresso neste arquivo com ✅ em todas as etapas.

### Notas do agente
_(preencher após concluir)_

---

## SNIPPETS OBRIGATÓRIOS (copiar em cada landing)

### UTM capture — colocar no `<head>`
```html
<script>
(function(){
  const p=new URLSearchParams(window.location.search);
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
  .forEach(function(k){if(p.has(k))sessionStorage.setItem(k,p.get(k));});
})();
</script>
```

### Hidden inputs — dentro do `<form>`
```html
<input type="hidden" name="utm_source"    id="fi_utm_source">
<input type="hidden" name="utm_medium"    id="fi_utm_medium">
<input type="hidden" name="utm_campaign"  id="fi_utm_campaign">
<input type="hidden" name="utm_content"   id="fi_utm_content">
<input type="hidden" name="utm_term"      id="fi_utm_term">
<input type="hidden" name="landing_page"  value="LANDING_ID">
```
_(trocar prefixo `fi_` por `ev_` / `bc_` nas outras landings para evitar conflito de IDs)_

### Preencher UTMs antes do submit
```javascript
['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){
  var el = document.getElementById('fi_' + k); // ajustar prefixo
  if(el) el.value = sessionStorage.getItem(k) || '';
});
```

### Eventos GA4 + Google Ads no submit
```javascript
// GA4
gtag('event','generate_lead',{currency:'BRL',value:1.0,landing:'LANDING_ID'});
// Google Ads — TODO: substituir AW-CONVERSION_ID/LABEL
gtag('event','conversion',{'send_to':'AW-CONVERSION_ID/LABEL'});
```

### Evento WA click
```javascript
gtag('event','whatsapp_click',{landing:'LANDING_ID'});
```

---
_Última atualização: Claude · Etapa 0 (setup) concluída_
