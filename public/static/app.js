// Global state
// let currentUser = null; // HTML 인라인 스크립트에서 선언됨
let currentAnalysis = null;
let nutritionChart = null;

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // 테스트 사용자로 자동 로그인
    await loadUser('test@example.com');
    await loadDailyStats();
});

// Load user data
async function loadUser(email) {
    try {
        const response = await axios.get(`/api/user/${email}`);
        if (response.data.success && response.data.user) {
            currentUser = response.data.user;
            updateUserUI();
        } else {
            // 사용자가 없으면 생성
            await createUser(email);
        }
    } catch (error) {
        console.error('Error loading user:', error);
    }
}

// Create new user
async function createUser(email) {
    try {
        const response = await axios.post('/api/user', {
            email: email,
            name: '테스트 사용자',
            age: 30,
            gender: 'male',
            height: 175,
            weight: 70,
            activity_level: 'moderate',
            goal: 'maintain'
        });
        
        if (response.data.success) {
            await loadUser(email);
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// Update user UI
function updateUserUI() {
    if (!currentUser) return;
    
    const membershipType = document.getElementById('membershipType');
    const trialCount = document.getElementById('trialCount');
    const remainingTrials = document.getElementById('remainingTrials');
    const membershipBadge = document.getElementById('membershipBadge');
    
    if (currentUser.membership_type === 'premium') {
        membershipType.textContent = t('membershipPremium');
        membershipBadge.classList.add('bg-gradient-to-r', 'from-yellow-400', 'to-orange-500', 'text-white');
        membershipBadge.classList.remove('bg-white');
        trialCount.classList.add('hidden');
    } else {
        membershipType.textContent = t('membershipFree');
        const remaining = Math.max(0, 2 - currentUser.free_trial_count);
        remainingTrials.textContent = remaining;
        
        if (remaining === 0) {
            trialCount.classList.add('text-red-500', 'font-bold');
        }
    }
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const preview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        
        previewImg.src = e.target.result;
        preview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

// Analyze food (Mock AI - 실제 환경에서는 Vision API 사용)
async function analyzeFood() {
    if (!currentUser) {
        alert(t('loading'));
        return;
    }
    
    // Check free trial limit
    if (currentUser.membership_type === 'free' && currentUser.free_trial_count >= 2) {
        showPremiumModal();
        return;
    }
    
    // Mock AI analysis - 실제로는 이미지를 Vision API로 전송
    const mockFoods = [
        { name: '비빔밥', calories: 560, protein: 18.5, carbs: 78.2, fat: 15.3, sugar: 8.5, sodium: 850 },
        { name: '치킨버거', calories: 542, protein: 28.5, carbs: 38.2, fat: 28.6, sugar: 7.5, sodium: 1248 },
        { name: '스파게티', calories: 568, protein: 22.5, carbs: 58.6, fat: 24.8, sugar: 3.5, sodium: 825 },
        { name: '김치찌개', calories: 168, protein: 14.2, carbs: 12.5, fat: 6.8, sugar: 4.2, sodium: 1580 },
        { name: '피자', calories: 398, protein: 16.8, carbs: 42.5, fat: 16.5, sugar: 4.2, sodium: 985 }
    ];
    
    const randomFood = mockFoods[Math.floor(Math.random() * mockFoods.length)];
    
    showAnalysisResults(randomFood);
}

// Show analysis results
function showAnalysisResults(food) {
    currentAnalysis = food;
    
    document.getElementById('resultsPlaceholder').classList.add('hidden');
    document.getElementById('analysisResults').classList.remove('hidden');
    
    document.getElementById('foodName').textContent = food.name;
    document.getElementById('calories').textContent = Math.round(food.calories);
    document.getElementById('protein').textContent = food.protein.toFixed(1);
    document.getElementById('carbs').textContent = food.carbs.toFixed(1);
    document.getElementById('fat').textContent = food.fat.toFixed(1);
    
    // Calculate health risks
    const bmi = currentUser ? currentUser.weight / ((currentUser.height / 100) ** 2) : 22;
    const obesityRisk = Math.min(100, Math.max(0, (bmi - 18.5) * 10 + (food.calories > 700 ? 20 : 0)));
    const diabetesRisk = Math.min(100, Math.max(0, (food.sugar || 0) * 2 + (food.carbs > 50 ? 15 : 0)));
    const hypertensionRisk = Math.min(100, Math.max(0, (food.sodium || 0) / 20 + (food.fat > 20 ? 15 : 0)));
    const hyperlipidemiaRisk = Math.min(100, Math.max(0, food.fat * 2.5));
    
    updateRiskBadge('obesityRisk', obesityRisk, '비만');
    updateRiskBadge('diabetesRisk', diabetesRisk, '당뇨');
    updateRiskBadge('hypertensionRisk', hypertensionRisk, '고혈압');
    updateRiskBadge('hyperlipidemiaRisk', hyperlipidemiaRisk, '고지혈증');
}

// Update risk badge
function updateRiskBadge(elementId, risk, name) {
    const element = document.getElementById(elementId);
    const riskValue = Math.round(risk);
    
    element.className = 'risk-badge';
    
    if (risk < 30) {
        element.classList.add('risk-low');
        element.textContent = `${t('riskLow')} (${riskValue}%)`;
    } else if (risk < 60) {
        element.classList.add('risk-medium');
        element.textContent = `${t('riskMedium')} (${riskValue}%)`;
    } else {
        element.classList.add('risk-high');
        element.textContent = `${t('riskHigh')} (${riskValue}%)`;
    }
}

// Record intake
async function recordIntake() {
    if (!currentUser || !currentAnalysis) return;
    
    try {
        const today = new Date().toISOString().split('T')[0];
        const hour = new Date().getHours();
        let meal_type = 'snack';
        
        if (hour >= 6 && hour < 11) meal_type = 'breakfast';
        else if (hour >= 11 && hour < 17) meal_type = 'lunch';
        else if (hour >= 17 && hour < 22) meal_type = 'dinner';
        
        const response = await axios.post('/api/intake', {
            user_id: currentUser.id,
            food_name: currentAnalysis.name,
            serving_size: 1,
            calories: currentAnalysis.calories,
            protein: currentAnalysis.protein,
            carbs: currentAnalysis.carbs,
            fat: currentAnalysis.fat,
            sugar: currentAnalysis.sugar,
            sodium: currentAnalysis.sodium,
            meal_type: meal_type
        });
        
        if (response.data.success) {
            alert(t('intakeSaved'));
            
            // Update user trial count
            if (response.data.remaining_trials !== null) {
                currentUser.free_trial_count = 2 - response.data.remaining_trials;
                updateUserUI();
            }
            
            // Reload daily stats
            await loadDailyStats();
            
            // Reset analysis
            document.getElementById('analysisResults').classList.add('hidden');
            document.getElementById('resultsPlaceholder').classList.remove('hidden');
            document.getElementById('imagePreview').classList.add('hidden');
            document.getElementById('imageInput').value = '';
        } else if (response.data.error === 'free_trial_exceeded') {
            showPremiumModal();
        }
    } catch (error) {
        console.error('Error recording intake:', error);
        alert(t('error'));
    }
}

// Load daily stats
async function loadDailyStats() {
    if (!currentUser) return;
    
    try {
        const today = new Date().toISOString().split('T')[0];
        const response = await axios.get(`/api/stats/${currentUser.id}/${today}`);
        
        if (response.data.success && response.data.summary) {
            const summary = response.data.summary;
            
            document.getElementById('dailyStatsPlaceholder').classList.add('hidden');
            document.getElementById('dailyStats').classList.remove('hidden');
            
            document.getElementById('totalCalories').textContent = Math.round(summary.total_calories);
            document.getElementById('totalProtein').textContent = Math.round(summary.total_protein);
            document.getElementById('totalCarbs').textContent = Math.round(summary.total_carbs);
            document.getElementById('totalFat').textContent = Math.round(summary.total_fat);
            
            // Calculate recommended calories (Harris-Benedict)
            const recommendedCalories = calculateRecommendedCalories();
            document.getElementById('recommendedCalories').textContent = recommendedCalories;
            
            // Update chart
            updateNutritionChart(summary, recommendedCalories);
        }
    } catch (error) {
        console.error('Error loading daily stats:', error);
    }
}

// Calculate recommended calories
function calculateRecommendedCalories() {
    if (!currentUser) return 2000;
    
    const { gender, age, weight, height, activity_level } = currentUser;
    
    // Harris-Benedict Equation
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    // Activity multiplier
    const multipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725,
        'very_active': 1.9
    };
    
    const multiplier = multipliers[activity_level] || 1.55;
    return Math.round(bmr * multiplier);
}

// Update nutrition chart
function updateNutritionChart(summary, recommendedCalories) {
    const ctx = document.getElementById('nutritionChart');
    
    if (nutritionChart) {
        nutritionChart.destroy();
    }
    
    nutritionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [t('protein'), t('carbs'), t('fat')],
            datasets: [{
                data: [
                    summary.total_protein * 4,  // 단백질 칼로리
                    summary.total_carbs * 4,    // 탄수화물 칼로리
                    summary.total_fat * 9       // 지방 칼로리
                ],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',  // blue
                    'rgba(34, 197, 94, 0.8)',   // green
                    'rgba(251, 191, 36, 0.8)'   // yellow
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = Math.round(context.parsed);
                            return `${label}: ${value} ${t('kcal')}`;
                        }
                    }
                }
            }
        }
    });
}

// Search food
let searchTimeout;
async function searchFood(query) {
    if (!query || query.length < 2) {
        document.getElementById('searchResults').innerHTML = '';
        return;
    }
    
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        try {
            const response = await axios.get(`/api/foods/search?q=${encodeURIComponent(query)}`);
            
            if (response.data.success && response.data.foods) {
                displaySearchResults(response.data.foods);
            }
        } catch (error) {
            console.error('Error searching food:', error);
        }
    }, 300);
}

// Display search results
function displaySearchResults(foods) {
    const container = document.getElementById('searchResults');
    
    if (foods.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-sm p-3">${t('noResults')}</p>`;
        return;
    }
    
    container.innerHTML = foods.map(food => `
        <div class="search-result-item hover:bg-gray-50 active:bg-gray-100 rounded-lg cursor-pointer border-b last:border-b-0" onclick='selectFood(${JSON.stringify(food)})'>
            <div class="font-semibold text-sm sm:text-base mb-1">${food.name_ko || food.name}</div>
            <div class="text-xs sm:text-sm text-gray-600 flex flex-wrap gap-2">
                <span class="whitespace-nowrap">${Math.round(food.calories)} ${t('kcal')}</span>
                <span class="text-gray-400">|</span>
                <span class="whitespace-nowrap">${t('protein')} ${food.protein}${t('grams')}</span>
                <span class="text-gray-400">|</span>
                <span class="whitespace-nowrap">${t('carbs')} ${food.carbs}${t('grams')}</span>
                <span class="text-gray-400">|</span>
                <span class="whitespace-nowrap">${t('fat')} ${food.fat}${t('grams')}</span>
            </div>
        </div>
    `).join('');
}

// Select food from search
function selectFood(food) {
    showAnalysisResults(food);
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('foodSearch').value = '';
}

// Show premium modal
function showPremiumModal() {
    document.getElementById('premiumModal').classList.remove('hidden');
}

// Close premium modal
function closePremiumModal() {
    document.getElementById('premiumModal').classList.add('hidden');
}

// Upgrade to premium
async function upgradeToPremium() {
    if (!currentUser) return;
    
    try {
        const response = await axios.post('/api/upgrade', {
            user_id: currentUser.id
        });
        
        if (response.data.success) {
            alert(t('upgradeSuccess'));
            currentUser.membership_type = 'premium';
            updateUserUI();
            closePremiumModal();
        }
    } catch (error) {
        console.error('Error upgrading:', error);
        alert(t('error'));
    }
}
