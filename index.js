import express from "express";


const app = express();
const port = 3000;

app.use(express.static("public"));

let blogs = [
  {
    id: "1",
    title: "Blog Satu",
    snippet:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem ",
  },
  {
    id: "2",
    title: "Blog Dua",
    snippet:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem ",
  },
  {
    id: "3",
    title: "Blog Tiga",
    snippet:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatibus! lorem ",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.get("/blogs", (req, res) => {
  res.render("blogs/index.ejs", { blogs: blogs });
});

app.get("/blogs/create", (req, res) => {
  res.render("blogs/create.ejs");
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogs.find((blog) => blog.id == id);
  res.render("blogs/details.ejs", { blog: blog });
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  blogs = blogs.filter((blog) => blog.id != id);
  res.json({ redirect: "/blogs" });
});

app.put("/blogs/:id", (req, res) => {
  const id = req.params.id;
  const { title, snippet } = req.body;
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    blog.title = title;
    blog.snippet = snippet;
  }
  res.render("blogs/details.ejs", { blog: blog });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
