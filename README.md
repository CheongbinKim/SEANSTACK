# SEANSTACK

![alt text](https://github.com/cheongbinkim/SEANSTACK/blob/main/SEANSTACK.png?raw=true)


# Nginx
```
$ sudo yum install epel-release -y
$ sudo yum install nginx
$ nginx -v
nginx version: nginx/1.16.1

$ sudo systemctl start nginx
$ sudo systemctl enable nginx
$ sudo systemctl status nginx

# nginx.conf 수정 * server{ root 경로 변경 필요 }
$ cat /etc/nginx/nginx.conf

# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /home/centos/express_mongo/front/build/;

        index index.html index.htm
        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
                add_header Access-Control-Allow-Origin *;
                proxy_pass http://127.0.0.1:4200;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "Upgrade";
                # allow socket.io
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Origin "";
        }


        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
    
# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2 default_server;
#        listen       [::]:443 ssl http2 default_server;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers HIGH:!aNULL:!MD5;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#
#        location / {
#        }
#
#        error_page 404 /404.html;
#        location = /404.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#        location = /50x.html {
#        }
#    }
}
```

# Node.js
```
$ curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
$ sudo yum install -y nodejs
$ node -v
v12.22.1
```

# SEANSTACK
```
$ sudo yum install git -y
$ git clone -b master --single-branch https://github.com/cheongbinkim/seanstack
```

# Package
```
# global package
$ sudo npm install -g @angular/cli
$ sudo npm install sequelize -g
$ sudo npm install pg -g
$ sudo npm install pm2 -g
$ pm2 install pm2-logrotate

# local package
$ cd SEANSTACK
$ npm install
$ cd front
$ npm install
```

# Backend
```
$ pwd
/home/centos/SEANSTACK
$ pm2 start "npm start" --name back
# 사내망이 아닌 경우 DB 연결은 실패
```

# Frontend
```
$ pwd
/home/centos/SEANSTACK/front
$ pm2 start "npm start" --name front
```

