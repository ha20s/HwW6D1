import React, { useState } from 'react';

const urls = [
  { 
    src: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Sea", 
    des: "“The sea possesses a power over one’s moods that has the effect of a will. The sea can hypnotize. Nature in general can do so.” – Henrik Ibsen" 
  },
  { 
    src: "https://images.pexels.com/photos/1824570/pexels-photo-1824570.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Desert", 
    des: "“The desert tells a different story every time one ventures on it.”— Robert Edison Fulton Jr." 
  },
  { 
    src: "https://images.pexels.com/photos/1094544/pexels-photo-1094544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    title: "Forest", 
    des: "The clearest way into the Universe is through a forest wilderness. - John Muir" 
  },
  { 
    src: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    title: "Mountens", 
    des: "Every mountain top is within reach if you just keep climbing. —Barry Finlay" 
  },
  { 
    src: "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    title: "Sunset", 
    des: "Life does not come with instructions on how to live, but it does come with trees, sunsets, smiles and laughter, so enjoy your day. – Debbie Shapiro" 
  },
];


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className='w-full h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${urls[count].src})` }}
      >
        <p className='text-center bg-orange-50 p-3 rounded text-3xl m-8'>{urls[count].title}</p>
        <p className='text-center p-2 rounded bg-orange-50 lg:mx-40 mx-10'>{urls[count].des}</p>

        <div className='flex justify-around flex-wrap gap-5 py-10 lg:mx-24 w-full px-5'>

          <p className='bg-orange-50 p-5 rounded ' onClick={() => setCount(0)}>
            {urls[0].title}
          </p>
          <p className='bg-orange-50 p-5 rounded ' onClick={() => setCount(1)}>
            {urls[1].title}
          </p>
          <p className='bg-orange-50 p-5 rounded ' onClick={() => setCount(2)}>
            {urls[2].title}
          </p>
          <p className='bg-orange-50 p-5 rounded ' onClick={() => setCount(3)}>
            {urls[3].title}
          </p>
          <p className='bg-orange-50 p-5 rounded ' onClick={() => setCount(4)}>
            {urls[4].title}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
