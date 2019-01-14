#!/usr/bin/env bash

yarn install --no-progress
mkdir src/main/resources/static
yarn build
{
    yarn test
} || {
    kill -9 $(jobs -p)
    exit 1
}

./gradlew build

exit 0