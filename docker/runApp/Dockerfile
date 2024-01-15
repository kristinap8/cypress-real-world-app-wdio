FROM node:18.16.1

RUN apt-get update -y && apt-get install -y wget gnupg
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-archive-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/google-chrome-archive-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list > /dev/null
RUN apt-get update -y && apt-get install -y --no-install-recommends google-chrome-stable

WORKDIR /cypress-app/

RUN git clone --branch develop --single-branch https://github.com/cypress-io/cypress-realworld-app .

RUN yarn install