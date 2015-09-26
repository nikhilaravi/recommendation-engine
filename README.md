# Recommendation-engine
Building a very simple recommendation engine using collaborative filtering

### Collaborative Filtering

Uses the collective intelligence & behaviour of the entire user base but is content agnostic

Create a matrix of users on one dimensions and items on the other.

Rows contain binary entries:
 1 = movie watched/item purchased
 0 = movie not watched/item not purchased

Compute similarity indices between users and scores to identify how suitable items are for each user.

### Content Based System

Analyses content of the item and the profile of the user and matches items.

These two approaches work together and a hybrid approach is often best as it uses metadata about the actual items and also data about the collective user group e.g. recommending movies based on both other users’ activities and the movies’ attributes.
