import React from 'react';

const EntityStep = ({ data, updateData }) => {
  const entities = [
    { type: 'LLC', desc: 'Limited Liability Company' },
    { type: 'Corporation', desc: 'C-Corp or S-Corp structure' },
    { type: 'Sole Proprietorship', desc: 'Simplest for solo owners' },
    { type: 'Partnership', desc: 'Multiple owner structure' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-emerald-glow">Choose Your Business Entity</h2>
      <div className="grid grid-cols-1 gap-4">
        {entities.map(entity => (
          <div
            key={entity.type}
            onClick={() => updateData({ type: entity.type })}
            className={`glass rounded-xl p-5 cursor-pointer transition-all ${
              data.type === entity.type
                ? 'glow-emerald border-2 border-emerald-500'
                : 'border border-emerald-500/20 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-emerald-glow text-lg">{entity.type}</h3>
                <p className="text-gray-400 text-sm">{entity.desc}</p>
              </div>
              {data.type === entity.type && (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntityStep;
