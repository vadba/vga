import axios from "axios";

const instance = axios.create({
  baseURL: `https://vga-api.onrender.com:3004`,
  // baseURL: `${process.env.VITE_API_URL}/server/`,
});

export const request = async ({
  url,
  method = "GET",
  params,
  body,
  headers,
} = {}) => {
  instance.defaults.headers.post["Content-Type"] = "application/json";

  const fetchData = () => {
    if (method === "GET") {
      return instance.get(url, { params });
    }
    if (method === "POST") {
      return instance.post(url, body, { headers });
    }
    if (method === "PUT") {
      return instance.put(url, body, { headers });
    }
    if (method === "DELETE") {
      return instance.delete(url, { headers });
    }
  };

  try {
    const { data, status } = await fetchData();

    return { result: data, status };
  } catch (errors) {
    return { err: errors.response };
  }
};
