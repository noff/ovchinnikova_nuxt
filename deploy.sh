#!/bin/bash

nvm use 24
npm run generate
rsync -azv .output/public/ static@arch:/home/static/ovchinnikova.ru/