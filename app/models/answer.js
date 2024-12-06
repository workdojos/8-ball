module.exports = (db, type) =>
{
  return db.define('answer', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: type.STRING
  })
}
