const Songs = require("../model/songs");

module.exports = {
  async index(req, res) {
    const songs = await Songs.get();

    return res.render("index", { songs });
  },

  async save(req, res) {
    const newSong = req.body;

    Songs.save(newSong);

    return res.redirect("/");
  },

  async delete(req, res) {
    const id = req.params.id;
    await Songs.delete(id);

    return res.redirect("/");
  },

  async edit(req, res) {
    const id = req.params.id;
    const songs = await Songs.get();

    const song = await songs.find((song) => Number(song.id) === Number(id));

    return res.render("edit", { song });
  },

  async update(req, res) {
    const id = req.params.id;
    const songs = req.body;

    await Songs.update(songs, id);

    return res.redirect("/");
  },
};
