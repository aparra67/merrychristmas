// Datos de los personajes para el modal
const charactersData = {
  jesus: {
    title: "Niño Jesús",
    color: "christmas-blue",
    icon: "fas fa-baby",
    description:
      "Jesús de Nazaret, el Hijo de Dios, nació en Belén hace más de dos mil años. Su nacimiento en un humilde pesebre marca el comienzo de la salvación para la humanidad, cumpliendo las profecías del Antiguo Testamento.",
    details: [
      "Nacido de la Virgen María en Belén",
      "Su nacimiento fue anunciado por el ángel Gabriel",
      "Visitado por pastores y Reyes Magos",
      "Salvador del mundo según la fe cristiana",
    ],
    animationClass: "jesus-animation",
    bibleVerse:
      "Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. - Isaías 9:6",
  },
  santa: {
    title: "Santa Claus",
    color: "christmas-red",
    icon: "fas fa-sleigh",
    description:
      "Basado en la figura histórica de San Nicolás, un obispo cristiano conocido por su generosidad. Santa Claus representa el espíritu de dar y la alegría de compartir durante la temporada navideña.",
    details: [
      "Basado en San Nicolás de Myra (270-343 d.C.)",
      "Símbolo de generosidad y amor al prójimo",
      "Reparte regalos a los niños en Nochebuena",
      "Vive en el Polo Norte con duendes ayudantes",
    ],
    animationClass: "santa-animation",
    bibleVerse: "Más bienaventurado es dar que recibir. - Hechos 20:35",
  },
  angel: {
    title: "Ángel Gabriel",
    color: "christmas-silver",
    icon: "fas fa-dove",
    description:
      "El ángel Gabriel es el mensajero celestial que anunció a María que daría a luz al Hijo de Dios. También anunció el nacimiento de Jesús a los pastores en los campos de Belén.",
    details: [
      "Mensajero celestial de Dios",
      "Anunció el nacimiento de Jesús a María",
      "Apareció a los pastores en Belén",
      "Proclamó 'Gloria a Dios en las alturas'",
    ],
    animationClass: "angel-animation",
    bibleVerse:
      "¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres! - Lucas 2:14",
  },
  magi: {
    title: "Los Reyes Magos",
    color: "christmas-purple",
    icon: "fas fa-crown",
    description:
      "Melchor, Gaspar y Baltasar fueron sabios de Oriente que siguieron la estrella de Belén para adorar al recién nacido Jesús. Le ofrecieron regalos de oro, incienso y mirra.",
    details: [
      "Melchor (oro), Gaspar (incienso) y Baltasar (mirra)",
      "Viajaron desde Oriente siguiendo una estrella",
      "Representan la universalidad del mensaje de Jesús",
      "Sus regalos simbolizan realeza, divinidad y mortalidad",
    ],
    animationClass: "magi-animation",
    bibleVerse:
      "Al ver la estrella, se regocijaron con muy grande gozo. Y al entrar en la casa, vieron al niño con su madre María, y postrándose, lo adoraron. - Mateo 2:10-11",
  },
  reindeer: {
    title: "Rodolfo el Reno",
    color: "christmas-brown",
    icon: "fas fa-horse-head",
    description:
      "Rodolfo es el noveno y más joven de los renos de Santa Claus. Es conocido por su nariz roja y brillante que ilumina el camino del trineo durante la noche de Navidad.",
    details: [
      "Nariz roja brillante que funciona como faro",
      "Líder del equipo de renos que tira del trineo",
      "Se une al equipo después de ser discriminado",
      "Enseña sobre aceptación y valorar las diferencias",
    ],
    animationClass: "reindeer-animation",
    bibleVerse:
      "Porque tú encenderás mi lámpara; Jehová mi Dios alumbrará mis tinieblas. - Salmos 18:28",
  },
  elf: {
    title: "Duende Navideño",
    color: "christmas-green",
    icon: "fas fa-hat-wizard",
    description:
      "Los duendes son los alegres ayudantes de Santa Claus en el Polo Norte. Trabajan durante todo el año fabricando juguetes y manteniendo la magia navideña viva.",
    details: [
      "Fabricantes expertos de juguetes y regalos",
      "Visten ropas verdes y rojas con sombreros puntiagudos",
      "Tienen poderes mágicos limitados",
      "Guardianes de la lista de niños buenos y malos",
    ],
    animationClass: "elf-animation",
    bibleVerse:
      "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres. - Colosenses 3:23",
  },
  snowman: {
    title: "Frosty el Muñeco de Nieve",
    color: "gray",
    icon: "fas fa-snowman",
    description:
      "Frosty es un muñeco de nieve mágico que cobra vida gracias a un sombrero viejo y mágico. Representa la alegría pura, la amistad y la magia del invierno.",
    details: [
      "Cobra vida con un sombrero mágico",
      "Tiene una personalidad alegre y amigable",
      "Le encanta bailar y cantar villancicos",
      "Simboliza la alegría simple de la temporada",
    ],
    animationClass: "snowman-animation",
    bibleVerse:
      "Regocíjense en el Señor siempre. Otra vez digo: ¡Regocíjense! - Filipenses 4:4",
  },
  mary: {
    title: "María y José",
    color: "christmas-cyan",
    icon: "fas fa-hands-praying",
    description:
      "María, la madre de Jesús, y José, su padre terrenal, son figuras centrales en la historia de la Navidad. Su fe y obediencia permitieron el nacimiento del Salvador.",
    details: [
      "María fue elegida por Dios para ser madre de Jesús",
      "José fue un carpintero justo y obediente",
      "Criaron a Jesús en Nazaret",
      "Ejemplos de fe, humildad y obediencia",
    ],
    animationClass: "",
    bibleVerse:
      "Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón. - Lucas 2:7",
  },
};

// Elementos DOM
const modal = document.getElementById("characterModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const characterCards = document.querySelectorAll(".character-card");
const snowContainer = document.getElementById("snow-container");
const lightsContainer = document.getElementById("lights-container");
const tree3d = document.getElementById("tree3d");

// Variables del árbol
let ornamentCount = 0;
let lightCount = 0;
let totalDecorations = 0;
let lightsOn = true;
let rotationAngle = 0;
let ornaments = [];
let lights = [];

// Colores para adornos
const ornamentColors = {
  "christmas-red": "#dc2626",
  "christmas-green": "#16a34a",
  "christmas-gold": "#eab308",
  "christmas-blue": "#3b82f6",
  "christmas-purple": "#8b5cf6",
  "christmas-cyan": "#06b6d4",
};

// Colores para luces
const lightColors = [
  "#dc2626", // Rojo navideño
  "#16a34a", // Verde navideño
  "#eab308", // Oro navideño
  "#3b82f6", // Azul navideño
  "#8b5cf6", // Púrpura navideño
  "#ec4899", // Rosa navideño
  "#f97316", // Naranja navideño
  "#06b6d4", // Cian navideño
];

// Inicializar efectos visuales
function initVisualEffects() {
  createSnowflakes();
  createChristmasLights();
  setCurrentYear();
  createInitialDecorations();
  updateCounters();
}

// Crear copos de nieve
function createSnowflakes() {
  const snowflakeCount = window.innerWidth < 768 ? 40 : 80;

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Tamaño aleatorio
    const size = Math.random() * 8 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // Posición inicial aleatoria
    snowflake.style.left = `${Math.random() * 100}vw`;

    // Duración y retraso de animación
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    snowflake.style.animation = `snow-fall ${duration}s linear ${delay}s infinite`;

    // Opacidad aleatoria
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    snowContainer.appendChild(snowflake);
  }
}

// Crear luces navideñas
function createChristmasLights() {
  // Luces en la parte superior
  for (let i = 0; i < 25; i++) {
    const light = document.createElement("div");
    light.classList.add("christmas-light");

    const color = lightColors[Math.floor(Math.random() * lightColors.length)];
    light.style.backgroundColor = color;
    light.style.boxShadow = `0 0 10px ${color}`;
    light.style.left = `${i * 4}%`;
    light.style.top = "10px";

    // Retraso de animación aleatorio
    light.style.animationDelay = `${Math.random() * 2}s`;

    lightsContainer.appendChild(light);
  }

  // Luces en la parte inferior
  for (let i = 0; i < 25; i++) {
    const light = document.createElement("div");
    light.classList.add("christmas-light");

    const color = lightColors[Math.floor(Math.random() * lightColors.length)];
    light.style.backgroundColor = color;
    light.style.boxShadow = `0 0 10px ${color}`;
    light.style.left = `${i * 4}%`;
    light.style.bottom = "10px";

    // Retraso de animación aleatorio
    light.style.animationDelay = `${Math.random() * 2}s`;

    lightsContainer.appendChild(light);
  }
}

// Crear decoraciones iniciales para el árbol
function createInitialDecorations() {
  // Añadir algunas esferas iniciales
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const colors = Object.keys(ornamentColors);
      const color = colors[Math.floor(Math.random() * colors.length)];
      addOrnament(color, true);
    }, i * 100);
  }

  // Añadir algunas luces iniciales
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      addLight(true);
    }, 600 + i * 80);
  }
}

// Añadir adorno al árbol
function addOrnament(color, isInitial = false) {
  if (ornamentCount >= 25 && !isInitial) {
    alert("¡El árbol está lleno de esferas! Limpia algunas para añadir más.");
    return;
  }

  const ornament = document.createElement("div");
  ornament.classList.add("tree-ornament");
  ornament.dataset.id = `ornament-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  ornament.dataset.type = "ornament";

  // Tamaño aleatorio
  const size = Math.random() * 25 + 20;
  ornament.style.width = `${size}px`;
  ornament.style.height = `${size}px`;

  // Posicionamiento aleatorio en el árbol
  const treeWidth = 320;
  const treeHeight = 500;

  // Área del árbol (excluyendo el tronco y la parte superior muy estrecha)
  const minLeft = 60;
  const maxLeft = 260;
  const minTop = 80;
  const maxTop = 380;

  const left = Math.random() * (maxLeft - minLeft) + minLeft;
  const top = Math.random() * (maxTop - minTop) + minTop;

  ornament.style.left = `${left}px`;
  ornament.style.top = `${top}px`;

  // Color según selección
  const bgColor = ornamentColors[color] || "#dc2626";
  ornament.style.backgroundColor = bgColor;
  ornament.style.background = `radial-gradient(circle at 30% 30%, ${lightenColor(
    bgColor,
    30
  )}, ${bgColor})`;
  ornament.style.boxShadow = `0 5px 15px rgba(0, 0, 0, 0.3), inset 0 -5px 10px rgba(0, 0, 0, 0.2)`;

  // Animación de rotación lenta
  const duration = Math.random() * 20 + 20;
  ornament.style.animation = `ornament-rotate ${duration}s linear infinite`;

  // Añadir brillo interno
  const innerGlow = document.createElement("div");
  innerGlow.style.position = "absolute";
  innerGlow.style.width = "40%";
  innerGlow.style.height = "40%";
  innerGlow.style.borderRadius = "50%";
  innerGlow.style.background =
    "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)";
  innerGlow.style.top = "15%";
  innerGlow.style.left = "15%";
  ornament.appendChild(innerGlow);

  // Evento para eliminar al hacer clic
  ornament.addEventListener("click", function (e) {
    e.stopPropagation();
    removeDecoration(this.dataset.id, "ornament");
  });

  tree3d.appendChild(ornament);

  // Guardar referencia
  ornaments.push({
    id: ornament.dataset.id,
    element: ornament,
    color: color,
  });

  if (!isInitial) {
    ornamentCount++;
    totalDecorations++;
    updateCounters();

    // Efecto visual de adorno nuevo
    ornament.style.transform = "scale(0)";
    setTimeout(() => {
      ornament.style.transition =
        "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      ornament.style.transform = "scale(1)";
    }, 10);

    // Sonido de campanilla (simulado)
    playBellSound();
  }
}

// Añadir luz al árbol
function addLight(isInitial = false) {
  if (lightCount >= 15 && !isInitial) {
    alert("¡El árbol tiene muchas luces! Puedes apagarlas o limpiar el árbol.");
    return;
  }

  const light = document.createElement("div");
  light.classList.add("tree-light");
  light.dataset.id = `light-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  light.dataset.type = "light";

  // Posicionamiento aleatorio en el árbol
  const treeWidth = 320;
  const treeHeight = 500;

  // Área del árbol (excluyendo el tronco y la parte superior muy estrecha)
  const minLeft = 50;
  const maxLeft = 270;
  const minTop = 60;
  const maxTop = 400;

  const left = Math.random() * (maxLeft - minLeft) + minLeft;
  const top = Math.random() * (maxTop - minTop) + minTop;

  light.style.left = `${left}px`;
  light.style.top = `${top}px`;

  // Color aleatorio
  const color = lightColors[Math.floor(Math.random() * lightColors.length)];
  light.style.backgroundColor = color;
  light.style.boxShadow = `0 0 15px ${color}, 0 0 30px ${color}40`;

  // Duración de parpadeo aleatoria
  const duration = Math.random() * 2 + 1;
  light.style.animationDuration = `${duration}s`;

  tree3d.appendChild(light);

  // Guardar referencia
  lights.push({
    id: light.dataset.id,
    element: light,
    color: color,
  });

  if (!isInitial) {
    lightCount++;
    totalDecorations++;
    updateCounters();

    // Efecto visual de luz nueva
    light.style.transform = "scale(0)";
    setTimeout(() => {
      light.style.transition = "transform 0.5s";
      light.style.transform = "scale(1)";
    }, 10);
  }
}

// Encender/apagar luces
function toggleLights() {
  lightsOn = !lightsOn;
  const lightsToggle = document.getElementById("lightsToggle");

  lights.forEach((light) => {
    if (lightsOn) {
      light.element.style.animationPlayState = "running";
      light.element.style.opacity = "1";
    } else {
      light.element.style.animationPlayState = "paused";
      light.element.style.opacity = "0.3";
    }
  });

  if (lightsOn) {
    lightsToggle.innerHTML = '<i class="fas fa-power-off text-white"></i>';
    lightsToggle.classList.remove(
      "bg-gradient-to-r",
      "from-gray-700",
      "to-gray-900"
    );
    lightsToggle.classList.add(
      "bg-gradient-to-r",
      "from-christmas-gold",
      "to-christmas-orange"
    );
  } else {
    lightsToggle.innerHTML = '<i class="fas fa-power-off text-white"></i>';
    lightsToggle.classList.remove(
      "bg-gradient-to-r",
      "from-christmas-gold",
      "to-christmas-orange"
    );
    lightsToggle.classList.add(
      "bg-gradient-to-r",
      "from-gray-700",
      "to-gray-900"
    );
  }
}

// Rotar el árbol
function rotateTree() {
  rotationAngle += 45;
  tree3d.style.transform = `rotateY(${rotationAngle}deg)`;
}

// Decoración aleatoria
function randomDecorations() {
  clearOrnaments();

  // Añadir esferas aleatorias
  const ornamentCount = Math.floor(Math.random() * 15) + 10;
  for (let i = 0; i < ornamentCount; i++) {
    setTimeout(() => {
      const colors = Object.keys(ornamentColors);
      const color = colors[Math.floor(Math.random() * colors.length)];
      addOrnament(color, true);
    }, i * 100);
  }

  // Añadir luces aleatorias
  const lightCount = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < lightCount; i++) {
    setTimeout(() => {
      addLight(true);
    }, ornamentCount * 100 + i * 80);
  }

  setTimeout(updateCounters, ornamentCount * 100 + lightCount * 80 + 500);
}

// Eliminar decoración específica
function removeDecoration(id, type) {
  let element;

  if (type === "ornament") {
    const index = ornaments.findIndex((o) => o.id === id);
    if (index !== -1) {
      element = ornaments[index].element;
      ornaments.splice(index, 1);
      ornamentCount--;
    }
  } else if (type === "light") {
    const index = lights.findIndex((l) => l.id === id);
    if (index !== -1) {
      element = lights[index].element;
      lights.splice(index, 1);
      lightCount--;
    }
  }

  if (element) {
    element.style.transition = "transform 0.5s, opacity 0.5s";
    element.style.transform = "scale(0)";
    element.style.opacity = "0";

    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
        totalDecorations--;
        updateCounters();
      }
    }, 500);
  }
}

// Limpiar todas las decoraciones
function clearOrnaments() {
  // Remover esferas
  ornaments.forEach((ornament) => {
    ornament.element.style.transition = "transform 0.5s, opacity 0.5s";
    ornament.element.style.transform = "scale(0)";
    ornament.element.style.opacity = "0";

    setTimeout(() => {
      if (ornament.element.parentNode) {
        ornament.element.parentNode.removeChild(ornament.element);
      }
    }, 500);
  });

  // Remover luces
  lights.forEach((light) => {
    light.element.style.transition = "transform 0.5s, opacity 0.5s";
    light.element.style.transform = "scale(0)";
    light.element.style.opacity = "0";

    setTimeout(() => {
      if (light.element.parentNode) {
        light.element.parentNode.removeChild(light.element);
      }
    }, 500);
  });

  // Resetear contadores después de la animación
  setTimeout(() => {
    ornaments = [];
    lights = [];
    ornamentCount = 0;
    lightCount = 0;
    totalDecorations = 0;
    updateCounters();
  }, 600);
}

// Compartir árbol
function shareTree() {
  const message = `¡Mira mi árbol de Navidad 3D en Hermosa Navidad! Tiene ${ornamentCount} esferas y ${lightCount} luces. ¡Feliz Navidad! 🎄`;

  if (navigator.share) {
    navigator.share({
      title: "Mi Árbol de Navidad 3D - Hermosa Navidad",
      text: message,
      url: window.location.href,
    });
  } else {
    // Copiar al portapapeles como fallback
    navigator.clipboard
      .writeText(message + "\n" + window.location.href)
      .then(() => {
        alert(
          "¡Enlace copiado al portapapeles! Compártelo con tus amigos y familiares."
        );
      })
      .catch((err) => {
        alert(
          "¡Comparte este enlace con tus seres queridos! " +
            window.location.href
        );
      });
  }
}

// Actualizar contadores
function updateCounters() {
  document.getElementById("ornamentCount").textContent = ornamentCount;
  document.getElementById("lightCount").textContent = lightCount;
  document.getElementById("totalDecorations").textContent =
    ornamentCount + lightCount;
}

// Aclarar color (para gradientes)
function lightenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

// Simular sonido de campanilla
function playBellSound() {
  // En un caso real, aquí se reproduciría un sonido
  console.log("🔔 ¡Nueva decoración añadida al árbol!");
}

// Mostrar modal del personaje
function showCharacterModal(characterId) {
  const character = charactersData[characterId];

  // Determinar clase de color para Tailwind
  let colorClass;
  let tailwindColor;
  switch (character.color) {
    case "christmas-blue":
      colorClass = "text-christmas-blue";
      tailwindColor = "christmas-blue";
      break;
    case "christmas-red":
      colorClass = "text-christmas-red";
      tailwindColor = "christmas-red";
      break;
    case "christmas-silver":
      colorClass = "text-christmas-silver";
      tailwindColor = "gray-300";
      break;
    case "christmas-purple":
      colorClass = "text-christmas-purple";
      tailwindColor = "christmas-purple";
      break;
    case "christmas-brown":
      colorClass = "text-christmas-brown";
      tailwindColor = "christmas-brown";
      break;
    case "christmas-green":
      colorClass = "text-christmas-green";
      tailwindColor = "christmas-green";
      break;
    case "christmas-cyan":
      colorClass = "text-christmas-cyan";
      tailwindColor = "christmas-cyan";
      break;
    default:
      colorClass = "text-christmas-gold";
      tailwindColor = "christmas-gold";
  }

  // Crear contenido del modal
  modalContent.innerHTML = `
                <div class="flex flex-col lg:flex-row items-start">
                    <div class="lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0 lg:pr-8">
                        <div class="w-48 h-48 rounded-full bg-gradient-to-r from-${tailwindColor} to-${tailwindColor}/70 mb-6 flex items-center justify-center ${
    character.animationClass
  }">
                            <i class="${
                              character.icon
                            } text-7xl text-white glow-effect"></i>
                        </div>
                        <h3 class="text-3xl font-bold ${colorClass} mb-2">${
    character.title
  }</h3>
                        <div class="w-24 h-1 bg-gradient-to-r from-${tailwindColor} to-${tailwindColor}/50 rounded-full mb-6"></div>
                        <button class="px-6 py-2 bg-gradient-to-r from-${tailwindColor} to-${tailwindColor}/80 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" onclick="playCharacterAnimation('${characterId}')">
                            <i class="fas fa-play mr-2"></i> Activar Animación
                        </button>
                    </div>
                    
                    <div class="lg:w-2/3">
                        <h4 class="text-2xl font-bold text-white mb-4">Historia y Significado</h4>
                        <p class="text-gray-300 mb-6">${
                          character.description
                        }</p>
                        
                        <h5 class="text-xl font-bold text-white mb-4">Características:</h5>
                        <ul class="space-y-3 mb-8">
                            ${character.details
                              .map(
                                (detail) => `
                                <li class="flex items-start">
                                    <i class="fas fa-star text-xs ${colorClass} mt-1 mr-3"></i>
                                    <span class="text-gray-300">${detail}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                        
                        <div class="bg-gray-900/50 rounded-xl p-5 border border-gray-800">
                            <h5 class="text-xl font-bold text-white mb-3">${
                              characterId === "santa" ||
                              characterId === "reindeer" ||
                              characterId === "elf" ||
                              characterId === "snowman"
                                ? "Sabías que..."
                                : "Versículo Bíblico"
                            }</h5>
                            <p class="text-gray-300 italic">
                                "${character.bibleVerse}"
                            </p>
                        </div>
                    </div>
                </div>
            `;

  // Mostrar modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Reproducir animación del personaje
function playCharacterAnimation(characterId) {
    const character = charactersData[characterId];
    
    // Crear un selector seguro
    let selector;
    if (character.animationClass && character.animationClass.trim() !== '') {
        selector = `.${character.animationClass.trim()} i, .${character.animationClass.trim()}`;
    } else {
        // Si no hay clase de animación, buscar por el icono
        selector = `[class*="${character.icon.split(' ')[1]}"]`;
    }
    
    try {
        const iconElement = modalContent.querySelector(selector);
        
        if (iconElement) {
            // Añadir efecto de animación
            iconElement.classList.add('animate-pulse-glow');
            
            // Efecto especial para Jesús
            if (characterId === 'jesus') {
                iconElement.classList.add('animate-jesus-glow');
            }
            
            // Quitar efecto después de 2 segundos
            setTimeout(() => {
                iconElement.classList.remove('animate-pulse-glow');
                if (characterId === 'jesus') {
                    iconElement.classList.remove('animate-jesus-glow');
                }
            }, 2000);
        } else {
            // Fallback: buscar cualquier elemento con icono
            const fallbackElement = modalContent.querySelector('i');
            if (fallbackElement) {
                fallbackElement.classList.add('animate-pulse-glow');
                setTimeout(() => {
                    fallbackElement.classList.remove('animate-pulse-glow');
                }, 2000);
            }
        }
    } catch (error) {
        console.log("Error al reproducir animación:", error);
        // Continuar sin interrumpir la experiencia del usuario
    }
}

// Cerrar modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Establecer año actual en el footer
function setCurrentYear() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  initVisualEffects();

  // Asignar evento a cada tarjeta de personaje
  characterCards.forEach((card) => {
    card.addEventListener("click", function () {
      const characterId = this.getAttribute("data-character");
      showCharacterModal(characterId);
    });
  });

  // Cerrar modal al hacer clic en el botón
  modalClose.addEventListener("click", closeModal);

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar modal con la tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Desplazamiento suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Interacción con el árbol 3D
  tree3d.addEventListener("click", function (e) {
    if (
      e.target === tree3d ||
      e.target.classList.contains("tree-layer") ||
      e.target.classList.contains("tree-trunk") ||
      e.target.classList.contains("tree-star")
    ) {
      rotateTree();
    }
  });
});

// Efecto parallax para nieve al hacer scroll
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const snowflakes = document.querySelectorAll(".snowflake");

  snowflakes.forEach((snowflake) => {
    const speed = parseFloat(snowflake.style.width) * 0.05;
    snowflake.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
