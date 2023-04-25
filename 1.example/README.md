### Opis zadania

W tym zadaniu znajduje się aplikacja służąca do przedstawiania wyników wyścigów. 

Funkcja `sumSeconds`:
- na wejściu otrzymuje tablicę z czasami okrążeń podanymi w sekundach,
- ma zwrócić ciąg znaków w formacie `1h25m45s`,
- jeśli czas jest krótszy niż 1h, format powinien wyglądać tak: `25m45s`, a jeśli czas jest poniżej 1m, to `45s`,
- nie dodaje zer do liczb jednocyfrowych, czyli zwróci `1h1m1s`, a nie `1h01m01s`.

Kod tej funkcji znajdziesz w pliku `src/app/app.js`. Jest to jedyny plik, który możesz edytować.

### Spróbuj naprawić aplikację

W treści funkcji `sumSeconds` wkradł się drobny błąd, przez który funkcja zwraca poprawny wynik tylko przy krótkich czasach (poniżej godziny). Spróbuj znaleźć i naprawić błąd.

### Uruchomienie testów

W celu uruchomienia testów musisz najpierw zainstalować niezbędne pakiety za pomocą komendy `npm install`. 

Następnie masz dwie opcje: 

1. Aby uruchomić jednorazowe wykonanie testów, skorzystaj z komendy `npm test`. 
2. Jeśli wolisz, aby testy były wykonywane automatycznie przy każdej zmianie w kodzie, wykonaj komendę `npm run watch:test`. 
