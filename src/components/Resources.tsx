import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Check, FileText, Image as ImageIcon, Download, Box } from 'lucide-react';

const mockFiles = [
  { id: 1, type: 'foto', name: 'PresKit_Main.jpg' },
  { id: 2, type: 'foto', name: 'Retrato_Oficial.jpg' },
  { id: 3, type: 'foto', name: 'Live_BWB_1.jpg' },
  { id: 4, type: 'foto', name: 'Live_BWB_2.jpg' },
  { id: 5, type: 'foto', name: 'Logo_Pack.zip' },
  { id: 6, type: 'foto', name: 'Visual_Assets.jpg' },
  { id: 7, type: 'pdf', name: 'Technical_Rider_2025.pdf' },
  { id: 8, type: 'pdf', name: 'Hospitality_Rider.pdf' },
  { id: 9, type: 'pdf', name: 'Thomas_Cossio_Bio.pdf' },
];

export default function Resources() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'todos' | 'fotos' | 'pdfs'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = mockFiles.filter(item => {
    const matchesTab = 
      activeTab === 'todos' || 
      (activeTab === 'fotos' && item.type === 'foto') || 
      (activeTab === 'pdfs' && item.type === 'pdf');
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleSelection = (id: number) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const selectAll = () => {
    if (selectedItems.length === filteredFiles.length && filteredFiles.length > 0) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredFiles.map(f => f.id));
    }
  };

  return (
    <section id="resources" className="py-24 md:py-32 relative bg-primary flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <h2 className="text-[150px] md:text-[300px] font-anton whitespace-nowrap text-black">PRESS KIT</h2>
      </div>

      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-white mb-6 drop-shadow-lg">
          Recursos y Press
        </h2>
        <p className="text-white/80 font-mono uppercase tracking-widest text-sm mb-12 max-w-lg mx-auto">
          Todo lo que los medios, promotores y agencias necesitan en un solo lugar.
        </p>

        <button 
          onClick={() => setModalOpen(true)}
          className="px-12 py-5 rounded-full bg-dark text-white uppercase text-sm tracking-[0.2em] font-bold hover:bg-white hover:text-dark transition-colors duration-300 shadow-2xl"
        >
          Acceder Materiales
        </button>
      </div>

      {/* Advanced File Selector Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] max-h-[800px] bg-[#0E0B16] rounded-2xl flex flex-col overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
                         <span className="font-anton text-white text-xl">TC</span>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold font-display text-white">Kit de Recursos</h3>
                         <p className="text-xs text-white/50 font-mono">Thomas Cossio • Material Oficial</p>
                      </div>
                   </div>
                   <button 
                     onClick={() => setModalOpen(false)}
                     className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                   >
                     <X size={20} />
                   </button>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row gap-4 p-6 border-b border-white/5 items-center bg-[#13101C]">
                   {/* Search */}
                   <div className="relative w-full md:w-64">
                      <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                      <input 
                         type="text"
                         placeholder="Buscar archivo..."
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full bg-[#1A1625] border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      />
                   </div>

                   {/* Tabs */}
                   <div className="flex items-center gap-2 p-1 bg-[#1A1625] rounded-full w-full md:w-auto overflow-x-auto hide-scrollbar">
                      <button 
                         onClick={() => setActiveTab('todos')}
                         className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'todos' ? 'bg-primary text-white' : 'text-white/50 hover:text-white'}`}
                      >
                         Todos <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">{mockFiles.length}</span>
                      </button>
                      <button 
                         onClick={() => setActiveTab('fotos')}
                         className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'fotos' ? 'bg-primary text-white' : 'text-white/50 hover:text-white'}`}
                      >
                         Fotos <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">{mockFiles.filter(f=>f.type==='foto').length}</span>
                      </button>
                      <button 
                         onClick={() => setActiveTab('pdfs')}
                         className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'pdfs' ? 'bg-primary text-white' : 'text-white/50 hover:text-white'}`}
                      >
                         PDFs <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">{mockFiles.filter(f=>f.type==='pdf').length}</span>
                      </button>
                   </div>

                   <div className="flex-1"></div>

                   {/* Select All */}
                   <button 
                     onClick={selectAll}
                     className="px-4 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-white/70 flex items-center gap-2 hover:bg-white/5 transition-colors w-full md:w-auto justify-center"
                   >
                     {selectedItems.length === filteredFiles.length && filteredFiles.length > 0 ? (
                        <><X size={14} /> Deseleccionar todo</>
                     ) : (
                        <><Check size={14} /> Seleccionar todo</>
                     )}
                   </button>
                </div>

                {/* Grid */}
                <div className="flex-1 overflow-y-auto p-6 bg-[#0E0B16]">
                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {filteredFiles.map((file) => {
                         const isSelected = selectedItems.includes(file.id);
                         return (
                            <div 
                               key={file.id}
                               onClick={() => toggleSelection(file.id)}
                               className={`group relative aspect-video rounded-xl cursor-pointer overflow-hidden border-2 transition-all duration-300 flex items-center justify-center ${isSelected ? 'border-primary shadow-[0_0_20px_rgba(255,59,0,0.3)]' : 'border-transparent hover:border-white/20'}`}
                            >
                               {/* Background */}
                               <div className={`absolute inset-0 transition-colors ${file.type === 'foto' ? 'bg-gradient-to-br from-primary/30 to-dark/40' : 'bg-[#1A1625]'}`}></div>
                               
                               {/* Icon */}
                               {file.type === 'foto' ? (
                                 <ImageIcon size={32} className="text-primary opacity-50 relative z-10" />
                               ) : (
                                 <FileText size={32} className="text-orange-400 opacity-50 relative z-10" />
                               )}

                               {/* Selected Status */}
                               {isSelected && (
                                  <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-20 shadow-lg">
                                     <Check size={14} className="text-white" />
                                  </div>
                               )}

                               {/* Name Label */}
                               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-6 z-10">
                                  <p className="text-[10px] md:text-xs text-white/80 font-mono truncate">{file.name}</p>
                               </div>
                            </div>
                         );
                      })}
                   </div>
                   {filteredFiles.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center text-white/30">
                         <Box size={48} className="mb-4 opacity-50" />
                         <p>No se encontraron archivos.</p>
                      </div>
                   )}
                </div>

                {/* Footer Action Bar */}
                <div className="w-full bg-[#13101C] border-t border-white/5 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                   <div className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                         <Check size={10} />
                      </div>
                      <span className="font-mono">{selectedItems.length} archivos seleccionados</span>
                   </div>
                   
                   <div className="flex items-center gap-4 w-full md:w-auto">
                      <button 
                        disabled={selectedItems.length === 0}
                        className="px-6 py-3 rounded-full text-white/70 text-sm font-semibold hover:bg-white/5 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full md:w-auto flex justify-center items-center gap-2"
                      >
                         <Download size={16} /> Descargar
                      </button>
                      <button 
                        disabled={selectedItems.length === 0}
                        className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-primary/30 w-full md:w-auto flex justify-center items-center gap-2"
                      >
                         <Download size={16} /> Descargar {selectedItems.length > 0 ? `${selectedItems.length} archivos ` : ''}(.ZIP)
                      </button>
                   </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
