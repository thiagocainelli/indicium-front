# Indicium Healthcare

Sistema web moderno para monitoramento e análise de dados de SRAG (Síndrome Respiratória Aguda Grave), desenvolvido com React 18 e TypeScript. A aplicação oferece dashboards interativos, métricas em tempo real e visualizações avançadas para profissionais de saúde e pesquisadores.

## 🚀 Deploy

- URL hospedado (Vercel): https://indicium-front.vercel.app/

## 🚀 Tecnologias Utilizadas

### **Frontend Core**

- **React 18.3.1** - Framework principal com hooks modernos
- **TypeScript 5.7.2** - Tipagem estática e desenvolvimento seguro
- **Vite 6.0.3** - Build tool rápido e moderno
- **React Router DOM 7.0.2** - Roteamento e navegação

### **UI & Styling**

- **Ant Design 5.22.4** - Componentes de interface profissionais
- **Tailwind CSS 3.4.16** - Framework CSS utilitário
- **Framer Motion 12.23.21** - Animações fluidas e interativas
- **PostCSS 8.4.49** - Processamento CSS avançado
- **Autoprefixer 10.4.20** - Compatibilidade cross-browser

### **Data Visualization & Charts**

- **Recharts 2.12.7** - Biblioteca de gráficos responsivos
- **Lucide React 0.468.0** - Ícones modernos e consistentes
- **Ant Design Icons 5.5.2** - Ícones complementares

### **HTTP & APIs**

- **Axios 1.7.9** - Cliente HTTP com interceptors avançados
- **API Request Utils** - Sistema de requisições centralizado com retry automático
- **LRU Cache 11.0.2** - Cache inteligente para otimização

### **Utilitários**

- **Day.js 1.11.15** - Manipulação de datas
- **Nookies 2.5.2** - Gerenciamento seguro de cookies
- **Query String 9.1.1** - Parsing de URLs e parâmetros

### **Desenvolvimento**

- **ESLint 9.16.0** - Linting e qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 🛠️ Como Rodar o Projeto

### **Pré-requisitos**

- Node.js 18+
- npm ou yarn
- Backend da aplicação rodando

### **1. Clone o Repositório**

```bash
git clone [URL_DO_REPOSITORIO]
cd indicium-front
```

### **2. Instale as Dependências**

```bash
npm install
# ou
yarn install
```

### **3. Configure as Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
```

### **4. Execute o Projeto**

```bash
# Desenvolvimento
npm run dev
# ou
yarn dev

# Build de Produção
npm run build
# ou
yarn build

# Preview do Build
npm run preview
# ou
yarn preview
```

### **5. Acesse a Aplicação**

- **Desenvolvimento**: http://localhost:5173
- **Produção**: http://localhost:4173 (após build)

## 🎯 Funcionalidades Principais

### **🔐 Sistema de Autenticação Avançado**

- **Login/Registro** de usuários com validação robusta
- **JWT Token** com cookies seguros e expiração automática
- **Proteção de rotas** baseada em autenticação
- **Logout automático** em múltiplas abas via BroadcastChannel
- **Interceptors** para renovação automática de tokens
- **Tratamento de erros** 401/403 com redirecionamento seguro

### **📊 Dashboard SRAG Inteligente**

- **Métricas em Tempo Real**: Taxa de mortalidade, ocupação de UTI, taxa de vacinação
- **Gráficos Interativos**: Visualizações com Recharts para análise temporal
- **Filtros Avançados**: Por região (estado/cidade), período (diário/mensal/anual)
- **Tabela Paginada**: Listagem completa de casos com filtros múltiplos
- **Animações Fluidas**: Transições suaves com Framer Motion

### **🎨 Interface Moderna e Responsiva**

- **Design System** consistente com Ant Design + Tailwind CSS
- **Animações Fluidas** com Framer Motion
- **Layout Responsivo** para todos os dispositivos
- **Componentes Reutilizáveis** e customizáveis
- **UX Otimizada** com feedback visual e loading states

## 🏗️ Arquitetura do Projeto

### **Estrutura de Pastas**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Form/           # Formulário base
│   ├── Forms/          # Formulários específicos (Login, Register)
│   ├── Srag/           # Componentes específicos do SRAG
│   │   ├── FilterDrawer.tsx    # Drawer de filtros avançados
│   │   ├── MetricsCards.tsx    # Cards de métricas
│   │   ├── SragChart.tsx       # Gráficos interativos
│   │   └── SragTable.tsx       # Tabela paginada
│   ├── UI/             # Componentes de interface
│   └── index.ts        # Exportações centralizadas
├── contexts/           # Contextos React
│   └── AuthContext.tsx # Autenticação e gerenciamento de usuário
├── layout/             # Layout base da aplicação
│   ├── Footer/         # Rodapé
│   ├── Header/         # Cabeçalho
│   └── index.tsx       # Layout principal
├── pages/              # Páginas da aplicação
│   ├── authentication/ # Páginas de autenticação
│   ├── srag/          # Dashboard SRAG
│   └── Default/       # Páginas padrão (404, etc)
├── services/           # Serviços de API
│   ├── auth.service.ts # Serviços de autenticação
│   └── srag.service.ts # Serviços de dados SRAG
├── types/              # Definições TypeScript
│   ├── auth.d.ts       # Tipos de autenticação
│   ├── srag.d.ts       # Tipos de dados SRAG
│   └── user.d.ts       # Tipos de usuário
├── App.tsx             # Componente principal
├── Routes.tsx          # Configuração de rotas
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

### **Padrões de Desenvolvimento**

- **Componentes funcionais** com hooks
- **TypeScript strict mode** para qualidade
- **ESLint** com regras personalizadas
- **Arquitetura modular** e escalável
- **Separação de responsabilidades** clara

### **Sistema de Estado**

- **AuthContext** - Autenticação, usuário e gerenciamento de sessão
- **BroadcastChannel** - Sincronização de logout entre abas
- **Cookies Seguros** - Gerenciamento de tokens com nookies
- **Estado Local** - Filtros, métricas e dados do dashboard

## 🔧 Configurações Especiais

### **Sistema de Requisições Avançado**

- **Interceptors Inteligentes** para autenticação automática
- **Retry Automático** com backoff exponencial (3 tentativas)
- **Cancelamento de Requisições** para evitar race conditions
- **Tratamento de Erros** centralizado com mensagens específicas
- **Cache LRU** para otimização de performance
- **Headers Dinâmicos** com tokens JWT automáticos

### **Padrões de Código**

- **TypeScript strict** obrigatório
- **ESLint** configurado
- **Componentes funcionais** preferidos
- **Hooks customizados** para lógica complexa

### **Estrutura de Commits**

```
feat: nova funcionalidade
fix: correção de bug
refactor: refatoração de código
docs: documentação
style: formatação
test: testes
```

## 📊 Funcionalidades do Dashboard SRAG

### **Métricas Principais**

- **Taxa de Aumento de Casos**: Variação percentual em relação ao período anterior
- **Taxa de Mortalidade**: Proporção de óbitos entre os casos registrados
- **Taxa de Ocupação de UTI**: Proporção de internações em UTI
- **Taxa de Vacinação**: Proporção de casos vacinados

### **Filtros e Visualizações**

- **Agrupamento**: Por estado ou cidade
- **Períodos**: Diário, mensal ou anual
- **Intervalo de Datas**: Seleção personalizada
- **Região**: Filtro específico por localização

### **Gráficos Interativos**

- **Timeline de Casos**: Evolução temporal dos dados
- **Comparativos**: Análise entre diferentes períodos
- **Responsivos**: Adaptação automática para mobile

## 🔒 Segurança e Performance

### **Autenticação Robusta**

- **JWT Tokens** com expiração configurável
- **Cookies HttpOnly** para proteção contra XSS
- **Interceptors** para renovação automática
- **BroadcastChannel** para sincronização entre abas

### **Otimizações**

- **Lazy Loading** de componentes
- **Code Splitting** automático com Vite
- **Cache LRU** para requisições frequentes
- **Retry Logic** para falhas de rede

## 📄 Licença

Este projeto é desenvolvido para **Indicium** como teste técnico para avaliação de competências em desenvolvimento frontend moderno.

## 👨‍💻 Desenvolvedor

**Thiago Cainelli** - Desenvolvedor Full Stack

- Especialista em React, TypeScript e arquiteturas modernas
- Foco em UX/UI e performance web

---

**Indicium Healthcare** - Sistema moderno, robusto e focado em saúde pública! 🏥✨
