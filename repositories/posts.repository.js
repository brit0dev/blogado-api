export default class PostsRepository {
  async list() {
    console.log("get");
    return { Message: "get" };
  }
  async findById(id) {
    console.log("find", id);
  }
  async create(data) {
    console.log("create", data);
  }
  async update(id, data) {
    console.log("update", id, data);
  }
  async delete(id) {
    console.log("delete", id);
  }
}
