import fs from "fs";
import path from "path";
import matter from "gray-matter";

const todosDirectory = path.join(process.cwd(), "todos");

export function getTodosFiles() {
  return fs.readdirSync(todosDirectory);
}

export function getTodoData(todoIdentifier) {
  const todoSlug = todoIdentifier.replace(/\.md$/, ""); // 확장자 이름 삭제
  const filePath = path.join(todosDirectory, `${todoSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const todoData = {
    slug: todoSlug,
    ...data,
    content,
  };

  return todoData;
}

export function getAllTodos() {
  const todoFiles = getTodosFiles();

  const allTodos = todoFiles.map((todoFile) => {
    return getTodoData(todoFile);
  });
  const sortedTodos = allTodos.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedTodos;
}

export function getFeaturedTodos() {
  const allTodos = getAllTodos();

  const featuredTodos = allTodos.filter((todo) => todo.isFeatured);

  return featuredTodos;
}
