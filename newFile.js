import { Builder, By } from "selenium-webdriver";
import { expect } from "chai";

(async function funcionalidadeLogin() {
  let driver = await new Builder().forBrowser("firefox").build();

  // Navegar para um site
  await driver.get("https://www.saucedemo.com/v1/index.html");

  // Preeche usuario
  //await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  // Preenche senha
  //await driver.findElement(By.id("password")).sendKeys("secret_sauce");
//   await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce')
//   Quando tem mais de 1 elemento com o valor da propriedade
//   await (await driver.findElements(By.css("input.form_input")))[1].sendKeys("secret_sauce");
//   await (await driver.findElements(By.css('input[class="form_input"]')))[1].sendKeys('secret_sauce')
  // await (await driver.findElements(By.css('[class="form_input"]')))[1].sendKeys('secret_sauce')
  
  // Clica no botão login
  //await driver.findElement(By.id("login-button")).click();

  //let produtosLabel = await driver.findElement(By.css('.product_label')).getText()
  //   let produtosLabel = await driver.findElement(By.xpath('//*[@id="inventory_filter_container"]/div')).getText()

  // Validação feita na 'unha'
  // if (produtosLabel.toLowerCase() === "products") {
  //   console.log("Validado com sucesso");
  // } else {
  //   throw new Error(`Valor esperado: 'products', valor retornado: ${produtosLabel}`)
  // }

 // console.log(produtosLabel)
  // Validação usando o chai
  //expect(produtosLabel.toLowerCase()).to.equal('products')
 // console.log('Teste realizado com sucesso')

  await driver.quit()
//   await driver.sleep(2000)
//   let newLabel = await driver.findElement(By.css('h3[data-test="error"]')).getText();
})();