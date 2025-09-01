# Landing Page · Mari Luna & Bea Marioti (2°E TECH · DAD)

Repositório do site criado para a disciplina **DAD – Desenvolvimento de Aplicações Dinâmicas**.  
O projeto é uma _landing page_ pessoal com três seções principais:

- **Sobre** — informações (nome, idade e onde trabalha) de cada aluna.  
- **Figure** — “action figures” das duas (arte produzida em DAD).  
- **Curiosidades** — lista de curiosidades de cada uma.  

O design inicial foi feito no **Figma** e todo o conteúdo está reunido em arquivos **HTML**, **CSS** e **JavaScript**, com as seções exibidas de forma contínua e navegáveis pela **navbar responsiva**.

---

## 🧭 Sumário

1. [Visão geral](#visão-geral)  
2. [Tecnologias](#tecnologias)  
3. [Como executar](#como-executar)  
4. [Estrutura de código](#estrutura-de-código)  
5. [Funcionalidades por seção](#funcionalidades-por-seção)  
6. [Como foi feita a navbar](#como-foi-feita-a-navbar)  
7. [Modo Noturno](#modo-noturno)  
8. [Checklist de testes](#checklist-de-testes)  
9. [Deploy (site no ar)](#deploy-site-no-ar)  
10. [Créditos](#créditos)  

---

## Visão geral

A landing page foi desenvolvida com HTML, CSS e JavaScript, sem uso de frameworks externos.  
O site foi pensado para rodar diretamente no navegador, sem instalação, e está **disponível online**.  
A navbar foi planejada para se adaptar tanto a telas de celular quanto a telas maiores.  

---

## Tecnologias

- **HTML5** — estrutura da página  
- **CSS3** — estilos visuais  
- **JavaScript** — interação da navbar e modo noturno  
- **Figma** — protótipo e design inicial  

---

## Como executar

1. Baixe ou clone o repositório.  
2. Abra o arquivo `index.html` no navegador.  
3. Use a navbar para navegar pelas seções: **Sobre**, **Figure**, **Curiosidades**.  

---

## Estrutura de código

### HTML

- A **navbar** no topo  
- As seções **Sobre**, **Figure** e **Curiosidades**  

### CSS

- Estilizações visuais  
- Variáveis CSS para o **modo noturno** (`--bg` e `--text`)  

### JavaScript

- Lógica da **navbar responsiva**  
- Lógica do **modo noturno**, com persistência no `localStorage`  

---

## Funcionalidades por seção

### Sobre
- Campos com **nome**, **idade** e **onde trabalha** de cada aluna  

### Figure
- Exibição das **action figures** criadas em DAD  

### Curiosidades
- Lista de curiosidades de cada uma, organizada em seções distintas  

---

## Como foi feita a navbar

A navbar foi desenvolvida em **JavaScript puro**, com o seguinte funcionamento:

- **Desktop**: menu exibido em linha  
- **Mobile**: botão hambúrguer que abre e fecha o menu  
- **Links ativos**: o link da seção atual é destacado automaticamente  
- **Acessibilidade**: atributos `aria-expanded`, `aria-controls` e `aria-current` para indicar estados e localização da navegação  

---

## 🌙 Modo Noturno

O site possui **modo noturno** ativável pelo usuário, funcionando tanto na navbar principal quanto no menu mobile.

- **Botões de alternância**:  
  1. `🌙` na navbar desktop  
  2. `🌙` dentro do menu mobile  

- **Funcionamento**:  
  - Ao clicar em qualquer botão, o site alterna entre **modo claro** e **modo escuro**, alterando apenas o **fundo e cores de texto**.  
  - O ícone do botão muda para `☀️` quando o modo escuro está ativo  

- **Persistência**:  
  - O estado do modo (claro/escuro) é salvo no `localStorage`, garantindo que ao recarregar a página, o site mantenha o modo selecionado pelo usuário  

- **Exemplo de uso**:  
  1. Clique no botão `🌙` na navbar ou no menu mobile  
  2. Observe a mudança do fundo do site e do ícone  
  3. Recarregue a página e o modo escolhido será mantido  

- **Tecnologia usada**:  
  - CSS com **variáveis para cores** (`--bg` e `--text`)  
  - JavaScript para **toggle de classe `dark-mode`** no `<body>` e atualização do `localStorage`  

---

## Checklist de testes

- [X] Navbar abre e fecha corretamente no celular  
- [X] Links navegam para a seção correta dentro do mesmo HTML  
- [X] Modo noturno funciona tanto na navbar aberta quanto fechada  
- [X] Site é exibido sem problemas em diferentes tamanhos de tela  
- [X] Deploy está acessível online  

---

## Deploy (site no ar)

O site está publicado online para acesso direto.  
> https://navbar-responsiva.onrender.com/ 

---

## Créditos

- **Autoras**: **Mari Luna** e **Bea Marioti** — Turma **2°E TECH**  
- **Disciplina**: **DAD – Desenvolvimento de Aplicações Dinâmicas**  
- **Professor**: **Rodolfo Gonçalves da Silva**
