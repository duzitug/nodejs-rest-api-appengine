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
};
