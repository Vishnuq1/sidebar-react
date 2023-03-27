import React from 'react'
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Home() {
    return (
      
        <>
            <div className ="mainsidebar">
                <Sidebar /></div>
          
              <Header />
            
                <Footer />
               
        </>
  )
}

export default Home;