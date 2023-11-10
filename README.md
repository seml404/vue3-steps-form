# vue3-stepps-form

## Project Setup - install dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build for production

```sh
npm run build-only
```

### Docker build image / run container (deploy) - check Docker file for details

```sh

sudo docker build -t stepper .

sudo docker run -d -p 3000:80 stepper


```