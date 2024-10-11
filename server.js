
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'
import { DatabaseFichas } from './database.js';

const server = fastify();
const database = new DatabaseFichas;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/fichas', async (request, reply) => {
    const body = request.body;
    await database.createFicha(body);
    return 201
})


// READ
server.get('/', () => {
    return 'Gordo';
});

server.get('/fichas', () => {
    return 'Gordo Gemini';
});


// UPDATE


// DELETE


server.listen({
    port: 3333
});
