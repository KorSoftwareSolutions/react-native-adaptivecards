#!/bin/bash

rm -rf lib
npx tsc
cp -r src/assets lib/assets
yalc push