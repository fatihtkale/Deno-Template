import { User } from "../types/User.ts";

const GetUsers = ({ response }: { response: any }) => {
  response.body = "Hello World!";
};

const GetUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  response.body = "Hello World! " + params.id;
};

const AddUser = async (
  { request, response }: { response: any; request: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      message: "No data has been set!",
    };
  } else {
    const value = await request.body();
    const user: User = value;

    response.body = {
      inputtedata: user,
      success: true
    };
  }
};

const UpdateUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  response.body = "Updated User, with id:  " + params.id;
};

const DeleteUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  response.body = "Deleted User, with id: " + params.id;
};


export {
  GetUsers,
  GetUser,
  AddUser,
  UpdateUser,
  DeleteUser
};
