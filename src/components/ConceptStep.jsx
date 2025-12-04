import React from 'react';

const ConceptStep = ({ state, updateBusinessData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold text-emerald-glow">
        Define your business concept
      </h2>
      <p className="text-xs sm:text-sm text-slate-300/85">
        Start with a clear name, the industry you operate in, and who you serve.
      </p>
      <div className="space-y-3">
        <div>
          <label className="block text-[0.7rem] font-medium text-emeraldMetalSoft mb-1.5">
            Business name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-2xl bg-black/40 border border-emeraldMetalSoft/30 text-sm"
            placeholder="Example: Emerald Lane Consulting"
            value={state.concept.name || ''}
            onChange={(e) => updateBusinessData('concept', { name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-[0.7rem] font-medium text-emeraldMetalSoft mb-1.5">
            Industry / sector
          </label>
          <select
            className="w-full px-3 py-2 rounded-2xl bg-black/40 border border-emeraldMetalSoft/30 text-sm"
            onChange={(e) => updateBusinessData('concept', { industry: e.target.value })}
          >
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="retail">Retail</option>
            <option value="services">Professional Services</option>
            <option value="food">Food & Beverage</option>
            <option value="healthcare">Healthcare</option>
            <option value="construction">Construction</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConceptStep;
