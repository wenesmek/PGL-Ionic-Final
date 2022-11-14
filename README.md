 
# UT1 - PGL - Pet's toys manager

This is a Pet toys manager. Here you can organize your pet's best possessions.


## Starting 🚀

For download this application just run in your terminal:


```
git clone https://github.com/wenesmek/UT1-PGL-Ionic.git
```

(if you have not git installed you can go direct to  _Prerequisites_)


### Prerequisites 📋

To excecute this app and it's configurations you'll neeed:

* [Node](https://nodejs.org/es/) - Version 16.17.1 LTS of Node
* [Git](https://git-scm.com/) - Repositories manager
* Ionic - Node package to run/create Ionic applications ``` npm install -g @ionic/cli ```



### Installation 🔧

_Back-end_

_Dependencies installation_

To configure the back dependencies you just have to run this command inside _backend_ folder:

```
npm i
```

_DataBase configuration_

You should have to create (in your MySql sercie) a schema with the name _db_juguetes_. Later configure the connection with your own credentials in _db.config.js_ file, inside _config_ folder.

```
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'db_juguetes',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
```

* Be sure you put your _USER_ and _PASSWORD_.

_Front-end_

_Installing dependencies_

For install Front dependencies, just run this command inside the _frontend_ folder inside the project:

```
npm i
```


## Setting up the back⚙️


Once the backend project is configured, you just have to run ``` node index.js ``` insede the backend root folder.

You'll see some notifications in the terminal about the database creation and advice that says the Back-end is up in the 8080 port.

To realize some test from the _endpoints_ of this api-restfull, you can use the following button(link to postman [workplace](https://web.postman.co/))

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/14032196-2e44493c-c0a7-44ec-962c-b364f8b176f7?action=collection%2Ffork&collection-url=entityId%3D14032196-2e44493c-c0a7-44ec-962c-b364f8b176f7%26entityType%3Dcollection%26workspaceId%3D80aad27e-dcf1-45ea-b953-b71747bc7a26)




## Setting up the Front-End ⚙️

For run the _Ionic_ service you just have to run the following command from the _frontend_ folder:


```
ionic serve
```


Once both services are up (_Back-end_ and _Front-end_), the application should be working with no problem and you could try the Creation, Read, Update and Delete from the pet toys application.




## Created with 🛠️



* [WebStorm](https://www.jetbrains.com/es-es/webstorm/) - JavaScrip IDE from JetBrains
* [GitHub Cli](https://cli.github.com/) - Terminal repositories manager.
* [VSCode](https://code.visualstudio.com/) - Text editor Visual Studio Code





---
⌨️ with ❤️ by [Néstor Lorenzo Artiles](https://github.com/wenesmek) :neckbeard:
