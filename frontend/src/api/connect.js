import axios from "axios";

const test = async () => {
  const response = await axios("http://localhost:5000/api/test/hello", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
  });

  return response;
};

export default test;
