export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = (table, name) => {
  let result = table.map((item) => item[name])
  if (name === 'colors') {
    result = result.flat()
  }

  return ['all', ...new Set(result)]
}
