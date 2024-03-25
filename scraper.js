const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // go to Hacker News
    await page.goto("https://www.google.com/");
    
    
})();


