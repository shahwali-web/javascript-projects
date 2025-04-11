import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https
    .get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try{

        const joke = JSON.parse(data);

       
        console.log(chalk.gray("Joke Type is", joke.type.toUpperCase()));
        console.log(chalk.gray("----------------------------"));
        console.log(chalk.yellow.bold(joke.setup));
        console.log(chalk.blue.bold("\n😂 " +joke.punchline))
        console.log(chalk.gray("----------------------------\n"));
      }catch(err){
        console.log(chalk.red("Error parsing joke data:", err.message));
      }
      });
    })
    .on("error", (err) => {
      console.log("Sorry Try Again Error occur");
    });
};

getJoke();
