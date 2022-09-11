const quotes = [
    {
        quote: "돈으로 행복을 살 수 없다면, 돈이 모자란 건 아닌지 확인해보라.",
        author: "Unknown"
    },
    {
        quote: "용기는 악운을 깨뜨린다.",
        author: "영국속담"
    },
    {
        quote: "인생은 멀리서 보면 희극이고 가까이서 보면 비극이다.",
        author: "찰리 채플린"
    },
    {
        quote: "즐길수없으면 피하라.",
        author: "Unknown"
    },
    {
        quote: "내가 일으킬 수 있는 가장 큰 기적, 밍기적",
        author: "Unknown"
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러"
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈"
    },
    {
        quote: "죽음을 두려워 하지 말라 그대가 존재하는 한 죽음은 오지 않으니 죽음이 다가왔을땐 이미 그대는 존재하지 않으니",
        author: "에피쿠로스"
    }
]
// 명언 배열로 저장

const quote = document.querySelector("#quote span:first-child"); // html 첫번째 span 가져오기
const author = document.querySelector("#quote span:last-child"); // 두번째 span 가져오기


const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]); // 랜덤으로 배열 설정

quote.innerText =
`${todaysQuote.quote} ${todaysQuote.author}`; // quote 랜덤명언 innertext
// author.innerText = `${todaysQuote.author}`; // author에 이름 넣기