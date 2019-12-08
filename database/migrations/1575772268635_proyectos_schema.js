'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectosSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.string('imagen',100)
      table.string('descripcion',1000)
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectosSchema
