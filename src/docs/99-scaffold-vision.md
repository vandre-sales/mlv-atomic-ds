```
src/
├── app/
│   │
│   ├── core/           # ÉPICO 0 & 4: FUNDAÇÃO (LEIS 1, 2) E GUARDIÃO (LEI 4)
│   │   ├── services/         # Lei 1: Pipeline de Microsserviços (Motor)
│   │   │   ├── 01-persistence.service.ts
│   │   │   ├── 02-token-state.service.ts
│   │   │   ├── 03-palette-generation.service.ts
│   │   │   ├── 04-token-resolver.service.ts
│   │   │   ├── 05-token-orchestrator.service.ts
│   │   │   ├── 06-css-generator.service.ts
│   │   │   ├── 07-style-injector.service.ts
│   │   │   └── 08-design-token.service.ts
│   │   │
│   │   ├── context/        # Lei 2: Serviços de Contexto Global
│   │   │   ├── theme.service.ts
│   │   │   ├── responsiveness.service.ts
│   │   │   └── i18n.service.ts
│   │   │
│   │   ├── data/           # O "DNA" (Fonte da Verdade dos Tokens)
│   │   │   ├── contracts/
│   │   │   │   └── design-tokens.interface.ts
│   │   │   ├── primitives/
│   │   │   ├── semantics/
│   │   │   └── default-tokens.ts
│   │   │
│   │   └── intelligence/   # Lei 4: Auditoria e Entrega
│   │       ├── accessibility.service.ts
│   │       └── export.service.ts
│   │
│   ├── components/       # DUALIDADE: FERRAMENTA vs. PRODUTO
│   │   │
│   │   ├── design/         # ÉPICO 2: O "PRODUTO" (BIBLIOTECA ATÔMICA - LEI 3)
│   │   │   ├── atoms/
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.component.ts
│   │   │   │   │   ├── button.component.html
│   │   │   │   │   └── button.component.spec.ts
│   │   │   │   ├── icon/
│   │   │   │   │   ├── icon.component.ts
│   │   │   │   │   ├── icon.component.html
│   │   │   │   │   └── icon.component.spec.ts
│   │   │   │   ├── label/
│   │   │   │   │   ├── label.component.ts
│   │   │   │   │   ├── label.component.html
│   │   │   │   │   └── label.component.spec.ts
│   │   │   │   ├── input/
│   │   │   │   │   ├── input.component.ts
│   │   │   │   │   ├── input.component.html
│   │   │   │   │   └── input.component.spec.ts
│   │   │   │   ├── checkbox/
│   │   │   │   │   ├── checkbox.component.ts
│   │   │   │   │   ├── checkbox.component.html
│   │   │   │   │   └── checkbox.component.spec.ts
│   │   │   │   ├── radio/
│   │   │   │   │   ├── radio.component.ts
│   │   │   │   │   ├── radio.component.html
│   │   │   │   │   └── radio.component.spec.ts
│   │   │   │   ├── avatar/
│   │   │   │   │   ├── avatar.component.ts
│   │   │   │   │   ├── avatar.component.html
│   │   │   │   │   └── avatar.component.spec.ts
│   │   │   │   ├── badge/
│   │   │   │   │   ├── badge.component.ts
│   │   │   │   │   ├── badge.component.html
│   │   │   │   │   └── badge.component.spec.ts
│   │   │   │   └── spinner/
│   │   │   │       ├── spinner.component.ts
│   │   │   │       ├── spinner.component.html
│   │   │   │       └── spinner.component.spec.ts
│   │   │   │
│   │   │   ├── molecules/
│   │   │   │   ├── input-group/
│   │   │   │   │   ├── input-group.component.ts
│   │   │   │   │   ├── input-group.component.html
│   │   │   │   │   └── input-group.component.spec.ts
│   │   │   │   ├── card/
│   │   │   │   │   ├── card.component.ts
│   │   │   │   │   ├── card.component.html
│   │   │   │   │   └── card.component.spec.ts
│   │   │   │   ├── form-field/
│   │   │   │   │   ├── form-field.component.ts
│   │   │   │   │   ├── form-field.component.html
│   │   │   │   │   └── form-field.component.spec.ts
│   │   │   │   ├── dropdown/
│   │   │   │   │   ├── dropdown.component.ts
│   │   │   │   │   ├── dropdown.component.html
│   │   │   │   │   └── dropdown.component.spec.ts
│   │   │   │   ├── modal-header/
│   │   │   │   │   ├── modal-header.component.ts
│   │   │   │   │   ├── modal-header.component.html
│   │   │   │   │   └── modal-header.component.spec.ts
│   │   │   │   ├── table-row/
│   │   │   │   │   ├── table-row.component.ts
│   │   │   │   │   ├── table-row.component.html
│   │   │   │   │   └── table-row.component.spec.ts
│   │   │   │   ├── stepper/
│   │   │   │   │   ├── stepper.component.ts
│   │   │   │   │   ├── stepper.component.html
│   │   │   │   │   └── stepper.component.spec.ts
│   │   │   │   ├── typography-card/
│   │   │   │   │   ├── typography-card.component.ts
│   │   │   │   │   ├── typography-card.component.html
│   │   │   │   │   └── typography-card.component.spec.ts
│   │   │   │   ├── search-form/
│   │   │   │   │   ├── search-form.component.ts
│   │   │   │   │   ├── search-form.component.html
│   │   │   │   │   └── search-form.component.spec.ts
│   │   │   │   └── alert/
│   │   │   │       ├── alert.component.ts
│   │   │   │       ├── alert.component.html
│   │   │   │       └── alert.component.spec.ts
│   │   │   │
│   │   │   └── organisms/
│   │   │       ├── header/
│   │   │       │   ├── header.component.ts
│   │   │       │   ├── header.component.html
│   │   │       │   └── header.component.spec.ts
│   │   │       ├── footer/
│   │   │       │   ├── footer.component.ts
│   │   │       │   ├── footer.component.html
│   │   │       │   └── footer.component.spec.ts
│   │   │       ├── sidebar/
│   │   │       │   ├── sidebar.component.ts
│   │   │       │   ├── sidebar.component.html
│   │   │       │   └── sidebar.component.spec.ts
│   │   │       ├── modal/
│   │   │       │   ├── modal.component.ts
│   │   │       │   ├── modal.component.html
│   │   │       │   └── modal.component.spec.ts
│   │   │       ├── table/
│   │   │       │   ├── table.component.ts
│   │   │       │   ├── table.component.html
│   │   │       │   └── table.component.spec.ts
│   │   │       ├── form/
│   │   │       │   ├── form.component.ts
│   │   │       │   ├── form.component.html
│   │   │       │   └── form.component.spec.ts
│   │   │       └── navbar/
│   │   │           ├── navbar.component.ts
│   │   │           ├── navbar.component.html
│   │   │           └── navbar.component.spec.ts
│   │   │
│   │   └── tools/          # ÉPICO 1: A "FERRAMENTA" (LABORATÓRIOS)
│   │       ├── editors/    # (ex: color-editor, visual-color-editor)
│   │       └── popovers/   # (ex: editor-popover)
│   │
│   ├── features/         # PÁGINAS E TEMPLATES (MONTAGEM)
│   │   │
│   │   ├── layouts/        # Antigos "Templates"
│   │   │   ├── dashboard-layout/
│   │   │   │   ├── dashboard-layout.component.ts
│   │   │   │   ├── dashboard-layout.component.html
│   │   │   │   └── dashboard-layout.component.spec.ts
│   │   │   ├── auth-layout/
│   │   │   │   ├── auth-layout.component.ts
│   │   │   │   ├── auth-layout.component.html
│   │   │   │   └── auth-layout.component.spec.ts
│   │   │   └── modal-layout/
│   │   │       ├── modal-layout.component.ts
│   │   │       ├── modal-layout.component.html
│   │   │       └── modal-layout.component.spec.ts
│   │   │
│   │   └── pages/          # Antigas "Pages" + Páginas dos Laboratórios
│   │       ├── home/
│   │       │   ├── home.component.ts
│   │       │   ├── home.component.html
│   │       │   └── home.component.spec.ts
│   │       ├── login/
│   │       │   ├── login.component.ts
│   │       │   ├── login.component.html
│   │       │   └── login.component.spec.ts
│   │       ├── dashboard/
│   │       │   ├── dashboard.component.ts
│   │       │   ├── dashboard.component.html
│   │       │   └── dashboard.component.spec.ts
│   │       ├── settings/
│   │       │   ├── settings.component.ts
│   │       │   ├── settings.component.html
│   │       │   └── settings.component.spec.ts
│   │       ├── profile/
│   │       │   ├── profile.component.ts
│   │       │   ├── profile.component.html
│   │       │   └── profile.component.spec.ts
│   │       │
│   │       ├── primitive-lab/    # Página de visualização de Primitivos
│   │       ├── semantic-lab/     # Página de visualização de Semânticos
│   │       ├── typography-lab/   # Página de visualização de Tipografia
│   │       └── a11y-audit/       # Página de Auditoria de Acessibilidade
│   │
│   ├── shared/           # MÓDULOS, DIRETIVAS, PIPES TRANSVERSAIS
│   │   ├── directives/     # (ex: editable-token.directive.ts)
│   │   ├── pipes/
│   │   ├── utils/
│   │   └── guards/
│   │       └── token-edit-guard.service.ts
│   │
│   ├── app.component.ts
│   ├── app.config.ts     # Configuração (APP_INITIALIZER para I18n)
│   └── app.routes.ts
│
├── assets/
│   ├── i18n/
│   │   ├── en-US.json
│   │   └── pt-BR.json
│   │
│   ├── markdown_collection/
│   │   └── (Arquivos .md)
│   │
│   ├── misc/
│   │   └── (Outros assets)
│   │
│   └── (Outros assets, ex: fonts, icons)
│
├── styles/
│   └── tailwind.css      # Ponto de entrada do Tailwind (@tailwind)
│
└── tailwind.config.ts      # Configuração do Tailwind
```