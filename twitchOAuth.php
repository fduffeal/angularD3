<?php
/**
 * Created by PhpStorm.
 * User: francisduffeal
 * Date: 18/06/2014
 * Time: 22:06
 */

$clientId = "fdb8sc454mtrk3b1dcmavxt5h1468e7";
$redirectUrl = "http://".$_SERVER["SERVER_NAME"].'/angularD3/twitchOAuthCallback.php';

var_dump($redirectUrl);
$scope = "user_read+channel_read";
$url ="https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=".$clientId."&redirect_uri=".$redirectUrl."&scope=".$scope;


?>

<a href="<? echo $url; ?>">go twitch</a>