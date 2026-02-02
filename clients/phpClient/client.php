<?php

$url = "http://localhost:8080/demo-1.0-SNAPSHOT/translator/getTranslation";

$data = [
    "prompt" => "Translate this <Hello World> to this language <Frensh>"
];

$options = [
    "http" => [
        "method"  => "POST",
        "header"  => "Content-Type: application/json\r\n",
        "content" => json_encode($data)
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

echo $response;
