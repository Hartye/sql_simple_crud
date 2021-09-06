const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const songs = await db.all(`SELECT * FROM songs`);

    db.close();

    return songs;
  },

  async save(newSong) {
    const db = await Database();

    await db.run(`
    INSERT INTO songs (
      name,
      rating,
      date
    ) VALUES (
      "${newSong.name}",
      ${newSong.rating},
      "${newSong.date}"
    )
    `);
  },

  async delete(id) {
    const db = await Database();

    await db.run(`DELETE FROM songs WHERE id = ${id}`);

    await db.close();
  },

  async update(edit, id) {
    const db = await Database();

    await db.run(`
    UPDATE songs SET 
      name = "${edit.name}", 
      rating = ${edit.rating}, 
      date = "${edit.date}" 
      WHERE id = ${id}
    `);

    await db.close();
  },
};
