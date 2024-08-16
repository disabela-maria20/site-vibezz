interface Estado {
  id: number;
  data: string;
  paragraph: string[];
}

export const estados: Estado[] = [
  {
    id: 0, 
    data: 'Brasil',
    paragraph: [
      "Planejamento de posicionamento de marca",
      "Gestão de canais e redes sociais ",
      'Planejamento e Gestão de mídia',
      'Análise de dados e negócio', 
      'Gestão de banco de dados', 
      'Desenvolvimento de produtos', 
      'Business Intelligene', 
      'Storytelling com Dados',
      'Dashboards NRT'
    ]
  },
  {
    id: 1, 
    data: 'Estados Unidos',
    paragraph: [
      "Criação de assets",
      "Análise de dados",
      'Planejamento de marca',
      'Desenvolvimento de produtos'
    ]
  },
  {
    id: 2, 
    data: 'Colômbia',
    paragraph: [
      "Análise de dados",
      "Gestão de banco de dados",
      'Desenvolvimento de produtos',
      'Storytelling com Dados', 
      'Dashboards NRT'
    ]
  },
  {
    id: 3, 
    data: 'México',
    paragraph: [
      "Análise de dados",
      "Gestão de banco de dados",
      'Desenvolvimento de produtos',
      'Storytelling com Dados', 
      'Dashboards NRT'
    ]
  },
];