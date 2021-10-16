import firebase from "firebase/app";
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

export const getAllPosts = async () => {
  const posts = await firestore.collection("v1/social-app/posts").get();
  return posts.docs.map((post) => ({ id: post.id, ...post.data() }));
};

export const createPost = async (post) => {
  try {
    await firestore.set({
      ...post,
      posted_at: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
};
export const updatePost = async (postData) => {
  try {
    await firestore.set({
      ...postData,
    });
  } catch (err) {
    console.log(err);
  }
};
export const createUser = async (user) => {
  try {
    await firestore.set({
      ...user,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateUser = async (userData) => {
  try {
    await firestore.set({
      ...userData,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getAllUsers = async () => {
  const users = await firestore.collection("v1/social-app/users").get();
  return users.docs.map((user) => ({ id: user.id, ...user.data() }));
};

export const getComments = async (pid) => {
  const comments = await firestore
    .collection(`v1/social-app/posts/${pid}/comments`)
    .orderBy("comment_at")
    .get();
  return comments.docs.map((comment) => ({
    id: comment.id,
    ...comment.data(),
  }));
};

export const getReplies = async (pid, cid) => {
  const replies = await firestore
    .collection(`v1/social-app/posts/${pid}/comments/${cid}/replies`)
    .orderBy("reply_at")
    .get();
  return replies.docs.map((reply) => ({
    id: reply.id,
    ...reply.data(),
  }));
};
