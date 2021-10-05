import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          type: 'deposit',
          category: 'Venda',
          value: 12000,
          createdAt: new Date('2021-03-10'),
        },
        {
          id: 2,
          title: 'Aluguel do apartamento',
          type: 'withdraw',
          category: 'Casa',
          value: 1200,
          createdAt: new Date('2021-03-08'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody) as Record<string, unknown>;

      data.createdAt = new Date();

      return schema.create('transaction', data);
    });
  },
});
