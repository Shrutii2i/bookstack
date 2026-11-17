
//website title and navigation
function Header() {
return(
    <>
<header className="flex item-center justify-between px-10 py-6">

    <h1 className="text-2x1 font-bold text-[#E6C9CB]">
    <a href="#Hero">Bookstack</a> 
    </h1>
    <nav className="flex item-center gap-8 text-[#E6C9CB] py-0 hover:cursor-pointer ">
        <a className="" href="/">Home</a>
        <a href="#about">About</a>
        <a href="#my-stack">My Stack</a>
        
    </nav>

</header>


</>



); 
}

export default Header;