import React, { useState } from 'react';
import backgroundImg from '../images/background.jpg';
const MonitoringDiet = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [mealPlan, setMealPlan] = useState('');
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure the page takes at least the full viewport height
    padding: '20px',
    backgroundImage: `url(${backgroundImg})`, // Set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  const handleDiseaseChange = (e) => {
    setSelectedDisease(e.target.value);
  };

  const handleViewPlan = () => {
    switch (selectedDisease) {
      case 'heart':
        setMealPlan(
          `Breakfast: Whole grain cereal with skim milk, topped with berries.
          Mid-Morning Snack: A piece of fruit (e.g., apple, pear, or orange).
          Lunch: Grilled chicken salad with mixed greens, vegetables, and a vinaigrette dressing.
          Afternoon Snack: Greek yogurt with a handful of almonds.
          Dinner: Baked salmon with quinoa and steamed vegetables.
          Evening Snack (if desired): Air-popped popcorn or a small serving of mixed nuts.`
        );
        break;
      case 'diabetes':
        setMealPlan(
          `Breakfast: Scrambled eggs with spinach and tomatoes, whole grain toast.
          Mid-Morning Snack: Greek yogurt with a handful of almonds.
          Lunch: Grilled chicken salad with mixed greens, cucumbers, bell peppers, and vinaigrette dressing.
          Afternoon Snack: Carrot sticks with hummus.
          Dinner: Baked salmon with roasted Brussels sprouts and quinoa.
          Evening Snack (if desired): Sugar-free Greek yogurt with berries.`
        );
        break;
      case 'bone-muscle':
        setMealPlan(
          `Breakfast: Greek yogurt topped with fresh berries and chopped almonds, whole grain toast with avocado.
          Mid-Morning Snack: Apple slices with almond butter.
          Lunch: Grilled chicken salad with mixed greens, chickpeas, cucumber, tomato, and olive oil vinaigrette.
          Afternoon Snack: Carrot sticks with hummus.
          Dinner: Baked salmon with steamed broccoli and quinoa pilaf.
          Evening Snack: Cottage cheese with pineapple chunks.`
        );
        break;
      default:
        setMealPlan('');
        break;
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Monitoring Diet</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="disease">Select Your Disease:</label>
        <select id="disease" value={selectedDisease} onChange={handleDiseaseChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <option value="">Select Disease</option>
          <option value="heart">Heart Problem</option> 
          <option value="diabetes">Diabetes</option> 
          <option value="bone-muscle">Bone and Muscle Problem</option>
        </select>
      </div>
      <button onClick={handleViewPlan} style={{ padding: '8px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>View Meal Plan</button>
      {mealPlan && (
        <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Recommended Meal Plan:</h3>
          <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#333' }}>{mealPlan}</p>
        </div>
      )}
    </div>
  );
};


export default MonitoringDiet;
