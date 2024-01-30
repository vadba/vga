import { request } from "./request.js";

export let categories;
try {
  const { result } = await request({ url: "categories" });
  categories = result;
} catch (e) {
  console.e("Error fetching product:", e);
}
