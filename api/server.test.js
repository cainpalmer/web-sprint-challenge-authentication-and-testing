
const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');



test('sanity', () => {
  expect(true).toBe(true)
});

test('is the correct enviornment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
});



describe('[POST] /register', () => {
  test('gives error when no username', async () => {
    const res = await request(server).post('/api/auth/register')
    .send({username: '', password: '1234'})
    expect(res.body).toMatchObject({message: 'username and password required'})
  })
  test('gives error when no password', async () => {
    const res = await request(server).post('/api/auth/register')
    .send({username: 'Kyle', password: ''})
    expect(res.body).toMatchObject({message: 'username and password required'})
  })
})

describe('[POST] /login', () => {
  test('gives error when no username', async () => {
    const res = await request(server).post('/login')
    .send({username: '', password: '1234'})
    expect(res.status).toBe(404)
  })
  test('gives error when no password', async () => {
    const res = await request(server).post('/api/auth/login')
    .send({username: 'Kyle', password: ''})
    expect(res.body).toMatchObject({message: 'username and password required'})
  })
})