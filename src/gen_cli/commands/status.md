# Comando `status`: Relatório de Progresso do Projeto

O comando `status` fornece uma visão geral do estado atual do projeto, lendo e interpretando a arquitetura de status federado, composta pelo agregador `src/docs/06-status.md` e pelos arquivos detalhados de cada Épico.

---

## Visão Geral

Use este comando para obter um resumo conciso do andamento do projeto (`gen status`) ou para mergulhar nos detalhes de um Épico específico (`gen status --epic <number>`). O comando foi projetado para ser eficiente, permitindo análises focadas e sincronização inteligente com a base de código.

---

## Modos de Operação

### `gen status`
-   **Leitura e Análise:** Lê o arquivo agregador `src/docs/06-status.md`.
-   **Relatório de Alto Nível:** Exibe o painel de acompanhamento, mostrando o status agregado de todos os Épicos e suas respectivas Partes.

### `gen status --epic <number>`
-   **Análise Focada:** Lê o arquivo de status do Épico especificado (ex: `src/docs/06-status-epico-0.md`).
-   **Relatório Detalhado:** Exibe todas as tarefas e passos contidos naquele Épico, permitindo uma análise granular do progresso.

### `gen status --sync`
-   **Sincronização Global:** Executa uma varredura completa do código-fonte e compara com **todos** os arquivos `06-status-epico-*.md`.
-   **Atualização em Lote:** Atualiza cada arquivo de Épico para refletir o estado real da implementação.
-   **Reconstrução do Agregador:** Após a sincronização dos arquivos detalhados, reconstrói o painel de alto nível em `src/docs/06-status.md`.
-   **Atualização da Árvore de Diretórios:** Gera uma nova versão do `src/docs/07-project-tree.md`.

### `gen status --sync --epic <number>`
-   **Sincronização Focada:** Executa uma varredura do código-fonte focada **apenas** nas tarefas do Épico especificado.
-   **Atualização Cirúrgica:** Atualiza somente o arquivo `06-status-epico-<number>.md`, tornando a operação significativamente mais rápida.
-   **Atualização da Árvore de Diretórios:** Também atualiza o `src/docs/07-project-tree.md`.

---

## Exemplo de Uso

Para obter a visão geral do progresso de todos os Épicos:
```bash
gen status
```

Para ver o status detalhado do Épico 0:
```bash
gen status --epic 0
```

Para sincronizar o status de **todos** os Épicos com o código-fonte:
```bash
gen status --sync
```

Para uma sincronização rápida e focada apenas no Épico 2:
```bash
gen status --sync --epic 2
```

---

## Prompt de alto nível para o agente de IA

Sua tarefa é atuar como um Gerente de Projeto Ágil. Você deve interpretar a requisição do usuário e executar uma das seguintes operações:

1.  **Status Geral:** Se nenhum argumento for fornecido, leia `src/docs/06-status.md` e apresente o painel de alto nível.
2.  **Status de Épico:** Se `--epic <number>` for fornecido, leia e apresente o conteúdo detalhado do arquivo `src/docs/06-status-epico-<number>.md`.
3.  **Sincronização (Global ou Focada):** Se a flag `--sync` for utilizada, analise o código-fonte (de forma global ou focada, dependendo da presença de `--epic`), atualize os arquivos `.md` relevantes para corresponder ao estado real das implementações, e por fim, execute o comando `tree -a -I 'node_modules|dist' . > src/docs/07-project-tree.md` para atualizar a árvore do projeto.
