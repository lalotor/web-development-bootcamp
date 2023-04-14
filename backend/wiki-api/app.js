const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(express.json({
  type: 'application/json',
}))
app.use(express.static("public"));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

function findAllArticles() {
  return Article.find({});
}

function findArticleByTitle(title) {
  return Article.findOne({ title: title });
}

function updateOneArticleByTitle(title, article) {
  return Article.updateOne({ title: title }, article);
}

function updateArticleByTitle(title, content) {
  return Article.findOneAndUpdate({ title: title }, { $set: { content: content } });
}

function deleteArticleByTitle(title) {
  return Article.deleteOne({ title: title });
}

function successfulResponse(res, code, message, results) {
  res.status(code);
  res.send({
    statusCode: code,
    message: message,
    results: results
  });
}

function errorResponse(res, code, message, error) {
  res.status(code);
  res.send({
    statusCode: code,
    message: message,
    error: error
  });
}

app.route("/articles")
  .get(async (req, res) => {
    findAllArticles().then((articles) => {
      successfulResponse(res, 200, "Articles found", articles)
    }).catch((err) => {
      errorResponse(res, 500, "Unexpected error", err);
    });
  })
  .post(async (req, res) => {
    const article = new Article(req.body);
    const foundArticle = await findArticleByTitle(article.title);
    if (foundArticle) {
      errorResponse(res, 400, "Article '" + article.title + "' already exists", "");
      return;
    }
    const newArticle = await article.save();
    if (newArticle === article) {
      successfulResponse(res, 201, "Article created", []);
    } else {
      errorResponse(res, 500, "Unexpected error", "");
    }
  });
// .delete();

app.route("/articles/:article")
  .get(async (req, res) => {
    findArticleByTitle(req.params.article).then((article) => {
      if (article) {
        successfulResponse(res, 200, "Article found", article);
      } else {
        errorResponse(res, 404, "Article '" + req.params.article + "' not found", "");
      }
    }).catch((err) => {
      errorResponse(res, 500, "Unexpected error", err);
    });
  })
  .put(async (req, res) => {
    const foundArticle = await findArticleByTitle(req.params.article);
    if (!foundArticle) {
      errorResponse(res, 400, "Article '" + req.params.article + "' not found", "");
      return;
    }
    updateOneArticleByTitle(req.params.article, req.body).then(() => {
      successfulResponse(res, 200, "Article '" + req.params.article + "' updated", "")
    }).catch((err) => {
      errorResponse(res, 500, "Unexpected error", err);
    });
  })
  .patch(async (req, res) => {
    const foundArticle = await findArticleByTitle(req.params.article);
    if (!foundArticle) {
      errorResponse(res, 400, "Article '" + req.params.article + "' not found", "");
      return;
    }
    updateArticleByTitle(req.params.article, req.body.content).then(() => {
      successfulResponse(res, 200, "Article '" + req.params.article + "' updated its content", "")
    }).catch((err) => {
      errorResponse(res, 500, "Unexpected error", err);
    });
  })
  .delete(async (req, res) => {
    const foundArticle = await findArticleByTitle(req.params.article);
    if (!foundArticle) {
      errorResponse(res, 400, "Article '" + req.params.article + "' not found", "");
      return;
    }
    deleteArticleByTitle(req.params.article).then(() => {
      successfulResponse(res, 200, "Article '" + req.params.article + "' deleted", "")
    }).catch((err) => {
      errorResponse(res, 500, "Unexpected error", err);
    });
  });

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running")
  });
})
