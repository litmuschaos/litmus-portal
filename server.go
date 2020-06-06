package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/brainsolution/maya-service/db"
	"github.com/brainsolution/maya-service/graph"
	"github.com/brainsolution/maya-service/graph/generated"
)

const defaultPort = "8080"

func graphqlServer() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	db.ConnectDB()

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
