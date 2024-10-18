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
      accessToken: 'aWorkingAccessToken'
    }
    sinon.stub(jwt, 'verify').resolves({ email: 'test@example.com' })

    const res = await chai
      .request(app)
      .post('/api/auth/validate')
      .set('authorization', `Bearer ${data.accessToken}`)
    expect(res).to.have.status(200)
    expect(res.body).to.have.property('accessToken')

    sinon.restore()
    const badData = {
      accessToken: 'anInvalidAccessToken'
    }
    sinon.stub(jwt, 'verify').throws(new Error())

    const badRes = await chai
      .request(app)
      .post('/api/auth/validate')
      .set('authorization', `Bearer ${badData.accessToken}`)
    expect(badRes).to.have.status(401)
    expect(badRes.body.message).to.equal('Invalid access token')
    expect(badRes.body).to.not.have.property('accessToken')
  })

  it('should fail in a controlled manner if the access token is not provided', async () => {
    const res = await chai.request(app).post('/api/auth/validate')
    expect(res).to.have.status(401)
    expect(res.body.message).to.equal('Authorization header missing or malformed')
    expect(res.body).to.not.have.property('accessToken')
  })

  it('should fail in a controlled manner if the wrong type of access token is provided', async () => {
    const res = await chai
      .request(app)
      .post('/api/auth/validate')
      .set('authorization', 'NotBearer token')
    expect(res).to.have.status(401)
    expect(res.body.message).to.equal('Authorization header missing or malformed')
    expect(res.body).to.not.have.property('accessToken')
  })
})
