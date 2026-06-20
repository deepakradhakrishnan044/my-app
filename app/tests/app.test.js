const request=require('supertest');
const app=require('../src/app');
describe('API endpoints', () => {
  test('GET / returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('GET /health returns ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});