# build and run olx-cron
if [ ! -d "physics-api" ]; then
  git clone https://github.com/4rtHurB-1/physics-api physics-api
fi

cd physics-api
git pull origin master
npm i
pm2 delete physics-api
pm2 start ecosystem.config.js
