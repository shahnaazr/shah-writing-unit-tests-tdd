import { highestNumberAsString } from "./demo";

describe("test find highest number as string", () => {
  test("test returns the highest number as a string", () => {
    //Arrange
    const arrayOfNumbers = [2, 5, 4, 10];
    const expectedResult = "10";
    //Act
    const actualResult = highestNumberAsString(arrayOfNumbers);
    //Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
