import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/app'
import { User } from '../../src/core/models/User'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('POST /api/auth/register', () => {
  beforeEach(() => {
    // Reset the stubs before each test
    sinon.restore()
  })

  it('should register a new user successfully', async () => {
    // Send some Form Data
    const fakeUser = {
      email: 'test@example.com',
      password: 'password123'
    }

    // Stub the User.findOne method to simulate a user with that email does not exist
    sinon.stub(User, 'findOne').resolves(null)

    // Stub the User.create method to simulate successful registration
    sinon.stub(User, 'create').resolves(fakeUser as never)

    const res = await chai.request(app).post('/api/auth/register').send(fakeUser)

    expect(res).to.have.status(201)
  })

  it('should return 400 when email already exists', async () => {
    const user = {
      email: 'existing@example.com',
      password: 'password123'
    }

    // Stub the User.create method to simulate email already existing
    sinon.stub(User, 'findOne').returns(user as never)

    const res = await chai.request(app).post('/api/auth/register').send(user)

    expect(res).to.have.status(400)
    expect(res.body.message).to.equal('User already exists')
  })

  it('should return 400 when user data is wrong', async () => {
    // Stub the User.findOne method to simulate a user with that email does not exist
    sinon.stub(User, 'findOne').resolves(null)

    // Simulate an unexpected error
    sinon.stub(User, 'create').returns(undefined as never)

    const res = await chai.request(app).post('/api/auth/register').send({
      email: 'unexpected@example.com'
    })

    expect(res).to.have.status(400)
    expect(res.body.message).to.equal('Invalid user data')
  })
})
