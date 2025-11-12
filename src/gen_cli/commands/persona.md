# Comando `persona`: Gerenciamento Cognitivo da IA

O comando `persona` é um meta-comando de segurança que executa um reset cognitivo na IA, garantindo que ela retorne ao seu estado operacional padrão, alinhada com os objetivos do projeto.

---

## Visão Geral

Com o uso contínuo, a IA adota diferentes "personas de execução" e pode operar em modos especiais persistentes (como o Modo Hardcore). Este comando serve como um "interruptor de segurança" para limpar qualquer estado alterado e restaurar a IA à sua identidade fundamental de Guardião.

---

## Uso

Este comando é projetado para ser simples e direto, não necessitando de argumentos.

```bash
gen persona
```

---

## O Que Acontece Durante a Execução?

Ao invocar `gen persona`, você está instruindo a IA a realizar um "reboot mental" completo. O processo envolve:

1.  **Desativação de Modos Persistentes:** Como primeira medida de segurança, o comando força a desativação de quaisquer modos de operação especiais. Atualmente, isso significa que ele define o **Modo Absoluto Hardcore** como **INATIVO**, escrevendo 'stop' no arquivo de estado `.hardcore-status`.
2.  **Limpeza de Contexto:** A IA descarta a memória de curto prazo da conversa atual, eliminando qualquer viés ou "sangramento" de personas de execução anteriores.
3.  **Recarga da Identidade Central:** A IA relê forçadamente seus documentos de fundação para se realinhar com sua missão principal de "Mentor", "Guardião" e "Arquiteto". Os arquivos lidos são:
    -   `GEMINI.md`
    -   `src/docs/01-project-vision.md`
    -   `src/gen_cli/protocol-gen-cli.md`
4.  **Sincronização de Ferramentas:** A IA revisa seu manifesto orquestrador (`src/gen_cli/gen-cli.yml`) para garantir que sua compreensão de suas próprias capacidades está perfeitamente atualizada.

---

## Quando Usar?

Utilize este comando para garantir uma "lousa limpa" em momentos estratégicos:

*   **Para sair do Modo Hardcore:** Se você ativou o modo hardcore e deseja retornar ao modo de assistência padrão.
*   **Antes de iniciar uma tarefa complexa ou nova:** Para garantir que a IA está 100% focada e sem bagagem cognitiva.
*   **Se a IA parecer confusa ou inconsistente:** Um reset pode rapidamente corrigir qualquer desvio de comportamento.

---

## Exemplo de Saída

A IA confirmará a execução do reset com uma mensagem clara e direta:

```
Reset cognitivo concluído. Modo Hardcore desativado. Identidade como Arquiteto e Guardião recarregada. Pronto para a próxima instrução.
```
