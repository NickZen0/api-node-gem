import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class DatabaseFichas {
    async createFicha(ficha) {
        const id = randomUUID();
        const name = ficha.name;
        const descricao = ficha.descricao;

        await sql`insert into fichas (id, name, descricao, atributos, origem, pericias)
        values (${id}, ${name}, ${descricao})`
    }
}