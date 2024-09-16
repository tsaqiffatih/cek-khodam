

import { Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;
console.log(uri);


if (!uri) {
	throw new Error("Mongo DB is offline something went wrong");
}

export const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
	connectTimeoutMS: 10000,
});

export const database = client.db(process.env.MONGODB_DATABASE_NAME);

/*
async function checkDatabaseConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully');
    
    // Opsional: Lakukan operasi sederhana untuk memastikan koneksi
    await database.command({ ping: 1 });
    console.log('Pinged the database successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Panggil fungsi untuk memeriksa koneksi
checkDatabaseConnection().catch(console.error);

*/
// async function testConnection() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   } finally {
//     await client.close();
//   }
// }

// testConnection();