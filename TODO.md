# TODO - Criação do Jogo de Colorir

## Passos
- [x] 1. Analisar arquivos existentes (SVGs, menu-jogos.html, CSS)
- [x] 2. Criar plano de implementação
- [x] 3. Obter aprovação do usuário
- [x] 4. Criar jogo-colorir.html com SVGs inline (carregados via fetch)
- [x] 5. Implementar paleta de 10 cores interativa
- [x] 6. Implementar lógica JavaScript de pintar
- [x] 7. Adicionar botão Limpar e troca de desenhos
- [x] 8. Testar e finalizar

## Resultado
✅ Arquivo `jogo-colorir.html` criado em `atividades da escola/`

### Funcionalidades implementadas:
- 🎨 **5 desenhos SVG** carregados inline via JavaScript (fetch)
- 🖌️ **Paleta com 10 cores**: preto, branco, vermelho, azul, verde, amarelo, rosa, roxo, laranja, marrom
- 👆 **Clique para pintar**: cada parte do SVG é clicável
- ✨ **Feedback visual**: hover com destaque azul, transição suave ao pintar
- 🔄 **Botão Limpar**: reseta o desenho atual para cinza claro
- 🖼️ **Troca de desenhos**: botões Desenho 1 a Desenho 5
- 🔙 **Voltar ao menu**: link para menu-jogos.html
- 📱 **Responsivo**: adapta para mobile
- 🎨 **Estilo visual**: glassmorphism, animações, decorações flutuantes (consistente com o projeto)

### Regras seguidas:
- ✅ SVG inline no DOM (não usa `<img>`)
- ✅ Cada parte do SVG tem evento de clique
- ✅ Fill inicial cinza claro (#f5f5f5)
- ✅ Cursor pointer nas áreas do SVG
- ✅ Cor selecionada destacada com borda e ✓

