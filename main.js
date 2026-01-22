function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//Câu 2 Khởi tạo mảng products
const products = [
  new Product("P001", "Laptop Dell XPS 13", 25000000, 15, "Điện tử", true),
  new Product("P002", "iPhone 15 Pro", 28000000, 20, "Điện tử", true),
  new Product("P003", "Bàn làm việc gỗ", 3500000, 8, "Nội thất", true),
  new Product("P004", "Ghế văn phòng", 2000000, 0, "Nội thất", false),
  new Product("P005", "Tai nghe Sony WH-1000XM5", 8500000, 12, "Điện tử", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name và price
const nameAndPrice = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log(nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);

console.log(inStockProducts);

// Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30 triệu
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log("Có sản phẩm giá trên 30 triệu:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm "Accessories" có đang được bán
const accessoriesProducts = products.filter(product => product.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.length > 0 
  ? accessoriesProducts.every(product => product.isAvailable === true)
  : true; // trả về true nếu không có sản phẩm nào thuộc danh mục

console.log("Tất cả sản phẩm Accessories đang được bán:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price × quantity)
const totalInventoryValue = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log("Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString('vi-VN'), "VNĐ");

// Câu 8: Dùng vòng lặp for...of in ra tên - danh mục - trạng thái
console.log("\nDanh sách sản phẩm:");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: Dùng vòng lặp for...in in ra tên thuộc tính và giá trị
console.log("\nThông tin chi tiết sản phẩm đầu tiên:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}

// Câu 10: Lấy danh sách tên sản phẩm đang bán và còn hàng
const availableInStockNames = products
  .filter(product => product.isAvailable && product.quantity > 0)
  .map(product => product.name);

console.log("\nSản phẩm đang bán và còn hàng:", availableInStockNames);
