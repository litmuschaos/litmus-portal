package db

import (
	"fmt"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

)

func GetDBCollection() (*mongo.Collection, error) {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

	if err != nil {
		return nil, err
	}
	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	collection := client.Database("maya").Collection("users")
	return collection, nil
}