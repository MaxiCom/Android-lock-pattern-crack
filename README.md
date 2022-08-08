# Android Lock Pattern Crack

Un crack pour lock pattern android à l'aide du fichier gesture.key

# Setup

Pour décompresser la base de données:

    gzip -d ./App/resources/database/rainbow.db.gz

Pour accéder à la base de données:

    sqlite3 ./App/resources/database/rainbow.db
    SELECT * FROM RainbowTable;
    
Utiliser un serveur pour eviter les probleme de cors:

    php -S 127.0.0.1:8080 -t ./App/

Acceder au site:

    http://127.0.0.1:8080

# Screenshot 

![Alt text](/Screenshot/Screenshot.png?raw=true "A simple question")
