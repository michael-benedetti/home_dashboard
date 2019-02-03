#!/usr/bin/env bash
set -euxo pipefail

yarn install --no-progress
#mkdir src/main/resources/static
yarn build
{
    yarn test
} || {
    kill -9 $(jobs -p)
    exit 1
}

{
   ./gradlew clean test
} || {
    kill -9 $(jobs -p)
    exit 1
}

yarn journey

exit 0