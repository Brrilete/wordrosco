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
  { letter: 'A', definition: 'Animal doméstico que maúlla y ronronea', answer: 'animal', hint: 'Seres vivos que no son plantas', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Fruta roja o verde que crece en los árboles, muy común', answer: 'apple', hint: 'Una al día mantiene al médico alejado', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Persona que compite en deportes de forma profesional', answer: 'athlete', hint: 'Compite en los Juegos Olímpicos', level: 'A2', difficultyScore: 2 },
  { letter: 'A', definition: 'Lugar donde se sube para volar en avión', answer: 'airport', hint: 'Donde salen y llegan los vuelos', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Señal sonora que avisa de algo importante o te despierta', answer: 'alarm', hint: 'Te despierta por la mañana', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Persona mayor de 18 años, no un niño', answer: 'adult', hint: 'Mayor de edad', level: 'A2', difficultyScore: 2 },
  { letter: 'A', definition: 'Lo que dices o escribes cuando te hacen una pregunta', answer: 'answer', hint: 'La respuesta a una pregunta', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Parte del día que va del mediodía a la noche', answer: 'afternoon', hint: 'Después de comer, antes de la cena', level: 'A2', difficultyScore: 1 },
  { letter: 'A', definition: 'Edificio donde viven varias familias en pisos separados', answer: 'apartment', hint: 'Piso o flat en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'A', definition: 'Años que tiene una persona desde que nació', answer: 'age', hint: 'Cuántos años tienes', level: 'A2', difficultyScore: 1 },

  // ── B ───────────────────────────────────────────────────────────────────
  { letter: 'B', definition: 'Objeto con páginas para leer, puede ser de papel o digital', answer: 'book', hint: 'Lo encuentras en bibliotecas', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Recipiente esférico que flota en el aire, se usa en fiestas', answer: 'balloon', hint: 'Se hincha con aire o helio', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Zona de arena junto al mar donde la gente se baña en verano', answer: 'beach', hint: 'Playa en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Primera comida del día, se toma por la mañana', answer: 'breakfast', hint: 'La comida más importante del día', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Hijo varón de tus mismos padres', answer: 'brother', hint: 'Tu hermano en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Vehículo grande de transporte público con muchos asientos', answer: 'bus', hint: 'Transporte urbano colectivo', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Lugar donde se guarda y gestiona el dinero', answer: 'bank', hint: 'Donde tienes tu cuenta corriente', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Recipiente de cristal o plástico para guardar líquidos', answer: 'bottle', hint: 'Envase de agua o refresco', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Espalda o parte posterior del cuerpo humano', answer: 'back', hint: 'Lo contrario de frente o pecho', level: 'A2', difficultyScore: 1 },
  { letter: 'B', definition: 'Color del cielo por la noche y del carbón', answer: 'black', hint: 'El color más oscuro', level: 'A2', difficultyScore: 1 },

  // ── C ───────────────────────────────────────────────────────────────────
  { letter: 'C', definition: 'Vehículo de cuatro ruedas para transportar personas', answer: 'car', hint: 'Automóvil particular', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Teléfono móvil, aparato para comunicarse', answer: 'cellphone', hint: 'Teléfono que llevas en el bolsillo', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Sala donde los alumnos estudian con un profesor', answer: 'classroom', hint: 'Aula de un colegio', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Prenda que se pone encima de todo para protegerse del frío', answer: 'coat', hint: 'Abrigo en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Bebida caliente y oscura hecha con granos molidos', answer: 'coffee', hint: 'Muchos la toman por la mañana', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Dulce que se come en cumpleaños con velas encima', answer: 'cake', hint: 'Tarta de cumpleaños', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Dinero en billetes y monedas', answer: 'cash', hint: 'Dinero en efectivo', level: 'A2', difficultyScore: 2 },
  { letter: 'C', definition: 'Asiento con respaldo donde nos sentamos', answer: 'chair', hint: 'Lo que hay alrededor de una mesa', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Persona que prepara la comida en un restaurante', answer: 'cook', hint: 'El que cocina', level: 'A2', difficultyScore: 1 },
  { letter: 'C', definition: 'Instrumento de escritura con mina de grafito', answer: 'crayon', hint: 'Para colorear y dibujar', level: 'A2', difficultyScore: 1 },

  // ── D ───────────────────────────────────────────────────────────────────
  { letter: 'D', definition: 'Animal doméstico que ladra y es fiel a su dueño', answer: 'dog', hint: 'Mejor amigo del hombre', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Comida principal del día, a mediodía o por la noche', answer: 'dinner', hint: 'La cena o comida principal', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Mover el cuerpo al ritmo de la música', answer: 'dance', hint: 'Lo que haces en las fiestas con música', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Día, mes y año en que ocurre un evento', answer: 'date', hint: 'La fecha de hoy', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Hacer que algo caiga al suelo sin querer', answer: 'drop', hint: 'Dejar caer algo', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Conducir un coche o vehículo', answer: 'drive', hint: 'Lo que hace el conductor', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Ropa que se pone la mujer de una sola pieza', answer: 'dress', hint: 'Vestido femenino', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Tomar un líquido por la boca', answer: 'drink', hint: 'Beber agua, zumo o refresco', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Médico especialista en la salud de los dientes', answer: 'dentist', hint: 'El que cuida tu boca y dientes', level: 'A2', difficultyScore: 1 },
  { letter: 'D', definition: 'Lo que quieres conseguir o adonde quieres llegar', answer: 'destination', hint: 'El destino de un viaje', level: 'A2', difficultyScore: 2 },

  // ── E ───────────────────────────────────────────────────────────────────
  { letter: 'E', definition: 'Ingerir alimentos para alimentarse', answer: 'eat', hint: 'Lo hacemos varias veces al día', level: 'A2', difficultyScore: 1 },
  { letter: 'E', definition: 'Mensaje que se envía por internet', answer: 'email', hint: 'Correo electrónico', level: 'A2', difficultyScore: 1 },
  { letter: 'E', definition: 'Dispositivo que mueve personas entre plantas de un edificio', answer: 'elevator', hint: 'Ascensor en inglés americano', level: 'A2', difficultyScore: 2 },
  { letter: 'E', definition: 'Prueba escrita o oral para medir el conocimiento', answer: 'exam', hint: 'Examen en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'E', definition: 'Hacer actividad física para mantenerse en forma', answer: 'exercise', hint: 'Deporte o actividad física', level: 'A2', difficultyScore: 2 },
  { letter: 'E', definition: 'Puerta o camino por donde se sale de un lugar', answer: 'exit', hint: 'Salida de emergencia', level: 'A2', difficultyScore: 1 },
  { letter: 'E', definition: 'Dar una explicación de cómo funciona algo', answer: 'explain', hint: 'Contar cómo funciona algo', level: 'A2', difficultyScore: 2 },
  { letter: 'E', definition: 'Lo que sientes por dentro, como alegría o tristeza', answer: 'emotion', hint: 'Sentimiento o emoción', level: 'A2', difficultyScore: 2 },
  { letter: 'E', definition: 'Persona que hace muchas actividades y tiene mucha energía', answer: 'energetic', hint: 'Con mucha energía y vitalidad', level: 'A2', difficultyScore: 2 },
  { letter: 'E', definition: 'Parte de fuera de un edificio o objeto', answer: 'exterior', hint: 'Lo contrario de interior', level: 'A2', difficultyScore: 2 },

  // ── F ───────────────────────────────────────────────────────────────────
  { letter: 'F', definition: 'Parte final de la pierna con cinco dedos, sirve para caminar', answer: 'foot', hint: 'Al final de la pierna, en el suelo', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Personas con las que tienes amistad y te llevas bien', answer: 'friends', hint: 'Tus amigos en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Todo lo que comemos para alimentarnos', answer: 'food', hint: 'La comida en general', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Parte delantera de la cabeza donde están los ojos y la boca', answer: 'face', hint: 'Lo primero que ves de una persona', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Grupo formado por padres, hijos y parientes', answer: 'family', hint: 'Papá, mamá, hijos...', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Persona que trabaja la tierra y cuida animales', answer: 'farmer', hint: 'Trabaja en el campo', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Temperatura alta del cuerpo cuando estás enfermo', answer: 'fever', hint: 'Temperatura alta cuando estás malo', level: 'A2', difficultyScore: 2 },
  { letter: 'F', definition: 'Viaje en avión de un lugar a otro', answer: 'flight', hint: 'Viaje en avión', level: 'A2', difficultyScore: 2 },
  { letter: 'F', definition: 'Buscar y localizar algo que necesitas', answer: 'find', hint: 'Encontrar algo que buscas', level: 'A2', difficultyScore: 1 },
  { letter: 'F', definition: 'Dedo de la mano, cada uno de los cinco', answer: 'finger', hint: 'Tienes cinco en cada mano', level: 'A2', difficultyScore: 1 },

  // ── G ───────────────────────────────────────────────────────────────────
  { letter: 'G', definition: 'Actividad lúdica o competición con reglas', answer: 'game', hint: 'Juego o partido', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Zona con plantas y flores fuera de una casa', answer: 'garden', hint: 'Jardín de una casa', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Persona femenina de poca edad', answer: 'girl', hint: 'Niña o chica joven', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Recipiente para beber líquidos hecho de vidrio', answer: 'glass', hint: 'Vaso de agua', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Color de la hierba y las plantas', answer: 'green', hint: 'Color de la naturaleza', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Prenda que cubre y protege las manos del frío', answer: 'gloves', hint: 'Se llevan en las manos en invierno', level: 'A2', difficultyScore: 1 },
  { letter: 'G', definition: 'Padre o madre de tu padre o madre', answer: 'grandparent', hint: 'Tus abuelos en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'G', definition: 'Palabra o gesto para saludar cuando llegas a un sitio', answer: 'greeting', hint: 'Hola, buenos días son saludos', level: 'A2', difficultyScore: 2 },
  { letter: 'G', definition: 'Persona que te guía en un lugar desconocido', answer: 'guide', hint: 'Te enseña los monumentos de la ciudad', level: 'A2', difficultyScore: 2 },
  { letter: 'G', definition: 'Dar algo a alguien como regalo o de forma voluntaria', answer: 'give', hint: 'Dar o regalar algo a alguien', level: 'A2', difficultyScore: 1 },

  // ── H ───────────────────────────────────────────────────────────────────
  { letter: 'H', definition: 'Lugar donde vives con tu familia, tu hogar', answer: 'home', hint: 'Tu casa', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Parte superior del cuerpo donde están el cerebro y la cara', answer: 'head', hint: 'Donde llevas el sombrero', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Edificio donde los turistas pueden dormir', answer: 'hotel', hint: 'Donde te alojas cuando viajas', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Órgano del cuerpo que bombea la sangre', answer: 'heart', hint: 'El músculo más importante del cuerpo', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Tiempo libre sin trabajo ni colegio para descansar', answer: 'holiday', hint: 'Vacaciones en inglés británico', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Actividad que haces en tu tiempo libre por placer', answer: 'hobby', hint: 'Lo que te gusta hacer en tu tiempo libre', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Sesenta minutos juntos', answer: 'hour', hint: 'Unidad de tiempo de 60 minutos', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Persona que trabaja para sanar a los enfermos', answer: 'healthcare worker', hint: 'Médico, enfermero...', level: 'A2', difficultyScore: 2 },
  { letter: 'H', definition: 'Estar en buen estado de salud físico y mental', answer: 'healthy', hint: 'En buen estado de salud', level: 'A2', difficultyScore: 1 },
  { letter: 'H', definition: 'Morada o residencia donde vive una persona', answer: 'house', hint: 'Casa o vivienda', level: 'A2', difficultyScore: 1 },

  // ── I ───────────────────────────────────────────────────────────────────
  { letter: 'I', definition: 'Agua en estado sólido, muy fría', answer: 'ice', hint: 'Se pone en las bebidas frías', level: 'A2', difficultyScore: 1 },
  { letter: 'I', definition: 'Pensamiento o plan que se tiene en la mente', answer: 'idea', hint: 'Pensamiento o plan nuevo', level: 'A2', difficultyScore: 1 },
  { letter: 'I', definition: 'Representación visual de algo, foto o dibujo', answer: 'image', hint: 'Foto o ilustración', level: 'A2', difficultyScore: 1 },
  { letter: 'I', definition: 'Dinero que ganas por tu trabajo cada mes', answer: 'income', hint: 'El salario o sueldo', level: 'A2', difficultyScore: 2 },
  { letter: 'I', definition: 'Llamar a alguien a un evento o lugar', answer: 'invite', hint: 'Convidar a alguien a una fiesta', level: 'A2', difficultyScore: 1 },
  { letter: 'I', definition: 'Electrodoméstico para quitar arrugas a la ropa', answer: 'iron', hint: 'Plancha de ropa', level: 'A2', difficultyScore: 2 },
  { letter: 'I', definition: 'Superficie de tierra rodeada de agua por todos lados', answer: 'island', hint: 'Irlanda es una...', level: 'A2', difficultyScore: 1 },
  { letter: 'I', definition: 'Lo que está dentro de algo, la parte interior', answer: 'interior', hint: 'Lo contrario de exterior', level: 'A2', difficultyScore: 2 },
  { letter: 'I', definition: 'Persona muy importante o famosa en un campo', answer: 'idol', hint: 'Tu cantante o deportista favorito', level: 'A2', difficultyScore: 2 },
  { letter: 'I', definition: 'Herramienta o utensilio que se usa para hacer algo', answer: 'instrument', hint: 'Una guitarra o un piano son instrumentos', level: 'A2', difficultyScore: 2 },

  // ── J ───────────────────────────────────────────────────────────────────
  { letter: 'J', definition: 'Prenda de ropa con cremallera que cubre el tronco', answer: 'jacket', hint: 'Chaqueta o cazadora', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Líquido que se saca de las frutas para beber', answer: 'juice', hint: 'Zumo de naranja o manzana', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Trabajo o empleo que tiene una persona', answer: 'job', hint: 'Lo que haces para ganar dinero', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Saltar o dar un brinco en el aire', answer: 'jump', hint: 'Saltar en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Recipiente de cristal con tapa para guardar alimentos', answer: 'jar', hint: 'Tarro de mermelada', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Séptimo mes del año, en verano', answer: 'July', hint: 'El mes después de junio', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Primer mes del año', answer: 'January', hint: 'El mes con el que empieza el año', level: 'A2', difficultyScore: 1 },
  { letter: 'J', definition: 'Persona que decide si algo está bien o mal en un concurso', answer: 'judge', hint: 'Árbitro o juez de un concurso', level: 'A2', difficultyScore: 2 },
  { letter: 'J', definition: 'Correr a ritmo suave para hacer ejercicio', answer: 'jog', hint: 'Trotar, correr despacio', level: 'A2', difficultyScore: 2 },
  { letter: 'J', definition: 'Viaje largo, especialmente en tren o en barco', answer: 'journey', hint: 'Viaje largo de un sitio a otro', level: 'A2', difficultyScore: 2 },

  // ── K ───────────────────────────────────────────────────────────────────
  { letter: 'K', definition: 'Utensilio afilado para cortar alimentos en la cocina', answer: 'knife', hint: 'Cuchillo de cocina', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Habitación de la casa donde se prepara la comida', answer: 'kitchen', hint: 'La cocina de una casa', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Objeto metálico para abrir una puerta o cerradura', answer: 'key', hint: 'La usas para abrir tu casa', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Articulación en medio de la pierna que permite doblarla', answer: 'knee', hint: 'La rodilla en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Tener información sobre algo, saber algo', answer: 'know', hint: 'Saber o conocer algo', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Golpear una puerta para anunciar que has llegado', answer: 'knock', hint: 'Llamar a la puerta', level: 'A2', difficultyScore: 2 },
  { letter: 'K', definition: 'Guardar o conservar algo para después', answer: 'keep', hint: 'Quedarse con algo, conservarlo', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Niño pequeño, hijo o hija en inglés informal', answer: 'kid', hint: 'Niño en inglés informal', level: 'A2', difficultyScore: 1 },
  { letter: 'K', definition: 'Interés o afición que tiene alguien por algo', answer: 'keen', hint: 'Ser muy aficionado a algo', level: 'A2', difficultyScore: 2 },
  { letter: 'K', definition: 'Unidad de peso equivalente a mil gramos', answer: 'kilogram', hint: 'Unidad de peso, abreviada kg', level: 'A2', difficultyScore: 1 },

  // ── L ───────────────────────────────────────────────────────────────────
  { letter: 'L', definition: 'Objeto eléctrico que produce luz en casa', answer: 'lamp', hint: 'La pones en la mesilla de noche', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Sistema de comunicación que usan los humanos para hablar', answer: 'language', hint: 'El inglés y el español son...', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Estudiar algo con la mente, adquirir conocimientos', answer: 'learn', hint: 'Estudiar para saber algo', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Miembro inferior del cuerpo, sirve para caminar', answer: 'leg', hint: 'Tienes dos para caminar', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Dar algo tuyo a alguien para que lo use un tiempo', answer: 'lend', hint: 'Prestar algo a alguien', level: 'A2', difficultyScore: 2 },
  { letter: 'L', definition: 'Texto escrito que se manda a alguien por correo', answer: 'letter', hint: 'Carta escrita en papel', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Fruta amarilla y ácida muy usada en bebidas y cocina', answer: 'lemon', hint: 'Fruta ácida amarilla', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Lugar con muchos libros donde puedes leer y estudiar', answer: 'library', hint: 'Biblioteca en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'L', definition: 'Felino salvaje y grande de color amarillo que vive en África', answer: 'lion', hint: 'El rey de la selva', level: 'A2', difficultyScore: 1 },
  { letter: 'L', definition: 'Mirar algo durante un tiempo con los ojos', answer: 'look', hint: 'Mirar en inglés', level: 'A2', difficultyScore: 1 },

  // ── M ───────────────────────────────────────────────────────────────────
  { letter: 'M', definition: 'Progenitora femenina, la que te dio la vida', answer: 'mom', hint: 'Mamá en inglés americano', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Plano de una ciudad o zona para orientarse', answer: 'map', hint: 'Lo usas para no perderte', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Cada una de las veces que comemos al día', answer: 'meal', hint: 'Desayuno, comida y cena son comidas', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Billetes y monedas que usamos para comprar', answer: 'money', hint: 'Lo que usas para pagar', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Satélite natural que gira alrededor de la Tierra', answer: 'moon', hint: 'Brilla en el cielo de noche', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Parte de la cara que usamos para hablar y comer', answer: 'mouth', hint: 'Donde están los dientes y la lengua', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Edificio donde se exponen obras de arte o piezas históricas', answer: 'museum', hint: 'Donde ves cuadros y esculturas', level: 'A2', difficultyScore: 2 },
  { letter: 'M', definition: 'Sonidos combinados de forma agradable al oído', answer: 'music', hint: 'Lo que escuchas en la radio', level: 'A2', difficultyScore: 1 },
  { letter: 'M', definition: 'Aparato de cocina que calienta la comida con ondas', answer: 'microwave', hint: 'Microondas en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'M', definition: 'Sesenta segundos juntos', answer: 'minute', hint: 'Unidad de tiempo de 60 segundos', level: 'A2', difficultyScore: 1 },

  // ── N ───────────────────────────────────────────────────────────────────
  { letter: 'N', definition: 'Momento del día sin luz solar, cuando dormimos', answer: 'night', hint: 'Cuando se pone el sol', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Palabra que identifica a una persona o cosa', answer: 'name', hint: 'Tu nombre propio', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Persona que cuida a enfermos en un hospital', answer: 'nurse', hint: 'Trabaja junto a los médicos', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Cuaderno donde se escriben apuntes', answer: 'notebook', hint: 'Libreta de apuntes', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Símbolo matemático que representa una cantidad', answer: 'number', hint: 'El uno, el dos, el tres...', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Parte del cuerpo que conecta la cabeza con el tronco', answer: 'neck', hint: 'Donde llevas el collar', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Próximo o cercano en el espacio', answer: 'near', hint: 'Que está cerca', level: 'A2', difficultyScore: 1 },
  { letter: 'N', definition: 'Persona que vive en la casa de al lado', answer: 'neighbour', hint: 'Tu vecino en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'N', definition: 'Fruto seco y duro que crece en los árboles', answer: 'nut', hint: 'Nuez, avellana o almendra', level: 'A2', difficultyScore: 2 },
  { letter: 'N', definition: 'Información reciente sobre lo que pasa en el mundo', answer: 'news', hint: 'Lo que sale en el telediario', level: 'A2', difficultyScore: 1 },

  // ── O ───────────────────────────────────────────────────────────────────
  { letter: 'O', definition: 'Trabajo o empleo, lo que hace una persona para vivir', answer: 'occupation', hint: 'Tu profesión o trabajo', level: 'A2', difficultyScore: 2 },
  { letter: 'O', definition: 'Que no está cerrado, que tiene una abertura', answer: 'open', hint: 'Lo contrario de cerrado', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'Fruta cítrica de color naranja con vitamina C', answer: 'orange', hint: 'Fruta redonda y naranja', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'Lugar de trabajo con mesas y ordenadores', answer: 'office', hint: 'Donde trabajas en una empresa', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'Pájaro nocturno que gira la cabeza casi completamente', answer: 'owl', hint: 'El búho en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'O', definition: 'Persona que es dueña de algo', answer: 'owner', hint: 'El propietario de algo', level: 'A2', difficultyScore: 2 },
  { letter: 'O', definition: 'Pedir comida o algo en un restaurante o tienda', answer: 'order', hint: 'Lo que haces cuando llamas al camarero', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'En el exterior, fuera de un lugar cerrado', answer: 'outside', hint: 'Lo contrario de inside', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'Aparato de cocina para hornear o calentar alimentos', answer: 'oven', hint: 'El horno de la cocina', level: 'A2', difficultyScore: 1 },
  { letter: 'O', definition: 'Abarcar demasiado trabajo o responsabilidades', answer: 'overloaded', hint: 'Sobrecargado de trabajo', level: 'A2', difficultyScore: 2 },

  // ── P ───────────────────────────────────────────────────────────────────
  { letter: 'P', definition: 'Prenda de ropa que cubre desde la cintura hasta los pies', answer: 'pants', hint: 'Pantalones en inglés americano', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Hoja de material donde se escribe o imprime', answer: 'paper', hint: 'Material para escribir', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Tu padre o tu madre, progenitores', answer: 'parent', hint: 'Tu padre o madre son tus...', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Instrumento para escribir con tinta', answer: 'pen', hint: 'Bolígrafo en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Animal de compañía que vive en casa', answer: 'pet', hint: 'Mascota en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Imagen tomada con una cámara', answer: 'photo', hint: 'Fotografía en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Persona que dirige y pilota un avión', answer: 'pilot', hint: 'El que conduce el avión', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Zona verde con árboles y bancos en una ciudad', answer: 'park', hint: 'Jardín público de una ciudad', level: 'A2', difficultyScore: 1 },
  { letter: 'P', definition: 'Número secreto para entrar en tu cuenta o dispositivo', answer: 'password', hint: 'Contraseña en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'P', definition: 'Hablar o llamar a alguien para contactarle', answer: 'phone', hint: 'Llamar por teléfono', level: 'A2', difficultyScore: 1 },

  // ── Q ───────────────────────────────────────────────────────────────────
  { letter: 'Q', definition: 'Prueba de preguntas para comprobar conocimientos', answer: 'quiz', hint: 'Concurso de preguntas rápidas', level: 'A2', difficultyScore: 2 },
  { letter: 'Q', definition: 'Fila de personas esperando su turno', answer: 'queue', hint: 'La cola del supermercado', level: 'A2', difficultyScore: 2 },
  { letter: 'Q', definition: 'Rápido, que se hace en poco tiempo', answer: 'quick', hint: 'Rápido en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Q', definition: 'Sin ruido, en silencio, tranquilo', answer: 'quiet', hint: 'Lo contrario de ruidoso', level: 'A2', difficultyScore: 1 },
  { letter: 'Q', definition: 'Duda o interrogación que se hace sobre algo', answer: 'question', hint: 'Lo que preguntas cuando no sabes algo', level: 'A2', difficultyScore: 1 },
  { letter: 'Q', definition: 'Dejar de hacer algo, abandonar un lugar o trabajo', answer: 'quit', hint: 'Dejar o abandonar algo', level: 'A2', difficultyScore: 2 },
  { letter: 'Q', definition: 'Número o cantidad que le corresponde a cada persona', answer: 'quota', hint: 'Cuota o límite asignado', level: 'A2', difficultyScore: 3 },
  { letter: 'Q', definition: 'Cantidad de algo que existe o se puede contar', answer: 'quantity', hint: 'El número o la cantidad de algo', level: 'A2', difficultyScore: 2 },
  { letter: 'Q', definition: 'Habitación o lugar donde alguien vive o se aloja', answer: 'quarters', hint: 'Alojamiento o habitación', level: 'A2', difficultyScore: 2 },
  { letter: 'Q', definition: 'Calidad de ser limpio y ordenado en el trabajo', answer: 'quality', hint: 'La calidad de algo', level: 'A2', difficultyScore: 2 },

  // ── R ───────────────────────────────────────────────────────────────────
  { letter: 'R', definition: 'Agua que cae del cielo cuando hay nubes oscuras', answer: 'rain', hint: 'Lluvia en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Leer un texto o libro con los ojos', answer: 'read', hint: 'Leer en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Habitación de una casa o edificio', answer: 'room', hint: 'Habitación en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Instrucciones para preparar un plato de comida', answer: 'recipe', hint: 'Receta de cocina en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'R', definition: 'Mover las piernas más rápido que al caminar', answer: 'run', hint: 'Correr en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Color de la sangre y de las rosas', answer: 'red', hint: 'Color vivo y llamativo', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Volver a un lugar donde ya has estado antes', answer: 'return', hint: 'Volver o regresar', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Camino que conecta ciudades o pueblos', answer: 'road', hint: 'Carretera o calle', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Lugar donde puedes comer pagando por ello', answer: 'restaurant', hint: 'Donde comes fuera de casa', level: 'A2', difficultyScore: 1 },
  { letter: 'R', definition: 'Descansar y recuperar fuerzas después de trabajar', answer: 'relax', hint: 'Descansar y relajarse', level: 'A2', difficultyScore: 1 },

  // ── S ───────────────────────────────────────────────────────────────────
  { letter: 'S', definition: 'Astro que nos da luz y calor, el centro del sistema solar', answer: 'sun', hint: 'Sale por el este y se pone por el oeste', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Calzado que se lleva en el pie para caminar', answer: 'shoe', hint: 'Lo que llevas en el pie', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Hija de los mismos padres, mujer', answer: 'sister', hint: 'Tu hermana en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Descansar el cuerpo y la mente cerrando los ojos por la noche', answer: 'sleep', hint: 'Dormir en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Lugar donde se compran productos', answer: 'shop', hint: 'Tienda en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Lugar donde los niños van a aprender', answer: 'school', hint: 'Colegio o escuela', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Temporada del año con mucho calor y días largos', answer: 'summer', hint: 'El verano en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Usar los ojos para ver o percibir algo', answer: 'see', hint: 'Ver con los ojos', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Prenda de ropa femenina que cubre de la cintura hacia abajo', answer: 'skirt', hint: 'Falda en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'S', definition: 'Hablar con alguien intercambiando palabras', answer: 'speak', hint: 'Hablar en inglés', level: 'A2', difficultyScore: 1 },

  // ── T ───────────────────────────────────────────────────────────────────
  { letter: 'T', definition: 'Mueble con superficie plana donde comemos o trabajamos', answer: 'table', hint: 'Mesa en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Aparato electrónico con pantalla para ver programas', answer: 'television', hint: 'La tele en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Aparato para hablar con alguien a distancia', answer: 'telephone', hint: 'El teléfono fijo en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Persona joven entre los 13 y los 19 años', answer: 'teenager', hint: 'Adolescente en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'T', definition: 'Dinero extra que se da al camarero por su servicio', answer: 'tip', hint: 'Propina en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'T', definition: 'Persona que visita un lugar para conocerlo', answer: 'tourist', hint: 'Turista en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Bebida caliente muy popular en Irlanda y Reino Unido', answer: 'tea', hint: 'El té, muy popular en Irlanda', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Persona que enseña a los alumnos en el colegio', answer: 'teacher', hint: 'Profesor en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Ir de un lugar a otro, hacer un viaje', answer: 'travel', hint: 'Viajar en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'T', definition: 'Medio de transporte que circula por raíles en la ciudad', answer: 'tram', hint: 'Tranvía en inglés', level: 'A2', difficultyScore: 2 },

  // ── U ───────────────────────────────────────────────────────────────────
  { letter: 'U', definition: 'Objeto con mango y cubierta redonda para protegerse de la lluvia', answer: 'umbrella', hint: 'Paraguas en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'Ropa especial e igual que llevan todos en un trabajo o colegio', answer: 'uniform', hint: 'La ropa igual del colegio', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'Hacer uso de algo o emplearlo para un fin', answer: 'use', hint: 'Utilizar algo', level: 'A2', difficultyScore: 1 },
  { letter: 'U', definition: 'Centro de estudios superiores donde se estudia una carrera', answer: 'university', hint: 'Educación superior en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'Por debajo de algo, en una posición inferior', answer: 'under', hint: 'Lo contrario de over', level: 'A2', difficultyScore: 1 },
  { letter: 'U', definition: 'Ropa que se lleva debajo de la ropa exterior', answer: 'underwear', hint: 'Ropa interior en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'No habitual o común, diferente a lo normal', answer: 'unusual', hint: 'Extraño o poco común', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'Dirección hacia arriba, en sentido ascendente', answer: 'upward', hint: 'Hacia arriba', level: 'A2', difficultyScore: 2 },
  { letter: 'U', definition: 'Estar despierto, levantarse de la cama', answer: 'up', hint: 'Wake up significa despertarse', level: 'A2', difficultyScore: 1 },
  { letter: 'U', definition: 'Que no tiene pareja ni compañía, solo', answer: 'unaccompanied', hint: 'Sin compañía de nadie', level: 'A2', difficultyScore: 3 },

  // ── V ───────────────────────────────────────────────────────────────────
  { letter: 'V', definition: 'Recipiente de cristal o cerámica donde se ponen flores', answer: 'vase', hint: 'Florero en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Persona que trabaja sin cobrar dinero por ayudar', answer: 'volunteer', hint: 'El que ayuda sin cobrar', level: 'A2', difficultyScore: 2 },
  { letter: 'V', definition: 'Palabras de un idioma que conoce una persona', answer: 'vocabulary', hint: 'Las palabras que conoces en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'V', definition: 'Ver un programa, película o vídeo en una pantalla', answer: 'view', hint: 'Mirar o ver algo', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Pueblo pequeño en el campo o zona rural', answer: 'village', hint: 'Pueblo pequeño en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Tiempo libre del trabajo o del colegio para descansar', answer: 'vacation', hint: 'Vacaciones en inglés americano', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Planta comestible como la zanahoria, la lechuga o el brócoli', answer: 'vegetable', hint: 'Verdura en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'V', definition: 'Médico que cuida y trata a los animales enfermos', answer: 'vet', hint: 'Veterinario en inglés informal', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Sonido que produce una persona al hablar o cantar', answer: 'voice', hint: 'La voz de una persona', level: 'A2', difficultyScore: 1 },
  { letter: 'V', definition: 'Ir a algún sitio a ver o conocer a alguien', answer: 'visit', hint: 'Visitar un lugar o persona', level: 'A2', difficultyScore: 1 },

  // ── W ───────────────────────────────────────────────────────────────────
  { letter: 'W', definition: 'Ir a pie de un lugar a otro', answer: 'walk', hint: 'Caminar en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Líquido transparente que bebemos para vivir', answer: 'water', hint: 'H2O, lo que bebemos', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Condiciones atmosféricas de un día, si hace frío o llueve', answer: 'weather', hint: 'El tiempo que hace hoy', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Reloj de pulsera que se lleva en la muñeca', answer: 'watch', hint: 'También significa ver o mirar', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Sábado y domingo juntos, días de descanso', answer: 'weekend', hint: 'Fin de semana en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Página en internet con información', answer: 'website', hint: 'Página web en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Separación vertical entre dos habitaciones', answer: 'wall', hint: 'La pared de una habitación', level: 'A2', difficultyScore: 1 },
  { letter: 'W', definition: 'Conjunto de empleados de una empresa', answer: 'workforce', hint: 'Los trabajadores de una empresa', level: 'A2', difficultyScore: 3 },
  { letter: 'W', definition: 'Lugar donde una persona trabaja cada día', answer: 'workplace', hint: 'El sitio de trabajo', level: 'A2', difficultyScore: 2 },
  { letter: 'W', definition: 'Color de la nieve y de la leche', answer: 'white', hint: 'El color más claro', level: 'A2', difficultyScore: 1 },

  // ── X ───────────────────────────────────────────────────────────────────
  { letter: 'X', definition: 'Técnica médica que usa rayos para ver el interior del cuerpo', answer: 'x-ray', hint: 'Radiografía en inglés', level: 'A2', difficultyScore: 2 },
  { letter: 'X', definition: 'Instrumento de percusión con láminas que se golpean con mazas', answer: 'xylophone', hint: 'Instrumento de láminas musicales', level: 'A2', difficultyScore: 3 },
  { letter: 'X', definition: 'Festividad cristiana que se celebra el 25 de diciembre', answer: 'Xmas', hint: 'Abreviatura informal de Christmas', level: 'A2', difficultyScore: 1 },
  { letter: 'X', definition: 'Máquina que hace copias de documentos en papel', answer: 'xerox', hint: 'Fotocopiadora, marca muy conocida', level: 'A2', difficultyScore: 2 },
  { letter: 'X', definition: 'Signo que se usa para marcar algo incorrecto o para firmar', answer: 'x-mark', hint: 'La equis que pones cuando algo está mal', level: 'A2', difficultyScore: 2 },
  { letter: 'X', definition: 'Red social de mensajes cortos, antes llamada Twitter', answer: 'X', hint: 'Red social de Elon Musk', level: 'A2', difficultyScore: 1 },
  { letter: 'X', definition: 'Número romano equivalente al número diez', answer: 'X', hint: 'Diez en números romanos', level: 'A2', difficultyScore: 2 },
  { letter: 'X', definition: 'Planta adaptada a vivir en climas muy secos', answer: 'xerophyte', hint: 'Planta del desierto', level: 'A2', difficultyScore: 3 },

  // ── Y ───────────────────────────────────────────────────────────────────
  { letter: 'Y', definition: 'Respuesta afirmativa, lo contrario de no', answer: 'yes', hint: 'La afirmación en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Color del sol, los limones y los girasoles', answer: 'yellow', hint: 'Color vivo y alegre', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Que tiene pocos años, no es mayor', answer: 'young', hint: 'Joven en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'El día que pasó justo antes de hoy', answer: 'yesterday', hint: 'Ayer en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Alimento lácteo espeso hecho con leche fermentada', answer: 'yogurt', hint: 'Lácteo cremoso muy común', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Práctica física de origen hindú con posturas y respiración', answer: 'yoga', hint: 'Se practica en esterilla', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Embarcación de vela o motor usada para navegar por placer', answer: 'yacht', hint: 'Barco de lujo', level: 'A2', difficultyScore: 2 },
  { letter: 'Y', definition: 'Periodo de doce meses consecutivos', answer: 'year', hint: 'Doce meses seguidos', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Pronombre de segunda persona en inglés', answer: 'you', hint: 'Tú o vosotros en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Y', definition: 'Saludo informal muy usado en inglés americano', answer: 'yo', hint: 'Saludo coloquial americano', level: 'A2', difficultyScore: 2 },

  // ── Z ───────────────────────────────────────────────────────────────────
  { letter: 'Z', definition: 'Animal rayado blanco y negro de las sabanas africanas', answer: 'zebra', hint: 'Pariente del caballo con rayas', level: 'A2', difficultyScore: 1 },
  { letter: 'Z', definition: 'Lugar donde se pueden ver animales de todo el mundo', answer: 'zoo', hint: 'Parque zoológico en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Z', definition: 'Cierre de tela con dientes metálicos en la ropa', answer: 'zip', hint: 'Cremallera en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Z', definition: 'Código numérico que identifica una zona de reparto de correo', answer: 'zip code', hint: 'Código postal en inglés americano', level: 'A2', difficultyScore: 2 },
  { letter: 'Z', definition: 'Área o región con características o normas específicas', answer: 'zone', hint: 'Zona o área delimitada', level: 'A2', difficultyScore: 2 },
  { letter: 'Z', definition: 'El número cero, que no vale nada', answer: 'zero', hint: 'El número 0 en inglés', level: 'A2', difficultyScore: 1 },
  { letter: 'Z', definition: 'Línea que va de un lado a otro en forma de zeta repetida', answer: 'zigzag', hint: 'Línea en forma de Z repetida', level: 'A2', difficultyScore: 2 },
  { letter: 'Z', definition: 'Herramienta para acercar o alejar la imagen en una cámara o pantalla', answer: 'zoom', hint: 'Acercar o alejar la imagen', level: 'A2', difficultyScore: 1 },
  { letter: 'Z', definition: 'Punto más alto del cielo justo encima de tu cabeza', answer: 'zenith', hint: 'El punto más alto del cielo', level: 'A2', difficultyScore: 3 },
  { letter: 'Z', definition: 'Período de sueño corto durante el día', answer: 'zzz', hint: 'Los ronquidos o la siesta', level: 'A2', difficultyScore: 2 },
]

async function main() {
  console.log('🌱 Seeding A2 words...')

  await prisma.word.deleteMany({ where: { level: 'A2' } })
  console.log('  Cleared A2 words')

  const created = await prisma.word.createMany({ data: words })
  console.log(`  Created ${created.count} words`)

  // Validate every answer starts with its letter
  const invalid = words.filter(
    (w) => !w.answer.toLowerCase().startsWith(w.letter.toLowerCase())
  )
  if (invalid.length > 0) {
    console.warn('\n⚠️  Words where answer does NOT start with its letter:')
    invalid.forEach((w) =>
      console.warn(`   ${w.letter} → "${w.answer}"`)
    )
  } else {
    console.log('  ✓ All answers start with their correct letter')
  }

  // Show count per letter
  console.log('\n  Words per letter:')
  ALPHABET.forEach((l) => {
    const count = words.filter((w) => w.letter === l).length
    console.log(`    ${l}: ${count} ${count < 8 ? '⚠️  NEEDS MORE' : '✓'}`)
  })

  console.log('\n✅ A2 seed complete')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
