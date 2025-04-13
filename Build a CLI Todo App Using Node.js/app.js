import readline from "readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];
const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  r1.question("Choose an option: ", handleInput);
};
const handleInput = (option_by_user) => {
  if (option_by_user === "1") {
    r1.question("Enter Your Tasks: ", (task) => {
      todos.push(task);
      console.log("Task is Added: ", task);
      showMenu();
    });
  } else if (option_by_user === "2") {
    console.log("\n Your Todo List");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option_by_user === "3") {
    console.log("Bye See you again soon!");
    r1.close();
  } else {
    console.log(" Invalid Option. Try again");
    showMenu();
  }
};
showMenu();
