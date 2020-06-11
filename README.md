# Maya


## Set up backend environments
1) Install dependencies
you can use hot reoloading with [air](https://github.com/cosmtrek/air).

2) Create database
```bash
rm graph/schema.resolvers.go && gqlgen generate

go run scripts/gqlgen.go init
```

## Set up frontend environments
```bash
npm install
npm run start
```