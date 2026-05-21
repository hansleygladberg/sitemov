# CHANGELOG — MOV Produtora Site

---

## [Unreleased] — Repositioning index.html (2026-05-20)

Reposicionamento estratégico do site para elevar percepção de ticket de R$4k → R$10k+.
Mudanças cirúrgicas apenas em `index.html`. **Não publicado — aguarda revisão.**

### Alterações em `index.html`

1. **SEO / `<title>` e `<meta description>`**
   - Antes: "MOV Produtora — Vídeo Corporativo e Cobertura de Eventos em Fortaleza"
   - Depois: "MOV Produtora — Filmes Corporativos e Branded Content em Fortaleza"
   - Description reescrita com linguagem de posicionamento (não de serviço genérico)

2. **Hero — H1 e subtítulo**
   - H1 semântico atualizado para SEO: "Filmes Corporativos e Branded Content em Fortaleza"
   - Headline visual: "AUDIOVISUAL QUE POSICIONA MARCAS."
   - Subtítulo: foco em processo e resultado mensurável, não em lista de serviços

3. **Hero — stats**
   - Substituídos contadores genéricos por: `5+ Anos de direção | TV Conteúdo veiculado | NAC Marcas nacionais`

4. **Hero — CTA principal**
   - Texto: "Agendar conversa estratégica" (antes: "Solicitar Orçamento")
   - Mensagem WA atualizada para linguagem estratégica
   - TODO inserido para substituir por Calendly

5. **Studio — fotos**
   - Substituídas as 3 fotos de stock por fotos reais do estúdio/set: A7408251, A7408412, DSC00150

6. **Quem Somos — título e corpo**
   - Título: "ESTÚDIO DE DIREÇÃO AUDIOVISUAL." (antes: "QUEM SOMOS")
   - Textos reescritos em tom de estúdio premium com processo claro

7. **Clientes — hierarquia visual**
   - Grid dividido em dois tiers: Tier 1 (Gerdau, UniAteneu, Hospital São Raimundo, Ironberg) em destaque com `.lg`; Tier 2 em opacidade 45%

8. **Serviços — nova grade**
   - Título: "Direção Audiovisual para Marcas Corporativas"
   - 3 cards numerados: Filmes Institucionais / Branded Content / Direção de Conteúdo
   - Removidas referências a serviços de entrada (ex: vídeo para redes sociais avulso)

9. **Seções reordenadas + Depoimentos ocultados**
   - Depoimentos: `display:none` + `aria-hidden` — âncora preservada, conteúdo oculto
   - TODO inserido para substituir por depoimentos de gestores de Gerdau, UniAteneu, Ironberg, Hospital São Raimundo
   - Ordem: Depoimentos → **Sobre MOV → Diretor** (Sobre MOV agora vem antes do Diretor)
   - Sobre MOV: tags de segmentos (Indústria, Educação, Saúde, Tecnologia, Construção, Jurídico); texto foca em empresas de médio/grande porte
   - Diretor: reescrito em 3ª pessoa, menção explícita a Gerdau/UniAteneu/conteúdo em TV

10. **CTA final**
    - Título: "Agende uma Conversa Estratégica" (antes: "Solicite um Orçamento para Vídeo Corporativo em Fortaleza")
    - Subtítulo: "Vamos entender o seu projeto e propor a melhor solução audiovisual para o seu negócio."
    - Botão: "Agendar pelo WhatsApp" (antes: "Falar pelo WhatsApp")

11. **Mensagem WA global**
    - Todos os links WA do site atualizados para: "Olá, vim do site e quero agendar uma conversa estratégica sobre um projeto audiovisual."
    - Antes: "Olá, venho através do site e gostaria de um orçamento."

---

## [8230cef] — Storymaker: blog post + integração no site (2026-05-16)

- `blog/storymaker-cobertura-redes-sociais.html` — artigo sobre storymaker (7 min leitura)
- `img/blog-capas/storymaker-eventos.svg` — cover com gradiente Instagram
- `cobertura-de-eventos.html` — adicionado bloco "Add-on exclusivo: Storymaker"
- `blog/index.html` — card do post storymaker adicionado ao topo do grid

## [29a4c53] — Transmissão ao Vivo: página + blog post (2026-05-13)

- `transmissao-ao-vivo.html` — página de serviço completa
- `blog/transmissao-ao-vivo-eventos.html` — artigo (8 min leitura)
- `img/blog-capas/transmissao-ao-vivo.svg` — cover com acento vermelho ao vivo
- `index.html` — Transmissão ao Vivo adicionado ao dropdown de Serviços e footer
- `blog/index.html` — card adicionado ao topo do grid

## [cd2ea5b] — Versão em inglês /en/index.html (2026-05-13)

- `en/index.html` — tradução completa do index com SEO para mercado internacional
- `style.css` — adicionado `.lang-switch` (pill de idioma no header)
- `index.html` — toggle 🇺🇸 EN no header + hreflang pt-BR/en/x-default

---

### TODOs pendentes (pós-revisão)

- [ ] Substituir links WA por Calendly em Hero, Quem Somos, Sobre MOV e CTA
- [ ] Criar 3 depoimentos reais de gestores (Gerdau, UniAteneu, Ironberg, Hospital São Raimundo)
- [ ] Reativar seção `#depoimentos` quando depoimentos estiverem prontos
