import { HttpStatus } from '@repo/cypress-utils/dist/enums';
import { aliasGraphQLRequest } from '@repo/cypress-utils/dist/helpers';

describe('Example test', () => {
    it('should be able to plus a Forgotten product and then proceed to checkout.', () => {
        aliasGraphQLRequest('kaas')
        cy.request('https://google.com/').then((req => {
            expect(req.status).equal(HttpStatus.OK)
        }));
    });
});
