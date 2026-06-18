# Configuración de Firebase para Seven App

## Proyecto Configurado

- **Project ID:** sevenapp-38711
- **Auth Domain:** sevenapp-38711.firebaseapp.com

## 1. Credenciales Frontend (ya configurado)

El archivo `firebase-config.js` ya tiene las credenciales configuradas.

## 2. Credenciales Admin (Cloud Functions)

Para que las Cloud Functions funcionen:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona el proyecto **sevenapp-38711**
3. Ve a Project Settings → Service Accounts
4. Clic en "Generate new private key"
5. Guarda el archivo como `functions/serviceAccountKey.json`

## 3. Actualizar firebase-config.js (si es necesario)

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDRcG-h3RrxixMW0G_eDokDETz2llpAYD8",
    authDomain: "sevenapp-38711.firebaseapp.com",
    projectId: "sevenapp-38711",
    storageBucket: "sevenapp-38711.firebasestorage.app",
    messagingSenderId: "387999323809",
    appId: "1:387999323809:web:811f7956fd7e41a42e02e0",
    measurementId: "G-2PXTXQDWLH"
};
```

## 4. Habilitar Autenticación

1. Ve a Authentication → Sign-in method
2. Habilita "Email/Password"

## 5. Crear Base de Datos Firestore

1. Ve a Firestore Database → Create database
2. Selecciona "Start in test mode" (para desarrollo)
3. Crea la colección: `users`

## 6. Configurar Reglas de Firestore

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
  }
}
```

## 7. Desplegar Cloud Functions

1. Instala Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Inicia sesión:
   ```bash
   firebase login
   ```

3. En la carpeta `functions`:
   ```bash
   cd functions
   npm install
   ```

4. Despliega:
   ```bash
   firebase deploy --only functions
   ```

## 8. Configurar PayPal

### Crear botones PayPal en tu cuenta PayPal:

1. Ve a PayPal → Tools → All Tools → PayPal Buttons
2. Crea un botón para cada curso con precio de $7
3. Obtén el ID del botón y actualiza `pago.html`

Los IDs de PayPal en el código actual son placeholders:
- `NYP8KUKK5TWM8` → Inglés en 7 Días (reemplazar con tu ID real)
- `CM7DAYS123` → Community Manager (placeholder)
- `MKD7DAYS123` → Marketing Digital (placeholder)
- `ECOM7DAYS123` → E-commerce (placeholder)

## 9. Estructura de Datos Firestore

### users/{userId}
```json
{
    "username": "nombre_usuario",
    "email": "usuario@email.com",
    "courses": ["ingles-7-dias"],
    "purchases": {
        "ingles-7-dias": {
            "paymentId": "PAY-XXX",
            "purchasedAt": "timestamp"
        }
    },
    "createdAt": "timestamp"
}
```

## 10. Testing Local

Para probar localmente con emuladores:

```bash
firebase init emulators
firebase emulators:start
```

Esto levantará:
- Emulador de Auth en http://localhost:9099
- Emulador de Firestore en http://localhost:8080
- Emulador de Functions en http://localhost:5001
