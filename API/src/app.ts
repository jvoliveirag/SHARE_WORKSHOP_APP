import cors from 'cors'
import express from 'express'
import { createTechnician } from './routes/create-technician'
import { deleteTechnician } from './routes/delete-technician'
import { getAllTechnicians } from './routes/get-all-technicians'
import { findTechnicianByEmail } from './routes/get-technician-by-email'
import { updateTechnician } from './routes/update-technician'

// Configuração mais detalhada do CORS
const corsOptions = {
  origin: '*', // ou uma lista de origens permitidas ['http://localhost:3000', 'https://seu-outro-app.com']
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // incluir credenciais (por exemplo, cookies)
  optionsSuccessStatus: 204, // alguns navegadores (por exemplo, Chrome) podem retornar 204
};

const app = express()

app.use(cors(corsOptions));

app.use(express.json())
app.use(getAllTechnicians)
app.use(createTechnician)
app.use(deleteTechnician)
app.use(updateTechnician)
app.use(findTechnicianByEmail)

export { app }

