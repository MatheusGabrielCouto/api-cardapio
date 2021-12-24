const productsTypes = ['prato principal', 'bebidas', 'sobrimesas', 'entradas'] as const

type ProductTypes = typeof productsTypes[number]

export { productsTypes, ProductTypes }
