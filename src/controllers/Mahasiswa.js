async function hashPassword(pass) {
  const password = pass;
  const saltRound = 11;
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRound, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
  return hashedPassword;
}

module.exports = {
 
};
