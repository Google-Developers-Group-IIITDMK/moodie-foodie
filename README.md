***

# 🍽️ Moodie-Foodie: IIITDM Campus Food Recommendation Engine

**Moodie-Foodie** is an **intelligent, mobile-first Single-Page Application (SPA)** designed to optimize food selection for the IIITDM Kurnool community. It transforms the "what to eat?" dilemma into a swift, efficient decision by providing **data-driven, customized, and budget-aware meal suggestions** from campus canteens and the daily Mess schedule.

**Preview Link:**
* [Moodie-Foodie IIITDM Kurnool](https://moodie-foodie.netlify.app)
---

## 🧠 System Intelligence & Architecture

The core of the application is the `suggestFood()` function, which executes proprietary JavaScript logic for advanced filtering and prioritization:

1.  **Intelligent Price Inference:** Dynamically sets a contextually relevant **default budget** (e.g., ₹50-₹150 for "Heavy" mood) if price bounds are omitted, ensuring successful search results.

2.  **Best Value Algorithm:** Prioritizes **Substantial Meals** over snacks and selects the cheapest substantial option that correlates with the user's selected **Mood**.

3.  **Unbiased Dual Suggestion:** When **"Both (Veg/Non-Veg)"** is selected, the system calculates and prominently displays the best value **Vegetarian** pick and the best value **Non-Vegetarian** pick concurrently.

4.  **Specific Query Override:** If a dish name is entered, price bounds are automatically ignored, simplifying the search experience.

---

## 🛠️ Technology Stack & Deployment

Moodie-Foodie utilizes a robust, serverless architecture optimized for speed and mobile use:

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Architecture** | **Single-Page Application** | Zero server dependency; immediate loading. |
| **Styling** | **Tailwind CSS** | Fully adaptive mobile-first UI (responsive design). |
| **Logic Engine** | **Vanilla JavaScript** | Executes all data manipulation, filtering, and smart prioritization logic. |

---

### 🚀 Deployment & Setup

1.  Clone this repository.
2.  Launch the application by opening the `index.html` file in any modern web browser. *(No external dependencies or server configuration is required.)*

---

## 🧑‍💻 Development Team

This project was developed by:

* [Sujal Negi](https://www.instagram.com/sujal128005/)
* [Aryan Singh](https://www.instagram.com/aryan.space_/)
* [Ashu Kumar](https://www.instagram.com/analogous_ashu/)
