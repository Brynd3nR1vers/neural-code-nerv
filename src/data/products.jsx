// src/data/products.js
import sandevistanImg from '../images/sandevi1.png';
import militechImg from '../images/militech.png'; 
import kiroshiImg from '../images/kiroshi.png'
import handsImg from '../images/hands.png'
import compImg from '../images/comp.png'
import entryImg from'../images/entry.png'


export const productsDB = [
  { 
    id: 1, 
    name: "MAGI_CLOUD_OS", 
    price: 450, 
    img: militechImg, 
    description: "Sistema operativo central para gestión de datos tácticos." 
  },
  { 
    id: 2, 
    name: "NEURAL_LINK_V2", 
    price: 890, 
    img: sandevistanImg, 
    description: "Enlace neuronal con protocolos Militech optimizados." 
  },
  { 
    id: 3, 
    name: "OPTICAS_KIROSHI", 
    price: 120, 
    img: kiroshiImg, 
    description: "Cyberware ocular ." 
  },
  { 
    id: 4, 
    name: "S2_CHROME_COMPRESSOR", 
    price: 5500, 
    img: compImg, 
    description: "Fuente de energía infinita basada en el motor S2." 
  },
  { 
    id: 5, 
    name: "ENTRY_PLUG_SOFT", 
    price: 300, 
    img: entryImg, // <--- Asegúrate de que tenga imagen asignada
    description: " Control de eyección y soporte vital del piloto." 
  },
  { 
    id: 6, 
    name: "CYBER-FISTS", 
    price: 1200, 
    img: handsImg, // <--- Asegúrate de que tenga imagen asignada
    description: "Cyberware para nudillos" 
  }
];