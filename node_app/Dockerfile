FROM node:alpine
WORKDIR /app
# this wil optimize the build time as it will copy json file first and installed, if json file didn't change and you rebuild it will be fast enough to amaze you
COPY ./package.json .
RUN npm install
# the first arg is the current directory of the project, the 2nd arg is the current/working directory of the contaier  whick in this caseis ./app
COPY . .
CMD ["npm", "start"]