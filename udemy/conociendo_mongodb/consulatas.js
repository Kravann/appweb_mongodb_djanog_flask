// BASES DE DATOS
// SIEMPRE USAR EL COMANDO mongo EN LA TERMINAL DE LARRGON
// luego introducir use crud para usar dicha bd
// luego podremos buscar las collections guardadas

// show databases;
// show dbs;

// use crud;

// COLLECTIONS
// show collections;

// Esquema para crear una collection
// db.createCollection( <name>,
//     {
//         capped: <boolean>,
//         autoIndexId: <boolean>,
//         size: <number>,
//         max: <number>,
//         storageEngine: <document>,
//         validator: <document>,
//         validationLevel: <string>,
//         validationAction: <string>,
//         indexOptionDefaults: <document>,
//         writeConcern:  <document>,
//     }
// )

// 2 REALIZAR OPERACION
// db.books.insert()
// db.nameCollection.insert()

// var book1 = {
//     'name': 'Pathfinder - Devir - Español',
//     'description': 'Juego de rol'
// };

// db.books.insetOne(book1);

// var book2 = {
//     'name': 'Final Fantasy - Español',
//     'description': 'Juego de rol con dados de 10 caras'
// };

// var book3 = {
//     'name': 'Starfinder - Devir - Español',
//     'description': 'Juego de rol galactico'
// };

// db.books.insertMany([book2,book3]);

// db.books.insert(book1); = db.books.insertOne(book1);
// db.books.insert([book2,book3]); = db.books.insertMany([book2,book3]);
// db.books.insert(book1); db.books.insert([book2,book3]);

// Encontrar
// db.books.find();
// db.books.findOne(); busca la primera collection y la muestra toda o con los parametros dados
// QUERY AND PROYECTIONS
// si en los parametros a buscar, introdusco _id, tengo que usar toda su descripcion no solo el string
// db.books.find({
//     'name':'Pathfinder - Devir - Español',
// });
// db.books.find({
//     '_id': ObjectId("63cd6ce1201abd21c95fa5c9"),
//     'name':'Starfinder - Devir - Español'
// },
// {
//     '_id': false,
//     'name': true,
//     'description': true,
// });

// Actualizar puedo agregar mas diccionarios a la collection y sin alterar las otras
// ademas cuando busque todas las collections me apeceran todas aunque no tengan todos los diccionarios

// db.books.updateMany(
//     {
//         aqui va el condicionador,
//     },
//     {
//         $set:{
//             funcion de agregacion set
//         }
//     }
// )

db.books.updateOne(
    {
        "_id" : ObjectId("63cd6df4201abd21c95fa5ca"),
    },
    {
        $set:{
            'name':'Pathfinder - Devir - Español - 2da edicion',
        }
    }
);

db.books.updateMany(
    {
        "description" : "Juego de rol"
    },
    {
        $set:{
            'name':'Pathfinder - Devir - Español - 2da edicion - 2.0',
            'launch':2018,
        }
    }
);


db.books.updateMany(
    {
        "_id" : ObjectId("63cd6df4201abd21c95fa5ca"),
    },
    {
        $set:{
            'name':'Pathfinder - Devir - Español - 2da edicion',
        }
    }
);


// Borrar collection

db.books.deleteOne({
    "_id" : ObjectId("63cd6df4201abd21c95fa5ca"),
});

db.books.deleteOne({
    'name':'Pathfinder - Devir - Español - 2da edicion',
});


// para salir de la terminal coloco exit


//respuesta de mongodb
// me muestra todas las collections formateadas a json visualmente
db.books.find().pretty()