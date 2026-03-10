## ZutatenZirkus – Hausaufgabe
**Autorin:** Míriam Domínguez Martínez  
**Datum:** 10.03.2026  
**Kurs:** Full Stack Web Development – DBE Academy  
**Thema:** HTML, CSS & JavaScript – Recipe Website ZutatenZirkus

---

### Projektbeschreibung

Dieses Projekt ist eine interaktive Rezept-Website, ZutatenZirkus, erstellt mit HTML, CSS und JavaScript. Ziel der Aufgabe war es, die grundlegenden Konzepte von JavaScript praktisch anzuwenden: Variablen und Datenstrukturen, DOM-Manipulation, Ereignisverarbeitung (Event Listener) sowie dynamische Berechnung und Darstellung von Rezeptzutaten. Die Website ermöglicht es dem Benutzer, die Portionsmenge anzupassen, woraufhin alle Zutatenmengen automatisch neu berechnet und aktualisiert werden.

---

### Dateistruktur
```
/
├── index.html         
├── style.css         
├── script.js         
└── README.md           
```

---

### Farbpalette
- **Primär:** `#4b9c76` (Grün)
- **Primär Dunkel:** `#59896C` (Dunkelgrün)
- **Akzent:** `#59AF7D` (Hellgrün)
- **Hell:** `#C0E992` (Hellgrün Hintergrund)
- **Text:** `#1a1a1a` (Dunkeltext)

---

### JavaScript-Konzepte

- **Variablen:** `let` für veränderliche Werte (Portionsmenge), `const` für unveränderliche Daten (Zutaten-Objekt)
- **Objekte:** Zutaten werden als Objekt mit `value` und `unit` pro Schlüssel gespeichert
- **Funktionen:** `updateIngredients()` berechnet und aktualisiert alle Zutatenmengen
- **DOM-Manipulation:** `document.getElementById()` und `textContent` zum Aktualisieren der Seite
- **Event Listener:** `addEventListener("input", ...)` reagiert auf Benutzereingaben in Echtzeit
- **Kontrollstruktur:** `for...in`-Schleife zum Durchlaufen aller Zutaten
- **Zahlenformatierung:** `Number.isInteger()` und `toFixed(1)` für saubere Anzeige

---

*Full Stack Web Development Kurs – DBE Academy, 2026.*
