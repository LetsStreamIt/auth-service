import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
import app from '../../src/index'
import User from '../../src/models/User'
import { MongoServerError } from 'mongodb'

// Middleware to use chai-http
const chai = chaiModule.use(chaiHttp)

describe('POST /register', () => {
  beforeEach(() => {
    // Reset the stubs before each test
    sinon.restore()
  })

  it('should register a new user successfully', async () => {
    // Send some Form Data
    const fakeUser = {
      email: 'test@example.com',
      password: 'hashedpassword',
      username: 'testuser'
    }

    // Stub the User.create method to simulate successful registration
    sinon.stub(User, 'create').resolves(fakeUser as never)

    const res = await chai.request(app).post('/register').send({
      email: 'test@example.com',
      password: 'password123',
      username: 'testuser'
    })

    expect(res).to.have.status(201)
    expect(res.body.success).to.equal(true)
  })

  it('should return 400 when email already exists', async () => {
    // Simulate a MongoServerError with duplicate key error (code 11000)
    const mongoError = new MongoServerError({ code: 11000 })

    // Stub the User.create method to simulate email already existing
    sinon.stub(User, 'create').throws(mongoError)

    const res = await chai.request(app).post('/register').send({
      email: 'existing@example.com',
      password: 'password123',
      username: 'existinguser'
    })

    expect(res).to.have.status(400)
    expect(res.body.success).to.equal(false)
    expect(res.body.message).to.equal('Email already exists')
  })

  it('should return 400 on unexpected error', async () => {
    // Simulate an unexpected error
    sinon.stub(User, 'create').throws(new Error('Unexpected error'))

    const res = await chai.request(app).post('/register').send({
      email: 'unexpected@example.com',
      password: 'password123',
      username: 'unexpecteduser'
    })

    expect(res).to.have.status(400)
    expect(res.body.success).to.equal(false)
    expect(res.body.message).to.equal('Unexpected')
  })
})
