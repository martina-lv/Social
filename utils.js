const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

// const createCard = (parent, imgLink, title, price) => {
//   const wrapperEl = c("div");
//   const titleEl = c("h3");
//   const priceEl = c("p");
//   const imgEl = c("img");

//   wrapperEl.className = "wrapper";
//   titleEl.className = "title";
//   priceEl.className = "price";
//   imgEl.className = "img";

//   imgEl.setAttribute("alt", title);
//   imgEl.setAttribute("src", imgLink);

//   titleEl.textContent = title;
//   priceEl.textContent = price;

//   wrapperEl.append(imgEl, titleEl, priceEl);
//   parent.appendChild(wrapperEl);
// };

const createFriendEl = (parent, name, photo) => {
  const wrapper = c("div");
  const img = c("img");
  const par = c("p");

  wrapper.className = "friendCard";
  img.setAttribute("alt", name);
  img.setAttribute("src", photo);
  par.textContent = name;

  wrapper.append(img, par);
  parent.appendChild(wrapper);
};

const createMessageEl = (parent, text, sender, date, id) => {
  const wrapper = c("div");
  const textPar = c("p");
  const senderPar = c("p");
  const dataPar = c("p");
  const deleteBtn = c("button");

  deleteBtn.className = "deletemsg";
  wrapper.className = "messageCard";
  textPar.textContent = text;
  senderPar.textContent = sender;
  deleteBtn.textContent = "x";
  // dataPar.textContent = date.split('T')[0].split('-').reverse().join('-');
  dataPar.textContent = date;

  wrapper.append(deleteBtn, textPar, senderPar, dataPar);
  parent.appendChild(wrapper);

  deleteBtn.addEventListener("click", () => {
    DELETE("https://edgemony-backend.herokuapp.com/messages", id).then(() =>
      location.reload()
    );
  });
};

export { c, q, createFriendEl, createMessageEl };
import { DELETE } from "./api.js";
