const products = 
[
    {
        id:1,
        title: 'Nike Air Max 1PRM ADM "W"',
        category: "nike",
        price: 43999,
        description: "El exclusivo Nike Air Max 1 Wabi-sabi (W) de Asia-Pacífico conmemora la antigua ideología japonesa homónima que enfatiza la belleza en todos los aspectos de la imperfección en la naturaleza. Cuenta con una parte superior de tela color crema con superposiciones Durabuck de color verde oliva, marrón, rosa claro y naranja. Las costuras en bucle en el talón, los bordados Swoosh deshilachados en la puntera y las marcas envejecidas en la suela se alinean con el espíritu de belleza en lo imperfecto del diseño.",
        image: 'nike-air-max-1-prm-adm-w.jpg',
        stock: 5
    },
    {
        id:2,
        title: 'New Balance 550 HR1',
        category: "new-balance",
        price: 28999,
        description: "Construido con una parte superior de cuero blanco con revestimientos de cuero rojo y negro, el New Balance 550 White Red Black llega como la versión de New Balance de los tenis de baloncesto de la década de 1980. Una etiqueta tejida en la lengüeta con imágenes de baloncesto completa el look de la silueta clásica de New Balance.",
        image: 'new-balance-bb550hr1.jpg',
        stock: 4
    },
    {
        id:3,
        title: 'Nike W Dunk Hi Up PRM',
        category: "nike",
        price: 39999,
        description: "Creado para la cancha y adaptado al estilo urbano, este ícono del básquetbol renovado marca el inicio de la salud y la riqueza para celebrar el Setsubun. Pisa los demonios y deslízate en la próxima temporada con capas de cuero grueso y una entresuela exagerada. Es una versión inspirada de un clásico para un nuevo comienzo en el año nuevo.",
        image: 'nike-w-dunk-hi-up-prm-.jpg',
        stock: 0
    },
    {
        id:4,
        title: 'Converse Run Star Motion Hi CNVS',
        category: "converse",
        price: 27499,
        description: "La Run Star Motion toma el ADN clásico de Converse y lo combina con una media suela innovadora y ultra moderna para redefinir por completo el estilo de la plataforma.",
        image: 'converse-run-star-motion-hi-cnvs-.jpg',
        stock: 5
    },
    {
        id:5,
        title: 'Adidas Ozelia',
        category: "adidas",
        price: 26999,
        description: "Zapatillas de los 90 reinventadas con estilo futurista para crear estas zapatillas adidas Ozelia. Los colores neutros y un diseño fluido les dan un look verdaderamente unisex. Son tan cómodas que se siente como si estuvieras usando medias. Las clásicas 3 Tiras le ponen el toque final al look.",
        image: 'adidas-ozelia-.jpg',
        stock: 3
    },
    {
        id:6,
        title: 'Adidas Ozweego',
        category: "adidas",
        price: 23999,
        description: "Hace mucho frío afuera. Envolvé tus pies con la comodidad que ofrecen las zapatillas adidas OZWEEGO Capas de gamuza y nobuk sobre un exterior textil mantienen tus pies felices del talón a la punta de los dedos. ¿Y la energía distintiva de los 90? Suficiente para enamorar a cualquier fashionista.",
        image: 'adidas-ozweego-w-.jpg',
        stock: 5
    },
    {
        id:7,
        title: 'Vans Old Skool',
        category: "vans",
        price: 19849,
        description: "Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Nacieron como un calzado para skaters de los años 70´y con el correr de las décadas se transformó en un modelo básico de lifestyle. Son zapatillas de corte bajo confeccionadas con capellada resistente, tiene punteras reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.",
        image: 'vans-old-skool.jpg',
        stock: 4
    },
    {
        id:8,
        title: 'New Balance 327',
        category: "new-balance",
        price: 20499,
        description: "El diseño moderno se combina con nuestro clásico estilo deportivo. Confeccionado con materiales ligeros y de primera calidad, estas zapatillas presentan un diseño de empeine que celebra nuestra silueta emblemática de los años 70 y agregamos detalles contemporáneos como un logotipo N llamativo para renovar un clásico de todos los tiempos. Estas zapatillas retro le añade un estilo único a tu look diario.",
        image: 'new-balance-ws327wn1-.jpg',
        stock: 5
    },
    {
        id:9,
        title: 'Nike Air Force 1 07 se',
        category: "nike",
        price: 35599,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'nike-af107-se.jpg',
        stock: 2
    },
    {
        id:10,
        title: 'Puma RS-Z AS',
        category: "puma",
        price: 24199,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'puma-rs-z-as.jpg',
        stock: 2
    },
    {
        id:11,
        title: 'Puma RS-Fast Tech',
        category: "puma",
        price: 24199,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'puma-rs-fast-tech-.jpg',
        stock: 4
    },
    {
        id:12,
        title: 'Puma Wild Rider Animal Crossing',
        category: "puma",
        price: 27499,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'puma-wild-rider-animal-crossing-.jpg',
        stock: 1
    },
    {
        id:13,
        title: 'Adidas Forum Low',
        category: "adidas",
        price: 40699,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'adidas-forum-low.jpg',
        stock: 3
    },
    {
        id:14,
        title: 'Converse Louie Lopez Pro OX',
        category: "converse",
        price: 22699,
        description: "El nuevo pro model de Louie Lopez, skater del team Converse, diseñado con las mejores características técnicas para máxima resistencia y un superior contacto con tu tabla. Con una construcción en suede reforzado, suela de tracción CONS, cordones de poliéster y algodón para extra durabilidad. Las Louie Lopez Pro te ofrecen la mejor durabilidad y comodidad sobre tu skate.",
        image: 'converse-louie-lopez-pro-ox.jpg',
        stock: 2
    },
    {
        id:15,
        title: 'Converse Chuck 70 Utility',
        category: "converse",
        price: 35599,
        description: "El estilo al aire libre se une a la moda callejera retro de los 90 en las Chuck 70 Utility. una pieza de TPU translúcido sobre la lona de algodón al estilo de las modernas botas de senderismo. Los revestimientos de goma envuelven la bota y el talón para brindar protección adicional contra los elementos. Acabado con una plantilla OrthoLite para mayor comodidad.",
        image: 'cnvrs-chuck-70-utility.jpg',
        stock: 4
    },
    {
        id:16,
        title: 'New Balance W574 LU1',
        category: "new-balance",
        price: 27499,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.",
        image: 'new-balance-w574-lu1.jpg',
        stock: 5
    },
    {
        id:17,
        title: 'Vans U Old Skool 36 DX',
        category: "vans",
        price: 32000,
        description: "La felicidad se renueva en el mundo del básquetbol gracias a las Zapatillas Nike Air Force 1 07 Se. Sus colores y parches divertidos florecen con detalles primaverales y agregan un aire de energía a tus días. Sus revestimientos cosidos, le dan un toque llamativo y resaltante y a la vez, te mantienen fiel al estilo de la marca. La amortiguación Nike Air creada originalmente para las pistas de básquet de alto rendimiento, agregan comodidad y ligereza. La entresuela de estas zapatillas de espuma Crater, te promete estabilidad y un look moteado. No importa si te vas a la universidad o a juntarte a tomar el té con amigas. Siempre estarás impecable con estas zapatillas.Las zapatillas Old Skool 36 DX, incorporan detalles de las originales Old Skool, pero modernizadas en cuanto a confort con plantillas Ortholite® . También incorporan detalles retro, como el número de modelo original y la paleta cromática o estampados reeditados, banda de goma protectora con más brillo, cordones de algodón, forro con las perforaciones originales.",
        image: 'vans-old-skool36-dx.jpg',
        stock: 2
    },
    {
        id:18,
        title: 'Vans Skate Old Skool',
        category: "vans",
        price: 27000,
        description: "Este modelo cuenta con una horma angosta. Recomendamos comprar un punto más. Completamente rediseñada pensando en los skaters, la nueva línea Skate Classics ofrece más de lo que los skaters necesitan para lorar el máximo nivel. Hecho con una parte superior completamente reforzada, un talón moldeado y un recorte de la base DURACAP ™, las Skate Classics Old Skool ofrece un ajuste esencial que es más transpirable y duradero donde los skaters más lo necesitan. Junto con un nuevo acabado en las paredes laterales, plantillas POPCUSH ™ para una amortiguación superior y protección contra impactos, y una elegante bandera Checkboard, las nuevas Skate Classics Old Skool te ofrece el aspecto icónico que deseas, con todos los beneficios de rendimiento que exigen los skaters reales.",
        image: 'vans-mSkate-old-skool.jpg',
        stock: 4
    },
    {
        id:19,
        title: 'Vans M Kyle Walker',
        category: "vans",
        price: 26900,
        description: "Las nuevas zapatillas Kyle Walker son el modelo introductorio inconfundible del futbolista Kyle Walker y están fabricadas con la pala en ante y lona. Su plantilla UltraCush HD mantiene el pie cerca de la tabla y ofrece el máximo nivel de amortiguación contra impactos, mientras que la revolucionaria construcción Wafflecup proporciona la sujeción de una suela de goma sin renunciar a la adherencia ni a la sensación sobre la tabla de una zapatilla con suela vulcanizada tradicional. También cuentan con refuerzos de goma DURACAP en las zonas más expuestas al desgaste para ofrecer una durabilidad inigualable.",
        image: 'vans-m-kyle-walker.jpg',
        stock: 4
    },
    {
        id:20,
        title: 'Adidas Supertstar',
        category: "adidas",
        price: 36799,
        description: "Las zapatillas Adidas Superstar no necesitan mucha presentación. Su historia hizo que dejen de ser un calzado para ser un ícono de la moda. Nacidas en los 70's para el básquet, fueron recorriendo el mundo urbano de la mano del skateboarding y principalmente el hip-hop. Estilo de sobra con el detalle de las tres tiras (three-stripes) típicas de la marca y su característica puntera de caucho.",
        image: 'adidas-super-star.jpg',
        stock: 5
    },
    {
        id:21,
        title: 'New Balance 574',
        category: "new-balance",
        price: 27399,
        description: "Reinventate con las nuevas zapatillas New Balance 574. Éstas zapatillas de hombre te ofrecen la misma calidad de materiales premium y máximo rendimiento que esperás de unas zapatillas New Balance 574 pero con un diseño en cuero descarne y mesh y tecnología de confort. Zapatillas clásicas que se han convertido en símbolo de ingenio y originalidad.",
        image: 'new-balance-574.jpg',
        stock: 4
    },
    {
        id:22,
        title: 'New Balance 57/40',
        category: "new-balance",
        price: 27499,
        description: "La 57/40 aporta a nuestra zapatilla emblemática 574 una renovación moderna y atrevida. Tomando elementos de la moda de los años 80 y 90, esta versátil zapatilla para mujer proporciona un estilo indefinible que se puede combinar prácticamente con cualquier tendencia. El diseño combina una silueta elegante inspirada en las carreras con una parte superior de cuero descarne y mesh, amortiguación suave en la planta y una suela resistente para disfrutar de un estilo desenfadado y confort durante todo el día.",
        image: 'new-balance-5740.jpg',
        stock: 3
    },
    {
        id:23,
        title: 'Nike Blazer Low 77 VNTG',
        category: "nike",
        price: 27499,
        description: "Elogiado por las calles por su simplicidad y comodidad clásicas, las Nike Blazer Low '77 Vintage regresan con su estilo discreto y su estilo tradicional de básquet. Con exquisitos detalles de gamuza, un Swoosh retro y un cuello supersuave, es el básico imprescindible de tu guardarropa que te llevará a todas partes. Originalmente diseñadas para el básquet de rendimiento, las Nike Blazer Low ofrecen durabilidad y comodidad duraderas. La versión casi 1 a 1 presenta una parte superior de cuero nítido con gamuza suave y detalles de goma para mayor durabilidad y estilo retro. Los colores ultra limpios, las líneas simples y el cuello acolchado de corte bajo crean una apariencia elegante que se siente genial. La confección vulcanizada fusiona la suela con la entresuela para una apariencia aerodinámica que es duradera y cómoda. La suela de goma sólida con patrón de espiga agrega adherencia, durabilidad y estilo tradicional.",
        image: 'nike-blazer-low77-vntg.jpg',
        stock: 2
    },
    {
        id:24,
        title: 'Nike Air Force 1 SWAROSVKI',
        category: "nike",
        price: 99999,
        description: "Durante más de 125 años, los cristales de Swarovski han inspirado diseños fascinantes una y otra vez. Este año, como el producto estrella en nuestra asociación de materiales, Nike y Swarovski están adoptando una silueta definitoria, el 'Triple Black' Air Force 1, y arrojando una nueva e innovadora luz sobre sus componentes clásicos. Cubierto con más de 228 cristales de Swarovski retrorreflectantes individuales sin facetar creados exclusivamente para Nike, cada elemento tachonado se suma para hacer que este haz de Air Force 1 sea tan brillante como su fuente de luz.",
        image: 'nike-air-force-swarovski.jpg',
        stock: 2
    },
    {
        id:25,
        title: 'Vans M BMX Slip-On',
        category: "vans",
        price: 22900,
        description: "Este modelo cuenta con una horma angosta. Recomendamos comprar un punto más. Las ZAPATILLAS DAK BMX Slip-On, un modelo clásico de Vans rediseñado para ofrecer un mayor rendimiento, están confeccionada con una resistente capellada de lona y piel, plantillas elevadas para una mejor amortiguación y protección contra impactos, refuerzos de caucho DURACAP™ en las zonas más expuestas al desgaste para ofrecer una durabilidad inigualable, y la revolucionaria construcción Wafflecup BMX de Vans, que ofrece la sujeción de una cupsole sin renunciar a la adherencia ni a la sensación sobre el pedal que ofrecen las zapatillas con suela vulcanizada tradicionales. También incluyen la suela waffle original de Vans, fabricada en caucho, que ofrece agarre y sujeción.",
        image: 'vans-m-bmx-slip-on.jpg',
        stock: 4
    },
    {
        id:26,
        title: 'Adidas Ozelia',
        category: "adidas",
        price: 32999,
        description: "Puede que estemos muy lejos de los años 90, pero estas zapatillas Ozelia tienen sus raíces en esa era ruidosa y experimental. Inspiradas en los archivos de adidas, las atrevidas zapatillas tienen una construcción gruesa que se trata de llamar la atención. Son elegantes con un look rápido, y cuando tus días son acelerados, la amortiguación Adiprene te ayuda en el lado de la comodidad. Este producto está hecho con contenido reciclado como parte de nuestra ambición de terminar con los desechos plásticos. El 20% de las piezas utilizadas para hacer la parte superior se fabrican con un contenido reciclado mínimo del 50%.",
        image: 'adidas-ozelia-white.jpg',
        stock: 5
    },
    {
        id:27,
        title: 'Adidas ZX Boost 2.0',
        category: "adidas",
        price: 40999,
        description: "Las Zapatillas adidas Zx 2K Boost 2.0 traen un diseño exclusivo de adidas que va a robarse todas las miradas. Gracias a su mediasuela Boost vas a sentir una comodidad superior y podes disfrutar de una amortiguación única. La capellada y suela asimétrica aportan un estilo urbano que podes lucir con tus mejores prendas para destacar tu outfit estés donde estés. Además, su fabricación colabora a tener un mundo más sustentable ya que están confeccionadas con algodón 100% reciclado.",
        image: 'adidas-ZX-2K-Boost-2.jpg',
        stock: 2
    },
    {
        id:28,
        title: 'New Balance 327',
        category: "new-balance",
        price: 24199,
        description: "Las NB 327 son una versión actualizada de un clásico atemporal. Estas zapatillas para hombre están inspiradas en la silueta de nuestra zapatilla tradicional de la década de los años 70 y están actualizadas con un empeine renovado de cuero descarne y cordura, que crea un aspecto retro preparado para la vida urbana. Un logotipo N sobredimensionado añade un acabado atrevido a estas zapatillas versátiles de uso diario.",
        image: 'new-balance-327.jpg',
        stock: 5
    },
    {
        id:29,
        title: 'Nike Air Max 97 Se',
        category: "nike",
        price: 62699,
        description: "Porque se acerca la primavera y junto a ella, aires de color y energía, las Zapatillas Nike Air Max 97 Se llegan para hacer alusión a la época del año más querida por todos. Disfrutar del sol, y la naturaleza, nos hace quererla cada día mas. Por eso Nike incorpora reciclaje en la confección de estas zapatillas. Confeccionadas con al menos 20% de contenido reciclado, un forro de lona clásico que te da ventilación, costuras decorativas que agregan energía y completan un look ideal, ya se empieza a sentir el olor de la primavera. Además, envolverás tus pies en comodidad gracias a la unidad Max Air de largo completo que aporta comodidad suave y duradera. El toque final se lo da la suela de goma que aporta tracción y durabilidad. ¿Qué mas se puede esperar de unas zapatillas?",
        image: 'nike-air-max-97-se.jpg',
        stock: 3
    },
    {
        id:30,
        title: 'Vans U EVDNT UltimateWaffle',
        category: "vans",
        price: 36000,
        description: "Presentamos las EVDNT UltimateWaffle, la mayor innovación de los últimos tiempos de Vans en cuanto a zapatillas de diario, gracias a la construcción UltimateWaffle. Hemos recurrido a nuestras raíces más auténticas del skate para documentarnos y crear una silueta revolucionaria, apta para diario, que te garantizamos que va a pisar fuerte en cuanto a funcionalidad y estilo. Utilizando la construcción única UltimateWaffle, este nuevo modelo cuenta con una suela traslúcida que combina una plantilla UltraCush™ integrada y un vástago estabilizador interno para mayor amortiguación, durabilidad y apoyo. Además, todo ello en un paquete de estilo único que parece gritar: «lo que ves es lo que hay». El interior, confeccionado con LuxLiner™, crea el ajuste perfecto, similar al de un calcetín, para ofrecer mayor comodidad y apoyo durante todo el día, mientras que las elegantes palas, confeccionadas con malla de punto transpirable y dotadas de refuerzos de cuero y piezas decorativas de caucho, proporcionan un ajuste práctico y moldeado. • Construcción UltimateWaffle con una suela traslúcida de nuevo diseño para mayor agarre. • Plantilla UltraCush™ incorporada para mayor amortiguación. • Interior LuxLiner™ para un ajuste perfecto. • Vástago estabilizador interno para mayor sujeción. • Malla de punto transpirable con refuerzos de cuero y detalles de caucho para un diseño exclusivo.",
        image: 'vans-U-EVDNT-UltimateWaffle.jpg',
        stock: 2
    }
]

export default products