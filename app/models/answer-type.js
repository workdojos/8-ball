module.exports = (db, type) =>
{
  return db.define('answerType', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  })
}
