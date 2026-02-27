# Linkslie

Linkslie é um micro-SaaS que permite a criação de páginas personalizadas para centralizar e compartilhar links importantes. Similar ao Linktree, nosso serviço permite que influenciadores, empresas e criadores de conteúdo organizem seus links de forma profissional e acessível em uma única página.

## ✨ Recursos Principais

- 📌 **Criação de páginas personalizadas com links ilimitados**
- 🔗 **Integração com redes sociais e botões de contato**
- 📊 **Estatísticas de cliques para monitorar o desempenho dos links**
- 🌐 **URLs exclusivas e personalizadas** (ex: `Linkslie.com/seunome`)

## 💰 Planos e Preços

- **Mensal:** R$ 9,90/mês  
- **Anual:** R$ 99,90/ano

## ⚡ Tecnologias Utilizadas

- **Next.js** (Frontend e SSR)
- **TypeScript** (Tipagem e segurança no código)
- **Firebase** (Autenticação, Firestore e Storage)
- **Stripe** (Gestão de pagamentos e assinaturas)

## 🛠 Como Executar Localmente

Clone o repositório:

```sh
git clone https://github.com/omaatheus/DevShowCase
cd Linkslie
```

Instale as dependências:

```sh
npm install
# ou
yarn install
```

Configure as variáveis de ambiente no arquivo `.env.local`:

```sh
NEXT_PUBLIC_FIREBASE_API_KEY=SEU_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
STRIPE_SECRET_KEY=SEU_STRIPE_SECRET_KEY
RESEND_SECRET_KEY=SEU_RESEND_SECRET_KEY
MIXPANEL=SEU_MIXPANEL_SECRET_KEY
```

Execute o projeto:

```sh
npm run dev
# ou
yarn dev
```

Acesse `http://localhost:3000` no navegador.

## 💡 Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e correções.

## 📜 Licença

Este projeto está licenciado sob a MIT License.

---

Desenvolvido com ❤️ por **Matheus**
