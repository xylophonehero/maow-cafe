import React from 'react'
import { ProductList } from "../data/productList"
import { Button } from "../components/components"

const Products = () =>
{
  const format = (amount, currency) => new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency
  }
  ).format(amount)

  const handleSubmit = async event =>
  {
    event.preventDefault()
    const form = new FormData(event.target)
    const data = {
      sku: form.get("sku"),
      quantity: form.get("quantity")
    }
    // const response = await fetch('.netlify/functions/create-checkout.js',
    //   {
    //     method: 'POST',

    //   }
    // )
  }

  return (
    <section className="grid grid-cols-3 gap-2">
      {ProductList.map(product => (
        <div key={product.sku}>
          <img className="w-full" src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{format(product.amount, product.currency)}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="1" max="10" />
            <input type="hidden" name="sku" value={product.sku} />
            <Button type="submit">Buy Now</Button>
          </form>

        </div>

      ))}
    </section>
  )
}

export default Products