const functions = require('firebase-functions');

const app = require('express')();
const FBAuth = require('./util/fbauth');

//const { db } = require('./util/admin');

const {
  getAllPosts,
  postOnePost,
  getPost,
  commentOnPost,
  deletePost,
} = require('./handlers/posts');
const {
  signup,
  login,
  addUserDetails,
  getAuthenticatedUser,
} = require('./handlers/users');

// Post routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, postOnePost);
app.get('/post/:postId', getPost);
app.delete('/post/:postId', FBAuth, deletePost);
// TODO: like post
//app.get('/post/:postId/like', FBAuth, likePost)
app.post('/post/:postId/comment', FBAuth, commentOnPost);

// Users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

// https://url.com/api/posts/
exports.api = functions.region('australia-southeast1').https.onRequest(app);

/* exports.createNotificationOnComment = functions.firestore.document('comments/{id}').onCreate((snapshot) => {
    db.doc(`/posts/${snapshot.data().postId}`)
    .get()
    .then((doc) => {
        if (doc.exists) {
            return db.doc(`/notifications/${snapshot.id}`)
        }
    })
}) */
