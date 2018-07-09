FROM node:8
# latest LTS

# Create app directory..
RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app
# now most commands run from within there.

# Install app dependencies
RUN yarn install
EXPOSE 3000

CMD [ "npm", "start" ]