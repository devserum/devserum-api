# Quick Start For Mac

* [README](../README.md)


## install [yarn](https://yarnpkg.com/)

```
brew install yarn
```

## install [docker](https://www.docker.com/) 

go to link, and get one for you

* install over than 19 
* **dont forget set cpu limit to 1 or 2**

```
# check docker version after install

$ docker --version
Docker version 19.03.5, build 633a0ea
```

## install postgres via docker

### docker [postgres](https://hub.docker.com/_/postgres) 

for now(20-01-16) I recommend latest(12) version

* pull image 
    ```
    $ docker pull postgres:latest
    ```
 
* run image
    ```
    # via script
    
    $ cd ~/devserum-api/scripts/local-dev
    $ sh ./docker-compose-up.local.sh
    ```

* check docker volume
```
# via script
    
$ cd ~/devserum-api/scripts/local-dev
$ sh ./docker-compose-down.local.sh
```


## Install postgres via Postgres.app
     
If you only develop you can pass this step.
psql only need for deploy, production database migration

**if you use under 12 remove all your legacy postgres**

### homebrew uninstall
```
brew doctor
brew update
brew uninstall postgresql
```

* [Completely Uninstall and Reinstall PSQL on OSX](https://medium.com/@bitadj/completely-uninstall> -and-reinstall-psql-on-osx-551390904b86)

### Install Postgres.app
* download [mac app](https://postgresapp.com/downloads.html) and install
* after install go to preference & disable autostart

* after install add this in your `.profile`
    ```
    # postgres
    export POSTGRES_HOME=/Applications/Postgres.app/Contents/Versions/latest/bin
    export PATH=$PATH:$POSTGRES_HOME
    ```

* [official document for cli-tool setup](https://postgresapp.com/documentation/cli-tools.html)





# Tips

* access to docker psql
```
$ docker exec -it ${docekr name || container id} psql -U postgres

e.g
$ docker exec -it devserum_postgres psql -U postgres
```

# Quick Start For Linux
> are you using linux? then it's your turn to make **Quick Start For Linux** 



