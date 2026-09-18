export interface InformeItem {
  id: string;
  titulo: string;
  subtitulo?: string;
  categoria: "Reportagens" | "Artigos" | "Vídeos";
  veiculo: string;
  data: string;
  url: string;
  imagem: string;
}

export const INFORME_ITEMS: InformeItem[] = [
  {
    "id": "1",
    "titulo": "Defensores Agrícolas: o veneno que chega à mesa",
    "subtitulo": "Reportagem em vídeo sobre o uso de defensores agrícolas no Brasil e seus efeitos sobre a saúde.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://youtu.be/6-Qwqm5ozPs",
    "imagem": "/assets/news-video-Df_-8HTU.jpg"
  },
  {
    "id": "2",
    "titulo": "Defensores Agrícolas no Brasil: impactos na saúde humana e ambiental",
    "subtitulo": "Panorama do IDEC sobre como os defensores agrícolas afetam a saúde da população e o meio ambiente.",
    "categoria": "Artigos",
    "veiculo": "IDEC",
    "data": "Estudo / Notícia Oficial",
    "url": "https://idec.org.br/dicas-e-direitos/agrotoxicos-no-brasil-seus-impactos-na-saude-humana-e-ambiental",
    "imagem": "/assets/news-idec-DaF_1zyl.jpg"
  },
  {
    "id": "3",
    "titulo": "Anvisa divulga lista de alimentos com maior contaminação",
    "subtitulo": "Resumo do Programa de Análise de Resíduos de Defensores Agrícolas em Alimentos (PARA) da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Tommasi Laboratório",
    "data": "Estudo / Notícia Oficial",
    "url": "https://tommasi.com.br/blog/anvisa-divulga-lista-de-alimentos-com-maior-nivel-de-contaminacao-por-agrotoxicos/",
    "imagem": "/assets/news-anvisa-Cq79c7hC.jpg"
  },
  {
    "id": "4",
    "titulo": "Defensores Agrícolas causam problemas que só serão percebidos no futuro",
    "subtitulo": "Pesquisadores da UFMG alertam sobre os efeitos crônicos e cumulativos dos defensores agrícolas.",
    "categoria": "Artigos",
    "veiculo": "Faculdade de Medicina UFMG",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.medicina.ufmg.br/agrotoxicos-causam-problemas-que-so-serao-percebidos-no-futuro/",
    "imagem": "/assets/news-ufmg-DDHiVpk9.jpg"
  },
  {
    "id": "5",
    "titulo": "Intoxicação Aguda por Defensores Agrícolas",
    "subtitulo": "Página oficial do governo do PR sobre sinais, sintomas e protocolos de intoxicação aguda.",
    "categoria": "Artigos",
    "veiculo": "Secretaria de Saúde do Paraná",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.saude.pr.gov.br/Pagina/Intoxicacao-Aguda-por-Agrotoxicos",
    "imagem": "/assets/news-pr-BSuidD_k.jpg"
  },
  {
    "id": "6",
    "titulo": "Defensores Agrícolas e saúde — análise crítica",
    "subtitulo": "Artigo científico revisado por pares sobre saúde pública e defensores agrícolas no Brasil.",
    "categoria": "Artigos",
    "veiculo": "SciELO · Saúde em Debate",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.scielo.br/j/sdeb/a/bGBYRZvVVKMrV4yzqfwwKtP/?lang=pt",
    "imagem": "/assets/news-scielo-o9NngfWb.jpg"
  },
  {
    "id": "7",
    "titulo": "Um alerta sobre os impactos dos defensores agrícolas na saúde",
    "subtitulo": "Documento técnico do INCA com evidências científicas sobre câncer e defensores agrícolas.",
    "categoria": "Artigos",
    "veiculo": "INCA — Instituto Nacional de Câncer",
    "data": "Estudo / Notícia Oficial",
    "url": "https://ninho.inca.gov.br/jspui/bitstream/123456789/12520/1/Um%20alerta%20sobre%20os%20impactos%20dos%20agrot%C3%B3xicos%20na%20sa%C3%BAde..pdf",
    "imagem": "/assets/news-inca-DAdwQbPp.jpg"
  },
  {
    "id": "8",
    "titulo": "Quais são os alimentos mais contaminados por defensores agrícolas no Brasil",
    "subtitulo": "Lista dos alimentos com mais e menos resíduos detectados pela Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Saúde Abril",
    "data": "Estudo / Notícia Oficial",
    "url": "https://saude.abril.com.br/alimentacao/quais-sao-os-alimentos-mais-contaminados-por-agrotoxicos-e-os-mais-seguros-no-brasil/",
    "imagem": "/assets/informe-market-contamination-CN4YDJkh.jpg"
  },
  {
    "id": "9",
    "titulo": "Alimentos com mais defensores agrícolas — riscos à saúde",
    "subtitulo": "Especialistas explicam os riscos por trás do consumo frequente de alimentos contaminados.",
    "categoria": "Reportagens",
    "veiculo": "Metrópoles",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.metropoles.com/saude/alimentos-mais-agrotoxicos-riscos",
    "imagem": "/assets/informe-health-risk-food-JEdVORHe.jpg"
  },
  {
    "id": "10",
    "titulo": "Laranja, pimentão e goiaba: campeões de defensores agrícolas acima do limite",
    "subtitulo": "Investigação independente sobre os alimentos com mais resíduos irregulares.",
    "categoria": "Reportagens",
    "veiculo": "Agência Pública",
    "data": "Estudo / Notícia Oficial",
    "url": "https://apublica.org/2020/10/laranja-pimentao-e-goiaba-alimentos-campeoes-de-agrotoxicos-acima-do-limite/",
    "imagem": "/assets/informe-orange-pepper-guava-CS8_gWD-.jpg"
  },
  {
    "id": "11",
    "titulo": "Anvisa alerta: 2 frutas populares no Brasil têm defensores agrícolas em excesso",
    "subtitulo": "Alerta da Anvisa sobre frutas amplamente consumidas e com níveis irregulares.",
    "categoria": "Reportagens",
    "veiculo": "UOL VivaBem",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.uol.com.br/vivabem/noticias/redacao/2025/01/07/anvisa-alerta-2-frutas-populares-no-brasil-tem-agrotoxicos-em-excesso.htm",
    "imagem": "/assets/informe-fruit-warning-Cdade0VJ.jpg"
  },
  {
    "id": "12",
    "titulo": "Anvisa divulga lista com os 10 alimentos mais afetados por defensores agrícolas",
    "subtitulo": "Ranking oficial dos alimentos mais contaminados segundo o PARA da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "O Tempo",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.otempo.com.br/brasil/anvisa-divulga-lista-com-os-dez-alimentos-mais-afetados-por-agrotoxicos-1.436431",
    "imagem": "/assets/informe-market-contamination-CN4YDJkh.jpg"
  },
  {
    "id": "13",
    "titulo": "Pepino e laranja: alimentos campeões de defensores agrícolas (Anvisa 2024)",
    "subtitulo": "Análise dos dados mais recentes do Programa de Análise de Resíduos da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "Repórter Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://reporterbrasil.org.br/2025/12/pepino-laranja-alimentos-campeoes-agrotoxicos-anvisa/",
    "imagem": "/assets/informe-cucumber-orange-testing-BycWPA5g.jpg"
  },
  {
    "id": "14",
    "titulo": "Anvisa divulga resultados do monitoramento de defensores agrícolas — Ciclo 2024",
    "subtitulo": "Cobertura do G1 sobre os números oficiais do monitoramento de defensores agrícolas.",
    "categoria": "Reportagens",
    "veiculo": "G1 Saúde",
    "data": "Estudo / Notícia Oficial",
    "url": "https://g1.globo.com/saude/noticia/2025/12/17/anvisa-divulga-resultados-do-monitoramento-de-agrotoxicos-em-alimentos-ciclo-2024.ghtml",
    "imagem": "/assets/informe-lab-monitoring-food-CUQvvid1.jpg"
  },
  {
    "id": "15",
    "titulo": "A fruta brasileira com maior teor de defensores agrícolas, segundo a Anvisa",
    "subtitulo": "Matéria sobre a fruta líder em resíduos de defensores agrícolas no monitoramento da Anvisa.",
    "categoria": "Reportagens",
    "veiculo": "TudoGostoso",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.tudogostoso.com.br/noticias/a-fruta-brasileira-com-maior-teor-de-agrotoxicos-segundo-a-anvisa-a24169.htm",
    "imagem": "/assets/informe-brazilian-fruit-residue-CdSwk35H.jpg"
  },
  {
    "id": "16",
    "titulo": "Veneno no prato dos outros é refresco",
    "subtitulo": "Análise crítica do Greenpeace sobre a flexibilização das regras de defensores agrícolas no Brasil.",
    "categoria": "Artigos",
    "veiculo": "Greenpeace Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.greenpeace.org/brasil/blog/veneno-no-prato-dos-outros-e-refresco/",
    "imagem": "/assets/informe-crop-spraying-BwlOtkfP.jpg"
  },
  {
    "id": "17",
    "titulo": "Núcleo de Estudos NUQUALI — Defensores Agrícolas em alimentos",
    "subtitulo": "Estudo acadêmico da Universidade Federal de Lavras sobre qualidade dos alimentos.",
    "categoria": "Artigos",
    "veiculo": "UFLA",
    "data": "Estudo / Notícia Oficial",
    "url": "http://www.nucleoestudo.ufla.br/nuquali/?p=357",
    "imagem": "/assets/informe-university-research-Sko62YLI.jpg"
  },
  {
    "id": "18",
    "titulo": "Laranja e abacaxi no topo da contaminação por defensores agrícolas",
    "subtitulo": "Reportagem do O Globo sobre as frutas com maior detecção de resíduos.",
    "categoria": "Reportagens",
    "veiculo": "O Globo",
    "data": "Estudo / Notícia Oficial",
    "url": "https://oglobo.globo.com/brasil/sustentabilidade/laranja-abacaxi-estao-no-topo-da-contaminacao-por-agrotoxicos-20542450",
    "imagem": "/assets/informe-orange-pineapple-0U_bLJVY.jpg"
  },
  {
    "id": "19",
    "titulo": "As frutas mais venenosas que os brasileiros adoram",
    "subtitulo": "Frutas amplamente consumidas no país com altos níveis de pesticidas.",
    "categoria": "Reportagens",
    "veiculo": "TudoGostoso",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.tudogostoso.com.br/noticias/poucos-sabem-mas-essas-sao-as-frutas-mais-venenosas-elas-estao-cheia-de-pesticidas-mas-os-brasileiros-as-adoram-a18752.htm",
    "imagem": "/assets/informe-strawberry-grape-DcgbF8TN.jpg"
  },
  {
    "id": "20",
    "titulo": "Termina prazo de descontinuação do uso de carbofurano",
    "subtitulo": "Anvisa anuncia o fim do prazo para uso do carbofurano, banido no Brasil por riscos à saúde.",
    "categoria": "Reportagens",
    "veiculo": "Anvisa · Gov.br",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2018/termina-prazo-de-descontinuacao-do-uso-de-carbofurano",
    "imagem": "/assets/informe-carbofurano-ban-CsJ_7jSy.jpg"
  },
  {
    "id": "21",
    "titulo": "Defensores agrícolas em legumes e hortaliças: estudo da Unicamp",
    "subtitulo": "Pesquisa da Faculdade de Ciências Farmacêuticas da Unicamp sobre resíduos de defensores agrícolas em legumes e hortaliças.",
    "categoria": "Artigos",
    "veiculo": "FCF · Unicamp",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.fcf.unicamp.br/2022/12/15/agrotoxicos-legumes-hortalicas/",
    "imagem": "/assets/informe-unicamp-hortalicas-D4y4XR31.jpg"
  },
  {
    "id": "22",
    "titulo": "O que tem de errado com o alimento que comemos?",
    "subtitulo": "Vídeo do Greenpeace Brasil que questiona os problemas dos alimentos que consumimos e os impactos dos defensores agrícolas.",
    "categoria": "Vídeos",
    "veiculo": "Greenpeace Brasil",
    "data": "Estudo / Notícia Oficial",
    "url": "https://youtu.be/olwr1aK6e4w",
    "imagem": "/assets/informe-greenpeace-food-kUhuN9jt.jpg"
  },
  {
    "id": "23",
    "titulo": "Reportagem especial sobre defensores agrícolas (Globoplay)",
    "subtitulo": "Reportagem em vídeo sobre o cenário dos defensores agrícolas no Brasil.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/6737676/",
    "imagem": "/assets/informe-tv-report-Brjv3CKp.jpg"
  },
  {
    "id": "24",
    "titulo": "Defensores Agrícolas no Brasil — documentário",
    "subtitulo": "Conteúdo audiovisual com depoimentos e dados sobre contaminação alimentar.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=dPwDVAqZdG4",
    "imagem": "/assets/informe-documentary-field-BcqVAc-t.jpg"
  },
  {
    "id": "25",
    "titulo": "Reportagem Globoplay — defensores agrícolas no campo",
    "subtitulo": "Cobertura televisiva sobre o uso de defensores agrícolas no agronegócio brasileiro.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/5564567/",
    "imagem": "/assets/informe-field-spraying-report-Oc4vjTEX.jpg"
  },
  {
    "id": "26",
    "titulo": "Defensores Agrícolas e câncer — debate",
    "subtitulo": "Debate com especialistas sobre a relação entre defensores agrícolas e câncer.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=UYJwEK-XwRk",
    "imagem": "/assets/informe-cancer-debate-Bs6KJcnm.jpg"
  },
  {
    "id": "27",
    "titulo": "Reportagem Globoplay — alimentos contaminados",
    "subtitulo": "Reportagem investigativa sobre alimentos com resíduos de defensores agrícolas.",
    "categoria": "Vídeos",
    "veiculo": "Globoplay",
    "data": "Estudo / Notícia Oficial",
    "url": "https://globoplay.globo.com/v/2921523/",
    "imagem": "/assets/informe-contaminated-plate-Bu1-QiNj.jpg"
  },
  {
    "id": "28",
    "titulo": "Como os defensores agrícolas chegam ao seu prato",
    "subtitulo": "Vídeo que explica o caminho dos defensores agrícolas da lavoura até a mesa do consumidor.",
    "categoria": "Vídeos",
    "veiculo": "YouTube",
    "data": "Estudo / Notícia Oficial",
    "url": "https://www.youtube.com/watch?v=R5-2t6VJDAg",
    "imagem": "/assets/informe-farm-to-plate-BZkxKMaY.jpg"
  }
];
