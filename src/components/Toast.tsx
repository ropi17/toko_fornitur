import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useApp();

  if (!toast.show) return null;

  const iconMap = {
    success: <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />,
    info: <Info className="w-5 h-5 text-amber-600 shrink-0" />,
    error: <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 animate-bounce" />,
  };

  const bgMap = {
    success: 'border-emerald-100 bg-emerald-50/90 text-emerald-900',
    info: 'border-amber-100 bg-amber-50/90 text-amber-900',
    error: 'border-rose-100 bg-rose-50/90 text-rose-900',
  };

  return (
    <div className="fixed bottom-6 right-6 z-55 max-w-sm w-full animate-slide-in">
      <div className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md shadow-xl ${bgMap[toast.type]} transition-all duration-300`}>
        {iconMap[toast.type]}
        <div className="flex-1 text-sm font-medium leading-5">
          {toast.message}
        </div>
        <button 
          onClick={hideToast}
          className="text-stone-400 hover:text-stone-600 transition-colors shrink-0 p-0.5 rounded-lg hover:bg-black/5"
          aria-label="Tutup notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
