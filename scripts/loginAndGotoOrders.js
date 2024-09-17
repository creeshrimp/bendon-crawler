// .env
require('dotenv').config();

const puppeteer = require('puppeteer');

(async () => {
    // 使用本地安裝的 Chrome
    const browser = await puppeteer.launch({
        executablePath: process.env.BRAVE_PATH,  // 替換成你的 Chrome 路徑
        headless: false  // 設置為 false 讓你看到瀏覽器的操作過程
    });

    const page = await browser.newPage();

    // 進入網站的登入頁面
    await page.goto('https://dinbendon.kento520.tw/index.php');
    console.log('進入登入頁面');

    // 等待所有input出現
    await page.waitForSelector('#loginnumber', { visible: true });
    await page.waitForSelector('#loginpass', { visible: true });
    await page.waitForSelector('#SubmitLogin', { visible: true });
    console.log('所有input出現');

    // 模擬輸入帳號和密碼
    await page.type('#loginnumber', process.env.ACCOUNT);
    await page.type('#loginpass', process.env.PASSWORD);
    console.log('完成輸入帳號和密碼');

    // 點擊登入按鈕
    await page.click('#SubmitLogin');
    console.log('點擊登入按鈕');

    // 等待成功的sweet alert 的OK按鈕
    await page.waitForSelector('button.swal2-confirm.btn.btn-success', { visible: true });
    // 點擊OK
    await page.click('button.swal2-confirm.btn.btn-success');
    console.log('點擊OK');

    // 等待導航到登入後的頁面   不知道為甚麼沒用，會卡超久直到timeout
    // await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // await delay(10);

    // 進入訂單頁面
    console.log('準備 goto訂單頁面');
    await page.goto('https://dinbendon.kento520.tw/orders.php', { waitUntil: 'networkidle2' });
    console.log('進入訂單頁面成功');


    // await browser.close()
})();

async function delay(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}