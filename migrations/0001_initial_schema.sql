-- Users table (회원 정보)
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  age INTEGER,
  gender TEXT CHECK(gender IN ('male', 'female', 'other')),
  height REAL, -- cm
  weight REAL, -- kg
  activity_level TEXT CHECK(activity_level IN ('sedentary', 'light', 'moderate', 'active', 'very_active')),
  goal TEXT CHECK(goal IN ('lose_weight', 'maintain', 'gain_muscle')),
  membership_type TEXT CHECK(membership_type IN ('free', 'premium')) DEFAULT 'free',
  free_trial_count INTEGER DEFAULT 0,
  subscription_expires_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Food database (음식 DB - USDA/FDA 기반)
CREATE TABLE IF NOT EXISTS foods (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  name_ko TEXT, -- 한국어 이름
  category TEXT, -- 음식 카테고리 (한식, 양식, 중식 등)
  serving_size REAL NOT NULL, -- g
  calories REAL NOT NULL,
  protein REAL NOT NULL, -- g
  carbs REAL NOT NULL, -- g
  fat REAL NOT NULL, -- g
  sugar REAL, -- g
  sodium REAL, -- mg
  fiber REAL, -- g
  cholesterol REAL, -- mg
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Food intake records (섭취 기록)
CREATE TABLE IF NOT EXISTS food_intakes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  food_id INTEGER,
  food_name TEXT NOT NULL, -- AI 인식된 음식명
  image_url TEXT, -- 업로드된 이미지 URL
  serving_size REAL NOT NULL,
  calories REAL NOT NULL,
  protein REAL NOT NULL,
  carbs REAL NOT NULL,
  fat REAL NOT NULL,
  sugar REAL,
  sodium REAL,
  meal_type TEXT CHECK(meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  intake_date DATE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (food_id) REFERENCES foods(id)
);

-- Health risk predictions (질병 위험도 예측)
CREATE TABLE IF NOT EXISTS health_risks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  intake_id INTEGER NOT NULL,
  obesity_risk REAL, -- 비만 위험도 (0-100)
  diabetes_risk REAL, -- 당뇨 위험도 (0-100)
  hypertension_risk REAL, -- 고혈압 위험도 (0-100)
  hyperlipidemia_risk REAL, -- 고지혈증 위험도 (0-100)
  prediction_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (intake_id) REFERENCES food_intakes(id)
);

-- Daily nutrition summary (일일 영양 요약)
CREATE TABLE IF NOT EXISTS daily_summaries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  summary_date DATE NOT NULL,
  total_calories REAL DEFAULT 0,
  total_protein REAL DEFAULT 0,
  total_carbs REAL DEFAULT 0,
  total_fat REAL DEFAULT 0,
  total_sugar REAL DEFAULT 0,
  total_sodium REAL DEFAULT 0,
  recommended_calories REAL, -- FDA 권장 칼로리
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(user_id, summary_date)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_food_intakes_user_id ON food_intakes(user_id);
CREATE INDEX IF NOT EXISTS idx_food_intakes_date ON food_intakes(intake_date);
CREATE INDEX IF NOT EXISTS idx_health_risks_user_id ON health_risks(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_summaries_user_date ON daily_summaries(user_id, summary_date);
CREATE INDEX IF NOT EXISTS idx_foods_name ON foods(name);
CREATE INDEX IF NOT EXISTS idx_foods_category ON foods(category);
