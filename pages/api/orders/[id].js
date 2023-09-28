import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
  }

  if (method === "PUT") {
  }
  if (method === "DELETE") {
  }
};

export default handler;
