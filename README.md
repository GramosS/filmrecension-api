
Detta projekt är ett backend-API för hantering av filmer och recensioner, med inloggningssystem för användare.

# Funktioner

- Registrera och logga in användare (med JWT)
- Skapa, hämta, uppdatera och ta bort filmer
- Lämna recensioner på filmer
- Databas: MongoDB + Mongoose
- Säkerhet: bcrypt för lösenord, JWT för autentisering

# API-endpoints (testade med Thunder Client)

# Auth
- `POST /register` – Registrera användare
- `POST /login` – Logga in och få JWT-token

# Movies
- `POST /movies` – Lägg till film _(kräver token)_
- `GET /movies` – Hämta alla filmer
- `GET /movies/:id` – Hämta specifik film
- `PUT /movies/:id` – Uppdatera film _(kräver token)_
- `DELETE /movies/:id` – Ta bort film _(kräver token)_
- `GET /movies/:id/reviews` – Recensioner för film

# Reviews
- `POST /reviews` – Lägg till recension _(kräver token)_
- `GET /reviews` – Hämta alla recensioner
- `GET /reviews/:id` – Hämta specifik recension
- `PUT /reviews/:id` – Uppdatera recension _(kräver token)_
- `DELETE /reviews/:id` – Ta bort recension _(kräver token)_



# .env

env
MONGO_URL=mongodb://localhost:27017/movieDB
JWT_SECRET=hemlig-nyckel123
PORT=3000


---

# Skärmdumpar (finns i mappen `api-anrop`)

Nr  Endpoint | Beskrivning |
1   POST /register | Registrering av användare |
2   POST /login | Inloggning och JWT-token |
3   POST /movies | Skapa ny film |
4   POST /reviews | Skapa recension |
5   GET /movies | Hämta alla filmer |
6   GET /movies/:id | Hämta specifik film |
7   GET /movies/:id/reviews | Hämta recensioner för film |
8   PUT /movies/:id | Uppdatera film |
9   DELETE /movies/:id | Ta bort film |
10  GET /reviews | Hämta alla recensioner |
11  GET /reviews/:id | Hämta specifik recension |
12  PUT /reviews/:id | Uppdatera recension |
13  DELETE /reviews/:id | Ta bort recension |
