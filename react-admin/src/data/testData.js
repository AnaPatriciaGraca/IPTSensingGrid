
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
  },
  {
    "id": "Electrotécnica",
    "label": "Electrotécnica",
    "value": 3,
  },
  {
    "id": "Design",
    "label": "Design",
    "value": 2,
  },
  {
    "id": "Contabilidade",
    "label": "Contabilidade",
    "value": 2,
  },
  {
    "id": "Restauro",
    "label": "Restauro",
    "value": 1,
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


