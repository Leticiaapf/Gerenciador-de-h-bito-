Journey — Rastreador de Hábitos
Journey é um dashboard para rastreamento de hábitos pessoais com análise mensal de desempenho. O projeto segue uma estética editorial minimalista, com foco em tipografia limpa e interações intencionais.

Funcionalidades
Rastreamento diário de hábitos personalizados (grade de dias com marcações).
Adição e remoção de hábitos com limite configurável.
Estatísticas mensais (consistência, dias ganhos).
Painel mensal para visualização rápida do progresso.
Design responsivo para desktop/tablet.
Tecnologias
HTML5
CSS3
JavaScript (ES6+)
(Planejado) Angular + TypeScript para versão modularizada
Estrutura do repositório (versão atual)
journey/
├── editorial-archive.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
Como executar (versão HTML/CSS/JS)
Clone o repositório (substitua <repository-url> pela URL do seu repositório):
bash
Copy
git clone <repository-url>
cd journey
Abra o arquivo editorial-archive.html em um navegador moderno.
Migração para Angular (planejada)
Migrar para Angular melhora a manutenção, testabilidade e organização por componentes.

Estrutura proposta em Angular
src/
├── app/
│   ├── app.module.ts
│   ├── app.component.html
│   ├── app.component.ts
│   ├── services/
│   │   ├── habit.service.ts
│   │   └── state.service.ts
│   ├── models/
│   │   ├── habit.model.ts
│   │   └── statistics.model.ts
│   └── components/
│       ├── navbar/
│       ├── habit-form/
│       ├── habit-table/
│       ├── habit-stats/
│       └── monthly-panel/
├── assets/
└── environments/
Componentes e serviços principais
AppComponent — componente raiz.
NavbarComponent — navegação lateral.
HabitFormComponent — formulário para adicionar/editar hábitos.
HabitTableComponent — grade de dias e marcações.
HabitStatsComponent — cálculo e exibição de métricas.
HabitService — operações CRUD de hábitos.
StateService — gerenciamento de estado global (RxJS).
Comandos iniciais (Angular)
bash
Copy

Sistema de design (resumo)
Tipografia: cabeçalhos e corpo com fontes limpas (sans-serif, recomendada).
Paleta:
Fundo: #FAF0E6
Superfície (cartas): #ffffff
Texto principal: #1a1a1a
Sotaque: #3d5a3e
Borda: #e2dfd8
Melhorias futuras
Persistência com localStorage ou backend.
Navegação entre meses e carregamento de dados por período.
Exportação de dados (PDF/CSV).
Acessibilidade (atributos ARIA e navegação por teclado).
Testes unitários e de integração.
Versão Angular com components reutilizáveis e services.
Licença
Este projeto pode ser distribuído sob a licença MIT. Adicione um arquivo com o texto da MIT License no repositório.LICENSE

Contribuições
Contribuições são bem-vindas. Para colaborar:

Autor
Letícia Ferreira 
