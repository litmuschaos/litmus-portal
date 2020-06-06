package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	users *mgo.Collection
}

func New() Config {
	return Config {
		Resolvers: &Resolver{
			users: db.GetCollection("users"),
		},
	}
}

func (r *Resolver) Mutation() MutationResolver {
	r.users = db.GetCollection("users")
	return &mutationResolver{r}
}

func (r *Resolver) Query() QueryResolver {
	r.users = db.GetCollection("users")
	return &queryResolver{r}
}

func (r *Resolver) Subscription() SubscriptionResolver {
	r.users = db.GetCollection("users")
	return &subscriptionResolver{r}
}
