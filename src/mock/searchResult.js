const searchResult = [
  {
    owner: {
      name: 'Иванов Усталов',
      avatar: 'https://instaturbo.ru/images/blog/5bbe622defe22.jpg',
      phone: '+79821001010',
    },
    place: {
      type: 'Квартира',
      rooms: 4,
      distance: 2,
      price: 10000,
      utilityBills: 3000,
      deposit: 10000,
      year: 1999,
      floors: 13,
      location: {
        latitude: 56.8338817,
        longitude: 60.6276645,
      },
      images: [
        'https://image.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-and-living-space_1262-12323.jpg',
        'https://image.freepik.com/free-photo/loft-luxury-living-room-with-bookshelf-near-dining-table_105762-1796.jpg',
        'https://image.freepik.com/free-photo/interior-shot-of-a-modern-house-kitchen-with-large-windows_181624-24368.jpg',
      ],
      comment:
        'Хороший большой дом, готов на все, главное платите мне денюжки. Денюжки я люблю. Животные, дети, всех люблю! Заезжайте, не звоните, я сам позвоню. Не пишите или пишите. ',
    },
    allowance: {
      child: true,
      animals: {
        small: true,
        large: true,
      },
    },
  },
];

export default searchResult;
