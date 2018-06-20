#FROM ubuntu:14.04
#WORKDIR /usr/src/app
#COPY angular-service/package*.json /usr/src/app/
#RUN apt-get update
#RUN apt-get -qq update
#RUN apt-get install -y nodejs npm
#RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10
#RUN npm build --prod
#COPY angular-service/dist /usr/src/app
##RUN ls -al /usr/share/nginx/htm
#EXPOSE 8000
#CMD [ "npm", "start" ]

### base image
##FROM node:9.6.1
##
### set working directory
##RUN mkdir /usr/src/app
##WORKDIR /usr/src/app
##
### add `/usr/src/app/node_modules/.bin` to $PATH
##ENV PATH /usr/src/app/node_modules/.bin:$PATH
##
### install and cache app dependencies
##COPY angular-service/package*.json /usr/src/app/
##RUN npm install
##RUN npm install -g @angular/cli@1.7.4
### add app
##COPY . /usr/src/app
##
### start app
##CMD ng serve --host 0.0.0.0

FROM node:9.6.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY angular-service/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY angular-service/ ./

EXPOSE 4200
CMD [ "npm", "start" ]