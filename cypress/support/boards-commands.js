Cypress.Commands.add("createTrelloBoard", (boardName) => {
  const key = Cypress.env("key");
  const token = Cypress.env("token");
  return cy
    .request({
      method: "POST",
      url: "/1/boards/",
      qs: {
        name: boardName,
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

Cypress.Commands.add("deleteTrelloBoard", (boardId) => {
  const key = Cypress.env("key");
  const token = Cypress.env("token");
  return cy
    .request({
      method: "DELETE",
      url: `/1/boards/${boardId}`,
      qs: {
        key: key,
        token: token,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
});

Cypress.Commands.add("createTrelloListOnABoard", (boardId, listName) => {
  const key = Cypress.env("key");
  const token = Cypress.env("token");
  return cy
    .request({
      method: "POST",
      url: `/1/boards/${boardId}/lists/`,
      qs: {
        name: listName,
        idBoard: boardId,
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
