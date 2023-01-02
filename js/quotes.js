const quotes = [
	{
		quote : "삶이 있는 한 희망은 있다",
		author : "키케로",
	},
	{
		quote : "산다는 것 그것은 치열한 전투이다.",
		author : "로망로랑",
	},
	{
		quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
		author : "사무엘존슨",
	},
	{
		quote : "언제나 현재에 집중할 수 있다면 행복할것이다.",
		author : "파울로 코엘료",
	},
	{
		quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
		author : "엘버트 허버드",
	},
	{
		quote : "피할 수 없으면 즐겨라",
		author : "로버트 엘리엇",
	},
	{
		quote : "한번의 실패와 영원한 실패를 혼동하지 마라",
		author : "F.스콧 핏제랄드",
	},
	{
		quote : "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다",
		author : "L론허바드",
	},
	{
		quote : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
		author : "앙드레 말로",
	},
	{
		quote : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
		author : "톰 모나건",
	},
	{
		quote : "자신감 있는 표정을 지으면 자신감이 생긴다.",
		author : "찰스다윈",
	}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const aysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = aysQuote.quote;
//author.innerText = aysQuote.author;