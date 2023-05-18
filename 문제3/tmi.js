const tmi = [
    {
        question: "이름",
        answer: "박도울",
    },
    {
        question: "본가",
        answer: "용인",
    },
    {
        question: "학교",
        answer: "연세대",
    },
    {
        question: "전공",
        answer: "기계공학",
    },
    {
        question: "좋아하는 것",
        answer: "돈",
    }
];

const question = document.querySelector('#tmi>span:nth-child(1)');
const answer = document.querySelector('#tmi>span:nth-child(2)');
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]


question.innerText = todaysTmi.question;
answer.innerText = todaysTmi.answer;