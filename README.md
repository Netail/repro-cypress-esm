# Repro Cypress ESM

1. cd into `cypress-utils`
2. `yarn install`
3. `yarn build` (to transpile the package - in our setup this packages is located in a completely different repo, so we have publish it. Sadly we can't publish it in Typescript as Cypress won't transpile any packages in the node_module)
4. cd into `test-app`
5. `yarn install`
6. `yarn cypress:open`
7. Run the only e2e test
