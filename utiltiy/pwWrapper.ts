import test, { Page } from "playwright/test";

export abstract class PlaywrightWrapper{
 
    page:Page
    constructor(page:Page){
        this.page=page
    }

     async  clearAndType(locator:string,name:string,data:string){
        await test.step(`Textbox ${name} filled with data: ${data}`, async () => {
            await this.page.locator(locator).clear();
            await this.page.keyboard.type(data, { delay: 400 });
            await this.page.keyboard.press("Enter");
        });
     }

}