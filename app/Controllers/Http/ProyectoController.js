'use strict'

const Proyecto = use('App/Models/Proyecto');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proyectos
 */
class ProyectoController {
  /**
   * Show a list of all proyectos.
   * GET proyectos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const proyecto = await Proyecto.all();
    return response.json(proyecto);
  }

  /**
   * Render a form to be used for creating a new proyecto.
   * GET proyectos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new proyecto.
   * POST proyectos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const proyecto = new Proyecto;
    proyecto.imagen = request.input('imagen');
    proyecto.descripcion = request.input('descripcion');
    await proyecto.save();
  }

  /**
   * Display a single proyecto.
   * GET proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const proyecto = await Proyecto.find(params.id);
    return response.json(proyecto);
  }

  /**
   * Render a form to update an existing proyecto.
   * GET proyectos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update proyecto details.
   * PUT or PATCH proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const proyecto = await Proyecto.find(params.id);
    proyecto.imagen = request.input('imagen');
    proyecto.descripcion = request.input('descripcion');
    await proyecto.save();
  }

  /**
   * Delete a proyecto with id.
   * DELETE proyectos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const proyecto = await Proyecto.find(params.id);
    await proyecto.delete();
  }
}

module.exports = ProyectoController
