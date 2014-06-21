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
*/
if($_REQUEST['code']){
    $clientId = "fdb8sc454mtrk3b1dcmavxt5h1468e7";
    $redirectUrl = "http://".$_SERVER["SERVER_NAME"].'/angularD3/twitchOAuthCallback.php';
    $clientSecret = "amz8o15rt0zbgsvmqvocqzz5pg3kez7";

    $postdata = http_build_query(
        array(
            'client_id' => $clientId,
            'client_secret' => $clientSecret,
            'grant_type' => 'authorization_code',
            'redirect_uri' => $redirectUrl,
            'code' => $_REQUEST['code'],
        )
    );

    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata
        )
    );

    $context = stream_context_create($opts);

    $result = file_get_contents('https://api.twitch.tv/kraken/oauth2/token', false, $context);

    var_dump($result);

    /*
     * {"access_token":"9076vv8rdodrlsxqzad9w20ltbgx1t","refresh_token":"eyJfaWQiOiI0NzEwNzM2NyJ9%W3O19xtsM/ZkkJI+B2BLWZu1u3CLbjDe2SdAq9J4HrM=","scope":["user_read","channel_read"]}"
     */


}



?>