# SKY.OS — João Aduílio

Site pessoal midnight tech / gamer em HTML, CSS e JavaScript puro. Painéis escuros, iluminação roxa com detalhes verdes e azuis, retrato em pixel art e ficha de personagem. Sem frameworks, pacotes ou etapa de build.

## Abrir

Abra `index.html` diretamente no navegador. Também funciona com o Live Server do VS Code.

## Personalizar

- **Dados:** edite `SITE_DATA` no começo de `script.js`: perfil, XP, habilidades, quests, projetos, estatísticas, histórico e contatos.
- **Foto:** o retrato existente em `assets/profile.jpg` já está integrado ao cartão. Para trocar a imagem, substitua esse arquivo ou ajuste `SITE_DATA.profile.image`. O monograma só aparece se a foto falhar ao carregar.
- **Links:** substitua `url: null` nos projetos e contatos por endereços completos, como `https://github.com/seu-usuario` ou `mailto:seu@email.com`. Enquanto forem `null`, os botões mostram detalhes ou uma mensagem clara.
- **Cores e fontes:** ajuste as variáveis em `:root` no início de `style.css`. A fonte Silkscreen está incluída localmente, com licença em `assets/FONT-LICENSE.txt`.
- **Textos fixos e marca:** edite `index.html`. Os títulos das seções e a marca no menu/rodapé ficam nesse arquivo.
- **Projetos:** os três previews são composições de interface locais e provisórias. As tecnologias e os projetos adicionais são exemplos editáveis.
- **Quests:** use `IN PROGRESS`, `LOCKED` ou `COMPLETED` em `status`; edite `progress` de 0 a 100.

Os níveis, contadores e datas são exemplos manuais; não são métricas sincronizadas com GitHub nem avaliações objetivas.

## Interações

- Introdução de aproximadamente 2 segundos para entrar no mundo do jogador, exibida uma vez por sessão; qualquer tecla ou clique pula a introdução.
- Menu mobile, indicação da seção ativa e scroll suave.
- Filtros de projetos e detalhes em diálogo acessível (Escape fecha).
- Preferência `prefers-reduced-motion` respeitada por padrão. O controle **FX ON/OFF** permite escolher explicitamente se deseja animações; essa escolha fica salva apenas no navegador. Se os efeitos estiverem desligados por uma preferência do sistema, use **FX ON** para vê-los.
- Fundo em seis camadas independentes: estrelas distantes (54 s; rotas individuais de 28-36 s), pixels intermediários (17-25 s), luzes azul/violeta (21/27 s), grade técnica (36 s) e partículas próximas (12-18 s). Tres fragmentos de HUD (um no celular) completam o ambiente. Os movimentos alternam suavemente, sem saltos entre ciclos.
- Parallax de até 28 px apenas com mouse no desktop. São 47 partículas no desktop e 22 no celular; a versão mobile remove o glow das partículas próximas e reduz as superfícies de luz. Gradientes radiais criam luz difusa sem filtros de blur ou canvas.
- Barras e entradas animam ao aparecer na tela; todos os efeitos pausam quando a aba fica oculta. O controle **FX ON/OFF** também abrange as cinco camadas.
- Easter egg: `↑ ↑ ↓ ↓ ← → ← → B A`, ou três cliques rápidos em `[ ✦ ]` no rodapé. Revela o modo Overdrive; repita para desativar.

Os dados de João Aduílio ficam separados da marca SKY.OS. O username `@sky` continua sendo um placeholder editável.

Todo o site funciona offline. Não há analytics, formulários com envio ou serviços externos.
