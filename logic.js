let lastQuery = 'food';

function displayPriceRanges() {
    const allVegPrices = allItems.filter(item => item.type === 'veg').map(item => item.price);
    const allNonVegPrices = allItems.filter(item => item.type === 'non-veg').map(item => item.price);

    const minVeg = allVegPrices.length ? Math.min(...allVegPrices) : 0;
    const maxVeg = allVegPrices.length ? Math.max(...allVegPrices) : 0;
    const minNonVeg = allNonVegPrices.length ? Math.min(...allNonVegPrices) : 0;
    const maxNonVeg = allNonVegPrices.length ? Math.max(...allNonVegPrices) : 0;

    const infoBlock = document.createElement('div');
    infoBlock.id = 'priceRangeInfo';
    infoBlock.className = 'mt-4 pt-4 border-t border-gray-200 text-center text-sm font-medium space-y-2';
    infoBlock.innerHTML = `
        <p class="text-gray-600">
            Campus Canteen Price Guide (Approximate Range):
        </p>
        <p class="text-emerald-700 font-bold">
            Vegetarian: ₹${minVeg} - ₹${maxVeg} 🥗
        </p>
        <p class="text-red-700 font-bold">
            Non-Veg/Egg: ₹${minNonVeg} - ₹${maxNonVeg} 🍗
        </p>
    `;

    const button = document.querySelector('.main-button');
    if (button && !document.getElementById('priceRangeInfo')) {
        button.parentNode.insertBefore(infoBlock, document.getElementById('externalLinks'));
    }
}
// ------------------------------------------------------------------

function displayExternalSuggestions(query, minPrice, maxPrice, foodType) {
    const container = document.getElementById('onlineResults');
    const section = document.getElementById('onlineSuggestionsSection');
    container.innerHTML = '';
    
    let dishNames = [];
    const baseName = query || 'Food';
    
    if (baseName.toLowerCase().includes('biryani')) {
         dishNames = [
            { name: "Chicken Dum Biryani (Spicy)", price: 180, source: 'Swiggy' },
            { name: "Veg Pulao (Restaurant Special)", price: 150, source: 'Zomato' },
            { name: "Family Pack Biryani", price: 350, source: 'Swiggy' }
        ];
    } else if (baseName.toLowerCase().includes('dosa') || baseName.toLowerCase().includes('roll')) {
        dishNames = [
            { name: "Special Masala Dosa", price: 80, source: 'Zomato' },
            { name: "Chicken Kati Roll", price: 110, source: 'Swiggy' },
            { name: "Paneer Spring Roll", price: 90, source: 'Zomato' }
        ];
    } else {
 
         if (foodType === 'veg' || foodType === 'both') {
            dishNames.push({ name: `Paneer Dish + Rice`, price: 150 + Math.floor(Math.random() * 50), source: 'Swiggy' });
         }
         if (foodType === 'non-veg' || foodType === 'both') {
            dishNames.push({ name: `Chicken Curry Combo`, price: 200 + Math.floor(Math.random() * 50), source: 'Zomato' });
         }
         dishNames.push({ name: `${baseName} nearby (Check Price)`, price: 'Varies', source: 'Swiggy' });
    }
    
    const filteredNames = dishNames.filter(dish => {
        if (dish.price === 'Varies') return true;
        if (minPrice > 0 && dish.price < minPrice) return false;
        if (maxPrice < 9999 && dish.price > maxPrice) return false;
        return true;
    });

    if (filteredNames.length === 0) {
         section.classList.add('hidden');
         return;
    }

    filteredNames.forEach(dish => {
        const isSwiggy = dish.source === 'Swiggy';
        const priceDisplay = dish.price === 'Varies' ? 'Check App' : `~₹${dish.price}`;
        const linkFunction = isSwiggy ? 'openSwiggy' : 'openZomato';

        const div = document.createElement('div');
        div.className = `food-card external-card relative p-5 shadow-lg border-b-4 ${isSwiggy ? 'border-red-400' : 'border-pink-400'}`;
        div.setAttribute('onclick', `${linkFunction}()`);
        
        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="text-3xl">${isSwiggy ? '🔴' : '🟣'}</span>
                <span class="text-sm font-bold px-3 py-1 rounded-full ${isSwiggy ? 'bg-red-500 text-white' : 'bg-pink-500 text-white'}">${dish.source}</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800">${dish.name}</h3>
            <p class="text-xl font-extrabold ${isSwiggy ? 'text-red-600' : 'text-pink-600'} mt-1">${priceDisplay}</p>
            <p class="text-xs text-gray-500 mt-2">Tap to search for this item near IIITDM Kurnool.</p>
        `;
        container.appendChild(div);
    });

    section.classList.remove('hidden');
}

function isSubstantial(name) {
  const mealKeywords = ['rice', 'biryani', 'curry', 'dosa', 'pulao', 'noodles', 'parota', 'masala', 'bhatura', 'kofta', 'roast', 'roll', 'curd'];
  const nameLower = name.toLowerCase();
  const isMeal = mealKeywords.some(keyword => nameLower.includes(keyword));
  const isNotSnack = !['tea', 'coffee', 'samosa', 'puff', 'vada pav', 'fries', 'boiled egg', 'omelette'].some(snack => nameLower.includes(snack));
  return isMeal && isNotSnack;
}

function createFoodCard(it, isSpecial, specialTypeClass) {
    const icon = it.name.toLowerCase().includes('biryani') ? '🍚' 
               : (it.name.toLowerCase().includes('dosa') ? '🥞' 
               : (it.name.toLowerCase().includes('roll') ? '🌯' 
               : (it.type === 'veg' ? '🥦' : '🍖')));
    
    const typeColor = it.type === 'veg' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white';
    const typeLabel = it.type === 'veg' ? 'VEG' : 'NON-VEG';
    const phoneLink = canteenPhones[it.canteen] || 'tel:1234567890';
    
    let contentHtml = '';
    let cardClass = 'food-card bg-white border border-gray-200 relative';

    if (isSpecial) {
        cardClass = `special-card ${specialTypeClass} p-6 rounded-2xl shadow-2xl transition duration-300 transform hover:scale-[1.07] relative flex flex-col justify-between top-pick-placement`;
        contentHtml = `
          <div class="food-card-header pt-4">
              <span class="text-4xl">🏆</span>
              <span class="type-badge bg-yellow-300 text-indigo-900 shadow-lg" style="right: 60px;">${typeLabel}</span>
              <span class="text-xs font-extrabold tracking-wider px-3 py-1 rounded-full bg-yellow-300 text-indigo-900 shadow-lg animate-pulse">
                  ⭐️ TOP PICK (Best Value)
              </span>
          </div>
          <div class="food-card-body mt-2">
              <p class="text-lg font-medium opacity-80 mb-1">From: ${it.canteen}</p>
              <h3 class="text-2xl font-extrabold mt-1">${it.name}</h3>
              <p class="price text-4xl mt-3">₹${it.price}</p>
          </div>
          <a href="${phoneLink}" class="food-card-footer inline-block w-full bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 rounded-xl text-center transition duration-150 transform hover:scale-[1.01]">
              📞 CALL TO ORDER
          </a>
        `;
    } else {
        cardClass = 'food-card bg-white border border-gray-200 relative';
        contentHtml = `
            <span class="type-badge ${typeColor}">${typeLabel}</span>
            <div class="food-card-header">
              <span class="text-3xl">${icon}</span>
              <span class="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">${it.canteen}</span>
            </div>
            <div class="food-card-body">
                <h3 class="text-lg font-bold text-gray-800 mt-2">${it.name}</h3>
                <p class="price-text">₹${it.price}</p>
            </div>
            <a href="${phoneLink}" class="food-card-footer inline-block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg text-center transition duration-150">
                📞 Order Now
            </a>
        `;
    }

    const div = document.createElement('div');
    div.className = cardClass;
    div.innerHTML = contentHtml;
    return div;
}

function suggestFood() {
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');
  const externalLinks = document.getElementById('externalLinks');
  const minVal = minPriceInput.value.trim();
  const maxVal = maxPriceInput.value.trim();
  const queryText = document.getElementById('foodQuery').value.toLowerCase().trim();
  const moodValue = document.querySelector('input[name="foodMood"]:checked').value.toLowerCase();
  const moodKeywords = {
      'quick': ['roll', 'vada', 'dosa', 'puff', 'samosa'],
      'spicy': ['chilli', 'masala', '65', 'fry', 'bhujia', 'pakoda'],
      'comfort': ['curd', 'curry', 'butter', 'parota', 'dal', 'khichdi', 'pulao'],
      'heavy': ['biryani', 'fried rice', 'pulao', 'special', 'double']
  };
  const foodType = document.querySelector('input[name="foodType"]:checked').value;
  const container = document.getElementById('results');
  container.innerHTML = '';
  lastQuery = queryText || 'food';
  externalLinks.classList.remove('hidden'); 
  
  let min = 0;
  let max = 9999; 
  let priceUsedInSearch = false;
  
  if (queryText === '') {
      if (minVal === '' && maxVal === '') {
          if (moodValue === 'quick') {
              min = 10; max = 60; 
          } else if (moodValue === 'comfort' || moodValue === 'heavy') {
              min = 50; max = 150; 
          } else if (moodValue === 'spicy') {
              min = 30; max = 100;
          } else { 
              min = 0; max = 9999;
          }
          priceUsedInSearch = true; 
      } else {
          const parsedMin = minVal === '' ? 0 : parseInt(minVal);
          const parsedMax = maxVal === '' ? 9999 : parseInt(maxVal);
          
          if (isNaN(parsedMin) || isNaN(parsedMax)) {
              container.innerHTML = `<div class="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-8"><p class="text-red-500 font-bold bg-red-100 p-4 rounded-lg">
                   ⚠️ Invalid Price input. Please enter only numbers.
               </p></div>`;
               document.getElementById('onlineSuggestionsSection').classList.add('hidden');
               return;
          }
          min = parsedMin;
          max = parsedMax;
          priceUsedInSearch = true;
      }

      if (min > max) {
        container.innerHTML = `
            <div class="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-8">
                <p class="text-red-500 font-bold bg-red-100 p-4 rounded-lg">
                    ⚠️ Max Price must be greater than or equal to Min Price.
                </p>
            </div>`;
            document.getElementById('onlineSuggestionsSection').classList.add('hidden');
        return;
      }
  } else {
      priceUsedInSearch = false;
  }
  
  if (minVal === '' && maxVal === '' && queryText === '' && moodValue === '') {
    container.innerHTML = `
        <div class="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-12">
            <p class="text-gray-500 text-lg">Hit <strong> GET SMART SUGGESTIONS </strong> above to find your campus eats!</p>
        </div>`;
    document.getElementById('onlineSuggestionsSection').classList.add('hidden');
    return;
  }
  
  let initialResults = allItems.filter(item => {
    const priceMatch = item.price >= min && item.price <= max;
    const itemLower = item.name.toLowerCase();
    const queryMatch = queryText === '' || itemLower.includes(queryText);
    const requiredMoodKeywords = moodKeywords[moodValue] || [];
    const moodMatch = moodValue === '' || requiredMoodKeywords.some(keyword => itemLower.includes(keyword));
    let typeMatch = true;
    if (foodType !== 'both') {
        typeMatch = item.type === foodType;
    }
    return priceMatch && queryMatch && moodMatch && typeMatch;
  }).sort((a, b) => a.price - b.price);
  
  let specialSuggestions = [];

  const getBestPick = (candidates) => {
      const substantial = candidates.filter(item => isSubstantial(item.name));
      let best = substantial.length > 0 ? substantial : candidates;

      if (best.length === 0) return null;

      if (moodValue !== '') {
          const requiredMoodKeywords = moodKeywords[moodValue] || [];
          const moodMatchCandidates = best.filter(item => 
              requiredMoodKeywords.some(keyword => item.name.toLowerCase().includes(keyword))
          );
          return moodMatchCandidates[0] || best[0];
      }
      return best[0];
  };

  if (foodType !== 'both') {
      const bestPick = getBestPick(initialResults);
      if (bestPick) specialSuggestions.push(bestPick);
  } else {
      const vegCandidates = initialResults.filter(item => item.type === 'veg');
      const nonVegCandidates = initialResults.filter(item => item.type === 'non-veg');
      
      const bestVeg = getBestPick(vegCandidates);
      const bestNonVeg = getBestPick(nonVegCandidates);

      if (bestVeg) specialSuggestions.push(bestVeg);
      if (bestNonVeg) specialSuggestions.push(bestNonVeg);
      
      specialSuggestions.sort((a, b) => a.price - b.price);
      
      if (specialSuggestions.length === 2 && specialSuggestions[0] === specialSuggestions[1]) {
          specialSuggestions = [specialSuggestions[0]];
      }
  }

  const topPickNames = specialSuggestions.map(s => s.name);
  
  if (initialResults.length === 0) {
    const moodStr = moodValue !== '' ? ` & Mood: ${moodValue.toUpperCase()}` : '';
    const queryStr = queryText !== '' ? ` for '${queryText}'` : '';
    let finalPriceMessage = '';
    if (queryText === '' && priceUsedInSearch) {
         finalPriceMessage = ` (₹${min}-${max})`; 
    } else if (queryText !== '') {
         finalPriceMessage = ` (Any Price)`;
    }
    container.innerHTML = `
        <div class="sm:col-span-2 lg:col-span-3 xl:col-span-4 text-center py-8">
            <p class="text-gray-600 text-lg bg-red-100 p-4 rounded-lg border border-red-300">
                😔 **NO LUCK!** No ${foodType !== 'both' ? foodType : ''} items matched your criteria${finalPriceMessage}${queryStr}${moodStr}.
            </p>
        </div>`;
    
  } else {
  
      specialSuggestions.forEach(it => {
          const specialTypeClass = it.type === 'veg' ? 'special-card-veg' : 'special-card-non-veg';
          const card = createFoodCard(it, true, specialTypeClass);
     
          if (foodType === 'both' && specialSuggestions.length > 1) {
               card.classList.add('dual-pick');
          }
          container.appendChild(card);
      });
      

      initialResults.forEach(it => {
         
          if (!topPickNames.includes(it.name)) {
              const card = createFoodCard(it, false, '');
              container.appendChild(card);
          }
      });
  }
  
  if (queryText !== '') {
    lastQuery = queryText;
  } else if (specialSuggestions.length > 0) {
    lastQuery = specialSuggestions[0].name;
  } else if (initialResults.length > 0) {
    lastQuery = initialResults[0].name;
  }

  let finalQueryForExternal = queryText || (specialSuggestions[0]?.name) || 'food';
  let finalMinPrice = priceUsedInSearch ? min : 0;
  let finalMaxPrice = priceUsedInSearch ? max : 9999;
  displayExternalSuggestions(finalQueryForExternal, finalMinPrice, finalMaxPrice, foodType);
}

function getCurrentMealKey() {
  const now = new Date();
  const hour = now.getHours();
  if (hour < 9) return 'breakfast';      
  if (hour < 14) return 'lunch';         
  if (hour < 18) return 'snacks';        
  if (hour < 21) return 'dinner';        
  return 'dinner'; 
}
function showMessMenu(viewType = 'current') {
  const day = document.getElementById('daySelect').value;
  const meals = messMenu[day];
  const container = document.getElementById('messResults');
  container.innerHTML = ''; 
  const currentMealKey = getCurrentMealKey();
  let mealsToDisplay = {};
  if (viewType === 'current') {
    mealsToDisplay[currentMealKey] = meals[currentMealKey];
  } else {
    mealsToDisplay = meals;
  }
  const currentMealButton = document.getElementById('currentMealButton');
  if (viewType === 'current') {
    currentMealButton.textContent = `Showing: ${currentMealKey.charAt(0).toUpperCase() + currentMealKey.slice(1)}`;
    currentMealButton.classList.add('bg-emerald-700');
    currentMealButton.classList.remove('bg-emerald-600');
  } else {
    currentMealButton.textContent = `View Current Meal`;
    currentMealButton.classList.add('bg-emerald-600');
    currentMealButton.classList.remove('bg-emerald-700');
  }
  const isCurrentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === day;
  for (let meal in mealsToDisplay) {
    const isActiveMeal = isCurrentDay && meal === currentMealKey;
    const mealDiv = document.createElement('div');
    mealDiv.className = `p-4 rounded-lg shadow-md 
                         ${isActiveMeal ? 'bg-emerald-100 border-2 border-emerald-600' : 'bg-white'}`;
    mealDiv.innerHTML = `<h3 class="text-lg font-bold text-emerald-800 capitalize mb-2">
                           ${meal} ${isActiveMeal ? '<span class="text-sm font-semibold text-red-500">(NOW)</span>' : ''}
                         </h3>`;
    const ul = document.createElement('ul');
    ul.className = 'list-disc list-inside space-y-1 text-sm text-gray-700';
    mealsToDisplay[meal].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    mealDiv.appendChild(ul);
    container.appendChild(mealDiv);
  }
  if (Object.keys(mealsToDisplay).length === 0) {
    container.innerHTML = `<p class="text-gray-500 col-span-4">No meal data available for ${day} at this time.</p>`;
  }
}
function populateDaySelect() {
  const select = document.getElementById('daySelect');
  const days = Object.keys(messMenu);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  days.forEach(day => {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    if (day === today) {
      option.selected = true;
    }
    select.appendChild(option);
  });
  showMessMenu('current');
}
function openSwiggy() {
  const finalQuery = lastQuery + ' near IIITDM Kurnool';
  window.open(`https://www.swiggy.com/search?q=${encodeURIComponent(finalQuery)}`, '_blank');
}
function openZomato() {
  const finalQuery = lastQuery + ' near IIITDM Kurnool';
  window.open(`https://www.zomato.com/search?query=${encodeURIComponent(finalQuery)}`, '_blank');
}
populateDaySelect();
// --- CALL THE NEW FUNCTION ON PAGE LOAD ---
displayPriceRanges();
