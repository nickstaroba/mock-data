const jsonServer = require("json-server");
const cors = require("cors");

require("dotenv").config();
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT || 3000;

const server = jsonServer.create();

const domainList = [process.env.DOMAIN];

const corsOptions = {
  origin(origin, callback) {
    if (domainList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

server.use(cors(corsOptions));

const router = jsonServer.router("db.json", {});

const middlewares = jsonServer.defaults({});

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(PORT, () => {
  console.info(`JSON Server is running on port ${PORT}`);
});
