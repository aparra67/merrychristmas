// Datos de los personajes para el modal
const charactersData = {
  jesus: {
    title: "Niño Jesús",
    subtitle: "El Salvador de la Humanidad",
    color: "christmas-blue",
    icon: "fas fa-baby",
    description: "Jesús de Nazaret, el Hijo de Dios, nació en Belén hace más de dos mil años. Su nacimiento en un humilde pesebre marca el comienzo de la salvación para la humanidad, cumpliendo las profecías del Antiguo Testamento. Es el regalo más preciado de Dios a la humanidad.",
    details: [
      "Nacido de la Virgen María en Belén",
      "Su nacimiento fue anunciado por el ángel Gabriel",
      "Visitado por pastores y Reyes Magos",
      "Salvador del mundo según la fe cristiana",
      "Su nacimiento divide la historia en antes y después de Cristo"
    ],
    animationClass: "jesus-cradle",
    bibleVerse: "Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz.",
    bibleSource: "Isaías 9:6",
    bgGradient: "from-christmas-blue/30 to-angel-gold/30"
  },
  santa: {
    title: "Santa Claus",
    subtitle: "El Espíritu de la Generosidad",
    color: "christmas-red",
    icon: "fas fa-sleigh",
    description: "Basado en la figura histórica de San Nicolás, un obispo cristiano conocido por su generosidad. Santa Claus representa el espíritu de dar y la alegría de compartir durante la temporada navideña. Viaja por todo el mundo en su trineo tirado por renos repartiendo regalos.",
    details: [
      "Basado en San Nicolás de Myra (270-343 d.C.)",
      "Símbolo de generosidad y amor al prójimo",
      "Reparte regalos a los niños en Nochebuena",
      "Vive en el Polo Norte con duendes ayudantes",
      "Conoce quién ha sido bueno o malo durante el año"
    ],
    animationClass: "santa-move",
    bibleVerse: "Más bienaventurado es dar que recibir.",
    bibleSource: "Hechos 20:35",
    bgGradient: "from-christmas-red/30 to-christmas-orange/30"
  },
  angel: {
    title: "Ángel Gabriel",
    subtitle: "El Mensajero Celestial",
    color: "christmas-silver",
    icon: "fas fa-dove",
    description: "El ángel Gabriel es el mensajero celestial que anunció a María que daría a luz al Hijo de Dios. También anunció el nacimiento de Jesús a los pastores en los campos de Belén, proclamando la buena noticia al mundo.",
    details: [
      "Mensajero celestial de Dios",
      "Anunció el nacimiento de Jesús a María",
      "Apareció a los pastores en Belén",
      "Proclamó 'Gloria a Dios en las alturas'",
      "Su nombre significa 'Dios es mi fuerza'"
    ],
    animationClass: "fly-around",
    bibleVerse: "¡Gloria a Dios en las alturas, y en la tierra paz, buena voluntad para con los hombres!",
    bibleSource: "Lucas 2:14",
    bgGradient: "from-christmas-silver/30 to-angel-gold/30"
  },
  magi: {
    title: "Los Reyes Magos",
    subtitle: "Los Sabios de Oriente",
    color: "christmas-purple",
    icon: "fas fa-crown",
    description: "Melchor, Gaspar y Baltasar fueron sabios de Oriente que siguieron la estrella de Belén para adorar al recién nacido Jesús. Le ofrecieron regalos de oro, incienso y mirra, simbolizando su realeza, divinidad y mortalidad.",
    details: [
      "Melchor (oro), Gaspar (incienso) y Baltasar (mirra)",
      "Viajaron desde Oriente siguiendo una estrella",
      "Representan la universalidad del mensaje de Jesús",
      "Sus regalos simbolizan realeza, divinidad y mortalidad",
      "Llegaron aproximadamente dos años después del nacimiento"
    ],
    animationClass: "magi-glow",
    bibleVerse: "Al ver la estrella, se regocijaron con muy grande gozo. Y al entrar en la casa, vieron al niño con su madre María, y postrándose, lo adoraron.",
    bibleSource: "Mateo 2:10-11",
    bgGradient: "from-christmas-purple/30 to-christmas-gold/30"
  },
  reindeer: {
    title: "Rodolfo el Reno",
    subtitle: "El Reno de la Nariz Brillante",
    color: "christmas-brown",
    icon: "fas fa-horse-head",
    description: "Rodolfo es el noveno y más joven de los renos de Santa Claus. Es conocido por su nariz roja y brillante que ilumina el camino del trineo durante la noche de Navidad, especialmente en noches de niebla espesa.",
    details: [
      "Nariz roja brillante que funciona como faro",
      "Líder del equipo de renos que tira del trineo",
      "Se une al equipo después de ser discriminado",
      "Enseña sobre aceptación y valorar las diferencias",
      "Apareció por primera vez en 1939"
    ],
    animationClass: "reindeer-nose",
    bibleVerse: "Porque tú encenderás mi lámpara; Jehová mi Dios alumbrará mis tinieblas.",
    bibleSource: "Salmos 18:28",
    bgGradient: "from-christmas-brown/30 to-christmas-red/30"
  },
  elf: {
    title: "Duende Navideño",
    subtitle: "El Ayudante Mágico de Santa",
    color: "christmas-green",
    icon: "fas fa-hat-wizard",
    description: "Los duendes son los alegres ayudantes de Santa Claus en el Polo Norte. Trabajan durante todo el año fabricando juguetes y manteniendo la magia navideña viva con su energía y habilidades especiales.",
    details: [
      "Fabricantes expertos de juguetes y regalos",
      "Visten ropas verdes y rojas con sombreros puntiagudos",
      "Tienen poderes mágicos limitados",
      "Guardianes de la lista de niños buenos y malos",
      "Viven en el Polo Norte trabajando todo el año"
    ],
    animationClass: "elf-jump",
    bibleVerse: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.",
    bibleSource: "Colosenses 3:23",
    bgGradient: "from-christmas-green/30 to-christmas-cyan/30"
  },
  snowman: {
    title: "Frosty el Muñeco de Nieve",
    subtitle: "La Alegría del Invierno",
    color: "gray",
    icon: "fas fa-snowman",
    description: "Frosty es un muñeco de nieve mágico que cobra vida gracias a un sombrero viejo y mágico. Representa la alegría pura, la amistad y la magia del invierno, enseñando a los niños el valor de la amistad y la diversión simple.",
    details: [
      "Cobra vida con un sombrero mágico",
      "Tiene una personalidad alegre y amigable",
      "Le encanta bailar y cantar villancicos",
      "Simboliza la alegría simple de la temporada",
      "Apareció por primera vez en 1950"
    ],
    animationClass: "snowman-melt",
    bibleVerse: "Regocíjense en el Señor siempre. Otra vez digo: ¡Regocíjense!",
    bibleSource: "Filipenses 4:4",
    bgGradient: "from-snow-white/30 to-gray-300/30"
  },
  mary: {
    title: "María y José",
    subtitle: "Los Padres Terrenales de Jesús",
    color: "christmas-cyan",
    icon: "fas fa-hands-praying",
    description: "María, la madre de Jesús, y José, su padre terrenal, son figuras centrales en la historia de la Navidad. Su fe y obediencia permitieron el nacimiento del Salvador, siendo ejemplos de humildad y devoción.",
    details: [
      "María fue elegida por Dios para ser madre de Jesús",
      "José fue un carpintero justo y obediente",
      "Criaron a Jesús en Nazaret",
      "Ejemplos de fe, humildad y obediencia",
      "Viajaron a Belén para el censo romano"
    ],
    animationClass: "mary-joseph",
    bibleVerse: "Y dio a luz a su hijo primogénito, y lo envolvió en pañales, y lo acostó en un pesebre, porque no había lugar para ellos en el mesón.",
    bibleSource: "Lucas 2:7",
    bgGradient: "from-christmas-cyan/30 to-blue-300/30"
  },
};

// Elementos DOM
const modal = document.getElementById("characterModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const characterCards = document.querySelectorAll(".character-card");
const snowContainer = document.getElementById("snow-container");
const lightsContainer = document.getElementById("lights-container");

// Variables para el árbol SVG
let svgTree = null;
let lightsOn = true;
let currentOrnamentColor = "crimson";
let snowEffectActive = false;

// Colores para adornos del SVG
const ornamentColors = [
  "crimson",
  "deepskyblue",
  "gold",
  "darkviolet",
  "hotpink",
  "limegreen",
  "orange",
  "deeppink",
  "turquoise",
  "magenta",
];

// Inicializar efectos visuales
function initVisualEffects() {
  createSnowflakes();
  createChristmasLights();
  setCurrentYear();
  loadSVGTree();
}

// Crear copos de nieve
function createSnowflakes() {
  const snowflakeCount = window.innerWidth < 768 ? 40 : 80;

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 8 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    snowflake.style.animation = `snow-fall ${duration}s linear ${delay}s infinite`;

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

    const colors = [
      "#dc2626",
      "#16a34a",
      "#eab308",
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f97316",
      "#06b6d4",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    light.style.backgroundColor = color;
    light.style.boxShadow = `0 0 10px ${color}`;
    light.style.left = `${i * 4}%`;
    light.style.top = "10px";
    light.style.animationDelay = `${Math.random() * 2}s`;

    lightsContainer.appendChild(light);
  }

  // Luces en la parte inferior
  for (let i = 0; i < 25; i++) {
    const light = document.createElement("div");
    light.classList.add("christmas-light");

    const colors = [
      "#dc2626",
      "#16a34a",
      "#eab308",
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f97316",
      "#06b6d4",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    light.style.backgroundColor = color;
    light.style.boxShadow = `0 0 10px ${color}`;
    light.style.left = `${i * 4}%`;
    light.style.bottom = "10px";
    light.style.animationDelay = `${Math.random() * 2}s`;

    lightsContainer.appendChild(light);
  }
}

// ===== FUNCIONES PARA EL ÁRBOL SVG =====

// Cargar el SVG dinámicamente
function loadSVGTree() {
  const svgContainer = document.getElementById("svg-container");

  svgContainer.innerHTML = `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 300" 
            width="300" 
            height="450"
            style="background: transparent; cursor: pointer;"
            id="navidad-svg"
            class="svg-tree"
        >
            <!-- Definiciones para sombras/suavizado -->
            <defs>
                <filter id="brillo" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
                <radialGradient id="ornamentGradient" cx="30%" cy="30%">
                    <stop offset="0%" stop-color="white" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="currentColor" stop-opacity="1"/>
                </radialGradient>
            </defs>

            <!-- Estrella en la punta -->
            <g id="estrella" class="navidad-estrella" filter="url(#brillo)">
                <polygon points="100,15 106,32 123,35 110,47 113,65 100,55 87,65 90,47 77,35 94,32" 
                         fill="#FFD700" stroke="#FFAA00" stroke-width="0.5"/>
            </g>

            <!-- Luces navideñas -->
            <circle cx="100" cy="20" r="2.2" fill="white" class="luz luz-1" />
            <circle cx="72" cy="78" r="2" fill="#ff6b6b" class="luz luz-2" />
            <circle cx="128" cy="88" r="2" fill="#4ecdc4" class="luz luz-3" />
            <circle cx="88" cy="118" r="2" fill="#ffe66d" class="luz luz-4" />
            <circle cx="112" cy="138" r="2" fill="#ff9f1c" class="luz luz-5" />

            <!-- Capas del árbol -->
            <path d="M100,40 C90,55 80,75 70,90 C75,95 85,100 100,100 C115,100 125,95 130,90 C120,75 110,55 100,40 Z" 
                  fill="#2E8B57" class="arbol-capa" />

            <path d="M100,80 C85,100 65,130 55,145 C65,150 80,155 100,155 C120,155 135,150 145,145 C135,130 115,100 100,80 Z" 
                  fill="#228B22" class="arbol-capa" />

            <path d="M100,130 C80,155 50,200 45,210 C55,215 75,220 100,220 C125,220 145,215 155,210 C150,200 120,155 100,130 Z" 
                  fill="#1E7D22" class="arbol-capa" />

            <!-- Tronco -->
            <rect x="88" y="220" width="24" height="22" fill="#5D4037" rx="2" ry="2" class="tronco" />
            <line x1="95" y1="220" x2="95" y2="242" stroke="#3E2723" stroke-width="1" opacity="0.4"/>
            <line x1="105" y1="220" x2="105" y2="242" stroke="#3E2723" stroke-width="1" opacity="0.4"/>
            <line x1="113" y1="220" x2="113" y2="242" stroke="#3E2723" stroke-width="1" opacity="0.3"/>

            <!-- Adornos -->
            <g class="adorno" id="adorno-1" data-color="crimson">
                <circle cx="72" cy="92" r="6" fill="crimson"/>
                <circle cx="69" cy="89" r="1.5" fill="white" opacity="0.7"/>
            </g>
            <g class="adorno" id="adorno-2" data-color="deepskyblue">
                <circle cx="128" cy="105" r="6" fill="deepskyblue"/>
                <circle cx="125" cy="102" r="1.5" fill="white" opacity="0.7"/>
            </g>
            <g class="adorno" id="adorno-3" data-color="gold">
                <circle cx="90" cy="142" r="6" fill="gold"/>
                <circle cx="87" cy="139" r="1.5" fill="white" opacity="0.7"/>
            </g>
            <g class="adorno" id="adorno-4" data-color="darkviolet">
                <circle cx="112" cy="165" r="6" fill="darkviolet"/>
                <circle cx="109" cy="162" r="1.5" fill="white" opacity="0.7"/>
            </g>
            <g class="adorno" id="adorno-5" data-color="hotpink">
                <circle cx="78" cy="185" r="6" fill="hotpink"/>
                <circle cx="75" cy="182" r="1.5" fill="white" opacity="0.7"/>
            </g>

            <!-- Regalos -->
            <g id="regalo-1" class="regalo">
                <rect x="52" y="250" width="34" height="28" fill="#d32f2f" rx="2"/>
                <rect x="67" y="245" width="4" height="38" fill="#FFF" opacity="0.9"/>
                <rect x="47" y="262" width="44" height="4" fill="#FFF" opacity="0.9"/>
            </g>

            <g id="regalo-2" class="regalo">
                <rect x="92" y="252" width="30" height="25" fill="#1976d2" rx="2"/>
                <rect x="105" y="247" width="4" height="35" fill="#FFD700" opacity="0.95"/>
                <rect x="87" y="263" width="40" height="4" fill="#FFD700" opacity="0.95"/>
            </g>

            <g id="regalo-3" class="regalo">
                <rect x="132" y="249" width="32" height="27" fill="#388e3c" rx="2"/>
                <rect x="146" y="244" width="4" height="37" fill="#FFF" opacity="0.85"/>
                <rect x="127" y="261" width="42" height="4" fill="#FFF" opacity="0.85"/>
            </g>
        </svg>
    `;

  svgTree = document.getElementById("navidad-svg");
  setupTreeInteractions();
}

// Configurar interacciones del árbol SVG
function setupTreeInteractions() {
  if (!svgTree) return;

  // Evento para hacer clic en adornos
  const adornos = svgTree.querySelectorAll(".adorno");
  adornos.forEach((adorno) => {
    adorno.addEventListener("click", function (e) {
      e.stopPropagation();
      const circle = this.querySelector("circle");
      const currentColor = circle.getAttribute("fill");
      const newColor = getRandomColor();

      circle.style.transition = "fill 0.5s ease";
      circle.setAttribute("fill", newColor);
      this.setAttribute("data-color", newColor);

      this.style.transform = "scale(1.2)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 300);

      playBellSound();
      updateOrnamentCount();
    });
  });

  // Evento para hacer clic en luces
  const luces = svgTree.querySelectorAll(".luz");
  luces.forEach((luz) => {
    luz.addEventListener("click", function (e) {
      e.stopPropagation();
      this.style.animation = "none";
      setTimeout(() => {
        this.style.animation = "light-flicker 0.5s infinite alternate";
      }, 100);

      const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9f1c", "#a29bfe"];
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.fill = newColor;
    });
  });

  // Evento para hacer clic en regalos
  const regalos = svgTree.querySelectorAll(".regalo");
  regalos.forEach((regalo) => {
    regalo.addEventListener("click", function (e) {
      e.stopPropagation();
      this.style.transform = "translateY(-10px)";
      setTimeout(() => {
        this.style.transform = "translateY(0)";
      }, 300);

      showGiftMessage();
    });
  });

  // Evento para hacer clic en la estrella
  const estrella = svgTree.querySelector("#estrella");
  estrella.addEventListener("click", function (e) {
    e.stopPropagation();
    animateStar();
  });

  // Evento para hacer clic en el árbol
  svgTree.addEventListener("click", function (e) {
    if (
      e.target === svgTree ||
      e.target.classList.contains("arbol-capa") ||
      e.target.classList.contains("tronco")
    ) {
      svgTree.style.transform = "translateX(5px)";
      setTimeout(() => {
        svgTree.style.transform = "translateX(-5px)";
        setTimeout(() => {
          svgTree.style.transform = "translateX(0)";
        }, 100);
      }, 100);

      createSparkles(e.offsetX, e.offsetY);
    }
  });
}

// Cambiar color de los adornos
function changeOrnamentColor(color) {
  currentOrnamentColor = color;
  const adornos = document.querySelectorAll(".adorno circle");
  adornos.forEach((circle) => {
    circle.style.transition = "fill 0.5s ease";
    circle.setAttribute("fill", color);

    const parent = circle.parentElement;
    if (parent) {
      parent.setAttribute("data-color", color);
    }
  });

  playBellSound();
}

// Alternar luces
function toggleLights() {
  lightsOn = !lightsOn;
  const luces = document.querySelectorAll(".luz");

  luces.forEach((luz) => {
    if (lightsOn) {
      luz.style.opacity = "1";
      luz.style.animation = "light-flicker 1.5s infinite alternate";
    } else {
      luz.style.opacity = "0.3";
      luz.style.animation = "none";
    }
  });

  updateLightCount();
}

// Animar la estrella
function animateStar() {
  const estrella = document.getElementById("estrella");
  estrella.style.transition = "transform 0.5s, filter 0.5s";
  estrella.style.transform = "scale(1.3) rotate(180deg)";
  estrella.style.filter = "drop-shadow(0 0 15px gold)";

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      createSparkles(
        100 + Math.random() * 40 - 20,
        15 + Math.random() * 40 - 20
      );
    }, i * 100);
  }

  setTimeout(() => {
    estrella.style.transform = "scale(1) rotate(0deg)";
    estrella.style.filter = "url(#brillo)";
  }, 1000);

  playBellSound();
}

// Decoración aleatoria
function randomDecorations() {
  const adornos = document.querySelectorAll(".adorno circle");

  adornos.forEach((circle) => {
    const randomColor = ornamentColors[Math.floor(Math.random() * ornamentColors.length)];
    circle.style.transition = "fill 0.5s ease";
    circle.setAttribute("fill", randomColor);

    const parent = circle.parentElement;
    if (parent) {
      parent.setAttribute("data-color", randomColor);
    }
  });

  const regalos = document.querySelectorAll(".regalo");
  regalos.forEach((regalo, index) => {
    setTimeout(() => {
      regalo.style.transform = "translateY(-15px)";
      setTimeout(() => {
        regalo.style.transform = "translateY(0)";
      }, 300);
    }, index * 200);
  });

  const luces = document.querySelectorAll(".luz");
  luces.forEach((luz) => {
    const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9f1c", "#a29bfe", "#fd79a8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    luz.style.fill = randomColor;
  });

  playBellSound();
  updateOrnamentCount();
}

// Crear efecto de nieve en el SVG
function toggleSnow() {
  const svgContainer = svgTree;
  if (!svgContainer.querySelector(".snow-effect")) {
    const snowGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    snowGroup.classList.add("snow-effect");

    for (let i = 0; i < 25; i++) {
      const snowflake = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const x = Math.random() * 200;
      const y = Math.random() * 300;
      const size = Math.random() * 2 + 1;

      snowflake.setAttribute("cx", x);
      snowflake.setAttribute("cy", y);
      snowflake.setAttribute("r", size);
      snowflake.setAttribute("fill", "white");
      snowflake.setAttribute("opacity", "0.8");
      snowflake.style.animation = `svg-snow-fall ${Math.random() * 3 + 2}s linear infinite`;
      snowflake.style.animationDelay = `${Math.random() * 2}s`;

      snowGroup.appendChild(snowflake);
    }

    svgContainer.appendChild(snowGroup);
    snowEffectActive = true;
  } else {
    const snowEffect = svgContainer.querySelector(".snow-effect");
    if (snowEffect) {
      svgContainer.removeChild(snowEffect);
      snowEffectActive = false;
    }
  }
}

// Efecto de brillo
function sparkleEffect() {
  svgTree.style.filter = "drop-shadow(0 0 20px gold)";
  svgTree.style.transition = "filter 0.5s";

  setTimeout(() => {
    svgTree.style.filter = "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))";
  }, 1500);

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createSparkles(Math.random() * 200, Math.random() * 300);
    }, i * 100);
  }
}

// Crear chispas
function createSparkles(x, y) {
  if (!svgTree) return;

  const svgRect = svgTree.getBoundingClientRect();
  const point = svgTree.createSVGPoint();
  point.x = x;
  point.y = y;
  const svgPoint = point.matrixTransform(svgTree.getScreenCTM().inverse());

  const sparkle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  sparkle.setAttribute("cx", svgPoint.x);
  sparkle.setAttribute("cy", svgPoint.y);
  sparkle.setAttribute("r", "3");
  sparkle.setAttribute("fill", "#FFD700");
  sparkle.style.opacity = "1";
  sparkle.style.transition = "opacity 0.5s, transform 0.5s";

  svgTree.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = "0";
    sparkle.style.transform = "scale(2)";
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 500);
  }, 100);
}

// Mostrar mensaje de regalo
function showGiftMessage() {
  const messages = [
    "¡Feliz Navidad! 🎁",
    "Que la paz y amor te acompañen ✨",
    "Deseos de alegría para ti 🎄",
    "¡Un regalo lleno de bendiciones! 🌟",
    "El mejor regalo es compartir 💝",
    "¡Que tus sueños se hagan realidad! 🎅",
    "Brilla con la luz de la Navidad 💫",
    "Amor, paz y felicidad para ti ❤️",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const notification = document.createElement("div");
  notification.className =
    "message-notification fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-christmas-red to-christmas-gold text-white px-6 py-3 rounded-full z-50 shadow-xl";
  notification.textContent = randomMessage;
  notification.style.animation = "slide-in 0.3s ease-out";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("hiding");
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 2000);
}

// Obtener color aleatorio
function getRandomColor() {
  return ornamentColors[Math.floor(Math.random() * ornamentColors.length)];
}

// Reiniciar árbol
function resetTree() {
  const originalColors = ["crimson", "deepskyblue", "gold", "darkviolet", "hotpink"];
  const adornos = document.querySelectorAll(".adorno circle");

  adornos.forEach((circle, index) => {
    circle.style.transition = "fill 0.5s ease";
    circle.setAttribute("fill", originalColors[index] || "crimson");

    const parent = circle.parentElement;
    if (parent) {
      parent.setAttribute("data-color", originalColors[index] || "crimson");
    }
  });

  const luzColors = ["white", "#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9f1c"];
  const luces = document.querySelectorAll(".luz");
  luces.forEach((luz, index) => {
    luz.style.fill = luzColors[index] || "white";
  });

  lightsOn = true;
  const lucesElements = document.querySelectorAll(".luz");
  lucesElements.forEach((luz) => {
    luz.style.opacity = "1";
    luz.style.animation = "light-flicker 1.5s infinite alternate";
  });

  if (snowEffectActive) {
    const snowEffect = svgTree.querySelector(".snow-effect");
    if (snowEffect) {
      svgTree.removeChild(snowEffect);
      snowEffectActive = false;
    }
  }

  svgTree.style.transform = "";
  svgTree.style.filter = "drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))";

  updateOrnamentCount();
  updateLightCount();

  playBellSound();
}

// Actualizar contador de adornos
function updateOrnamentCount() {
  const count = document.querySelectorAll(".adorno").length;
  document.getElementById("ornamentCount").textContent = count;
}

// Actualizar contador de luces
function updateLightCount() {
  const count = document.querySelectorAll(".luz").length;
  document.getElementById("lightCount").textContent = count;
}

// Compartir árbol
function shareTree() {
  const message = `¡Mira mi hermoso árbol de Navidad SVG! He decorado con colores navideños. ¡Feliz Navidad! 🎄`;

  if (navigator.share) {
    navigator.share({
      title: "Mi Árbol de Navidad SVG - Hermosa Navidad",
      text: message,
      url: window.location.href,
    });
  } else {
    navigator.clipboard
      .writeText(message + "\n" + window.location.href)
      .then(() => {
        showGiftMessage("¡Enlace copiado al portapapeles! Compártelo con amigos.");
      })
      .catch((err) => {
        showGiftMessage("¡Comparte este enlace con tus seres queridos!");
      });
  }
}

// ===== FUNCIONES MEJORADAS PARA EL MODAL =====

// Mostrar modal del personaje
function showCharacterModal(characterId) {
  const character = charactersData[characterId];

  // Determinar colores para el gradiente
  let gradientFrom, gradientTo;
  switch (character.color) {
    case "christmas-blue":
      gradientFrom = "rgba(59, 130, 246, 0.1)";
      gradientTo = "rgba(253, 224, 71, 0.1)";
      break;
    case "christmas-red":
      gradientFrom = "rgba(220, 38, 38, 0.1)";
      gradientTo = "rgba(249, 115, 22, 0.1)";
      break;
    case "christmas-silver":
      gradientFrom = "rgba(203, 213, 225, 0.1)";
      gradientTo = "rgba(253, 224, 71, 0.1)";
      break;
    case "christmas-purple":
      gradientFrom = "rgba(139, 92, 246, 0.1)";
      gradientTo = "rgba(234, 179, 8, 0.1)";
      break;
    case "christmas-brown":
      gradientFrom = "rgba(146, 64, 14, 0.1)";
      gradientTo = "rgba(220, 38, 38, 0.1)";
      break;
    case "christmas-green":
      gradientFrom = "rgba(22, 163, 74, 0.1)";
      gradientTo = "rgba(6, 182, 212, 0.1)";
      break;
    case "christmas-cyan":
      gradientFrom = "rgba(6, 182, 212, 0.1)";
      gradientTo = "rgba(59, 130, 246, 0.1)";
      break;
    default:
      gradientFrom = "rgba(234, 179, 8, 0.1)";
      gradientTo = "rgba(220, 38, 38, 0.1)";
  }

  // Crear contenido del modal con diseño mejorado
  modalContent.innerHTML = `
        <div class="modal-character-header" style="background: linear-gradient(135deg, ${gradientFrom}, ${gradientTo}); border-radius: 20px; padding: 2rem; margin-bottom: 2rem;">
            <div class="modal-character-icon-container" style="background: linear-gradient(135deg, ${character.color === 'gray' ? 'var(--snow-white)' : 'var(--' + character.color + ')'}, ${character.color === 'gray' ? 'var(--gray-300)' : 'var(--' + character.color + ')' + '/70'});">
                <i class="${character.icon} modal-character-icon"></i>
            </div>
            <h2 class="modal-character-title">${character.title}</h2>
            <p class="modal-character-subtitle">${character.subtitle}</p>
            <div style="width: 60px; height: 3px; background: linear-gradient(to right, var(--christmas-gold), var(--christmas-red)); border-radius: 2px; margin-top: 10px;"></div>
        </div>

        <div class="modal-section" style="--section-index: 0;">
            <h3 class="modal-section-title">
                <i class="fas fa-book-open"></i>
                Historia y Significado
            </h3>
            <p class="modal-description">
                ${character.description}
            </p>
        </div>

        <div class="modal-section" style="--section-index: 1;">
            <h3 class="modal-section-title">
                <i class="fas fa-star"></i>
                Características Principales
            </h3>
            <ul class="modal-features">
                ${character.details.map((detail, index) => `
                    <li class="modal-feature-item" style="animation-delay: ${index * 0.1}s;">
                        <i class="fas fa-check-circle modal-feature-icon"></i>
                        <span class="modal-feature-text">${detail}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="modal-section" style="--section-index: 2;">
            <div class="modal-quote">
                <p class="modal-quote-text">"${character.bibleVerse}"</p>
                <p class="modal-quote-source">— ${character.bibleSource}</p>
            </div>
        </div>

        <div class="modal-section" style="--section-index: 3;">
            <div class="modal-actions">
                <button class="modal-button modal-button-primary" onclick="playCharacterAnimation('${characterId}')">
                    <i class="fas fa-play"></i>
                    Activar Animación Especial
                </button>
                <button class="modal-button modal-button-secondary" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                    Cerrar
                </button>
            </div>
        </div>
    `;

  // Mostrar animaciones de entrada para las secciones
  setTimeout(() => {
    const sections = modalContent.querySelectorAll('.modal-section');
    sections.forEach((section, index) => {
      section.style.animation = 'slideUp 0.5s ease-out forwards';
      section.style.animationDelay = `${index * 0.1}s`;
      section.style.opacity = '1';
    });
  }, 100);

  // Mostrar modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
}

// Reproducir animación del personaje
function playCharacterAnimation(characterId) {
  const character = charactersData[characterId];
  
  // Obtener el contenedor del icono
  const iconContainer = modalContent.querySelector('.modal-character-icon-container');
  const icon = modalContent.querySelector('.modal-character-icon');
  
  if (!iconContainer || !icon) return;
  
  // Remover todas las animaciones anteriores
  iconContainer.classList.remove(
    'animate-bounce-gentle', 'animate-glow-pulse', 'animate-shake-gentle',
    'animate-fly-around', 'animate-santa-move', 'animate-reindeer-nose',
    'animate-angel-halo', 'animate-magi-glow', 'animate-elf-jump',
    'animate-snowman-melt', 'animate-mary-joseph', 'animate-jesus-cradle'
  );
  
  icon.classList.remove('animate-glow-pulse');
  
  // Aplicar animación específica según el personaje
  switch (characterId) {
    case 'jesus':
      iconContainer.classList.add('animate-jesus-cradle');
      icon.classList.add('animate-glow-pulse');
      break;
    case 'santa':
      iconContainer.classList.add('animate-santa-move');
      break;
    case 'angel':
      iconContainer.classList.add('animate-fly-around');
      icon.classList.add('animate-angel-halo');
      break;
    case 'magi':
      iconContainer.classList.add('animate-magi-glow');
      icon.classList.add('animate-glow-pulse');
      break;
    case 'reindeer':
      iconContainer.classList.add('animate-reindeer-nose');
      break;
    case 'elf':
      iconContainer.classList.add('animate-elf-jump');
      break;
    case 'snowman':
      iconContainer.classList.add('animate-snowman-melt');
      break;
    case 'mary':
      iconContainer.classList.add('animate-mary-joseph');
      break;
    default:
      iconContainer.classList.add('animate-bounce-gentle');
      icon.classList.add('animate-glow-pulse');
  }
  
  // Efecto de sonido
  playBellSound();
  
  // Mostrar notificación de animación activada
  showAnimationNotification(character.title);
  
  // Quitar animación después de 4 segundos
  setTimeout(() => {
    iconContainer.classList.remove(
      'animate-bounce-gentle', 'animate-glow-pulse', 'animate-shake-gentle',
      'animate-fly-around', 'animate-santa-move', 'animate-reindeer-nose',
      'animate-angel-halo', 'animate-magi-glow', 'animate-elf-jump',
      'animate-snowman-melt', 'animate-mary-joseph', 'animate-jesus-cradle'
    );
    icon.classList.remove('animate-glow-pulse');
  }, 4000);
}

// Mostrar notificación de animación
function showAnimationNotification(characterName) {
  const notification = document.createElement('div');
  notification.className = 'message-notification';
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <i class="fas fa-sparkles" style="color: var(--christmas-gold);"></i>
      <span>¡Animación activada para ${characterName}!</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('hiding');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 2000);
}

// Cerrar modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  document.body.classList.remove("modal-open");
}

// Establecer año actual en el footer
function setCurrentYear() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Simular sonido de campanilla
function playBellSound() {
  // Crear un elemento de audio (en un caso real, aquí se cargaría un archivo de sonido)
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (error) {
    // Fallback silencioso si Web Audio API no está disponible
    console.log("🔔 ¡Sonido de campanilla!");
  }
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

  // Inicializar contadores del árbol SVG
  updateOrnamentCount();
  updateLightCount();
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