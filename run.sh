git pull origin master
npm i
pm2 delete physics-api
pm2 start ecosystem.config.js
