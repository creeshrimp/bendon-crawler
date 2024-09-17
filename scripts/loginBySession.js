// .env
require('dotenv').config();

// puppeteer
const puppeteer = require('puppeteer');

console.log('import puppeteer 成功');
(async () => {
    const browser = await puppeteer.launch({
        executablePath: process.env.BRAVE_PATH, // 替換成你的 Chrome 路徑
        headless: false, // 設置為 false 讓你看到瀏覽器的操作過程
        userDataDir: process.env.BRAVE_USER_DATA_DIR, // 替換為你的 Chrome 用戶資料路徑
    });
    console.log('launch 成功');

    const page = await browser.newPage();

    // 確認是否已登入，進入已登入的頁面
    await page.goto('https://dinbendon.kento520.tw/orders.php'); // 替換為你的目標網站

    console.log('復用了已登入的 session/cookies！');

    // await browser.close();
})();
