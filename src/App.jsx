import { useState } from 'react'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BookSearch from './components/BookSearch.jsx';

function App() {
const [page, setPage] = useState("home");

  return (
    
     <div className= "min-h-screen flex flex-col bg-[#30283F]">
      <Header />
      <main  className="flex-1 flex items-center justify-center">
    
    {page === "home" && (
  <Hero onStart={() => setPage("search")}
  onSurprise={() => setPage("random")} />
)}

{page === "search" && (
  <BookSearch />
)}

  {page === "random" && (
  <div className="text-[#FFF0E6]">
    Surprise Me page coming soon!
  </div>
)}

     
      </main>
     </div>
   
  );
}

export default App;
