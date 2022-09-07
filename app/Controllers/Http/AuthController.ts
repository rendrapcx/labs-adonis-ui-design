import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async loginShow({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async registerShow({ view }: HttpContextContract) {
    return view.render('auth/register')
  }
}
