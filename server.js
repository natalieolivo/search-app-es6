const express = require("express");
const app = express();

const PORT = 3000;

const randomize = () => {
  return Math.random()
    .toString(36)
    .slice(-5);
};

/**
 * Set Access Headers for CORS
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.post("/api/**/*", (req, res) => {
  res.send([
    {
      articleTitle: "Top Cities in Brazil"
    },
    {
      id: randomize(),
      itemTitle: "Salvador",
      content: "The best city evaaaa"
    }
  ]);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
}

app.listen(PORT);

console.log(`Mock API is now running at: http://localhost:${PORT}`);
