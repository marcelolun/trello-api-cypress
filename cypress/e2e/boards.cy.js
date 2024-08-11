import { faker } from "@faker-js/faker";

describe("Boards testes", () => {
  const boardName = faker.lorem.word({ min: 1, max: 1 });
  let boardId;

  it("Deve criar um board no Trello", () => {
    cy.createTrelloBoard(boardName).then((id) => {
      boardId = id;
    });
  });

  it("Deve deletar um board no Trello", () => {
    cy.deleteTrelloBoard(boardId);
  });
});
