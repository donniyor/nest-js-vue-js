#!/bin/bash

cd client

npm run serve &

cd ../server

docker compose up -d

npm run start:dev &

docker run -it -e NGROK_AUTHTOKEN=2hBIHd4BaaJUREsgWFHMckf1hHS_5hPWVTpproZRxwcsk7xhg ngrok/ngrok http 3000
