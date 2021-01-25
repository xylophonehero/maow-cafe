exports.handler = async ({ body }) =>
{
  const { sku, qunatity } = JSON.parse(body)

  return {
    statusCode: 200,
    body: JSON.stringify({ sku, qunatity })
  }
}