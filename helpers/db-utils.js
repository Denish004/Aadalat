import { MongoClient, ObjectID } from 'mongodb';

// const username = process.env.MONGODB_USERNAME;
// const password = process.env.MONGODB_PASSWORD;
// const cluster = process.env.MONGODB_CLUSTER;
// const database = process.env.MONGODB_DATABASE;

// const MONGODB_URI = `mongodb+srv://${username}:${password}@${cluster}.3svps.mongodb.net/${database}?retryWrites=true&w=majority`;

const MONGODB_URI =
  'mongodb+srv://denishsuhagiya18:denish123@cluster0.tvzkbyw.mongodb.net/';

export async function connectToDatabase() {
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(client);
  return client;
}

export async function getAllLawyerProfiles(client) {
  const db = client.db();

  const documents = await db.collection('lawyersList').find().toArray();
  console.log(documents);
  if(!documents){console.log("errrrrrrrrrrrrrrrrorrrrrrrrrrrrr")};
  console.log("helllllllllllllllllllloooooooooooooooooo");
  return documents;
}

export async function getLawyerProfile(client, id) {
  const db = client.db();

  const lawyerProfile = await db.collection('lawyersList').findOne({
    bar_council_id: id,
  });

  return lawyerProfile;
}

export async function getLawyerId(client, id) {
  const db = client.db();
console.log("iiiiiiiiiiiiiiiiiiiddddddddddddddddddddddd", id);
  const lawyerProfile = await db.collection('lawyersList').findOne({
    bar_council_id: 123,
  });
console.log("lawyeeee" , lawyerProfile);
  return lawyerProfile;
}
