-- Seed data: 테스트용 음식 데이터 (USDA/FDA 기반)

-- 한식
INSERT OR IGNORE INTO foods (name, name_ko, category, serving_size, calories, protein, carbs, fat, sugar, sodium, fiber, cholesterol) VALUES
('Bibimbap', '비빔밥', '한식', 300, 560, 18.5, 78.2, 15.3, 8.5, 850, 5.2, 45),
('Kimchi', '김치', '한식', 100, 23, 1.6, 3.8, 0.5, 2.1, 747, 2.4, 0),
('Bulgogi', '불고기', '한식', 150, 285, 28.4, 12.6, 12.8, 10.2, 820, 1.2, 75),
('Tteokbokki', '떡볶이', '한식', 250, 382, 7.8, 68.5, 7.2, 18.5, 1250, 2.8, 0),
('Samgyeopsal', '삼겹살', '한식', 120, 518, 16.8, 0.2, 51.2, 0.1, 620, 0, 85),
('Doenjang Jjigae', '된장찌개', '한식', 350, 168, 14.2, 12.5, 6.8, 4.2, 1580, 3.5, 28),
('Japchae', '잡채', '한식', 200, 298, 8.5, 42.6, 10.2, 12.5, 680, 3.2, 15),
('Gimbap', '김밥', '한식', 280, 425, 12.8, 62.5, 12.8, 5.6, 820, 3.8, 35),
('Sundubu Jjigae', '순두부찌개', '한식', 400, 198, 18.5, 8.6, 9.2, 3.5, 1280, 2.5, 42),
('Galbi', '갈비', '한식', 180, 485, 32.5, 8.2, 36.5, 7.8, 920, 0.8, 95);

-- 양식
INSERT OR IGNORE INTO foods (name, name_ko, category, serving_size, calories, protein, carbs, fat, sugar, sodium, fiber, cholesterol) VALUES
('Cheeseburger', '치즈버거', '양식', 200, 542, 28.5, 38.2, 28.6, 7.5, 1248, 2.5, 88),
('Caesar Salad', '시저 샐러드', '양식', 250, 285, 12.5, 18.5, 18.2, 3.5, 825, 3.8, 42),
('Pepperoni Pizza', '페퍼로니 피자', '양식', 150, 398, 16.8, 42.5, 16.5, 4.2, 985, 2.5, 35),
('Spaghetti Carbonara', '스파게티 까르보나라', '양식', 350, 568, 22.5, 58.6, 24.8, 3.5, 825, 3.2, 125),
('French Fries', '감자튀김', '양식', 150, 365, 4.2, 48.5, 17.2, 0.5, 285, 4.5, 0),
('Chicken Wings', '치킨윙', '양식', 180, 485, 38.5, 12.5, 32.5, 0.8, 1120, 0.5, 142),
('Fish and Chips', '피쉬 앤 칩스', '양식', 320, 625, 32.5, 58.6, 28.5, 2.5, 1285, 4.2, 78),
('Steak', '스테이크', '양식', 250, 542, 48.5, 0.5, 32.8, 0.2, 685, 0, 145),
('Mac and Cheese', '맥앤치즈', '양식', 280, 485, 18.5, 42.5, 24.8, 5.5, 925, 2.2, 65),
('Club Sandwich', '클럽샌드위치', '양식', 300, 468, 28.5, 38.6, 22.5, 6.5, 1185, 3.5, 72);

-- 중식/아시안
INSERT OR IGNORE INTO foods (name, name_ko, category, serving_size, calories, protein, carbs, fat, sugar, sodium, fiber, cholesterol) VALUES
('Fried Rice', '볶음밥', '중식', 280, 452, 12.5, 62.5, 15.8, 4.2, 985, 2.8, 125),
('Sweet and Sour Pork', '탕수육', '중식', 200, 485, 18.5, 58.6, 18.5, 32.5, 825, 2.2, 65),
('Kung Pao Chicken', '궁보계정', '중식', 250, 385, 32.5, 28.5, 16.8, 12.5, 1120, 3.5, 88),
('Spring Rolls', '춘권', '중식', 100, 198, 6.5, 22.5, 8.5, 2.8, 420, 2.5, 15),
('Pad Thai', '팟타이', '태국', 300, 442, 16.8, 58.6, 14.5, 18.5, 985, 3.2, 125),
('Ramen', '라멘', '일식', 400, 485, 18.5, 68.5, 14.2, 5.5, 1850, 4.2, 52),
('Sushi Roll', '스시롤', '일식', 180, 285, 12.5, 42.5, 5.8, 8.5, 520, 2.5, 28),
('Dumplings', '만두', '중식', 150, 298, 12.8, 32.5, 11.5, 3.2, 685, 2.2, 42),
('General Tso Chicken', '좌종탕', '중식', 280, 525, 28.5, 52.6, 22.5, 28.5, 1285, 2.8, 95),
('Lo Mein', '로메인', '중식', 300, 425, 14.5, 58.6, 14.2, 6.5, 1120, 3.5, 52);

-- 디저트/음료
INSERT OR IGNORE INTO foods (name, name_ko, category, serving_size, calories, protein, carbs, fat, sugar, sodium, fiber, cholesterol) VALUES
('Chocolate Cake', '초콜릿 케이크', '디저트', 120, 425, 5.5, 52.5, 20.5, 42.5, 285, 2.5, 82),
('Ice Cream', '아이스크림', '디저트', 150, 285, 4.5, 32.5, 14.5, 28.5, 85, 1.2, 52),
('Apple Pie', '애플파이', '디저트', 150, 385, 3.5, 58.6, 15.2, 32.5, 325, 2.8, 15),
('Donut', '도넛', '디저트', 75, 285, 3.8, 32.5, 15.2, 18.5, 285, 1.2, 28),
('Coca Cola', '코카콜라', '음료', 355, 140, 0, 39.0, 0, 39.0, 45, 0, 0),
('Orange Juice', '오렌지 주스', '음료', 250, 112, 1.7, 25.8, 0.5, 20.8, 2, 0.5, 0),
('Coffee', '커피', '음료', 240, 2, 0.3, 0, 0, 0, 5, 0, 0),
('Milk', '우유', '음료', 250, 149, 7.7, 11.7, 7.9, 12.3, 105, 0, 24);

-- 테스트 사용자 추가
INSERT OR IGNORE INTO users (email, name, age, gender, height, weight, activity_level, goal, membership_type, free_trial_count) VALUES
('test@example.com', '테스트 사용자', 30, 'male', 175, 70, 'moderate', 'maintain', 'free', 0),
('premium@example.com', '프리미엄 사용자', 28, 'female', 165, 58, 'active', 'lose_weight', 'premium', 0);
