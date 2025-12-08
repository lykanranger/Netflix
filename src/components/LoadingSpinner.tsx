import netflixLogo from '../assets/netflix-logo.png';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center justify-center">
        <div className="w-20 h-20 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        <img 
          src={netflixLogo} 
          alt="Netflix" 
          className="mt-8 h-8 w-auto object-contain" 
        />
      </div>
    </div>
  );
}