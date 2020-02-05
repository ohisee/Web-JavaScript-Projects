/**
 * @fileoverview http client
 */
import { addPost } from "./http";

async function addTodo(text: string) {
  const result = await addPost(text);
  console.log(result);
}

addTodo('learn node js');
