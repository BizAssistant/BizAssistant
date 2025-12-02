import React from 'react';

function ConceptStep({ businessData, updateBusinessData, nextStep }) {
  const concept = businessData.concept || {};

  return (
    <div className="space-y-6 fade-in">
      <h2 className="text-2xl font-bold text-gray-800">Define Your Business Concept</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your business name"
            value={concept.name || ''}
            onChange={(e) => updateBusinessData('concept', { name: e.target.value })}
          />
        </div>
        {/* Add other fields here */}
      </div>
      <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Next
      </button>
    </div>
  );
}

export default ConceptStep;

