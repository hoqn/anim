#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 도움말 출력 함수
print_help() {
    echo -e "${YELLOW}사용법:${NC}"
    echo "  ./scaffold.sh <template-name> <target-directory>"
    echo
    echo -e "${YELLOW}템플릿:${NC}"
    echo "  vite-react-pandacss: Vite + React + PandaCSS 템플릿"
    echo
    echo -e "${YELLOW}예시:${NC}"
    echo "  ./scaffold.sh vite-react-pandacss my-app"
}

# 인자 체크
if [ "$#" -ne 2 ]; then
    echo -e "${RED}Error: 인자가 부족합니다.${NC}"
    print_help
    exit 1
fi

TEMPLATE_NAME=$1
TARGET_DIR=$2
TEMPLATE_DIR="scaffolds/$TEMPLATE_NAME"

# 템플릿 존재 여부 체크
if [ ! -d "$TEMPLATE_DIR" ]; then
    echo -e "${RED}Error: '$TEMPLATE_NAME' 템플릿을 찾을 수 없습니다.${NC}"
    print_help
    exit 1
fi

# 대상 디렉토리가 이미 존재하는지 체크
if [ -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: '$TARGET_DIR' 디렉토리가 이미 존재합니다.${NC}"
    exit 1
fi

# 스캐폴딩 시작
echo -e "${GREEN}스캐폴딩을 시작합니다...${NC}"
echo -e "템플릿: ${YELLOW}$TEMPLATE_NAME${NC}"
echo -e "대상 디렉토리: ${YELLOW}$TARGET_DIR${NC}"

# 디렉토리 복사
cp -R "$TEMPLATE_DIR" "$TARGET_DIR"

# node_modules 제거 (있는 경우)
if [ -d "$TARGET_DIR/node_modules" ]; then
    rm -rf "$TARGET_DIR/node_modules"
fi

# .git 디렉토리 제거 (있는 경우)
if [ -d "$TARGET_DIR/.git" ]; then
    rm -rf "$TARGET_DIR/.git"
fi

echo -e "${GREEN}스캐폴딩이 완료되었습니다!${NC}"
echo -e "다음 명령어로 시작하세요:"
echo -e "  ${YELLOW}cd $TARGET_DIR${NC}"
echo -e "  ${YELLOW}pnpm install${NC}" 