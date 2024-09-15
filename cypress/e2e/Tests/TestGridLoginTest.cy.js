
 
 import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../Pages/TestGridLoginPage.cy";
import { generateRandomEmail, generateRandomPassword, generateRandomUsername,} from "../../support/utilities/common.cy";

const XLSX = require('xlsx');
const randomPassword = generateRandomPassword()

const randomEmail = generateRandomEmail();
const randomUsername = generateRandomUsername(10);


When("I click on Sign In Link", () => {
    login.clicksigninlink();
    });
    When("I entered valid credential {string} {string}", (email,validpassword) => {
     login.enterEmailPassword(email,validpassword);
  
    });
    When("click on sign in button", () => {
    login.clickSignButton();
    });
    Then("Validate user is logged in", () => {
    login.verifyUserLoggedIn();
    });
    Then("Validate the title after login", () => {
    login.verifyPageTitle();
    });
    When("I click on Codeless link", () => {
    login.verifyCodelessLink();
    });
    Then("Validate Codeless link should be open", () => {
    login.verifyCodelessLinkOpen();
    });
    When("I click logout link", () => {
    login.clickLogoutLink();
    });


And ("9",()=>{

    cy.task(
        "queryDb",
        `INSERT INTO users (name, email,password) VALUES ("${randomUsername}", "${randomEmail}", "${randomPassword}")`
      )
      const data = readExcel('cypress/fixtures/book.xlsx');

})

Given('export data from excel to sql',()=>{
    cy.readFile('cypress/fixtures/Book1.xlsx', 'binary').then((fileContent) => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
             const data=JSON.stringify(jsonData);
        // Now you have jsonData as an array of objects, representing each row in the XLSX file
        cy.log(jsonData);
        for (let i = 0; i < jsonData.length; i++) {
            cy.log(jsonData[i].username)
              cy.task("queryDb", `INSERT  IGNORE INTO users (name, email,password)
            VALUES ('${jsonData[i].username}','${jsonData[i].email}','${jsonData[i].password}')`).then((response)=>{
                cy.log(response)
             })
                 }
      });
        });
