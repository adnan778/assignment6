
import  { useState } from 'react';
const Content = () => {
    const [text, setText] = useState('');

  const handleButtonClick = () => {
    alert(text);
  };

  return (
    <>
        <div className='mt-4 w-full flex'>
            <div className='flex mx-auto'>
               <textarea
               value={text}
               onChange={(e) => setText(e.target.value)}
               placeholder="Enter some text..."
               className='block p-2.5 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
               />
               <div className=''>

                    <button onClick={handleButtonClick} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-4'>Display Text</button>
               </div>
            </div>
     
            
        </div>
    
  

     <div className=' block max-w-lg h-36 p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700my-5 dark:text-black mx-auto '>

            {text && <p>{text}</p>}
            </div>

    </>
   
  )
};

export default Content;