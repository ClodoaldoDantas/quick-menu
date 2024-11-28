# QuickMenu

[![Author](https://img.shields.io/badge/author-ClodoaldoDantas-222222)](https://github.com/ClodoaldoDantas)
[![MIT License](https://img.shields.io/badge/License-MIT-222222.svg)](https://choosealicense.com/licenses/mit/)

**QuickMenu** é uma aplicação de cardápio online projetada para estabelecimentos, permitindo que seus clientes acessem facilmente menus digitais 
por meio de dispositivos móveis.

## 🚀 Recursos

- 🌐 Interface amigável para visualização de cardápios.
- 📱 Geração de QR Code para visualização dos cardápios.
- ⚙️ Customização de menus para atender às necessidades dos estabelecimentos.
- 📱 Totalmente responsivo para dispositivos móveis e desktops.

## 🛠️ Tecnologias

- Next JS
- Typescript
- shadcn/ui
- Tailwind CSS
- Turso DB
- Drizzle ORM
- React Hook Form
- Zod
- Iron Session

## Estrutura de Diretórios

```
quick-menu/
├── public/           # Arquivos estáticos
├── src/
│   ├── app/          # App Router
│   ├── actions/      # Server Actions 
│   ├── components/   # Componentes reutilizáveis
│   ├── database/     # Configuração do banco de dados
│   ├── hooks/        # Hooks personalizados
│   ├── lib/          # Bibliotecas e utilitários
│   ├── types/        # Type Aliases
│   └── utils/        # Funções auxiliares
└── README.md         # Documentação do projeto
```

## 👥 Utilizar usuários pré-cadastrados 
Caso queira acessar a aplicação através do usuário padrão pré-cadastrado, utilize as credenciais abaixo:
Usuário padrão: "admin@admin.com" + "password"

## 🚀 Como Rodar o Projeto

1. Clone o repositório

```bash
git clone https://github.com/ClodoaldoDantas/quick-menu.git
```

2. Entre na pasta do projeto

```bash
cd quick-menu
```

3. Instale as dependências

```bash
npm install
```

4. Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz do projeto com os seguintes valores:

```makefile
IRON_SESSION_PASSWORD=
TURSO_DATABASE_URL=
TURSO_AUTH_TOKEN=
```

4. Inicie o servidor em desenvolvimento

```bash
npm run dev
```

O app estará disponível em http://localhost:3000.

Desenvolvido com 💻 por Clodoaldo Dantas.



