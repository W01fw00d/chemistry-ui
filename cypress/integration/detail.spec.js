import { getRandomNumber, getRandomString } from '../test-utils';

describe('On Detail Page, navigate', function() {
  const URL = 'detail/1';

  const setStub = (name, likeCount) => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'room-details/*',
      response: [
        {
          id: '1',
          name,
          description: getRandomString(getRandomNumber(1, 100)),
          likeCount,
          commentsCount: 0,
          price: 0,
          isGroupPrice: false,
          isEditorsChoice: false,
          image: 'fake_imgs/room.jpg',
          tags: [1, 2],
        },
      ],
    });
  };

  it('User clicks on back button', function() {
    cy.visit(URL);
    cy.get('#back').click();
    cy.url().should('include', '/list');
  });

  it('User checks that list item is rendered with its name and like count', function() {
    const name = getRandomString(getRandomNumber(1, 20));
    const likeCount = getRandomNumber(1, 100);

    setStub(name, likeCount);

    cy.visit(URL);

    cy.contains(name);
    cy.get('#likeCount').contains(likeCount);
  });
});
