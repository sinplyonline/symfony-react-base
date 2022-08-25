import React from 'react';
   
const Layout =({children}) =>{
    return(
        <div className='bg-slate-100 justify-center items-center h-screen'>
        <header className="w-full container mx-auto">
            <div className="flex flex-col items-center py-12">
                <a className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
                  Project
                </a>
                <p className="text-lg text-gray-600">
                    Lorem Ipsum Dolor Sit Amet
                </p>
            </div>
        </header>
        <div className="container mx-auto flex flex-wrap text-gray-800 py-6">
            {children}
        </div>
        </div>
    )
}
    
export default Layout;