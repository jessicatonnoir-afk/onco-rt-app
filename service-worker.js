/* ============================================================
   Onco-RT — Contenidos
   Estructura de datos de módulos y lecciones.
   Para añadir contenido nuevo: añade objetos al array LESSONS
   del módulo correspondiente siguiendo el mismo formato.
   ============================================================ */

const MODULES = [
  {
    id: "m1",
    color: "#2E86AB",
    tint: "#E7F1F6",
    title: "Formación general sobre radioterapia oncológica",
    short: "Bases, tipos de tratamiento, proceso del paciente y papel de enfermería.",
    icon: "iso",
    status: "active",
    lessons: [
      {
        id: "m1-l1",
        title: "¿Qué es la radioterapia oncológica?",
        sub: "Principios básicos",
        html: `
          <p>La radioterapia oncológica es una especialidad médica que utiliza <strong>radiaciones ionizantes</strong> para destruir o controlar el crecimiento de células tumorales, dañando su material genético (ADN) de forma que pierden la capacidad de dividirse. El objetivo es administrar la dosis necesaria sobre el tumor minimizando, en la medida de lo posible, la afectación de los tejidos sanos circundantes.</p>

          <h3>Objetivo del tratamiento</h3>
          <p>Según el caso, la radioterapia puede tener intención:</p>
          <ul>
            <li><strong>Curativa (radical):</strong> busca la erradicación completa del tumor, sola o combinada con cirugía y/o quimioterapia.</li>
            <li><strong>Adyuvante:</strong> se administra tras la cirugía para eliminar posible enfermedad microscópica residual.</li>
            <li><strong>Neoadyuvante:</strong> se administra antes de la cirugía para reducir el tamaño tumoral.</li>
            <li><strong>Paliativa:</strong> busca controlar síntomas (dolor, sangrado, compresión) y mejorar la calidad de vida, sin intención curativa.</li>
          </ul>

          <h3>La unidad de dosis: el Gray (Gy)</h3>
          <p>La dosis de radiación absorbida por el tejido se mide en <strong>Gray (Gy)</strong>. Un tratamiento radical completo suele oscilar, según la localización y el esquema, entre 45 y 70-80 Gy, repartidos en varias sesiones.</p>

          <h3>¿Por qué se fracciona el tratamiento?</h3>
          <p>La dosis total casi nunca se administra de una sola vez. Se divide en sesiones diarias (fracciones) por varias razones biológicas, conocidas como las "4 R" de la radiobiología:</p>
          <ul>
            <li><strong>Reparación:</strong> el tejido sano repara el daño subletal entre sesión y sesión mejor que el tejido tumoral.</li>
            <li><strong>Repoblación:</strong> las células sanas repueblan más eficazmente el tejido dañado.</li>
            <li><strong>Redistribución:</strong> entre fracciones, las células tumorales se redistribuyen en fases del ciclo celular más sensibles a la radiación.</li>
            <li><strong>Reoxigenación:</strong> las zonas hipóxicas del tumor (más resistentes a la radiación) se reoxigenan progresivamente entre sesiones, aumentando su radiosensibilidad.</li>
          </ul>

          <div class="callout">
            <strong>Equipo multidisciplinar</strong>
            El tratamiento se diseña y ejecuta de forma coordinada entre oncología radioterápica (indicación y prescripción), radiofísica hospitalaria (cálculo y verificación de la dosis), técnicos en radioterapia, dosimetristas y enfermería, que acompaña al paciente en todo el proceso.
          </div>
        `
      },
      {
        id: "m1-l2",
        title: "Tipos de radioterapia",
        sub: "Externa y braquiterapia",
        html: `
          <p>De forma general, la radioterapia se clasifica en dos grandes grupos según dónde se sitúe la fuente de radiación respecto al paciente.</p>

          <h3>Radioterapia externa (teleterapia)</h3>
          <p>La fuente de radiación está fuera del cuerpo del paciente, habitualmente un <strong>acelerador lineal (LINAC)</strong>, que genera el haz de radiación a distancia. Dentro de la radioterapia externa existen distintas técnicas, cada vez más precisas:</p>
          <ul>
            <li><strong>RT conformada 3D (3D-CRT):</strong> el haz se adapta a la forma del volumen tumoral en tres dimensiones.</li>
            <li><strong>IMRT (intensidad modulada):</strong> modula la intensidad del haz dentro de cada campo, permitiendo esculpir dosis muy ajustadas al tumor y proteger mejor los órganos vecinos.</li>
            <li><strong>VMAT (arco volumétrico modulado):</strong> el acelerador gira de forma continua alrededor del paciente mientras emite radiación, reduciendo el tiempo de tratamiento.</li>
            <li><strong>IGRT (guiada por imagen):</strong> se realizan imágenes (kV, CBCT) antes o durante la sesión para verificar la posición exacta del paciente y del tumor antes de irradiar.</li>
            <li><strong>SBRT / SRS (estereotáctica corporal / radiocirugía):</strong> dosis muy altas concentradas en pocas fracciones (1 a 5), con extrema precisión, usadas en tumores pequeños y bien delimitados.</li>
            <li><strong>Tomoterapia:</strong> combina un acelerador lineal con un diseño helicoidal similar a un TC, útil en volúmenes extensos o irregulares.</li>
          </ul>

          <h3>Braquiterapia</h3>
          <p>La fuente radiactiva se coloca dentro o muy próxima al tumor, lo que permite administrar dosis muy altas de forma muy localizada con una caída de dosis rápida en el tejido sano circundante. Puede ser:</p>
          <ul>
            <li><strong>Intracavitaria:</strong> la fuente se inserta en una cavidad corporal natural (p. ej. cérvix, útero, vagina).</li>
            <li><strong>Intersticial:</strong> se implantan agujas o catéteres directamente en el tejido tumoral (p. ej. próstata, mama).</li>
            <li><strong>De contacto/superficial:</strong> la fuente se aplica sobre la piel o una superficie mucosa.</li>
          </ul>
          <div class="callout">
            <strong>Para saber más</strong>
            La braquiterapia tiene su propio módulo dedicado en esta app, donde se detallan procedimientos, tipos de carga (manual/remota), cuidados de enfermería específicos y radioprotección.
          </div>

          <h3>Otras modalidades</h3>
          <p>En algunos centros de referencia existe también la <strong>protonterapia</strong>, que usa partículas (protones) en lugar de fotones, con un perfil de depósito de dosis distinto (pico de Bragg) especialmente útil en determinados tumores pediátricos o de base de cráneo. Su disponibilidad es limitada y no está presente en todos los servicios.</p>
        `
      },
      {
        id: "m1-l3",
        title: "El proceso del paciente",
        sub: "De la consulta al fin de tratamiento",
        html: `
          <p>Conocer las fases por las que pasa el paciente ayuda a enfermería a anticipar necesidades de información y cuidados en cada momento.</p>

          <h3>1. Primera consulta y valoración</h3>
          <p>El oncólogo radioterápico valora el caso, revisa pruebas de imagen y antecedentes, decide la intención del tratamiento (curativa, adyuvante, paliativa...) e informa al paciente. Es un momento clave para detectar ansiedad, dudas o barreras (idioma, movilidad, soporte familiar).</p>

          <h3>2. TC de simulación</h3>
          <p>Se realiza una tomografía computarizada en la misma posición en la que el paciente recibirá el tratamiento, habitualmente con <strong>sistemas de inmovilización</strong> (máscaras termoplásticas, colchones de vacío, soportes de rodilla/tobillo) que garantizan reproducibilidad sesión tras sesión. Se colocan marcas de referencia (tatuajes puntuales o pegatinas) que se usarán a diario para el posicionamiento.</p>

          <h3>3. Planificación</h3>
          <p>El oncólogo delimita los volúmenes de tratamiento y los órganos de riesgo sobre las imágenes; radiofísica calcula la distribución de dosis óptima (plan de tratamiento) y se verifica antes de iniciar el tratamiento.</p>

          <h3>4. Primera sesión y sesiones de tratamiento</h3>
          <p>La primera sesión suele ser más larga porque incluye verificaciones adicionales de posicionamiento. Posteriormente, las sesiones (habitualmente de lunes a viernes, en tratamientos prolongados) duran pocos minutos cada una, aunque el tiempo total en el departamento es mayor por el posicionamiento y las comprobaciones de imagen.</p>

          <h3>5. Visitas de control durante el tratamiento</h3>
          <p>De forma periódica (semanal, habitualmente) el paciente es valorado por oncología y enfermería para evaluar tolerancia, toxicidades agudas y necesidad de ajustar el manejo sintomático.</p>

          <h3>6. Fin de tratamiento y seguimiento</h3>
          <p>Al finalizar, se informa al paciente sobre los cuidados en el domicilio, la evolución esperable de la toxicidad aguda (que puede progresar incluso tras acabar el tratamiento) y se programan revisiones de seguimiento.</p>

          <div class="callout">
            <strong>Punto clave para enfermería</strong>
            La reproducibilidad de la posición es crítica para la precisión del tratamiento. Cualquier cambio relevante en el paciente (peso, edema, nuevas lesiones cutáneas en la zona de inmovilización) debe comunicarse al equipo.
          </div>
        `
      },
      {
        id: "m1-l4",
        title: "El papel de la enfermería",
        sub: "Funciones en el servicio de radioterapia",
        html: `
          <p>La enfermería de radioterapia oncológica desempeña un papel transversal a lo largo de todo el proceso, combinando educación, valoración clínica y soporte emocional.</p>

          <h3>Acogida y educación</h3>
          <ul>
            <li>Explicar en qué consiste el tratamiento, su duración aproximada y qué esperar en cada fase.</li>
            <li>Reforzar la información médica y resolver dudas prácticas (horarios, traslados, acompañantes).</li>
            <li>Educar sobre el cuidado de la piel en la zona de tratamiento y signos de alarma que deben comunicarse.</li>
          </ul>

          <h3>Valoración y seguimiento de toxicidades</h3>
          <ul>
            <li>Valorar de forma sistemática la piel, mucosas, estado nutricional, dolor y estado general en cada visita.</li>
            <li>Registrar la toxicidad de forma objetivable (habitualmente con escalas como la CTCAE) para permitir comparar la evolución entre visitas.</li>
            <li>Detectar precozmente complicaciones que requieran valoración médica o ajuste de tratamiento de soporte.</li>
          </ul>

          <h3>Coordinación multidisciplinar</h3>
          <p>Enfermería actúa como nexo entre el paciente y el resto del equipo (oncología, nutrición, psicooncología, trabajo social, farmacia), derivando cuando es necesario y asegurando la continuidad de cuidados.</p>

          <h3>Apoyo emocional</h3>
          <p>El diagnóstico oncológico y el propio proceso de radioterapia (máscaras, salas con grandes equipos, soledad durante la sesión) generan ansiedad en muchos pacientes. Acompañar, explicar y normalizar la experiencia, especialmente en la primera sesión, forma parte del cuidado integral.</p>
        `
      },
      {
        id: "m1-l5",
        title: "Efectos secundarios y cuidados",
        sub: "Toxicidad aguda y tardía: visión general",
        html: `
          <p>Los efectos secundarios de la radioterapia dependen fundamentalmente de la <strong>zona anatómica irradiada</strong>, la dosis total, el fraccionamiento y los tratamientos concomitantes (p. ej. quimioterapia). Esta lección da una visión general; el manejo farmacológico detallado de cada toxicidad se desarrolla en el módulo de farmacología y complicaciones.</p>

          <h3>Toxicidad aguda vs. tardía</h3>
          <ul>
            <li><strong>Aguda:</strong> aparece durante el tratamiento o en las semanas posteriores. Suele ser reversible (p. ej. radiodermitis, mucositis, diarrea, cistitis aguda).</li>
            <li><strong>Tardía o crónica:</strong> aparece meses o años después, puede ser permanente y se relaciona con cambios fibróticos o vasculares en el tejido (p. ej. fibrosis, telangiectasias, estenosis).</li>
          </ul>

          <h3>Ejemplos según localización</h3>
          <ul>
            <li><strong>Piel (cualquier localización):</strong> radiodermitis, desde eritema hasta descamación húmeda.</li>
            <li><strong>Cabeza y cuello:</strong> mucositis oral, disfagia, xerostomía, alteración del gusto.</li>
            <li><strong>Tórax:</strong> esofagitis, neumonitis (tardía), tos.</li>
            <li><strong>Abdomen/pelvis:</strong> diarrea, cistitis, proctitis.</li>
            <li><strong>Sistema nervioso central:</strong> fatiga, cefalea, edema cerebral (requiere vigilancia estrecha).</li>
          </ul>

          <h3>Principios generales de cuidado de la piel irradiada</h3>
          <ul>
            <li>Higiene suave con agua tibia y jabones neutros, sin frotar.</li>
            <li>Evitar exposición solar directa y temperaturas extremas (agua muy caliente/fría, mantas eléctricas) en la zona.</li>
            <li>No aplicar productos no indicados por el equipo justo antes de la sesión (pueden producir efecto bolus y aumentar la dosis en piel).</li>
            <li>Ropa holgada y de fibras naturales sobre la zona tratada.</li>
          </ul>

          <div class="callout">
            <strong>Registro sistemático</strong>
            Documentar la toxicidad con una escala estandarizada (p. ej. CTCAE) en cada visita permite detectar tendencias, anticipar complicaciones y justificar decisiones de tratamiento de soporte o, si procede, pausa del tratamiento.
          </div>
        `
      },
      {
        id: "m1-l6",
        title: "Glosario de términos clave",
        sub: "Vocabulario imprescindible",
        html: `
          <p>Términos de uso habitual en el día a día del servicio. Te resultarán muy frecuentes en informes, planificaciones y comunicación con el resto del equipo.</p>
          <div class="glossary-grid">
            <div class="glossary-item"><p class="glossary-term">Gy (Gray)</p><p class="glossary-def">Unidad de dosis de radiación absorbida por unidad de masa de tejido.</p></div>
            <div class="glossary-item"><p class="glossary-term">Fracción</p><p class="glossary-def">Cada una de las sesiones en las que se divide la dosis total de tratamiento.</p></div>
            <div class="glossary-item"><p class="glossary-term">GTV</p><p class="glossary-def">Volumen tumoral macroscópico: lo que se ve en la imagen.</p></div>
            <div class="glossary-item"><p class="glossary-term">CTV</p><p class="glossary-def">Volumen clínico: GTV más extensión microscópica probable de enfermedad.</p></div>
            <div class="glossary-item"><p class="glossary-term">PTV</p><p class="glossary-def">Volumen de planificación: CTV más un margen de seguridad por movimiento e incertidumbres de posicionamiento.</p></div>
            <div class="glossary-item"><p class="glossary-term">OAR</p><p class="glossary-def">Órgano de riesgo: estructura sana cuya dosis debe limitarse (p. ej. médula, recto, pulmón).</p></div>
            <div class="glossary-item"><p class="glossary-term">Isocentro</p><p class="glossary-def">Punto en el que coinciden los ejes de rotación del acelerador; referencia geométrica central del tratamiento.</p></div>
            <div class="glossary-item"><p class="glossary-term">Isodosis</p><p class="glossary-def">Línea o superficie que une puntos que reciben la misma dosis de radiación; se representa como mapas de color en el plan.</p></div>
            <div class="glossary-item"><p class="glossary-term">LINAC</p><p class="glossary-def">Acelerador lineal: equipo que genera el haz de radiación en radioterapia externa.</p></div>
            <div class="glossary-item"><p class="glossary-term">Simulación</p><p class="glossary-def">TC realizado en la posición de tratamiento, base de la planificación.</p></div>
            <div class="glossary-item"><p class="glossary-term">Inmovilización</p><p class="glossary-def">Dispositivos (máscaras, soportes) que fijan la postura del paciente para garantizar reproducibilidad.</p></div>
            <div class="glossary-item"><p class="glossary-term">Boost</p><p class="glossary-def">Dosis adicional concentrada sobre una zona concreta, habitualmente al final del tratamiento.</p></div>
          </div>
        `
      }
    ]
  },
  {
    id: "m2",
    color: "#1B8A6B",
    tint: "#E5F4EF",
    title: "Protocolos de actuación y sistemas informáticos",
    short: "Protocolos del servicio y manejo de los sistemas de información.",
    icon: "doc",
    status: "soon",
    lessons: []
  },
  {
    id: "m3",
    color: "#E8743B",
    tint: "#FCEAE0",
    title: "Farmacología oncológica y complicaciones",
    short: "Fármacos coadyuvantes, manejo de toxicidades y complicaciones.",
    icon: "pill",
    status: "soon",
    lessons: []
  },
  {
    id: "m4",
    color: "#C23B5C",
    tint: "#FAE6EB",
    title: "Braquiterapia, anestesia y bombas de analgesia",
    short: "Procedimientos de braquiterapia, anestesia y manejo del dolor.",
    icon: "syringe",
    status: "soon",
    lessons: []
  }
];
