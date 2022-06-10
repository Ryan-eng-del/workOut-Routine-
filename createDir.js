// 2022
const fs = require("fs");
const j = 6;
for (let i = 1; i <= 30; i++) {
  fs.mkdir(`2022-${j}-${i}`, function () {
    fs.writeFile(
      `2022-${j}-${i}/2022-${j}-${i}.md`,
      `## 2022-5-${i} \n### 时间：下午5点到6点\n- [x] 团队车轮俯卧撑 -- 50\n- [x] 团队车轮引体向上 -- 50\n- [x] 团队车轮杠铃弯举 -- 100 \n- [x] 团队车轮弹力带 --100\n`,
      "utf-8",
      function (error) {
        if (error) {
          return;
        }
        console.log("success");
      }
    );
  });
}
