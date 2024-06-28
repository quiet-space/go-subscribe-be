const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

let partyList = [
  {
    sn: 0,
    type: 1,
    party: "넷플릭스 구독할 친구 구해요!",
    user: "영화초보자",
    desc: "안녕하세요! 영화를 좋아하지만 넷플릭스 구독을 고민 중입니다. 함께 영화 추천하고 함께 보며 즐길 친구를 찾고 있어요. 관심 있으신 분은 연락 주세요!",
    fee: 10000,
    unit: 31,
    password: "123",
  },
  {
    sn: 1,
    type: 4,
    party: "왓챠 같이 구독할 사람 구해요!",
    user: "영화피셔",
    desc: "안녕하세요! 저는 영화를 좋아하는 20대 여성입니다. 왓챠를 구독하고 있어요. 함께 영화 추천하고 즐길 친구를 찾습니다. 함께 시간을 보내며 즐거운 대화 나누고 싶어요. 관심 있으신 분은 댓글 남겨주세요!",
    fee: 15000,
    unit: 31,
    password: "234",
  },
  {
    sn: 2,
    type: 2,
    party: "티빙 구독할 영화팬 모집합니다!",
    user: "영화매직",
    desc: "안녕하세요! 티빙을 좋아하는 20대 남성입니다. 같이 티빙 영화와 드라마를 즐기며 서로의 관심사를 공유할 친구를 찾고 있습니다. 함께 영화 추천도 해주고, 새로운 작품을 발견하며 토론하는 걸 좋아해요. 함께 시간을 보낼 새로운 친구를 기다립니다!",
    fee: 12000,
    unit: 31,
    password: "1234",
  },
  {
    sn: 3,
    type: 3,
    party: "디즈니플러스 같이 구독할 파트너 찾습니다!",
    user: "영화콜렉터",
    desc: "안녕하세요! 저는 디즈니플러스를 좋아하는 20대 남성입니다. 디즈니플러스 영화와 애니메이션을 함께 즐길 친구를 찾고 있어요. 함께 좋은 작품을 발견하고 나누며 즐거운 시간을 보내고 싶습니다. 관심 있으신 분은 연락 주세요!",
    fee: 13000,
    unit: 31,
    password: "12345",
  },
  {
    sn: 4,
    type: 1,
    party:
      "넷플릭스, 왓챠, 티빙, 디즈니플러스 중 하나와 함께 구독할 친구 찾습니다!",
    user: "영화라이트",
    desc: "안녕하세요! 저는 다양한 OTT를 좋아하는 20대입니다. 넷플릭스, 왓챠, 티빙, 디즈니플러스 중 하나와 함께 구독할 친구를 찾고 있습니다. 함께 좋은 영화나 드라마를 추천하고, 이야기를 나누며 즐거운 시간을 보내고 싶어요. 관심 있으신 분은 댓글 남겨주세요!",
    fee: 10000,
    unit: 31,
    password: "1122",
  },
  {
    sn: 5,
    type: 4,
    party: "왓챠 구독할 친구 구해요!",
    user: "영화고래",
    desc: "안녕하세요! 저는 영화를 좋아하지만 왓챠 구독을 고민 중입니다. 함께 영화 추천하고 함께 보며 즐길 친구를 찾고 있습니다. 관심 있으신 분은 연락 주세요!",
    fee: 2000000,
    unit: 365,
    password: "2233",
  },
  {
    sn: 6,
    type: 2,
    party: "티빙 구독자를 찾습니다!",
    user: "영화파라다이스",
    desc: "안녕하세요! 저는 티빙을 구독하고 있는 20대 남성입니다. 다양한 영화와 드라마를 즐기며 함께할 파트너를 찾고 있습니다. 함께 좋은 작품을 공유하고 이야기를 나누며 즐거운 시간을 보내고 싶어요.",
    fee: 12000,
    unit: 31,
    password: "3344",
  },
  {
    sn: 7,
    type: 3,
    party: "디즈니플러스 구독자를 모집합니다!",
    user: "영화미래",
    desc: "안녕하세요! 저는 디즈니플러스를 사랑하는 20대 여성입니다. 디즈니의 영화와 애니메이션을 함께 즐길 구독자를 찾고 있습니다. 함께 영화 추천하고 나누며 즐거운 시간을 보내고 싶어요.",
    fee: 13000,
    unit: 31,
    password: "1111",
  },
  {
    sn: 8,
    type: 1,
    party: "넷플릭스와 함께 영화를 즐길 파트너를 찾습니다!",
    user: "영화에반하다",
    desc: "안녕하세요! 저는 넷플릭스를 구독하고 있는 20대 남성입니다. 함께 영화를 보고 추천하며 즐길 친구를 찾고 있습니다. 함께 새로운 작품을 발견하고 이야기를 나누며 즐거운 시간을 보내고 싶어요.",
    fee: 10000,
    unit: 31,
    passwrod: "2222",
  },
  {
    sn: 9,
    type: 4,
    party: "왓챠와 함께 영화퀴즈 즐길 친구 모집합니다!",
    user: "영화퀴즈터",
    desc: "안녕하세요! 저는 왓챠를 구독하고 있는 20대 여성입니다. 영화퀴즈를 함께 즐길 친구를 찾고 있어요. 새로운 작품을 알려주고, 영화퀴즈를 통해 즐거운 시간을 보내고 싶습니다.",
    fee: 15000,
    unit: 31,
    password: "aaaa",
  },
  {
    sn: 10,
    type: 1,
    party: "티빙과 함께 드라마를 즐길 동료를 찾습니다!",
    user: "영화대마왕",
    desc: "안녕하세요! 저는 티빙을 구독하고 있는 20대 남성입니다. 다양한 드라마와 영화를 즐기며 함께할 동료를 찾고 있습니다. 함께 좋은 작품을 발견하고 이야기를 나누며 즐거운 시간을 보내고 싶어요.",
    fee: 12000,
    unit: 31,
    password: "bbbb",
  },
  {
    sn: 11,
    type: 3,
    party: "디즈니플러스 구독자 모집합니다!",
    user: "영화로봇X",
    desc: "안녕하세요! 저는 디즈니플러스를 구독 중인 20대 여성입니다. 디즈니의 다양한 영화와 애니메이션을 함께 즐길 구독자를 찾고 있습니다. 함께 영화 추천하고 나누며 즐거운 시간을 보내고 싶어요.",
    fee: 360000,
    unit: 365,
    password: "cccc",
  },
];

app.use(express.json());
app.use(cors());

app.get("/party", (req, res) => {
  res.send(partyList);
  res.sendStatus(200);
});

app.post("/party", (req, res) => {
  // req body
  // {
  //     sn: 0, -> only GET
  //     type: 1,
  //     party: "",
  //     user: "",
  //     desc: "",
  //     fee: 0,
  //     unit: 0,
  // password: ""
  // };

  if (
    !req.body.party ||
    !req.body.user ||
    !req.body.fee ||
    !req.body.unit ||
    !req.body.password
  ) {
    return res
      .status(400)
      .json({
        message: "제목, 글쓴이, 가격, 결제 단위, 비밀번호는 필수 입력값입니다.",
      });
  } else {
    const data = {
      ...req.body,
      sn: partyList.length,
    };
    partyList.push(data);
    res.sendStatus(200);
  }
});

app.put("/party/:sn", (req, res) => {
  if (
    !req.body.party ||
    !req.body.user ||
    !req.body.fee ||
    !req.body.unit ||
    !req.body.password
  ) {
    return res
      .status(400)
      .json({
        message: "제목, 글쓴이, 가격, 결제 단위, 비밀번호는 필수 입력값입니다.",
      });
  } else if (partyList[req.params.sn].password !== req.body.password) {
    return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
  } else {
    partyList[req.params.sn] = {
      ...req.body,
      sn: Number(req.params.sn),
    };
    res.sendStatus(200);
  }
});

app.delete("/party/:sn", (req, res) => {
  if (partyList[req.params.sn].password !== req.body.password) {
    return res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
  } else {
    partyList = partyList.filter(
      (item) => Number(item.sn) !== Number(req.params.sn)
    );
    res.sendStatus(200);
  }
});

app.listen(port, () => {
  console.log("실행~");
});
