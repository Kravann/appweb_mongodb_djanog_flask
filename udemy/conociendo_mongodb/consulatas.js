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


db.mechs.insertMany([
    {type: "Zoid", name:"Geno Trooper", qty: 77, size:{h:23, w:123, size_t: "L"}, status: "A+"},
    {type: "Zoid", name:"Liger Zero", qty: 34, size:{h:8, w:85, size_t: "M"}, status: "A"},
    {type: "Gundam", name:"ASW-G-08 Barbatos Lupus Rex", qty: 59, size:{h:19, w:32, size_t: "L"}, status: "S"},
    {type: "Shin Getter", name:"Getter F3", qty: 87, size:{h:20, w:99, size_t: "XL"}, status: "S+"},
    {type: "Gundam", name:"FP/A-77 Pharact", qty: 77, size:{h:19, w:57, size_t: "M"}, status: "S"},
])

db.mechs.insertMany([
    {type: "Zoid", name:"Blade Liger", qty: 31, size:{h:12, w:124, size_t: "L"}, status: "A"},
    {type: "Zoid", name:"Koni Wolf", qty: 22, size:{h:9, w:90, size_t: "M"}, status: "B+"},
])

// Operadores logicos y comparacion

// muestra todas las collections
db.mechs.find().pretty()

// busco de forma mas especifica
db.mechs.find(
    {
        status:"A+"
    }
).pretty()

db.mechs.find(
    {
        $and: [
            {
                qty: {$gt:30} // mayor que
            },
            {
                qty:  {$lt:88} // menor que
            }
        ]
    }
).pretty()

db.mechs.find(
    {
        status: "S",
        $and: [
            {
                qty: {$gt:30}
            },
            {
                qty:  {$lt:88}
            },
        ]
    }
).pretty()


db.mechs.find(
    {
        status: "S",
        qty: {$gt:30},
        qty:  {$lt:88},
    }
).pretty()

// $or

db.mechs.find(
    {
        status: "S",
        $or: [
            {
                qty: {$gt:30}
            },
            {
                qty:  {$lt:88}
            },
        ]
    }
).pretty()

db.mechs.find(
    {
        $or: [
            {
                qty: {$gt:30}
            },
            {
                qty:  {$lt:88}
            },
            {status: "S",},
        ]
    }
).pretty()


// $in

db.mechs.find(
    {
        status:{$in: ["S", "A", "B+"]}
    }
).pretty()