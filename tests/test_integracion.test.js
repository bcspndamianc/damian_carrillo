// tests/test_integracion.test.js
const request = require('supertest');
const app = require('../app');

describe('Pruebas de integración sobre el servidor', () => {
  it('Debe responder al endpoint raíz con mensaje correcto', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Damian Carrillo');
  });

  it('Debe devolver resultado correcto en /suma/:a/:b', async () => {
    const res = await request(app).get('/suma/2/5');
    expect(res.body.resultado).toBe(7);
  });
});
