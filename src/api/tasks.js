import ajax from "./ajax";

export const getAllTasks = () => {
  return ajax("/task/lead_58be137bfde045e7a0c8d107783c4598");
};

export const addTask = (params) => {
  return ajax("/task/lead_58be137bfde045e7a0c8d107783c4598", {
    data: params,
    method: "post"
  });
};

export const updateTask = (params) => {
  const userId = params.id;
  delete params.id;
  return ajax(`/task/lead_58be137bfde045e7a0c8d107783c4598/${userId}`, {
    data: params,
    method: "put"
  });
};

export const deleteTask = (params) => {
  return ajax(`/task/lead_58be137bfde045e7a0c8d107783c4598/${params.id}`, {
    method: "delete"
  });
};
