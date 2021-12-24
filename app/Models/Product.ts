import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { ProductTypes } from 'App/utils/productsTypes'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public type: ProductTypes

  @column()
  public price: string
}
