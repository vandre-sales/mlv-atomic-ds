# Comando `roadmap`: Gerador de Análise de Projeto

O comando `roadmap` analisa a estrutura de diretórios e os arquivos do projeto para gerar um relatório de alto nível, descrevendo a arquitetura, os principais componentes e as possíveis áreas de melhoria.

---

## Visão Geral

Use este comando para obter uma visão geral instantânea do estado atual do projeto, ideal para onboarding de novos desenvolvedores ou para planejar os próximos passos de desenvolvimento.

---

## Uso

```bash
gen roadmap
```

---

## Argumentos

Este comando não requer argumentos. Ele analisa o projeto a partir do diretório atual.

---

## Exemplo de Uso

```bash
gen roadmap
```

---

## Exemplo de Saída

O resultado será um relatório em formato Markdown salvo em `src/docs/05-roadmap.md`, contendo seções como:
-   Visão Geral da Arquitetura
-   Principais Componentes e Serviços
-   Análise de Dependências
-   Sugestões de Refatoração
-   Pontos de Atenção (Débitos Técnicos)

## Prompt de alto nível para o agente de IA

---

Você deve ler detalhadamente o conteudo dos arquivos: 
- src/docs/01-project-vision.md
- src/docs/02-project-concept.md
- src/docs/03-perfect-flow.md
- src/docs/04-agile-framework.md

A partir da compreensão profunda desses documentos, você deve refatorar (se existir) ou criar um roadmap completo e ultra granular em `src/docs/05-roadmap-refact.md` levando em consideração o estado atual dos arquivos fonte do projeto e o fluxo esperado para a implementação total.

---


