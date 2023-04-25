### Opis zadania

W tym zadaniu znajdziesz plik `src/style.scss`, w którym znajdują się style dla: 
- wszystkich linków, 
- wszystkich elementów z klasą `logo`, 
- wszystkich linków znajdujących się w elemencie o klasie `main-nav`.

Klient zaznaczył, że logo ma zawsze wyglądać tak samo – niezależnie od tego gdzie zostanie umieszczone. Jedynym wyjątkiem od tej zasady jest to, że jeśli logo jest linkiem, to ma mieć podkreślenie. 

W naszym kodzie założyliśmy, że tylko div lub link mogą otrzymać klasę `logo`. Obecny kod sprawia, że logo zachowuje się poprawnie poza wrapperem `.main-nav`, ale link z klasą `logo` umieszczony wewnątrz tego wrappera otrzymuje style takie same, jak pozostałe linki w tym wrapperze. 

Twoim zadaniem jest zmiana kodu SCSS w taki sposób, aby link z klasą `logo` wyglądał tak samo wewnątrz wrappera `.main-nav`, jak wygląda poza nim. Oznacza to, że ma mieć: 
- kolor niebieski (zdefiniowany w pliku styli),
- domyślne podkreślenie (`text-decoration: underline`),
- brak obramowania (`border`).

Oczywiście, zależy nam na jakości naszego kodu, więc wykluczone są rozwiązania wykorzystujące `!important`!

Niestety, masz dostęp wyłącznie do pliku SCSS. Spróbuj zmieniać kod opierając się wyłącznie na wyniku testów jednostkowych, bez kodu HTML. Dopiero po podjęciu tej próby możesz samodzielnie stworzyć kod HTML (np. w CodePenie), aby zobaczyć jak te style wpłyną na wygląd poszczególnych elementów. 

### Uruchomienie testów

W celu uruchomienia testów musisz najpierw zainstalować niezbędne pakiety za pomocą komendy `npm install`. 

Następnie masz dwie opcje: 

1. Aby uruchomić jednorazowe wykonanie testów, skorzystaj z komendy `npm test`. 
2. Jeśli wolisz, aby testy były wykonywane automatycznie przy każdej zmianie w kodzie, wykonaj komendę `npm run watch:test`. 

Uwagi: 
- Testy wyświetlają ostrzeżenia (`console.warn`), informujące o tym, który styl danego elementu jest błędny.
- W każdym z trzech testów (np. "should be correct inside main-nav") wyświetli się tylko pierwszy błąd, więc dopiero po jego poprawieniu może pokazać się kolejny.
