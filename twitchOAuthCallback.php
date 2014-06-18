<?php
/**
 * Created by PhpStorm.
 * User: francisduffeal
 * Date: 18/06/2014
 * Time: 22:14
 */

var_dump($_REQUEST);

/*

On your server, you can now make the following request to obtain an access token:

POST https://api.twitch.tv/kraken/oauth2/token

POST Body (URL-encoded)

client_id=[your client ID]
&client_secret=[your client secret]
&grant_type=authorization_code
&redirect_uri=[your registered redirect URI]
&code=[code received from redirect URI]
We'll respond with a JSON-encoded access token:

{
  "access_token": "[user access token]",
  "scope":[array of requested scopes]
}