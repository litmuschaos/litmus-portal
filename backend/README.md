# Maya


## Set up backend environments
1) Install dependencies
Install modules defined in go.mod
```bash
go mod download
```

2) Create database
```bash
go run scripts/gqlgen.go init
```

if you start new project, run the following command before the upper one.
```bash
rm graph/schema.resolvers.go && gqlgen generate
```

3) Install air if you want hot reloading
you can use hot reoloading with [air](https://github.com/cosmtrek/air).

## Set up frontend environments
Go to the fronend folder and run the following commands.
```bash
npm install
npm run start
```