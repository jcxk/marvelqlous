#Marvelqlous

Side project as POC of how fast can a fully graphql backend  and frontend with list grid and filters 
can be done just importing the conf, total dynamic, from the original swagger.json (v1) from marvel api devs as use case.

Previous Steps ( look package.json from paths ) :

0.We need to copy .env.sample file with our credentials, check https://developer.marvel.com.

1.Get swagger json original file and operationIds fixed file.
``` shell script
npm run marvel:get:swagger 
```
2.Generate graphql file from swagger file from step 1.
 ``` shell script
npm run marvel:swagger2graphql
 ```
3. Generate sdk with graphql-mesh
``` shell script
marvel:generate:sdk
 ```
4. generate json-schema (filters) using npm run sdk:json-schema
``` shell script
marvel:generate:sdk-json-schema
 ```


No hardcoded endpoints config, if marvel api change we just need to redo steps 1-4. 

Demo at https://marvelqlous.vercel.app

STACK

- [x] next
- [x] typescript
- [x] graphql
- [x] apollo graphql
- [x] react-json-schema-form
- [x] antd 
- [x] tailwind


ROADMAP:

- [] atnd autocomplete for filters on fields of type array ids, need a custom rjsf implementation.
- [] sdk resolvers generator (swagger.js), left room for requestInterceptor to be injected, for especial credentials format.