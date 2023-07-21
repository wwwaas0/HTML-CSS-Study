const express = require("express");
const { connect } = require("./db.js"); // mongoose 폴더의 index.js
const Person = require("./schemas/person");

const app = express();

connect(); // MongoDB 연결

app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log("Server started. port 3000.");
});

// 문서 조회. 전체 조회
app.get("/persons", async (req, res) => {
  // localhost:3000/persons 접속 시 실행
  const persons = await Person.find(); // 별도의 조회 조건 없이 persons 컬렉션이 모든 문서 조회
  console.log(persons);
  //   res.sendStatus(200);
  res.send(persons);
});

// 문서 조회. 필터를 추가해서
app.get("/persons/findByName", async (req, res) => {
  //   const a = await Person.find();
  //   const b = await Person.find({ name: "kang sung hwan" });
  //   const c = await Person.find({ name: { $regex: "kang", $options: "i" } }); // 부분 문자열 찾아내기
  //   const d = await Person.findById(id); // id를 가지고 찾아내기
  //   const e = await Person.findOne({name: "kang sung hwan"}); // 단 1개만 찾아내기. 찾아낸 문서의 가장 앞에 있는 문서 반환
  res.sendStatus(200);
});

// 문서 추가
app.post("/persons", async (req, res) => {
  const r = await Person.create({
    name: "kang sung hwan",
    email: "kumi1688@gmail.com",
    phone: "010-3333-4444",
    address: "",
  });
  res.send(r);
});

// 문서 수정
app.put("/persons", async (req, res) => {
  await Person.findByIdAndUpdate(id, { phone: "222-3333-4444" }); // 변경할 문서의 id를 첫번째 파라미터, 변경하고자하는 부분을 넣기
  await Person.updateOne(
    { name: "kang sung hwan" },
    { phone: "000-0000-0000" }
  ); // 첫번째 인자로 찾을 문서의 조건, 두번째로 변경할 부분
  await Person.updateMany(
    { name: "kang sung hwan" },
    { phone: "444-5555-6666" }
  ); // 첫번째 인자로 찾을 문서의 조건, 두번째 인자로 변경할 부분
});

app.delete("/persons", async (req, res) => {
  await Person.deleteOne({ name: "kang sung hwan" }); // 1개만 삭제하기
  await Person.deleteMany({ name: "kang sung hwan" }); // 조건을 만족하는 문서 모두 삭제하기
});
