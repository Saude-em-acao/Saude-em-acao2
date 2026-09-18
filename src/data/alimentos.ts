export interface LimpezaMetodo {
  metodo: string;
  passos: string[];
  observacao: string;
  fonte: string;
}

export interface Alimento {
  id: string;
  slug: string;
  nome: string;
  emoji: string;
  categoria: string;
  rank?: string;
  cor?: string;
  nivel_atencao: "baixo" | "moderado" | "atencao" | "maior";
  defensivos: string[];
  riscos: string[];
  imagem_url?: string;
  saiba_mais?: string;
  cuidados_texto?: string;
  fontes: string[];
  limpeza?: LimpezaMetodo;
}

export const ALIMENTOS: Alimento[] = [
  {
    "id": "morango",
    "slug": "morango",
    "nome": "Morango",
    "emoji": "🍓",
    "categoria": "Frutas",
    "rank": "Campeão de contaminação",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Carbendazim",
      "Clorpirifós",
      "Captana",
      "Procimidona"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Morango faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "uva",
    "slug": "uva",
    "nome": "Uva",
    "emoji": "🍇",
    "categoria": "Frutas",
    "rank": "Múltiplas aplicações",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Tiametoxam",
      "Procimidona",
      "Captana"
    ],
    "riscos": [],
    "imagem_url": "https://loremflickr.com/800/600/grape,fruit,bunch?lock=11",
    "saiba_mais": "Uva faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "laranja",
    "slug": "laranja",
    "nome": "Laranja",
    "emoji": "🍊",
    "categoria": "Frutas",
    "rank": "Topo da lista Anvisa 2024",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Imidacloprido",
      "Tiametoxam",
      "Acefato",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Laranja faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "abacaxi",
    "slug": "abacaxi",
    "nome": "Abacaxi",
    "emoji": "🍍",
    "categoria": "Frutas",
    "rank": "Topo da contaminação (O Globo)",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Diuron",
      "Bromacila",
      "Etoprofós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abacaxi faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "maca",
    "slug": "maca",
    "nome": "Maçã",
    "emoji": "🍎",
    "categoria": "Frutas",
    "rank": "Aplicações repetidas",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Captana",
      "Tiabendazol",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Maçã faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "banana",
    "slug": "banana",
    "nome": "Banana",
    "emoji": "🍌",
    "categoria": "Frutas",
    "rank": "Pulverização aérea",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Clorotalonil",
      "Tiabendazol",
      "Imazalil"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Banana faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "manga",
    "slug": "manga",
    "nome": "Manga",
    "emoji": "🥭",
    "categoria": "Frutas",
    "rank": "Resíduos acima do limite",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Manga faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "abacate",
    "slug": "abacate",
    "nome": "Abacate",
    "emoji": "🥑",
    "categoria": "Frutas",
    "rank": "Acumula resíduos na polpa",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Difenoconazol",
      "Abamectina",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abacate faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "melao",
    "slug": "melao",
    "nome": "Melão",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Cultivo intensivo no NE",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Acefato",
      "Metomil",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Melão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "melancia",
    "slug": "melancia",
    "nome": "Melancia",
    "emoji": "🍉",
    "categoria": "Frutas",
    "rank": "Alta carga de água",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Melancia faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "pera",
    "slug": "pera",
    "nome": "Pera",
    "emoji": "🍐",
    "categoria": "Frutas",
    "rank": "Alta detecção (PARA)",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pera faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "pessego",
    "slug": "pessego",
    "nome": "Pêssego",
    "emoji": "🍑",
    "categoria": "Frutas",
    "rank": "Pulverização frequente",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Iprodiona",
      "Carbendazim",
      "Diazinona"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Autumn_Red_peaches.jpg?width=800",
    "saiba_mais": "Pêssego faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "goiaba",
    "slug": "goiaba",
    "nome": "Goiaba",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Campeã (A Pública)",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Abamectina",
      "Carbendazim",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Goiaba faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "limao",
    "slug": "limao",
    "nome": "Limão",
    "emoji": "🍋",
    "categoria": "Frutas",
    "rank": "Pulverização pesada",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Imidacloprido",
      "Acefato",
      "Tiametoxam"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/960px-P1030323.JPG",
    "saiba_mais": "Limão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mexerica-tangerina",
    "slug": "mexerica-tangerina",
    "nome": "Mexerica / Tangerina",
    "emoji": "🍊",
    "categoria": "Frutas",
    "rank": "Citros com resíduos",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Carbendazim",
      "Imazalil",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg",
    "saiba_mais": "Mexerica / Tangerina faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mamao",
    "slug": "mamao",
    "nome": "Mamão",
    "emoji": "🥭",
    "categoria": "Frutas",
    "rank": "Resíduos detectados",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Tebuconazol",
      "Cipermetrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Mamão faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "maracuja",
    "slug": "maracuja",
    "nome": "Maracujá",
    "emoji": "🍈",
    "categoria": "Frutas",
    "rank": "Aplicação contínua",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Difenoconazol",
      "Abamectina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Maracujá faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "kiwi",
    "slug": "kiwi",
    "nome": "Kiwi",
    "emoji": "🥝",
    "categoria": "Frutas",
    "rank": "Importação com resíduos",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Iprodiona",
      "Boscalida",
      "Fludioxonil"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kiwi_aka.jpg?width=800",
    "saiba_mais": "Kiwi faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "ameixa",
    "slug": "ameixa",
    "nome": "Ameixa",
    "emoji": "🟣",
    "categoria": "Frutas",
    "rank": "Resíduos persistentes",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Carbendazim",
      "Tebuconazol",
      "Iprodiona"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/960px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
    "saiba_mais": "Ameixa faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "caju",
    "slug": "caju",
    "nome": "Caju",
    "emoji": "🌰",
    "categoria": "Frutas",
    "rank": "Cultivo no Nordeste",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Mancozebe",
      "Endosulfan",
      "Cipermetrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/960px-Cashew_apples.jpg",
    "saiba_mais": "Caju faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "acerola",
    "slug": "acerola",
    "nome": "Acerola",
    "emoji": "🍒",
    "categoria": "Frutas",
    "rank": "Pulverização intensa",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Abamectina",
      "Imidacloprido",
      "Tiametoxam"
    ],
    "riscos": [],
    "imagem_url": "https://loremflickr.com/800/600/acerola,cherry?lock=15",
    "saiba_mais": "Acerola faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "mirtilo-amora",
    "slug": "mirtilo-amora",
    "nome": "Mirtilo / Amora",
    "emoji": "🫐",
    "categoria": "Frutas",
    "rank": "Cultivo intensivo",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Boscalida",
      "Iprodiona",
      "Fenhexamida"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Mirtilo / Amora faz parte do grupo de frutas avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e friccione a casca por cerca de 30 segundos. Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos. Enxágue novamente e, quando fizer sentido, descarte a casca.",
    "fontes": [
      "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Frutas com casca fina",
      "passos": [
        "Lave em água corrente e friccione a casca por cerca de 30 segundos.",
        "Deixe de molho em solução com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue novamente e, quando fizer sentido, descarte a casca."
      ],
      "observacao": "Ajuda a reduzir resíduos de superfície, mas não remove compostos sistêmicos já absorvidos pela polpa.",
      "fonte": "Baseado na reportagem do R7 sobre higienização e redução de resíduos de superfície."
    }
  },
  {
    "id": "alface",
    "slug": "alface",
    "nome": "Alface",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Folhas retêm resíduos",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Carbofurano",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Alface faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "couve",
    "slug": "couve",
    "nome": "Couve",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Aplicações frequentes",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Couve faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "espinafre",
    "slug": "espinafre",
    "nome": "Espinafre",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Resíduos retidos nas folhas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Espinafre faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "rucula",
    "slug": "rucula",
    "nome": "Rúcula",
    "emoji": "🌱",
    "categoria": "Verduras",
    "rank": "Folhas finas, alta retenção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Rúcula faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "agriao",
    "slug": "agriao",
    "nome": "Agrião",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Cultivo úmido, alta absorção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Carbofurano"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Watercress_%282%29.JPG/960px-Watercress_%282%29.JPG",
    "saiba_mais": "Agrião faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "repolho",
    "slug": "repolho",
    "nome": "Repolho",
    "emoji": "🥬",
    "categoria": "Verduras",
    "rank": "Múltiplas pulverizações",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cabbage_and_cross_section_on_white.jpg?width=800",
    "saiba_mais": "Repolho faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "brocolis",
    "slug": "brocolis",
    "nome": "Brócolis",
    "emoji": "🥦",
    "categoria": "Verduras",
    "rank": "Resíduos nos floretes",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Cipermetrina",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Brócolis faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "couve-flor",
    "slug": "couve-flor",
    "nome": "Couve-flor",
    "emoji": "🥦",
    "categoria": "Verduras",
    "rank": "Aplicações repetidas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/960px-Chou-fleur_02.jpg",
    "saiba_mais": "Couve-flor faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "chicoria-almeirao",
    "slug": "chicoria-almeirao",
    "nome": "Chicória / Almeirão",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Retém resíduos nas folhas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Permetrina",
      "Deltametrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG/960px-Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG",
    "saiba_mais": "Chicória / Almeirão faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "mostarda-folha",
    "slug": "mostarda-folha",
    "nome": "Mostarda (folha)",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Cultivo com pesticidas",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Cipermetrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Brassica_juncea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg",
    "saiba_mais": "Mostarda (folha) faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "salsa-coentro",
    "slug": "salsa-coentro",
    "nome": "Salsa / Coentro",
    "emoji": "🌿",
    "categoria": "Verduras",
    "rank": "Folhas finas com alta retenção",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Deltametrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Petroselinum.jpg/960px-Petroselinum.jpg",
    "saiba_mais": "Salsa / Coentro faz parte do grupo de verduras avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Separe folha por folha e retire partes machucadas. Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos. Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante.",
    "fontes": [
      "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Folhas e ervas",
      "passos": [
        "Separe folha por folha e retire partes machucadas.",
        "Lave uma a uma em água corrente, com fricção suave para remover sujeira e resíduos externos.",
        "Faça imersão curta em solução de bicarbonato e finalize com novo enxágue abundante."
      ],
      "observacao": "A higienização reduz a carga externa, mas não elimina resíduos sistêmicos absorvidos pela planta.",
      "fonte": "Adaptação do método descrito pelo R7 para alimentos de alta retenção superficial."
    }
  },
  {
    "id": "pimentao",
    "slug": "pimentao",
    "nome": "Pimentão",
    "emoji": "🫑",
    "categoria": "Legumes",
    "rank": "Top 3 da Anvisa",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan",
      "Metamidofós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pimentão faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "tomate",
    "slug": "tomate",
    "nome": "Tomate",
    "emoji": "🍅",
    "categoria": "Legumes",
    "rank": "Alta exposição diária",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Clorotalonil",
      "Mancozebe",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Tomate faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "pepino",
    "slug": "pepino",
    "nome": "Pepino",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Campeão Anvisa 2024",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Carbendazim",
      "Clorotalonil"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Pepino faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "abobrinha",
    "slug": "abobrinha",
    "nome": "Abobrinha",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Resíduos detectados",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/CSA-Striped-Zucchini.jpg/960px-CSA-Striped-Zucchini.jpg",
    "saiba_mais": "Abobrinha faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "berinjela",
    "slug": "berinjela",
    "nome": "Berinjela",
    "emoji": "🍆",
    "categoria": "Legumes",
    "rank": "Pulverização frequente",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Acefato",
      "Cipermetrina",
      "Endosulfan"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/960px-Solanum_melongena_24_08_2012_%281%29.JPG",
    "saiba_mais": "Berinjela faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "chuchu",
    "slug": "chuchu",
    "nome": "Chuchu",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Resíduos detectados (PARA)",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Acefato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chayote_BNC.jpg/960px-Chayote_BNC.jpg",
    "saiba_mais": "Chuchu faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "quiabo",
    "slug": "quiabo",
    "nome": "Quiabo",
    "emoji": "🥒",
    "categoria": "Legumes",
    "rank": "Pulverização constante",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Acefato",
      "Lambda-cialotrina"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/960px-Hong_Kong_Okra_Aug_25_2012.JPG",
    "saiba_mais": "Quiabo faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "abobora",
    "slug": "abobora",
    "nome": "Abóbora",
    "emoji": "🎃",
    "categoria": "Legumes",
    "rank": "Resíduos persistentes",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Mancozebe",
      "Clorpirifós",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Abóbora faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "vagem",
    "slug": "vagem",
    "nome": "Vagem",
    "emoji": "🫛",
    "categoria": "Legumes",
    "rank": "Resíduos detectados",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Cipermetrina",
      "Lambda-cialotrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Vagem faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "ervilha",
    "slug": "ervilha",
    "nome": "Ervilha",
    "emoji": "🫛",
    "categoria": "Legumes",
    "rank": "Cultivo intensivo",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/960px-Peas_in_pods_-_Studio.jpg",
    "saiba_mais": "Ervilha faz parte do grupo de legumes avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave em água corrente e esfregue com as mãos ou escova limpa. Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos. Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo.",
    "fontes": [
      "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Legumes de casca exposta",
      "passos": [
        "Lave em água corrente e esfregue com as mãos ou escova limpa.",
        "Deixe de molho em água com pequena quantidade de bicarbonato por até 15 minutos.",
        "Enxágue bem e, se possível, retire casca ou partes mais expostas antes do preparo."
      ],
      "observacao": "Escovação e bicarbonato ajudam mais contra resíduos superficiais.",
      "fonte": "R7: água corrente, fricção, bicarbonato e descascar como formas de redução de risco."
    }
  },
  {
    "id": "cenoura",
    "slug": "cenoura",
    "nome": "Cenoura",
    "emoji": "🥕",
    "categoria": "Tubérculos",
    "rank": "Absorção pelas raízes",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Difenoconazol",
      "Linuron",
      "Aldicarbe"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Cenoura faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "batata",
    "slug": "batata",
    "nome": "Batata",
    "emoji": "🥔",
    "categoria": "Tubérculos",
    "rank": "Consumo massivo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glufosinato",
      "Imidacloprido",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Batata faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "batata-doce",
    "slug": "batata-doce",
    "nome": "Batata-doce",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Absorção no solo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Clorpirifós",
      "Carbofurano",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1596097635121-14b63b7a0c23?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Batata-doce faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "beterraba",
    "slug": "beterraba",
    "nome": "Beterraba",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Raiz com retenção",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Clorpirifós",
      "Lambda-cialotrina",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Beterraba faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "mandioca",
    "slug": "mandioca",
    "nome": "Mandioca",
    "emoji": "🌱",
    "categoria": "Tubérculos",
    "rank": "Cultivo amplo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "2,4-D",
      "Atrazina"
    ],
    "riscos": [],
    "imagem_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cassava.jpg?width=800",
    "saiba_mais": "Mandioca faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "inhame",
    "slug": "inhame",
    "nome": "Inhame",
    "emoji": "🍠",
    "categoria": "Tubérculos",
    "rank": "Resíduos no solo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Carbofurano",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yam_at_monday_market_kaduna_state_01.jpg/960px-Yam_at_monday_market_kaduna_state_01.jpg",
    "saiba_mais": "Inhame faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "rabanete",
    "slug": "rabanete",
    "nome": "Rabanete",
    "emoji": "🟥",
    "categoria": "Tubérculos",
    "rank": "Raiz rápida e contaminada",
    "cor": "tomato",
    "nivel_atencao": "maior",
    "defensivos": [
      "Clorpirifós",
      "Permetrina",
      "Acefato"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/960px-Radish_3371103037_4ab07db0bf_o.jpg",
    "saiba_mais": "Rabanete faz parte do grupo de tubérculos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Escove bem a casca em água corrente para remover terra e resíduos externos. Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida. Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco.",
    "fontes": [
      "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Raízes e tubérculos",
      "passos": [
        "Escove bem a casca em água corrente para remover terra e resíduos externos.",
        "Se desejar, faça imersão rápida em bicarbonato e enxágue em seguida.",
        "Prefira descascar antes do consumo quando o alimento estiver entre os de maior risco."
      ],
      "observacao": "A limpeza externa ajuda, mas resíduos internos podem permanecer.",
      "fonte": "R7: fricção, bicarbonato e descasque em alimentos com concentração na superfície."
    }
  },
  {
    "id": "arroz",
    "slug": "arroz",
    "nome": "Arroz",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Base da alimentação",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Carbofurano",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Arroz faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "feijao",
    "slug": "feijao",
    "nome": "Feijão",
    "emoji": "🫘",
    "categoria": "Grãos",
    "rank": "Resíduos detectados (PARA)",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Glifosato",
      "Clorpirifós",
      "Carbendazim"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/French_beans_J1.JPG/960px-French_beans_J1.JPG",
    "saiba_mais": "Feijão faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "trigo",
    "slug": "trigo",
    "nome": "Trigo",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Aplicação pré-colheita",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg",
    "saiba_mais": "Trigo faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "soja",
    "slug": "soja",
    "nome": "Soja",
    "emoji": "🌱",
    "categoria": "Grãos",
    "rank": "Cultivo com mais defensores agrícolas no Brasil",
    "cor": "leaf",
    "nivel_atencao": "baixo",
    "defensivos": [
      "Glifosato",
      "2,4-D",
      "Imidacloprido"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Soybean.USDA.jpg",
    "saiba_mais": "Soja faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "aveia",
    "slug": "aveia",
    "nome": "Aveia",
    "emoji": "🌾",
    "categoria": "Grãos",
    "rank": "Resíduos pré-colheita",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Clorpirifós",
      "Tebuconazol"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Aveia faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "milho",
    "slug": "milho",
    "nome": "Milho",
    "emoji": "🌽",
    "categoria": "Grãos",
    "rank": "Transgênico majoritário",
    "cor": "sun",
    "nivel_atencao": "atencao",
    "defensivos": [
      "Glifosato",
      "Atrazina",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
    "saiba_mais": "Milho faz parte do grupo de grãos avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Selecione e descarte impurezas visíveis antes do preparo. Lave em água corrente até a água sair mais limpa. Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento.",
    "fontes": [
      "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Grãos e cereais",
      "passos": [
        "Selecione e descarte impurezas visíveis antes do preparo.",
        "Lave em água corrente até a água sair mais limpa.",
        "Mantenha variedade no consumo semanal para reduzir exposição repetida a um único alimento."
      ],
      "observacao": "A lavagem remove poeira e parte do resíduo externo, mas não o que foi absorvido no cultivo.",
      "fonte": "R7: combinação entre lavagem básica e variedade alimentar para redução de exposição."
    }
  },
  {
    "id": "cebola",
    "slug": "cebola",
    "nome": "Cebola",
    "emoji": "🧅",
    "categoria": "Outros",
    "rank": "Cultivo com resíduos",
    "cor": "berry",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Iprodiona",
      "Mancozebe",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Cebola faz parte do grupo de outros avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave a parte externa em água corrente antes de descascar ou cortar. Retire as camadas externas mais expostas quando houver casca seca ou película. Depois do corte, evite reaproveitar cascas e partes superficiais no preparo.",
    "fontes": [
      "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Bulbos e condimentos",
      "passos": [
        "Lave a parte externa em água corrente antes de descascar ou cortar.",
        "Retire as camadas externas mais expostas quando houver casca seca ou película.",
        "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
      ],
      "observacao": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
      "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
    }
  },
  {
    "id": "alho",
    "slug": "alho",
    "nome": "Alho",
    "emoji": "🧄",
    "categoria": "Outros",
    "rank": "Aplicações em campo",
    "cor": "accent",
    "nivel_atencao": "moderado",
    "defensivos": [
      "Mancozebe",
      "Tebuconazol",
      "Clorpirifós"
    ],
    "riscos": [],
    "imagem_url": "https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?auto=format&fit=crop&w=800&q=80",
    "saiba_mais": "Alho faz parte do grupo de outros avaliado nos relatórios de monitoramento de resíduos químicos.",
    "cuidados_texto": "Lave a parte externa em água corrente antes de descascar ou cortar. Retire as camadas externas mais expostas quando houver casca seca ou película. Depois do corte, evite reaproveitar cascas e partes superficiais no preparo.",
    "fontes": [
      "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes.",
      "Fiocruz",
      "INCA"
    ],
    "limpeza": {
      "metodo": "Bulbos e condimentos",
      "passos": [
        "Lave a parte externa em água corrente antes de descascar ou cortar.",
        "Retire as camadas externas mais expostas quando houver casca seca ou película.",
        "Depois do corte, evite reaproveitar cascas e partes superficiais no preparo."
      ],
      "observacao": "Descartar as camadas externas tende a ser a etapa mais útil nesses itens.",
      "fonte": "Aplicação do princípio de lavagem externa e descarte da parte mais exposta citado nas fontes."
    }
  }
];
