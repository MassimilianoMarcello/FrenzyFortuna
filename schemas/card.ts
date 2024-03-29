export default {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
      {
        name: 'value',
        title: 'Value',
        type: 'string',
      },
      {
        name: 'suit',
        title: 'Suit',
        type: 'string',
        options: {
          list: ['Positive', 'SuperPositive', 'Negative', 'SuperNegative'],
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Opzionale, abilita il tagging dell'hotspot per l'immagine
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  