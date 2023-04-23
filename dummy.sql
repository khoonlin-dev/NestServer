INSERT INTO brand (name, country) VALUES 
('Apple', 'USA'),
('Samsung', 'Korea'),
('Huawei', 'China'),
('Xiaomi', 'China'); 

INSERT INTO category (name) VALUES 
('Smartphones'),
('Tablets'),
('Gadgets'),
('Others'); 

INSERT INTO color (name) VALUES 
('Rose Gold'),
('Tiffany Blue'),
('Orange'),
('Blue'),
('Midnight'),
('Starlight'),
('Lime'),
('Red');

INSERT INTO model (name, category_id, brand_id) VALUES 
('iPhone 16', 1, 1),
('iPhone 15', 1, 1),
('Galaxy S12', 1, 2),
('Mate 13 Pro', 1, 3);

INSERT INTO product (model_id, color_id, img_src, price, quantity) VALUES 
(1, 4, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?fmt=p-jpg', 8999.99, 50),
(1, 5, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?fmt=p-jpg', 8699.99, 35),
(1, 6, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-starlight?fmt=p-jpg', 8599.99,30),
(1, 8, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-product-red?fmt=p-jpg', 8599.99,0),
(2, 1, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-pink?fmt=p-jpg', 6599.99, 0),
(2, 5, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-midnight?fmt=p-jpg', 6299.99,50),
(2, 6, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-starlight?fmt=p-jpg', 6199.99,35),
(2, 8, 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-product-red?fmt=p-jpg', 6199.99,30),
(3, 7, 'https://images.samsung.com/is/image/samsung/p6pim/my/2302/gallery/my-galaxy-s23-s911-446765-sm-s911blgcxme-thumb-534861015', 4599.99,56),
(4, 3, 'https://shop-cdn.huawei.com/my/pms/uomcdn/MYHW/pms/202210/gbom/6941487280476/800_800_8E5631B7A18711B503E421CE04B76954mp.jpg', 3669.69,50);


INSERT INTO p_order (product_id) VALUES (1),(1),(2),(2),(3);