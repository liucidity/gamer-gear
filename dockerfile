FROM node:18
# RUN apk add --no-cache libc6-compat openssl openssl-dev
RUN npm i -g pnpm
WORKDIR /app


COPY package*.json yarn.lock pnpm-lock.yaml./
# RUN pnpm fetch
# RUN yarn install

# COPY next.config.js ./next.config.js
COPY prisma ./prisma/ 
# COPY pages ./pages
# COPY public ./public
# COPY styles ./styles
# COPY tsconfig.json ./
COPY .env ./
# COPY . .
# RUN npm install
RUN pnpm install -r

RUN npx prisma generate

# CMD ["yarn", "dev"]