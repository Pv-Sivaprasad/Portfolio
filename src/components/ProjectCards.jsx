import React from 'react'

const ProjectCards = ({title, description, image, tech, code, demo}) => {
  // Determine if the demo button should be shown
  const hasDemo = demo && demo !== '#';

  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-2 
    transition duration-300 cursor-pointer'>
      
    <img src={image} alt={title} className='w-full h-60 object-cover' />

    <div className="p-6">
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-400 mb-4'>{description}</p>
      
      <div className='flex flex-wrap gap-2 mb-4'> 
        {tech.map((item, index) => (
          // Using a logical NOT (!) on the index to get the key from the item itself if available, or index as a fallback
          <span key={item || index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
        ))}
      </div>

      <div className="flex gap-2">
        {/* Conditional Rendering for the "View Demo" button */}
        {hasDemo && (
          <a 
            href={demo} 
            className='flex-1 text-center px-4 py-2 bg-purple rounded-lg 
            font-medium hover:bg-purple-700 transition duration-300'
          >
            View Demo
          </a>
        )}
        
        {/* The "Code" button is always shown */}
        <a 
          href={code} 
          // Adjust class based on whether the demo button is present
          className={`text-center px-4 py-2 border border-purple
            font-medium rounded-lg hover:bg-purple/20 transition duration-300 ${hasDemo ? 'flex-1' : 'w-full'}`}
        >
          Code
        </a>
      </div>
    </div>
    </div>
  )
}

// const ProjectCards = ({title, description,image,tech,code,demo}) => {
//   return (
//     <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-2 
//     transition duration-300 cursor-pointer'>
      
//     <img src={image} alt={title}  className='w-full h-60 object-cover' />

//     <div className="p-6">
//     <h3 className='text-xl font-semibold mb-2'>{title}</h3>
//         <p className='text-gray-400 mb-4'>{description}</p>
//         <div className='flex flex-wrap gap-2 mb-4'> 
//             {tech.map((item,index)=>(
//                 <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
//             ))}
//         </div>

//                 <div className="flex gap-2">
//                     <a href={demo} className='flex-1 text-center px-4 py-2  bg-purple rounded-lg 
//                     font-medium hover:bg-purple-700 transition duration-300'>
//                         View Demo
//                     </a>
//                     <a href={code} className='flex-1 text-center px-4 py-2 border  border-purple
//                      font-medium rounded-lg hover:bg-purple/20 transition duration-300'>
//                         Code</a>
//                 </div>


//     </div>

//     </div>
//   )
// }

export default ProjectCards
