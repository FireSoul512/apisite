'use strict'

const Home = use('App/Models/Home');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with homes
 */
class HomeController {
  /**
   * Show a list of all homes.
   * GET homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let home = await Home.all();
    return response.json(home);
  }

  /**
   * Render a form to be used for creating a new home.
   * GET homes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new home.
   * POST homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const home = new Home();
    home.nombre = request.input('nombre');
    home.descripcion = request.input('descripcion');
    await home.save();
  }

  /**
   * Display a single home.
   * GET homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const home = await Home.find(params.id);
    return response.json(home);
  }

  /**
   * Render a form to update an existing home.
   * GET homes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update home details.
   * PUT or PATCH homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const home = await Home.find(params.id);
    home.nombre = request.input('nombre');
    home.descripcion = request.input('descripcion');
    await home.save();
  }

  /**
   * Delete a home with id.
   * DELETE homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const home = await Home.find(params.id);
    await home.delete();
  }
}

module.exports = HomeController
