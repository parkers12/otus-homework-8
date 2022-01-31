import config from "./config";

export function errorMessage(message) {
  const body = document.getElementsByTagName("body")[0];
  const messageIdNotFound = document.createElement("div");
  body.appendChild(messageIdNotFound).setAttribute("class", config.message);
  messageIdNotFound.setAttribute("id", config.message);
  messageIdNotFound.innerHTML = message;
}
