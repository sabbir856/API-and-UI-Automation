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


async function hamberger(){
    await driver.get("https://www.saucedemo.com/");
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    
    const usernameText = await driver.findElement(By.id('login_credentials')).getText();
    console.log(usernameText);
    let username = "";
        if (usernameText.includes("standard_user")) {
            username = "standard_user";
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

    await driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']")).click();
    await driver.sleep(2000);

    const cartText= await driver.findElement(By.xpath("//span[@class='shopping_cart_badge']")).getText();
    const actualcartCount=parseInt(cartText , 10);
    const expectedcartCount=3;
    if(expect(actualcartCount).to.eql(expectedcartCount)){
        console.log("cart count valided");
    };

    await driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).click();
    await driver.sleep(2000);

    const actual1stProductName= await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']")).getText();
    const expected1stProductName="Sauce Labs Backpack";
    expect(actual1stProductName).to.eql(expected1stProductName);
    const fstProductPrice= await driver.findElement(By.xpath("//div[@class='inventory_item_price' and text()='29.99']")).getText();
    const actual1stProductPrice=Number(fstProductPrice.replace("$",""));
    const expected1stProductPrice = 29.99;
    expect(actual1stProductPrice).to.eql(expected1stProductPrice);

    const actual2ndProductNmae= await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Bolt T-Shirt']")).getText();
    const expected2ndtProductName="Sauce Labs Bolt T-Shirt";
    expect(actual2ndProductNmae).to.eql(expected2ndtProductName);
    const secProductPrice= await driver.findElement(By.xpath("//div[@class='inventory_item_price' and text()='15.99']")).getText();
    const actual2ndProductPrice=Number(secProductPrice.replace("$",""));
    const expected2ndProductPrice=15.99;
    expect(actual2ndProductPrice).to.eql(expected2ndProductPrice);

    const actual3rdProductName=await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Fleece Jacket']")).getText();
    const expected3rdProductNmae="Sauce Labs Fleece Jacket";
    expect(actual3rdProductName).to.eql(expected3rdProductNmae);
    const thrdProductPrice= await driver.findElement(By.xpath("//div[@class='inventory_item_price' and text()='49.99']")).getText();
    const actual3rdProductPrice= Number(thrdProductPrice.replace("$",""));
    const expected3rdProductPrice= 49.99;
    expect(actual3rdProductPrice).to.eql(expected3rdProductPrice);

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

    const sndactual1stProductName= await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']")).getText();
    const sndexpected1stProductName="Sauce Labs Backpack";
    expect(sndactual1stProductName).to.eql(sndexpected1stProductName);
    
    const sndactual2ndProductNmae= await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Bolt T-Shirt']")).getText();
    const sndexpected2ndtProductName="Sauce Labs Bolt T-Shirt";
    expect(sndactual2ndProductNmae).to.eql(sndexpected2ndtProductName);

    const sndactual3rdProductName=await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Fleece Jacket']")).getText();
    const sndexpected3rdProductNmae="Sauce Labs Fleece Jacket";
    expect(sndactual3rdProductName).to.eql(sndexpected3rdProductNmae);

    const totalprice= await driver.findElement(By.xpath("//div[@class='summary_total_label']")).getText();
    const actualTotalPrice=Number(totalprice.replace(/[^0-9.]/g, ''));
    const expectedTotalPrice=103.65;
    if(expect(actualTotalPrice).to.eql(expectedTotalPrice)){
        console.log("total price valided");
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
    
    await driver.quit();

};

hamberger();


