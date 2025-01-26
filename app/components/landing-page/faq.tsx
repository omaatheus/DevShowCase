const faqItems = [
  {
    title: "O que é o LinkShowCase e como ele funciona?",
    description:
      "O LinkShowCase é uma plataforma que permite criar portfólios profissionais e páginas de links de maneira rápida e simples. Com templates personalizáveis e uma interface intuitiva, você pode organizar e exibir seu trabalho de forma eficiente.",
  },
  {
    title: "A plataforma oferece algum teste gratuito?",
    description:
      "Sim! Você pode experimentar o LinkShowCase gratuitamente por 7 dias. Durante esse período, terá acesso a todas as funcionalidades para decidir se deseja continuar com a assinatura.",
  },
  {
    title: "É possível alterar o design do meu portfólio?",
    description:
      "Claro! O LinkShowCase oferece opções de personalização, como cores, fontes e layouts, para que você possa criar um portfólio que combine com sua identidade visual.",
  },
  {
    title: "Preciso ter conhecimento técnico para usar o LinkShowCase?",
    description:
      "Não, nenhum conhecimento técnico é necessário! A plataforma foi projetada para ser fácil de usar, permitindo que qualquer pessoa crie e personalize seu portfólio e links com facilidade.",
  },
  {
    title: "O que acontece se eu decidir cancelar minha assinatura?",
    description:
      "Você pode cancelar sua assinatura a qualquer momento. Seu portfólio e página de links permanecerão ativos até o final do período já pago, mas as funcionalidades premium serão desativadas após isso.",
  },
  {
    title: "Posso divulgar meu portfólio em plataformas sociais?",
    description:
      "Sim! Você pode compartilhar facilmente seu portfólio e página de links nas redes sociais, utilizando um link personalizado gerado pela plataforma.",
  },
];
export default function FAQ() {
  return (
    <div className="my-20 flex flex-col items-center gap-16 px-4">
      <h3 className="text-4xl font-bold text-[#4200cd] text-center">
        Dúvidas frequentes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item) => (
          <FAQItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
      <p className="font-bold text-black">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  );
}
