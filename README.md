# Terraform with Digitalocean - for the impatient

Terraform with DigitalOcean for the impatient course source code.

This is the sample application we're going to use in order to get a HTTP server up and running.

In order to get the server software installed, run (assuming you're using Ubuntu 18.04 LTS version):

```bash
$ apt update
$ apt install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
$ add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
$ apt update
$ apt install docker-ce
```

To make sure everything is OK, run:

```bash
$ systemctl status docker
```

And you should see the service as Active!
