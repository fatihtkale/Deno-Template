import { User } from "../types/User.ts";
import { UserData } from "../Mock/MockUserData.ts";

const GetUsers = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: UserData
  };
};

const GetUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user : User | undefined = UserData.find((u) => u.Id === params.id) 

  if (user) {
    response.status = 200;
    response.body = {
      success: true,
      data: user
    }
  }else{
    response.status = 404;
    response.body = {
      success: false,
      msg: "User not found"
    }
  }
};

const AddUser = async (
  { request, response }: { response: any; request: any },
) => {
  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      message: "No data has been set!",
    };
  } else {
    const value = await request.body();
    const user: User = value;

    response.status = 200;
    response.body = {
      inputtedata: user,
      success: true
    };
  }
};

const UpdateUser = (
  { params, request, response }: { params: { id: string }; response: any, request: any },
) => {

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
