const jwt = require('jsonwebtoken')

const jwtAccessKey = 'my_secret_key';
const jwtRefreshKey = 'my_secret_refresh_key';
const jwtAccessTime = 10;
const jwtRefreshTime = 365 * 24 * 60 *60 * 1000;

const users = [
  {name: 'Kamoliddin', email: 'kqodirov@gmail.com', password: '3232'},
  {name: 'Akbar', email: 'aislomov@gmail.com', password: '4343'},
  {name: 'Jamoliddin', email: 'jamoliddinqodirov18@gmail.com', password: '3255'}
]

const signIn = (req, res) => {
  const { email, password } = req.body;
  const currentUser = users.find((user) => user?.email === email);
  const {name} = currentUser;
  const userInfo = {name, email};
  const verifyPassword = currentUser?.password === password;

  if (!currentUser || !verifyPassword) {
    return res.status(401).send({message: "You doesn`t authroized !"}).end();
  }

  const refreshToken = generateToken(userInfo, jwtRefreshKey, jwtRefreshTime);
  const accessToken = generateToken(userInfo, jwtAccessKey, jwtAccessTime);
  
  const options = {
    maxAge: jwtRefreshTime, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
}

  res.cookie('refreshToken', refreshToken, options);
  res.send({accessToken});
  res.end();
}

const signUp = (req, res) => {
  const {name, email, password} = req.body;
  const newUser = {name, email, password};
  const userInfo = {name, email}
  const refreshToken = generateToken(userInfo, jwtRefreshKey, jwtRefreshTime);
  
  const accessToken = generateToken(userInfo, jwtAccessKey, jwtAccessTime);
  
  let options = {
    maxAge: jwtRefreshTime,
    httpOnly: true,
  }
  users.push(newUser);
  res.cookie('refreshToken', refreshToken, options);
  res.send({accessToken});
  res.end();
}

const verify = (req, res) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).end();
  }

  let payload
  try {
    payload = jwt.verify(accessToken, jwtAccessKey);
  } 
  catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({message: "You doesn`t authroized !"}).end();
    }
    return res.status(400).end();
  }

  if(Date.now() >= payload.exp * 1000) {
    console.log('time: ', payload.exp, '---', Date.now());
    return res.status(401).send({message: "You doesn`t authroized !"}).end();
  }

  const {name, email} = users.find((user) => user?.email === payload.email);

  res.send({name, email});
  res.end();
}

const refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).end()
  }

  let payload;
  try {
    payload = jwt.verify(refreshToken, jwtRefreshKey);
  } catch (e) {
    return res.status(401).send({message: "You doesn`t authroized !"}).end();
  }
  const {name, email} = users.find((user) => user?.email === payload.email);
  const accessToken = generateToken({name, email}, jwtAccessKey, jwtAccessTime);
  res.send({accessToken});
  res.end();
}

const logout = (req, res) => {
  res.cookie('refreshToken', '', { maxAge: 0 });
  res.end();
}

function generateToken(payload, key, time) {
  const accessToken = jwt.sign(payload, key, {
    algorithm: 'HS256',
    expiresIn: time
  });

  return accessToken;
}

module.exports = {
  signIn,
  signUp,
  verify,
  refresh,
  logout
}
