import supertest from 'supertest';
import app from '../index';
import prosses from './../utilities/prosses';
const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the home endpoint', async () => {
    const response = request.get('/');
    expect((await response).status).toBe(200);
  });
  it('gets the api endpoint', async () => {
    const response = request.get('/api');
    expect((await response).status).toBe(200);
  });
  it('gets the image endpoint', async () => {
    const response = request.get(
      '/api/image?filename=fjord&width=100&height=100'
    );
    expect((await response).status).toBe(200);
  });
});
describe('Test shape responses', () => {
  it('width and height is number', async () => {
    expect(prosses('fjord', '200', '200')).toEqual(40000);
  });
});
