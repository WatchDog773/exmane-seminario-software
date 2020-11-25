const mongoDB = require("../models/dbm");
const objetId = require("mongodb").ObjectID;

class ordenModel {
  constructor() {
    this.collection = null;
    mongoDB
      .getDb()
      .then((db) => {
        this.collection = db.collection("ordenes");
      })
      .catch((ex) => {
        throw ex;
      });
  }

  async getAll() {
    try {
      let result = await this.collection.find({}).toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id) {
    try {
      const _id = new objetId(id);
      const oneDocument = await this.collection.findOne({ _id });
      return oneDocument;
    } catch (error) {
      throw error;
    }
  }

  async addOne(document) {
    try {
      const result = await this.collection.insertOne(document);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateOneById(id, state) {
    try {
      const _id = new objetId(id);
      const updateIntructions = { $set: { state } };
      const updateDocument = await this.collection.findOneAndUpdate(
        { _id },
        updateIntructions,
        { returnOriginal: false }
      );
      return updateDocument;
    } catch (error) {
      throw error;
    }
  }

  async deleteOneById(id) {
    try {
      const _id = new objetId(id);
      const oneDocument = await this.collection.deleteOne({ _id });
      return oneDocument;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ordenModel;
