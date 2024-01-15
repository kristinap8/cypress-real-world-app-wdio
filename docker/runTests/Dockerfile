FROM --platform=linux/amd64 foqal/node-java:latest

RUN apt-get update -y && apt-get install -y wget gnupg 

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-archive-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/google-chrome-archive-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list > /dev/null
RUN apt-get update -y && apt-get install -y --no-install-recommends google-chrome-stable

WORKDIR /tests/

COPY package*.json ./

COPY . .

RUN npm install

CMD ["sh", "-c", "npm run wdio:docker && npm run report:docker"]