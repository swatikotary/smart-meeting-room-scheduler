# 📅 Smart Meeting Room Scheduler

A web-based application that demonstrates the **Activity Selection Problem** using a **Greedy Algorithm** to schedule the maximum number of non-overlapping meetings in a single room.

---

## 🚀 Live Demo
🔗 https://swatikotary.github.io/smart-meeting-room-scheduler/

---

## 🎯 Problem Statement

In real-world environments like offices, hospitals, and institutions, scheduling meetings efficiently without conflicts is a common challenge.

This project solves the problem by selecting the **maximum number of compatible (non-overlapping) meetings** using an optimal greedy approach.

---

## 🧠 Algorithm Used

### Activity Selection Algorithm (Greedy)

### Steps:
1. Sort all meetings by their **finish time**
2. Select the first meeting
3. For each next meeting:
   - If start time ≥ last selected meeting’s end time → **Select**
   - Else → **Reject**
4. Repeat until all meetings are processed

---

## ⏱ Complexity Analysis

- **Time Complexity:** `O(n log n)` (due to sorting)
- **Space Complexity:** `O(n)`

---

## ✨ Features

- 📌 Add meetings with start and end time (AM/PM format)
- 🧮 Greedy scheduling algorithm implementation
- ✅ Displays **Selected Meetings**
- ❌ Displays **Rejected Meetings**
- 📊 Interactive **Gantt Chart Visualization**
- 🧠 Step-by-step algorithm execution display
- 🌙 Dark mode modern UI
- 🌐 Deployed using GitHub Pages

---

## 📊 Visualization

The application includes a **Gantt Chart representation**:
- 🟢 Green → Selected meetings (non-overlapping)
- 🔴 Red → Rejected meetings (conflicting)

This helps in clearly understanding how the algorithm works visually.

---

## 🌍 Real-World Applications

- Meeting room booking systems
- CPU process scheduling
- Event management systems
- Classroom or exam scheduling

---

## 🛠 Technologies Used

- HTML
- CSS (Dark Mode UI)
- JavaScript (Logic + Algorithm)

---

## 📁 Project Structure
smart-meeting-room-scheduler/
│── index.html
│── style.css
│── script.js
│── README.md


---

## 👩‍💻 Developed By

**Swati Kotary**

---

## 💡 Key Highlight

This project not only implements the greedy algorithm but also provides:
- Visual understanding through Gantt chart
- Step-by-step execution tracking
- Real-world applicability

---

## 📌 Conclusion

The Activity Selection Algorithm ensures an **optimal solution** by always making the locally best choice (earliest finishing meeting), which leads to a globally optimal result.
