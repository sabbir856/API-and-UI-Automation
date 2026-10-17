import { expect } from "chai";
import { Browser, Builder,By } from "selenium-webdriver";
const driver =new Builder().forBrowser(Browser.CHROME).build();
import chrome from "selenium-webdriver/chrome.js";
let options = new chrome.Options();
options.addArguments("--incognito");

options.setUserPreferences({
    "credentials_enable_service": false,
    "profile.password_manager_enabled": false
});

async function performance(){
    await driver.get("https://www.saucedemo.com/");
    await driver.manage().window().maximize();
    await driver.sleep(3000);
        
    const usernameText = await driver.findElement(By.id('login_credentials')).getText();
    console.log(usernameText);
    let username = "";
        if (usernameText.includes("performance_glitch_user")) {
            username = "performance_glitch_user";
        };

    await driver.findElement(By.xpath("//div[@class='form_group']//input[@id='user-name']")).sendKeys(username);
    await driver.sleep(2000);
    const passwordText = await driver.findElement(By.xpath("//div[@class='login_password']")).getText();
        console.log(passwordText);
        let password = "";
        if (passwordText.includes("secret_sauce")) {
                password = "secret_sauce";
        };
    await driver.findElement(By.xpath("//div[@class='form_group']//input[@id='password']")).sendKeys(password);
    await driver.sleep(2000);  
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();
    await driver.sleep(5000);

    await driver.findElement(By.xpath("//div[@class='bm-burger-button']")).click();
    await driver.sleep(2000);
    
    await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//select[@class='product_sort_container']//option[text()='Name (Z to A)']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath("//button[@id='checkout']")).click();
    await driver.sleep(2000);

    const firstName = "Sabbir";
        const lastName = "Rahman";
        const postalCode = "1207";
        await driver.findElement(By.id("first-name")).sendKeys(firstName);
        await driver.sleep(2000); 
        await driver.findElement(By.id("last-name")).sendKeys(lastName);
        await driver.sleep(2000);
        await driver.findElement(By.id("postal-code")).sendKeys(postalCode);
        await driver.sleep(2000);
    
        await driver.findElement(By.xpath("//input[@id='continue']")).click();
        await driver.sleep(2000);

        const actualtProductName= await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Test.allTheThings() T-Shirt (Red)']")).getText();
        const expectedtProductName="Test.allTheThings() T-Shirt (Red)";
        expect(actualtProductName).to.eql(expectedtProductName);

        const totalprice= await driver.findElement(By.xpath("//div[@class='summary_total_label']")).getText();
            const actualTotalPrice=Number(totalprice.replace(/[^0-9.]/g, ''));
            const expectedTotalPrice=17.27;
            if(expect(actualTotalPrice).to.eql(expectedTotalPrice)){
                console.log(" single total price valided");
            };
        await driver.sleep(2000);
        
        await driver.findElement(By.xpath("//button[@id='finish']")).click();
        await driver.sleep(2000);

        const actualwelcomemsg= await driver.findElement(By.xpath("//div[@class='checkout_complete_container']//h2[text()='Thank you for your order!']")).getText();
            const expectedwelcomemsg="Thank you for your order!";
            if(expect(actualwelcomemsg).to.eql(expectedwelcomemsg)){
                console.log("welcome msg valided");
            };

        await driver.findElement(By.xpath("//div[@class='bm-burger-button']")).click();
        await driver.sleep(2000);
        
        await driver.findElement(By.xpath("//a[@id='reset_sidebar_link']")).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//a[@id='logout_sidebar_link' and text()='Logout']")).click();   
        await driver.sleep(2000); 
        
        await driver.quit();

};
performance();