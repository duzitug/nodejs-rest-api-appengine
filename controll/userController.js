import userModel from "../model/userModel.js";

export const userController = {
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
  update: async function () {},
  delete: async function () {},
};
