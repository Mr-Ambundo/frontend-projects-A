import React, { useState } from 'react';
import { Card } from '../../components/ui/Card.tsx';
import { Upload, Download, FileJson, FileText } from 'lucide-react';

const ImportExport: React.FC = () => {
  const [importedData, setImportedData] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImportedData(file.name);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-100">Import & Export</h1>
        <p className="text-slate-400 mt-2">Backup your data and import from external sources.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-400" />
            Import Data
          </h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center">
              <input type="file" accept=".json,.csv" onChange={handleFileUpload} className="hidden" id="file-input" />
              <label htmlFor="file-input" className="cursor-pointer">
                <FileJson className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-300 font-medium">Click to upload or drag file</p>
                <p className="text-sm text-slate-500 mt-1">Supported: JSON, CSV</p>
              </label>
            </div>
            {importedData && <p className="text-sm text-green-400">File selected: {importedData}</p>}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">Import Data</button>
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
            <Download className="w-5 h-5 text-green-400" />
            Export Data
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors">
              <FileJson className="w-5 h-5 text-purple-400" />
              <div className="text-left">
                <p className="text-sm font-medium text-slate-100">Export as JSON</p>
                <p className="text-xs text-slate-500">All data in JSON format</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors">
              <FileText className="w-5 h-5 text-blue-400" />
              <div className="text-left">
                <p className="text-sm font-medium text-slate-100">Export as CSV</p>
                <p className="text-xs text-slate-500">Spreadsheet format</p>
              </div>
            </button>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-slate-100 mb-4">Recent Backups</h2>
        <div className="space-y-2">
          {[
            { date: '2025-01-15', size: '245 KB', status: 'success' },
            { date: '2025-01-08', size: '242 KB', status: 'success' },
            { date: '2025-01-01', size: '238 KB', status: 'success' },
          ].map((backup) => (
            <div key={backup.date} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-100">{backup.date}</p>
                <p className="text-xs text-slate-400">{backup.size}</p>
              </div>
              <button className="text-sm px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">Download</button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ImportExport;
