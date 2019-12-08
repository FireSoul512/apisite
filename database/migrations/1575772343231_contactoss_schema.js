'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactossSchema extends Schema {
  up () {
    this.create('contactosses', (table) => {
      table.increments()
      table.string('tipo',50)
      table.string('descripcion',50)
      table.timestamps()
    })
  }

  down () {
    this.drop('contactosses')
  }
}

module.exports = ContactossSchema
