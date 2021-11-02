  import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const config = {};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const functions = firebase.functions();

// PATHS
const POSTS = `v1/social-app/posts`;
const USERS = `v1/social-app/users`;

// Posts API
export const getAllPosts = async () => {
  const posts = await firestore.collection(`${POSTS}`).get();
  return posts.docs.map((post) => ({ id: post.id, ...post.data() }));
};

export const getPost = async (pid) => {
  const post = await firestore.doc(`${POSTS}/${pid}`).get();
  await firestore.doc(`${POSTS}/${pid}`).set(
    {
      total_reads: firebase.firestore.FieldValue.increment(1),
    },
    { merge: true }
  );
  return post;
};

export const createPost = async (uid, post) => {
  try {
    await firestore.collection(`${POSTS}`).add({
      ...post,
      total_likes: 0,
      likes_by: [],
      total_reads: 0,
      total_comments: 0,
      image: null,
      posted_at: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await firestore.doc(`${USERS}/${uid}/total_posts`).set(
      {
        total_posts: firebase.firestore.FieldValue.increment(1),
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (uid, pid, postData) => {
  try {
    await firestore.doc(`${POSTS}/${pid}`).set(
      {
        ...postData,
        updated_on: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (uid, pid) => {
  await firestore.doc(`${POSTS}/${pid}`).set(
    {
      total_likes: firestore.FieldValue.increment(1),
      likes_by: firestore.FieldValue.arrayUnion(uid),
    },
    { merge: true }
  );
};

export const dislikePost = async (uid, pid) => {
  await firestore.doc(`${POSTS}/${pid}`).set(
    {
      total_dislikes: firestore.FieldValue.increment(-1),
      dislikes_by: firestore.FieldValue.arrayUnion(uid),
    },
    { merge: true }
  );
};

export const neutralizePost = async (uid, pid) => {
  const postData = await firestore.doc(`${POSTS}/${pid}`).get();
  let likes_by = [],
    dislikes_by = [];
  try {
    if (postData.likes_by?.includes(uid)) {
      likes_by = postData.likes_by.filter((userId) => userId != uid);
    } else if (postData.dislikes_by?.includes(uid)) {
      dislikes_by = postData.likes_by.filter((userId) => userId != uid);
    }
    await firestore.doc(`${POSTS}/${pid}`).set(
      {
        total_likes: likes_by.length,
        total_dislikes: dislikes_by.length,
        likes_by,
        dislikes_by,
      },
      { merge: true }
    );
  } catch (err) {}
};

// Users API
export const createUser = async (user, userName, displayName) => {
  try {
    await firestore.collection(`${USERS}`).add({
      uid: user?.uid,
      display_name: displayName,
      email: user?.email,
      user_name: userName,
      profile_pic: user?.photoURL,
      user_bio: "I ❤ social blogs.",
      total_followers: 0,
      total_following: 0,
      total_posts: 0,
      posts: [],
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (uid, userData) => {
  try {
    const { user_name, display_name, user_bio, profile_pic } = userData;
    if (user_name) {
      const user = firestore
        .collection(`${USERS}`)
        .where("user_name", "==", user_name);
      if (!user.exists) {
        await firestore.doc(`${USERS}/${uid}`).set(
          {
            user_name,
            user_bio,
            display_name,
            profile_pic,
          },
          { merge: true }
        );
      } else {
        // throw err
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = async () => {
  const users = await firestore.collection(`${USERS}`).get();
  return users.docs.map((user) => ({ id: user.id, ...user.data() }));
};

export const getCurrentUser = async () => {
  const userRef = firestore.doc(`v1/social-app/users/${auth.currentUser?.uid}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    const userData = snapshot.data();
    return userData;
  }

  return null;
};

// Comments API
export const postComment = async (pid, commentData) => {
  await firestore.collection(`${POSTS}/${pid}/comments`).add({
    ...commentData,
    total_replies: 0,
    total_likes: 0,
    total_dislikes: 0,
    likes_by: [],
    dislikes_by: [],
    comment_at: firebase.firestore.FieldValue.serverTimestamp(),
  });
  await firestore.doc(`${POSTS}/${pid}`).set(
    {
      total_comments: firestore.FieldValue.increment(1),
    },
    { merge: true }
  );
};

export const getComments = async (pid) => {
  const comments = await firestore
    .collection(`${POSTS}/${pid}/comments`)
    .orderBy("comment_at")
    .get();
  return comments.docs.map((comment) => ({
    id: comment.id,
    ...comment.data(),
  }));
};

export const updateComment = async (uid, pid, cid, commentData) => {
  await firestore.doc(`${POSTS}/${pid}/comments/${cid}`).set(
    {
      ...commentData,
      comment_by: uid,
      updated_on: firebase.firestore.FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
};

// Replies API
export const getReplies = async (pid, cid) => {
  const replies = await firestore
    .collection(`${POSTS}/${pid}/comments/${cid}/replies`)
    .orderBy("reply_at")
    .get();
  return replies.docs.map((reply) => ({
    id: reply.id,
    ...reply.data(),
  }));
};

export const postReply = async (pid, cid, uid, reply, rid) => {
  const initData = {
    reply_by: uid,
    total_likes: 0,
    total_dislikes: 0,
    likes_by: [],
    dislikes_by: [],
  };
  if (rid) {
    await firestore.doc(`${POSTS}/${pid}/comments/${cid}/replies/${rid}`).set(
      {
        replies: firestore.FieldValue.arrayUnion({
          ...reply,
          ...initData,
          reply_at: firestore.FieldValue.serverTimestamp(),
        }),
      },
      { merge: true }
    );
  } else {
    await firestore.collection(`${POSTS}/${pid}/comments/${cid}/replies`).add({
      ...reply,
      ...initData,
      reply_at: firestore.FieldValue.serverTimestamp(),
    });
  }
  await firestore.doc(`${POSTS}/${pid}/comments/${cid}`).set(
    {
      total_replies: firestore.FieldValue.increment(1),
    },
    { merge: true }
  );
};

// Authentication API
// --> Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async (history) => {
  try {
    const userCredential = await auth.signInWithPopup(provider);

    const {
      user,
      additionalUserInfo: { isNewUser },
    } = userCredential;

    if (isNewUser) {
      await createUser(user, user.email, user.displayName);

      history.push({
        pathname: "/home/posts",
      });
    }
    return true;
  } catch (err) {
    if (err.code === "auth/network-request-failed") {
      // notification
    } else {
    }
    console.log(err);
  }
};

export const signInWithEmailAndPassword = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // redirect to home
    })
    .catch((err) => {
      // display err
    });
};

export const signUpWithEmailAndPassword = async (
  email,
  userName,
  displayName,
  password
) => {
  try {
    const userCredentials = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = userCredentials;
    const userData = firestore.doc(`${USERS}/${user.uid}`).get();
    if (!userData.exists) {
      const existingUser = await firestore
        .collection(`${USERS}`)
        .where("user_name", "==", userName);
      if (!existingUser.exists)
        user
          .sendUserEmailVerification()
          .then(() => {
            // redirect to landing page
            createUser(user, userName, displayName);
          })
          .catch((err) => {
            // email expired
          });
      else {
        // throw error
      }
    }

    return [false];
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        return [true, "Invalid Email"];
      case "auth/id-token-expired":
        return [true, "Token expired, Try again"];
      case "auth/email-already-exists":
        return [true, "email already in use"];
      default:
        return [true, "Something went wrong!"];
    }
  }
};

export const isEmailVerified = () => {
  return auth?.currentUser?.isEmailVerified;
};

export const resetPassword = async () => {
  auth
    .sendPasswordResetEmail(auth?.currentUser?.email)
    .then(() => {
      // go to login page
    })
    .catch(() => {
      // error
    });
};
