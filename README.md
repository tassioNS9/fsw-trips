# FSW Trips - Sistema de Reserva de Viagens

Uma aplicação web para reserva de viagens construída com Next.js 13, TypeScript, Prisma e NextAuth.js.

## Tecnologias Utilizadas

- [Next.js 13](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [date-fns](https://date-fns.org/)

## Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3.Configuração das variáveis de ambiente criando um arquivo .env com:

```bash
DATABASE_URL="sua-url-do-postgresql"
SHADOW_DATABASE_URL="sua-url-shadow-do-postgresql"
GOOGLE_CLIENT_ID="seu-client-id"
GOOGLE_CLIENT_SECRET="seu-client-secret"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

4.Execute as migrations do Prisma:

```bash
npx prisma migrate dev
```

5.Execute o seed do banco de dados (opcional):

```bash
npx prisma db seed
```

6.Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

```bash
Funcionalidades Principais
Autenticação com Google
Listagem de viagens disponíveis
Sistema de reserva de viagens
Gestão de reservas do usuário
Cálculo automático de preços
Validação de datas de reserva
```

```bash
Estrutura do Projeto
/app - Rotas e componentes da aplicação (Next.js 13 App Router)
/components - Componentes React reutilizáveis
lib - Utilitários e configurações (Prisma, Auth)
/prisma - Schema e migrations do banco de dado
```
