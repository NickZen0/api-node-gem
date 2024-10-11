import { sql } from './db.js'

sql`
  CREATE TABLE fichas (
      id text PRIMARY KEY,
      name character varying(50),
      descricao character varying(255)
      atributos character varying(30),
      origem character varying(30),
      pericias character varying(30)
  );
`.then(() => {
  console.log('tabela criada');
})