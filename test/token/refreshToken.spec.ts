import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/app'
import jwt from 'jsonwebtoken'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('a POST to /api/auth/refresh', () => {
  beforeEach(() => {
    sinon.restore()
  })

  it('should grant a new token when the refresh one is correct', async () => {
    const data = {
      refreshToken: 'a working refresh token'
    }
    sinon.stub(jwt, 'verify').resolves({ email: 'test@example.com' })

    const res = await chai.request(app).post('/api/auth/refresh').send(data)
    expect(res).to.have.status(201)
  })

  it('should not grant a new token if a refresh token is not provided', async () => {
    const res = await chai.request(app).post('/api/auth/refresh')
    expect(res).to.have.status(400)
  })

  it('should not grant a new token if the refresh token is not valid', async () => {
    const data = {
      refreshToken: 'a broken refresh token'
    }
    sinon.stub(jwt, 'verify').throws(new Error())
    const res = await chai.request(app).post('/api/auth/refresh').send(data)
    expect(res).to.have.status(401)
  })
})
