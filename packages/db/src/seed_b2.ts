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
  { letter: 'A', definition: 'Adaptar algo a una situación nueva o diferente con éxito', answer: 'adjust', hint: 'Ajustar o adaptar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Reconocer públicamente que algo es verdad o que has cometido un error', answer: 'acknowledge', hint: 'Reconocer o admitir algo', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Principio o norma que guía el comportamiento en una situación concreta', answer: 'approach', hint: 'La forma de abordar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Evaluar o calcular el valor, la calidad o la importancia de algo', answer: 'assess', hint: 'Evaluar o valorar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'A', definition: 'Dar por sentado algo sin tener pruebas que lo confirmen', answer: 'assume', hint: 'Suponer sin evidencia', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Proceso de hacer que algo sea automático y funcione solo', answer: 'automate', hint: 'Hacer algo automático', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Hacer una declaración sin tener pruebas concretas que la respalden', answer: 'allege', hint: 'Afirmar sin pruebas', level: 'B2', difficultyScore: 5 },
  { letter: 'A', definition: 'Que está disponible o puede conseguirse en un momento dado', answer: 'accessible', hint: 'Disponible o al alcance de todos', level: 'B2', difficultyScore: 4 },
  { letter: 'A', definition: 'Proceso de acumular algo de forma gradual con el tiempo', answer: 'accumulate', hint: 'Acumular o juntar poco a poco', level: 'B2', difficultyScore: 5 },
  { letter: 'A', definition: 'Situación en la que dos o más partes están en desacuerdo', answer: 'argument', hint: 'Discusión o desacuerdo entre personas', level: 'B2', difficultyScore: 3 },

  // ── B ───────────────────────────────────────────────────────────────────
  { letter: 'B', definition: 'Equilibrar dos o más factores para conseguir un resultado óptimo', answer: 'balance', hint: 'Equilibrar o compensar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Obstáculo o impedimento que dificulta el acceso o el progreso', answer: 'barrier', hint: 'Obstáculo que impide algo', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Nivel mínimo o punto de referencia con el que se miden los resultados', answer: 'benchmark', hint: 'Punto de referencia o estándar', level: 'B2', difficultyScore: 5 },
  { letter: 'B', definition: 'Opinión formada sin evidencia suficiente que distorsiona el juicio', answer: 'bias', hint: 'Prejuicio o sesgo cognitivo', level: 'B2', difficultyScore: 5 },
  { letter: 'B', definition: 'Hacer que algo crezca o mejore de forma notable', answer: 'boost', hint: 'Impulsar o aumentar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Límite o frontera que separa dos áreas o conceptos', answer: 'boundary', hint: 'Límite o frontera entre dos cosas', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Superar o romper una limitación o barrera que existía', answer: 'break through', hint: 'Phrasal verb: superar un obstáculo importante', level: 'B2', difficultyScore: 5 },
  { letter: 'B', definition: 'Acción de construir relaciones o conexiones entre personas o grupos', answer: 'bridge', hint: 'Tender un puente entre dos partes', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Hacer una lista o esquema de las ideas principales antes de escribir', answer: 'brainstorm', hint: 'Generar ideas de forma libre', level: 'B2', difficultyScore: 4 },
  { letter: 'B', definition: 'Obligación o compromiso que une a alguien con otro', answer: 'bind', hint: 'Obligar o vincular legalmente', level: 'B2', difficultyScore: 5 },

  // ── C ───────────────────────────────────────────────────────────────────
  { letter: 'C', definition: 'Argumento u objeción que se hace en respuesta a otro argumento', answer: 'counter-argument', hint: 'Argumento contrario al que se ha dado', level: 'B2', difficultyScore: 5 },
  { letter: 'C', definition: 'Proceso de lograr que dos partes en conflicto lleguen a un acuerdo', answer: 'conciliate', hint: 'Mediar y reconciliar a dos partes', level: 'B2', difficultyScore: 5 },
  { letter: 'C', definition: 'Hacer que algo sea más complicado de lo que necesita ser', answer: 'complicate', hint: 'Añadir dificultad innecesaria', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Trabajar junto con otras personas o entidades hacia un objetivo', answer: 'collaborate', hint: 'Trabajar en equipo con otros', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Reducir algo a su forma más pequeña o esencial posible', answer: 'compress', hint: 'Reducir o compactar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Debatir y disputar algo que se considera incorrecto o injusto', answer: 'challenge', hint: 'Cuestionar o poner en entredicho algo', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Demostrar con pruebas que algo es verdad o que existe', answer: 'confirm', hint: 'Confirmar con evidencias', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Proceso de alcanzar un estado de plenitud o madurez', answer: 'culminate', hint: 'Llegar al punto más alto o final', level: 'B2', difficultyScore: 5 },
  { letter: 'C', definition: 'Hacer que algo sea más claro y fácil de entender', answer: 'clarify', hint: 'Aclarar algo que no estaba claro', level: 'B2', difficultyScore: 4 },
  { letter: 'C', definition: 'Condición o situación que es necesaria para que algo ocurra', answer: 'criteria', hint: 'Los requisitos necesarios para algo', level: 'B2', difficultyScore: 5 },

  // ── D ───────────────────────────────────────────────────────────────────
  { letter: 'D', definition: 'Reducir el tamaño, la intensidad o la importancia de algo', answer: 'diminish', hint: 'Disminuir o reducir algo', level: 'B2', difficultyScore: 4 },
  { letter: 'D', definition: 'Distribuir o repartir recursos o tareas entre varias personas', answer: 'delegate', hint: 'Delegar o asignar tareas a otros', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Crear o imaginar algo completamente nuevo sin modelo previo', answer: 'devise', hint: 'Inventar o idear algo nuevo', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Proceso de analizar algo con mucho detalle para entenderlo', answer: 'dissect', hint: 'Analizar algo en profundidad', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Trasladar el poder o la autoridad de un nivel superior a uno inferior', answer: 'decentralise', hint: 'Repartir el poder entre varios niveles', level: 'B2', difficultyScore: 6 },
  { letter: 'D', definition: 'Hacer que algo sea diferente para adaptarlo a un contexto nuevo', answer: 'differentiate', hint: 'Distinguir o diferenciar entre dos cosas', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Afirmar o sostener algo con convicción y sin lugar a dudas', answer: 'declare', hint: 'Declarar algo oficialmente', level: 'B2', difficultyScore: 4 },
  { letter: 'D', definition: 'Identificar los componentes de algo y entender cómo encajan', answer: 'decompose', hint: 'Descomponer algo en sus partes', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Proceso de sacar conclusiones a partir de datos o evidencias', answer: 'deduce', hint: 'Llegar a una conclusión lógica', level: 'B2', difficultyScore: 5 },
  { letter: 'D', definition: 'Situación en la que algo se retrasa más de lo esperado', answer: 'delay', hint: 'Un retraso o demora en algo', level: 'B2', difficultyScore: 4 },

  // ── E ───────────────────────────────────────────────────────────────────
  { letter: 'E', definition: 'Hacer más efectivo y eficiente algo eliminando lo que sobra', answer: 'enhance', hint: 'Mejorar o potenciar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'E', definition: 'Desarrollar algo con mucho detalle y de forma completa', answer: 'elaborate', hint: 'Desarrollar con detalle y complejidad', level: 'B2', difficultyScore: 5 },
  { letter: 'E', definition: 'Estudiar o investigar algo con profundidad para entenderlo mejor', answer: 'examine', hint: 'Examinar o analizar algo a fondo', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Proceso de sacar o extraer información útil de un conjunto de datos', answer: 'extract', hint: 'Extraer o sacar algo de un conjunto', level: 'B2', difficultyScore: 5 },
  { letter: 'E', definition: 'Poner en práctica o aplicar algo que se ha aprendido o planificado', answer: 'execute', hint: 'Llevar a cabo o ejecutar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Hacer que algo dure más tiempo de lo que se esperaba', answer: 'extend', hint: 'Alargar o prolongar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Calcular o estimar la cantidad de algo de forma aproximada', answer: 'estimate', hint: 'Calcular de forma aproximada', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Hacer que algo llegue a más personas o cubra más área', answer: 'expand', hint: 'Expandir o ampliar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Resultado que se espera que ocurra según los planes', answer: 'expectation', hint: 'Lo que se espera que pase', level: 'B2', difficultyScore: 4 },
  { letter: 'E', definition: 'Proceso de medir con precisión el rendimiento o los resultados', answer: 'evaluate', hint: 'Evaluar o medir el rendimiento', level: 'B2', difficultyScore: 5 },

  // ── F ───────────────────────────────────────────────────────────────────
  { letter: 'F', definition: 'Hacer que un proceso o tarea sea más fácil de llevar a cabo', answer: 'facilitate', hint: 'Facilitar o hacer más fácil algo', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Proceso de dar retroalimentación constructiva sobre el trabajo de alguien', answer: 'feedback', hint: 'Comentarios o crítica constructiva', level: 'B2', difficultyScore: 4 },
  { letter: 'F', definition: 'Seguir o vigilar algo de cerca durante un período de tiempo', answer: 'follow up', hint: 'Phrasal verb: hacer seguimiento de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'F', definition: 'Marco conceptual o estructura que da coherencia a un sistema de ideas', answer: 'framework', hint: 'Estructura conceptual o metodológica', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Capacidad de cambiar y adaptarse a nuevas situaciones con facilidad', answer: 'flexibility', hint: 'La capacidad de ser flexible', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Hacer que algo avance o progrese hacia el resultado deseado', answer: 'foster', hint: 'Fomentar o promover algo', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Describir o presentar algo de una determinada manera para influir en su interpretación', answer: 'frame', hint: 'Enmarcar o presentar algo de cierta forma', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Conseguir algo con esfuerzo y dedicación sostenida', answer: 'fulfil', hint: 'Cumplir o satisfacer algo', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Proceso de hacer algo más eficiente eliminando pasos innecesarios', answer: 'fine-tune', hint: 'Ajustar y perfeccionar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'F', definition: 'Dar forma definitiva a algo después de muchas revisiones', answer: 'finalise', hint: 'Cerrar o terminar algo definitivamente', level: 'B2', difficultyScore: 4 },

  // ── G ───────────────────────────────────────────────────────────────────
  { letter: 'G', definition: 'Obtener o conseguir algo que antes no se tenía', answer: 'gain', hint: 'Conseguir o adquirir algo', level: 'B2', difficultyScore: 3 },
  { letter: 'G', definition: 'Diferencia que existe entre dos puntos, niveles o grupos', answer: 'gap', hint: 'Brecha o diferencia entre dos cosas', level: 'B2', difficultyScore: 4 },
  { letter: 'G', definition: 'Proceso de crear o producir algo de forma sistemática', answer: 'generate', hint: 'Producir o crear algo', level: 'B2', difficultyScore: 4 },
  { letter: 'G', definition: 'Que afecta o se aplica al conjunto entero y no solo a una parte', answer: 'generalise', hint: 'Hacer afirmaciones generales sobre algo', level: 'B2', difficultyScore: 5 },
  { letter: 'G', definition: 'Acción de fijar o establecer objetivos claros para el futuro', answer: 'goal-setting', hint: 'El proceso de establecer metas', level: 'B2', difficultyScore: 4 },
  { letter: 'G', definition: 'Proceso de crecimiento y expansión progresiva de algo', answer: 'growth', hint: 'Crecimiento o expansión', level: 'B2', difficultyScore: 3 },
  { letter: 'G', definition: 'Principios o instrucciones que orientan cómo hacer algo correctamente', answer: 'guidelines', hint: 'Directrices o instrucciones oficiales', level: 'B2', difficultyScore: 4 },
  { letter: 'G', definition: 'Proceso de medir el rendimiento o la efectividad de algo', answer: 'gauge', hint: 'Medir o evaluar el nivel de algo', level: 'B2', difficultyScore: 5 },
  { letter: 'G', definition: 'Gradualmente, de forma progresiva y sin cambios bruscos', answer: 'gradually', hint: 'Poco a poco, de forma progresiva', level: 'B2', difficultyScore: 4 },
  { letter: 'G', definition: 'Conjunto de normas que regulan el funcionamiento de una organización', answer: 'governance', hint: 'Sistema de gobierno y control', level: 'B2', difficultyScore: 5 },

  // ── H ───────────────────────────────────────────────────────────────────
  { letter: 'H', definition: 'Punto de partida o referencia desde el que se mide algo', answer: 'baseline', hint: 'El nivel o punto de referencia inicial', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Suponer algo antes de tener pruebas suficientes para confirmarlo', answer: 'hypothesise', hint: 'Plantear una hipótesis', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Incluir o integrar algo dentro de un sistema más amplio', answer: 'incorporate', hint: 'Integrar algo en un conjunto mayor', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Obstáculo o dificultad que hay que superar para conseguir algo', answer: 'hurdle', hint: 'Un obstáculo que hay que saltar', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Proceso de estar en armonía o concordar con otras partes', answer: 'harmonise', hint: 'Armonizar o coordinar con otros', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Señalar o poner de relieve algo que es especialmente importante', answer: 'highlight', hint: 'Destacar o resaltar algo importante', level: 'B2', difficultyScore: 4 },
  { letter: 'H', definition: 'Contratar a una persona para que trabaje en una empresa', answer: 'hire', hint: 'Contratar a alguien para un trabajo', level: 'B2', difficultyScore: 3 },
  { letter: 'H', definition: 'Ser el encargado de organizar un evento o recibir a los invitados', answer: 'host', hint: 'Organizar un evento como anfitrión', level: 'B2', difficultyScore: 4 },
  { letter: 'H', definition: 'Evaluar o examinar algo de forma sistemática y detallada', answer: 'hone', hint: 'Perfeccionar o afinar una habilidad', level: 'B2', difficultyScore: 5 },
  { letter: 'H', definition: 'Confiar en algo o alguien para conseguir lo que necesitas', answer: 'hinge on', hint: 'Phrasal verb: depender de algo crucial', level: 'B2', difficultyScore: 5 },

  // ── I ───────────────────────────────────────────────────────────────────
  { letter: 'I', definition: 'Poner en práctica un plan o sistema de forma efectiva', answer: 'implement', hint: 'Llevar algo a la práctica', level: 'B2', difficultyScore: 4 },
  { letter: 'I', definition: 'Proceso de integrar nuevas ideas o tecnologías en un sistema', answer: 'innovate', hint: 'Introducir algo nuevo y original', level: 'B2', difficultyScore: 4 },
  { letter: 'I', definition: 'Hacer que algo sea mayor, más intenso o más amplio', answer: 'intensify', hint: 'Aumentar la intensidad de algo', level: 'B2', difficultyScore: 5 },
  { letter: 'I', definition: 'Sacar conclusiones o entender algo que no está dicho de forma explícita', answer: 'infer', hint: 'Deducir algo implícito', level: 'B2', difficultyScore: 5 },
  { letter: 'I', definition: 'Proceso de mejorar algo de forma continua y progresiva', answer: 'iterate', hint: 'Repetir y mejorar en cada ciclo', level: 'B2', difficultyScore: 5 },
  { letter: 'I', definition: 'Que tiene un efecto contrario al que se esperaba o buscaba', answer: 'ironic', hint: 'Que resulta al revés de lo esperado', level: 'B2', difficultyScore: 4 },
  { letter: 'I', definition: 'Obligar a alguien a hacer algo mediante autoridad o normas', answer: 'impose', hint: 'Imponer algo por la fuerza o autoridad', level: 'B2', difficultyScore: 5 },
  { letter: 'I', definition: 'Tener un efecto significativo y duradero sobre algo o alguien', answer: 'impact', hint: 'El impacto o efecto de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'I', definition: 'Examinar o controlar algo de forma sistemática para detectar problemas', answer: 'inspect', hint: 'Inspeccionar o revisar algo a fondo', level: 'B2', difficultyScore: 4 },
  { letter: 'I', definition: 'Consecuencia o resultado indirecto que algo tiene sobre otra cosa', answer: 'implication', hint: 'Las consecuencias implícitas de algo', level: 'B2', difficultyScore: 5 },

  // ── J ───────────────────────────────────────────────────────────────────
  { letter: 'J', definition: 'Poner en riesgo algo valioso al tomar una decisión arriesgada', answer: 'jeopardise', hint: 'Poner en peligro o riesgo algo', level: 'B2', difficultyScore: 5 },
  { letter: 'J', definition: 'Defender o explicar de forma convincente por qué algo está bien', answer: 'justify', hint: 'Dar razones para defender algo', level: 'B2', difficultyScore: 4 },
  { letter: 'J', definition: 'Proceso de evaluar y comparar resultados frente a un estándar', answer: 'judge', hint: 'Juzgar o evaluar con criterio', level: 'B2', difficultyScore: 4 },
  { letter: 'J', definition: 'Conexión o punto de encuentro donde varias cosas convergen', answer: 'junction', hint: 'Cruce o punto de encuentro', level: 'B2', difficultyScore: 4 },
  { letter: 'J', definition: 'Hecho o dato que se usa para defender una posición o argumento', answer: 'justification', hint: 'La razón o argumento para defender algo', level: 'B2', difficultyScore: 5 },
  { letter: 'J', definition: 'Calcular o estimar la probabilidad de algo de forma rápida', answer: 'judge by', hint: 'Juzgar algo por sus características visibles', level: 'B2', difficultyScore: 4 },
  { letter: 'J', definition: 'Combinar o unir dos o más elementos para formar algo nuevo', answer: 'juxtapose', hint: 'Colocar cosas opuestas una junto a la otra', level: 'B2', difficultyScore: 5 },
  { letter: 'J', definition: 'Persona experta en leyes que trabaja en el sistema judicial', answer: 'jurist', hint: 'Experto en derecho o jurista', level: 'B2', difficultyScore: 5 },
  { letter: 'J', definition: 'Pasar de un punto a otro de forma rápida y sin transición gradual', answer: 'jump to', hint: 'Phrasal verb: saltar a una conclusión', level: 'B2', difficultyScore: 4 },
  { letter: 'J', definition: 'Equilibrar o compensar dos fuerzas o elementos opuestos', answer: 'juggle', hint: 'Manejar varias cosas a la vez con habilidad', level: 'B2', difficultyScore: 4 },

  // ── K ───────────────────────────────────────────────────────────────────
  { letter: 'K', definition: 'Mantenerse al día con los últimos cambios o desarrollos en algo', answer: 'keep up with', hint: 'Phrasal verb: estar al día en algo', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Conjunto de habilidades y conocimientos especializados en un campo', answer: 'know-how', hint: 'El conocimiento técnico especializado', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Elemento o factor que es fundamental para el éxito de algo', answer: 'key factor', hint: 'El factor más importante', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Desencadenar o poner en marcha un proceso o proyecto', answer: 'kick off', hint: 'Phrasal verb: iniciar o lanzar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Proceso de registrar y almacenar información de forma organizada', answer: 'keep track', hint: 'Phrasal verb: llevar un registro de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Habilidad especial para hacer algo con aparente facilidad', answer: 'knack', hint: 'Un don o habilidad natural', level: 'B2', difficultyScore: 5 },
  { letter: 'K', definition: 'Eliminar o suprimir algo que ya no es necesario', answer: 'knock out', hint: 'Phrasal verb: eliminar o suprimir algo', level: 'B2', difficultyScore: 4 },
  { letter: 'K', definition: 'Base de datos o repositorio de información sobre un tema', answer: 'knowledge base', hint: 'Repositorio de información organizada', level: 'B2', difficultyScore: 5 },
  { letter: 'K', definition: 'Ser consciente y tener en cuenta algo importante al actuar', answer: 'keep in mind', hint: 'Tener presente algo al hacer algo', level: 'B2', difficultyScore: 3 },
  { letter: 'K', definition: 'Resultado principal que se espera de un proceso o acción', answer: 'key outcome', hint: 'El resultado más importante', level: 'B2', difficultyScore: 4 },

  // ── L ───────────────────────────────────────────────────────────────────
  { letter: 'L', definition: 'Aprovechar algo o alguien para obtener una ventaja mayor', answer: 'leverage', hint: 'Usar algo como palanca para conseguir más', level: 'B2', difficultyScore: 5 },
  { letter: 'L', definition: 'Proceso de medir el rendimiento de algo en comparación con un estándar', answer: 'level up', hint: 'Phrasal verb: subir de nivel o mejorar', level: 'B2', difficultyScore: 4 },
  { letter: 'L', definition: 'Responsabilidad o deuda legal que tiene alguien por algo', answer: 'liability', hint: 'Responsabilidad legal o financiera', level: 'B2', difficultyScore: 5 },
  { letter: 'L', definition: 'Hacer que algo sea más sencillo y fácil de usar o entender', answer: 'localise', hint: 'Adaptar algo a un contexto local', level: 'B2', difficultyScore: 5 },
  { letter: 'L', definition: 'Proceso de hacer un plan detallado para conseguir un objetivo', answer: 'lay out', hint: 'Phrasal verb: planificar o estructurar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'L', definition: 'Que puede durar o sostenerse durante mucho tiempo sin agotarse', answer: 'long-lasting', hint: 'Que dura mucho tiempo', level: 'B2', difficultyScore: 4 },
  { letter: 'L', definition: 'Proceso de extraer enseñanzas de algo que ha ocurrido', answer: 'learn from', hint: 'Aprender de algo o alguien', level: 'B2', difficultyScore: 3 },
  { letter: 'L', definition: 'Analizar algo con mucho cuidado para detectar posibles problemas', answer: 'look into', hint: 'Phrasal verb: investigar o examinar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'L', definition: 'Que tiene una relación directa de causa y efecto con algo', answer: 'linked to', hint: 'Relacionado con algo de forma directa', level: 'B2', difficultyScore: 4 },
  { letter: 'L', definition: 'Proceso de reducir la complejidad de algo para hacerlo más manejable', answer: 'limit', hint: 'Limitar o reducir el alcance de algo', level: 'B2', difficultyScore: 3 },

  // ── M ───────────────────────────────────────────────────────────────────
  { letter: 'M', definition: 'Actuar como intermediario entre dos partes para llegar a un acuerdo', answer: 'mediate', hint: 'Mediar o arbitrar entre dos partes', level: 'B2', difficultyScore: 5 },
  { letter: 'M', definition: 'Vigilar y controlar algo de forma continua para detectar cambios', answer: 'monitor', hint: 'Seguir y controlar el progreso de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Hacer que algo sea más moderno o adaptado a los tiempos actuales', answer: 'modernise', hint: 'Actualizar o renovar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Proceso de combinar dos empresas u organizaciones en una sola', answer: 'merge', hint: 'Fusionar o unir dos entidades en una', level: 'B2', difficultyScore: 5 },
  { letter: 'M', definition: 'Crear un modelo o representación de cómo funciona algo', answer: 'model', hint: 'Modelar o representar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Hacer cambios o ajustes en algo para mejorar su funcionamiento', answer: 'modify', hint: 'Modificar o cambiar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Cantidad mínima que se puede aceptar de algo', answer: 'minimum', hint: 'El nivel más bajo aceptable', level: 'B2', difficultyScore: 3 },
  { letter: 'M', definition: 'Proceso de crear y mantener una red de contactos profesionales', answer: 'networking', hint: 'Construir una red de contactos', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Hacer que algo funcione bien con el menor gasto posible', answer: 'maximise', hint: 'Sacar el máximo partido posible', level: 'B2', difficultyScore: 4 },
  { letter: 'M', definition: 'Acción de comunicar algo de forma clara y efectiva a un grupo', answer: 'message', hint: 'Transmitir un mensaje clave', level: 'B2', difficultyScore: 3 },

  // ── N ───────────────────────────────────────────────────────────────────
  { letter: 'N', definition: 'Anular o contrarrestar el efecto de algo no deseado', answer: 'negate', hint: 'Anular o cancelar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'N', definition: 'Proceso de llegar a un acuerdo mediante concesiones mutuas', answer: 'negotiate', hint: 'Negociar un acuerdo entre partes', level: 'B2', difficultyScore: 4 },
  { letter: 'N', definition: 'Crear conexiones y relaciones profesionales con otras personas', answer: 'network', hint: 'Crear una red de contactos', level: 'B2', difficultyScore: 4 },
  { letter: 'N', definition: 'Describir o presentar algo de una manera imparcial y sin sesgos', answer: 'neutral', hint: 'Sin posicionarse a favor ni en contra', level: 'B2', difficultyScore: 4 },
  { letter: 'N', definition: 'Que no está claramente definido o delimitado en todos sus aspectos', answer: 'nuanced', hint: 'Con matices o detalles sutiles', level: 'B2', difficultyScore: 5 },
  { letter: 'N', definition: 'Cantidad exacta de veces que algo ocurre en un período', answer: 'number of', hint: 'La cantidad o el número de algo', level: 'B2', difficultyScore: 3 },
  { letter: 'N', definition: 'Proceso de dar forma o moldear algo según unas normas o reglas', answer: 'normalise', hint: 'Hacer que algo sea normal o estándar', level: 'B2', difficultyScore: 5 },
  { letter: 'N', definition: 'Destacar o señalar algo que es importante o digno de atención', answer: 'note', hint: 'Señalar o destacar algo importante', level: 'B2', difficultyScore: 3 },
  { letter: 'N', definition: 'Que no sigue las normas o expectativas establecidas', answer: 'non-standard', hint: 'Fuera de lo habitual o estándar', level: 'B2', difficultyScore: 4 },
  { letter: 'N', definition: 'Proceso de crear algo completamente nuevo desde cero', answer: 'novel', hint: 'Nuevo e innovador, no visto antes', level: 'B2', difficultyScore: 4 },

  // ── O ───────────────────────────────────────────────────────────────────
  { letter: 'O', definition: 'Resultado final que se obtiene después de un proceso', answer: 'outcome', hint: 'El resultado de un proceso', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Superar a alguien o algo siendo mejor o más eficiente', answer: 'outperform', hint: 'Rendir mejor que la competencia', level: 'B2', difficultyScore: 5 },
  { letter: 'O', definition: 'Supervisar algo para asegurarse de que funciona correctamente', answer: 'oversee', hint: 'Supervisar o controlar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Proceso de hacer que algo funcione mejor eliminando lo innecesario', answer: 'optimise', hint: 'Mejorar algo al máximo posible', level: 'B2', difficultyScore: 5 },
  { letter: 'O', definition: 'Elegir no participar en algo de forma voluntaria y deliberada', answer: 'opt out', hint: 'Phrasal verb: decidir no participar', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Lograr algo difícil a pesar de los obstáculos existentes', answer: 'overcome', hint: 'Superar dificultades u obstáculos', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Que está fuera de lo normal o de las expectativas habituales', answer: 'outlier', hint: 'Caso atípico o fuera de lo común', level: 'O', difficultyScore: 5, level: 'B2' },
  { letter: 'O', definition: 'Perspectiva o punto de vista desde el que se analiza algo', answer: 'outlook', hint: 'La perspectiva o visión de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Proceso de planificar o estructurar algo de forma clara', answer: 'outline', hint: 'Esquema o estructura de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'O', definition: 'Que ocurre con demasiada frecuencia o en exceso', answer: 'overwhelming', hint: 'Abrumador o excesivo', level: 'B2', difficultyScore: 4 },

  // ── P ───────────────────────────────────────────────────────────────────
  { letter: 'P', definition: 'Dar prioridad a las tareas más importantes sobre las menos urgentes', answer: 'prioritise', hint: 'Ordenar por importancia', level: 'B2', difficultyScore: 4 },
  { letter: 'P', definition: 'Analizar o examinar algo con mucha atención y detalle', answer: 'probe', hint: 'Investigar o sondear algo a fondo', level: 'B2', difficultyScore: 5 },
  { letter: 'P', definition: 'Proceso de hacer que algo mejore de forma continua y medible', answer: 'progress', hint: 'Avance o mejora progresiva', level: 'B2', difficultyScore: 3 },
  { letter: 'P', definition: 'Demostrar con hechos y argumentos que algo es correcto', answer: 'prove', hint: 'Demostrar algo con evidencias', level: 'B2', difficultyScore: 3 },
  { letter: 'P', definition: 'Hacer que algo ocurra antes de lo que estaba previsto', answer: 'precipitate', hint: 'Acelerar o provocar algo antes de tiempo', level: 'B2', difficultyScore: 5 },
  { letter: 'P', definition: 'Transformación profunda de algo que cambia de forma radical', answer: 'paradigm shift', hint: 'Cambio radical en la forma de pensar', level: 'B2', difficultyScore: 6 },
  { letter: 'P', definition: 'Evaluar la calidad o el nivel de algo en un momento concreto', answer: 'performance', hint: 'El rendimiento o desempeño de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'P', definition: 'Comprometerse a hacer algo o garantizar que algo ocurrirá', answer: 'pledge', hint: 'Comprometerse o prometer algo', level: 'B2', difficultyScore: 5 },
  { letter: 'P', definition: 'Proceso de identificar y seleccionar las mejores opciones disponibles', answer: 'pick out', hint: 'Phrasal verb: seleccionar lo mejor', level: 'B2', difficultyScore: 4 },
  { letter: 'P', definition: 'Documento oficial que describe la posición de una organización sobre algo', answer: 'policy', hint: 'La política o norma de una organización', level: 'B2', difficultyScore: 4 },

  // ── Q ───────────────────────────────────────────────────────────────────
  { letter: 'Q', definition: 'Medir o expresar algo de forma numérica y exacta', answer: 'quantify', hint: 'Medir con números algo abstracto', level: 'B2', difficultyScore: 5 },
  { letter: 'Q', definition: 'Consulta o pregunta formal que se hace para obtener información', answer: 'query', hint: 'Consulta o pregunta formal', level: 'B2', difficultyScore: 4 },
  { letter: 'Q', definition: 'Nivel de excelencia que se espera de algo o alguien', answer: 'quality', hint: 'El nivel de calidad de algo', level: 'B2', difficultyScore: 3 },
  { letter: 'Q', definition: 'Límite o cantidad máxima que se puede producir o distribuir', answer: 'quota', hint: 'La cuota o límite de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'Q', definition: 'Dejar algo de forma definitiva y sin intención de volver', answer: 'quit', hint: 'Abandonar algo definitivamente', level: 'B2', difficultyScore: 3 },
  { letter: 'Q', definition: 'Texto o palabras exactas que alguien ha dicho o escrito', answer: 'quotation', hint: 'Una cita textual de alguien', level: 'B2', difficultyScore: 4 },
  { letter: 'Q', definition: 'Tener los méritos o requisitos necesarios para algo', answer: 'qualify for', hint: 'Cumplir los requisitos para algo', level: 'B2', difficultyScore: 4 },
  { letter: 'Q', definition: 'Proceso de investigar algo haciendo preguntas concretas', answer: 'question', hint: 'Cuestionar o poner en duda algo', level: 'B2', difficultyScore: 3 },
  { letter: 'Q', definition: 'Hacer algo en menos tiempo del previsto y de forma eficiente', answer: 'quick fix', hint: 'Solución rápida aunque no perfecta', level: 'B2', difficultyScore: 4 },
  { letter: 'Q', definition: 'Que es de gran calidad y excelente en todos los aspectos', answer: 'quality assured', hint: 'Con garantía de calidad', level: 'B2', difficultyScore: 4 },

  // ── R ───────────────────────────────────────────────────────────────────
  { letter: 'R', definition: 'Volver a pensar en algo y cambiar de opinión o enfoque', answer: 'reconsider', hint: 'Pensar de nuevo sobre algo', level: 'B2', difficultyScore: 4 },
  { letter: 'R', definition: 'Proceso de hacer que algo vuelva a ser como antes', answer: 'restore', hint: 'Restaurar o recuperar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'R', definition: 'Examinar o revisar algo de forma sistemática para mejorarlo', answer: 'review', hint: 'Revisar o evaluar algo', level: 'B2', difficultyScore: 3 },
  { letter: 'R', definition: 'Repetir algo varias veces hasta que sale de forma natural', answer: 'rehearse', hint: 'Ensayar o practicar algo repetidamente', level: 'B2', difficultyScore: 4 },
  { letter: 'R', definition: 'Proceso de reorganizar algo para que funcione mejor', answer: 'restructure', hint: 'Cambiar la estructura de algo', level: 'B2', difficultyScore: 5 },
  { letter: 'R', definition: 'Hacer que algo sea relevante y aplicable a un contexto actual', answer: 'reframe', hint: 'Cambiar la forma de presentar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'R', definition: 'Basarse en algo o alguien de forma habitual y necesaria', answer: 'rely on', hint: 'Phrasal verb: depender o confiar en algo', level: 'B2', difficultyScore: 4 },
  { letter: 'R', definition: 'Detectar o identificar algo que no estaba claro antes', answer: 'recognise', hint: 'Reconocer o identificar algo', level: 'B2', difficultyScore: 3 },
  { letter: 'R', definition: 'Hacer que algo sea más eficiente eliminando lo redundante', answer: 'rationalise', hint: 'Racionalizar o simplificar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'R', definition: 'Proceso de medir el éxito de algo comparando resultados con objetivos', answer: 'results-driven', hint: 'Orientado a resultados concretos', level: 'B2', difficultyScore: 4 },

  // ── S ───────────────────────────────────────────────────────────────────
  { letter: 'S', definition: 'Hacer que algo sea más simple y fácil de entender o usar', answer: 'simplify', hint: 'Simplificar o hacer más sencillo algo', level: 'B2', difficultyScore: 4 },
  { letter: 'S', definition: 'Conjunto de pasos o acciones ordenadas para conseguir algo', answer: 'strategy', hint: 'La estrategia para conseguir algo', level: 'B2', difficultyScore: 4 },
  { letter: 'S', definition: 'Proceso de dividir algo en partes más pequeñas para analizarlo', answer: 'segment', hint: 'Dividir algo en segmentos o partes', level: 'B2', difficultyScore: 5 },
  { letter: 'S', definition: 'Asegurar que algo funcione bien y sin interrupciones', answer: 'sustain', hint: 'Mantener o sostener algo en el tiempo', level: 'B2', difficultyScore: 5 },
  { letter: 'S', definition: 'Reunión en la que se habla de algo de forma estructurada', answer: 'session', hint: 'Una sesión de trabajo o formación', level: 'B2', difficultyScore: 3 },
  { letter: 'S', definition: 'Proceso de hacer que algo se escale y funcione a mayor tamaño', answer: 'scale up', hint: 'Phrasal verb: ampliar la escala de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'S', definition: 'Punto de vista o perspectiva desde la que se analiza algo', answer: 'standpoint', hint: 'El punto de vista desde el que algo se ve', level: 'B2', difficultyScore: 5 },
  { letter: 'S', definition: 'Proceso de ordenar algo siguiendo una lógica o criterio establecido', answer: 'sort out', hint: 'Phrasal verb: resolver o poner en orden algo', level: 'B2', difficultyScore: 4 },
  { letter: 'S', definition: 'Habilidad para seguir adelante a pesar de las dificultades', answer: 'stamina', hint: 'Resistencia física o mental', level: 'B2', difficultyScore: 5 },
  { letter: 'S', definition: 'Resultado o efecto secundario que no estaba previsto inicialmente', answer: 'side effect', hint: 'Efecto secundario o no deseado', level: 'B2', difficultyScore: 4 },

  // ── T ───────────────────────────────────────────────────────────────────
  { letter: 'T', definition: 'Ajustar algo para que encaje perfectamente en un contexto', answer: 'tailor', hint: 'Adaptar algo a medida para alguien', level: 'B2', difficultyScore: 5 },
  { letter: 'T', definition: 'Demostrar con evidencias que algo es verdad o existe', answer: 'testify', hint: 'Dar testimonio o atestiguar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'T', definition: 'Convertir un concepto abstracto en algo concreto y medible', answer: 'translate into', hint: 'Phrasal verb: convertir ideas en acciones', level: 'B2', difficultyScore: 5 },
  { letter: 'T', definition: 'Proceso de cambiar de una forma o estado a otro de forma gradual', answer: 'transition', hint: 'El paso de un estado a otro', level: 'B2', difficultyScore: 4 },
  { letter: 'T', definition: 'Seguir o rastrear el movimiento o progreso de algo a lo largo del tiempo', answer: 'track', hint: 'Seguir o rastrear algo', level: 'B2', difficultyScore: 4 },
  { letter: 'T', definition: 'Situación en la que hay que ceder algo para conseguir otra cosa', answer: 'trade-off', hint: 'Intercambio o compensación entre dos opciones', level: 'B2', difficultyScore: 5 },
  { letter: 'T', definition: 'Proceso de transmitir habilidades o conocimientos a alguien', answer: 'transfer', hint: 'Transferir conocimiento o habilidades', level: 'B2', difficultyScore: 4 },
  { letter: 'T', definition: 'Hacer que algo sea más claro, evidente y fácil de ver', answer: 'transparent', hint: 'Claro, sin secretos u ocultaciones', level: 'B2', difficultyScore: 4 },
  { letter: 'T', definition: 'Proceso de verificar si algo funciona antes de usarlo definitivamente', answer: 'trial', hint: 'Prueba o ensayo de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'T', definition: 'Punto de inflexión crítico a partir del cual algo cambia de forma irreversible', answer: 'tipping point', hint: 'El momento decisivo en que algo cambia', level: 'B2', difficultyScore: 5 },

  // ── U ───────────────────────────────────────────────────────────────────
  { letter: 'U', definition: 'Estar presente en todos los contextos o situaciones de forma constante', answer: 'ubiquitous', hint: 'Que está en todas partes', level: 'B2', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de hacer que algo mejore pasando a un nivel superior', answer: 'upgrade', hint: 'Mejorar o actualizar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'U', definition: 'Aprovechar algo al máximo para sacar el mayor beneficio posible', answer: 'utilise', hint: 'Usar algo de la forma más eficiente', level: 'B2', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de llegar a un acuerdo entre dos posturas opuestas', answer: 'unify', hint: 'Unificar o hacer que algo sea coherente', level: 'B2', difficultyScore: 5 },
  { letter: 'U', definition: 'Que no ha sido previsto y ocurre de forma inesperada', answer: 'unanticipated', hint: 'Algo que no se esperaba que ocurriera', level: 'B2', difficultyScore: 5 },
  { letter: 'U', definition: 'Proceso de revisar y poner al día información o un sistema', answer: 'update', hint: 'Actualizar algo para que esté al día', level: 'B2', difficultyScore: 3 },
  { letter: 'U', definition: 'Comprender algo de forma profunda y completa', answer: 'understand', hint: 'Entender algo plenamente', level: 'B2', difficultyScore: 3 },
  { letter: 'U', definition: 'Conseguir un nivel superior de habilidad o conocimiento', answer: 'upskill', hint: 'Mejorar las habilidades profesionales', level: 'B2', difficultyScore: 4 },
  { letter: 'U', definition: 'Que resulta difícil de resolver o que no tiene una solución obvia', answer: 'unclear', hint: 'Que no está claro o definido', level: 'B2', difficultyScore: 3 },
  { letter: 'U', definition: 'Proceso de llegar a un punto de acuerdo común entre partes', answer: 'unanimous', hint: 'Que todos están de acuerdo', level: 'B2', difficultyScore: 5 },

  // ── V ───────────────────────────────────────────────────────────────────
  { letter: 'V', definition: 'Comprobar que algo es correcto o cumple los requisitos establecidos', answer: 'validate', hint: 'Verificar o confirmar algo', level: 'B2', difficultyScore: 4 },
  { letter: 'V', definition: 'Conjunto de opciones distintas disponibles en un mismo contexto', answer: 'variety', hint: 'La variedad o diversidad de algo', level: 'B2', difficultyScore: 3 },
  { letter: 'V', definition: 'Que cambia de forma frecuente o según las circunstancias', answer: 'variable', hint: 'Que varía o es inconsistente', level: 'B2', difficultyScore: 4 },
  { letter: 'V', definition: 'Ser susceptible de sufrir daños o verse afectado negativamente', answer: 'vulnerable', hint: 'Expuesto o susceptible al daño', level: 'B2', difficultyScore: 4 },
  { letter: 'V', definition: 'Confirmar la autenticidad o exactitud de algo de forma oficial', answer: 'verify', hint: 'Comprobar la veracidad de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'V', definition: 'Dar relevancia o importancia a algo que se considera esencial', answer: 'value', hint: 'Dar valor o apreciar algo', level: 'B2', difficultyScore: 3 },
  { letter: 'V', definition: 'Perspectiva o posición desde la que alguien analiza un tema', answer: 'viewpoint', hint: 'Punto de vista o perspectiva', level: 'B2', difficultyScore: 4 },
  { letter: 'V', definition: 'Proceso de comprobar que algo funciona como se esperaba', answer: 'verification', hint: 'El proceso de verificar algo', level: 'B2', difficultyScore: 5 },
  { letter: 'V', definition: 'Que puede ser observado o medido directamente', answer: 'visible', hint: 'Que se puede ver o percibir', level: 'B2', difficultyScore: 3 },
  { letter: 'V', definition: 'Proporcionar fondos o apoyo económico para que algo se lleve a cabo', answer: 'venture', hint: 'Aventurarse o invertir en algo arriesgado', level: 'B2', difficultyScore: 5 },

  // ── W ───────────────────────────────────────────────────────────────────
  { letter: 'W', definition: 'Proceso de integrar algo en un flujo de trabajo existente', answer: 'workflow', hint: 'El flujo o proceso de trabajo', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Poner por escrito algo de forma clara y estructurada', answer: 'write up', hint: 'Phrasal verb: redactar algo de forma completa', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Punto o aspecto que representa una debilidad en algo', answer: 'weakness', hint: 'El punto débil de algo o alguien', level: 'B2', difficultyScore: 3 },
  { letter: 'W', definition: 'Conjunto de creencias y valores que estructuran cómo uno entiende el mundo', answer: 'worldview', hint: 'La cosmovisión o forma de ver el mundo', level: 'B2', difficultyScore: 5 },
  { letter: 'W', definition: 'Demostrar con hechos que algo tiene valor o merece la pena', answer: 'worthwhile', hint: 'Que vale la pena hacer', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Entorno o contexto en el que algo existe y funciona', answer: 'within', hint: 'Dentro de un límite o contexto', level: 'B2', difficultyScore: 3 },
  { letter: 'W', definition: 'Superar un obstáculo o problema de forma creativa', answer: 'work around', hint: 'Phrasal verb: encontrar una forma alternativa', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Proceso de hacer algo con mucha atención y precisión', answer: 'work through', hint: 'Phrasal verb: resolver algo paso a paso', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Consecuencias que se extienden más allá del impacto inicial', answer: 'wider impact', hint: 'Impacto más amplio y extendido', level: 'B2', difficultyScore: 4 },
  { letter: 'W', definition: 'Estándar o nivel de referencia que todos deben cumplir', answer: 'widespread', hint: 'Extendido o generalizado en muchos ámbitos', level: 'B2', difficultyScore: 4 },

  // ── X ───────────────────────────────────────────────────────────────────
  { letter: 'X', definition: 'Técnica médica de imagen para ver el interior del cuerpo con rayos', answer: 'x-ray', hint: 'Radiografía médica', level: 'B2', difficultyScore: 3 },
  { letter: 'X', definition: 'Miedo extremo e irracional hacia personas extranjeras o diferentes', answer: 'xenophobia', hint: 'Fobia o rechazo hacia el extranjero', level: 'B2', difficultyScore: 5 },
  { letter: 'X', definition: 'Proceso de reproducir documentos usando electricidad estática y luz', answer: 'xerography', hint: 'La tecnología de las fotocopiadoras', level: 'B2', difficultyScore: 5 },
  { letter: 'X', definition: 'Estudio hipotético de organismos que podrían existir en otros planetas', answer: 'xenobiology', hint: 'Biología de posibles seres extraterrestres', level: 'B2', difficultyScore: 6 },
  { letter: 'X', definition: 'Instrumento de percusión de láminas que se toca con mazas', answer: 'xylophone', hint: 'Instrumento de percusión de láminas', level: 'B2', difficultyScore: 4 },
  { letter: 'X', definition: 'Sistema de escritura que usa símbolos visuales como el chino antiguo', answer: 'xenoglyph', hint: 'Sistema de escritura de otra cultura', level: 'B2', difficultyScore: 6 },
  { letter: 'X', definition: 'Trasplante de órganos entre especies diferentes', answer: 'xenotransplant', hint: 'Trasplante entre especies distintas', level: 'B2', difficultyScore: 6 },
  { letter: 'X', definition: 'Festividad navideña del 25 de diciembre en su forma abreviada', answer: 'Xmas', hint: 'La Navidad en su forma abreviada', level: 'B2', difficultyScore: 2 },

  // ── Y ───────────────────────────────────────────────────────────────────
  { letter: 'Y', definition: 'Producir o generar un resultado, especialmente económico', answer: 'yield', hint: 'Producir beneficios o resultados', level: 'B2', difficultyScore: 5 },
  { letter: 'Y', definition: 'Desear algo con mucha intensidad y de forma sostenida', answer: 'yearn', hint: 'Anhelar algo profundamente', level: 'B2', difficultyScore: 4 },
  { letter: 'Y', definition: 'El pasado reciente o el período de tiempo que acaba de terminar', answer: 'yesterday', hint: 'El día de antes de hoy', level: 'B2', difficultyScore: 2 },
  { letter: 'Y', definition: 'Que tiene poca experiencia o que está comenzando en algo', answer: 'young', hint: 'Joven o novato en algo', level: 'B2', difficultyScore: 2 },
  { letter: 'Y', definition: 'Unidad de medida de información digital equivalente a un billón de gigabytes', answer: 'yottabyte', hint: 'La mayor unidad de almacenamiento digital', level: 'B2', difficultyScore: 6 },
  { letter: 'Y', definition: 'Tiempos pasados ya lejanos e idealizados por la memoria', answer: 'yesteryear', hint: 'El pasado remoto e idealizado', level: 'B2', difficultyScore: 5 },
  { letter: 'Y', definition: 'Práctica de meditación y posturas de origen hindú', answer: 'yoga', hint: 'Práctica de meditación y posturas', level: 'B2', difficultyScore: 2 },
  { letter: 'Y', definition: 'Embarcación elegante usada para navegar por placer', answer: 'yacht', hint: 'Barco de lujo para navegar', level: 'B2', difficultyScore: 3 },
  { letter: 'Y', definition: 'Alimento lácteo cremoso hecho con leche fermentada', answer: 'yogurt', hint: 'Lácteo cremoso fermentado', level: 'B2', difficultyScore: 2 },
  { letter: 'Y', definition: 'Pronombre de segunda persona usado en inglés para singular y plural', answer: 'you', hint: 'Tú o vosotros en inglés', level: 'B2', difficultyScore: 1 },

  // ── Z ───────────────────────────────────────────────────────────────────
  { letter: 'Z', definition: 'Gran pasión y entusiasmo que alguien pone en una causa', answer: 'zeal', hint: 'Fervor o pasión intensa', level: 'B2', difficultyScore: 4 },
  { letter: 'Z', definition: 'Punto más alto que algo puede alcanzar en su desarrollo', answer: 'zenith', hint: 'El punto culminante de algo', level: 'B2', difficultyScore: 4 },
  { letter: 'Z', definition: 'El número cero, punto de partida en cualquier escala', answer: 'zero', hint: 'El número 0, punto de partida', level: 'B2', difficultyScore: 2 },
  { letter: 'Z', definition: 'División de un territorio en áreas con reglas y usos concretos', answer: 'zoning', hint: 'La planificación urbana por zonas', level: 'B2', difficultyScore: 4 },
  { letter: 'Z', definition: 'Herramienta para acercar o alejar imágenes en cámara o pantalla', answer: 'zoom', hint: 'Acercar o alejar una imagen', level: 'B2', difficultyScore: 2 },
  { letter: 'Z', definition: 'Persona con una pasión extrema y casi fanática por una causa', answer: 'zealot', hint: 'Fanático o apasionado extremo', level: 'B2', difficultyScore: 5 },
  { letter: 'Z', definition: 'Rama de la biología que estudia los animales y su comportamiento', answer: 'zoology', hint: 'La ciencia que estudia los animales', level: 'B2', difficultyScore: 4 },
  { letter: 'Z', definition: 'Línea o patrón que va de un lado al otro en forma de zeta', answer: 'zigzag', hint: 'Patrón en forma de Z repetida', level: 'B2', difficultyScore: 3 },
  { letter: 'Z', definition: 'Código numérico postal que identifica una zona geográfica', answer: 'zip code', hint: 'El código postal en inglés americano', level: 'B2', difficultyScore: 2 },
  { letter: 'Z', definition: 'Estado de energía y vitalidad que impulsa a actuar con fuerza', answer: 'zest', hint: 'Energía y entusiasmo por la vida', level: 'B2', difficultyScore: 4 },
]

async function main() {
  console.log('🌱 Seeding B2 words...')

  await prisma.word.deleteMany({ where: { level: 'B2' } })
  console.log('  Cleared B2 words')

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

  console.log('\n✅ B2 seed complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
