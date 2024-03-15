import cors from 'cors'
import express from 'express'
import { createProfessor } from './routes/create-professor'
import { deleteProfessor } from './routes/delete-professor'
import { getAllProfessors } from './routes/get-all-professors'
import { findProfessorByEmail } from './routes/get-professor-by-email'
import { updateProfessor } from './routes/update-professor'

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
app.use(getAllProfessors)
app.use(createProfessor)
app.use(deleteProfessor)
app.use(updateProfessor)
app.use(findProfessorByEmail)

export { app }

