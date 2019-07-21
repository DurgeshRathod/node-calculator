import { expect } from "chai";
import "mocha";
import { describe } from "mocha";
import { addTwoNos } from "../src/calculator"

describe("Demo Class", () => {
    
  before(async () => {
    
    });

  beforeEach(function(done) {
    this.timeout(5000);
    setTimeout(done, 3000);
  });

  it("add called", async () => {
      try{
      expect(addTwoNos(1,2)).to.deep.equals(3);
    } catch (err) {
      console.log(err);
      expect.fail();
    }
  });


});
