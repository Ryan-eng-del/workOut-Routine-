// 2022
const fs = require("fs");
let isDay30 = false;
let isMonth2 = false;
for (let j = 6; j <= 12; i++) {
  if (j % 2 == 0) {
    if (j === 2) {
      isMonth2 = true;
    }
    isDay30 = true;
  }
  for (let i = 1; i <= isMonth2 ? 28 : isDay30 ? 30 : 31; i++) {
    fs.mkdir(`2022-5-${i}`, function () {
      fs.writeFile(
        `2022-5-${i}/2022-5-${i}.md`,
        `## 2022-5-${i} \n### 时间：下午5点到6点\n- [x] 团队车轮俯卧撑 -- 50\n- [x] 团队车轮引体向上 -- 50\n- [x] 团队车轮杠铃弯举 -- 100 \n- [x] 团队车轮弹力带 --100\n- [ ] 五公里 - 20min \`广州下雨未完成\``,
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
}
