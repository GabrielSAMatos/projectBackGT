const request = require('supertest');
const express = require('express');


const CategoryRoutes = require('../api/routes/CategoryRoutes'); // Caminho para as rotas
const app = express();

// Mock do controlador
jest.mock('../api/controllers/CategoryController', () => {
  return jest.fn().mockImplementation(() => ({
    findAll: jest.fn().mockImplementation((req, res) => res.status(200).json([{ id: 1, name: 'Test Category' }])),
    findById: jest.fn().mockImplementation((req, res) => res.status(200).json({ id: req.params.id, name: 'Test Category' })),
    create: jest.fn().mockImplementation((req, res) => res.status(201).json({ id: 1, name: req.body.name })),
    update: jest.fn().mockImplementation((req, res) => res.status(200).json({ id: req.params.id, name: req.body.name })),
    delete: jest.fn().mockImplementation((req, res) => res.status(204).send())
  }));
});

// Middleware de configuração do Express
app.use(express.json());
app.use('/api', CategoryRoutes);

// Testes
describe('Category API', () => {
  
  // Teste para o GET /api/category/:id
  test('GET /api/category/:id deve retornar a categoria correta', async () => {
    const response = await request(app).get('/api/category/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: '1', name: 'Test Category' });
  });

  // Teste para o POST /api/category
  test('POST /api/category deve criar uma categoria', async () => {
    const response = await request(app).post('/api/category').send({ name: 'New Category' });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 1, name: 'New Category' });
  });

  // Teste para o PUT /api/category/:id
  test('PUT /api/category/:id deve atualizar a categoria', async () => {
    const response = await request(app).put('/api/category/1').send({ name: 'Updated Category' });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: '1', name: 'Updated Category' });
  });

  // Teste para o DELETE /api/category/:id
  test('DELETE /api/category/:id deve deletar a categoria', async () => {
    const response = await request(app).delete('/api/category/1');
    expect(response.status).toBe(204);
  });
});
