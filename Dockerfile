# We label our stage as 'builder'
#FROM node:11.6.0-alpine AS builder
#FROM node:10-alpine AS builder
FROM node:latest AS builder

COPY package.json package-lock.json ./

# Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install -f
RUN npm ci --legacy-peer-deps && mkdir /ng-app && mv ./node_modules ./ng-app/

#RUN npm ci 

#RUN mkdir /ng-app 

#RUN mv ./node_modules ./ng-app/

# Move to /ng-app (eq: cd /ng-app)
WORKDIR /ng-app

# Copy everything from host to /ng-app in the container
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
ARG NG_ENV=prod
RUN npm run build

### STAGE 2: Setup ###
FROM nginx:1.17.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

#RUN chown nginx:nginx /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/dbs-mock-ui /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]