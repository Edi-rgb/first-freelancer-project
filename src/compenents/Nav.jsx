function Navbar() {
    return (
        <>

            <nav className="bg-transparent p-6 font-bold ">
                <div className="container mx-auto flex justify-between items-center px-64">
                    <a className="text-slate-200" href="/">SkillForgeHub</a>
    

                    <div className="flex space-x-4 text-slate-200">
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar; 
