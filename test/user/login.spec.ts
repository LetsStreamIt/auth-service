import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/app'
import User from '../../src/models/user'
import bcrypt from 'bcrypt'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('a POST to /api/auth/login', () => {
  beforeEach(() => {
    sinon.restore()
  })

  it('should allow an existing user to login', async () => {
    const fakeUser = {
      email: 'test@example.com',
      password: 'password123'
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(fakeUser.password as string, salt)

    const hashedFakeUser = {
      ...fakeUser,
      password: hashedPwd,
      username: '',
      matchPassword: function (): Promise<boolean> {
        return Promise.resolve(true)
      }
    }
    sinon.stub(User, 'findOne').resolves(hashedFakeUser)

    const res = await chai.request(app).post('/api/auth/login').send(fakeUser)
    expect(res).to.have.status(200)
  })

  it('should not allow the login of a non registered user', async () => {
    const nonExistingUser = {
      email: 'test@example.com',
      password: 'password123'
    }

    sinon.stub(User, 'findOne').resolves(null)
    const res = await chai.request(app).post('/api/auth/login').send(nonExistingUser)
    expect(res).to.have.status(401)
  })

  it('should gracefully manage missing information from the request', async () => {
    const incorrectUser = {
      email: 'test@example.com'
    }

    sinon.stub(User, 'findOne').throws(new Error('data and hash arguments required'))
    const res = await chai.request(app).post('/api/auth/login').send(incorrectUser)
    expect(res).to.have.status(400)
  })
})
