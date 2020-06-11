# Maya


## Set up backend environments
1) Install dependencies
```bash
go get github.com/99designs/gqlgengo get github.com/gorilla/mux
go get github.com/globalsign/mgo
go get github.com/satori/go.uuid
```

```bash
go get github.com/pkg/errorsgo get github.com/urfave/cligo get golang.org/x/tools/go/ast/astutilgo get golang.org/x/tools/go/loadergo get golang.org/x/tools/importsgo get gopkg.in/yaml.v2
```

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