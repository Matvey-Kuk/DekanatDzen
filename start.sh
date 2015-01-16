#!/bin/bash

#Docker inner running script only

cd "/opt/app"

pip3 install -r requirements.txt;

python3 manage.py migrate

python3 manage.py runserver 0.0.0.0:80