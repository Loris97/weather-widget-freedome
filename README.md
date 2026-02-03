# Weather Widget Challenge - Freedome

Widget meteo interattivo con 3 viste navigabili tramite swipe, sviluppato per la technical challenge di Freedome.

## 🌟 Features

- **3 viste interattive:**
  - 🌡️ Meteo corrente con temperatura e condizioni in tempo reale
  - ⏰ Previsioni per le prossime 5 ore (5 slot temporali)
  - 📅 Previsioni per i prossimi 5 giorni
- **Navigazione swipe** - Scorri tra le viste con gesture touch o mouse drag
- **Dati in tempo reale** - Integrazione con OpenWeather API
- **Design responsive** - Ottimizzato per desktop e mobile
- **Error handling** - Gestione errori di rete e validazione dati

## 🚀 Quick Start

### Prerequisiti

- Node.js 14+ e npm
- API Key gratuita di OpenWeather ([ottienila qui](https://openweathermap.org/api))

### Installazione

```bash
# Clona la repository
git clone https://github.com/Loris97/weather-widget-freedome.git
cd weather-widget-freedome

# Installa le dipendenze
npm install

# Configura l'API key
# Crea un file .env nella root del progetto e aggiungi:
# REACT_APP_WEATHER_API_KEY=tua_api_key_qui

# Avvia l'applicazione
npm start
```

L'app sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🔧 Configurazione

### API Key

Crea un file `.env` nella root del progetto:

```env
REACT_APP_WEATHER_API_KEY=your_openweather_api_key_here
```

Puoi usare il file `.env.example` come riferimento.

### Località

Per cambiare la località, modifica `src/App.js`:

```javascript
<WeatherWidget location="Milan,IT" />
```

Formato supportato: `"Città,CodicePaese"` (es. `"Coimbra,PT"`, `"London,UK"`)

**Nota:** Specificare il codice paese è consigliato per evitare ambiguità.

## 🛠️ Stack Tecnologico

- **React 18** - UI library
- **React Swipeable** - Gesture handling per navigazione swipe
- **OpenWeather API 2.5** - Dati meteo in tempo reale
- **CSS3** - Styling con gradient e animazioni


## 📁 Struttura del Progetto

```
src/
├── components/
│   ├── WeatherWidget.jsx      # Componente principale con swipe navigation
│   ├── CurrentWeather.jsx     # Vista meteo corrente
│   ├── HourlyForecast.jsx     # Vista previsioni orarie (5 ore)
│   └── DailyForecast.jsx      # Vista previsioni giornaliere (5 giorni)
├── hooks/
│   └── useWeatherData.js      # Custom hook per fetching dati API
├── utils/
│   └── api.js                 # Funzioni per chiamate API OpenWeather
├── App.js                     # Entry point dell'app
└── App.css                    # Styling globale
```


## 💡 Scelte Implementative

### API OpenWeather 2.5

Ho scelto la versione 2.5 dell'API (gratuita) invece della 3.0 perché:

- Non richiede carta di credito
- Endpoint `/weather` per dati meteo correnti
- Endpoint `/forecast` per previsioni (dati ogni 3 ore, fino a 5 giorni)


### Navigazione Swipe

Implementata con `react-swipeable` per:

- Supporto nativo touch e mouse drag (`trackMouse: true`)
- Libreria leggera senza dipendenze pesanti
- API semplice e configurabile


### Previsioni Orarie

L'API fornisce dati ogni 3 ore. La vista "Prossime ore" mostra 5 slot temporali (corrispondenti a circa 15 ore di previsioni).

### Error Handling

Ogni componente gestisce i casi di:

- Dati API non disponibili o incompleti
- Errori di connessione alla rete
- Loading states con feedback visivo


## 🧪 Test

```bash
# Avvia l'app in sviluppo
npm start

# Build di produzione
npm run build
```


### Come testare

1. **Swipe navigation:** Clicca e trascina orizzontalmente con il mouse (o usa gesture touch su mobile)
2. **Indicatori:** I dots in basso mostrano quale vista stai visualizzando (1/3)
3. **Dati in tempo reale:** Verifica che temperatura e condizioni meteo siano aggiornate

## 🎯 Requisiti Challenge

✅ Widget meteo con 3 viste distinte
✅ Navigazione swipe funzionante
✅ Integrazione con OpenWeather API
✅ Design responsive che rispetta il mockup
✅ Località passata come parametro (non selezionabile)
✅ Codice organizzato e documentato
✅ Repository pubblica su GitHub

## 👨💻 Autore

Sviluppato da [**Loriss97**](https://github.com/Loris97) per la technical challenge di Freedome

---

**Tempo di sviluppo:** ~2.5 ore
**Repository:** [https://github.com/Loris97/weather-widget-freedome](https://github.com/Loris97/weather-widget-freedome.git)