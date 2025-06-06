export const products = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Our rich, full-bodied espresso with complex notes of dark chocolate and caramel.',
    price: 4.50,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg',
    category: 'coffee',
    featured: true,
    options: [
      {
        name: 'Size',
        choices: ['Small', 'Medium', 'Large']
      },
      {
        name: 'Milk',
        choices: ['None', 'Whole', 'Oat', 'Almond', 'Soy']
      }
    ]
  },
  {
    id: '2',
    name: 'House Blend Drip',
    description: 'Smooth and balanced medium roast with notes of nuts and caramel.',
    price: 3.75,
    image: 'https://images.pexels.com/photos/1307146/pexels-photo-1307146.jpeg',
    category: 'coffee',
    options: [
      {
        name: 'Size',
        choices: ['Small', 'Medium', 'Large']
      }
    ]
  },
  {
    id: '3',
    name: 'Artisan Croissant',
    description: 'Flaky, buttery croissant made fresh daily in our bakery.',
    price: 3.95,
    image: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
    category: 'food',
    featured: true
  },
  {
    id: '4',
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with avocado, cherry tomatoes, and microgreens.',
    price: 8.95,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    category: 'food'
  },
  {
    id: '5',
    name: 'Ceramic Mug',
    description: 'Handcrafted ceramic mug with our signature logo. Microwave and dishwasher safe.',
    price: 14.95,
    image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg',
    category: 'merchandise',
    featured: true
  },
  {
    id: '6',
    name: 'Cold Brew',
    description: 'Smooth, less acidic cold brew steeped for 18 hours.',
    price: 4.95,
    image: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg',
    category: 'coffee',
    options: [
      {
        name: 'Size',
        choices: ['Small', 'Medium', 'Large']
      }
    ]
  },
  {
    id: '7',
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with fresh blueberries and topped with streusel.',
    price: 3.50,
    image: 'https://images.pexels.com/photos/3776939/pexels-photo-3776939.jpeg',
    category: 'food'
  },
  {
    id: '8',
    name: 'Canvas Tote Bag',
    description: 'Durable canvas tote featuring our cafe logo. Perfect for groceries or books.',
    price: 18.95,
    image: 'https://images.pexels.com/photos/5217326/pexels-photo-5217326.jpeg',
    category: 'merchandise'
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);

export const getProductsByCategory = (category) => 
  products.filter(product => product.category === category);

export const getProductById = (id) => 
  products.find(product => product.id === id);