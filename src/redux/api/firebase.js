import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, Timestamp, FieldValue } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyD9703msQFncIRY6nu5gcoVEuy6j_wJ6vg",
  authDomain: "social-app-884b2.firebaseapp.com",
  projectId: "social-app-884b2",
  storageBucket: "social-app-884b2.appspot.com",
  messagingSenderId: "838513615558",
  appId: "1:838513615558:web:bf8f669922adcfb97eedc7",
  measurementId: "G-ZCYR957KRZ",
};
const firebase = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

// PATHS
const POSTS = `v1/social-app/posts`;
const USERS = `v1/social-app/users`;

// Posts API
export const getAllPosts = async () => {
  const posts = await collection(`${POSTS}`).get();
  return posts.docs.map((post) => ({ id: post.id, ...post.data() }));
};

export const getPost = async (pid) => {
  const post = await getDocs(`${POSTS}/${pid}`).get();
  await getDocs(`${POSTS}/${pid}`).set(
    {
      total_reads: FieldValue.increment(1),
    },
    { merge: true }
  );
  return post;
};

export const createPost = async (uid, post) => {
  try {
    await collection(`${POSTS}`).add({
      ...post,
      total_likes: 0,
      likes_by: [],
      total_reads: 0,
      total_comments: 0,
      image: null,
      posted_at: FieldValue.serverTimestamp(),
    });
    await getDocs(`${USERS}/${uid}/total_posts`).set(
      {
        total_posts: FieldValue.increment(1),
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (uid, pid, postData) => {
  try {
    await getDocs(`${POSTS}/${pid}`).set(
      {
        ...postData,
        updated_on: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (uid, pid) => {
  await getDocs(`${POSTS}/${pid}`).set(
    {
      total_likes: FieldValue.increment(1),
      likes_by: FieldValue.arrayUnion(uid),
    },
    { merge: true }
  );
};

export const dislikePost = async (uid, pid) => {
  await getDocs(`${POSTS}/${pid}`).set(
    {
      total_dislikes: FieldValue.increment(-1),
      dislikes_by: FieldValue.arrayUnion(uid),
    },
    { merge: true }
  );
};

export const neutralizePost = async (uid, pid) => {
  const postData = await getDocs(`${POSTS}/${pid}`).get();
  let likes_by = [],
    dislikes_by = [];
  try {
    if (postData.likes_by?.includes(uid)) {
      likes_by = postData.likes_by.filter((userId) => userId != uid);
    } else if (postData.dislikes_by?.includes(uid)) {
      dislikes_by = postData.likes_by.filter((userId) => userId != uid);
    }
    await getDocs(`${POSTS}/${pid}`).set(
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
    await collection(`${USERS}`).add({
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
      created_at: FieldValue.serverTimestamp(),
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
        await getDocs(`${USERS}/${uid}`).set(
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
  const users = await collection(`${USERS}`).get();
  return users.docs.map((user) => ({ id: user.id, ...user.data() }));
};

export const getCurrentUser = async () => {
  const userRef = getDocs(`v1/social-app/users/${auth.currentUser?.uid}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    const userData = snapshot.data();
    return userData;
  }

  return null;
};

// Comments API
export const postComment = async (pid, commentData) => {
  await collection(`${POSTS}/${pid}/comments`).add({
    ...commentData,
    total_replies: 0,
    total_likes: 0,
    total_dislikes: 0,
    likes_by: [],
    dislikes_by: [],
    comment_at: FieldValue.serverTimestamp(),
  });
  await getDocs(`${POSTS}/${pid}`).set(
    {
      total_comments: FieldValue.increment(1),
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
  await getDocs(`${POSTS}/${pid}/comments/${cid}`).set(
    {
      ...commentData,
      comment_by: uid,
      updated_on: FieldValue.serverTimestamp(),
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
    await getDocs(`${POSTS}/${pid}/comments/${cid}/replies/${rid}`).set(
      {
        replies: FieldValue.arrayUnion({
          ...reply,
          ...initData,
          reply_at: FieldValue.serverTimestamp(),
        }),
      },
      { merge: true }
    );
  } else {
    await collection(`${POSTS}/${pid}/comments/${cid}/replies`).add({
      ...reply,
      ...initData,
      reply_at: FieldValue.serverTimestamp(),
    });
  }
  await getDocs(`${POSTS}/${pid}/comments/${cid}`).set(
    {
      total_replies: FieldValue.increment(1),
    },
    { merge: true }
  );
};

// Authentication API
// --> Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async (history) => {
  try {
    const userCredential = await signInWithPopup(provider);

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
    const userCredentials = await createUserWithEmailAndPassword(
      email,
      password
    );
    const { user } = userCredentials;
    const userData = getDocs(`${USERS}/${user.uid}`).get();
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
