# Extension_Translator
This project aims to implement an LLM-powered RESTful web service for
translating from English to Moroccan Arabic Dialect (Darija) or Any Other Language. The web service is
called TranslatorResource, and it has a business method called translate(), which
takes an English text as an argument and returns its translation. The translation task
is performed by an LLM (Large Language Model) in my case I using ****


## PROJECT OVERVIEW:
    - PHP Client --> Server With JEE (REST API) --> LLM
    - LLM --> REST API --> PHP Client

    - Extention --> Server With JEE (REST API) --> LLM
    - LLM --> REST API --> Extention


// IMAGE HERE

## PROJECT STRUCTURE:
    clients: contain two folder php clients and extention as client
    server: for rest api


# How to Run it:
first fork the project and download wildfly in your computer.

``` bash

For The First part:
if you are in linux execute the project: by this commands:
/yourPathToWildFly/wildfly-39.0.0.Beta1/bin/standalone.sh
but after that export export GOOGLE_API_KEY=AIzaSyBsGAcoTjfJ_K9WZShdvmWWnVKuN6GoSR8 FROm: https://aistudio.google.com/api-keys


cd clients/phpClient 
php client.php # you shoudl the reposne


For The Second part:
upload folder of clients/extention to goodle chomr extention or any borwser from here:
brave://extensions/

and you get the result: of extention.

TEST: curl -X POST "http://localhost:8080/demo-1.0-SNAPSHOT/translator/getTranslation" \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Translate this <Hello World> to this language <Arabic>"}'

```

