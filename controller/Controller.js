export class Controller {
  constructor(model) {
    this.model = model;
  }

  async index(request, response) {
    const users = await this.model.find({}).lean();

    response.json(users);
  }

  async create(request, response) {
    const { email, password, phones, name } = request.body;

    const user = await this.model.create({
      email,
      name,
      password,
      phones,
    });

    response.send(user);
  }

  async read(request, response) {
    const id = request.params.id;

    const user = await this.model.findById(id);

    if (user) {
      return response.send(user);
    }

    response.status(404).send({ message: "Element does not exist" });
  }

  async update(request, response) {
    const { id } = request.params;
    const { email, name, password, phones, mensagem } = request.body;

    const user = await this.model.findByIdAndUpdate(
      id,
      {
        email,
        name,
        password,
        phones,
        mensagem,
      },
      { new: true }
    );

    if (user) {
      return response.send({ user });
    }

    response.status(404).send({ message: "User not found" });
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const user = await this.model.findById(id);

      if (user) {
        await user.remove();

        response.json({ message: "Element Removed" });
      }
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}
