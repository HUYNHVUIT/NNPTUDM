const { MongoClient } = require('mongodb');

// Thông tin kết nối
const uri = 'mongodb://localhost:27017';
const dbName = 'mobileShop';

// Tạo một client mới
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
