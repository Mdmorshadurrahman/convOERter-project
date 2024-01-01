FROM node:16-alpine

WORKDIR /api

COPY package*.json /api/

RUN ["npm","install"]

# Copy app source code
COPY . /api/

#Expose port and start application
EXPOSE 3000

CMD [ "npm", "start" ]