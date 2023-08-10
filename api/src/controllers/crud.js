const { where } = require("sequelize");

class Crud {
  constructor(Model) {
    this.Model = Model;
  }
  async getAll(req, res) {
    return await this.Model.findAll();
  }

  async getById(req, res) {
    const id = req.params.id;
    return await this.Model.findByPk(id);
  }

  async create(req, res) {
    const record = req.body;
    return await this.Model.create(record);
  }

  async update(req, res) {
    const id = req.params.id;
    const record = req.body;
    return await this.Model.update(record, { where: { id } });
  }

  async delete(req, res) {
    const id = req.params.id;
    return this.Model.destroy({ where: { id } });
  }
}
module.exports = Crud;
