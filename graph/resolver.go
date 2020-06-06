package graph

import (
	// "github.com/brainsolution/maya-service/graph/generated"
	"github.com/brainsolution/maya-service/graph/model"
)

// type Resolver struct {}

type Resolver struct {
	todos []*model.Todo
}

// func (r *Resolver) Mutation() MutationResolver {
// 	r.users = db.GetCollection("users")
// 	return &mutationResolver{r}
// }

// func (r *Resolver) Query() QueryResolver {
// 	r.users = db.GetCollection("todos")
// 	return &queryResolver{r}
// }

// func (r *Resolver) Subscription() SubscriptionResolver {
// 	r.users = db.GetCollection("users")
// 	return &subscriptionResolver{r}
// }
