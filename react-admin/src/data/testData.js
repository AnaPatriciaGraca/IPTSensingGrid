
export const events = [
  { id: '000023',
    title: "Apresentação",
    user: "Paulos Santos",
    date: "2023-09-18",
    hour: "08:30",
    room: "B356"
  },
  {
    id: '000076',
    title: "Inscrição turmas",
    user: "Carlos Queiroz",
    date: "2023-09-06",
    hour: "10:00",
    room: "O106"
  },
  {
    id: '000933',
    title: "Organização Equip.",
    user: "Renato Panda",
    date: "2023-09-14",
    hour: "11:45",
    room: "A106"
  },
  {
    id: '000053',
    title: "Abertura Solene",
    user: "José Casimiro Pereira",
    date: "2023-09-07",
    hour: "14:15",
    room: "O104"
  },
  {
    id: '000013',
    title: "Apresentação Alunos",
    user: "Ana Cristina Lopes",
    date: "2023-09-01",
    hour: "15:30",
    room: "B256"
  },
  {
    id: '000027',
    title: "Apresentação Projeto",
    user: "António Manso",
    date: "2023-10-02",
    hour: "08:45",
    room: "B356"
  },
  {
    id: '000028',
    title: "Defesa Trabalhos",
    user: "Luis Almeida",
    date: "2023-11-03",
    hour: "11:00",
    room: "O103"
  },
  {
    id: '000029',
    title: "Reunião Projeto",
    user: "Manuel Barros",
    date: "2023-10-07",
    hour: "13:30",
    room: "I116"
  },
  {
    id: '000111',
    title: "Apresentação Projeto",
    user: "Maria Cristina Costa",
    date: "2023-09-02",
    hour: "16:00",
    room: "H105"
  },
];

export const classes = [
  {
    "id": "Informática",
    "label": "Informática",
    "value": 5,
    "color": "hsl(324, 70%, 50%)"
  },
  {
    "id": "Electrotécnica",
    "label": "Electrotécnica",
    "value": 3,
    "color": "hsl(338, 70%, 50%)"
  },
  {
    "id": "Design",
    "label": "Design",
    "value": 2,
    "color": "hsl(35, 70%, 50%)"
  },
  {
    "id": "Contabilidade",
    "label": "Contabilidade",
    "value": 2,
    "color": "hsl(261, 70%, 50%)"
  },
  {
    "id": "Restauro",
    "label": "Restauro",
    "value": 1,
    "color": "hsl(359, 70%, 50%)"
  }
]

export const usedRooms = [
  {
    bloco: "A",
    "teóricas": 13,
    "técnicas": 33,
    "outros": 5,
    "práticas": 7,
  },
    {
      bloco: "B",
      "teóricas": 7,
      "técnicas": 6,
      "outros": 2,
      "práticas": 3,
    },

    {
      bloco: "C",
      "teóricas": 6,
      "técnicas": 18,
      "outros": 2,
      "práticas": 5,
    },
    {
      bloco: "D",
      "teóricas": 3,
      "técnicas": 4,
      "outros": 16,
      "práticas": 13,
    },
    {
      bloco: "E",
      "teóricas": 21,
      "técnicas": 22,
      "outros": 3,
      "práticas": 4,
    },
    {
      bloco: "F",
      "teóricas": 3,
      "técnicas": 34,
      "outros": 2,
      "práticas": 5,
    },
    
  
];

export const exemploSalas = [
  { 
    nome: 'B265',
    capacidade: "56",
    projetores: "1",
    polo: "Tomar",
    bloco: "B",
  },{ 
    nome: 'B165',
    capacidade: "28",
    projetores: "1",
    polo: "Tomar",
    bloco: "B",
  },{ 
    nome: 'I235',
    capacidade: "70",
    projetores: "1",
    polo: "Tomar",
    bloco: "I",
  },{ 
    nome: '0105',
    capacidade: "28",
    projetores: "1",
    polo: "Tomar",
    bloco: "O",
  },{ 
    nome: '0106',
    capacidade: "48",
    projetores: "0",
    polo: "Tomar",
    bloco: "O",
  },
]

export const freeProfs = [
  {
    "id": "bloco_i",
    "value": 8,
    "label": "Bloco I"
  },
  {
    "id": "bloco_wtf",
    "value": 4,
    "label": "Bloco WTF"
  },
  {
    "id": "bloco_j",
    "value": 7,
    "label": "Bloco J"
  },
  {
    "id": "blobo_B",
    "value": 5,
    "label": "Bloco B"
  },
  {
    "id": "bloco_o",
    "value": 4,
    "label": "Bloco O"
  },
  {
    "id": "bloco_g",
    "value": 2,
    "label": "Bloco G"
  }
]

export const schedulesServices = [
  { id: '000023',
    title: "Serviços Académicos",
    user: "servacademicos@ipt.pt",
    open: "08:30",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "16:30",
  },
  { id: '000024',
    title: "Recursos Humanos",
    user: "drh@ipt.pt",
    open: "08:30",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "16:30",
  },
  { id: '000025',
    title: "Tesouraria",
    user: "tesouraria@ipt.pt",
    open: "09:00",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "17:30",
  },
  { id: '000026',
    title: "Controlo Financeiro",
    user: "projetos@ipt.pt",
    open: "09:00",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "17:30",
  },
  { id: '000027',
    title: "Contabilidade",
    user: "contabilidade@ipt.pt",
    open: "09:00",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "17:30",
  },
  { id: '000028',
    title: "CAB - Biblioteca",
    user: "filomenacasaca@ipt.pt",
    open: "08:30",
    closeLunch: "-",
    openLunch: "-",
    close: "21:30",
  },
  { id: '000028',
    title: "Aprovisionamento",
    user: "aprovisionamento@ipt.pt",
    open: "09:00",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "17:30",
  },
  { id: '000029',
    title: "Acção Social",
    user: "sas@ipt.pt",
    open: "09:00",
    closeLunch: "12:30",
    openLunch: "14:00",
    close: "16:30",
  },
  { id: '000030',
    title: "Laboratórios",
    user: "anamachado@ipt.pt",
    open: "-",
    closeLunch: "-",
    openLunch: "-",
    close: "-",
  },
  { id: '000031',
    title: "Inf. e Sistemas",
    user: "cis@ipt.pt",
    open: "09:00",
    closeLunch: "-",
    openLunch: "-",
    close: "18:00",
  },
  { id: '000032',
    title: "Manutenção e Seg.",
    user: "gm.const@ipt.pt",
    open: "-",
    closeLunch: "-",
    openLunch: "-",
    close: "-",
  },
  
];

export const topFuncHorario = [
  { id: '000023',
    title: "José Casimiro Pereira",
    user: "casimiro@ipt.pt",
    schedule: '10:30'
  },
  { id: '000024',
    title: "Carlos Queiroz",
    user: "qrz@ipt.pt",
    schedule: '10:00'
  },
  { id: '000025',
    title: "Paulo Santos",
    user: "psantos@ipt.pt",
    schedule: '09:30'
  },
  { id: '000026',
    title: "António Manso",
    user: "amanso@ipt.pt",
    schedule: '06:30'
  },
  { id: '000027',
    title: "Luís Almeida",
    user: "lalmeida@ipt.pt",
    schedule: '06:30'
  },
];

export const dadosFuncionarios = [
  {
    id: 1,
    nome: "Renato Panda",
    email: "renato.panda@ipt.pt",
    gabinete: "H216",
    cidade: "Tomar",
    curso: "Escola Superior de Tecnologia de Tomar",
    disciplina: ["Computação em Nuvem e Virtualização", "Engenharia de Software"],
    outros: ["Membro do CI2 - Centrod e Investigação em Cidades Inteligentes"]
  },
  {
    id: 2,
    nome: "Luís Miguel Lopes Oliveira",
    email: "loliveira@ipt.pt",
    gabinete: "H217",
    cidade: "Tomar",
    curso: ["Mestrado em Engenharia Informática-Internet das Coisas"],
    disciplina: ["Desenvolvimento e Operações", "Infraestruturas de Redes Locais", "Internet das Coisas", "Introdução à Engenharia e à Tecnologia", "Redes de Dados II", "Segurança Informática", "Computação em Nuvem e Virtualização", "Infraestruturas de Tecnologia de Informação e Segurança"],
    outros: ["Coordenador da Licenciatura em Engenharia Infomrática", "Membro do ESTT.CTC - Conselho Técnico Cientifico", "Membro do UDE - TIC - Tecnologias de Informação e Comunicação", " Membro do VITA.IPT - Vida Assistida por Ambientes Inteligentes", "Vice-Diretor CI2 - Centrod e Investigação em Cidades Inteligentes"]
  },
  {
    id: 3,
    nome: "Luís Almeida",
    email: "laa@ipt.pt",
    gabinete: "J212",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Mestrado em Engenharia Informática-Internet das Coisas", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Arquitetura de Computadores", "Desenvolvimento e Operações", "Introdução à Engenharia e à Tecnologia", "Segurança Informática", "Sistemas Operativos", "Arquitetura de Sistemas e Computadores", "Estágio", "Segurança Informática"],
    outros: ["Coordenador do TeSP - Tecnologia e Programação em Sistemas de Informação", "Membro do CI2 - Centrod e Investigação em Cidades Inteligentes", "Membro do Conselho Departamental UD TIC", "Membro do UDE - TIC - Tecnologias de Informação e Comunicação", "Membro do VITA.IPT - Vida Assistida por Ambientes Inteligentes"]
  },
  {
    id: 4,
    nome: "Vasco Silva",
    email: "vasco.silva@ipt.pt",
    gabinete: "B111",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Licenciatura em Informática e Tecnologias Multimédia", "Mestrado em Gestão de Recursos Humanos", "Pós-Graduação em Sistemas de Gestão Empresarial - SAP", "TeSP - Design Multimédia", "TeSP - Marketing Digital"],
    disciplina: ["Sistemas de Informação nas Organizações", "Desenvolvimento de Aplicações para Dispositivos Móveis", "Sistemas de Informação nas Organizações", "Tecnologias de Informação e Comunicação", "Sistemas de Informação para a Gestão de Recursos Humanos", "Business Intelligence", "Marketing digital", "Comunicação e Comércio Eletrónico"],
    outros: ["Membro do CI2 - Centrod e Investigação em Cidades Inteligentes", "Membro do Conselho Departamental UD TIC", "Membro do UDE - TIC - Tecnologias de Informação e Comunicação"]
  },
  {
    id: 5,
    nome: "José Casimiro Nunes Pereira",
    email: "casimiro@ipt.pt",
    gabinete: "I211",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Mestrado em Engenharia Informática-Internet das Coisas", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Bases de Dados", "Bases de Dados Avançadas", "Desenvolvimento Web", "Desenvolvimento de Aplicações Móveis", "Engenharia de Software", "Desenvolvimento de Aplicações Móveis Avançadas"],
    outros: ["Secretário ESTT.CPE - Conselho Pedagógico", "Membro do CI2 - Centro de Investigação em Cidades Inteligentes","Membro do NHRC.IPT - Laboratório de Investigação Aplicada em Riscos Naturais","Membro do UDE - TIC - Tecnologias de Informação e Comunicação","Membro do VITA.IPT - Vida Assistida por Ambientes Inteligentes"]
  },
  {
    id: 6,
    nome: "António Manuel Rodrigues Manso",
    email: "manso@ipt.pt",
    gabinete: "B115",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Computação Distribuída", "Introdução à Programação e à Resolução de Problemas", "Programação Orientada a Objectos"],
    outros: ["Coordenador da Microcredenciação em Introdução à Programação", "Membro do ACAP - Academia da Ciência, Arte e Património", "Membro do CI2 - Centro de Investigação em Cidades Inteligentes", "Membro do Conselho Departamental UD TIC", "Membro do LIED.IPT - Laboratório de Inovação Pedagógica e Educação a Distância", "Membro do Techn&Art - Centro de Tecnologia, Restauro e Valorização das Artes", "Membro do UDE - TIC - Tecnologias de Informação e Comunicação", "Membro do VITA.IPT - Vida Assistida por Ambientes Inteligentes"]
  },
  {
    id: 7,
    nome: "Paulo Alexandre Gomes dos Santos",
    email: "psantos@ipt.pt",
    gabinete: "H217",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática"],
    disciplina: ["Desenvolvimento de Aplicações Móveis", "Estruturas de Dados e Algoritmos", "Gestão de Projetos", "Interfaces Web", "Introdução à Programação Web", "Programação Orientada a Objectos"],
    outros: ["Coordenador da Microcredenciação em Microsoft Azure Data Base Fundamentals", "Coordenador da Microcredenciação em Microsoft BI Analytics & Power Platform Fundamentals", "Membro do LIED.IPT - Laboratório de Inovação Pedagógica e Educação a Distância", "Membro do Techn&Art - Centro de Tecnologia, Restauro e Valorização das Artes", "Membro do UDE - TIC - Tecnologias de Informação e Comunicação"]
  },
  {
    id: 8,
    nome: "Carlos David Magalhães Queiroz",
    email: "carlosqrz@ipt.pt",
    gabinete: "J212",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Pós-Graduação em Sistemas de Gestão Empresarial - SAP", "TeSP - Informática de Gestão", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Arquitetura de Computadores", "Introdução à Engenharia e à Tecnologia", "Redes de Dados I", "Redes de Dados II", "Jogos de Simulação Empresarial", "Projecto Integrado", "Aplicações Informáticas de Bases de Dados", "Arquitetura de Redes e Sistemas Informáticos"],
    outros: ["Coordenador da Pós-Graduação em Sistemas de Gestão Empresarial - SAP", "LISI - Laboratório de Informática e Sistemas Inteligentes", "UDE - TIC - Tecnologias de Informação e Comunicação"]
  },
  {
    id: 9,
    nome: "António Casimiro Teixeira Batista",
    email: "cbatista@ipt.pt",
    gabinete: "I212",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Licenciatura em Engenharia Electrotécnica e de Computadores", "TeSP - Automação Industrial", "TeSP - Manutenção e Reabilitação de Sistemas Ferroviários", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Automação Industrial", "Redes Industriais", "Bases de Dados", "Bases de Dados avançadas", "Automação I", "Automação II", "Sistemas de Comunicações Ferroviárias"],
    outros: ["Coordenador do TeSP - Automação Industrial", "Membro do Conselho Departamental UD TIC", "Membro do ESTT.CPE - Conselho Pedagógico", "UDE - TIC - Tecnologias de Informação e Comunicação"]
  },
  {
    id: 10,
    nome: "Maria Manuela Morgado Fernandes Oliveira",
    email: "mfernandes@ipt.pt",
    gabinete: "",
    cidade: "Tomar",
    curso: ["Curso de Especialização em Ciências Empresariais", "Licenciatura em Engenharia Civil", "Licenciatura em Engenharia Electrotécnica e de Computadores", "Licenciatura em Engenharia Informática", "Licenciatura em Gestão de Empresas", "Licenciatura em Tecnologia Química", "Licenciatura em Turismo e Gestão do Património Cultural", "TeSP - Tecnologia e Programação em Sistemas de Informação"],
    disciplina: ["Estatística (GE)", "Métodos Numéricos e Estatísticos", "Matemática Aplicada à Electrotecnia", "Probabilidades e Estatística", "Estatística", "Análise e Tratamento de Dados Experimentais", "Métodos de Análise", "Algoritmos Computacionais"],
    outros: ["Membro da ACAP - Academia da Ciência, Arte e Património", "Secretária do Conselho Departamental UD MF", "Secretária do UDE - MF - Matemática e Fisica"]
  },
  {
    id: 11,
    nome: "João Filipe Rodrigues Silva",
    email: "j_silva@ipt.pt",
    gabinete: "",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática"],
    disciplina: ["Desenvolvimento Web"],
    outros: [""]
  },
  {
    id: 12,
    nome: "Manuel Fernando Martins de Barros",
    email: "fmbarros@ipt.pt",
    gabinete: "I204",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Licenciatura em Engenharia Electrotécnica e de Computadores", "Mestrado em Engenharia Eletrotécnica", "TeSP - Automação Industrial"],
    disciplina: ["Sistemas Digitais", "Laboratório de Microssistemas", "Sistemas Inteligentes", "Sistemas Distribuídos de Controlo", "Robótica Móvel", "Sistemas Lógicos"],
    outros: ["Membro do CI2 - Centro de Investigação em Cidades Inteligentes", "Membro do ESTT.CTC - Conselho Técnico Cientifico", "Membro do NHRC.IPT - Laboratório de Investigação Aplicada em Riscos Naturais", "Membro do UDE - Engenharias"]
  },
  {
    id: 13,
    nome: "Ana Cristina Barata Pires Lopes",
    email: "anacris@ipt.pt",
    gabinete: "I13",
    cidade: "Tomar",
    curso: ["Licenciatura em Engenharia Informática", "Licenciatura em Engenharia Electrotécnica e de Computadores", "Mestrado em Engenharia Informática-Internet das Coisas", "TeSP - Automação Industrial"],
    disciplina: ["Automação Industrial", "Robótica", "Sistemas Embebidos em Tempo Real", "Sistemas Digitais", "Sistemas Inteligentes", "Seminário", "Sistemas Lógicos"],
    outros: ["Coordenador do Mestrado em Engenharia Informática-Internet das Coisas", "Membro do CI2 - Centro de Investigação em Cidades Inteligentes", "Membro do ESTT.CPE - Conselho Pedagógico", "Membro do UDE - Engenharias", "Membro do VITA.IPT - Vida Assistida por Ambientes Inteligentes"]
  },
];

export const devicesList = [
  {
    id: 1,
    name: "Projetor",
    location: "Tomar",
    serialNumber: "ABX12345",
    state: "OK",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Projetor",
    location: "Tomar",
    serialNumber: "XYZ78901",
    state: "OK",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Monitor",
    location: "Tomar",
    serialNumber: "QWERTY12",
    state: "OK",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Projetor",
    location: "Tomar",
    serialNumber: "9876PQRS",
    state: "OK",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Computador",
    location: "Tomar",
    serialNumber: "MNBVCX45",
    state: "OK",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Teclado",
    location: "Tomar",
    serialNumber: "ZYX98765",
    state: "OK",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Monitor",
    location: "Tomar",
    serialNumber: "PLK9876T",
    state: "OK",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Sensor Estacionameto",
    location: "Tomar",
    serialNumber: "1234LKJH",
    state: "OK",
    date: "05/02/2021",
  },
];


