# Recommendation-engines

Task: map (user,item) pair into {likes,dislikes}

Training data: known likes/dislikes

Test data: active users

## Collaborative Filtering

This approach uses the collective intelligence and behaviour of the entire user base to generate recommendations and is content agnostic. The algorithm would look at users who's behaviour and interests resemble the query user and base recommendations on this data.  

A matrix representation can be used with users on one dimension and items on the other. Each cell contains a binary entry: 1 = item liked 0 = item disliked. If the user hasn't seen the item the cell would be left empty so for a large user and item space the matrix is likely to be very sparse.

A user can be extracted a vector. Similarity indices can be calculated between a query user and every other user. The algorithm could then pick the top K most similar users and get recommendations out of their rated/liked items.

### Similarity indices

A similarity index is a way of gauging how alike two users are.

#### Cosine similarity

Look at the dot product between a query user's vector and each other user.

![Alt text](/images/cosinesimilarity.png)

#### Jaccard coefficients

Look at the Jaccard coefficient between the query user and each other user. The Jaccard coefficient is useful for measuring binary data (swiped left/right or liked/disliked) and gives a value between 0 and 1.

![Alt text](images/jaccard.png)

Could also modify the equation to separate likes and dislikes to calculate a coefficient between -1 and 1 where two users with a coefficient of -1 have completely opposite tastes.


#### K-nearest neighbours

For 1000s of users, comparing a query user with every other user could take a long time. Instead only the K nearest neighbours could be used. The Jaccard Coefficients can be used to create a sorted set in order of most similarity. The top K users can then be extracted and used to generate the recommendations.

Alternatively if using cosine similarity, the weighted sum of the top K user profiles could be calculated and considered as the query user's predicted profile e.g perform the weighted sum using normalized cosine similarities as weights (so the weights are between 0 and 1).

![Alt text](/images/weights.png)

A basic implementation could run as follows:

1. A user logs in to the app
2. Most similar users are used to predict scores for unrated movies
3.

## Content Based Filtering

Recommendations are based on the characteristics of the items e.g. books/movies. The algorithm matches these to the characteristics of items previously liked/disliked by a user. Only the given user's choices are reflected in the recommendations.  

## Hybrid Systems

These two approaches work together and a hybrid approach is often best as it uses metadata about the actual items and also data about the collective user group e.g. recommending movies based on both other users’ activities and the movies’ attributes.

## Libraries

Npm modules:

* [recommendationRaccoon](https://github.com/guymorita/recommendationRaccoon) - build on top of Node.js and Redis. Uses Jaccard coefficients and K-nearest neighbours algorithm for recommendations.

# Further Reading

* [Tutorial of a basic implementation of Collaborative Filtering using Jaccard Coefficients (written with coffescript and express)](http://www.toptal.com/algorithms/predicting-likes-inside-a-simple-recommendation-engine)

* [Explanation of similarity indices used in Collaborative Filtering](http://functionspace.com/articles/63/Collaborative-Filtering--A-Recommender-System-)
