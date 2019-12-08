'use strict'

const Contact = use('App/Models/Contacto');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contactos
 */
class ContactoController {
  /**
   * Show a list of all contactos.
   * GET contactos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const contact = await Contact.all();
    return response.json(contact);
  }

  /**
   * Render a form to be used for creating a new contacto.
   * GET contactos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new contacto.
   * POST contactos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const contact = new Contact;
    contact.tipo = request.input('tipo');
    contact.descripcion = request.input('descripcion');
    await contact.save();
  }

  /**
   * Display a single contacto.
   * GET contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const contact = await Contact.find(params.id);
    return response.json(contact);
  }

  /**
   * Render a form to update an existing contacto.
   * GET contactos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update contacto details.
   * PUT or PATCH contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const contact = await Contact.find(params.id);
    contact.tipo = request.input('tipo');
    contact.descripcion = request.input('descripcion');
    await contact.save();
  }

  /**
   * Delete a contacto with id.
   * DELETE contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const contact = await Contact.find(params.id);
    await contact.delete();
  }
}

module.exports = ContactoController
