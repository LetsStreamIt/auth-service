import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/app'
import { User } from '../../src/core/models/User'
import mongoose from 'mongoose'
import { ProfileRepository } from '../../src/infrastructure/adapters/repositories/ProfileRepository'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('POST /api/auth/register', () => {
  beforeEach(() => {
    // Reset the stubs before each test
    sinon.restore()
    sinon.stub(mongoose, 'connect').resolves()
  })

  it('should register a new user successfully', async () => {
    // Send some Form Data
    const fakeUser = {
      email: 'test@example.com',
      password: 'password123',
      username: 'testuser'
    }

    // Stub the User.findOne method to simulate a user with that email does not exist
    sinon.stub(User, 'findOne').resolves(null)

    // Stub the User.create method to simulate successful registration
    sinon.stub(User, 'create').resolves(fakeUser as never)

    sinon.stub(ProfileRepository.prototype, 'createUserProfile').resolves()

    const res = await chai.request(app).post('/api/auth/register').send(fakeUser)

    expect(res).to.have.status(201)
    expect(res.body).to.have.property('accessToken')
    expect(res.body).to.have.property('refreshToken')
    expect(res.body).to.have.property('email')
    expect(res.body.email).to.equal(fakeUser.email)
    expect(res.body).to.not.have.property('password')
  })

  it('should return 400 when email already exists', async () => {
    const user = {
      email: 'existing@example.com',
      password: 'password123',
      username: 'existinguser'
    }

    // Stub the User.create method to simulate email already existing
    sinon.stub(User, 'findOne').returns(user as never)

    const res = await chai.request(app).post('/api/auth/register').send(user)

    expect(res).to.have.status(400)
    expect(res.body.message).to.equal('User already exists')
    expect(res.body).to.not.have.property('accessToken')
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
    expect(res.body).to.not.have.property('accessToken')
  })
})
