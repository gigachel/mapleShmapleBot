# НЕ ИСПОЛЬЗУЕТСЯ! Все в docker-compose.yml

FROM node:16-alpine as base

WORKDIR /home/node/app/server

# RUN mkdir -p /home/node/app/server/node_modules && chown -R node:node /home/node/app
# RUN mkdir -p /home/node/app/server
RUN mkdir -p /home/node/app/server/node_modules
RUN mkdir -p /home/node/app/server/src/prisma
RUN mkdir -p /home/node/app/public
RUN chown -R node:node /home/node/app

# RUN ls -l
# RUN cd /home/node/app
# RUN pwd

COPY --chown=node:node ./app/server/package*.json ./

COPY --chown=node:node ./app/server/src/prisma ./src/prisma



USER node

#
FROM base as development

ENV NODE_ENV=development
# WORKDIR /home/node/app/server

RUN npm ci

WORKDIR /home/node/app/server/src
RUN npx prisma generate

CMD ["npm", "run", "dev"]

#
FROM base as production


ENV NODE_ENV=production

RUN npm ci --production

WORKDIR /home/node/app/server/src
RUN npx prisma generate

# WORKDIR /home/node/app/server/src
CMD ["node", "server.js"]
# CMD ["cd", "src", "&&", "node", "server.js"]



# COPY --chown=node:node . .

# EXPOSE 8000

# RUN ls
# prisma generate --schema=./server/database/schema.prisma; prisma migrate deploy --schema=./server/database/schema.prisma;
# RUN npx prisma db push
# RUN npx prisma migrate deploy
# RUN npx prisma generate

# CMD [ "npm", "run", "dev" ]






# FROM node:18-alpine as base

# WORKDIR /src
# COPY package.json package-lock.json /src/
# COPY . /src
# EXPOSE 8080

# FROM base as production

# ENV NODE_ENV=production
# RUN npm install --production

# CMD ["node", "index.js"]

# FROM base as dev

# ENV NODE_ENV=development
# RUN npm config set unsafe-perm true && npm install -g nodemon
# RUN npm install
# CMD ["npm", "start"]



# env_file:
#     - ".env"
# restart: "${DOCKER_RESTART_POLICY:-unless-stopped}"
