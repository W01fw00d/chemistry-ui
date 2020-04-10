import { getRandomNumber, getRandomString } from '../test-utils';

describe('On List Page', function() {
  const URL = 'list';

  const setStub = (firstName, secondName) => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'tags',
      response: [
        {
          id: 1,
          code: 'terror',
          name: getRandomString(getRandomNumber(1, 10)),
        },
      ],
    });

    cy.route({
      method: 'GET',
      url: 'rooms',
      response: [
        {
          id: '1',
          name: firstName,
          description: getRandomString(getRandomNumber(1, 100)),
          likeCount: getRandomNumber(1, 1000),
          commentsCount: getRandomNumber(1, 1000),
          price: getRandomNumber(1, 1000000),
          isGroupPrice: false,
          isEditorsChoice: false,
          image: 'fake_imgs/room.jpg',
          tags: [1, 2],
        },
        {
          id: '2',
          name: secondName,
          description: getRandomString(getRandomNumber(1, 100)),
          like_count: getRandomNumber(1, 1000),
          comment_count: getRandomNumber(1, 1000),
          price: getRandomNumber(1, 1000000),
          isGroupPrice: true,
          isEditorsChoice: true,
          image: 'fake_imgs/room.jpg',
          category_id: [3],
        },
      ],
    });
  };

  it('User writes on search text input', function() {
    const inputText = getRandomString(getRandomNumber(1, 10));

    cy.visit(URL);

    cy.get('#search')
      .type(inputText)
      .should('have.value', inputText);
  });

  it('User clicks the "room 1" item link', function() {
    const firstName = getRandomString(getRandomNumber(1, 20));

    setStub(firstName, firstName);
    cy.visit(URL);

    cy.contains(firstName).click({ force: true });
    cy.url().should('include', 'detail/1');
  });

  it('User sees that list items are rendered', function() {
    const firstName = getRandomString(getRandomNumber(1, 20));
    const secondName = getRandomString(getRandomNumber(1, 20));

    setStub(firstName, secondName);
    cy.visit(URL);

    cy.contains(firstName);
    cy.contains(secondName);
  });
});
