import express from "express";
import reveal, { RevealOptions } from "reveal-sdk-node";

const app = express();
app.use(express.static("public"));

// Enable the Reveal Server.
const revealOptions: RevealOptions = {
  localFileStoragePath: "data",
};
if (process.env.REVEAL_LICENSE_KEY) {
  revealOptions.license = process.env.REVEAL_LICENSE_KEY;
}
app.use("/", reveal(revealOptions));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`RevealServer is running on http://localhost:${port}/`);
});
