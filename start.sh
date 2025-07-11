#!bin/bash
GREEN='\033[1;32m'
BLUE='\033[0;34m'
while : 
do
printf "${GREEN}︎Takira iniciando em 1,2,3...\n"
if [ "$1" = "sim" ]; then
node connect.js sim
elif [ "$1" = "não" ]; then
node connect.js não
else 
node connect.js
fi
sleep 1 
printf "${BLUE}︎Takira Iniciando...\n"
done
