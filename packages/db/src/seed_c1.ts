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
  { letter: 'A', definition: 'Proceso de adaptar una idea o teoría abstracta a una situación concreta', answer: 'application', hint: 'Poner algo en práctica', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Tendencia psicológica inconsciente a atribuir causas de los eventos a factores externos', answer: 'attribution', hint: 'Psicología social cognitiva', level: 'C1', difficultyScore: 6 },
  { letter: 'A', definition: 'Capacidad de absorber y recuperarse de impactos o adversidades', answer: 'absorb', hint: 'Asimilar o integrar algo difícil', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Proceso de reconciliar posiciones opuestas en una síntesis superior', answer: 'arbitrate', hint: 'Mediar entre dos posturas opuestas', level: 'C1', difficultyScore: 6 },
  { letter: 'A', definition: 'Que tiene múltiples interpretaciones posibles y no una sola respuesta', answer: 'ambiguous', hint: 'Que puede entenderse de varias formas', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Principio filosófico según el cual el conocimiento proviene de la experiencia', answer: 'apriori', hint: 'Conocimiento anterior a la experiencia', level: 'C1', difficultyScore: 6 },
  { letter: 'A', definition: 'Proceso de descomponer un argumento en sus partes para evaluar su validez', answer: 'analyse', hint: 'Examinar algo en detalle', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Hacer que algo sea más preciso y exacto eliminando imprecisiones', answer: 'articulate', hint: 'Expresar algo con claridad y precisión', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Proceso de hacer que algo sea evidente sin necesidad de explicación explícita', answer: 'apparent', hint: 'Que parece obvio o claro', level: 'C1', difficultyScore: 5 },
  { letter: 'A', definition: 'Condición en la que algo es válido o aplicable bajo ciertas circunstancias', answer: 'applicable', hint: 'Que se puede aplicar en un contexto', level: 'C1', difficultyScore: 5 },

  // ── B ───────────────────────────────────────────────────────────────────
  { letter: 'B', definition: 'Tendencia cognitiva sistemática que distorsiona el juicio de forma inconsciente', answer: 'bias', hint: 'Prejuicio o sesgo inconsciente', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Proceso de fundamentar una teoría en evidencias empíricas sólidas', answer: 'back up', hint: 'Phrasal verb: respaldar con evidencias', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Punto de partida teórico desde el que se construye un argumento', answer: 'basis', hint: 'La base o fundamento de algo', level: 'C1', difficultyScore: 4 },
  { letter: 'B', definition: 'Proceso de identificar los límites conceptuales de un fenómeno', answer: 'boundary', hint: 'Los límites de un concepto o campo', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Capacidad de un sistema de mantener el equilibrio ante perturbaciones', answer: 'buffering', hint: 'Absorber impactos para mantener estabilidad', level: 'C1', difficultyScore: 6 },
  { letter: 'B', definition: 'Argumento que refuta una tesis demostrando sus consecuencias absurdas', answer: 'breakdown', hint: 'Descomposición o análisis detallado', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Proceso mental de integrar nueva información en esquemas existentes', answer: 'blending', hint: 'Combinar elementos distintos en uno', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Nivel de certeza que un científico puede atribuir a sus resultados', answer: 'benchmark', hint: 'Punto de referencia para medir resultados', level: 'C1', difficultyScore: 5 },
  { letter: 'B', definition: 'Proceso de examinar algo de forma imparcial y sin juicios previos', answer: 'bracketing', hint: 'Suspender juicios previos al analizar', level: 'C1', difficultyScore: 6 },
  { letter: 'B', definition: 'Que puede demostrarse o refutarse mediante evidencia empírica', answer: 'binary', hint: 'De dos valores posibles únicamente', level: 'C1', difficultyScore: 5 },

  // ── C ───────────────────────────────────────────────────────────────────
  { letter: 'C', definition: 'Proceso neurológico de fijar recuerdos en la memoria a largo plazo', answer: 'consolidation', hint: 'Fijar la memoria durante el sueño', level: 'C1', difficultyScore: 6 },
  { letter: 'C', definition: 'Relación de causa y efecto entre dos fenómenos distintos', answer: 'causality', hint: 'La relación causa-efecto entre cosas', level: 'C1', difficultyScore: 6 },
  { letter: 'C', definition: 'Proceso de refinar una idea o teoría mediante sucesivas revisiones', answer: 'crystallise', hint: 'Dar forma clara y definitiva a algo', level: 'C1', difficultyScore: 6 },
  { letter: 'C', definition: 'Que contiene más información de la que es estrictamente necesaria', answer: 'convoluted', hint: 'Demasiado complicado o enrevesado', level: 'C1', difficultyScore: 6 },
  { letter: 'C', definition: 'Proceso de llegar a una conclusión a partir de premisas generales', answer: 'conclude', hint: 'Sacar una conclusión de un razonamiento', level: 'C1', difficultyScore: 5 },
  { letter: 'C', definition: 'Principio filosófico de que toda realidad es relativa al observador', answer: 'constructivism', hint: 'La realidad se construye, no se descubre', level: 'C1', difficultyScore: 7 },
  { letter: 'C', definition: 'Proceso de verificar la coherencia interna de un argumento', answer: 'cross-check', hint: 'Verificar algo contrastando fuentes', level: 'C1', difficultyScore: 5 },
  { letter: 'C', definition: 'Acción de desafiar una idea establecida con argumentos contrarios', answer: 'contestation', hint: 'Cuestionar o disputar algo establecido', level: 'C1', difficultyScore: 6 },
  { letter: 'C', definition: 'Capacidad de un argumento para resistir la crítica y seguir siendo válido', answer: 'cogency', hint: 'La solidez lógica de un argumento', level: 'C1', difficultyScore: 7 },
  { letter: 'C', definition: 'Que aparece en contextos muy diferentes manteniendo sus características esenciales', answer: 'contextual', hint: 'Que depende del contexto en que aparece', level: 'C1', difficultyScore: 5 },

  // ── D ───────────────────────────────────────────────────────────────────
  { letter: 'D', definition: 'Proceso de extraer conclusiones necesarias a partir de premisas lógicas', answer: 'deduction', hint: 'Razonamiento lógico de lo general a lo particular', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Proceso filosófico de avanzar mediante contradicción y síntesis', answer: 'dialectics', hint: 'El método filosófico de tesis-antítesis-síntesis', level: 'C1', difficultyScore: 7 },
  { letter: 'D', definition: 'Capacidad de distinguir matices sutiles entre conceptos parecidos', answer: 'discernment', hint: 'Capacidad de hacer distinciones finas', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Proceso de reducir algo a sus elementos más fundamentales', answer: 'distil', hint: 'Extraer lo esencial de algo', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Que niega o contradice lo que se ha afirmado previamente', answer: 'disconfirm', hint: 'Contradecir o refutar una afirmación', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Proceso de identificar qué variables son relevantes para un fenómeno', answer: 'delineate', hint: 'Trazar los límites de algo con precisión', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Propiedad de un argumento que lo hace susceptible de ser refutado', answer: 'defeasible', hint: 'Que puede ser refutado con evidencia contraria', level: 'C1', difficultyScore: 7 },
  { letter: 'D', definition: 'Proceso de separar variables que actúan de forma conjunta en un fenómeno', answer: 'disentangle', hint: 'Separar lo que está mezclado o confundido', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Tendencia a simplificar en exceso una realidad compleja y multifacética', answer: 'dualistic', hint: 'Ver todo en términos de dos opciones', level: 'C1', difficultyScore: 6 },
  { letter: 'D', definition: 'Capacidad de mantener varias hipótesis activas sin decantarse por ninguna', answer: 'deferral', hint: 'Posponer una decisión hasta tener más datos', level: 'C1', difficultyScore: 6 },

  // ── E ───────────────────────────────────────────────────────────────────
  { letter: 'E', definition: 'Basado exclusivamente en la observación y la experiencia medible', answer: 'empirical', hint: 'Fundamentado en datos y experiencia', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Proceso de sacar un principio general a partir de casos particulares', answer: 'extrapolate', hint: 'Extender conclusiones más allá de los datos', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Rama de la filosofía que estudia la naturaleza y los límites del conocimiento', answer: 'epistemology', hint: 'Filosofía del conocimiento', level: 'C1', difficultyScore: 7 },
  { letter: 'E', definition: 'Propiedad de un sistema de producir más resultado del que se invierte', answer: 'efficiency', hint: 'Relación óptima entre recursos e resultados', level: 'C1', difficultyScore: 5 },
  { letter: 'E', definition: 'Proceso de comprender algo poniéndose en el lugar del otro', answer: 'empathy', hint: 'Capacidad de sentir lo que siente otro', level: 'C1', difficultyScore: 5 },
  { letter: 'E', definition: 'Propiedad de un concepto de ser válido en todos los contextos posibles', answer: 'exhaustive', hint: 'Que cubre todas las posibilidades', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Proceso de hacer que algo surja de forma natural a partir de sus componentes', answer: 'emergence', hint: 'Cuando el todo es más que la suma de las partes', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Capacidad de un sistema para adaptarse y recuperarse de perturbaciones', answer: 'elasticity', hint: 'La capacidad de volver al estado original', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Proceso de usar la experiencia práctica para refinar una teoría', answer: 'experiential', hint: 'Basado en la experiencia directa', level: 'C1', difficultyScore: 6 },
  { letter: 'E', definition: 'Condición por la cual dos teorías explican los mismos datos de forma diferente', answer: 'equivalence', hint: 'Cuando dos cosas son igualmente válidas', level: 'C1', difficultyScore: 6 },

  // ── F ───────────────────────────────────────────────────────────────────
  { letter: 'F', definition: 'Punto central de atención o concentración máxima de algo', answer: 'focal point', hint: 'El centro de atención principal', level: 'C1', difficultyScore: 5 },
  { letter: 'F', definition: 'Proceso de crear un marco conceptual para analizar un problema', answer: 'framing', hint: 'Dar un marco o encuadre a algo', level: 'C1', difficultyScore: 6 },
  { letter: 'F', definition: 'Propiedad de un sistema de comportarse de forma predecible', answer: 'functionality', hint: 'La capacidad de cumplir su función', level: 'C1', difficultyScore: 5 },
  { letter: 'F', definition: 'Proceso de identificar los factores que favorecen un determinado resultado', answer: 'facilitation', hint: 'Hacer que algo sea más fácil de conseguir', level: 'C1', difficultyScore: 6 },
  { letter: 'F', definition: 'Condición de ser auténtico y genuino sin pretensiones ni artificios', answer: 'forthright', hint: 'Directo y sincero sin rodeos', level: 'C1', difficultyScore: 6 },
  { letter: 'F', definition: 'Proceso de identificar la estructura subyacente de un fenómeno complejo', answer: 'framework', hint: 'La estructura conceptual que organiza algo', level: 'C1', difficultyScore: 5 },
  { letter: 'F', definition: 'Tendencia de los sistemas complejos a generar patrones inesperados', answer: 'fluctuation', hint: 'Variación irregular e impredecible', level: 'C1', difficultyScore: 6 },
  { letter: 'F', definition: 'Proceso de verificar una hipótesis intentando demostrar que es falsa', answer: 'falsification', hint: 'El método de Popper para validar teorías', level: 'C1', difficultyScore: 7 },
  { letter: 'F', definition: 'Capacidad de un argumento para generar nuevas preguntas e hipótesis', answer: 'fecundity', hint: 'La fertilidad intelectual de una idea', level: 'C1', difficultyScore: 7 },
  { letter: 'F', definition: 'Que está basado en hechos verificables y no en opiniones subjetivas', answer: 'factual', hint: 'Basado en hechos comprobables', level: 'C1', difficultyScore: 5 },

  // ── G ───────────────────────────────────────────────────────────────────
  { letter: 'G', definition: 'Percepción del conjunto como algo más significativo que la suma de sus partes', answer: 'gestalt', hint: 'El todo es mayor que sus partes', level: 'C1', difficultyScore: 7 },
  { letter: 'G', definition: 'Proceso de hacer generalizaciones válidas a partir de casos específicos', answer: 'generalisation', hint: 'Pasar de lo particular a lo general', level: 'C1', difficultyScore: 6 },
  { letter: 'G', definition: 'Principio de economía del pensamiento que prefiere las explicaciones más simples', answer: 'groundbreaking', hint: 'Innovador y sin precedentes', level: 'C1', difficultyScore: 6 },
  { letter: 'G', definition: 'Proceso de evaluar algo con criterios rigurosos y sistemáticos', answer: 'grading', hint: 'Evaluar o calificar algo', level: 'C1', difficultyScore: 5 },
  { letter: 'G', definition: 'Principio de que todo fenómeno tiene una causa suficiente que lo explica', answer: 'grounding', hint: 'Fundar algo en una base sólida', level: 'C1', difficultyScore: 6 },
  { letter: 'G', definition: 'Proceso de identificar los patrones que se repiten en un conjunto de datos', answer: 'granularity', hint: 'El nivel de detalle de un análisis', level: 'C1', difficultyScore: 6 },
  { letter: 'G', definition: 'Condición en la que algo tiene validez universal más allá del contexto local', answer: 'global', hint: 'De alcance mundial o universal', level: 'C1', difficultyScore: 4 },
  { letter: 'G', definition: 'Proceso de construir conocimiento de forma colaborativa y acumulativa', answer: 'gradual', hint: 'Que avanza paso a paso', level: 'C1', difficultyScore: 5 },
  { letter: 'G', definition: 'Capacidad de reconocer y articular los propios límites del conocimiento', answer: 'grasp', hint: 'Comprender algo en profundidad', level: 'C1', difficultyScore: 5 },
  { letter: 'G', definition: 'Proceso de hacer que algo abstracto sea comprensible mediante ejemplos', answer: 'ground', hint: 'Anclar una idea abstracta en la realidad', level: 'C1', difficultyScore: 5 },

  // ── H ───────────────────────────────────────────────────────────────────
  { letter: 'H', definition: 'Método de resolución que usa atajos mentales prácticos para decidir', answer: 'heuristic', hint: 'Regla práctica para tomar decisiones', level: 'C1', difficultyScore: 7 },
  { letter: 'H', definition: 'Proceso de interpretar textos o fenómenos para extraer su significado profundo', answer: 'hermeneutics', hint: 'La ciencia de la interpretación de textos', level: 'C1', difficultyScore: 7 },
  { letter: 'H', definition: 'Suposición de partida que guía una investigación antes de tener datos', answer: 'hypothesis', hint: 'Proposición a verificar experimentalmente', level: 'C1', difficultyScore: 6 },
  { letter: 'H', definition: 'Proceso de integrar perspectivas múltiples en una visión coherente', answer: 'holistic', hint: 'Que considera el todo y no solo las partes', level: 'C1', difficultyScore: 6 },
  { letter: 'H', definition: 'Que carece de contradicción interna y cuyos elementos encajan entre sí', answer: 'harmonious', hint: 'Sin contradicciones internas', level: 'C1', difficultyScore: 5 },
  { letter: 'H', definition: 'Proceso de hacer que dos sistemas o teorías funcionen de forma compatible', answer: 'harmonise', hint: 'Hacer que dos cosas sean compatibles', level: 'C1', difficultyScore: 6 },
  { letter: 'H', definition: 'Propiedad de un fenómeno de mantener sus características a lo largo del tiempo', answer: 'historical', hint: 'Relativo al desarrollo en el tiempo', level: 'C1', difficultyScore: 5 },
  { letter: 'H', definition: 'Proceso de identificar lo que está implícito en un texto o argumento', answer: 'hermeneutic', hint: 'Relativo a la interpretación de significados', level: 'C1', difficultyScore: 7 },
  { letter: 'H', definition: 'Capacidad de mantener una posición coherente ante objeciones sucesivas', answer: 'hold up', hint: 'Phrasal verb: resistir el escrutinio', level: 'C1', difficultyScore: 5 },
  { letter: 'H', definition: 'Principio metodológico de partir siempre de los datos observables', answer: 'hypothetical', hint: 'Basado en supuestos no comprobados', level: 'C1', difficultyScore: 6 },

  // ── I ───────────────────────────────────────────────────────────────────
  { letter: 'I', definition: 'Que no puede ser revocado ni deshecho bajo ninguna circunstancia', answer: 'irrevocable', hint: 'Sin posibilidad de vuelta atrás', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Proceso de sacar conclusiones a partir de indicios o evidencias parciales', answer: 'inference', hint: 'Deducir algo no explícito a partir de pistas', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Propiedad de un argumento de ser lógicamente válido y bien formado', answer: 'integrity', hint: 'Coherencia y solidez interna de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'I', definition: 'Proceso de combinar perspectivas distintas en una síntesis coherente', answer: 'integration', hint: 'Unir distintos elementos en un todo', level: 'C1', difficultyScore: 5 },
  { letter: 'I', definition: 'Que resulta al revés de lo que se esperaba o buscaba intencionalmente', answer: 'ironic', hint: 'Que contradice las expectativas de forma llamativa', level: 'C1', difficultyScore: 5 },
  { letter: 'I', definition: 'Proceso de llegar a una teoría general a partir de observaciones particulares', answer: 'induction', hint: 'Razonamiento de lo particular a lo general', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Capacidad de un sistema de mantenerse estable ante cambios externos', answer: 'inertia', hint: 'Tendencia a resistir el cambio', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Que está íntimamente relacionado y no puede separarse sin perder su sentido', answer: 'intertwined', hint: 'Entrelazado de forma inseparable', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Proceso de cuestionar los propios supuestos para evitar el autoengaño', answer: 'introspection', hint: 'Examinar los propios pensamientos', level: 'C1', difficultyScore: 6 },
  { letter: 'I', definition: 'Principio de que la ausencia de evidencia no es evidencia de ausencia', answer: 'implication', hint: 'Lo que se sigue necesariamente de algo', level: 'C1', difficultyScore: 6 },

  // ── J ───────────────────────────────────────────────────────────────────
  { letter: 'J', definition: 'Técnica retórica de colocar elementos opuestos juntos para crear contraste', answer: 'juxtaposition', hint: 'Poner cosas contrarias una junto a la otra', level: 'C1', difficultyScore: 7 },
  { letter: 'J', definition: 'Proceso de evaluar algo aplicando criterios objetivos y sistemáticos', answer: 'judgement', hint: 'Emitir un juicio razonado sobre algo', level: 'C1', difficultyScore: 5 },
  { letter: 'J', definition: 'Principio filosófico de que algo está justificado si produce buenos resultados', answer: 'justification', hint: 'El argumento que hace válido algo', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Proceso de identificar los límites de la jurisdicción de una teoría', answer: 'jurisdiction', hint: 'El ámbito de aplicación de algo', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Condición en la que las partes de un argumento encajan de forma coherente', answer: 'joinery', hint: 'La unión coherente de las partes de algo', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Proceso de articular de forma clara los criterios de evaluación', answer: 'justify', hint: 'Dar razones para defender algo', level: 'C1', difficultyScore: 5 },
  { letter: 'J', definition: 'Que está en equilibrio perfecto entre dos fuerzas o principios opuestos', answer: 'judicious', hint: 'Prudente y con buen criterio', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Proceso de hacer que algo sea más preciso y menos ambiguo', answer: 'jettison', hint: 'Desechar lo innecesario para avanzar', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Momento decisivo en que el resultado de algo puede cambiar de forma radical', answer: 'juncture', hint: 'Punto crítico o momento decisivo', level: 'C1', difficultyScore: 6 },
  { letter: 'J', definition: 'Principio de que la verdad de una afirmación depende del contexto', answer: 'judgement call', hint: 'Decisión que depende del criterio personal', level: 'C1', difficultyScore: 5 },

  // ── K ───────────────────────────────────────────────────────────────────
  { letter: 'K', definition: 'Conjunto de habilidades y conocimientos especializados en un campo', answer: 'knowledge', hint: 'El saber acumulado en un campo', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Discurso central que establece las ideas principales de un evento académico', answer: 'keynote', hint: 'El discurso principal de un congreso', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Proceso de identificar los elementos fundamentales de un sistema', answer: 'key driver', hint: 'El factor principal que impulsa algo', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Habilidad especial e innata para hacer algo con aparente facilidad', answer: 'knack', hint: 'Un don natural para algo concreto', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Proceso de mantener activo el interés y la curiosidad intelectual', answer: 'keep alive', hint: 'Phrasal verb: mantener vivo el interés', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Capacidad de reconocer los límites del propio conocimiento', answer: 'knowing', hint: 'Ser consciente de lo que se sabe y no', level: 'C1', difficultyScore: 5 },
  { letter: 'K', definition: 'Proceso de construir conocimiento de forma colaborativa y acumulativa', answer: 'knowledge-building', hint: 'Construcción colectiva del conocimiento', level: 'C1', difficultyScore: 6 },
  { letter: 'K', definition: 'Que es crucial o determinante para el resultado de algo', answer: 'key', hint: 'Fundamental o decisivo para algo', level: 'C1', difficultyScore: 4 },
  { letter: 'K', definition: 'Proceso de identificar qué información es relevante para un problema', answer: 'knowledge gap', hint: 'La brecha o vacío de conocimiento', level: 'C1', difficultyScore: 6 },
  { letter: 'K', definition: 'Capacidad de mantener la coherencia entre teoría y práctica', answer: 'keep in line', hint: 'Mantener algo coherente y consistente', level: 'C1', difficultyScore: 5 },

  // ── L ───────────────────────────────────────────────────────────────────
  { letter: 'L', definition: 'Doctrina política que defiende la máxima libertad individual posible', answer: 'libertarianism', hint: 'Filosofía política de la libertad máxima', level: 'C1', difficultyScore: 7 },
  { letter: 'L', definition: 'Propiedad de un argumento de ser válido según las reglas de la lógica', answer: 'logical', hint: 'Conforme a las reglas de la lógica', level: 'C1', difficultyScore: 5 },
  { letter: 'L', definition: 'Proceso de hacer que algo sea completamente comprensible y transparente', answer: 'lucid', hint: 'Claro y fácil de entender', level: 'C1', difficultyScore: 5 },
  { letter: 'L', definition: 'Condición de ser apropiado y pertinente para el contexto en que se aplica', answer: 'legitimate', hint: 'Válido y apropiado en su contexto', level: 'C1', difficultyScore: 5 },
  { letter: 'L', definition: 'Proceso de establecer las condiciones bajo las cuales algo es verdad', answer: 'limitation', hint: 'Los límites dentro de los cuales algo funciona', level: 'C1', difficultyScore: 5 },
  { letter: 'L', definition: 'Propiedad de adaptarse y cambiar de forma sin perder la esencia', answer: 'lability', hint: 'Capacidad de cambiar con facilidad', level: 'C1', difficultyScore: 7 },
  { letter: 'L', definition: 'Proceso de identificar los supuestos ocultos de un argumento', answer: 'lay bare', hint: 'Phrasal verb: exponer lo que estaba oculto', level: 'C1', difficultyScore: 6 },
  { letter: 'L', definition: 'Condición de ser el resultado necesario de unas premisas dadas', answer: 'logically', hint: 'De forma lógicamente necesaria', level: 'C1', difficultyScore: 5 },
  { letter: 'L', definition: 'Que tiene múltiples niveles de significado o interpretación posibles', answer: 'layered', hint: 'Con múltiples capas de significado', level: 'C1', difficultyScore: 6 },
  { letter: 'L', definition: 'Proceso de hacer que algo sea sostenible a largo plazo', answer: 'long-term', hint: 'Que considera el futuro lejano', level: 'C1', difficultyScore: 5 },

  // ── M ───────────────────────────────────────────────────────────────────
  { letter: 'M', definition: 'Propiedad de adaptarse y cambiar de forma ante presiones externas', answer: 'malleability', hint: 'Capacidad de ser moldeado o cambiado', level: 'C1', difficultyScore: 6 },
  { letter: 'M', definition: 'Proceso de medir y cuantificar de forma precisa un fenómeno abstracto', answer: 'measurement', hint: 'Cuantificación precisa de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'M', definition: 'Que tiene en cuenta múltiples dimensiones o perspectivas simultáneamente', answer: 'multidimensional', hint: 'Con muchas dimensiones o aspectos', level: 'C1', difficultyScore: 6 },
  { letter: 'M', definition: 'Proceso de extraer patrones o leyes generales de datos específicos', answer: 'meta-analysis', hint: 'Análisis de análisis, síntesis de estudios', level: 'C1', difficultyScore: 7 },
  { letter: 'M', definition: 'Conjunto de reglas y procedimientos que guían una investigación', answer: 'methodology', hint: 'El conjunto de métodos de una investigación', level: 'C1', difficultyScore: 6 },
  { letter: 'M', definition: 'Proceso de mantener la coherencia en un argumento a lo largo del tiempo', answer: 'maintain', hint: 'Sostener o conservar algo a lo largo del tiempo', level: 'C1', difficultyScore: 5 },
  { letter: 'M', definition: 'Uso de figuras del lenguaje para expresar conceptos abstractos', answer: 'metaphor', hint: 'Figura retórica que compara dos cosas', level: 'C1', difficultyScore: 6 },
  { letter: 'M', definition: 'Que puede ser interpretado de más de una forma según el contexto', answer: 'multivalent', hint: 'Con múltiples valores o interpretaciones', level: 'C1', difficultyScore: 7 },
  { letter: 'M', definition: 'Principio de que las explicaciones más simples son preferibles a las complejas', answer: 'minimal', hint: 'Con el mínimo necesario y nada más', level: 'C1', difficultyScore: 5 },
  { letter: 'M', definition: 'Proceso de reconciliar teorías aparentemente contradictorias', answer: 'mediation', hint: 'Buscar un término medio entre posturas', level: 'C1', difficultyScore: 6 },

  // ── N ───────────────────────────────────────────────────────────────────
  { letter: 'N', definition: 'Relato estructurado que da coherencia y sentido a una serie de hechos', answer: 'narrative', hint: 'El relato que da sentido a algo', level: 'C1', difficultyScore: 5 },
  { letter: 'N', definition: 'Proceso de establecer y definir conceptos con precisión terminológica', answer: 'nomenclature', hint: 'El sistema de nombres de un campo', level: 'C1', difficultyScore: 7 },
  { letter: 'N', definition: 'Que tiene en cuenta los matices y detalles sutiles de un fenómeno', answer: 'nuanced', hint: 'Con matices y detalles sutiles', level: 'C1', difficultyScore: 6 },
  { letter: 'N', definition: 'Proceso de hacer explícito lo que estaba implícito en un argumento', answer: 'normative', hint: 'Que establece normas o criterios', level: 'C1', difficultyScore: 6 },
  { letter: 'N', definition: 'Conjunto de ideas que sirven de marco conceptual para una disciplina', answer: 'notions', hint: 'Conceptos o ideas básicas de un campo', level: 'C1', difficultyScore: 5 },
  { letter: 'N', definition: 'Proceso de identificar lo que es nuevo y original en una contribución', answer: 'novelty', hint: 'La originalidad de algo nuevo', level: 'C1', difficultyScore: 6 },
  { letter: 'N', definition: 'Propiedad de un sistema de producir resultados diferentes según las condiciones', answer: 'nonlinear', hint: 'Que no sigue una relación proporcional', level: 'C1', difficultyScore: 6 },
  { letter: 'N', definition: 'Que niega la existencia de verdades absolutas independientes del contexto', answer: 'nihilistic', hint: 'Que niega valores o verdades absolutas', level: 'C1', difficultyScore: 7 },
  { letter: 'N', definition: 'Proceso de identificar qué criterios son necesarios y cuáles son suficientes', answer: 'necessary', hint: 'Que no puede faltar para que algo ocurra', level: 'C1', difficultyScore: 5 },
  { letter: 'N', definition: 'Propiedad de un argumento de no depender de supuestos adicionales', answer: 'nesting', hint: 'Estructura de ideas incluidas unas en otras', level: 'C1', difficultyScore: 6 },

  // ── O ───────────────────────────────────────────────────────────────────
  { letter: 'O', definition: 'Ocultación de un astro al quedar tapado por otro cuerpo celeste', answer: 'occultation', hint: 'Fenómeno astronómico de ocultamiento', level: 'C1', difficultyScore: 7 },
  { letter: 'O', definition: 'Proceso de llegar a conclusiones a partir de la observación directa', answer: 'observation', hint: 'Mirar con atención para sacar conclusiones', level: 'C1', difficultyScore: 5 },
  { letter: 'O', definition: 'Que se puede observar o medir directamente sin inferencia', answer: 'observable', hint: 'Que se percibe directamente', level: 'C1', difficultyScore: 5 },
  { letter: 'O', definition: 'Proceso de identificar las condiciones que hacen posible un fenómeno', answer: 'operationalise', hint: 'Definir algo en términos medibles', level: 'C1', difficultyScore: 7 },
  { letter: 'O', definition: 'Propiedad de una teoría de ser aplicable a múltiples contextos distintos', answer: 'overarching', hint: 'Que abarca o engloba todo lo demás', level: 'C1', difficultyScore: 6 },
  { letter: 'O', definition: 'Proceso de analizar un fenómeno desde múltiples perspectivas simultáneas', answer: 'omnidirectional', hint: 'Que va en todas las direcciones', level: 'C1', difficultyScore: 7 },
  { letter: 'O', definition: 'Principio de que las explicaciones más sencillas son generalmente más correctas', answer: 'optimal', hint: 'El mejor resultado posible dado los recursos', level: 'C1', difficultyScore: 5 },
  { letter: 'O', definition: 'Que surge de forma espontánea sin ser diseñado ni planificado', answer: 'organic', hint: 'Que surge naturalmente sin planificación', level: 'C1', difficultyScore: 5 },
  { letter: 'O', definition: 'Proceso de convertir conceptos abstractos en variables medibles', answer: 'operationalisation', hint: 'Convertir lo abstracto en medible', level: 'C1', difficultyScore: 7 },
  { letter: 'O', definition: 'Capacidad de un sistema de funcionar correctamente en distintas condiciones', answer: 'operational', hint: 'Relativo al funcionamiento práctico', level: 'C1', difficultyScore: 5 },

  // ── P ───────────────────────────────────────────────────────────────────
  { letter: 'P', definition: 'Que sirve como modelo ejemplar y representativo de su categoría', answer: 'paradigmatic', hint: 'Que es el ejemplo perfecto de algo', level: 'C1', difficultyScore: 7 },
  { letter: 'P', definition: 'Proceso de identificar los patrones recurrentes en un conjunto de datos', answer: 'pattern recognition', hint: 'Identificar patrones en datos complejos', level: 'C1', difficultyScore: 6 },
  { letter: 'P', definition: 'Proceso de justificar una afirmación con argumentos y evidencias', answer: 'proposition', hint: 'Una afirmación que puede ser verdadera o falsa', level: 'C1', difficultyScore: 6 },
  { letter: 'P', definition: 'Principio de que el conocimiento siempre es provisional y revisable', answer: 'provisional', hint: 'Temporal y sujeto a revisión', level: 'C1', difficultyScore: 6 },
  { letter: 'P', definition: 'Proceso de hacer que algo sea más preciso y exacto mediante refinamientos', answer: 'precision', hint: 'La exactitud y detalle de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'P', definition: 'Propiedad de un sistema de comportarse de forma coherente con sus principios', answer: 'principled', hint: 'Guiado por principios sólidos', level: 'C1', difficultyScore: 6 },
  { letter: 'P', definition: 'Proceso de identificar las implicaciones ocultas de un argumento', answer: 'problematise', hint: 'Cuestionar lo que parecía obvio', level: 'C1', difficultyScore: 7 },
  { letter: 'P', definition: 'Capacidad de anticipar consecuencias no previstas de una acción', answer: 'prescience', hint: 'Capacidad de prever el futuro', level: 'C1', difficultyScore: 7 },
  { letter: 'P', definition: 'Proceso de hacer que algo sea comprensible para distintos tipos de audiencia', answer: 'popularise', hint: 'Hacer algo accesible al público general', level: 'C1', difficultyScore: 5 },
  { letter: 'P', definition: 'Que existe de forma independiente de la mente que lo observa', answer: 'primacy', hint: 'La importancia o posición primera de algo', level: 'C1', difficultyScore: 6 },

  // ── Q ───────────────────────────────────────────────────────────────────
  { letter: 'Q', definition: 'Búsqueda heroica o intelectual con un propósito elevado y trascendente', answer: 'quest', hint: 'Búsqueda con un propósito mayor', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Proceso de medir con precisión fenómenos abstractos o cualitativos', answer: 'quantification', hint: 'Convertir algo en números medibles', level: 'C1', difficultyScore: 6 },
  { letter: 'Q', definition: 'Capacidad de hacer preguntas que revelan supuestos ocultos', answer: 'questioning', hint: 'Cuestionar lo que parece evidente', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Proceso de evaluar la calidad de un argumento según criterios rigurosos', answer: 'quality assessment', hint: 'Evaluación de la calidad de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Cita textual de un autor usada para respaldar un argumento', answer: 'quotation', hint: 'Las palabras exactas de alguien', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Que tiene múltiples facetas o dimensiones que no pueden reducirse a una', answer: 'qualitative', hint: 'Relativo a la calidad y no a la cantidad', level: 'C1', difficultyScore: 6 },
  { letter: 'Q', definition: 'Proceso de identificar qué preguntas son las más relevantes para un problema', answer: 'query', hint: 'Pregunta o consulta sobre algo', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Condición de ser válido dentro de ciertos límites o condiciones', answer: 'qualified', hint: 'Con reservas o condiciones específicas', level: 'C1', difficultyScore: 5 },
  { letter: 'Q', definition: 'Proceso de identificar las consecuencias de adoptar una posición teórica', answer: 'quasi-experimental', hint: 'Diseño de investigación casi experimental', level: 'C1', difficultyScore: 7 },
  { letter: 'Q', definition: 'Nivel de detalle y precisión en el análisis de un fenómeno', answer: 'quantum', hint: 'La cantidad mínima discreta de algo', level: 'C1', difficultyScore: 6 },

  // ── R ───────────────────────────────────────────────────────────────────
  { letter: 'R', definition: 'Proceso cognitivo de recuperar información almacenada en la memoria', answer: 'retrieval', hint: 'Acceder a información guardada en la memoria', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Proceso de pensar de forma sistemática sobre la propia práctica', answer: 'reflexivity', hint: 'Capacidad de reflexionar sobre uno mismo', level: 'C1', difficultyScore: 7 },
  { letter: 'R', definition: 'Propiedad de un sistema de recuperarse de perturbaciones o adversidades', answer: 'resilience', hint: 'La capacidad de recuperarse de golpes', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Proceso de reformular algo en términos diferentes sin perder el significado', answer: 'reframing', hint: 'Cambiar el marco conceptual de algo', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Capacidad de identificar y cuestionar los propios supuestos teóricos', answer: 'reflexive', hint: 'Que se aplica a sí mismo', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Proceso de construir una teoría que explique los hechos observados', answer: 'rationalisation', hint: 'Dar razones para justificar algo', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Que puede repetirse en distintos contextos con los mismos resultados', answer: 'replicable', hint: 'Que puede repetirse con el mismo resultado', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Proceso de identificar las relaciones de dependencia entre variables', answer: 'relational', hint: 'Que establece relaciones entre cosas', level: 'C1', difficultyScore: 5 },
  { letter: 'R', definition: 'Condición de ser la mejor explicación posible de los datos disponibles', answer: 'robustness', hint: 'La solidez y resistencia de algo ante críticas', level: 'C1', difficultyScore: 6 },
  { letter: 'R', definition: 'Propiedad de una teoría de producir predicciones verificables', answer: 'rigour', hint: 'La exigencia y exactitud metodológica', level: 'C1', difficultyScore: 6 },

  // ── S ───────────────────────────────────────────────────────────────────
  { letter: 'S', definition: 'Capacidad de los sistemas complejos de crear orden de forma espontánea', answer: 'self-organisation', hint: 'Orden que emerge sin control externo', level: 'C1', difficultyScore: 7 },
  { letter: 'S', definition: 'Proceso de examinar algo desde múltiples perspectivas teóricas', answer: 'synthesis', hint: 'Combinar ideas distintas en una nueva', level: 'C1', difficultyScore: 6 },
  { letter: 'S', definition: 'Propiedad de un argumento de no tener contradicciones internas', answer: 'soundness', hint: 'La validez lógica de un argumento', level: 'C1', difficultyScore: 6 },
  { letter: 'S', definition: 'Proceso de construir conocimiento partiendo de lo más simple a lo más complejo', answer: 'scaffolding', hint: 'Construir sobre una base gradual', level: 'C1', difficultyScore: 6 },
  { letter: 'S', definition: 'Capacidad de una teoría para explicar fenómenos que no la motivaron', answer: 'scope', hint: 'El alcance o cobertura de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'S', definition: 'Proceso de identificar qué variables son causas y cuáles son efectos', answer: 'sequencing', hint: 'El orden en que ocurren las cosas', level: 'C1', difficultyScore: 6 },
  { letter: 'S', definition: 'Propiedad de una afirmación de poder mantenerse ante objeciones sucesivas', answer: 'sustainability', hint: 'Capacidad de mantenerse en el tiempo', level: 'C1', difficultyScore: 5 },
  { letter: 'S', definition: 'Proceso de identificar las similitudes y diferencias entre dos fenómenos', answer: 'symmetry', hint: 'Correspondencia o equivalencia entre dos cosas', level: 'C1', difficultyScore: 5 },
  { letter: 'S', definition: 'Que tiene en cuenta el contexto y las condiciones específicas', answer: 'situated', hint: 'Que depende de la situación concreta', level: 'C1', difficultyScore: 6 },
  { letter: 'S', definition: 'Proceso de hacer que algo sea más preciso eliminando elementos superfluos', answer: 'streamline', hint: 'Simplificar y hacer más eficiente', level: 'C1', difficultyScore: 5 },

  // ── T ───────────────────────────────────────────────────────────────────
  { letter: 'T', definition: 'Que es exhaustivo y cubre todos los aspectos y detalles sin excepción', answer: 'thorough', hint: 'Minucioso y completo en todo', level: 'C1', difficultyScore: 5 },
  { letter: 'T', definition: 'Proceso de examinar algo desde múltiples perspectivas teóricas distintas', answer: 'triangulation', hint: 'Usar múltiples métodos para verificar algo', level: 'C1', difficultyScore: 7 },
  { letter: 'T', definition: 'Condición de ser cierto en todos los casos posibles sin excepción', answer: 'tautology', hint: 'Una afirmación que es verdadera por definición', level: 'C1', difficultyScore: 7 },
  { letter: 'T', definition: 'Proceso de hacer que algo sea comprensible reduciendo su complejidad', answer: 'translate', hint: 'Convertir algo complejo en simple', level: 'C1', difficultyScore: 5 },
  { letter: 'T', definition: 'Propiedad de una teoría de explicar más de lo que pretende originalmente', answer: 'transferability', hint: 'Que puede aplicarse en otros contextos', level: 'C1', difficultyScore: 6 },
  { letter: 'T', definition: 'Proceso de identificar los mecanismos que conectan causas y efectos', answer: 'tracing', hint: 'Seguir el rastro de algo para entenderlo', level: 'C1', difficultyScore: 6 },
  { letter: 'T', definition: 'Condición de tener en cuenta todos los factores relevantes de un análisis', answer: 'thoroughness', hint: 'La cualidad de ser completo y exhaustivo', level: 'C1', difficultyScore: 6 },
  { letter: 'T', definition: 'Que transciende los límites habituales de una disciplina o campo', answer: 'transdisciplinary', hint: 'Que va más allá de una sola disciplina', level: 'C1', difficultyScore: 7 },
  { letter: 'T', definition: 'Proceso de hacer que algo sea visible y comprensible para todos', answer: 'transparency', hint: 'La claridad y apertura de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'T', definition: 'Capacidad de mantener una posición coherente a lo largo del tiempo', answer: 'tenacity', hint: 'La firmeza y perseverancia en algo', level: 'C1', difficultyScore: 6 },

  // ── U ───────────────────────────────────────────────────────────────────
  { letter: 'U', definition: 'Estado de ambigüedad o falta de certeza sobre el resultado de algo', answer: 'uncertainty', hint: 'La falta de certeza sobre algo', level: 'C1', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de llegar a un acuerdo o posición compartida entre partes', answer: 'unanimity', hint: 'Acuerdo total entre todos los participantes', level: 'C1', difficultyScore: 6 },
  { letter: 'U', definition: 'Propiedad de una teoría de explicar fenómenos en todos los contextos', answer: 'universality', hint: 'Válido en todos los contextos y culturas', level: 'C1', difficultyScore: 6 },
  { letter: 'U', definition: 'Proceso de hacer explícito lo que está implícito en un argumento', answer: 'unpacking', hint: 'Phrasal verb: desarrollar las ideas implícitas', level: 'C1', difficultyScore: 6 },
  { letter: 'U', definition: 'Condición de tener la misma validez en todos los casos sin excepción', answer: 'uniform', hint: 'Igual en todos los casos', level: 'C1', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de integrar perspectivas distintas en una visión coherente', answer: 'unification', hint: 'Unir elementos distintos en uno solo', level: 'C1', difficultyScore: 6 },
  { letter: 'U', definition: 'Que tiene consecuencias no previstas o efectos secundarios no deseados', answer: 'unintended', hint: 'Que ocurre sin haberlo planeado', level: 'C1', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de verificar que algo es lo que dice ser mediante pruebas', answer: 'underpinning', hint: 'El sustento teórico de algo', level: 'C1', difficultyScore: 6 },
  { letter: 'U', definition: 'Que es único y no puede encontrarse en ningún otro lugar o contexto', answer: 'unique', hint: 'Sin igual o comparación posible', level: 'C1', difficultyScore: 4 },
  { letter: 'U', definition: 'Que puede utilizarse en múltiples contextos distintos con el mismo efecto', answer: 'utility', hint: 'La utilidad o valor práctico de algo', level: 'C1', difficultyScore: 5 },

  // ── V ───────────────────────────────────────────────────────────────────
  { letter: 'V', definition: 'Confirmar que algo es auténtico, correcto o que cumple los estándares', answer: 'validate', hint: 'Confirmar la validez de algo', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Proceso de someter algo a prueba para verificar si funciona como se esperaba', answer: 'verification', hint: 'Comprobar que algo es cierto o correcto', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Capacidad de una teoría para ser aplicada a nuevos casos no previstos', answer: 'versatility', hint: 'La capacidad de adaptarse a distintos usos', level: 'C1', difficultyScore: 6 },
  { letter: 'V', definition: 'Proceso de hacer que algo sea real y concreto en vez de abstracto', answer: 'visualise', hint: 'Hacer algo abstracto visible y concreto', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Que tiene fuerza y capacidad de influir en otros de forma efectiva', answer: 'vigorous', hint: 'Enérgico y con fuerza', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Propiedad de una teoría de producir predicciones que pueden ser probadas', answer: 'verifiable', hint: 'Que puede ser comprobado empíricamente', level: 'C1', difficultyScore: 6 },
  { letter: 'V', definition: 'Proceso de dar voz a las perspectivas que no suelen ser escuchadas', answer: 'voice', hint: 'Expresar o dar voz a algo', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Condición de ser susceptible a la crítica o la refutación', answer: 'vulnerable', hint: 'Expuesto a posibles críticas o ataques', level: 'C1', difficultyScore: 5 },
  { letter: 'V', definition: 'Proceso de examinar cuidadosamente todos los aspectos de algo', answer: 'vetting', hint: 'Examinar algo con mucho cuidado', level: 'C1', difficultyScore: 6 },
  { letter: 'V', definition: 'Que tiene relevancia y aplicabilidad directa en el mundo real', answer: 'viable', hint: 'Que puede funcionar en la práctica', level: 'C1', difficultyScore: 5 },

  // ── W ───────────────────────────────────────────────────────────────────
  { letter: 'W', definition: 'Visión global o cosmovisión que estructura la manera de entender el mundo', answer: 'worldview', hint: 'La perspectiva general desde la que se ve el mundo', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Proceso de hacer explícito el razonamiento que hay detrás de una conclusión', answer: 'walk through', hint: 'Phrasal verb: explicar paso a paso', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Propiedad de ser digno de investigación o análisis profundo', answer: 'worthy', hint: 'Que merece atención o esfuerzo', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Proceso de identificar qué factores contribuyen más al resultado', answer: 'weighting', hint: 'Asignar importancia relativa a factores', level: 'C1', difficultyScore: 6 },
  { letter: 'W', definition: 'Que tiene en cuenta todos los aspectos relevantes de un fenómeno', answer: 'wide-ranging', hint: 'Que cubre un amplio rango de aspectos', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Proceso de comprobar que algo resiste el escrutinio crítico', answer: 'withstand', hint: 'Resistir o aguantar la presión crítica', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Condición de tener suficiente fundamento teórico para ser tomado en serio', answer: 'well-founded', hint: 'Basado en fundamentos sólidos', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Proceso de identificar las condiciones que harían falsa una afirmación', answer: 'what-if', hint: 'Análisis de escenarios hipotéticos', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Que abarca de forma integral todos los aspectos de algo', answer: 'wholesale', hint: 'De forma total y sin excepciones', level: 'C1', difficultyScore: 5 },
  { letter: 'W', definition: 'Proceso de conectar ideas aparentemente no relacionadas entre sí', answer: 'weave', hint: 'Entrelazar ideas distintas en un todo', level: 'C1', difficultyScore: 5 },

  // ── X ───────────────────────────────────────────────────────────────────
  { letter: 'X', definition: 'Proceso electrostático de reproducción de documentos mediante luz', answer: 'xerography', hint: 'La tecnología de las fotocopiadoras', level: 'C1', difficultyScore: 6 },
  { letter: 'X', definition: 'Miedo irracional o rechazo sistemático hacia personas extranjeras', answer: 'xenophobia', hint: 'Fobia o rechazo hacia el extranjero', level: 'C1', difficultyScore: 6 },
  { letter: 'X', definition: 'Estudio hipotético de formas de vida de origen no terrestre', answer: 'xenobiology', hint: 'Biología de seres extraterrestres hipotéticos', level: 'C1', difficultyScore: 7 },
  { letter: 'X', definition: 'Transplante de tejidos u órganos entre especies biológicas distintas', answer: 'xenotransplant', hint: 'Trasplante entre especies distintas', level: 'C1', difficultyScore: 7 },
  { letter: 'X', definition: 'Instrumento de percusión con láminas afinadas que se golpean', answer: 'xylophone', hint: 'Instrumento de percusión de láminas', level: 'C1', difficultyScore: 5 },
  { letter: 'X', definition: 'Técnica médica que usa radiación para obtener imágenes del interior del cuerpo', answer: 'x-ray', hint: 'La radiografía médica', level: 'C1', difficultyScore: 4 },
  { letter: 'X', definition: 'Principio filosófico de apertura radical hacia lo ajeno y desconocido', answer: 'xenophily', hint: 'Atracción hacia lo extranjero o diferente', level: 'C1', difficultyScore: 7 },
  { letter: 'X', definition: 'Sistema de escritura con símbolos visuales propios de culturas antiguas', answer: 'xenoglyph', hint: 'Escritura de culturas ajenas', level: 'C1', difficultyScore: 7 },

  // ── Y ───────────────────────────────────────────────────────────────────
  { letter: 'Y', definition: 'Tiempos pasados remotos e idealizados por la memoria colectiva', answer: 'yesteryear', hint: 'El pasado lejano idealizado', level: 'C1', difficultyScore: 6 },
  { letter: 'Y', definition: 'Producir o generar un resultado como consecuencia de un proceso', answer: 'yield', hint: 'Dar como resultado algo', level: 'C1', difficultyScore: 5 },
  { letter: 'Y', definition: 'Anhelar algo con una intensidad que no puede ser fácilmente satisfecha', answer: 'yearn', hint: 'Desear algo con gran intensidad', level: 'C1', difficultyScore: 5 },
  { letter: 'Y', definition: 'Embarcación de lujo equipada para la navegación de largo recorrido', answer: 'yacht', hint: 'Barco de lujo para navegación', level: 'C1', difficultyScore: 4 },
  { letter: 'Y', definition: 'Que tiene poca experiencia acumulada en un campo o disciplina', answer: 'young', hint: 'Inexperto o con poca trayectoria', level: 'C1', difficultyScore: 3 },
  { letter: 'Y', definition: 'Práctica disciplinada de origen hindú que integra cuerpo y mente', answer: 'yoga', hint: 'Práctica de meditación y posturas corporales', level: 'C1', difficultyScore: 3 },
  { letter: 'Y', definition: 'Unidad de medida de información equivalente a diez elevado a veinticuatro bytes', answer: 'yottabyte', hint: 'La mayor unidad estándar de datos', level: 'C1', difficultyScore: 7 },
  { letter: 'Y', definition: 'Capacidad de adaptarse y ceder sin perder la posición esencial', answer: 'yielding', hint: 'Ceder o adaptarse ante la presión', level: 'C1', difficultyScore: 5 },
  { letter: 'Y', definition: 'Saludo o respuesta afirmativa de carácter informal y coloquial', answer: 'yep', hint: 'Afirmación informal en inglés', level: 'C1', difficultyScore: 3 },
  { letter: 'Y', definition: 'Pronombre de segunda persona en inglés para singular y plural', answer: 'you', hint: 'Tú o vosotros en inglés', level: 'C1', difficultyScore: 2 },

  // ── Z ───────────────────────────────────────────────────────────────────
  { letter: 'Z', definition: 'Punto más alto o culminante que algo puede alcanzar en su desarrollo', answer: 'zenith', hint: 'El punto más alto posible', level: 'C1', difficultyScore: 5 },
  { letter: 'Z', definition: 'Gran entusiasmo y energía que alguien dedica a una causa o ideal', answer: 'zeal', hint: 'Fervor o pasión intensa hacia algo', level: 'C1', difficultyScore: 5 },
  { letter: 'Z', definition: 'Rama de la biología que estudia los animales y su comportamiento', answer: 'zoology', hint: 'La ciencia que estudia los animales', level: 'C1', difficultyScore: 5 },
  { letter: 'Z', definition: 'División planificada de un territorio en áreas con funciones distintas', answer: 'zoning', hint: 'La organización del territorio en zonas', level: 'C1', difficultyScore: 5 },
  { letter: 'Z', definition: 'El punto de inicio o nivel base desde el que se mide algo', answer: 'zero', hint: 'El punto de partida o valor nulo', level: 'C1', difficultyScore: 3 },
  { letter: 'Z', definition: 'Herramienta para ampliar o reducir la escala de visualización', answer: 'zoom', hint: 'Acercar o alejar una imagen', level: 'C1', difficultyScore: 3 },
  { letter: 'Z', definition: 'Persona con una devoción extrema y fanática hacia una causa', answer: 'zealot', hint: 'Fanático o extremista de una causa', level: 'C1', difficultyScore: 6 },
  { letter: 'Z', definition: 'Cierre metálico de prendas de ropa que funciona con dientes entrelazados', answer: 'zip', hint: 'La cremallera de una prenda de ropa', level: 'C1', difficultyScore: 3 },
  { letter: 'Z', definition: 'Estado de vivacidad y entusiasmo que impulsa a actuar con energía', answer: 'zest', hint: 'Energía y entusiasmo por la vida', level: 'C1', difficultyScore: 5 },
  { letter: 'Z', definition: 'Momento de tránsito entre dos estados o etapas de algo', answer: 'zero-sum', hint: 'Situación donde la ganancia de uno es pérdida del otro', level: 'C1', difficultyScore: 6 },
]

async function main() {
  console.log('🌱 Seeding C1 words...')

  await prisma.word.deleteMany({ where: { level: 'C1' } })
  console.log('  Cleared C1 words')

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

  console.log('\n✅ C1 seed complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
