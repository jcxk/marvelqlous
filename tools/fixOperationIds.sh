cat $1 | jq '.paths[].get |= (.operationId = (.summary|rtrimstr(".")|split(" ")|join("_")|ascii_downcase|ltrimstr("fetches_lists_of_")|ltrimstr("fetches_a_")))'

