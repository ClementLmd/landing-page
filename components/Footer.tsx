export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} JP Insurance | Tous droits réservés
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-xs text-slate-500">
            Cabinet de courtage en assurance | ORIAS n° 24000001
          </p>
        </div>
      </div>
    </footer>
  );
}
