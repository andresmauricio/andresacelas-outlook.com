import app from "./server";
import './database'; 

const main = async () => {
  await app.listen(3000);
  console.log("server running");
};

main();
