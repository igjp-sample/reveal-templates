import express from "express";
import reveal, { RevealOptions } from "reveal-sdk-node";

const app = express();
app.use(express.static("public"));

// Enable the Reveal Server.
const revealOptions: RevealOptions = {
  localFileStoragePath: "data",
};
app.use("/", reveal(revealOptions));

app.listen(3000, () => {
  console.info(`RevealServer is running on http://localhost:3000/`);
});
