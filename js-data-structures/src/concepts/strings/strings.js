/**
 * @fileoverview JavaScript string 
 */

const UUID = "16a7de5f-e18f-4554-8232-b6547fadf0a1";

const uuidWithoutDash = UUID.replace(/-/g, "");

console.log(uuidWithoutDash, "--- should print 16a7de5fe18f45548232b6547fadf0a1");
