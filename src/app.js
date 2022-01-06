/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuses").innerHTML = generateExcuses();
  });
  console.log("Hello from the console!");
};

let generateExcuses = () => {
  let pronoun = ["A", "The"];
  let subject = ["Jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = [
    "on the street",
    "in my house",
    "in his house",
    "in my driveway"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
