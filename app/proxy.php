<?php
/**
 * Created by PhpStorm.
 * User: francisduffeal
 * Date: 14/06/2014
 * Time: 19:34
 */

$url = $_GET['url'];

try{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_exec($ch);
    curl_close($ch);
} catch (Exception $e){
    var_dump($e);
}



