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
        name: 'chance',
        title: 'Chance',
        type: 'number',
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
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'probability',
        title: 'Probability (%)',
        type: 'number',
        validation: Rule => Rule.min(0).max(100), 
      },
    ],
  };
  