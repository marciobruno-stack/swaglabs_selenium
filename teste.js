import { Builder, By } from "selenium-webdriver";
//Usando o firefox para realizar o teste autoatizado
(async function Login() {
    let driver = await new Builder().forBrowser("firefox").build();
  

    //Navegando pelo site
    await driver.get("https://saucedemo.com/v1/index.html");
    await driver.sleep(2000)

    

// Preeche os dados usuario
await driver.findElement(By.id("user-name")).sendKeys("standard_user");
await driver.sleep(2000)    

    // digitando a senha
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.sleep(2000) 
// Clica no botão login
await driver.findElement(By.id("login-button")).click();
await driver.sleep(2000) 
let produtosLabel = await driver.findElement(By.css('.product_label')).getText()
await driver.sleep(2000) 
// Validação feita após logar no site
 if (produtosLabel.toLowerCase() === "products") {
  console.log("Validado com sucesso");
} else {
  throw new Error(`Valor esperado: 'products', valor retornado: ${produtosLabel}`)
}
  
await driver.quit();
})();


