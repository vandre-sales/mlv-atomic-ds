# Tutorial 004: Refatorando a Estrutura de Diretórios para o Scaffold Arquitetural (Versão Auditada)

**ID:** 004
**Autor:** Guardião (Agente de IA)
**Data (UTC):** 2024-05-24T18:05:00Z
**Status:** Revisado e Aprovado

---

## 1. Objetivo

Este tutorial detalha o processo **seguro e atômico** para refatorar a estrutura de diretórios do projeto, migrando de um modelo técnico genérico para uma arquitetura limpa e orientada por domínio, conforme definido no `src/docs/99-scaffold.md`. Esta versão foi revisada após uma auditoria de nível militar para eliminar pontos de falha.

---

## 2. A Inteligência por Trás da Mudança

A estrutura de diretórios é a manifestação física da arquitetura. A mudança de uma organização por *tipo técnico* para uma por *domínio de responsabilidade* torna a arquitetura explícita, auto-documentada e mais fácil de escalar.

-   **DE (Técnico):** `/core/services`, `/core/models` -> Oculta o propósito.
-   **PARA (Domínio):** `/core/services` (Lei 1), `/core/context` (Lei 2), `/core/data` -> Revela o propósito.

---

## 3. Protocolo de Refatoração Atômica (Método IDE)

A auditoria identificou que a execução de múltiplos comandos manuais (`mv`, `mkdir`, `rm`) é um processo frágil e não-atômico. A abordagem superior e recomendada é utilizar a funcionalidade de movimentação de arquivos do próprio IDE (Visual Studio Code, etc.), que trata a operação como uma transação e oferece a refatoração automática dos caminhos de importação.

### Passo 1: Criar a Nova Estrutura de Pastas de Domínio

No explorador de arquivos do seu IDE, crie a nova estrutura de pastas dentro de `src/app/core/`:

```
/src/app/core/
├── context/
├── data/
│   ├── contracts/
│   ├── primitives/
│   └── semantics/
└── intelligence/
```

### Passo 2: Mover o Contrato de Dados (Interfaces)

1.  **Arraste e Solte:** Arraste o arquivo `src/app/core/models/design-tokens.interface.ts` e solte-o na nova pasta `src/app/core/data/contracts/`.
2.  **Confirme a Refatoração:** O IDE irá detectar a movimentação e perguntar se deve atualizar as importações. **Confirme esta ação.** O IDE irá escanear o projeto e corrigir automaticamente todos os `import` que apontavam para o local antigo.
3.  **Delete a Pasta Antiga:** Após a movimentação, a pasta `src/app/core/models` estará vazia. Delete-a.

### Passo 3: Mover os Arquivos de Sementes (Tokens)

1.  **Selecione e Mova:** Selecione todos os arquivos de tokens (`primitive-base-colors.ts`, `primitive-spacing.ts`, etc.) dentro de `src/app/core/tokens/`.
2.  **Arraste e Solte:** Arraste os arquivos selecionados para a nova pasta `src/app/core/data/primitives/`.
3.  **Confirme a Refatoração:** Novamente, permita que o IDE atualize automaticamente os caminhos de importação.
4.  **Delete a Pasta Antiga:** Após a movimentação, a pasta `src/app/core/tokens` estará vazia. Delete-a.

### Passo 4: Renomear os Serviços do Motor de Estilo (Opcional, mas Recomendado)

Para tornar o fluxo de dados explícito, renomeie os serviços da Lei 1 com prefixos numéricos. Faça isso **um arquivo de cada vez** para garantir que o IDE processe a refatoração de importações corretamente a cada renomeação.

1.  **Clique com o botão direito** em `persistence.service.ts` -> `Rename`.
2.  **Digite o novo nome:** `01-persistence.service.ts`.
3.  **Pressione Enter.** O IDE irá renomear o arquivo e atualizar todas as suas importações no projeto.
4.  Repita o processo para os arquivos `.spec.ts` correspondentes.
5.  Faça o mesmo para os outros serviços do motor de estilo (`token-state.service` -> `02-token-state.service`, etc.).

### Passo 5: Verificação Final

Após concluir todas as movimentações e renomeações, execute uma compilação para garantir que a refatoração automática do IDE não deixou nenhuma importação para trás.

```bash
ng build
```

Se a compilação for bem-sucedida, a refatoração está completa e a integridade do projeto foi mantida.

---

## 4. Conclusão

A utilização das ferramentas de refatoração atômica do IDE, em vez de comandos manuais, elimina o principal risco de erro humano e garante que a atualização da estrutura de diretórios seja uma operação segura e consistente. Esta abordagem é o método padrão a ser seguido para futuras refatorações de estrutura.
