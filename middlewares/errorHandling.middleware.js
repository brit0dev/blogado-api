export default function ErrorHandler(error, req, res, next) {
  console.log("Error: ", error);
  res
    .status(error.APIStatus || 500)
    .json({ Message: error.APIMessage || "Internal server error" });
}
