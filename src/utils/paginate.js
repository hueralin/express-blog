const paginate = async (model, pagination, filters, sorter) => {
  const { count, rows } = await model.findAll();
  return { count, rows };
};

module.exports = paginate;
