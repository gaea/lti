const request = require('supertest');
const express = require('express');
const healthRouter = require('../health');

describe('Health Check Endpoint', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use('/api/health', healthRouter);
  });

  it('should return 200 and correct message', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual({
      status: 'ok',
      message: 'ATS Backend Service is running'
    });
  });
}); 