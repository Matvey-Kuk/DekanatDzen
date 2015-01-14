FROM ubuntu:14.04
RUN apt-get -qq update

RUN apt-get install -y python3-dev python3-setuptools supervisor python3.4 python3-pip

EXPOSE 80