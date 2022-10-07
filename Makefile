bash:
	docker run -it --rm -v ${PWD}:/app -v ~/.gitconfig:/etc/gitconfig -w /app node:latest bash

up:
	docker run -it --rm -v ${PWD}:/app -w /app -p 3000:3000 node:latest yarn dev

build:
	docker run -it --rm -v ${PWD}:/app -w /app node:latest yarn build
