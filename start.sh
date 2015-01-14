#!/bin/bash
cd "/opt/app"

pip3 install -r requirements.txt;

python3 migrate

if [ ! -f db.sqlite3 ]; then
    python manage.py loaddata  fixtures;
fi

python3 manage.py runserver 0.0.0.0:80