# Instructivo: Códigos de Acceso - Seven App

## Firebase Console
https://console.firebase.google.com/u/0/project/sevenapp-38711/firestore/databases/-default-/data/~2Fcodes

---

## Método automático (Recomendado)

### Generar código via script local

1. Abrir terminal en `C:\seven-app\functions`

2. Ejecutar:
   ```bash
   node generate-code.js <curso> <nombre-del-cliente>
   ```

### Ejemplos:

```bash
node generate-code.js ingles-7-dias Maria
→ ING-MARIA-7X9K

node generate-code.js marketing-digital Juan
→ MK-JUAN-3K2M

node generate-code.js community-manager Ana
→ CM-ANA-9K2M

node generate-code.js ecommerce Pedro
→ EC-PEDRO-4X7K
```

### Cursos disponibles:

| comando | curso |
|---------|-------|
| `ingles-7-dias` | Inglés 7 Días |
| `community-manager` | Community Manager |
| `marketing-digital` | Marketing Digital |
| `ecommerce` | E-commerce |

### Formato del código

`PREFIX-NOMBRE-XXXX`

Ejemplo: `ING-MARIA-7X9K`

- `ING` = prefijo del curso
- `MARIA` = nombre del cliente (en mayúsculas)
- `7X9K` = caracteres aleatorios

---

## Método manual (Firebase Console)

### Estructura del documento:

| Campo | Tipo | Valor ejemplo |
|-------|------|---------------|
| ID del documento | string | `ING-MARIA-7X9K` |
| `courseId` | string | `ingles-7-dias` |
| `clientName` | string | `Maria` |
| `isActive` | boolean | `true` |
| `isSingleUse` | boolean | `true` |
| `type` | string | `payment` |

### Pasos:

1. Ir a https://console.firebase.google.com/u/0/project/sevenapp-38711/firestore/databases/-default-/data/~2Fcodes
2. Click "+ Añadir documento"
3. Escribir el ID del código
4. Añadir campos: courseId, clientName, isActive, isSingleUse, type
5. Click "Guardar"

---

## Notas importantes

- El **ID del documento** es el código que el usuario ingresa
- Los códigos `payment` se **desactivan automáticamente** después de usarlos
- Si un código está en `isActive: false`, ya no funciona