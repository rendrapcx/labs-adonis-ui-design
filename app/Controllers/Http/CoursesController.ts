import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CoursesController {
  public async index({ view }: HttpContextContract) {
    return view.render('courses/dashboard/index')
  }
}
