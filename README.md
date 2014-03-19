This is the cranberryjam website. 
We have been jamming annually since 2000 on Cranberry Lake!

Deployment details:

The web server is using nodejs on my raspberry pi. It's a little computer at home with 512M ram and 8G SD card, so we don't put a lot of pictures or javascripts on it. The server is a simple nodejs application containing only node-static package. 

The server is implemented in jamnode.js. It requires node-static [git@github.com:cloudhead/node-static.git], http and util. 
To run the server, execute "node jamnode.js". To run automatically upon bootup, put the nodejs.sh script under /etc/init.d.
