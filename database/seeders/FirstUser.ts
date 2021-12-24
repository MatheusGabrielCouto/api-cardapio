import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { User } from 'App/Models'

export default class FirstUserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      email: 'admin@admin.com',
      password: 'admin11'
    })
  }
}
