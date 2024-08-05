const healthcheckController = (req, res) => {
  return res
    .status(200)
    .json({ status: "ok", message: "System running optimally :)" });
};
export default healthcheckController;
