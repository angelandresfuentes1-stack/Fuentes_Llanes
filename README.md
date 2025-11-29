# 🦸 AnimeLab - My Hero Academia Edition

## ✨ Correcciones Realizadas

### 1. ✅ Botón de Modo Oscuro/Claro - CORREGIDO
- **Problema:** El botón no funcionaba correctamente
- **Solución:** 
  - Agregadas transiciones CSS para cambios suaves
  - Mejorada la lógica JavaScript para alternar temas
  - Agregado feedback visual con rotación del botón
  - Los cambios ahora se guardan en localStorage

### 2. ✅ Audio/Música - CONFIGURADO
- **Problema:** El audio no se reproducía
- **Solución:**
  - Corregida la lógica del reproductor de audio
  - Agregado manejo de errores
  - Agregados controles de reproducción/pausa

**⚠️ IMPORTANTE - Para que el audio funcione:**

Necesitas agregar un archivo de audio llamado `op.mp3` en la carpeta `assets/`

**Opciones para obtener el audio:**

1. **Descarga un opening de MHA** (asegúrate de tener los derechos)
2. **Usa música libre de derechos** de sitios como:
   - Free Music Archive
   - YouTube Audio Library
   - Incompetech
3. **Convierte un archivo existente a MP3**

**Pasos para agregar el audio:**
```
1. Descarga o prepara tu archivo de audio
2. Asegúrate de que esté en formato MP3
3. Renómbralo como: op.mp3
4. Colócalo en la carpeta: assets/op.mp3
```

### 3. ✅ Diseño de My Hero Academia - IMPLEMENTADO
- Colores inspirados en MHA:
  - Naranja heroico (#ff6b35)
  - Azul All Might (#4fc3f7)
  - Verde Deku (#76ff03)
- Logo con efecto "Plus Ultra!"
- Animaciones heroicas y dinámicas
- Botones con gradientes vibrantes
- Cards con bordes de colores heroicos
- Efectos hover mejorados
- Transiciones suaves en toda la página

### 4. ✅ Mejoras Adicionales
- Navegación responsiva mejorada
- Animaciones de entrada para cards
- Lightbox mejorado para la galería
- Validación de formulario visual
- Smooth scroll
- Efectos de hover más dinámicos
- Mejor accesibilidad

## 📁 Estructura de Archivos

```
AnimeLab/
├── index.html          (Actualizado)
├── css/
│   └── style.css      (Nuevo diseño MHA)
├── js/
│   └── main.js        (Funcionalidades corregidas)
├── assets/
│   ├── thumb1.webp
│   ├── thumb2.webp
│   ├── thumb3.jpg
│   ├── thumb4.png
│   ├── thumb5.webp
│   ├── thumb6.jpg
│   ├── thumb7.jpg
│   └── op.mp3         (⚠️ AGREGAR ESTE ARCHIVO)
└── README.md
```

## 🎵 Sugerencias de Audio

Aquí hay algunas opciones de opening/ending de My Hero Academia que podrías usar (asegúrate de tener los derechos):

1. "The Day" - Porno Graffitti (Opening 1)
2. "Peace Sign" - Kenshi Yonezu (Opening 2)
3. "Odd Future" - UVERworld (Opening 4)
4. "Polaris" - BLUE ENCOUNT (Opening 5)
5. "No.1" - DISH// (Opening 6)

**Alternativa legal:** Usa música libre de derechos con ambiente heroico/épico.

## 🚀 Cómo Usar

1. Extrae todos los archivos en una carpeta
2. Agrega el archivo `op.mp3` en la carpeta `assets/`
3. Abre `index.html` en tu navegador
4. Haz clic en el botón 🔇 para reproducir música
5. Haz clic en 🌙/☀️ para cambiar entre modo oscuro y claro

## 🎨 Características del Diseño

- **Tema Oscuro:** Inspirado en la noche de vigilancia de héroes
- **Tema Claro:** Inspirado en UA High School
- **Paleta de Colores:** Naranja (héroe), Azul (All Might), Verde (Deku)
- **Tipografía:** Limpia y moderna, fácil de leer
- **Animaciones:** Suaves y heroicas
- **Responsivo:** Se adapta a móviles, tablets y desktop

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid, Flexbox, Animations, Transitions)
- JavaScript ES6+
- LocalStorage para persistencia de tema

## 📱 Compatibilidad

- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile Browsers

## 👨‍💻 Créditos

**Desarrollado por:** Angel Andres Fuentes Llanes  
**Asignatura:** Desarrollo Web  
**Grupo:** TTD-4A  
**Temática:** My Hero Academia

---

## 🐛 Solución de Problemas

### El audio no se reproduce:
1. Verifica que `op.mp3` esté en `assets/op.mp3`
2. Verifica que el navegador permita la reproducción automática
3. Haz clic en el botón 🔇 para iniciar manualmente
4. Verifica la consola del navegador (F12) para errores

### El tema no cambia:
1. Limpia el caché del navegador
2. Verifica que `style.css` y `main.js` estén cargados
3. Abre la consola y busca errores

### La navegación móvil no funciona:
1. Verifica que `main.js` esté cargado
2. Intenta hacer clic directamente en el ícono de hamburguesa
3. Reduce el ancho de la ventana para activar el modo móvil

---

**¡Plus Ultra!** 💪 Disfruta tu sitio web de My Hero Academia.
