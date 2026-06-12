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
  { letter: 'A', definition: 'Capacidad de hacer algo bien gracias a la práctica o el talento', answer: 'ability', hint: 'Habilidad o destreza', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Persona que actúa en películas o en el teatro', answer: 'actor', hint: 'Trabaja en el cine o teatro', level: 'B1', difficultyScore: 2 },
  { letter: 'A', definition: 'Mejorar o crecer en calidad, posición o cantidad', answer: 'advance', hint: 'Progresar, avanzar', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Estar de acuerdo con alguien en una opinión o decisión', answer: 'agree', hint: 'Lo contrario de disagree', level: 'B1', difficultyScore: 2 },
  { letter: 'A', definition: 'Cantidad de algo, cuánto hay de una cosa', answer: 'amount', hint: 'La cantidad de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Disculparse con alguien por haber hecho algo mal', answer: 'apologise', hint: 'Pedir perdón en inglés británico', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Parecer o tener un aspecto determinado a los ojos de los demás', answer: 'appear', hint: 'Parecer o aparecer', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Conseguir algo con esfuerzo y dedicación', answer: 'achieve', hint: 'Lograr una meta', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Reunión o cita que se tiene con alguien a una hora concreta', answer: 'appointment', hint: 'Cita con el médico o dentista', level: 'B1', difficultyScore: 3 },
  { letter: 'A', definition: 'Actividad o evento que se organiza para entretener a la gente', answer: 'activity', hint: 'Lo que haces en tu tiempo libre', level: 'B1', difficultyScore: 2 },

  // ── B ───────────────────────────────────────────────────────────────────
  { letter: 'B', definition: 'Prohibir algo o a alguien de forma oficial', answer: 'ban', hint: 'Prohibir legalmente', level: 'B1', difficultyScore: 3 },
  { letter: 'B', definition: 'Comportamiento o manera de actuar de una persona', answer: 'behaviour', hint: 'Cómo se comporta alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'B', definition: 'Creer o tener fe en algo o alguien', answer: 'believe', hint: 'Tener fe en algo', level: 'B1', difficultyScore: 2 },
  { letter: 'B', definition: 'Presupuesto o cantidad de dinero disponible para gastar', answer: 'budget', hint: 'El dinero que tienes para gastar', level: 'B1', difficultyScore: 3 },
  { letter: 'B', definition: 'Pausar o interrumpir una actividad por un momento', answer: 'break', hint: 'Descanso o pausa en el trabajo', level: 'B1', difficultyScore: 2 },
  { letter: 'B', definition: 'Introducir o trasladar a algo que ya existía algo nuevo', answer: 'bring in', hint: 'Phrasal verb: introducir algo nuevo', level: 'B1', difficultyScore: 4 },
  { letter: 'B', definition: 'Desarrollarse o crecer con éxito algo en un ambiente favorable', answer: 'bloom', hint: 'Florecer o prosperar', level: 'B1', difficultyScore: 4 },
  { letter: 'B', definition: 'Persona que nació en el mismo lugar o país que tú', answer: 'born', hint: 'Where were you...?', level: 'B1', difficultyScore: 2 },
  { letter: 'B', definition: 'Vínculo o relación fuerte entre personas o grupos', answer: 'bond', hint: 'Lazo o vínculo emocional', level: 'B1', difficultyScore: 4 },
  { letter: 'B', definition: 'Publicar o enviar algo a muchas personas a la vez', answer: 'broadcast', hint: 'Emitir un programa por la radio o televisión', level: 'B1', difficultyScore: 4 },

  // ── C ───────────────────────────────────────────────────────────────────
  { letter: 'C', definition: 'Profesión u ocupación laboral que alguien tiene a lo largo de su vida', answer: 'career', hint: 'Tu trayectoria profesional', level: 'B1', difficultyScore: 3 },
  { letter: 'C', definition: 'Cambiar o transformar algo de forma significativa', answer: 'change', hint: 'Modificar o transformar algo', level: 'B1', difficultyScore: 2 },
  { letter: 'C', definition: 'Elegir entre varias opciones la que más te conviene', answer: 'choose', hint: 'Escoger o seleccionar', level: 'B1', difficultyScore: 2 },
  { letter: 'C', definition: 'Comparar dos o más cosas para ver en qué se parecen', answer: 'compare', hint: 'Poner dos cosas una al lado de la otra para ver diferencias', level: 'B1', difficultyScore: 3 },
  { letter: 'C', definition: 'Terminar o finalizar algo que has empezado', answer: 'complete', hint: 'Acabar, finalizar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'C', definition: 'Resolver o encontrar la solución a un problema', answer: 'cope', hint: 'Arreglárselas, lidiar con algo difícil', level: 'B1', difficultyScore: 4 },
  { letter: 'C', definition: 'Reunir o coleccionar cosas del mismo tipo juntas', answer: 'collect', hint: 'Juntar o recopilar cosas', level: 'B1', difficultyScore: 3 },
  { letter: 'C', definition: 'Comunicar algo a alguien usando palabras escritas o habladas', answer: 'convey', hint: 'Transmitir un mensaje o idea', level: 'B1', difficultyScore: 4 },
  { letter: 'C', definition: 'Habilidad para pensar de forma original y crear cosas nuevas', answer: 'creativity', hint: 'La capacidad de ser creativo', level: 'B1', difficultyScore: 4 },
  { letter: 'C', definition: 'Estar seguro o tener plena confianza en uno mismo', answer: 'confident', hint: 'Seguro de sí mismo', level: 'B1', difficultyScore: 3 },

  // ── D ───────────────────────────────────────────────────────────────────
  { letter: 'D', definition: 'Hablar con otras personas sobre un tema para intercambiar ideas', answer: 'discuss', hint: 'Debatir o hablar sobre algo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Cubrir o recorrer una distancia de un lugar a otro', answer: 'distance', hint: 'Espacio entre dos puntos', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Mostrar o enseñar algo de forma visual a los demás', answer: 'display', hint: 'Mostrar o exhibir algo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Encontrar la causa o el origen de algo investigando', answer: 'discover', hint: 'Descubrir algo nuevo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Llevar a alguien o algo de un lugar a otro en un vehículo', answer: 'deliver', hint: 'Entregar o repartir algo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Basarse en algo o alguien para conseguir lo que necesitas', answer: 'depend', hint: 'Depender de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Hacer que algo sea diferente o más adecuado a las necesidades', answer: 'develop', hint: 'Desarrollar o mejorar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Phrasal verb que significa anotar algo en papel para no olvidarlo', answer: 'down', hint: 'Write down significa anotar', level: 'B1', difficultyScore: 3 },
  { letter: 'D', definition: 'Dibujar o trazar líneas para hacer una imagen', answer: 'draw', hint: 'Dibujar en inglés', level: 'B1', difficultyScore: 2 },
  { letter: 'D', definition: 'Tener muchas ganas de hacer o conseguir algo', answer: 'desire', hint: 'Desear algo intensamente', level: 'B1', difficultyScore: 3 },

  // ── E ───────────────────────────────────────────────────────────────────
  { letter: 'E', definition: 'Dinero que ganas por trabajar o por un negocio', answer: 'earn', hint: 'Ganar dinero trabajando', level: 'B1', difficultyScore: 3 },
  { letter: 'E', definition: 'Convencer a alguien para que haga algo con entusiasmo', answer: 'encourage', hint: 'Animar a alguien a hacer algo', level: 'B1', difficultyScore: 3 },
  { letter: 'E', definition: 'Disfrutar mucho de algo o pasarlo bien haciendo algo', answer: 'enjoy', hint: 'Disfrutar en inglés', level: 'B1', difficultyScore: 2 },
  { letter: 'E', definition: 'Afectar o influir de forma positiva o negativa en algo o alguien', answer: 'effect', hint: 'El resultado o consecuencia de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'E', definition: 'Conjunto de reglas o costumbres que guían el comportamiento correcto', answer: 'ethics', hint: 'Principios morales de conducta', level: 'B1', difficultyScore: 4 },
  { letter: 'E', definition: 'Información o prueba que demuestra que algo es verdad', answer: 'evidence', hint: 'Prueba o dato que confirma algo', level: 'B1', difficultyScore: 4 },
  { letter: 'E', definition: 'Ir más allá de los límites o superar las expectativas', answer: 'exceed', hint: 'Superar o ir más allá de algo', level: 'B1', difficultyScore: 4 },
  { letter: 'E', definition: 'Buscar y analizar algo con detalle para entenderlo mejor', answer: 'explore', hint: 'Investigar o descubrir algo nuevo', level: 'B1', difficultyScore: 3 },
  { letter: 'E', definition: 'Poner especial atención y esfuerzo en algo importante', answer: 'emphasise', hint: 'Dar importancia o recalcar algo', level: 'B1', difficultyScore: 4 },
  { letter: 'E', definition: 'Hacer que algo exista o empiece a funcionar por primera vez', answer: 'establish', hint: 'Fundar o crear algo nuevo', level: 'B1', difficultyScore: 4 },

  // ── F ───────────────────────────────────────────────────────────────────
  { letter: 'F', definition: 'No pasar un examen o no conseguir algo que intentabas', answer: 'fail', hint: 'Suspender o fracasar', level: 'B1', difficultyScore: 2 },
  { letter: 'F', definition: 'Ser fiel a lo que has prometido o cumplir con tus responsabilidades', answer: 'follow through', hint: 'Phrasal verb: cumplir lo que prometiste', level: 'B1', difficultyScore: 4 },
  { letter: 'F', definition: 'Concentrarse en algo o poner toda la atención en un punto', answer: 'focus', hint: 'Centrarse en algo', level: 'B1', difficultyScore: 3 },
  { letter: 'F', definition: 'Predecir lo que va a pasar en el futuro basándose en datos', answer: 'forecast', hint: 'Predecir o pronosticar', level: 'B1', difficultyScore: 4 },
  { letter: 'F', definition: 'Dejar de recordar algo, perder el recuerdo de algo', answer: 'forget', hint: 'Lo contrario de remember', level: 'B1', difficultyScore: 2 },
  { letter: 'F', definition: 'Estar en libertad, no estar en la cárcel o sin restricciones', answer: 'free', hint: 'Libre en inglés', level: 'B1', difficultyScore: 2 },
  { letter: 'F', definition: 'Relación de amistad entre personas que se conocen bien', answer: 'friendship', hint: 'La amistad en inglés', level: 'B1', difficultyScore: 3 },
  { letter: 'F', definition: 'Llenar por completo un espacio o recipiente', answer: 'fill', hint: 'Rellenar o llenar algo', level: 'B1', difficultyScore: 2 },
  { letter: 'F', definition: 'Descubrir la verdad o información sobre algo investigando', answer: 'find out', hint: 'Phrasal verb: descubrir o enterarse de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'F', definition: 'Proceso de hacer que algo funcione de forma adecuada', answer: 'function', hint: 'Funcionar o cumplir un propósito', level: 'B1', difficultyScore: 3 },

  // ── G ───────────────────────────────────────────────────────────────────
  { letter: 'G', definition: 'Objetivo o meta que se quiere alcanzar con esfuerzo', answer: 'goal', hint: 'El objetivo que quieres lograr', level: 'B1', difficultyScore: 2 },
  { letter: 'G', definition: 'Reunir o juntar personas o cosas en un mismo lugar', answer: 'gather', hint: 'Reunirse o juntar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'G', definition: 'Producir o crear algo, especialmente energía o ideas', answer: 'generate', hint: 'Producir o crear algo', level: 'B1', difficultyScore: 3 },
  { letter: 'G', definition: 'Volverse o llegar a ser algo diferente a lo que eras', answer: 'grow', hint: 'Crecer o convertirse en algo', level: 'B1', difficultyScore: 2 },
  { letter: 'G', definition: 'Persona que te muestra el camino o te explica algo desconocido', answer: 'guide', hint: 'El que te orienta', level: 'B1', difficultyScore: 2 },
  { letter: 'G', definition: 'Recibir o adquirir algo que antes no tenías', answer: 'gain', hint: 'Obtener o conseguir algo', level: 'B1', difficultyScore: 3 },
  { letter: 'G', definition: 'Reconocer y dar valor a lo que tienes o lo que hacen por ti', answer: 'grateful', hint: 'Agradecido por algo', level: 'B1', difficultyScore: 3 },
  { letter: 'G', definition: 'Avanzar bien en una tarea o proyecto, progresar', answer: 'get on', hint: 'Phrasal verb: llevarse bien o progresar', level: 'B1', difficultyScore: 3 },
  { letter: 'G', definition: 'El conjunto de acciones o pasos para hacer algo de forma ordenada', answer: 'guidelines', hint: 'Directrices o instrucciones', level: 'B1', difficultyScore: 4 },
  { letter: 'G', definition: 'Mirar algo fijamente durante un tiempo', answer: 'gaze', hint: 'Mirar fijamente o contemplar', level: 'B1', difficultyScore: 4 },

  // ── H ───────────────────────────────────────────────────────────────────
  { letter: 'H', definition: 'Ocurrir o suceder algo en un momento determinado', answer: 'happen', hint: 'Ocurrir o pasar algo', level: 'B1', difficultyScore: 2 },
  { letter: 'H', definition: 'Ocuparse de algo o gestionarlo con responsabilidad', answer: 'handle', hint: 'Manejar o gestionar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'H', definition: 'Ser difícil o trabajoso de hacer o conseguir algo', answer: 'hard', hint: 'Difícil o duro', level: 'B1', difficultyScore: 2 },
  { letter: 'H', definition: 'Causar daño o perjuicio a alguien o algo', answer: 'harm', hint: 'Dañar o perjudicar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'H', definition: 'Tener como objetivo o querer conseguir algo concreto', answer: 'head for', hint: 'Phrasal verb: dirigirse hacia algo', level: 'B1', difficultyScore: 4 },
  { letter: 'H', definition: 'Ser sincero y decir la verdad en todo momento', answer: 'honest', hint: 'Sincero y veraz', level: 'B1', difficultyScore: 3 },
  { letter: 'H', definition: 'Albergar o dar cobijo a alguien en tu casa', answer: 'host', hint: 'Anfitrión o recibir a alguien en casa', level: 'B1', difficultyScore: 3 },
  { letter: 'H', definition: 'Trabajo o tarea que hay que hacer con esfuerzo y dedicación', answer: 'hard work', hint: 'Trabajo duro y dedicado', level: 'B1', difficultyScore: 3 },
  { letter: 'H', definition: 'Cantidad de algo que ya fue medida, historia o registro pasado', answer: 'history', hint: 'El pasado o los eventos anteriores', level: 'B1', difficultyScore: 2 },
  { letter: 'H', definition: 'Reír o encontrar algo divertido y cómico', answer: 'humour', hint: 'El sentido del humor', level: 'B1', difficultyScore: 3 },

  // ── I ───────────────────────────────────────────────────────────────────
  { letter: 'I', definition: 'Identificar o reconocer algo o alguien por sus características', answer: 'identify', hint: 'Reconocer o identificar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Causar una impresión fuerte o dejar huella en alguien', answer: 'impress', hint: 'Impresionar a alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Estar incluido o formar parte de algo o grupo', answer: 'include', hint: 'Incluir o contener algo', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Aumentar en tamaño, número o intensidad de forma progresiva', answer: 'increase', hint: 'Aumentar o crecer', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Ejercer efecto sobre alguien para que cambie de opinión o comportamiento', answer: 'influence', hint: 'Influir en alguien', level: 'B1', difficultyScore: 4 },
  { letter: 'I', definition: 'Dar información a alguien sobre algo que necesita saber', answer: 'inform', hint: 'Informar o notificar a alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Tener interés o curiosidad por algo o alguien', answer: 'interested', hint: 'Estar interesado en algo', level: 'B1', difficultyScore: 2 },
  { letter: 'I', definition: 'Crear o diseñar algo que no existía antes', answer: 'invent', hint: 'Inventar algo nuevo', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Buscar a la persona adecuada para un puesto de trabajo haciéndole preguntas', answer: 'interview', hint: 'Entrevista de trabajo', level: 'B1', difficultyScore: 3 },
  { letter: 'I', definition: 'Dinero que se obtiene de un trabajo o actividad económica', answer: 'income', hint: 'Los ingresos económicos', level: 'B1', difficultyScore: 3 },

  // ── J ───────────────────────────────────────────────────────────────────
  { letter: 'J', definition: 'Viaje o trayecto de un lugar a otro, especialmente largo', answer: 'journey', hint: 'Un viaje largo', level: 'B1', difficultyScore: 3 },
  { letter: 'J', definition: 'Persona que escribe noticias para periódicos o medios de comunicación', answer: 'journalist', hint: 'Periodista en inglés', level: 'B1', difficultyScore: 3 },
  { letter: 'J', definition: 'Sentimiento de satisfacción y placer por algo bueno que ocurre', answer: 'joy', hint: 'Alegría o felicidad', level: 'B1', difficultyScore: 2 },
  { letter: 'J', definition: 'Evaluar o valorar algo o a alguien para dar una opinión', answer: 'judge', hint: 'Juzgar o evaluar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'J', definition: 'Unirse a un grupo o organización de forma voluntaria', answer: 'join', hint: 'Unirse a algo', level: 'B1', difficultyScore: 2 },
  { letter: 'J', definition: 'Libro personal donde alguien escribe sus pensamientos y experiencias', answer: 'journal', hint: 'Diario personal en inglés', level: 'B1', difficultyScore: 3 },
  { letter: 'J', definition: 'Turno o posición que cada persona ocupa en una fila o lista', answer: 'just', hint: 'Justo, exactamente o hace un momento', level: 'B1', difficultyScore: 2 },
  { letter: 'J', definition: 'Ser justo e imparcial al tratar a todas las personas por igual', answer: 'justice', hint: 'La justicia en inglés', level: 'B1', difficultyScore: 3 },
  { letter: 'J', definition: 'Guardar o conservar algo para no gastarlo o perderlo', answer: 'keep', hint: 'Conservar o quedarse con algo', level: 'B1', difficultyScore: 2 },
  { letter: 'J', definition: 'Empleo temporal que se hace para ganar dinero extra', answer: 'job', hint: 'Trabajo remunerado', level: 'B1', difficultyScore: 2 },

  // ── K ───────────────────────────────────────────────────────────────────
  { letter: 'K', definition: 'Saber hacer algo con destreza, conocimiento práctico acumulado', answer: 'know-how', hint: 'El saber práctico adquirido', level: 'B1', difficultyScore: 3 },
  { letter: 'K', definition: 'Mantener o continuar haciendo algo sin parar', answer: 'keep on', hint: 'Phrasal verb: seguir haciendo algo', level: 'B1', difficultyScore: 3 },
  { letter: 'K', definition: 'Conjunto de conocimientos que tiene una persona sobre algo', answer: 'knowledge', hint: 'El saber no ocupa lugar', level: 'B1', difficultyScore: 3 },
  { letter: 'K', definition: 'Habilidad especial e innata que tiene alguien para hacer algo', answer: 'knack', hint: 'Don natural para algo', level: 'B1', difficultyScore: 4 },
  { letter: 'K', definition: 'Persona importante que es fundamental para que algo funcione', answer: 'key person', hint: 'La persona clave', level: 'B1', difficultyScore: 3 },
  { letter: 'K', definition: 'Estar muy interesado y entusiasmado con algo', answer: 'keen', hint: 'Muy aficionado o entusiasmado', level: 'B1', difficultyScore: 3 },
  { letter: 'K', definition: 'Recibir o guardar algo en tu mente para no olvidarlo', answer: 'keep in mind', hint: 'Phrasal verb: tener algo en cuenta', level: 'B1', difficultyScore: 4 },
  { letter: 'K', definition: 'Contacto entre dos personas, punto de unión o apoyo emocional', answer: 'kinship', hint: 'Relación familiar o de parentesco', level: 'B1', difficultyScore: 4 },
  { letter: 'K', definition: 'Velocidad media de algo medida en kilómetros por hora', answer: 'kilometres', hint: 'Unidad de distancia', level: 'B1', difficultyScore: 2 },
  { letter: 'K', definition: 'Reconocer algo como verdadero o aceptarlo sin dudas', answer: 'know for sure', hint: 'Saber con certeza algo', level: 'B1', difficultyScore: 4 },

  // ── L ───────────────────────────────────────────────────────────────────
  { letter: 'L', definition: 'Persona que dirige y organiza a un grupo de personas', answer: 'leader', hint: 'El jefe o líder del grupo', level: 'B1', difficultyScore: 2 },
  { letter: 'L', definition: 'Tiempo o espacio que queda disponible después de hacer lo necesario', answer: 'leisure', hint: 'Tiempo libre para disfrutar', level: 'B1', difficultyScore: 4 },
  { letter: 'L', definition: 'Hablar en público delante de un grupo de personas', answer: 'lecture', hint: 'Conferencia o clase magistral', level: 'B1', difficultyScore: 3 },
  { letter: 'L', definition: 'Reunir o juntar pistas para llegar a una conclusión', answer: 'link', hint: 'Conectar o vincular cosas', level: 'B1', difficultyScore: 3 },
  { letter: 'L', definition: 'Buscar a alguien o algo con la vista', answer: 'look for', hint: 'Phrasal verb: buscar algo o a alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'L', definition: 'Quedarse hasta tarde o no salir del lugar donde estás', answer: 'linger', hint: 'Quedarse o demorarse en un lugar', level: 'B1', difficultyScore: 4 },
  { letter: 'L', definition: 'Hacer que algo sea posible o dar permiso para ello', answer: 'let', hint: 'Permitir o dejar hacer algo', level: 'B1', difficultyScore: 2 },
  { letter: 'L', definition: 'Lograr vivir o existir con lo que tienes disponible', answer: 'live on', hint: 'Phrasal verb: sobrevivir con lo que tienes', level: 'B1', difficultyScore: 4 },
  { letter: 'L', definition: 'Responsabilidad legal o económica sobre algo', answer: 'liability', hint: 'Responsabilidad legal', level: 'B1', difficultyScore: 5 },
  { letter: 'L', definition: 'Que dura mucho tiempo o persiste durante un período largo', answer: 'long-term', hint: 'A largo plazo', level: 'B1', difficultyScore: 3 },

  // ── M ───────────────────────────────────────────────────────────────────
  { letter: 'M', definition: 'Persona que dirige y organiza el trabajo de una empresa o equipo', answer: 'manager', hint: 'El jefe de un departamento', level: 'B1', difficultyScore: 2 },
  { letter: 'M', definition: 'Medida de las dimensiones o tamaño de algo', answer: 'measurement', hint: 'El tamaño o dimensiones de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'M', definition: 'Dar sentido o ser importante para alguien', answer: 'matter', hint: 'Importar o significar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'M', definition: 'Conmemorar o recordar algo o a alguien importante', answer: 'memorial', hint: 'Algo que recuerda a alguien', level: 'B1', difficultyScore: 4 },
  { letter: 'M', definition: 'Responsabilidad de cuidar y mantener algo en buen estado', answer: 'maintenance', hint: 'El mantenimiento de algo', level: 'B1', difficultyScore: 4 },
  { letter: 'M', definition: 'Transformar o hacer cambios en algo para mejorarlo', answer: 'modify', hint: 'Cambiar o adaptar algo', level: 'B1', difficultyScore: 4 },
  { letter: 'M', definition: 'Trasladarse o ir de un lugar a otro con algún propósito', answer: 'move', hint: 'Moverse o mudarse', level: 'B1', difficultyScore: 2 },
  { letter: 'M', definition: 'Reunión de personas para hablar de algo en común', answer: 'meeting', hint: 'Reunión de trabajo o grupo', level: 'B1', difficultyScore: 2 },
  { letter: 'M', definition: 'Comunicar o expresar algo con palabras o gestos a alguien', answer: 'message', hint: 'Mensaje o comunicado', level: 'B1', difficultyScore: 2 },
  { letter: 'M', definition: 'Fuerza interior que te impulsa a hacer algo o a conseguir una meta', answer: 'motivation', hint: 'Lo que te impulsa a actuar', level: 'B1', difficultyScore: 4 },

  // ── N ───────────────────────────────────────────────────────────────────
  { letter: 'N', definition: 'Lo que alguien necesita para vivir o funcionar correctamente', answer: 'need', hint: 'Necesitar algo imprescindible', level: 'B1', difficultyScore: 2 },
  { letter: 'N', definition: 'Comunicar algo a alguien de forma oficial o formal', answer: 'notify', hint: 'Avisar o comunicar algo oficialmente', level: 'B1', difficultyScore: 3 },
  { letter: 'N', definition: 'Observar o darse cuenta de algo que ocurre a tu alrededor', answer: 'notice', hint: 'Darse cuenta de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'N', definition: 'Preocupación o tema que requiere atención y solución', answer: 'negative', hint: 'Lo contrario de positivo', level: 'B1', difficultyScore: 2 },
  { letter: 'N', definition: 'Hablar con alguien para llegar a un acuerdo que beneficie a ambos', answer: 'negotiate', hint: 'Negociar un acuerdo', level: 'B1', difficultyScore: 4 },
  { letter: 'N', definition: 'Ser cercano o no estar lejos de algo en el espacio', answer: 'nearby', hint: 'Cercano, próximo', level: 'B1', difficultyScore: 2 },
  { letter: 'N', definition: 'Conexión entre personas que comparten intereses profesionales', answer: 'networking', hint: 'Crear contactos profesionales', level: 'B1', difficultyScore: 4 },
  { letter: 'N', definition: 'Lo más reciente o moderno, que acaba de salir o aparecer', answer: 'new', hint: 'Nuevo o reciente', level: 'B1', difficultyScore: 1 },
  { letter: 'N', definition: 'Número de veces que algo ocurre en un período de tiempo', answer: 'number of times', hint: 'Frecuencia de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'N', definition: 'Conseguir algo con mucho esfuerzo y superando dificultades', answer: 'nail', hint: 'Clavar o conseguir algo difícil', level: 'B1', difficultyScore: 3 },

  // ── O ───────────────────────────────────────────────────────────────────
  { letter: 'O', definition: 'Proponer algo a alguien para que lo acepte o lo rechace', answer: 'offer', hint: 'Ofrecer algo a alguien', level: 'B1', difficultyScore: 2 },
  { letter: 'O', definition: 'Mirar o estudiar algo con mucha atención durante un tiempo', answer: 'observe', hint: 'Observar o estudiar con atención', level: 'B1', difficultyScore: 3 },
  { letter: 'O', definition: 'Sacar el máximo partido o aprovechar algo al máximo', answer: 'optimise', hint: 'Optimizar o mejorar algo', level: 'B1', difficultyScore: 4 },
  { letter: 'O', definition: 'Hacer que algo continúe funcionando de forma adecuada', answer: 'operate', hint: 'Funcionar o hacer funcionar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'O', definition: 'Elegir no participar en algo o decidir no hacer algo', answer: 'opt out', hint: 'Phrasal verb: decidir no participar', level: 'B1', difficultyScore: 4 },
  { letter: 'O', definition: 'Punto de vista o parecer de alguien sobre un tema', answer: 'opinion', hint: 'Lo que piensas sobre algo', level: 'B1', difficultyScore: 3 },
  { letter: 'O', definition: 'Ir más allá de tus posibilidades o recursos disponibles', answer: 'overdo', hint: 'Exagerar o excederse en algo', level: 'B1', difficultyScore: 4 },
  { letter: 'O', definition: 'Persona que dirige y coordina una empresa o proyecto', answer: 'organiser', hint: 'El que organiza algo', level: 'B1', difficultyScore: 3 },
  { letter: 'O', definition: 'Superar una dificultad o problema con éxito', answer: 'overcome', hint: 'Superar un obstáculo', level: 'B1', difficultyScore: 4 },
  { letter: 'O', definition: 'Resultado o consecuencia que se obtiene de una acción', answer: 'outcome', hint: 'El resultado de algo', level: 'B1', difficultyScore: 4 },

  // ── P ───────────────────────────────────────────────────────────────────
  { letter: 'P', definition: 'Intervenir o tomar parte activa en una actividad', answer: 'participate', hint: 'Tomar parte en algo', level: 'B1', difficultyScore: 3 },
  { letter: 'P', definition: 'Hacer algo de forma consistente y con mucha constancia', answer: 'persist', hint: 'No rendirse y continuar', level: 'B1', difficultyScore: 4 },
  { letter: 'P', definition: 'Hacer una presentación o demostración ante un público', answer: 'present', hint: 'Presentar algo a un grupo', level: 'B1', difficultyScore: 3 },
  { letter: 'P', definition: 'Proteger algo de forma que no se dañe o pierda', answer: 'preserve', hint: 'Conservar o proteger algo', level: 'B1', difficultyScore: 4 },
  { letter: 'P', definition: 'Lograr hacer algo que antes te resultaba difícil o imposible', answer: 'progress', hint: 'Progresar o mejorar', level: 'B1', difficultyScore: 3 },
  { letter: 'P', definition: 'Dar a conocer o publicitar algo a muchas personas', answer: 'promote', hint: 'Promocionar o publicitar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'P', definition: 'Predecir lo que va a ocurrir en el futuro', answer: 'predict', hint: 'Predecir o pronosticar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'P', definition: 'Dejar algo para más tarde o para cuando tengas más tiempo', answer: 'postpone', hint: 'Aplazar o posponer algo', level: 'B1', difficultyScore: 4 },
  { letter: 'P', definition: 'Hacer que alguien cambie de opinión usando argumentos', answer: 'persuade', hint: 'Convencer a alguien', level: 'B1', difficultyScore: 4 },
  { letter: 'P', definition: 'Trabajar con alguien en conjunto hacia un mismo objetivo', answer: 'partner up', hint: 'Asociarse o trabajar en pareja', level: 'B1', difficultyScore: 3 },

  // ── Q ───────────────────────────────────────────────────────────────────
  { letter: 'Q', definition: 'Dejar de hacer algo que no es bueno para ti', answer: 'quit', hint: 'Dejar un hábito o trabajo', level: 'B1', difficultyScore: 3 },
  { letter: 'Q', definition: 'Número o porción de algo que le corresponde a cada persona', answer: 'quota', hint: 'La cuota asignada', level: 'B1', difficultyScore: 4 },
  { letter: 'Q', definition: 'Ser capaz de hacer algo o tener los requisitos necesarios', answer: 'qualify', hint: 'Tener la cualificación para algo', level: 'B1', difficultyScore: 3 },
  { letter: 'Q', definition: 'Nivel de excelencia o lo bien que está hecho algo', answer: 'quality', hint: 'La calidad de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'Q', definition: 'Algo que requiere una respuesta o genera una duda', answer: 'query', hint: 'Consulta o duda que se plantea', level: 'B1', difficultyScore: 4 },
  { letter: 'Q', definition: 'Hacer algo en poco tiempo, de forma rápida y eficiente', answer: 'quickly', hint: 'De forma rápida', level: 'B1', difficultyScore: 2 },
  { letter: 'Q', definition: 'Espacio tranquilo y sin ruidos donde puedes concentrarte', answer: 'quiet place', hint: 'Un lugar silencioso', level: 'B1', difficultyScore: 2 },
  { letter: 'Q', definition: 'Preguntar o pedir información sobre algo con detalle', answer: 'question', hint: 'Cuestionar o preguntar sobre algo', level: 'B1', difficultyScore: 2 },
  { letter: 'Q', definition: 'Cita o fragmento de lo que alguien ha dicho o escrito', answer: 'quote', hint: 'Una cita textual de alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'Q', definition: 'Prueba de conocimientos con muchas preguntas rápidas', answer: 'quiz', hint: 'Test o examen de preguntas', level: 'B1', difficultyScore: 2 },

  // ── R ───────────────────────────────────────────────────────────────────
  { letter: 'R', definition: 'Aceptar o tomar algo que te ofrecen', answer: 'receive', hint: 'Recibir algo de alguien', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Pensar sobre algo que ha ocurrido para entenderlo mejor', answer: 'reflect', hint: 'Reflexionar o pensar sobre algo', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Dar respuesta o reaccionar ante lo que otra persona dice o hace', answer: 'respond', hint: 'Responder o reaccionar a algo', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Organizar o planificar algo de nuevo de forma diferente', answer: 'reorganise', hint: 'Reorganizar o reestructurar algo', level: 'B1', difficultyScore: 4 },
  { letter: 'R', definition: 'Tener la obligación de cuidar o hacer algo correctamente', answer: 'responsible', hint: 'Ser responsable de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Hacer algo de nuevo o intentarlo otra vez', answer: 'retry', hint: 'Intentarlo de nuevo', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Encontrar o volver a encontrar algo o a alguien después de un tiempo', answer: 'reunite', hint: 'Reunirse de nuevo con alguien', level: 'B1', difficultyScore: 4 },
  { letter: 'R', definition: 'Obtener o lograr algo después de un esfuerzo', answer: 'reach', hint: 'Alcanzar un objetivo o lugar', level: 'B1', difficultyScore: 3 },
  { letter: 'R', definition: 'Encontrar o crear una solución para un problema existente', answer: 'resolve', hint: 'Resolver un conflicto o problema', level: 'B1', difficultyScore: 4 },
  { letter: 'R', definition: 'Volver atrás o retroceder a un estado anterior', answer: 'revert', hint: 'Volver a como era antes', level: 'B1', difficultyScore: 4 },

  // ── S ───────────────────────────────────────────────────────────────────
  { letter: 'S', definition: 'Guardar dinero de forma regular para tenerlo en el futuro', answer: 'save', hint: 'Ahorrar dinero', level: 'B1', difficultyScore: 2 },
  { letter: 'S', definition: 'Buscar algo o a alguien con mucha atención', answer: 'search', hint: 'Buscar algo con detalle', level: 'B1', difficultyScore: 2 },
  { letter: 'S', definition: 'Elegir a alguien o algo de entre varias opciones disponibles', answer: 'select', hint: 'Escoger o seleccionar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'S', definition: 'Dejar de hacer algo para siempre o durante un tiempo', answer: 'stop', hint: 'Parar o dejar de hacer algo', level: 'B1', difficultyScore: 2 },
  { letter: 'S', definition: 'Compartir algo con otros de forma equitativa', answer: 'share', hint: 'Compartir algo con alguien', level: 'B1', difficultyScore: 2 },
  { letter: 'S', definition: 'Poner a prueba tus capacidades en una situación difícil', answer: 'struggle', hint: 'Luchar o esforzarse ante algo difícil', level: 'B1', difficultyScore: 4 },
  { letter: 'S', definition: 'Preguntar o pedir más información sobre algo o alguien', answer: 'seek', hint: 'Buscar o indagar sobre algo', level: 'B1', difficultyScore: 4 },
  { letter: 'S', definition: 'Enviar algo a alguien por correo o de otra forma', answer: 'send', hint: 'Mandar algo a alguien', level: 'B1', difficultyScore: 2 },
  { letter: 'S', definition: 'Expresar tus pensamientos con palabras de forma clara', answer: 'speak up', hint: 'Phrasal verb: hablar con claridad y firmeza', level: 'B1', difficultyScore: 3 },
  { letter: 'S', definition: 'Crecer o aumentar de forma notable en tamaño o importancia', answer: 'surge', hint: 'Incremento o subida repentina', level: 'B1', difficultyScore: 4 },

  // ── T ───────────────────────────────────────────────────────────────────
  { letter: 'T', definition: 'Asumir el control o la responsabilidad de algo', answer: 'take over', hint: 'Phrasal verb: hacerse cargo de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Tratar un tema con mucho cuidado o de forma difícil', answer: 'tackle', hint: 'Abordar o afrontar algo difícil', level: 'B1', difficultyScore: 4 },
  { letter: 'T', definition: 'Objetivo o nivel que quieres alcanzar en un tiempo determinado', answer: 'target', hint: 'Meta u objetivo a conseguir', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Trabajar con otras personas para lograr algo en conjunto', answer: 'teamwork', hint: 'El trabajo en equipo', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Inclinación natural o tendencia de algo a ocurrir de cierta manera', answer: 'tendency', hint: 'La tendencia hacia algo', level: 'B1', difficultyScore: 4 },
  { letter: 'T', definition: 'Momento en el que acabas una actividad o el tiempo de algo se agota', answer: 'time up', hint: 'Se acabó el tiempo', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Cambiar a alguien o algo hacia una dirección nueva o diferente', answer: 'turn', hint: 'Girar o convertir algo en otra cosa', level: 'B1', difficultyScore: 2 },
  { letter: 'T', definition: 'Pensar y dar cuenta de cómo y por qué algo funciona', answer: 'track', hint: 'Seguir o rastrear algo', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Hacer el intento de lograr algo aunque sea difícil', answer: 'try out', hint: 'Phrasal verb: probar o intentar algo nuevo', level: 'B1', difficultyScore: 3 },
  { letter: 'T', definition: 'Estar en contacto o informado sobre algo que cambia constantemente', answer: 'track down', hint: 'Phrasal verb: localizar algo o a alguien', level: 'B1', difficultyScore: 4 },

  // ── U ───────────────────────────────────────────────────────────────────
  { letter: 'U', definition: 'Hacer uso de algo o ponerlo en práctica para un fin', answer: 'use', hint: 'Utilizar algo con un propósito', level: 'B1', difficultyScore: 2 },
  { letter: 'U', definition: 'Actualizar algo para que esté al día o sea mejor', answer: 'update', hint: 'Actualizar o poner al día algo', level: 'B1', difficultyScore: 3 },
  { letter: 'U', definition: 'Comprender algo por completo y saber cómo funciona', answer: 'understand', hint: 'Entender algo', level: 'B1', difficultyScore: 2 },
  { letter: 'U', definition: 'Aprender o mejorar tus habilidades en un área concreta', answer: 'upskill', hint: 'Mejorar las habilidades profesionales', level: 'B1', difficultyScore: 4 },
  { letter: 'U', definition: 'Que es diferente en cada caso y no siempre igual', answer: 'uneven', hint: 'Desigual o irregular', level: 'B1', difficultyScore: 3 },
  { letter: 'U', definition: 'Sacar partido de algo para obtener la mayor ventaja posible', answer: 'utilise', hint: 'Aprovechar algo al máximo', level: 'B1', difficultyScore: 4 },
  { letter: 'U', definition: 'Estado de no saber con certeza lo que va a pasar', answer: 'uncertain', hint: 'Inseguro o sin certeza', level: 'B1', difficultyScore: 3 },
  { letter: 'U', definition: 'Necesitar algo urgentemente o de forma inmediata', answer: 'urgent', hint: 'Urgente o que no puede esperar', level: 'B1', difficultyScore: 3 },
  { letter: 'U', definition: 'Que ocurre de manera inesperada y sin aviso previo', answer: 'unexpected', hint: 'Algo que no esperabas que pasara', level: 'B1', difficultyScore: 3 },
  { letter: 'U', definition: 'Elevar o mejorar algo a un nivel superior', answer: 'upgrade', hint: 'Mejorar o elevar el nivel de algo', level: 'B1', difficultyScore: 3 },

  // ── V ───────────────────────────────────────────────────────────────────
  { letter: 'V', definition: 'Comprobar que algo es correcto o verdadero con pruebas', answer: 'verify', hint: 'Comprobar o confirmar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'V', definition: 'Dar valor o importancia a algo que consideras importante', answer: 'value', hint: 'Valorar o apreciar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'V', definition: 'Gran número de cosas diferentes que hay disponibles para elegir', answer: 'variety', hint: 'La variedad de opciones', level: 'B1', difficultyScore: 3 },
  { letter: 'V', definition: 'Mirar o revisar algo que está siendo grabado o emitido', answer: 'view', hint: 'Ver o visualizar algo', level: 'B1', difficultyScore: 2 },
  { letter: 'V', definition: 'Que cambia fácilmente o con mucha frecuencia', answer: 'variable', hint: 'Que varía o cambia', level: 'B1', difficultyScore: 4 },
  { letter: 'V', definition: 'Hacer algo de forma desinteresada sin recibir pago', answer: 'volunteer', hint: 'Hacer trabajo voluntario', level: 'B1', difficultyScore: 3 },
  { letter: 'V', definition: 'Mostrar que algo es válido o que has pagado por ello', answer: 'validate', hint: 'Validar o confirmar algo', level: 'B1', difficultyScore: 4 },
  { letter: 'V', definition: 'Mencionar algo de pasada o decir algo sin mucho detalle', answer: 'vaguely', hint: 'De forma vaga o imprecisa', level: 'B1', difficultyScore: 4 },
  { letter: 'V', definition: 'Logro o éxito conseguido sobre alguien o algo', answer: 'victory', hint: 'Ganar o triunfar', level: 'B1', difficultyScore: 3 },
  { letter: 'V', definition: 'Ser susceptible de sufrir daños o efectos negativos', answer: 'vulnerable', hint: 'Expuesto o susceptible al daño', level: 'B1', difficultyScore: 4 },

  // ── W ───────────────────────────────────────────────────────────────────
  { letter: 'W', definition: 'Esperar a que algo ocurra o a que alguien llegue', answer: 'wait', hint: 'Esperar algo o a alguien', level: 'B1', difficultyScore: 2 },
  { letter: 'W', definition: 'Despertar a alguien o dejar de dormir', answer: 'wake up', hint: 'Phrasal verb: despertarse', level: 'B1', difficultyScore: 2 },
  { letter: 'W', definition: 'Desear que algo ocurra aunque sea difícil', answer: 'wish', hint: 'Desear algo que puede no ocurrir', level: 'B1', difficultyScore: 3 },
  { letter: 'W', definition: 'Lugar donde alguien hace su trabajo de forma habitual', answer: 'workplace', hint: 'El sitio de trabajo', level: 'B1', difficultyScore: 3 },
  { letter: 'W', definition: 'Preocuparse por algo que puede salir mal', answer: 'worry', hint: 'Preocuparse por algo', level: 'B1', difficultyScore: 2 },
  { letter: 'W', definition: 'Escribir o anotar algo en papel o en la pantalla', answer: 'write down', hint: 'Phrasal verb: anotar o apuntar algo', level: 'B1', difficultyScore: 3 },
  { letter: 'W', definition: 'Forma o manera en que algo funciona o está organizado', answer: 'way', hint: 'La forma o el modo de hacer algo', level: 'B1', difficultyScore: 2 },
  { letter: 'W', definition: 'Punto débil o defecto que tiene algo o alguien', answer: 'weakness', hint: 'El punto débil de algo', level: 'B1', difficultyScore: 3 },
  { letter: 'W', definition: 'Calor agradable que algo o alguien transmite a su alrededor', answer: 'warmth', hint: 'Calidez o sensación de calor agradable', level: 'B1', difficultyScore: 3 },
  { letter: 'W', definition: 'Entender o ser consciente de algo que está ocurriendo', answer: 'witness', hint: 'Ser testigo de algo', level: 'B1', difficultyScore: 3 },

  // ── X ───────────────────────────────────────────────────────────────────
  { letter: 'X', definition: 'Técnica médica que usa rayos para ver el interior del cuerpo', answer: 'x-ray', hint: 'Radiografía médica', level: 'B1', difficultyScore: 3 },
  { letter: 'X', definition: 'Instrumento de percusión con láminas que se golpean con mazas', answer: 'xylophone', hint: 'Instrumento de láminas musicales', level: 'B1', difficultyScore: 4 },
  { letter: 'X', definition: 'Proceso de hacer copias de documentos en una fotocopiadora', answer: 'xerox', hint: 'Fotocopiar un documento', level: 'B1', difficultyScore: 3 },
  { letter: 'X', definition: 'Estudio de organismos de otros planetas de forma hipotética', answer: 'xenobiology', hint: 'Biología de seres extraterrestres', level: 'B1', difficultyScore: 5 },
  { letter: 'X', definition: 'Miedo irracional a los extranjeros o personas de otras culturas', answer: 'xenophobia', hint: 'Miedo o rechazo al extranjero', level: 'B1', difficultyScore: 4 },
  { letter: 'X', definition: 'Signo que se usa para indicar un error o que algo no es correcto', answer: 'x-mark', hint: 'La señal de error o incorrecto', level: 'B1', difficultyScore: 2 },
  { letter: 'X', definition: 'Festividad que se celebra el 25 de diciembre, abreviada', answer: 'Xmas', hint: 'Abreviatura de Christmas', level: 'B1', difficultyScore: 2 },
  { letter: 'X', definition: 'Planta adaptada a sobrevivir en condiciones de sequía extrema', answer: 'xerophyte', hint: 'Planta del desierto adaptada a la sequía', level: 'B1', difficultyScore: 5 },

  // ── Y ───────────────────────────────────────────────────────────────────
  { letter: 'Y', definition: 'Desear algo con mucha intensidad o anhelo profundo', answer: 'yearn', hint: 'Anhelar o desear profundamente', level: 'B1', difficultyScore: 4 },
  { letter: 'Y', definition: 'Producir o dar como resultado algo, especialmente beneficios', answer: 'yield', hint: 'Producir o dar resultado', level: 'B1', difficultyScore: 4 },
  { letter: 'Y', definition: 'Hace mucho tiempo, tiempos pasados ya lejanos', answer: 'yesteryear', hint: 'El pasado lejano', level: 'B1', difficultyScore: 4 },
  { letter: 'Y', definition: 'Que tiene poca experiencia o lleva poco tiempo en algo', answer: 'young', hint: 'Joven o inexperto', level: 'B1', difficultyScore: 2 },
  { letter: 'Y', definition: 'El año que acaba de pasar, el anterior al actual', answer: 'year', hint: 'El año pasado', level: 'B1', difficultyScore: 2 },
  { letter: 'Y', definition: 'Práctica de meditación y posturas corporales de origen hindú', answer: 'yoga', hint: 'Se practica en esterilla', level: 'B1', difficultyScore: 2 },
  { letter: 'Y', definition: 'Embarcación elegante y de lujo para navegar por placer', answer: 'yacht', hint: 'Barco de lujo', level: 'B1', difficultyScore: 3 },
  { letter: 'Y', definition: 'Alimento lácteo cremoso hecho con leche fermentada', answer: 'yogurt', hint: 'Lácteo muy común', level: 'B1', difficultyScore: 2 },
  { letter: 'Y', definition: 'Pronombre de segunda persona en inglés, singular y plural', answer: 'you', hint: 'Tú o vosotros', level: 'B1', difficultyScore: 1 },
  { letter: 'Y', definition: 'Respuesta que confirma algo de forma entusiasta', answer: 'yes', hint: 'Afirmación en inglés', level: 'B1', difficultyScore: 1 },

  // ── Z ───────────────────────────────────────────────────────────────────
  { letter: 'Z', definition: 'Gran entusiasmo y energía que se dedica a una causa', answer: 'zeal', hint: 'Fervor o pasión intensa', level: 'B1', difficultyScore: 4 },
  { letter: 'Z', definition: 'Punto más alto que puede alcanzar algo, el cénit', answer: 'zenith', hint: 'El punto más alto posible', level: 'B1', difficultyScore: 4 },
  { letter: 'Z', definition: 'El número cero, que no vale nada en matemáticas', answer: 'zero', hint: 'El número 0', level: 'B1', difficultyScore: 2 },
  { letter: 'Z', definition: 'Área o región con características o normas específicas', answer: 'zone', hint: 'Zona delimitada con normas propias', level: 'B1', difficultyScore: 3 },
  { letter: 'Z', definition: 'Herramienta para acercar o alejar imágenes en cámara o pantalla', answer: 'zoom', hint: 'Acercar o alejar la imagen', level: 'B1', difficultyScore: 2 },
  { letter: 'Z', definition: 'Cierre de tela con dientes metálicos o de plástico', answer: 'zip', hint: 'Cremallera en inglés', level: 'B1', difficultyScore: 2 },
  { letter: 'Z', definition: 'Persona muy apasionada y entusiasta con una causa o idea', answer: 'zealot', hint: 'Fanático o muy entusiasta', level: 'B1', difficultyScore: 5 },
  { letter: 'Z', definition: 'Rama de la biología que estudia los animales', answer: 'zoology', hint: 'Ciencia que estudia los animales', level: 'B1', difficultyScore: 4 },
  { letter: 'Z', definition: 'Movimiento o línea que va en forma de zigzag', answer: 'zigzag', hint: 'Línea en forma de Z repetida', level: 'B1', difficultyScore: 3 },
  { letter: 'Z', definition: 'Código numérico que identifica una zona postal', answer: 'zip code', hint: 'El código postal americano', level: 'B1', difficultyScore: 2 },
]

async function main() {
  console.log('🌱 Seeding B1 words...')

  await prisma.word.deleteMany({ where: { level: 'B1' } })
  console.log('  Cleared B1 words')

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

  console.log('\n✅ B1 seed complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
