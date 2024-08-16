import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/app'
import jwt from 'jsonwebtoken'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('a POST to /api/auth/validate', () => {
  beforeEach(() => {
    sinon.restore()
  })

  it('should check if a token is correct', async () => {
    const data = {
      accessToken: 'a working access token'
    }
    sinon.stub(jwt, 'verify').resolves({ email: 'test@example.com' })

    const res = await chai.request(app).post('/api/auth/validate').send(data)
    expect(res).to.have.status(200)

    sinon.restore()
    const badData = {
      accessToken: 'an invalid access token'
    }
    sinon.stub(jwt, 'verify').throws(new Error())

    const badRes = await chai.request(app).post('/api/auth/validate').send(badData)
    expect(badRes).to.have.status(401)
  })

  it('should fail in a controlled manner if the access token is not provided', async () => {
    const res = await chai.request(app).post('/api/auth/refresh')
    expect(res).to.have.status(400)
  })
})
