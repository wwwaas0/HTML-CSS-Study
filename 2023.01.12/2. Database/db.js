// 불러오는 것은 mongoose로 불러옴
const mongoose = require("mongoose");

const connect = () => {
  // mongodb://[사용자이름]:[비밀번호]@호스트:포트번호/데이터베이스
  mongoose.connect(
    "mongodb://localhost:27017",
    {
      dbName: "dev", // 접속할 데이터베이스
    },
    (error) => {
      if (error) {
        console.error("MongoDB 연결 에러", error);
      } else {
        console.log("MongoDB 연결 성공", "localhost:27017/");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  // MongoDB 연결시 에러가 있을 때 발생하는 이벤트에 대한 리스너
  console.error("MongoDB 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  // MongoDB 연결이 종료되었을 때 발생하는 이벤트에 대한 리스너
  console.error("MongoDB 연결이 종료되어 연결을 재시도 합니다.");
  connect();
});

module.exports = {
  connect,
};
