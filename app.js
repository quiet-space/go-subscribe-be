const express = require('express');
const app = express();
const port = 8080;

let partyList = [

]

app.use(express.json())

app.get('/party', (req, res) => {
    res.send(partyList)
    res.sendStatus(200)
})

app.post('/party', (req, res) => {
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


    if(!req.body.party || !req.body.user || !req.body.fee || !req.body.unit || !req.body.password) {
        return res.status(400).json({message: "제목, 글쓴이, 가격, 결제 단위, 비밀번호는 필수 입력값입니다."})
    } else {
        const data = {
            ...req.body,
            sn: partyList.length,
        }
        partyList.push(data)
        res.sendStatus(200)
    }
})

app.put('/party/:sn', (req, res) => {
    if(!req.body.party || !req.body.user || !req.body.fee || !req.body.unit || !req.body.password) {
        return res.status(400).json({message: "제목, 글쓴이, 가격, 결제 단위, 비밀번호는 필수 입력값입니다."})
    } else if (partyList[req.params.sn].password !== req.body.password) {
        return res.status(400).json({message: "비밀번호가 일치하지 않습니다."})
    } else {
        partyList[req.params.sn] = {
            ...req.body,
            sn: Number(req.params.sn)
        }
        res.sendStatus(200)
    }
})

app.delete('/party/:sn', (req, res) => {
    if(partyList[req.params.sn].password !== req.body.password) {
        return res.status(400).json({message: "비밀번호가 일치하지 않습니다."})
    } else {
        partyList = partyList.filter(item => Number(item.sn) !== Number(req.params.sn))
        res.sendStatus(200)
    }
})

app.listen(port, () => {
    console.log("실행~")
})