import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { productsTypes } from 'App/utils/productsTypes'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('price').notNullable()
      table.text('description', 'longtext')
      table.enu('type', productsTypes)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
