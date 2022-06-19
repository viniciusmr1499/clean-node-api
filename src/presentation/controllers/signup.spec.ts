import { SignupController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignupController', () => {
  it('should be able return 400 if no name is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const signupController = new SignupController()
    const httpResponse = signupController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  it('should be able return 400 if no email is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const signupController = new SignupController()
    const httpResponse = signupController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should be able return 400 if no password is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_name',
        name: 'any_name',
        passwordConfirmation: 'any_password'
      }
    }
    const signupController = new SignupController()
    const httpResponse = signupController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should be able return 400 if no passwordConfirmation is provided', () => {
    const httpRequest = {
      body: {
        email: 'any_name',
        name: 'any_name',
        password: 'any_password'
      }
    }
    const signupController = new SignupController()
    const httpResponse = signupController.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
