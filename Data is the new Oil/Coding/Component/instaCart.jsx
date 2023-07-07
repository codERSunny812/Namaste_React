import React, { useState } from 'react'

const Section =({title,descrip,setIsVisible,IsVisible})=>{
  return(
  <div className='border border-red-500 text-black-600 bg-indigo-200 capitalize p-3 m-2'>
    <h1 className='font-bold'>{title}</h1>
    {IsVisible && <p>{descrip}</p>}
    {
      IsVisible?<button className='border-black p-1 m-1 bg-black text-white rounded-md' onClick={()=>{
        setIsVisible(false);
      }}>Hide</button>:

      <button className='border-black p-1 m-1 bg-black text-white rounded-md' onClick={()=>{
        setIsVisible(true);
      }}>Show</button>
    }

    
  </div>
  );

 
}

const InstaCart = () => {
  const[IsVisible,setIsVisible]=useState();
  const[presentConfig,setPresentConfig]=useState({
    showAbout:false,
    showContact:false,
    showDetail:false,
  })
  return (
    <>
    <h1 className='text-fuchsia-800 border-lime-700 p-2 m-3 text-3xl'>InstaMart</h1>

    <Section 
    title={"aboutInstaMart section "} 
    descrip={"this is the description of about us section.If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. "}
    IsVisible={presentConfig.showAbout}
    setIsVisible={
      ()=>
        setPresentConfig({
          showAbout:true,
          showContact:false,
          showDetail:false,
        
      })
    }
    
    />

    <Section 
    title={"contactInstaMart section "} 
    descrip={"this is the description of contact us  section.If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. "}
    IsVisible={presentConfig.showContact}
    setIsVisible={
      ()=>
        setPresentConfig({
          showAbout:false,
          showContact:true,
          showDetail:false,
        
      })
    }
    />

    <Section 
    title={"DetailInstaMart section "} 
    descrip={"this is the description of DetailInstaMart.If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.  section "}  
    IsVisible={presentConfig.showDetail}
    setIs Visible={
      ()=>
        setPresentConfig({
          showAbout:false,
          showContact:false,
          showDetail:true,
        
      })
    }/>
   
    </>
  )
}

export default InstaCart;