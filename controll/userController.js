import userModel from "../model/userModel.js";

export const userController = {
  index: async function (request, response) {
    const users = await userModel.find({}).lean();

    response.json(users);
  },
  create: async function (request, response) {
    const { email, password, phones, name } = request.body;

    const user = await userModel.create({
      email,
      name,
      password,
      phones,
    });

    response.send(user);
  },
  read: async function (request, response) {
    const id = request.params.id;

    const user = await userModel.findById(id);

    if (user) {
      return response.send(user);
    }

    response.status(404).send({ message: "User does not exist" });
  },
  update: async function (request, response) {
    const { id } = request.params;
    const { email, name, password, phones } = request.body;

    const user = await userModel.findByIdAndUpdate(
      id,
      {
        email,
        name,
        password,
        phones,
      },
      { new: true }
    );

    if (user) {
      return response.send({ user });
    }

    response.status(404).send({ message: "User not found" });
  },
  delete: async function (request, response) {
    const { id } = request.params;

    try {
      const user = await userModel.findById(id);

      if (user) {
        await user.remove();

        response.json({ message: "user Removed" });
      }
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  },
};
