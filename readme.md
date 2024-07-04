## Context

Deploying this project will create a firebase POST function, It will take the internal IP address and the MAC address of a device as function body along with the FCM token of the device to which this request is addressed to.

The FCM token will be printed in the logs of the companion android app. Enhancements will be made at a later time to display it directly in the UI.

[Companion app](https://github.com/RajNirmal/wake_on_lan/)

Sample CURL :

```
curl --request POST \
  --url https://sendfcm-fcm_function/ \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/9.2.0' \
  --data '{
	"fcm_token": "fcm_token_from_app",
	"mac": "0A:0A:0A:0A:0A:0A",
	"internal_ip": "192.168.0.109"
}'
```

## Plan Tier

FCM recently upgraded their price plan so functions is no longer available under their free tier. But the first several million invocation of functions is free which should suffice for this use case. Upgrade to the Blaze plan and set the account spending limits accordingly and you should be fine.