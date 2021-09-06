const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
    CREATE TABLE songs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      rating INT,
      date DATETIME
    )
    `);

    await db.run(`
    INSERT INTO songs (
      name,
      rating,
      date
    ) VALUES (
      "My Demons",
      4,
      "02/06/2008"
    )
    `);

    await db.close();
  },
};

initDb.init();
