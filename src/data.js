const moviesData = [
  {
    id: 1,
    title: 'A-Man-Called-Otto',
    synopsis: "A grump who's given up on life following the loss of his wife and wants to end it, whose only joy comes from criticizing and judging his exasperated neighbors.",
    rating: "PG",
    reviews: [
      {
        id: 1,
        text: 'Hated everything! -T Grumps',
        rating: 1,
        dateTime: '2023-09-15 14:30:00', // Add the date and time in the format you prefer
      },
      // Other reviews
    ],
    poster: 'images/Otto.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    synopsis: 'The film highlights the terrifying prospect of destroying everything they knew, the horrifying aftermath of the bombings, and the irreversible damage caused by their actions.',
    rating: "R",
    reviews: [
      {
        id: 1,
        text: 'Wow EXPLOSIVE  -Tomas',
        rating: 4,
        dateTime: '2023-09-15 15:45:00', // Add the date and time
      },
      // Other reviews
    ],
    poster: 'images/Oppenheimer.jpg',
  },
  {
    id: 3,
    title: 'Spider-Man',
    synopsis: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    rating: "PG",
    reviews: [
      {
        id: 1,
        text: 'A tangled web of deceit      -TK',
        rating: 4,
        dateTime: '2023-09-15 17:15:00', // Add the date and time
      },
      // Other reviews
    ],
    poster: 'images/Spiderman.jpg',
  },
  // Add more movies as needed
];

export default moviesData;
