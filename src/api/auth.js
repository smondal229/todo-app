import ajax from "./ajax";

export function login(params) {
  return ajax("/login", { data: params, method: "post" });
}

export function getUserId(params) {
  return ajax("/user");
}
