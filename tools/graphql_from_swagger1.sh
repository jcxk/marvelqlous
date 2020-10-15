api-spec-converter --alpha -d --from=swagger_1 --to=swagger_2 https://gateway.marvel.com/docs/public | jq '.paths[].get |= (.operationId = (.summary|rtrimstr(".")|split(" ")|join("_")|ascii_downcase|ltrimstr("fetches_lists_of_")|ltrimstr("fetches_a_")))' > /tmp/swagger2.json
swagger-to-graphql --swagger-schema=/tmp/swagger2.json
