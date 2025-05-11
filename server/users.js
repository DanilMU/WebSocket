const { trimStr } = require("./utils");

let users = [];

const addUser = (user) => {
  const userName = trimStr(user.name);
  const userRoom = trimStr(user.room);

  const isExist = users.find((u) => u.name === userName && u.room === userRoom);

  !isExist && users.push(user)
};
