// bases de datos
// show databases; // mostrar base de datos
// show dbs;       // variacion comando anterior

// use crud;       // usar o establecer base de datos

// colecciones
// show collections// mostrar colecciones/tablas de la base de datos seleccionada

//*** crear colecciones y base de dato de manera automatica */

// 1 esquema para crear una coleccion
/*db.createCollection( <name>,
    {
        capped: <boolean>,
        autoIndexId: <boolean>,
        size: <number>,
        max: <number>,
        storageEngine: <document>,
        validator: <document>,
        validationLevel: <string>,
        validationAction: <string>,
        indexOptionDefaults: <document>,
        writeConcern: <document>
    }
);*/

// 2 realizar operacion 
db.books.insert()

//*** CRUD insertar

var book1 = {
    'name': 'GOT - Vientos de Invierno - InsertOne',
    'description': 'Libro de fantasia',
    'age':50,
    'age2':50.1,
};

db.books.insertOne(book1);

var book2 = {
    'name': 'GOT - cancion de hielo y fuego - InsertMany',
    'description': 'Libro de fantasia ...'
};

var book3 = {
    'name': 'GOT - sangre y fuego - InsertMany',
    'description': 'Libro de fantasia XD'
};

db.books.insertMany([book2, book3]);

db.books.insert(book1);
db.books.insert([book2, book3]);


// **** Encontrar

db.books.find()

db.books.find({
    '_id': ObjectId("5f455708a55825fbec49366c"),
    'name': "GOT - Vientos de Invierno - InsertOne",
}
);


// query y proyecciones
db.books.find({
    '_id': ObjectId("5f455708a55825fbec49366c"),
    'name': "GOT - Vientos de Invierno - InsertOne",
},
{
    'name' : true,
    '_id': false
}
);

// **** Actualizar

db.books.updateOne(
    {
        '_id': ObjectId("5f45596ea55825fbec49366f"),
    },
    {
        $set : {
            'name': "GOT - Vientos de Invierno - InsertOne 2.0",
        }
    }
);

db.books.updateMany(
    {
        'name': "GOT - Vientos de Invierno - InsertOne 2.0",
    },
    {
        $set : {
            'name': "GOT - Vientos de Invierno - InsertOne 2.1",
        }
    }
);

db.books.updateMany(
    {
        'name': "GOT - Vientos de Invierno - InsertOne 2.1",
    },
    {
        $set : {
            'name': "GOT - Vientos de Invierno - InsertOne 2.2",
            'age': 2017
        }
    }
);

//*** Borrar

db.books.deleteOne({
    '_id': ObjectId("5f45596ea55825fbec49366f"),
})

db.books.deleteMany({
    'name': "GOT - Vientos de Invierno - InsertOne 2.2",
})


freezer = {
    name: "freezer",
    ki: 160000
};

cell = {
    name: "cell",
    ki: 1100000
};

buu = {
    name:"buu",
    ki: 1000000
};

db.villain.insertMany(
    [cell, freezer, buu]
);

gohan = {
    name: "gohan",
    killed: ObjectId("5f4e69a1b1522dbafb1e4ecb")
};

goku = {
    name: "goku",
    killed: [ObjectId("5f4e69a1b1522dbafb1e4ecc"), ObjectId("5f4e69a1b1522dbafb1e4ecd")]
};

db.hero.insertMany(
    [gohan, goku]
);
                

db.hero.find().pretty()

var gohan = db.hero.findOne({_id: ObjectId("5f4e69b8b1522dbafb1e4ece")})
db.villain.findOne({"_id":gohan.killed})

var goku = db.hero.findOne({_id: ObjectId("5f4e69b8b1522dbafb1e4ecf")})
db.villain.findOne({"_id":goku.killed})

db.villain.find({"_id":{$in:goku.killed}}).pretty()


db.hero.aggregate([
    {
        $lookup:
            {
                from: "villain",
                localField: "killed",
                foreignField: "_id",
                as: "exit"
            }
    }
]).pretty()