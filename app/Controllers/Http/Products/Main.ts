import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { Product } from 'App/Models'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.query().orderBy('id', 'asc')
    return products
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'description', 'price', 'type'])

    const product = await Product.create(data)

    return product
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['name', 'description', 'price', 'type'])
    const product = await Product.findOrFail(params.id)

    product.merge(data)

    await product.save()

    return product
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
  }
}
