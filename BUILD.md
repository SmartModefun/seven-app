# Seven App - Guía de Publicación en Stores

## Requisitos

| Requisito | Versión |
|---|---|
| Node.js | >= 20 |
| npm | >= 10 |
| Android Studio (para APK/AAB) | Arctic Fox+ |
| JDK 17 (incluido en Android Studio) | 17 |
| Xcode (para iOS, solo macOS) | 15+ |

---

## 1. Flujo de trabajo diario

Cada vez que modifiques los archivos del sitio (HTML, CSS, JS, assets), ejecutá:

```bash
cd C:\seven-app
npm run build
npx cap copy
```

Esto sincroniza los cambios al proyecto nativo.

---

## 2. Compilar para Android (APK / AAB)

### 2.1. Sincronizar proyecto

```bash
npx cap sync android
```

### 2.2. Abrir en Android Studio

```bash
npx cap open android
```

### 2.3. Generar build firmado

1. En Android Studio: **Build > Generate Signed Bundle / APK**
2. Elegí **Android App Bundle (AAB)** para Play Store
3. Si es la primera vez:
   - Creá un keystore (marcá "Create new")
   - Guardalo en un lugar seguro (NUNCA lo pierdas)
4. Completá los datos del keystore
5. Elegí **release** como build variant
6. Listo → el AAB se genera en `android/app/release/`

> **Alternativa por línea de comandos:**
> ```bash
> cd android
> ./gradlew bundleRelease
> ```
> Necesitás configurar el keystore en `android/app/build.gradle` o usar variables de entorno.

---

## 3. Compilar para iOS (IPA)

Solo funciona en **macOS** con Xcode instalado.

### 3.1. Sincronizar proyecto

```bash
npx cap sync ios
```

### 3.2. Abrir en Xcode

```bash
npx cap open ios
```

### 3.3. Configurar equipo de desarrollo

1. En Xcode: abrí el archivo `.xcworkspace`
2. En **Signing & Capabilities**:
   - Seleccioná tu **Team** de Apple Developer ($99/año)
   - Cambiá el **Bundle Identifier** si es necesario (default: `com.sevenapp.app`)
3. Conectá un iPhone físico o seleccioná "Any iOS Device"
4. **Product > Archive**
5. En el organizer: **Distribute App > App Store Connect**

---

## 4. Preparativos antes de publicar

### 4.1. Iconos de la app

Reemplazar los iconos default de Capacitor:

**Android:**
- `android/app/src/main/res/mipmap-hdpi/ic_launcher.png` (48x48)
- `android/app/src/main/res/mipmap-mdpi/ic_launcher.png` (72x72)
- `android/app/src/main/res/mipmap-xhdpi/ic_launcher.png` (96x96)
- `android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png` (144x144)
- `android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png` (192x192)

**iOS:**
- Reemplazar assets en `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

### 4.2. Splash screen (pantalla de carga)

Reemplazar los PNG en:
- `android/app/src/main/res/drawable-port-*/splash.png`
- `android/app/src/main/res/drawable-land-*/splash.png`

Para iOS, la splash se define en `ios/App/App/Base.lproj/LaunchScreen.storyboard`.

### 4.3. Versión y número de build

**Android:** en `android/app/build.gradle`:
```groovy
defaultConfig {
    versionCode 1        // incrementar por cada subida
    versionName "1.0.0"  // versión visible para usuarios
}
```

**iOS:** en Xcode, cambiar **Version** y **Build** en el target principal.

### 4.4. Firebase para producción

Si querés notificaciones push nativas o analytics nativos:
1. Descargar `google-services.json` desde Firebase Console > Project Settings
2. Copiarlo a `android/app/google-services.json`
3. Para iOS, descargar `GoogleService-Info.plist` y agregarlo al proyecto Xcode

---

## 5. Solución de problemas comunes

### "WebView no carga Firebase"
El app usa Firebase JS SDK que funciona en WebView. Si falla:
- Verificá conexión a internet
- Asegurate que `firebase-config.js` esté en `www/`

### "PayPal no redirige de vuelta"
La app tiene configurado el deep link `sevenapp://` para capturar el return de PayPal. Verificá que el botón de PayPal en `pago.html` apunte a:
```
https://www.paypal.com/ncp/payment/{ID}?return_url=sevenapp://...
```

### "Android Studio no reconoce el proyecto"
Abrí Android Studio, elegí "Open an existing project", seleccioná `C:\seven-app\android`.

### "Error de compilación en Android"
```bash
cd android
./gradlew clean
./gradlew bundleRelease
```

### iOS build falla por CocoaPods
```bash
cd ios/App
pod install
```

---

## 6. Scripts útiles

| Comando | Descripción |
|---|---|
| `npm run build` | Copia archivos del sitio a `www/` |
| `npx cap copy` | Sincroniza `www/` a ambas plataformas |
| `npx cap sync` | build + copy |
| `npx cap open android` | Abre Android Studio |
| `npx cap open ios` | Abre Xcode (solo macOS) |

---

## Checklist pre-publicación

- [ ] Iconos reemplazados (no los default de Capacitor)
- [ ] Splash screen con branding propio
- [ ] versionCode y versionName actualizados
- [ ] Keystore generado y respaldado
- [ ] App firmada con keystore de release
- [ ] Probada en dispositivo físico
- [ ] Firebase configurado correctamente
- [ ] Política de privacidad agregada (requerida por stores)
- [ ] Capturas de pantalla para la ficha de la store
- [ ] Descripción y keywords en la store
