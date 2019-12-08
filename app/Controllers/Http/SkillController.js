'use strict'

const Skills = use('App/Models/Skill');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with skills
 */
class SkillController {
  /**
   * Show a list of all skills.
   * GET skills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const skill = await Skills.all();
    return response.json(skill);
  }

  /**
   * Render a form to be used for creating a new skill.
   * GET skills/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new skill.
   * POST skills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const skill = new Skills;
    skill.tipo = request.input('tipo');
    skill.nombre = request.input('nombre');
    await skill.save();
  }

  /**
   * Display a single skill.
   * GET skills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const skill = await Skills.find(params.id);
    return response.json(skill);
  }

  /**
   * Render a form to update an existing skill.
   * GET skills/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update skill details.
   * PUT or PATCH skills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const skill = await Skills.find(params.id);
    skill.tipo = request.input('tipo');
    skill.nombre = request.input('nombre');
    await skill.save();
  }

  /**
   * Delete a skill with id.
   * DELETE skills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const skill = await Skills.find(params.id);
    await skill.delete();
  }
}

module.exports = SkillController
