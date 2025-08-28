import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import { readFile } from 'node:fs/promises';
import { resolvers } from './resolvers';
import { getAndInitApolloServer } from './lib/apolloServer';
async function bootstrap() {
    const app = express();
    const port = 9000;

    app.use(cors(), express.json());

    const apolloServer = await getAndInitApolloServer();
    app.use('/graphql', apolloMiddleware(apolloServer));

    app.get('/', (req: any, res: any) => {
        res.send('Hello World!');
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

bootstrap();
