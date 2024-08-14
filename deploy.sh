export $(cat ./.env | grep -v ^# | xargs) >/dev/null

if [ "$NODE_ENV" == "production" ]; then
    git checkout main
    git fetch --all # git pull force
    git reset --hard origin/main # git pull force
    chmod -R 777 ./server # чтобы были права на создание node_modules из контейнера TODO: !!!!!!!!!!!!!!!!!!!!!!!
fi



# cd ./app/frontend
# git checkout main
# git pull
# cd ..
# cd ..

# cd ./app/server
# git checkout main
# git pull
# cd ..
# cd ..

docker compose down
docker compose up -d
