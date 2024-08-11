import { faker } from "@faker-js/faker";

describe("Cards testes", () => {
  let boardId;
  let listId;
  let cardId;
  const boardName = faker.lorem.word({ min: 1, max: 1 });
  const listName = faker.lorem.word({ min: 1, max: 1 });
  const cardName = faker.lorem.word({ min: 1, max: 1 });

  before(() => {
    cy.createTrelloBoard(boardName).then((id) => {
      boardId = id;

      cy.createTrelloListOnABoard(boardId, listName).then((id) => {
        listId = id;
      });
    });
  });

  after(() => {
    cy.deleteTrelloBoard(boardId);
  });

  it("Deve criar um card no Trello", () => {
    cy.createTrelloCard(listId, cardName).then((id) => {
      cardId = id;
    });
  });

  it("Deve deletar um card no Trello", () => {
    cy.deleteTrelloCard(cardId);
  });
});
