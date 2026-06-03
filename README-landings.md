# Landing Pages — MOV Produtora

## O que foi criado

Três landing pages dedicadas para tráfego pago (Google Ads), cada uma com formulário de conversão e UTM tracking.

| Arquivo | URL | Público-alvo |
|---------|-----|--------------|
| `filme-institucional.html` | `/filme-institucional` | Gestores de marketing buscando produtora para vídeo corporativo/institucional |
| `eventos-corporativos.html` | `/eventos-corporativos` | Empresas que organizam eventos corporativos e precisam de cobertura audiovisual |
| `branded-content.html` | `/branded-content` | Gestores de marketing buscando produtora para campanha/branded content |

## O que cada landing inclui

- Hero com H1 otimizado para SEO e Google Ads
- Seções de prova social com logos de clientes (Gerdau, UniAteneu, Hospital São Raimundo, Ironberg, Victa)
- Formulário de conversão com submit via Formspree (sem recarregar a página)
- Mensagem de sucesso inline após envio
- UTM capture e passagem via hidden fields no formulário
- Eventos GA4 (`generate_lead`) e Google Ads (`conversion`) no submit
- Evento `whatsapp_click` no botão de WhatsApp
- SEO: `<title>`, `<meta description>`, `<link rel="canonical">`
- CSS 100% inline — não altera `style.css` global
- Responsivo: mobile-first (375 / 768 / 1024 / 1280px)
- Link para voltar ao site principal em todas as páginas

## TODOs — configuração manual necessária

### 1. Formspree (formulários)
Cada landing usa `action="https://formspree.io/f/FORMSPREE_ID"`.

**Como configurar:**
1. Acesse https://formspree.io e crie uma conta (ou faça login)
2. Crie 3 formulários: um para cada landing
3. Substitua `FORMSPREE_ID` pelo ID real em cada arquivo:
   - `filme-institucional.html` → buscar por `FORMSPREE_ID`
   - `eventos-corporativos.html` → buscar por `FORMSPREE_ID`
   - `branded-content.html` → buscar por `FORMSPREE_ID`

### 2. Google Ads — Conversion Tracking
Cada landing tem o trecho:
```javascript
gtag('event','conversion',{'send_to':'AW-CONVERSION_ID/LABEL'});
```

**Como configurar:**
1. No Google Ads, crie uma ação de conversão por landing page
2. Pegue o `AW-XXXXXXXXX/YYYYYYYY` de cada ação
3. Substitua `AW-CONVERSION_ID/LABEL` em cada arquivo

### 3. Cases — conteúdo real
Os 3 cases em `filme-institucional.html` são placeholders.
Buscar por `<!-- TODO: substituir` nos arquivos para localizar os pontos de substituição.

---

## Rollback

Tag git criada antes das mudanças: `v-pre-landings`

Para desfazer tudo e voltar ao estado anterior:
```bash
git reset --hard v-pre-landings
git push --force origin main
```

**Atenção:** `--force` sobrescreve o histórico remoto. Usar apenas se tiver certeza.

---

## Arquivo de handoff entre agentes

`.ai/LANDINGS_TASKS.md` — contém o estado de cada etapa e notas dos agentes.
Consultar esse arquivo antes de qualquer nova modificação nas landing pages.
