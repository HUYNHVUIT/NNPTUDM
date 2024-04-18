const MongoClient = require('mongodb').MongoClient

// Note: A production application should not expose database credentials in plain text.
// For strategies on handling credentials, visit 12factor: https://12factor.net/config.
// const PROD_URI = process.env.PROD_DB_URI;
const uri = 'mongodb://localhost:27017';
const dbName = 'mobileShop';
// const MKTG_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>"

var dbs = {production: {}};
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 // Kết nối tới MongoDB
 client.connect()
 .then(() => {
   console.log('Connected to MongoDB');
   const db = client.db(dbName);
   
   // Bây giờ bạn có thể thực hiện các hoạt động trên cơ sở dữ liệu, ví dụ:
   // - Thêm document
   // - Truy vấn document
   // - Cập nhật document
   // - Xóa document
 })
 .catch(err => {
   console.error('Error connecting to MongoDB:', err);
 });

function connect() {
  return client.db(dbName);

}

exports.initdb = async function () {
  let database = await connect();
  dbs.production = database;
}


exports.dbs = dbs;