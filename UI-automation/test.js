import { expect } from "chai";
import { Browser, Builder,By } from "selenium-webdriver";
const driver =new Builder().forBrowser(Browser.CHROME).build();


async function runner(){
    await driver.get("https://www.saucedemo.com/");
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    const usernameText = await driver.findElement(By.id('login_credentials')).getText();
    console.log(usernameText);
    let username = "";
    if (usernameText.includes("locked_out_user")) {
        username = "locked_out_user";
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
    await driver.sleep(2000);

    const actualErrorText= await driver.findElement(By.xpath("//div[@class='error-message-container error']//h3[@data-test='error']")).getText();
    console.log(actualErrorText);
    const expectedErrorText="Epic sadface: Sorry, this user has been locked out.";
    if(expect(actualErrorText).to.eql(expectedErrorText)){

        console.log("validederror massage");
    };

    await driver.sleep(2000);
    await driver.quit();
}

runner();
