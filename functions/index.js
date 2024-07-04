/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started



// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");


// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

admin.initializeApp();

const payload = {
  data: {
    mac : '0A:0A:0A:0A:0A:0A', // Mac address of the device that needs to wake up 
    internal_ip: '192.168.0.109' // Internal IP address, can use external IP is a static IP is assigned
  },
  android: {
    priority: 'high'
  }
};

exports.sendFCM = onRequest((request, response) => {
  logger.info("Received FCM wake up call ")
  const token = request.body["fcm_token"]
  const mac = request.body["mac"]
  const internal_ip = request.body["internal_ip"]
  payload['token'] = token
  payload['data']['mac'] = mac
  payload['data']['internal_ip'] = internal_ip
  console.log(payload)
  const fcmResponse = admin.messaging().send(payload)
  response.send(fcmResponse.body)
})