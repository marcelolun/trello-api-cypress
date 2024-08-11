Cypress.Commands.add("createTrelloCard", (listId, cardName) => {
  const key = Cypress.env("key");
  const token = Cypress.env("token");
  return cy
    .request({
      method: "POST",
      url: `/1/cards`,
      qs: {
        name: cardName,
        idList: listId,
        key: key,
        token: token,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      return response.body.id;
    });
});

Cypress.Commands.add("deleteTrelloCard", (cardId) => {
  const key = Cypress.env("key");
  const token = Cypress.env("token");
  return cy
    .request({
      method: "DELETE",
      url: `/1/cards/${cardId}`,
      qs: {
        key: key,
        token: token,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
});
