import ajax from "./ajax";

export function getAllAssignees() {
  return ajax("/team");
}
