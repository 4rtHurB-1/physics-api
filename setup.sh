#!/bin/bash

USER="ubuntu"

apt update
apt upgrade
apt install curl

if hash node 2>/dev/null;
then
    echo "node is already installed"
else
    curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
    sudo apt -y install nodejs
    apt install npm
fi

if hash pm2 2>/dev/null;
then
    echo "pm2 is already installed"
else
    npm i -g pm2
fi
