import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/products"

const Store = () =>
{
  return (
    <Layout>
      <SEO title="Store" />
      <h1>Store</h1>
      <Products />
    </Layout>
  )
}

export default Store