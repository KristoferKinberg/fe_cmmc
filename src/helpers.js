export const reduceDataToId = arr => arr.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});

/**
 * Formats the filenames
 * @param fileName
 * @returns {*}
 */
export const captialToDash = (fileName) => {
  const [firstLetter, ...rest] = [...fileName.replace('.js', '')];
  return rest.reduce((acc, curr) => curr === curr.toUpperCase()
    ? `${acc}_${curr}`
    : `${acc}${curr.toUpperCase()}`
    , firstLetter.toUpperCase());
};
