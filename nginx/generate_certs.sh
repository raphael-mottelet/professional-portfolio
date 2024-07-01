#!/bin/bash

# Vérifiez que Certbot est installé
if ! [ -x "$(command -v certbot)" ]; then
  echo 'Error: Certbot is not installed.' >&2
  exit 1
fi

# Obtenez les certificats Let's Encrypt
sudo certbot certonly --standalone --non-interactive --agree-tos --email raphael.mottelet.pro@protonmail.com -d mottelet.dev -d www.mottelet.dev -d admin.mottelet.dev

# Assurez-vous que le répertoire des certificats est correct
sudo mkdir -p ./nginx/letsencrypt/live/mottelet.dev
sudo cp /etc/letsencrypt/live/mottelet.dev/fullchain.pem ./nginx/letsencrypt/live/mottelet.dev/
sudo cp /etc/letsencrypt/live/mottelet.dev/privkey.pem ./nginx/letsencrypt/live/mottelet.dev/

sudo mkdir -p ./nginx/letsencrypt/live/www.mottelet.dev
sudo cp /etc/letsencrypt/live/www.mottelet.dev/fullchain.pem ./nginx/letsencrypt/live/www.mottelet.dev/
sudo cp /etc/letsencrypt/live/www.mottelet.dev/privkey.pem ./nginx/letsencrypt/live/www.mottelet.dev/

sudo mkdir -p ./nginx/letsencrypt/live/admin.mottelet.dev
sudo cp /etc/letsencrypt/live/admin.mottelet.dev/fullchain.pem ./nginx/letsencrypt/live/admin.mottelet.dev/
sudo cp /etc/letsencrypt/live/admin.mottelet.dev/privkey.pem ./nginx/letsencrypt/live/admin.mottelet.dev/

# Ajouter une tâche cron pour renouveler les certificats automatiquement
echo "0 0,12 * * * root certbot renew --quiet" | sudo tee /etc/cron.d/certbot
