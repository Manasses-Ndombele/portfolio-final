export type Project = {
  name: string;
  description: string;
  cardImage: string;
  modalImage: string;
  link: string;
};
export const projects: Project[] = [
  {
    name: "Vanguard Advogados - Página de vendas",
    description:
      "O projeto da landing page da Vanguard Advogados foi desenvolvido como um projeto real de mercado mesmo sendo apenas um exemplar de portfólio, ele apresenta a oferta da venda de um serviço de assessoria jurídica e foi pensado minuciosamente na oferta, público, copy e design, escritórios oferecem serviços de alto valor, como constituição de empresas e pactos societários, mas apresentam essa oferta de forma genérica e pouco persuasiva. A página segue uma estrutura de conversão (problema, solução, diferenciais, oferta, prova social, formulário e dúvidas frequentes), com linguagem clara para o empreendedor e um aviso legal alinhado ao Provimento nº 205/2021 da OAB, que regula a publicidade jurídica. Para o escritório, isso se traduz numa presença digital que transmite credibilidade e solidez, num caminho objetivo do primeiro contacto até o pedido de atendimento, e num formulário que qualifica o lead logo à partida, perguntando em que estágio está o negócio do cliente, o que facilita o primeiro contacto da equipa. \n A landing page foi desenvolvida com Next.js (App Router) e React, com estilização em CSS puro e identidade visual baseada numa paleta de azul e tons neutros. Para uma experiência mais sofisticada, usei o Swiper.js no carrossel de depoimentos e implementei efeitos inspirados na biblioteca React Bits: a hero com expansão progressiva da imagem durante a rolagem (ScrollExpand) e animações de revelação suave do conteúdo em cada secção (FadeContent). O projeto também inclui header com efeito de blur ao rolar, microinterações nos botões (sombra flutuante no hover e efeito ripple no clique), formulário de captação com modal de confirmação personalizado e layout totalmente responsivo, sem rolagem horizontal em qualquer tamanho de ecrã.",
    cardImage: "/images/projeto1.webp",
    modalImage: "/images/projeto1-xl.webp",
    link: "https://vanguardadvogados.vercel.app/",
  },
  {
    name: "Zelvora Dental - Site institucional",
    description:
      "O Site Institucional da Zelvora Dental reúne em um só lugar a apresentação da clínica, o corpo clínico, o detalhamento de cada especialidade e exame, as perguntas frequentes, os endereços com mapa e um formulário de contato. Muitas clínicas e profissionais de saúde ainda dependem de redes sociais e do boca a boca para atrair pacientes, e quem chega ao site muitas vezes não encontra respostas rápidas: quais especialidades existem, quem são os profissionais, onde fica a unidade ou como marcar uma consulta. Mas o site da Zelvora Dental foi pensado fazer o paciente entender o que a clínica oferece, confiar na equipe e chegar ao agendamento sem precisar ligar ou procurar informações em outro canal. \nCom a informação organizada e o agendamento a poucos cliques, a clínica pode reduzir o tempo gasto com dúvidas repetitivas, facilitar o primeiro contato e transmitir uma imagem mais profissional e confiável logo na primeira visita ao site. O design foi construído com Next.js e React, com efeitos de blur, animações suaves, slideshow com efeito parallax e layout responsivo para celular, tablet e desktop, o que melhora a experiência de navegação e reforça a percepção de qualidade do atendimento. O conteúdo fica concentrado em um único arquivo de dados, o que facilita a manutenção e a adaptação para outras clínicas ou consultórios, e a estrutura preparada para SEO e carregamento rápido ajuda a aumentar a visibilidade nas buscas e o número de pacientes que chegam por conta própria.",
    cardImage: "/images/projeto2.webp",
    modalImage: "/images/projeto2-xl.webp",
    link: "https://zelvoradental.vercel.app/",
  },
  {
    name: "Zeca Estofados - Catálogo online",
    description:
      "O site da Zeca Estofados reúne numa única plataforma o catálogo de produtos filtrável por categoria, a apresentação dos serviços de restauração, a localização da loja, o histórico da empresa e os depoimentos de clientes. Os cartões de produto com efeito 3D, o fundo animado e o fluxo de encomenda com formulário de pagamento simulado dão ao visitante uma experiência fluida, com aspeto de marca premium. Todo o conteúdo fica centralizado num único ficheiro de dados, o que permite atualizar produtos, preços e serviços sem mexer no código.\nPara uma empresa do ramo imobiliário ou de design de interiores, essa abordagem pode ser adaptada diretamente a imóveis, projetos ou coleções de mobiliário. Os resultados serão uma presença digital mais profissional e consistente, maior credibilidade perante novos clientes e um caminho mais curto entre o interesse e o contacto ou a venda, já que o utilizador encontra preços, opções e formas de encomendar sem precisar de pedir informação por mensagem. Além disso, o site é responsivo e tem boa base para SEO.",
    cardImage: "/images/projeto3.webp",
    modalImage: "/images/projeto3-xl.webp",
    link: "https://zecaestofados.vercel.app/",
  },
];
