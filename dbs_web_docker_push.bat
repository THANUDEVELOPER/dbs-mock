echo on

echo ---------------------------------------Connecting Docker-----------------------------------------------------------

docker logout

docker login --usernmae=roundsedge

echo ---------------------------------------docker compose down success-----------------------------------------------------------

docker images

docker image rm -f dbs-web:latest

docker image rm -f rettech/dbs-web:latest

echo ----------------------------------------Removed images success---------------------------------------------------------------------------------------------

echo ---------------------------------------Create Docker Images-----------------------------------------------------------

docker build -t dbs-web .

echo -----------------------------------------Tag Tagnify Web image--------------------------------------------------------------------------------------------

docker tag dbs-web:latest rettech/dbs-web:latest

echo ------------------------------------------Push Tagnify Web image-------------------------------------------------------------------------------------------

docker push rettech/dbs-web:latest

echo --------------------------------------------COMPLETED-----------------------------------------------------------------------------------------

