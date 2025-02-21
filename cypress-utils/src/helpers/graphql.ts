const requestHasOperationName = (
    req: any,
    operationName?: string,
): boolean => {
    const { body } = req;
    if (!body) {
        return false;
    }
    return body.find(
        (responseBody: any) =>
            responseBody.hasOwnProperty('operationName') &&
            responseBody.operationName === operationName,
    );
};

export const aliasGraphQLRequest = (operationName: string): void => {
    cy.intercept('/gql', req => {
        if (requestHasOperationName(req, operationName)) {
            req.alias = `${operationName}`;
        }
    });
};
