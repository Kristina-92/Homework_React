\*\*\*\* HTTP povici (GET, POST, PUT, Patch, Delete...) + CRUD metodi => web browser-ite primaat GET povici

Options pred prakanje povik za da se proveri dali API-to e validno (stranata ova po avtomatizam go pravi vo pozadina)

https://www.restapitutorial.com/httpstatuscodes

204 No Content za Delete se koristi bidejki ne vrakja nikakov content

304 Not Modified moze da se sretne

4XX => Client Error najcesti se ovie http codes
401 Unothorized , 403 Forbidden (nemame privilegii za da procitame content)
404,
405,
413 Request Entity Too Large

5XX Server Errors => greski vo backend-ot
500 => Internal Server Error
503
502

https://axios-http.com/docs/intro
AXIOS => wrapper za fetch methodata (funkcionalnost) edna od najkoristenite biblioteki za fetchuvanje na data

moment.js biblioteka za datumi => sega e deprecated => sega e ukinata nema odrzuvanje vekje i ne se preporacuva da se koristi

DOMASNA 8

-Da se napravi search component po PostId za Comments

-Da se dodade edit opcija na polinjata od Comments details
i moznost za prakjanje na editiraniot objekt so http metoda (PUT/PATCH)
do server po isprakjanjeto prikaz na response vo alert ako e 200 redirect nazad kon
comments ako ne prikaz na greskata pod detalite,
dopolnitelno da se dodade loader pri izvrsuvanje na povicite
