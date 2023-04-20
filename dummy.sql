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
('Neon Pink'),
('Blue'),
('Carbon Grey'),
('Lime Green'),
('Green'),
('Black');

INSERT INTO model (name, category_id, brand_id) VALUES 
('iPhone 16', 1, 1),
('iPhone 15', 1, 1),
('Galaxy S12', 1, 2),
('Mate 13 Pro', 1, 3);

INSERT INTO product (model_id, color_id, price, quantity) VALUES 
(1, 1, 8999.99, 50),
(1, 3, 8699.99, 35),
(1, 5, 8599.99,30),
(2, 1, 6599.99, 40),
(2, 2, 6299.99,35),
(2, 4, 6299.99,50),
(2, 6, 6099.99,60),
(3, 7, 4599.99,56),
(4, 8, 3669.69,50);


INSERT INTO order (product_id) VALUES (1),(1),(2);