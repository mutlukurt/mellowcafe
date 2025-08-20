import React, { useState } from 'react';
import { menuItems } from '../mock';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [selectedDietary, setSelectedDietary] = useState([]);

  const tabs = [
    { id: 'breakfast', label: 'Breakfast', icon: '🌅' },
    { id: 'lunch', label: 'Lunch', icon: '☀️' },
    { id: 'drinks', label: 'Drinks', icon: '☕' },
    { id: 'desserts', label: 'Desserts', icon: '🍰' }
  ];

  const dietaryFilters = [
    { id: 'V', label: 'Vegetarian', color: 'var(--accent-sage)' },
    { id: 'GF', label: 'Gluten Free', color: 'var(--accent-espresso)' }
  ];

  const filteredItems = menuItems[activeTab]?.filter(item => {
    if (selectedDietary.length === 0) return true;
    return selectedDietary.every(filter => item.dietary.includes(filter));
  }) || [];

  const toggleDietaryFilter = (filterId) => {
    setSelectedDietary(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <section id="menu" className="py-20" style={{ background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif heading-1 mb-4">Our Menu</h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Thoughtfully crafted dishes using the finest local ingredients. 
            Every item is prepared with love and attention to detail.
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 hover-scale ${
                activeTab === tab.id 
                  ? 'text-white shadow-medium' 
                  : 'text-text-primary hover:bg-white'
              }`}
              style={{
                background: activeTab === tab.id ? 'var(--accent-espresso)' : 'rgba(255, 255, 255, 0.5)',
                border: '1px solid var(--border-light)'
              }}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dietary Filters */}
        <div className="flex justify-center gap-3 mb-12">
          {dietaryFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => toggleDietaryFilter(filter.id)}
              className={`btn-tag ${selectedDietary.includes(filter.id) ? 'active' : ''}`}
              style={{
                background: selectedDietary.includes(filter.id) ? filter.color : 'transparent',
                borderColor: filter.color,
                color: selectedDietary.includes(filter.id) ? 'white' : 'var(--text-primary)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-soft hover-lift"
              style={{ background: 'var(--bg-card)' }}
            >
              {/* Item Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Item Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif heading-3">{item.name}</h3>
                  <span 
                    className="font-semibold text-lg"
                    style={{ color: 'var(--accent-espresso)' }}
                  >
                    {item.price}
                  </span>
                </div>

                <p className="body-small text-text-secondary mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Dietary Badges */}
                {item.dietary.length > 0 && (
                  <div className="flex gap-2">
                    {item.dietary.map(diet => {
                      const dietaryInfo = dietaryFilters.find(f => f.id === diet);
                      return (
                        <span
                          key={diet}
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${dietaryInfo?.color}20`,
                            color: dietaryInfo?.color,
                            border: `1px solid ${dietaryInfo?.color}40`
                          }}
                        >
                          {diet}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View Full Menu PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;