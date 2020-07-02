#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Building new MUI-style symbols..."

echo -ne "${BLUE}Installing dependencies...${NC}"
yarn install:dependencies
echo -e "${BLUE}Done${NC}"

echo -ne "${BLUE}Clearing existing symbols folder...${NC}"
rm -rf symbols
mkdir -p symbols
echo -e "${BLUE}Done${NC}"

echo -ne "Loading latest PX Blue icon package...${NC}"
yarn upgrade @pxblue/symbols
rm -rf node_modules/@pxblue/symbols/symbols.svg
echo -e "${BLUE}Done${NC}"

echo -ne "Running MUI converter utility...${NC}"
cd scripts/mui-icon-builder
babel-node --config-file ./babel.config.js builder.js --output-dir ../../symbols --svg-dir ../../node_modules/@pxblue/symbols
cd ../..
babel symbols --presets=@babel/preset-react,@babel/preset-env --out-dir symbols
cp node_modules/@pxblue/symbols/index.json ./symbols/index.json
echo -e "${BLUE}Done${NC}"

echo -ne "Creating TypeScript typings...${NC}"
babel-node --config-file ./scripts/mui-icon-builder/babel.config.js ./scripts/mui-icon-builder/create-typings.js
echo -e "${BLUE}Done${NC}"

echo -ne "Copying NPM package meta files...${NC}"
cp package.json symbols/package.json
cp README.md symbols/README.md
cp LICENSE symbols/LICENSE
cp CHANGELOG.md symbols/CHANGELOG.md
echo -e "${BLUE}Done${NC}"

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "MUI package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0