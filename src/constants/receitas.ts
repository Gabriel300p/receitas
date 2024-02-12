export type Receita = {
  id: number;
  imagem: string;
  nome: string;
  midia: string;
  ingredientes: string[];
  modo_de_preparo: string[];
};

const receitas: Receita[] = [
  {
    id: 1,
    imagem: "/images/padrinhos-magicos.png",
    nome: "Bolinho mágico",
    midia: "Padrinhos mágicos",
    ingredientes: [
      "100 g de manteiga",
      "1 xc e ¼ de açúcar",
      "3 ovos",
      "1 ½ de farinha",
      "½ xc de chocolate em pó",
      "200 ml de leite",
      "1 colher de fermento",
    ],
    modo_de_preparo: [
      "Bata a manteiga o açúcar os ovos e bata bem",
      "Adicione a farinha, o chocolate e o leite e bata até ficar homogêneo",
      "Adicione o fermento",
      "Asse por 15 min",
      "Decore com chantilly rosa",
    ],
  },
  {
    id: 2,
    imagem: "/images/esqueceram-de-mim.jpg",
    nome: "Mac in Cheese",
    midia: "Esqueceram de mim",
    ingredientes: [
      "2 xícaras de macarrão tipo cotovelo",
      "2 colheres de sopa de manteiga",
      "2 colheres de sopa de farinha de trigo",
      "2 xícaras de leite",
      "2 1/2 xícaras de queijo cheddar, ralado",
      "Sal a gosto",
      "Pimenta a gosto",
      "1/2 xícara de migalhas de pão (opcional, para cobertura crocante)",
    ],
    modo_de_preparo: [
      "Cozinhe o macarrão conforme as instruções da embalagem. Escorra e reserve.",
      "Em uma panela grande, derreta a manteiga em fogo médio. Adicione a farinha e mexa continuamente até obter uma mistura homogênea.",
      "Gradualmente, adicione o leite à mistura de manteiga e farinha, mexendo constantemente para evitar a formação de grumos.",
      "Continue mexendo até que a mistura comece a engrossar. Adicione o queijo cheddar ralado e mexa até que esteja completamente derretido e a mistura fique cremosa.",
      "Tempere com sal e pimenta a gosto.",
      "Adicione o macarrão cozido à mistura de queijo, certificando-se de que todos os pedaços de macarrão estejam cobertos com o molho de queijo.",
      "Se desejar uma cobertura crocante, espalhe as migalhas de pão sobre a parte superior do Mac 'n' Cheese.",
      "Pré-aqueça o forno e asse até que a parte superior fique dourada e borbulhante.",
    ],
  },
  {
    id: 3,
    imagem: "/images/noiva-em-fuga.jpg",
    nome: "Cookies de Chocolate",
    midia: "Noiva em Fuga",
    ingredientes: [
      "1 xícara (2 sticks) de manteiga, temperatura ambiente",
      "3/4 de xícara de açúcar granulado",
      "3/4 de xícara de açúcar mascavo, compactado",
      "2 ovos",
      "1 colher de chá de extrato de baunilha",
      "2 1/4 xícaras de farinha de trigo",
      "1 colher de chá de bicarbonato de sódio",
      "1/2 colher de chá de sal",
      "2 xícaras de gotas de chocolate",
    ],
    modo_de_preparo: [
      "Pré-aqueça o forno a 180°C. Forre assadeiras com papel-manteiga.",
      "Em uma tigela grande, bata a manteiga, açúcar granulado e açúcar mascavo até obter uma mistura leve e cremosa.",
      "Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a baunilha e misture.",
      "Em outra tigela, misture a farinha, bicarbonato de sódio e sal. Adicione gradualmente à mistura de manteiga até ficar bem combinado.",
      "Adicione as gotas de chocolate e misture bem.",
      "Com uma colher de sorvete ou duas colheres, coloque montinhos de massa na assadeira preparada, deixando espaço entre eles.",
      "Asse no forno pré-aquecido por 10-12 minutos ou até que as bordas fiquem douradas.",
      "Retire do forno e deixe os cookies esfriarem nas assadeiras por alguns minutos antes de transferi-los para uma grade para esfriar completamente.",
    ],
  },
  {
    id: 4,
    imagem: "/images/familia-adams.jpg",
    nome: "Biscoitos das Escoteiras",
    midia: "Quarta-feira Familia Addams",
    ingredientes: [
      "1 xícara (2 sticks) de manteiga, temperatura ambiente",
      "1/2 xícara de açúcar",
      "2 xícaras de farinha de trigo",
      "1/4 de colher de chá de sal",
      "1 colher de chá de essência de baunilha",
      "1/2 xícara de chocolate derretido (para decorar)",
    ],
    modo_de_preparo: [
      "Pré-aqueça o forno a 180°C. Forre assadeiras com papel-manteiga.",
      "Em uma tigela grande, bata a manteiga e o açúcar até obter uma mistura leve e fofa.",
      "Adicione a farinha, o sal e a essência de baunilha. Misture até formar uma massa homogênea.",
      "Em uma superfície enfarinhada, abra a massa com um rolo até obter uma espessura de cerca de 0,5 cm.",
      "Use cortadores de biscoito para cortar a massa em formatos desejados.",
      "Transfira os biscoitos para as assadeiras preparadas e leve ao forno pré-aquecido por 10-12 minutos ou até que as bordas comecem a dourar.",
      "Retire do forno e deixe esfriar completamente nas assadeiras.",
      "Depois de esfriar, decore os biscoitos com chocolate derretido, se desejar.",
    ],
  },
];

export default receitas;
