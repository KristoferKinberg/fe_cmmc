export const reduceDataToId = arr => arr.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
