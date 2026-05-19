# Journey Rastreador de Hábitos

Journey é um dashboard para rastreamento de hábitos pessoais com análise mensal de desempenho. O projeto segue uma estética editorial minimalista, com foco em tipografia limpa e interações intencionais.

## Funcionalidades

Rastreamento diário de hábitos personalizados com grade de dias e marcações  
Adição e remoção de hábitos com limite configurável  
Estatísticas mensais como consistência e dias ganhos  
Painel mensal para visualização rápida do progresso  
Design responsivo para desktop e tablet  

## Tecnologias

HTML5  
CSS3  
JavaScript ES6+  
Planejado Angular com TypeScript  

## Estrutura do Projeto
journey/
├── editorial-archive.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
└── README.md

## Migração para Angular

A migração para Angular tem como objetivo melhorar a manutenção, testabilidade e organização por componentes.

### Estrutura Proposta
src/
├── app/
│ ├── app.module.ts
│ ├── app.component.html
│ ├── app.component.ts
│ ├── services/
│ │ ├── habit.service.ts
│ │ └── state.service.ts
│ ├── models/
│ │ ├── habit.model.ts
│ │ └── statistics.model.ts
│ └── components/
│ ├── navbar/
│ ├── habit-form/
│ ├── habit-table/
│ ├── habit-stats/
│ └── monthly-panel/
├── assets/
└── environments/


## Componentes e Serviços

AppComponent componente raiz  
NavbarComponent navegação lateral  
HabitFormComponent formulário para adicionar e editar hábitos  
HabitTableComponent grade de dias e marcações  
HabitStatsComponent cálculo e exibição de métricas  
HabitService operações CRUD de hábitos  
StateService gerenciamento de estado global com RxJS  

## Sistema de Design

Tipografia com fontes sans serif limpas e modernas  

Paleta de cores  
Fundo #FAF0E6  
Superfície #FFFFFF  
Texto principal #1A1A1A  
Sotaque #3D5A3E  
Borda #E2DFD8  

## Melhorias Futuras

Persistência com localStorage ou backend  
Navegação entre meses e carregamento por período  
Exportação de dados em PDF ou CSV  
Acessibilidade com atributos ARIA e navegação por teclado  
Testes unitários e de integração  
Versão Angular com componentes reutilizáveis  

## Licença

Este projeto pode ser distribuído sob a licença MIT. Adicione um arquivo LICENSE com o texto da licença.

## Contribuições

Contribuições são bem vindas.

Fork o projeto  
Crie uma branch com sua feature  
Faça commit das alterações  
Envie para o repositório  
Abra um Pull Request  

## Autor

Letícia Ferreira
