const { expect } = require("chai");

const readFile = require("../src/readFile");

describe("Testing read file methods", function () {
  // before(function(){
    // this.timeout(10000);
    // setTimeout(done, 300);
  // })
  it("Testing reading file and converting file contents to upper case with valid file", function (done) {
    readFile.readAndConvertFileContents(
      "./resources/input.txt",
      (err, results) => {
        let expectedResult = [
          "JENNY",
          "JONATHAN",
          "HARRY",
          "JONNY",
          "SAMATHA",
          "MICHAEL",
          "ROBERT",
          "DAVID",
          "SMITH",
          "GARCIA",
          "WILLIAM",
          "THOMAS",
          "DANIEL",
          "MATTHEW",
          "ANTHONY",
        ];

        expect(results).to.deep.equal(expectedResult);
        console.log('results', results);
        expect(err).to.equal(null);
        console.log('before');
        
        console.log('here');
        done(err);
      }
    );
  });

  it("Testing reading file and converting file contents to upper case with invalid file", function (done) {
    readFile.readAndConvertFileContents("./testfile", (err, results) => {
      console.log('test');
      console.log('err', err);
      expect(err).to.not.equal(null);
      expect(err).to.equal("Encountered error while reading file contents..!");
      done(null);
    });
  });
});
