import { PrismaClient, Level } from '@prisma/client'

const prisma = new PrismaClient()

type WordSeed = {
  letter: string
  definition: string
  answer: string
  hint: string
  level: Level
  difficultyScore: number
}

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const words: WordSeed[] = [

  // ── A ───────────────────────────────────────────────────────────────────
  { letter: 'A', definition: 'Interpretación simbólica que extrae el significado oculto de un texto o imagen sagrada', answer: 'allegorical', hint: 'Método hermenéutico de lectura simbólica', level: 'C2', difficultyScore: 7 },
  { letter: 'A', definition: 'Propiedad de un sistema de producir comportamientos no previsibles a partir de reglas simples', answer: 'autopoiesis', hint: 'Capacidad de un sistema de producirse a sí mismo', level: 'C2', difficultyScore: 8 },
  { letter: 'A', definition: 'Proceso filosófico de suspender el juicio ante afirmaciones sin evidencia suficiente', answer: 'agnosticism', hint: 'Suspensión del juicio sobre lo indemostrable', level: 'C2', difficultyScore: 7 },
  { letter: 'A', definition: 'Razonamiento que infiere la mejor explicación posible de los datos disponibles', answer: 'abduction', hint: 'Inferencia a la mejor explicación', level: 'C2', difficultyScore: 8 },
  { letter: 'A', definition: 'Condición en que la estructura de un sistema determina su función y viceversa', answer: 'affordance', hint: 'Lo que un entorno permite hacer a un agente', level: 'C2', difficultyScore: 8 },
  { letter: 'A', definition: 'Proceso de hacer que algo sea intrínsecamente motivador sin incentivos externos', answer: 'autonomy', hint: 'La capacidad de gobernarse a uno mismo', level: 'C2', difficultyScore: 7 },
  { letter: 'A', definition: 'Tendencia de los sistemas complejos a generar propiedades no presentes en sus componentes', answer: 'accrual', hint: 'Acumulación gradual de algo a lo largo del tiempo', level: 'C2', difficultyScore: 7 },
  { letter: 'A', definition: 'Principio según el cual las entidades no deben multiplicarse más allá de lo necesario', answer: 'axiom', hint: 'Principio que se acepta sin necesidad de demostración', level: 'C2', difficultyScore: 7 },
  { letter: 'A', definition: 'Proceso de construir significado a partir de indicios parciales e incompletos', answer: 'assemblage', hint: 'Conjunto de elementos heterogéneos articulados', level: 'C2', difficultyScore: 8 },
  { letter: 'A', definition: 'Capacidad de un agente de actuar de forma independiente según sus propios criterios', answer: 'agency', hint: 'La capacidad de actuar de forma autónoma', level: 'C2', difficultyScore: 7 },

  // ── B ───────────────────────────────────────────────────────────────────
  { letter: 'B', definition: 'Fenómeno óptico en que un cristal divide la luz en dos rayos con velocidades distintas', answer: 'birefringence', hint: 'División de la luz en cristales anisotrópicos', level: 'C2', difficultyScore: 9 },
  { letter: 'B', definition: 'Proceso por el que dos sistemas inicialmente diferentes convergen hacia el mismo estado', answer: 'bifurcation', hint: 'División de un sistema en dos ramas distintas', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Principio filosófico de que la existencia precede y condiciona la esencia', answer: 'being', hint: 'El concepto fundamental de la ontología', level: 'C2', difficultyScore: 7 },
  { letter: 'B', definition: 'Proceso de identificar los supuestos implícitos que sostienen un argumento', answer: 'bracketing', hint: 'Suspender los juicios previos al analizar algo', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Estudio de los sistemas vivos como modelos para diseñar tecnología y algoritmos', answer: 'biomimicry', hint: 'Imitar la naturaleza para resolver problemas', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Que tiene múltiples capas de significado que se revelan sucesivamente al lector', answer: 'baroque', hint: 'Estilo elaborado y de gran complejidad ornamental', level: 'C2', difficultyScore: 7 },
  { letter: 'B', definition: 'Proceso por el que conceptos de un dominio estructuran la comprensión de otro', answer: 'blending', hint: 'Fusión conceptual de dos dominios distintos', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Propiedad de un sistema de mantener su identidad a pesar de los cambios continuos', answer: 'boundary maintenance', hint: 'Preservar los límites de un sistema', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Capacidad cognitiva de mantener activas varias hipótesis sin decantarse por ninguna', answer: 'bivalence', hint: 'El principio lógico de que algo es verdadero o falso', level: 'C2', difficultyScore: 8 },
  { letter: 'B', definition: 'Proceso de hacer emerger nuevas propiedades combinando elementos preexistentes', answer: 'bootstrapping', hint: 'Crear algo usando los propios recursos disponibles', level: 'C2', difficultyScore: 8 },

  // ── C ───────────────────────────────────────────────────────────────────
  { letter: 'C', definition: 'Relativo a la corteza cerebral y a las funciones cognitivas superiores del ser humano', answer: 'cortical', hint: 'Perteneciente al córtex cerebral', level: 'C2', difficultyScore: 7 },
  { letter: 'C', definition: 'Proceso de hacer que algo sea comprensible situándolo en su contexto histórico', answer: 'contextualisation', hint: 'Situar algo en su contexto histórico y cultural', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Propiedad de un sistema de producir comportamientos imprevisibles a partir de reglas simples', answer: 'complexity', hint: 'La ciencia de los sistemas complejos y caóticos', level: 'C2', difficultyScore: 7 },
  { letter: 'C', definition: 'Proceso de identificar las condiciones bajo las cuales una teoría queda refutada', answer: 'corroboration', hint: 'Confirmación de una hipótesis por evidencias independientes', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Principio filosófico de que la realidad es construida por los observadores', answer: 'constructivism', hint: 'La realidad se construye socialmente', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Proceso de hacer que algo sea accesible a través de múltiples canales sensoriales', answer: 'cross-modal', hint: 'Que involucra más de un sentido simultáneamente', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Que emerge de la interacción entre componentes sin estar en ninguno de ellos por separado', answer: 'co-emergence', hint: 'Surgir al mismo tiempo de forma interdependiente', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Proceso de identificar los mecanismos causales que conectan variables independientes', answer: 'causal mechanism', hint: 'El mecanismo que conecta causa y efecto', level: 'C2', difficultyScore: 8 },
  { letter: 'C', definition: 'Principio de que el conocimiento válido surge de la confrontación de perspectivas', answer: 'critique', hint: 'Análisis crítico sistemático de algo', level: 'C2', difficultyScore: 7 },
  { letter: 'C', definition: 'Propiedad de un texto de articular varios niveles de significado simultáneamente', answer: 'connotation', hint: 'El significado implícito más allá del literal', level: 'C2', difficultyScore: 7 },

  // ── D ───────────────────────────────────────────────────────────────────
  { letter: 'D', definition: 'Método filosófico que avanza mediante la tensión entre contradicción y síntesis', answer: 'dialectical', hint: 'Tesis, antítesis y síntesis como método', level: 'C2', difficultyScore: 8 },
  { letter: 'D', definition: 'Proceso de reducir algo a sus componentes más elementales para entender su estructura', answer: 'decomposition', hint: 'Descomponer en partes para analizar', level: 'C2', difficultyScore: 7 },
  { letter: 'D', definition: 'Propiedad de un sistema de bifurcarse hacia estados cualitativamente distintos', answer: 'divergence', hint: 'Alejamiento progresivo de un punto de partida común', level: 'C2', difficultyScore: 8 },
  { letter: 'D', definition: 'Principio de que toda afirmación tiene consecuencias prácticas que la validan', answer: 'defeasibility', hint: 'La posibilidad de ser refutado con nueva evidencia', level: 'C2', difficultyScore: 9 },
  { letter: 'D', definition: 'Proceso de identificar cómo el lenguaje construye y limita el pensamiento', answer: 'discourse', hint: 'El lenguaje como sistema que construye la realidad', level: 'C2', difficultyScore: 8 },
  { letter: 'D', definition: 'Capacidad de sostener afirmaciones provisionales sujetas a revisión futura', answer: 'defeasible', hint: 'Que puede ser invalidado por nueva información', level: 'C2', difficultyScore: 9 },
  { letter: 'D', definition: 'Que emerge de la interacción dinámica entre agentes y su entorno', answer: 'dynamic', hint: 'En constante cambio e interacción', level: 'C2', difficultyScore: 7 },
  { letter: 'D', definition: 'Proceso de hacer explícita la estructura lógica implícita en un argumento', answer: 'diagramming', hint: 'Representar visualmente la estructura de algo', level: 'C2', difficultyScore: 7 },
  { letter: 'D', definition: 'Propiedad de un fenómeno de manifestarse de forma distinta según el nivel de análisis', answer: 'dimensionality', hint: 'El número de dimensiones de un fenómeno', level: 'C2', difficultyScore: 8 },
  { letter: 'D', definition: 'Proceso de construir significado a través de la diferencia entre términos', answer: 'differentiation', hint: 'Crear distinción entre conceptos o entidades', level: 'C2', difficultyScore: 7 },

  // ── E ───────────────────────────────────────────────────────────────────
  { letter: 'E', definition: 'Estado de balance dinámico que un sistema mantiene ante perturbaciones externas continuas', answer: 'equilibrium', hint: 'Balance dinámico de un sistema complejo', level: 'C2', difficultyScore: 7 },
  { letter: 'E', definition: 'Proceso de hacer que algo surja de la interacción de componentes sin planificación previa', answer: 'emergence', hint: 'Propiedades que surgen sin estar en las partes', level: 'C2', difficultyScore: 8 },
  { letter: 'E', definition: 'Rama de la filosofía que estudia los fundamentos y límites del conocimiento humano', answer: 'epistemology', hint: 'La teoría filosófica del conocimiento', level: 'C2', difficultyScore: 8 },
  { letter: 'E', definition: 'Proceso de comprender algo adoptando la perspectiva subjetiva del agente', answer: 'ethnography', hint: 'Estudio desde dentro de una cultura o grupo', level: 'C2', difficultyScore: 8 },
  { letter: 'E', definition: 'Propiedad de un sistema de ser perturbado sin perder su estructura fundamental', answer: 'elasticity', hint: 'Capacidad de deformarse y recuperarse', level: 'C2', difficultyScore: 7 },
  { letter: 'E', definition: 'Proceso de identificar cómo los marcos conceptuales determinan lo que se puede pensar', answer: 'entailment', hint: 'Lo que se sigue necesariamente de una afirmación', level: 'C2', difficultyScore: 9 },
  { letter: 'E', definition: 'Condición en que un argumento produce resultados contrarios a los pretendidos', answer: 'equivocation', hint: 'Usar un término con dos significados distintos', level: 'C2', difficultyScore: 8 },
  { letter: 'E', definition: 'Proceso de hacer que algo sea evidente sin necesidad de argumentación explícita', answer: 'enactment', hint: 'Hacer real algo mediante la acción', level: 'C2', difficultyScore: 8 },
  { letter: 'E', definition: 'Propiedad de un sistema de funcionar en múltiples escalas simultáneamente', answer: 'embedded', hint: 'Que está integrado dentro de un sistema mayor', level: 'C2', difficultyScore: 7 },
  { letter: 'E', definition: 'Proceso de construir conocimiento situando al observador dentro del sistema observado', answer: 'emic', hint: 'Perspectiva desde dentro de una cultura', level: 'C2', difficultyScore: 9 },

  // ── F ───────────────────────────────────────────────────────────────────
  { letter: 'F', definition: 'Que ocurre de forma contingente dependiendo de condiciones externas no necesarias', answer: 'facultative', hint: 'Que puede ocurrir pero no es obligatorio', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Proceso de identificar cómo los marcos conceptuales condicionan lo que se puede percibir', answer: 'framing effect', hint: 'El efecto del encuadre en la percepción', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Propiedad de una teoría de ser imposible de refutar por ninguna evidencia empírica', answer: 'falsifiability', hint: 'El criterio de Popper para la ciencia', level: 'C2', difficultyScore: 9 },
  { letter: 'F', definition: 'Proceso de hacer que algo sea comprensible situándolo en una red de relaciones', answer: 'figuration', hint: 'Representar algo mediante figuras o relaciones', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Capacidad de un concepto de generar nuevas preguntas e hipótesis inesperadas', answer: 'fecundity', hint: 'La fertilidad intelectual de un concepto', level: 'C2', difficultyScore: 9 },
  { letter: 'F', definition: 'Proceso de identificar las condiciones bajo las cuales un argumento queda invalidado', answer: 'falsification', hint: 'Intentar demostrar que algo es falso', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Propiedad de los sistemas complejos de mostrar patrones similares a distintas escalas', answer: 'fractal', hint: 'Patrón que se repite a distintas escalas', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Condición en que los límites entre categorías son graduales y no discretos', answer: 'fuzzy', hint: 'Lógica de conjuntos con pertenencia gradual', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Proceso de hacer que el observador forme parte del sistema que estudia', answer: 'first-person', hint: 'Perspectiva del propio observador', level: 'C2', difficultyScore: 8 },
  { letter: 'F', definition: 'Que tiene en cuenta la historia de su desarrollo para entender su estado actual', answer: 'formative', hint: 'Que da forma o moldea algo en su desarrollo', level: 'C2', difficultyScore: 7 },

  // ── G ───────────────────────────────────────────────────────────────────
  { letter: 'G', definition: 'Percepción del conjunto como algo cualitativamente distinto a la suma de sus partes', answer: 'gestalt', hint: 'El todo como más que la suma de las partes', level: 'C2', difficultyScore: 8 },
  { letter: 'G', definition: 'Proceso de construir conocimiento a partir de la interacción social y el diálogo', answer: 'grounded theory', hint: 'Teoría que emerge de los datos cualitativos', level: 'C2', difficultyScore: 9 },
  { letter: 'G', definition: 'Propiedad de una afirmación de aplicarse a todos los casos sin excepción posible', answer: 'generalisation', hint: 'Extender de lo particular a lo universal', level: 'C2', difficultyScore: 7 },
  { letter: 'G', definition: 'Proceso de identificar las estructuras profundas que generan los fenómenos superficiales', answer: 'generative', hint: 'Que genera o produce algo a partir de reglas', level: 'C2', difficultyScore: 8 },
  { letter: 'G', definition: 'Que produce o genera algo nuevo a partir de reglas o estructuras subyacentes', answer: 'generative', hint: 'Que genera algo a partir de reglas internas', level: 'C2', difficultyScore: 8 },
  { letter: 'G', definition: 'Proceso de hacer que algo sea comprensible situándolo en un flujo temporal', answer: 'genealogy', hint: 'Historia del origen y desarrollo de algo', level: 'C2', difficultyScore: 8 },
  { letter: 'G', definition: 'Capacidad de un sistema de producir propiedades globales a partir de interacciones locales', answer: 'global emergence', hint: 'Propiedades globales que surgen de lo local', level: 'C2', difficultyScore: 9 },
  { letter: 'G', definition: 'Proceso de hacer que algo sea comprensible estableciendo sus condiciones de posibilidad', answer: 'grounding', hint: 'Anclar algo en sus fundamentos', level: 'C2', difficultyScore: 7 },
  { letter: 'G', definition: 'Que incluye todos los casos relevantes sin dejar ninguno fuera del análisis', answer: 'gapless', hint: 'Sin lagunas o vacíos en el análisis', level: 'C2', difficultyScore: 8 },
  { letter: 'G', definition: 'Principio de que las explicaciones simples son preferibles a las complejas', answer: 'gradation', hint: 'Avance gradual por grados sucesivos', level: 'C2', difficultyScore: 7 },

  // ── H ───────────────────────────────────────────────────────────────────
  { letter: 'H', definition: 'Supuesto provisional que guía la investigación antes de contar con evidencia', answer: 'hypothesis', hint: 'Proposición a verificar empíricamente', level: 'C2', difficultyScore: 7 },
  { letter: 'H', definition: 'Estudio filosófico de los métodos de interpretación de textos y fenómenos', answer: 'hermeneutics', hint: 'La ciencia de la interpretación de significados', level: 'C2', difficultyScore: 9 },
  { letter: 'H', definition: 'Proceso de interpretar un fenómeno atendiendo al todo y a las partes simultáneamente', answer: 'holism', hint: 'El todo no puede reducirse a sus partes', level: 'C2', difficultyScore: 8 },
  { letter: 'H', definition: 'Que tiene la misma forma o estructura que otro sistema aunque sea de diferente naturaleza', answer: 'homomorphism', hint: 'Correspondencia estructural entre dos sistemas', level: 'C2', difficultyScore: 9 },
  { letter: 'H', definition: 'Propiedad de un argumento de resistir la crítica mediante la adición de hipótesis auxiliares', answer: 'hard core', hint: 'El núcleo irrefutable de un programa de investigación', level: 'C2', difficultyScore: 9 },
  { letter: 'H', definition: 'Proceso de construir conocimiento integrando perspectivas aparentemente incompatibles', answer: 'hybridisation', hint: 'Combinar elementos de orígenes distintos', level: 'C2', difficultyScore: 8 },
  { letter: 'H', definition: 'Capacidad de un sistema de mantener su estructura a través de perturbaciones', answer: 'homeostasis', hint: 'Autorregulación para mantener el equilibrio', level: 'C2', difficultyScore: 8 },
  { letter: 'H', definition: 'Proceso de identificar cómo los supuestos del observador condicionan lo que observa', answer: 'hermeneutic circle', hint: 'El todo se entiende por las partes y viceversa', level: 'C2', difficultyScore: 9 },
  { letter: 'H', definition: 'Propiedad de una teoría de explicar fenómenos de dominios aparentemente distintos', answer: 'heuristic power', hint: 'La capacidad de generar nuevas hipótesis', level: 'C2', difficultyScore: 9 },
  { letter: 'H', definition: 'Que no puede ser reducido a algo más simple sin perder sus propiedades esenciales', answer: 'holistic', hint: 'Que considera el todo como irreducible', level: 'C2', difficultyScore: 8 },

  // ── I ───────────────────────────────────────────────────────────────────
  { letter: 'I', definition: 'Propiedad de los líquidos de mantener constante su volumen bajo presión', answer: 'incompressibility', hint: 'No puede comprimirse sin cambiar de estado', level: 'C2', difficultyScore: 8 },
  { letter: 'I', definition: 'Proceso de construir significado mediante la tensión entre lo dicho y lo implícito', answer: 'implicature', hint: 'Lo que se comunica sin decirse explícitamente', level: 'C2', difficultyScore: 9 },
  { letter: 'I', definition: 'Que existe de forma independiente de cualquier observador o sistema de referencia', answer: 'invariant', hint: 'Que no cambia bajo transformaciones', level: 'C2', difficultyScore: 8 },
  { letter: 'I', definition: 'Proceso de construir conocimiento a partir de la interacción recursiva entre teoría y datos', answer: 'iteration', hint: 'Repetición con refinamiento progresivo', level: 'C2', difficultyScore: 7 },
  { letter: 'I', definition: 'Propiedad de un sistema de producir el mismo resultado independientemente del recorrido', answer: 'idempotence', hint: 'Aplicar dos veces produce el mismo resultado que una', level: 'C2', difficultyScore: 9 },
  { letter: 'I', definition: 'Proceso de hacer que algo sea comprensible situándolo en una red de dependencias mutuas', answer: 'interdependence', hint: 'Dependencia mutua entre elementos de un sistema', level: 'C2', difficultyScore: 8 },
  { letter: 'I', definition: 'Condición de ser el resultado necesario de una premisa sin excepciones posibles', answer: 'implication', hint: 'Lo que se sigue necesariamente de algo', level: 'C2', difficultyScore: 7 },
  { letter: 'I', definition: 'Proceso de hacer emerger propiedades globales de interacciones locales simples', answer: 'instantiation', hint: 'Hacer concreto lo abstracto en un caso específico', level: 'C2', difficultyScore: 8 },
  { letter: 'I', definition: 'Capacidad de un argumento de producir consecuencias que se retroalimentan', answer: 'isomorphism', hint: 'Correspondencia estructural exacta entre dos sistemas', level: 'C2', difficultyScore: 9 },
  { letter: 'I', definition: 'Propiedad de una entidad de persistir a través del tiempo manteniendo su identidad', answer: 'identity', hint: 'Lo que hace que algo sea lo que es', level: 'C2', difficultyScore: 7 },

  // ── J ───────────────────────────────────────────────────────────────────
  { letter: 'J', definition: 'Colocación deliberada de elementos opuestos para crear un contraste que revela significado', answer: 'juxtaposition', hint: 'Contrastar dos cosas opuestas para crear significado', level: 'C2', difficultyScore: 8 },
  { letter: 'J', definition: 'Proceso de evaluar algo aplicando criterios que trascienden el contexto particular', answer: 'jurisprudence', hint: 'La filosofía o teoría del derecho', level: 'C2', difficultyScore: 8 },
  { letter: 'J', definition: 'Condición en que una afirmación está fundada en razones que la hacen racionalmente aceptable', answer: 'justifiability', hint: 'La posibilidad de ser justificado racionalmente', level: 'C2', difficultyScore: 8 },
  { letter: 'J', definition: 'Proceso de identificar los puntos en que dos sistemas o teorías divergen de forma irreversible', answer: 'juncture', hint: 'El punto de bifurcación o separación', level: 'C2', difficultyScore: 7 },
  { letter: 'J', definition: 'Propiedad de una teoría de producir predicciones distintas según el dominio de aplicación', answer: 'jurisdiction', hint: 'El ámbito de validez de algo', level: 'C2', difficultyScore: 7 },
  { letter: 'J', definition: 'Proceso de hacer que dos perspectivas aparentemente incompatibles resulten complementarias', answer: 'janus-faced', hint: 'Con dos caras o perspectivas simultáneas', level: 'C2', difficultyScore: 9 },
  { letter: 'J', definition: 'Capacidad de mantener coherencia entre nivel teórico y nivel empírico de análisis', answer: 'jointly', hint: 'De forma conjunta e integrada', level: 'C2', difficultyScore: 7 },
  { letter: 'J', definition: 'Proceso de construir argumentos que resistan la crítica desde múltiples ángulos', answer: 'justification', hint: 'Dar razones sólidas para defender algo', level: 'C2', difficultyScore: 7 },
  { letter: 'J', definition: 'Que tiene estructura interna coherente aunque parezca contradictorio desde fuera', answer: 'judicious', hint: 'Que demuestra buen juicio y prudencia', level: 'C2', difficultyScore: 7 },
  { letter: 'J', definition: 'Proceso de situar algo en su contexto histórico y cultural para interpretarlo', answer: 'journalistic', hint: 'Relativo a la práctica periodística', level: 'C2', difficultyScore: 7 },

  // ── K ───────────────────────────────────────────────────────────────────
  { letter: 'K', definition: 'Relativo al karma, principio de causalidad moral en las filosofías orientales', answer: 'karmic', hint: 'Relativo a la ley de causa y efecto moral', level: 'C2', difficultyScore: 7 },
  { letter: 'K', definition: 'Proceso de construir conocimiento a partir de la confrontación con lo desconocido', answer: 'knowledge construction', hint: 'El proceso activo de construir el saber', level: 'C2', difficultyScore: 8 },
  { letter: 'K', definition: 'Propiedad de un sistema de reconocer y reparar sus propios errores', answer: 'knowledge-based', hint: 'Fundamentado en el conocimiento disponible', level: 'C2', difficultyScore: 7 },
  { letter: 'K', definition: 'Proceso de identificar qué se sabe, qué no se sabe y qué no se puede saber', answer: 'knowledge frontier', hint: 'Los límites actuales del conocimiento humano', level: 'C2', difficultyScore: 9 },
  { letter: 'K', definition: 'Capacidad de reconocer los propios límites cognitivos y epistémicos', answer: 'know-how', hint: 'El conocimiento práctico acumulado', level: 'C2', difficultyScore: 7 },
  { letter: 'K', definition: 'Proceso de hacer que algo sea explícito y formulable en lenguaje formal', answer: 'knowledge formalisation', hint: 'Convertir conocimiento tácito en explícito', level: 'C2', difficultyScore: 9 },
  { letter: 'K', definition: 'Que genera nuevo conocimiento a partir de la combinación de saberes existentes', answer: 'knowledge synthesis', hint: 'Síntesis de conocimientos de distintas fuentes', level: 'C2', difficultyScore: 8 },
  { letter: 'K', definition: 'Propiedad de un concepto de articular distintos niveles de análisis en uno', answer: 'keystone', hint: 'El elemento central que sostiene el resto', level: 'C2', difficultyScore: 7 },
  { letter: 'K', definition: 'Habilidad para discernir lo relevante de lo irrelevante en un contexto', answer: 'keen', hint: 'Agudo o perspicaz en el discernimiento', level: 'C2', difficultyScore: 6 },
  { letter: 'K', definition: 'Proceso de hacer que lo implícito en una práctica se vuelva explícito y articulable', answer: 'knowledge explication', hint: 'Hacer explícito el conocimiento tácito', level: 'C2', difficultyScore: 9 },

  // ── L ───────────────────────────────────────────────────────────────────
  { letter: 'L', definition: 'Proceso lingüístico por el que un concepto adquiere forma de unidad léxica estable', answer: 'lexicalization', hint: 'Cuando un concepto se convierte en palabra', level: 'C2', difficultyScore: 9 },
  { letter: 'L', definition: 'Proceso de construir argumentos que conectan premisas con conclusiones de forma válida', answer: 'logical entailment', hint: 'Lo que se sigue necesariamente de las premisas', level: 'C2', difficultyScore: 9 },
  { letter: 'L', definition: 'Propiedad de un sistema de producir el mismo resultado por caminos distintos', answer: 'latency', hint: 'El tiempo que tarda algo en manifestarse', level: 'C2', difficultyScore: 8 },
  { letter: 'L', definition: 'Proceso de hacer que algo sea comprensible reduciendo su opacidad conceptual', answer: 'lucidity', hint: 'La claridad conceptual de un argumento', level: 'C2', difficultyScore: 7 },
  { letter: 'L', definition: 'Que puede mantenerse en el tiempo sin agotar los recursos de los que depende', answer: 'long-term sustainability', hint: 'Que puede continuar indefinidamente', level: 'C2', difficultyScore: 7 },
  { letter: 'L', definition: 'Proceso de construir conocimiento situando al sujeto dentro del sistema que estudia', answer: 'lived experience', hint: 'La experiencia vivida en primera persona', level: 'C2', difficultyScore: 8 },
  { letter: 'L', definition: 'Capacidad de un sistema de aprender y adaptarse a partir de sus propios errores', answer: 'learning loop', hint: 'Ciclo de aprendizaje mediante la retroalimentación', level: 'C2', difficultyScore: 8 },
  { letter: 'L', definition: 'Que tiene múltiples interpretaciones posibles sin que ninguna sea definitiva', answer: 'liminal', hint: 'En el umbral entre dos estados o categorías', level: 'C2', difficultyScore: 8 },
  { letter: 'L', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones de posibilidad', answer: 'legitimation', hint: 'El proceso de hacer algo legítimo o válido', level: 'C2', difficultyScore: 8 },
  { letter: 'L', definition: 'Propiedad de una teoría de producir predicciones más precisas que las alternativas', answer: 'leverage', hint: 'Usar algo como palanca para multiplicar el efecto', level: 'C2', difficultyScore: 7 },

  // ── M ───────────────────────────────────────────────────────────────────
  { letter: 'M', definition: 'Transformación radical y completa de la forma, naturaleza o función de algo', answer: 'metamorphosis', hint: 'Cambio total de forma o naturaleza', level: 'C2', difficultyScore: 7 },
  { letter: 'M', definition: 'Proceso de construir modelos que capturen las propiedades esenciales de un fenómeno', answer: 'modelisation', hint: 'Construir un modelo abstracto de algo', level: 'C2', difficultyScore: 8 },
  { letter: 'M', definition: 'Propiedad de un sistema de funcionar en múltiples escalas temporales simultáneamente', answer: 'multiscalar', hint: 'Que opera en varias escalas a la vez', level: 'C2', difficultyScore: 9 },
  { letter: 'M', definition: 'Proceso de identificar los mecanismos que conectan la causa con el efecto', answer: 'mechanism', hint: 'El proceso causal que conecta A con B', level: 'C2', difficultyScore: 7 },
  { letter: 'M', definition: 'Que tiene significado en función de su posición en una red de relaciones', answer: 'meaning-making', hint: 'El proceso de construir significado', level: 'C2', difficultyScore: 8 },
  { letter: 'M', definition: 'Proceso de hacer que algo sea comprensible situándolo en un contexto histórico', answer: 'meta-narrative', hint: 'El relato que organiza otros relatos', level: 'C2', difficultyScore: 9 },
  { letter: 'M', definition: 'Capacidad de un sistema de cambiar su propia estructura en respuesta al entorno', answer: 'morphogenesis', hint: 'El proceso de generación de forma', level: 'C2', difficultyScore: 9 },
  { letter: 'M', definition: 'Proceso de construir conocimiento mediante la comparación sistemática de casos', answer: 'multi-case', hint: 'Que analiza múltiples casos comparativamente', level: 'C2', difficultyScore: 8 },
  { letter: 'M', definition: 'Que puede ser aplicado a múltiples dominios distintos sin perder su validez', answer: 'modularity', hint: 'Organización en módulos independientes', level: 'C2', difficultyScore: 8 },
  { letter: 'M', definition: 'Principio de que los conceptos se definen por sus relaciones mutuas y no de forma aislada', answer: 'mutual constitution', hint: 'Definirse mutuamente de forma recíproca', level: 'C2', difficultyScore: 9 },

  // ── N ───────────────────────────────────────────────────────────────────
  { letter: 'N', definition: 'Doctrina filosófica que niega la existencia de valores morales objetivos universales', answer: 'nihilism', hint: 'Negación de valores morales objetivos', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Proceso de hacer que algo que parecía natural se revele como construido socialmente', answer: 'naturalisation', hint: 'Hacer que algo construido parezca natural', level: 'C2', difficultyScore: 9 },
  { letter: 'N', definition: 'Que tiene en cuenta los matices y gradaciones que se pierden en las categorías binarias', answer: 'nuanced', hint: 'Con matices y detalles que enriquecen el análisis', level: 'C2', difficultyScore: 7 },
  { letter: 'N', definition: 'Propiedad de un sistema de producir comportamiento ordenado sin control centralizado', answer: 'non-linearity', hint: 'Efectos desproporcionados respecto a las causas', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Proceso de hacer que algo sea comprensible nombrandolo dentro de un sistema conceptual', answer: 'nomenclature', hint: 'El sistema de nombres de una disciplina', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Capacidad de un argumento de producir consecuencias inesperadas y no triviales', answer: 'non-trivial', hint: 'Que no es obvio ni se sigue sin esfuerzo', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Que establece criterios normativos para evaluar lo que es correcto o incorrecto', answer: 'normative', hint: 'Que prescribe cómo deben ser las cosas', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Proceso de construir conocimiento identificando las excepciones a las reglas generales', answer: 'negative case', hint: 'El caso que no confirma la hipótesis', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Propiedad de un sistema de producir los mismos resultados con distintos puntos de partida', answer: 'nesting', hint: 'Estructura jerárquica de elementos dentro de otros', level: 'C2', difficultyScore: 8 },
  { letter: 'N', definition: 'Proceso de hacer que algo sea comprensible articulando lo que está ausente', answer: 'negativity', hint: 'Definir algo por lo que no es', level: 'C2', difficultyScore: 8 },

  // ── O ───────────────────────────────────────────────────────────────────
  { letter: 'O', definition: 'Movimiento periódico de un sistema alrededor de una posición de equilibrio', answer: 'oscillation', hint: 'Movimiento de vaivén alrededor de un punto', level: 'C2', difficultyScore: 7 },
  { letter: 'O', definition: 'Proceso de hacer que algo sea comprensible identificando las condiciones que lo hacen posible', answer: 'ontology', hint: 'El estudio filosófico del ser y la existencia', level: 'C2', difficultyScore: 9 },
  { letter: 'O', definition: 'Que emerge de la interacción entre el observador y el sistema observado', answer: 'observer effect', hint: 'La observación que afecta lo observado', level: 'C2', difficultyScore: 8 },
  { letter: 'O', definition: 'Capacidad de un sistema de producir el mismo output con distintos inputs', answer: 'overdetermination', hint: 'Cuando múltiples causas producen el mismo efecto', level: 'C2', difficultyScore: 9 },
  { letter: 'O', definition: 'Propiedad de una teoría de explicar más fenómenos de los que predijo inicialmente', answer: 'overextension', hint: 'Extender un concepto más allá de su dominio original', level: 'C2', difficultyScore: 8 },
  { letter: 'O', definition: 'Proceso de hacer explícita la estructura jerárquica de las relaciones entre conceptos', answer: 'ordering', hint: 'Organizar algo según un criterio jerárquico', level: 'C2', difficultyScore: 7 },
  { letter: 'O', definition: 'Que tiene una estructura interna coherente que no depende de referencias externas', answer: 'organic', hint: 'Que se desarrolla de forma natural y coherente', level: 'C2', difficultyScore: 7 },
  { letter: 'O', definition: 'Proceso de construir conocimiento a partir de perspectivas aparentemente contradictorias', answer: 'oppositional', hint: 'Basado en la tensión entre opuestos', level: 'C2', difficultyScore: 8 },
  { letter: 'O', definition: 'Capacidad de un sistema de mantener su función a pesar de perturbaciones internas', answer: 'operational closure', hint: 'Cuando un sistema se mantiene autorreferencial', level: 'C2', difficultyScore: 9 },
  { letter: 'O', definition: 'Que abarca todos los aspectos de algo sin dejar ninguno fuera del análisis', answer: 'omnibus', hint: 'Que incluye todo sin excepción', level: 'C2', difficultyScore: 7 },

  // ── P ───────────────────────────────────────────────────────────────────
  { letter: 'P', definition: 'Filosofía que evalúa la verdad de las ideas por sus consecuencias prácticas', answer: 'pragmatism', hint: 'La verdad como lo que funciona en la práctica', level: 'C2', difficultyScore: 8 },
  { letter: 'P', definition: 'Proceso de construir significado a partir de la diferencia entre signos', answer: 'polysemy', hint: 'Múltiples significados de un mismo signo', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Propiedad de un sistema de producir patrones ordenados a partir del caos', answer: 'phase transition', hint: 'Cambio cualitativo de un estado a otro', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Proceso de identificar cómo el poder estructura el conocimiento y la verdad', answer: 'power-knowledge', hint: 'La relación entre poder y producción de verdad', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Capacidad de un sistema de generar propiedades nuevas que no estaban en sus componentes', answer: 'parsimony', hint: 'El principio de simplicidad en las explicaciones', level: 'C2', difficultyScore: 8 },
  { letter: 'P', definition: 'Que tiene en cuenta múltiples perspectivas sin privilegiar ninguna como definitiva', answer: 'perspectivism', hint: 'La verdad como perspectiva, no como absoluto', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones históricas', answer: 'problematisation', hint: 'Hacer problemático lo que parecía evidente', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Propiedad de un argumento de producir consecuencias que confirman sus propias premisas', answer: 'performativity', hint: 'El lenguaje que hace lo que dice', level: 'C2', difficultyScore: 9 },
  { letter: 'P', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones de posibilidad', answer: 'presupposition', hint: 'Lo que se da por sentado antes de argumentar', level: 'C2', difficultyScore: 8 },
  { letter: 'P', definition: 'Capacidad de una teoría de anticipar fenómenos no previstos en su formulación original', answer: 'predictive power', hint: 'La capacidad de predecir lo desconocido', level: 'C2', difficultyScore: 8 },

  // ── Q ───────────────────────────────────────────────────────────────────
  { letter: 'Q', definition: 'Correlación entre partículas subatómicas que persiste independientemente de la distancia', answer: 'quantum entanglement', hint: 'Correlación cuántica a distancia', level: 'C2', difficultyScore: 9 },
  { letter: 'Q', definition: 'Proceso de identificar qué fenómenos requieren explicación cuantitativa y cuáles no', answer: 'quantification', hint: 'Convertir lo cualitativo en medible', level: 'C2', difficultyScore: 8 },
  { letter: 'Q', definition: 'Que tiene múltiples aspectos que no pueden reducirse a una sola dimensión', answer: 'qualitative', hint: 'Relativo a la calidad y no a la cantidad', level: 'C2', difficultyScore: 7 },
  { letter: 'Q', definition: 'Proceso de cuestionar los fundamentos que se dan por sentados en una disciplina', answer: 'questioning assumptions', hint: 'Poner en duda lo que se acepta sin argumentación', level: 'C2', difficultyScore: 8 },
  { letter: 'Q', definition: 'Propiedad de un fenómeno de existir en estados múltiples simultáneamente', answer: 'quantum superposition', hint: 'Existir en múltiples estados al mismo tiempo', level: 'C2', difficultyScore: 9 },
  { letter: 'Q', definition: 'Proceso de identificar las condiciones que hacen posible un determinado tipo de pregunta', answer: 'query framework', hint: 'El marco que hace posible cierto tipo de preguntas', level: 'C2', difficultyScore: 9 },
  { letter: 'Q', definition: 'Capacidad de distinguir entre grados de certeza en afirmaciones sobre el mundo', answer: 'qualification', hint: 'Añadir reservas o condiciones a una afirmación', level: 'C2', difficultyScore: 8 },
  { letter: 'Q', definition: 'Proceso de hacer que algo sea comprensible articulando sus límites internos', answer: 'quasi-causal', hint: 'Relación que se parece a la causalidad sin serlo', level: 'C2', difficultyScore: 9 },
  { letter: 'Q', definition: 'Que tiene un carácter entre dos categorías sin pertenecer plenamente a ninguna', answer: 'quasi-empirical', hint: 'Que se parece a lo empírico sin serlo del todo', level: 'C2', difficultyScore: 9 },
  { letter: 'Q', definition: 'Proceso de explorar lo que una teoría no puede decir o no puede ver', answer: 'questioning limits', hint: 'Explorar los límites de lo que puede pensarse', level: 'C2', difficultyScore: 9 },

  // ── R ───────────────────────────────────────────────────────────────────
  { letter: 'R', definition: 'Postura filosófica que niega verdades absolutas independientes del contexto', answer: 'relativism', hint: 'La verdad es relativa al contexto', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Proceso de construir conocimiento situando al investigador dentro del fenómeno estudiado', answer: 'reflexivity', hint: 'El observador afecta y es afectado por lo que observa', level: 'C2', difficultyScore: 9 },
  { letter: 'R', definition: 'Propiedad de un sistema de producir los mismos resultados en distintas condiciones', answer: 'robustness', hint: 'La solidez de algo ante condiciones adversas', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Proceso de hacer que algo sea comprensible reconstruyendo su historia de desarrollo', answer: 'reconstruction', hint: 'Reconstruir algo para entenderlo', level: 'C2', difficultyScore: 7 },
  { letter: 'R', definition: 'Capacidad de un sistema de retroalimentarse para mantener o cambiar su estado', answer: 'recursion', hint: 'Un proceso que se aplica a sí mismo', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Que puede aplicarse a sí mismo sin contradicción ni paradoja', answer: 'reflexive', hint: 'Que se refiere o aplica a sí mismo', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Proceso de identificar las condiciones bajo las cuales algo deja de ser válido', answer: 'refutation', hint: 'Demostrar que algo es falso con evidencia', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Propiedad de un argumento de producir el mismo resultado cuando se aplica recursivamente', answer: 'recursive', hint: 'Que se define en términos de sí mismo', level: 'C2', difficultyScore: 8 },
  { letter: 'R', definition: 'Proceso de hacer que algo sea comprensible articulando su relación con otras cosas', answer: 'relational', hint: 'Definido por sus relaciones con otras entidades', level: 'C2', difficultyScore: 7 },
  { letter: 'R', definition: 'Capacidad de un sistema de recuperarse y adaptarse tras una perturbación grave', answer: 'resilience', hint: 'Recuperarse de adversidades graves', level: 'C2', difficultyScore: 7 },

  // ── S ───────────────────────────────────────────────────────────────────
  { letter: 'S', definition: 'Emergencia espontánea de orden en sistemas complejos sin control ni diseño externo', answer: 'self-organisation', hint: 'El orden que surge sin planificación central', level: 'C2', difficultyScore: 8 },
  { letter: 'S', definition: 'Proceso de construir significado a partir de la diferencia entre signos en un sistema', answer: 'semiotics', hint: 'El estudio de los signos y su significado', level: 'C2', difficultyScore: 9 },
  { letter: 'S', definition: 'Propiedad de un sistema de producir el mismo resultado independientemente del orden de las operaciones', answer: 'superposition', hint: 'Coexistencia de múltiples estados simultáneos', level: 'C2', difficultyScore: 9 },
  { letter: 'S', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones de existencia', answer: 'structuralism', hint: 'Las estructuras profundas generan los fenómenos', level: 'C2', difficultyScore: 9 },
  { letter: 'S', definition: 'Capacidad de una teoría de generar nuevas hipótesis en dominios no previstos', answer: 'scope conditions', hint: 'Las condiciones bajo las que algo es válido', level: 'C2', difficultyScore: 9 },
  { letter: 'S', definition: 'Que tiene en cuenta tanto la estructura como el proceso de generación de algo', answer: 'systemic', hint: 'Que pertenece a o afecta a todo el sistema', level: 'C2', difficultyScore: 7 },
  { letter: 'S', definition: 'Proceso de construir conocimiento integrando perspectivas irreconciliables', answer: 'synthesis', hint: 'Integrar lo opuesto en una visión más amplia', level: 'C2', difficultyScore: 7 },
  { letter: 'S', definition: 'Propiedad de un argumento de implicar más de lo que dice explícitamente', answer: 'subtext', hint: 'El significado implícito bajo el texto explícito', level: 'C2', difficultyScore: 8 },
  { letter: 'S', definition: 'Capacidad de un concepto de articular niveles de análisis aparentemente incompatibles', answer: 'scalar', hint: 'Relativo a la escala de análisis', level: 'C2', difficultyScore: 8 },
  { letter: 'S', definition: 'Proceso de hacer que algo sea comprensible articulando lo que lo hace singular', answer: 'singularity', hint: 'El punto donde las reglas habituales dejan de aplicarse', level: 'C2', difficultyScore: 9 },

  // ── T ───────────────────────────────────────────────────────────────────
  { letter: 'T', definition: 'Régimen de flujo caótico e irregular en sistemas dinámicos no lineales', answer: 'turbulence', hint: 'Caos dinámico en un fluido o sistema', level: 'C2', difficultyScore: 8 },
  { letter: 'T', definition: 'Proceso de construir conocimiento identificando los mecanismos generativos', answer: 'theorisation', hint: 'El proceso de construir una teoría', level: 'C2', difficultyScore: 8 },
  { letter: 'T', definition: 'Que transciende los límites disciplinares articulando perspectivas de múltiples campos', answer: 'transdisciplinary', hint: 'Que va más allá de las fronteras disciplinares', level: 'C2', difficultyScore: 8 },
  { letter: 'T', definition: 'Propiedad de un sistema de producir el mismo resultado con distintas combinaciones de elementos', answer: 'trade-off', hint: 'Sacrificar algo para obtener otra cosa', level: 'C2', difficultyScore: 7 },
  { letter: 'T', definition: 'Proceso de hacer que algo sea comprensible articulando su posición en una red de relaciones', answer: 'topology', hint: 'El estudio de las propiedades invariantes bajo transformaciones', level: 'C2', difficultyScore: 9 },
  { letter: 'T', definition: 'Capacidad de un sistema de transformarse sin perder su identidad fundamental', answer: 'transformation', hint: 'Cambio profundo que mantiene la identidad esencial', level: 'C2', difficultyScore: 7 },
  { letter: 'T', definition: 'Que tiene en cuenta las condiciones históricas que hacen posible algo', answer: 'temporal', hint: 'Relativo al tiempo y su dimensión histórica', level: 'C2', difficultyScore: 7 },
  { letter: 'T', definition: 'Proceso de construir conocimiento articulando las tensiones que no pueden resolverse', answer: 'tension', hint: 'Fuerza que mantiene dos opuestos en equilibrio', level: 'C2', difficultyScore: 7 },
  { letter: 'T', definition: 'Propiedad de un argumento de ser cierto en todos los mundos posibles', answer: 'tautology', hint: 'Afirmación necesariamente verdadera por su forma', level: 'C2', difficultyScore: 8 },
  { letter: 'T', definition: 'Capacidad de ver patrones que otros no ven a partir de los mismos datos', answer: 'tacit knowledge', hint: 'El conocimiento que no puede articularse plenamente', level: 'C2', difficultyScore: 9 },

  // ── U ───────────────────────────────────────────────────────────────────
  { letter: 'U', definition: 'Presencia simultánea en todos los contextos y lugares sin restricción espacial', answer: 'ubiquity', hint: 'Estar en todas partes al mismo tiempo', level: 'C2', difficultyScore: 7 },
  { letter: 'U', definition: 'Proceso de construir conocimiento identificando lo que es común a todos los casos', answer: 'universalisability', hint: 'La propiedad de ser válido en todos los casos', level: 'C2', difficultyScore: 9 },
  { letter: 'U', definition: 'Que no puede ser capturado por ninguna representación simbólica o lingüística', answer: 'unspeakable', hint: 'Lo que está más allá del lenguaje', level: 'C2', difficultyScore: 8 },
  { letter: 'U', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones límite', answer: 'underdetermination', hint: 'Cuando los datos no determinan una única teoría', level: 'C2', difficultyScore: 9 },
  { letter: 'U', definition: 'Propiedad de un sistema de producir resultados distintos en condiciones iniciales similares', answer: 'unpredictability', hint: 'Imposibilidad de predecir el comportamiento futuro', level: 'C2', difficultyScore: 8 },
  { letter: 'U', definition: 'Capacidad de un argumento de articular lo que permanece cuando todo lo demás cambia', answer: 'underpinning', hint: 'El fundamento que sostiene todo lo demás', level: 'C2', difficultyScore: 8 },
  { letter: 'U', definition: 'Que tiene en cuenta la perspectiva del agente que vive el fenómeno desde dentro', answer: 'understanding', hint: 'Comprensión desde la perspectiva interna', level: 'C2', difficultyScore: 7 },
  { letter: 'U', definition: 'Proceso de hacer que algo sea comprensible articulando su carácter único e irrepetible', answer: 'uniqueness', hint: 'Lo que hace que algo sea singular e irrepetible', level: 'C2', difficultyScore: 7 },
  { letter: 'U', definition: 'Que no puede ser reducido a sus componentes sin perder sus propiedades esenciales', answer: 'unity', hint: 'La integración de partes en un todo coherente', level: 'C2', difficultyScore: 7 },
  { letter: 'U', definition: 'Proceso de hacer explícitas las condiciones que permiten que algo sea inteligible', answer: 'unpacking', hint: 'Desarrollar las implicaciones de algo', level: 'C2', difficultyScore: 8 },

  // ── V ───────────────────────────────────────────────────────────────────
  { letter: 'V', definition: 'Conjunto de palabras y expresiones de un idioma o campo de conocimiento', answer: 'vocabulary', hint: 'El léxico de un idioma o disciplina', level: 'C2', difficultyScore: 5 },
  { letter: 'V', definition: 'Propiedad de una afirmación de poder ser evaluada como verdadera o falsa', answer: 'verifiability', hint: 'La posibilidad de ser verificado empíricamente', level: 'C2', difficultyScore: 8 },
  { letter: 'V', definition: 'Proceso de construir conocimiento articulando las tensiones entre posiciones opuestas', answer: 'valence', hint: 'La fuerza o capacidad de combinación de algo', level: 'C2', difficultyScore: 8 },
  { letter: 'V', definition: 'Que tiene múltiples valores posibles sin que ninguno sea definitivo ni privilegiado', answer: 'variability', hint: 'La capacidad de variar dentro de un rango', level: 'C2', difficultyScore: 7 },
  { letter: 'V', definition: 'Capacidad de un concepto de articular distintos niveles de análisis en uno coherente', answer: 'versatility', hint: 'La capacidad de adaptarse a múltiples usos', level: 'C2', difficultyScore: 7 },
  { letter: 'V', definition: 'Proceso de hacer que algo sea comprensible a través de múltiples perspectivas simultáneas', answer: 'viewpoint pluralism', hint: 'Considerar múltiples perspectivas como válidas', level: 'C2', difficultyScore: 8 },
  { letter: 'V', definition: 'Propiedad de un sistema de ser perturbado sin perder su capacidad funcional', answer: 'viability', hint: 'La capacidad de funcionar y mantenerse', level: 'C2', difficultyScore: 7 },
  { letter: 'V', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones de validez', answer: 'validity', hint: 'La propiedad de ser válido en su contexto', level: 'C2', difficultyScore: 7 },
  { letter: 'V', definition: 'Que puede ser observado y medido de forma independiente del observador', answer: 'verifiable', hint: 'Que puede comprobarse con independencia', level: 'C2', difficultyScore: 7 },
  { letter: 'V', definition: 'Capacidad de articular lo que está implícito en una práctica sin que sus actores lo sepan', answer: 'virtualisation', hint: 'Hacer virtual o potencial lo que era real', level: 'C2', difficultyScore: 9 },

  // ── W ───────────────────────────────────────────────────────────────────
  { letter: 'W', definition: 'Perspectiva filosófica germánica que organiza la totalidad de la experiencia del mundo', answer: 'weltanschauung', hint: 'Cosmovisión total del mundo en alemán', level: 'C2', difficultyScore: 9 },
  { letter: 'W', definition: 'Proceso de construir conocimiento articulando lo que permanece invariante', answer: 'worldview', hint: 'La perspectiva total desde la que se ve el mundo', level: 'C2', difficultyScore: 6 },
  { letter: 'W', definition: 'Propiedad de un argumento de resistir la crítica sin necesidad de modificaciones', answer: 'watertight', hint: 'Sin fisuras ni puntos débiles posibles', level: 'C2', difficultyScore: 7 },
  { letter: 'W', definition: 'Proceso de hacer que algo sea comprensible articulando sus condiciones de emergencia', answer: 'web of relations', hint: 'La red de relaciones que constituye algo', level: 'C2', difficultyScore: 8 },
  { letter: 'W', definition: 'Capacidad de sostener posiciones aparentemente contradictorias sin colapsar en una', answer: 'withstanding', hint: 'Resistir la presión sin ceder', level: 'C2', difficultyScore: 7 },
  { letter: 'W', definition: 'Que tiene en cuenta la totalidad de un sistema sin reducirlo a ninguna de sus partes', answer: 'whole-system', hint: 'Que considera el sistema en su totalidad', level: 'C2', difficultyScore: 8 },
  { letter: 'W', definition: 'Proceso de construir conocimiento articulando lo que vincula los distintos niveles de análisis', answer: 'weaving', hint: 'Entrelazar hilos distintos en un patrón coherente', level: 'C2', difficultyScore: 7 },
  { letter: 'W', definition: 'Propiedad de un fenómeno de mostrar la misma estructura a distintas escalas', answer: 'wavelet', hint: 'Oscilación localizada en tiempo y frecuencia', level: 'C2', difficultyScore: 9 },
  { letter: 'W', definition: 'Capacidad de un argumento de articular lo que está más allá de los datos disponibles', answer: 'warranted assertion', hint: 'Afirmación respaldada por razones suficientes', level: 'C2', difficultyScore: 9 },
  { letter: 'W', definition: 'Proceso de identificar las condiciones que hacen que algo sea inteligible para alguien', answer: 'working hypothesis', hint: 'Hipótesis provisional de trabajo', level: 'C2', difficultyScore: 8 },

  // ── X ───────────────────────────────────────────────────────────────────
  { letter: 'X', definition: 'Estudio científico hipotético de formas de vida de origen extraterrestre', answer: 'xenobiology', hint: 'Biología de organismos de otros planetas', level: 'C2', difficultyScore: 8 },
  { letter: 'X', definition: 'Miedo irracional y sistemático hacia personas o culturas extranjeras', answer: 'xenophobia', hint: 'Rechazo o miedo al extranjero', level: 'C2', difficultyScore: 7 },
  { letter: 'X', definition: 'Proceso de reproducir documentos mediante electricidad estática y luz láser', answer: 'xerography', hint: 'Tecnología de las fotocopiadoras modernas', level: 'C2', difficultyScore: 8 },
  { letter: 'X', definition: 'Trasplante de células o tejidos entre organismos de especies biológicamente distintas', answer: 'xenotransplantation', hint: 'Trasplante entre especies biológicas distintas', level: 'C2', difficultyScore: 9 },
  { letter: 'X', definition: 'Atracción intelectual o cultural hacia lo ajeno, extranjero o desconocido', answer: 'xenophilia', hint: 'Fascinación por lo extranjero o diferente', level: 'C2', difficultyScore: 8 },
  { letter: 'X', definition: 'Sistema de escritura jeroglífica propio de culturas antiguas no occidentales', answer: 'xenoglyph', hint: 'Escritura simbólica de culturas ajenas', level: 'C2', difficultyScore: 9 },
  { letter: 'X', definition: 'Instrumento de percusión con láminas ordenadas cromáticamente que se toca con mazas', answer: 'xylophone', hint: 'Instrumento de láminas de madera', level: 'C2', difficultyScore: 6 },
  { letter: 'X', definition: 'Técnica médica de imagen que usa radiación ionizante para visualizar estructuras internas', answer: 'x-ray', hint: 'Radiografía que usa rayos ionizantes', level: 'C2', difficultyScore: 5 },

  // ── Y ───────────────────────────────────────────────────────────────────
  { letter: 'Y', definition: 'Unidad de medida de información digital equivalente a diez elevado a veinticuatro bytes', answer: 'yottabyte', hint: 'La mayor unidad estándar de almacenamiento digital', level: 'C2', difficultyScore: 8 },
  { letter: 'Y', definition: 'Producir un resultado como consecuencia necesaria de un proceso o condición', answer: 'yield', hint: 'Dar como resultado o producir algo', level: 'C2', difficultyScore: 6 },
  { letter: 'Y', definition: 'Desear algo con una intensidad que trasciende la racionalidad ordinaria', answer: 'yearn', hint: 'Anhelar algo profundamente', level: 'C2', difficultyScore: 6 },
  { letter: 'Y', definition: 'Tiempos pasados remotos e idealizados por la memoria colectiva de una cultura', answer: 'yesteryear', hint: 'El pasado remoto idealizado', level: 'C2', difficultyScore: 7 },
  { letter: 'Y', definition: 'Práctica de origen hindú que integra cuerpo, mente y espíritu mediante disciplina física', answer: 'yoga', hint: 'Disciplina de meditación y posturas', level: 'C2', difficultyScore: 5 },
  { letter: 'Y', definition: 'Embarcación de lujo equipada para la navegación oceánica de largo recorrido', answer: 'yacht', hint: 'Barco de lujo para navegación oceánica', level: 'C2', difficultyScore: 5 },
  { letter: 'Y', definition: 'Pronombre de segunda persona en inglés que no distingue singular de plural', answer: 'you', hint: 'Tú o vosotros, sin distinción', level: 'C2', difficultyScore: 3 },
  { letter: 'Y', definition: 'Capacidad de ceder ante la presión manteniendo la coherencia esencial', answer: 'yielding', hint: 'Ceder sin perder la posición fundamental', level: 'C2', difficultyScore: 7 },
  { letter: 'Y', definition: 'Respuesta afirmativa en inglés que connota entusiasmo o énfasis', answer: 'yes', hint: 'Afirmación enfática en inglés', level: 'C2', difficultyScore: 3 },
  { letter: 'Y', definition: 'Que tiene poca experiencia acumulada en un campo, independientemente de la edad biológica', answer: 'young', hint: 'Con poca experiencia o trayectoria', level: 'C2', difficultyScore: 4 },

  // ── Z ───────────────────────────────────────────────────────────────────
  { letter: 'Z', definition: 'Rama de la biología que estudia los animales, su morfología y comportamiento', answer: 'zoology', hint: 'La ciencia que estudia el reino animal', level: 'C2', difficultyScore: 6 },
  { letter: 'Z', definition: 'Punto más alto o culminante que algo puede alcanzar en su trayectoria', answer: 'zenith', hint: 'El punto más elevado posible', level: 'C2', difficultyScore: 6 },
  { letter: 'Z', definition: 'Gran fervor y dedicación que alguien pone al servicio de una causa o ideal', answer: 'zeal', hint: 'Pasión intensa por una causa', level: 'C2', difficultyScore: 6 },
  { letter: 'Z', definition: 'El número de origen o punto de partida desde el que se mide cualquier escala', answer: 'zero', hint: 'El punto de partida o valor nulo', level: 'C2', difficultyScore: 4 },
  { letter: 'Z', definition: 'Situación en que la ganancia de una parte implica necesariamente la pérdida de otra', answer: 'zero-sum', hint: 'Lo que gana uno lo pierde el otro', level: 'C2', difficultyScore: 7 },
  { letter: 'Z', definition: 'División sistemática de un territorio en áreas con funciones y normas distintas', answer: 'zoning', hint: 'Organización planificada del territorio', level: 'C2', difficultyScore: 6 },
  { letter: 'Z', definition: 'Persona con una devoción extrema y casi fanática hacia una causa o ideología', answer: 'zealot', hint: 'Fanático radical de una causa', level: 'C2', difficultyScore: 7 },
  { letter: 'Z', definition: 'Herramienta óptica o digital para ampliar o reducir la escala de visualización', answer: 'zoom', hint: 'Acercar o alejar lo que se observa', level: 'C2', difficultyScore: 4 },
  { letter: 'Z', definition: 'Estado de vivacidad, energía y entusiasmo que impulsa a comprometerse con la vida', answer: 'zest', hint: 'Energía vital y entusiasmo por vivir', level: 'C2', difficultyScore: 7 },
  { letter: 'Z', definition: 'Cierre metálico de prendas de ropa compuesto por dientes entrelazados', answer: 'zip', hint: 'La cremallera de una prenda', level: 'C2', difficultyScore: 3 },
]

async function main() {
  console.log('🌱 Seeding C2 words...')

  await prisma.word.deleteMany({ where: { level: 'C2' } })
  console.log('  Cleared C2 words')

  const created = await prisma.word.createMany({ data: words })
  console.log(`  Created ${created.count} words`)

  const invalid = words.filter(
    (w) => !w.answer.toLowerCase().startsWith(w.letter.toLowerCase())
  )
  if (invalid.length > 0) {
    console.warn('\n⚠️  Words where answer does NOT start with its letter:')
    invalid.forEach((w) => console.warn(`   ${w.letter} → "${w.answer}"`))
  } else {
    console.log('  ✓ All answers start with their correct letter')
  }

  console.log('\n  Words per letter:')
  ALPHABET.forEach((l) => {
    const count = words.filter((w) => w.letter === l).length
    console.log(`    ${l}: ${count} ${count < 8 ? '⚠️  NEEDS MORE' : '✓'}`)
  })

  console.log('\n✅ C2 seed complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
