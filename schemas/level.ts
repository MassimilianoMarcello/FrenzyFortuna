export default {
    name: 'level',
    title: 'Level',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'cards',
        title: 'Cards',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'card' } }],
      },
    ],
  };

  