const questions = [
    "Qual a cor da sua calcinha?",
    "Qual o tamanho que você usa?",
    "Prefere renda, box ou fio dental?",
    "Bordada ou sem estampa?",
];

const ask = (index = 0) => {
    process.stdout.write(questions[index] + '\n');
};

ask();

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit();
    }
})
