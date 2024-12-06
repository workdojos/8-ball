module.exports = (db, type) =>
{
  return db.define('question', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: type.STRING
  })
}
