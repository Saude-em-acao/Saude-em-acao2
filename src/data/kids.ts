export interface KidsGame {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  link: string;
  idade: string;
  categoria: string;
}

export const KIDS_GAMES: KidsGame[] = [
  {
    id: "memoria",
    titulo: "Jogo da Memória dos Alimentos",
    subtitulo: "Encontre os pares saudáveis",
    descricao: "Teste sua memória encontrando os pares de alimentos e descobrindo curiosidades sobre cada um!",
    imagem: "/assets/logo-memoria.png",
    link: "https://wordwall.net/play/78229/440/400",
    idade: "Livre",
    categoria: "Memória"
  },
  {
    id: "desembaralhe",
    titulo: "Desembaralhe as Palavras",
    subtitulo: "Letras misteriosas",
    descricao: "Ordene as letras para descobrir os nomes das frutas, verduras e legumes que protegem a sua saúde.",
    imagem: "/assets/logo-desembaralhe.png",
    link: "https://wordwall.net/play/78231/158/822",
    idade: "Livre",
    categoria: "Palavras"
  },
  {
    id: "cacapalavras",
    titulo: "Caça-Palavras da Saúde",
    subtitulo: "Ache os termos saudáveis",
    descricao: "Procure as palavras escondidas na grade e aprenda como a alimentação saudável faz a diferença.",
    imagem: "/assets/logo-cacapalavras.png",
    link: "https://wordwall.net/play/78230/434/418",
    idade: "Livre",
    categoria: "Atenção"
  },
  {
    id: "forca",
    titulo: "Jogo da Forca da Boa Alimentação",
    subtitulo: "Descubra a palavra secreta",
    descricao: "Adivinhe as letras certas antes das tentativas acabarem e salve o alimento saudável!",
    imagem: "/assets/forca-logo.png",
    link: "https://wordwall.net/play/78231/754/656",
    idade: "Livre",
    categoria: "Adivinhação"
  }
];
