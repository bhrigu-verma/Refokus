import React from 'react'
import { Product } from './Product'

function Products() {
  var products =[

    {
        title: "The Essence of Mindful Living",case:false,live:true,
        description: " ature offers an endless array of wonders to explore, from majestic mountains to serene beaches te life's challenges with a calm and focused mind."},
        {
            title: "Exploring New Horizons",case:false,live:true,
            description: "ng. You learn to navigate unfamiliar terrain, adapt to unexpected situations, and find beauty in places you never imagined. Exploring new horizons is not just about physical travel but also about personal and intellectual growth. It pushes you to question your assumptions, broaden your understanding, and develop a more nuanced view of the world. Every new horizon you explore expands your possibilities and enriches your life in ways you never thought possible."
          },
          {
            title: "The Art of Mindfulness",case:false,live:true,
            description: "from the taste of your food to the sound of the rain. By focusing on the present, you can break free from the cycle of worrying about the future or dwelling on the past. Mindfulness can be cultivated through meditation, breathing exercises, or simply by paying attention to your surroundings. It is a valuable tool for enhancing your mental and emotional well-being."
          },
          {
            title: "Innovation in Technology",case:true,live:true,
            description: "ements in fields like artificial intelligence, biotechnology, and renewable energy. These innovations have the potential to solve some of the world’s most pressing problems, such as climate change, disease, and resource scarcity. However, with great power comes great responsibility. It is crucial to consider the ethical implications of new technologies and ensure they are used for the greater good. As we continue to push the boundaries of what is possible, we must also strive to create a more equitable and sustainable future."
          },
          {
            title: "Sustainable Living Practices",case:true,live:true,
            description: "Sulture. By adopting a more sustainable lifestyle, individuals can contribute to the protection of natural resources, reduce pollution, and combat climate change. Small changes, such as using reusable bags, composting, and choosing energy-efficient appliances, can make a significant impact. Sustainable living is not just about making sacrifices but also about finding innovative solutions that benefit both people and the planet. It is about creating a harmonious balance between human activities and the natural world."
          },
          {
            title: "The Power of Community",case:true,live:true,
            description: "and encourages collaboration. Communities can take many forms, from neighborhoods and workplaces to online groups and social organizations. By participating in community activities, you can develop meaningful relationships, gain new perspectives, and contribute to the common good. The power of community is evident in the collective efforts to address social issues, support local businesses, and create a positive impact. It reminds us that we are stronger together than we are alone."
          },
          {
            title: "The Journey of Self-Discovery",case:true,live:true,
            description: "your strengths and weaknesses. The path to self-discovery can be challenging, as it involves stepping out of your comfort zone and facing the unknown. However, it is also incredibly rewarding. By gaining a deeper understanding of yourself, you can live a more authentic and fulfilling life. The journey of self-discovery is a continuous process, as there is always more to learn and discover. It is a journey that shapes who you are and how you navigate the world."
          }
  
    ]


  return (
    <div className='max-w-screen bg-black text-white '>
  {products.map((val,index)=><Product key={index} val={val}/>)}
    </div>
  )
}

export default Products