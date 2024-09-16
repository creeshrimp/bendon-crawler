const puppeteer = require('puppeteer');

(async () => {
    // 使用本地安裝的 Chrome
    const browser = await puppeteer.launch({
        executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',  // 替換成你的 Chrome 路徑
        headless: false  // 設置為 false 讓你看到瀏覽器的操作過程
    });

    const page = await browser.newPage();

    // 進入網站的登入頁面
    await page.goto('https://example.com/login');  // 替換成實際的登入頁面

    // 模擬輸入帳號和密碼
    await page.type('#username', '你的帳號'); // 替換為實際的帳號輸入框選擇器和帳號
    await page.type('#password', '你的密碼'); // 替換為實際的密碼輸入框選擇器和密碼

    // 點擊登入按鈕
    await page.click('#loginButton'); // 替換成實際的登入按鈕選擇器

    // 等待導航到登入後的頁面
    await page.waitForNavigation();

    // 確認登入成功，檢查是否進入了預期的頁面
    console.log('登入成功！');

    await browser.close();
})();