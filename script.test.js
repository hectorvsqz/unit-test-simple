
const { showMessage } = require("./script.js");
//import { showMessage } from './script';



test("shows correct message in div element", () => {
    
    const result = showMessage("Hello Unit testing!");

    
    expect(result).toBe("Hello Unit testing!");
});