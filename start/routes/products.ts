import Route from '@ioc:Adonis/Core/Route'

Route.get('/products', 'Products/Main.index')
Route.post('/products', 'Products/Main.store').middleware('auth')
Route.get('/products/:id', 'Products/Main.show')
Route.put('/products/:id', 'Products/Main.update').middleware('auth')
Route.delete('/products/:id', 'Products/Main.destroy').middleware('auth')
