Pre-requisites:

1. Docker must be installed on the remote server.

2. The remote server firewall inbound rules must allow the required ports: 80,443 and 2375(daemon).
It must also allow 3004(dev),8084(prod) and 8086(nginx) for this example.

3. Nginx will be running inside the docker container. There is no need to seperately install it.

4. Need to learn:

Dynamic ports in docker-compose
Restarting docker containers on remote server restart.
Use restart and depends-on in compose

Not disturbing other containers, when deploying a change to a container