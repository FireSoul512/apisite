'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Informacion personal (acerca de mi)
Route.get('Home','HomeController.index');
Route.get('Home/:id',"HomeController.show");
Route.post('Home',"HomeController.store");
Route.put('Home/:id','HomeController.update');
Route.delete('Home/:id','HomeController.destroy');

// Para las habilidades
Route.get('Skill','SkillController.index');
Route.get('Skill/:id',"SkillController.show");
Route.post('Skill',"SkillController.store");
Route.put('Skill/:id','SkillController.update');
Route.delete('Skill/:id','SkillController.destroy');

// Proyectos realizados en la universidad
Route.get('Project','ProyectoController.index');
Route.get('Project/:id',"ProyectoController.show");
Route.post('Project',"ProyectoController.store");
Route.put('Project/:id','ProyectoController.update');
Route.delete('Project/:id','ProyectoController.destroy');

// Formas de encontrarme
Route.get('Contact','ContactoController.index');
Route.get('Contact/:id',"ContactoController.show");
Route.post('Contact',"ContactoController.store");
Route.put('Contact/:id','ContactoController.update');
Route.delete('Contact/:id','ContactoController.destroy');

// NavBar
Route.get('NavBar','NavbarController.index');
Route.get('NavBar/:id',"NavbarController.show");
Route.post('NavBar',"NavbarController.store");
Route.put('NavBar/:id','NavbarController.update');
Route.delete('NavBar/:id','NavbarController.destroy');