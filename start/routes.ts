/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/test', async ({ view }) => {
  return view.render('test')
})


Route.get('/login', 'AuthController.loginShow').as('auth.login')
Route.get('/register', 'AuthController.registerShow').as('auth.register')

Route.get('/dashboard', 'CoursesController.index').as('cs.dashboard')
// Route.get('/profile', 'CoursesController.index').as('cs.profile')
Route.get('/profile', async ({ view }) => { return view.render('courses/profiles/index') }).as('cs.profile')
Route.get('/class', async ({ view }) => { return view.render('courses/classes/index') }).as('cs.class')
Route.get('/schedule', async ({ view }) => { return view.render('courses/schedule/index') }).as('cs.schedule')
Route.get('/syllabus', async ({ view }) => { return view.render('courses/syllabus/index') }).as('cs.syllabus')
Route.get('/students', async ({ view }) => { return view.render('courses/students/index') }).as('cs.students')
Route.get('/grade', async ({ view }) => { return view.render('courses/grade/index') }).as('cs.grade')
Route.get('/settings', async ({ view }) => { return view.render('courses/settings/index') }).as('cs.settings')

Route.group(() => {
  Route.get('/', async ({ view }) => { return view.render('alpine/index') }).as('basic.index')
  Route.get('/xdata', async ({ view }) => { return view.render('alpine/basic/x-data') }).as('basic.xdata')
  Route.get('/dropdown', async ({ view }) => { return view.render('alpine/basic/dropdown') }).as('basic.dropdown')
  Route.get('/tab', async ({ view }) => { return view.render('alpine/basic/tab') }).as('basic.tab')
  Route.get('/carousel', async ({ view }) => { return view.render('alpine/basic/carousel') }).as('basic.carousel')
  Route.get('/accordion', async ({ view }) => { return view.render('alpine/basic/accordion') }).as('basic.accordion')
  Route.get('/modal', async ({ view }) => { return view.render('alpine/basic/modal') }).as('basic.modal')
  Route.get('/popover', async ({ view }) => { return view.render('alpine/basic/popover') }).as('basic.popover')
  Route.get('/notification', async ({ view }) => { return view.render('alpine/basic/notification') }).as('basic.notification')
}).prefix('/basic')
