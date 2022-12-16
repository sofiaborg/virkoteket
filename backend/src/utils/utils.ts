const bcrypt = require("bcrypt");

//skapa en variabel som krypterar lösenordet
export const hashPassword = (password: String) => {
  const hashValue = bcrypt.hashSync(password, 8); //siffran = rundor som hashen kör
  return hashValue;
};

//hämta användare från db och kolla om det inskrivna lösenordet matchar. Om match = logga in.
export const comparePassword = (password: String, hash: String) => {
  const correct = bcrypt.compareSync(password, hash);
  return correct;
};
