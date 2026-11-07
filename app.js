/**
 * Ruang EAP — Application Logic & Question Engine
 * Universitas Muhammadiyah Surakarta — Teknik Informatika
 * 
 * Terintegrasi penuh dengan seluruh materi resmi:
 * 1. Listening Arena (Meeting 1 & 2: Nathan's School, Miley Cyrus, Youth Council, Festival, Computing Conference)
 * 2. Structure & Grammar (Meeting 3: Parts of Speech, Meeting 4: Simple, Compound, Complex Sentences)
 * 3. Reading Comprehension (Meeting 5 & 6: 30 Soal Dokumen Dosen READING Drilling ANS)
 * 4. Writing Workshop (Meeting 5 & 7: Paragraph Construction 100-150 words with sentence type rubrics)
 * 5. Simulasi UTS 90 Menit (Full 100 Pts)
 */

// ==========================================
// 1. LISTENING DRILLS (MEETING 2 DOSEN)
// ==========================================

const LISTENING_DRILLS = [
  {
    id: 'lis-nathan',
    title: "Exercise 1: Radio Interview — Nathan's School (Brooklyn Free School)",
    source: 'Latihan Dosen: Meeting 2 (Set 1)',
    transcript: `[RADIO INTERVIEW TRANSCRIPT]
Host: "Welcome back to Education Today. Today we're visiting Brooklyn Free School in New York to speak with Nathan, a 16-year-old high school student. Nathan, tell us about how your school works."
Nathan: "Hi! Well, Brooklyn Free School is really unique. There are no tests, no homework, and no mandatory grades. In my section of the school, students are aged 12 to 18, and there are about 60 students in total. We choose what we want to study every day."
Host: "Do you have regular classes with kids your own age?"
Nathan: "Actually, I rarely sit next to students who are only my age. We mix together. For instance, the boy who helps me with advanced mathematics is only 13 years old, but he's a genius at calculus! Our daily lessons run from 9:00 a.m. to 3:00 p.m. And while some think it's completely free, standard tuition actually costs about $12,000 a year, though they offer financial aid."
Host: "Do you enjoy coming to school?"
Nathan: "I absolutely love it. It's an inspiring place to learn."`,
    questions: [
      {
        id: 'ln-1',
        q: '1. Nathan is ___ years old.',
        options: ['15', '16', '17'],
        answer: 1, // 16
        expl: 'Kunci: B (16). Transkrip: <u>"...to speak with Nathan, a 16-year-old high school student."</u>'
      },
      {
        id: 'ln-2',
        q: "2. In Nathan's part of the school the students are aged ___.",
        options: ['4-11', '4-18', '12-18'],
        answer: 2, // 12-18
        expl: 'Kunci: C (12-18). Transkrip: <u>"In my section of the school, students are aged 12 to 18..."</u>'
      },
      {
        id: 'ln-3',
        q: "3. Nathan's part of the school has about ___ students.",
        options: ['16', '60', '66'],
        answer: 1, // 60
        expl: 'Kunci: B (60). Transkrip: <u>"...and there are about 60 students in total."</u>'
      },
      {
        id: 'ln-4',
        q: '4. Nathan ___ sits next to students of his own age.',
        options: ['sometimes', 'never', 'always'],
        answer: 0, // sometimes
        expl: 'Kunci: A (sometimes). Transkrip: Nathan menyatakan ia belajar bercampur usia, sehingga hanya kadang-kadang (sometimes) duduk dengan yang seumuran.'
      },
      {
        id: 'ln-5',
        q: '5. The boy who helps Nathan with maths is ___ years old.',
        options: ['11', '13', '18'],
        answer: 1, // 13
        expl: 'Kunci: B (13). Transkrip: <u>"the boy who helps me with advanced mathematics is only 13 years old..."</u>'
      },
      {
        id: 'ln-6',
        q: '6. Lessons are from ___.',
        options: ['8 a.m. to 3 p.m.', '9 a.m. to 3 p.m.', '9 a.m. to 4 p.m.'],
        answer: 1, // 9 a.m. to 3 p.m.
        expl: 'Kunci: B (9 a.m. to 3 p.m.). Transkrip: <u>"Our daily lessons run from 9:00 a.m. to 3:00 p.m."</u>'
      },
      {
        id: 'ln-7',
        q: '7. It costs ___ a year to study at the school.',
        options: ['$2,000', '$12,000', '$20,000'],
        answer: 1, // $12,000
        expl: 'Kunci: B ($12,000). Transkrip: <u>"...standard tuition actually costs about $12,000 a year..."</u>'
      }
    ]
  },
  {
    id: 'lis-miley',
    title: 'Exercise 2: Biography Profile — Miley Cyrus Short Biography',
    source: 'Latihan Dosen: Meeting 2 (Set 2)',
    transcript: `[BIOGRAPHY AUDIO TRANSCRIPT]
Narrator: "Miley Cyrus was born to be a star. She was born on November 23rd, 1992, in Franklin, Tennessee. Cyrus became famous worldwide when she starred in the television show "Hannah Montana" on Disney Channel. Two years later, she expanded her fame into mainstream pop music. Her 3D concert movie obtained more than 55 million dollars at the box office on opening weekend. Remarkably, by age 16, Miley already had achieved two number-one albums on the Billboard charts. Her energetic single "Party in the USA" became her best-selling single across the United States. Many music critics and fans respect her because she fearlessly takes artistic risks. In 2011, she was officially ranked in Hollywood as the second richest person under 25. Later in 2012, Miley made a notable guest appearance in the sitcom "Two and a Half Men", participating a few times throughout the season."`,
    questions: [
      {
        id: 'mc-1',
        q: '1. Miley Cyrus was born to be:',
        options: ['a fan', 'a star', 'a sensation'],
        answer: 1, // a star
        expl: 'Kunci: B (a star). Transkrip: <u>"Miley Cyrus was born to be a star."</u>'
      },
      {
        id: 'mc-2',
        q: '2. When was she born?',
        options: ['On November 21st, 1992', 'On November 23rd, 1992', 'On November 23rd, 1994'],
        answer: 1, // Nov 23, 1992
        expl: 'Kunci: B (On November 23rd, 1992). Transkrip: <u>"She was born on November 23rd, 1992..."</u>'
      },
      {
        id: 'mc-3',
        q: '3. Miley Cyrus became famous:',
        options: ['in a TV show', 'in a concert', 'in a commercial'],
        answer: 0, // TV show
        expl: 'Kunci: A (in a TV show). Transkrip: <u>"...when she starred in the television show \\\'Hannah Montana\\\'..."</u>'
      },
      {
        id: 'mc-4',
        q: '4. Cyrus became more famous with her music:',
        options: ['2 years later', '3 years later', '5 years later'],
        answer: 0, // 2 years later
        expl: 'Kunci: A (2 years later). Transkrip: <u>"Two years later, she expanded her fame into mainstream pop music."</u>'
      },
      {
        id: 'mc-5',
        q: '5. The 3D movie obtained more than:',
        options: ['55 million dollars', '155 million dollars', '115 million dollars'],
        answer: 0, // 55 million
        expl: 'Kunci: A (55 million dollars). Transkrip: <u>"Her 3D concert movie obtained more than 55 million dollars..."</u>'
      },
      {
        id: 'mc-6',
        q: '6. At 16 Miley Cyrus had:',
        options: ['4 #1 albums', '2 #1 albums', '3 #1 albums'],
        answer: 1, // 2 #1 albums
        expl: 'Kunci: B (2 #1 albums). Transkrip: <u>"by age 16, Miley already had achieved two number-one albums..."</u>'
      },
      {
        id: 'mc-7',
        q: '7. What album/single became best-selling single in the USA?',
        options: ['The climb', 'Party in the USA', 'Hannah Montana'],
        answer: 1, // Party in the USA
        expl: 'Kunci: B (Party in the USA). Transkrip: <u>"Her energetic single \\\'Party in the USA\\\' became her best-selling single..."</u>'
      },
      {
        id: 'mc-8',
        q: '8. The speaker likes Miley Cyrus because she:',
        options: ['takes risks', 'sings very well', 'is a good actress'],
        answer: 0, // takes risks
        expl: 'Kunci: A (takes risks). Transkrip: <u>"respect her because she fearlessly takes artistic risks."</u>'
      },
      {
        id: 'mc-9',
        q: '9. In 2011, Cyrus was named ___ in Hollywood.',
        options: ['the first young actress', 'the best singer', 'the second richest person'],
        answer: 2, // second richest
        expl: 'Kunci: C (the second richest person). Transkrip: <u>"...ranked in Hollywood as the second richest person under 25."</u>'
      },
      {
        id: 'mc-10',
        q: '10. In 2012, Miley participated ___ in the sitcom "Two and a Half Men":',
        options: ['many times', 'sometimes', 'few times'],
        answer: 2, // few times
        expl: 'Kunci: C (few times). Transkrip: <u>"...participating a few times throughout the season."</u>'
      }
    ]
  },
  {
    id: 'lis-council',
    title: 'Exercise 3: IELTS Form Completion — Joining Youth Council (Roger Brown)',
    source: 'Latihan Dosen: Meeting 2 (Set 3)',
    transcript: `[IELTS SECTION 1 CONVERSATION]
Officer: "Good morning, Youth Council office. How can I help you?"
Roger: "Hello, my name is Roger Brown, and I'd like to ask about joining the Youth Council."
Officer: "Great! Let me take down a few details. You're 18, correct? And where are you currently living?"
Roger: "During weekdays, I'm staying in a hostel near the college. My permanent home postal address is 17 Buckworth Street, Stamford, Lincs."
Officer: "And what is your postcode?"
Roger: "It's PE9 7JR."
Officer: "Thanks. Are you working at the moment?"
Roger: "I'm a full-time university student, but I work a part-time job as a waiter on weekends. My major subject of study is politics, with history as my minor subject."
Officer: "What about personal hobbies and interests?"
Roger: "I do a lot of cycling, and I'm very interested in the cinema."
Officer: "Splendid. Which community focus area would you prefer on the Council?"
Roger: "I really want to work with young people who are disabled. I want to help improve accessibility."
Officer: "That's wonderful. Could you come in to speak with the Elections Officer next Monday at 4:30 pm? And please leave your mobile number."
Roger: "Yes, 4:30 pm is perfect. My mobile number is 07788 136711."`,
    questions: [
      {
        id: 'yc-1',
        q: '1. Currently staying in a [_____] during the week',
        options: ['apartment', 'hostel', 'dormitory'],
        answer: 1,
        expl: 'Kunci: B (hostel). Transkrip: <u>"I\'m staying in a hostel near the college."</u>'
      },
      {
        id: 'yc-2',
        q: '2. Postal street address: 17, [_____] Street',
        options: ['Buckworth', 'Blackwell', 'Barker'],
        answer: 0,
        expl: 'Kunci: A (Buckworth). Transkrip: <u>"17 Buckworth Street, Stamford"</u>'
      },
      {
        id: 'yc-3',
        q: '3. Part-time job as a [_____]',
        options: ['librarian', 'waiter', 'cashier'],
        answer: 1,
        expl: 'Kunci: B (waiter). Transkrip: <u>"work a part-time job as a waiter on weekends."</u>'
      },
      {
        id: 'yc-4',
        q: '4. Major subject of study: [_____]',
        options: ['history', 'politics', 'literature'],
        answer: 1,
        expl: 'Kunci: B (politics). Transkrip: <u>"My major subject of study is politics..."</u>'
      },
      {
        id: 'yc-5',
        q: '5. On Youth Council, wants to work with young people who are [_____]',
        options: ['unemployed', 'homeless', 'disabled'],
        answer: 2,
        expl: 'Kunci: C (disabled). Transkrip: <u>"work with young people who are disabled."</u>'
      }
    ]
  }
];

// ==========================================
// 2. GRAMMAR & STRUCTURE DRILLS (MEETING 3 & 4)
// ==========================================

const GRAMMAR_DRILLS = [
  {
    id: 'g-pos',
    title: 'Drill 1: Parts of Speech Mastery (Meeting 3)',
    source: 'Latihan Dosen: Meeting 3 (Parts of Speech)',
    questions: [
      {
        id: 'pos-1',
        cat: 'NOUN',
        q: '1. The engineer checked the _____ before starting the test.',
        options: ['equipment', 'carefully', 'because', 'strong'],
        answer: 0,
        expl: 'Kunci: A (equipment). Kata benda (Noun) dibutuhkan sebagai objek setelah kata sandang "the".'
      },
      {
        id: 'pos-2',
        cat: 'NOUN',
        q: '2. Regular _____ can prevent machine failure.',
        options: ['maintains', 'maintenance', 'maintained', 'efficient'],
        answer: 1,
        expl: 'Kunci: B (maintenance). "Maintenance" adalah kata benda (Noun) yang berfungsi sebagai Subject kalimat.'
      },
      {
        id: 'pos-3',
        cat: 'PRONOUN',
        q: '3. The engineers finished the test, and _____ wrote a report.',
        options: ['they', 'them', 'their', 'theirs'],
        answer: 0,
        expl: 'Kunci: A (they). Kata ganti subjek jamak (Subject Pronoun) yang menggantikan "The engineers".'
      },
      {
        id: 'pos-4',
        cat: 'VERB',
        q: '4. The machine _____ automatically when the temperature is too high.',
        options: ['stops', 'stopping', 'stop', 'stopped'],
        answer: 0,
        expl: 'Kunci: A (stops). Subjek tunggal pihak ketiga (The machine) membutuhkan Simple Present Verb dengan akhiran -s.'
      },
      {
        id: 'pos-5',
        cat: 'ADJECTIVE',
        q: '5. The technician used an _____ instrument.',
        options: ['accuracy', 'accurately', 'accurate', 'accurateness'],
        answer: 2,
        expl: 'Kunci: C (accurate). Kata sifat (Adjective) dibutuhkan untuk menerangkan kata benda "instrument".'
      },
      {
        id: 'pos-6',
        cat: 'ADVERB',
        q: '6. The technician measured the temperature _____.',
        options: ['accurate', 'accuracy', 'accurately', 'accurateness'],
        answer: 2,
        expl: 'Kunci: C (accurately). Kata keterangan cara (Adverb of manner berakhiran -ly) menerangkan kata kerja "measured".'
      },
      {
        id: 'pos-7',
        cat: 'PREPOSITION',
        q: '7. The sensor is _____ the two components.',
        options: ['between', 'during', 'because', 'with'],
        answer: 0,
        expl: 'Kunci: A (between). Preposisi "between" digunakan untuk menunjukkan posisi di antara dua objek.'
      },
      {
        id: 'pos-8',
        cat: 'CONJUNCTION',
        q: '8. The motor is small, _____ it is powerful.',
        options: ['although', 'but', 'because', 'when'],
        answer: 1,
        expl: 'Kunci: B (but). Konjungsi koordinatif FANBOYS "but" digunakan untuk menghubungkan dua klausa yang berlawanan/kontras.'
      }
    ]
  },
  {
    id: 'g-sent-types',
    title: 'Drill 2: Simple, Compound, & Complex Sentences (Meeting 4)',
    source: 'Latihan Dosen: Meeting 4 (Sentence Types)',
    questions: [
      {
        id: 'st-1',
        q: '1. Identify the sentence type:\n"The internet helps students to find information quickly."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 0,
        expl: 'Kunci: A (Simple Sentence). Kalimat ini hanya memiliki 1 klausa independen (Subject: The internet, Verb: helps).'
      },
      {
        id: 'st-2',
        q: '2. Identify the sentence type:\n"I like programming, and I also enjoy designing websites."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 1,
        expl: 'Kunci: B (Compound Sentence). Terdiri dari 2 klausa independen yang dihubungkan konjungsi koordinatif FANBOYS "and" dengan tanda koma.'
      },
      {
        id: 'st-3',
        q: '3. Identify the sentence type:\n"She stayed at home because it was raining heavily."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 2,
        expl: 'Kunci: C (Complex Sentence). Terdiri dari 1 klausa independen ("She stayed at home") dan 1 klausa dependen diawali subordinator "because".'
      },
      {
        id: 'st-4',
        q: '4. Identify the sentence type:\n"The server crashed, so the technician fixed it immediately."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 1,
        expl: 'Kunci: B (Compound Sentence). Dua klausa independen dihubungkan oleh FANBOYS "so" untuk menyatakan akibat logis.'
      },
      {
        id: 'st-5',
        q: '5. Identify the sentence type:\n"If students practice every day, they will become better at programming."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 2,
        expl: 'Kunci: C (Complex Sentence). Klausa dependen bersyarat ("If students practice every day,") diletakkan di depan dengan koma sebelum induk kalimat.'
      }
    ]
  }
];

// ==========================================
// 3. AUTHENTIC READING DRILLING (QUESTIONS 1 - 30)
// ==========================================
// DRILLING_PASSAGES (Tetap dipertahankan 30 soal lengkap dengan kunci hijau)
const DRILLING_PASSAGES = [
  // 1. Laura Collins (1-4)
  {
    id: 'p-laura',
    title: 'Questions 1–4 refer to the following email.',
    source: 'Dokumen Dosen: READING 1–Q4',
    text: `Dear Ms. Longueview,

I'm so thrilled to receive the offer to intern at Bright Works Incorporated. I am truly looking forward to working with the team, and I'm particularly excited to work on the solar panel project this summer.

I would like to accept the terms outlined in the offer, but I'd appreciate the opportunity to speak with you about altering the start date for the role. I'm currently finishing up my fellowship program at the university and will be taking exams until May 27, 2025, so I may need accommodations in this respect. Would you have time to chat at the end of this week?

Thank you for your time. I look forward to hearing from you soon and learning more about Bright Works.

Best wishes,
Laura Collins`,
    questions: [
      {
        id: 'drill-1',
        num: 1,
        clo: 'CLO 3',
        q: '1. Why is Laura Collins writing to Ms. Longueview?',
        options: [
          'To reject the internship offered',
          'To accept the internship',
          'To ask for a higher salary',
          'To complain about the work conditions'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To accept the internship.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I would like to accept the terms outlined in the offer</u>, but I\'d appreciate the opportunity to speak with you about altering the start date for the role."</em>'
      },
      {
        id: 'drill-2',
        num: 2,
        clo: 'CLO 3',
        q: '2. Why does Laura need to change the start date? Because…',
        options: [
          'She is moving to a new city.',
          'She wants to travel first.',
          'She wants to learn about Bright Works.',
          'She is finishing fellowship program.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. She is finishing fellowship program.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I\'m currently finishing up my fellowship program at the university</u> and will be taking exams until May 27, 2025..."</em>'
      },
      {
        id: 'drill-3',
        num: 3,
        clo: 'CLO 3',
        q: '3. When does Laura suggest having a conversation with Ms. Longueview?',
        options: [
          'Next month',
          'Tomorrow morning',
          'At the end of this week',
          'In two weeks'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. At the end of this week.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>Would you have time to chat at the end of this week?</u>"</em>'
      },
      {
        id: 'drill-4',
        num: 4,
        clo: 'CLO 3',
        q: '4. What will Ms. Longueview most likely do next?',
        options: [
          'Ignore Laura’s email completely',
          'Reply to schedule a conversation about the start date',
          'Tell Laura she cannot change the internship dates',
          'Offer Laura a full-time job instead'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Reply to schedule a conversation about the start date.<br><strong>Penjelasan Logis:</strong><br>Sebagai tindak lanjut profesional, pihak HRD akan membalas email Laura untuk mengatur jadwal perbincangan.'
      }
    ]
  },
  // 2. Nutrition Chart (5-7)
  {
    id: 'p-chart',
    title: 'Questions 5–7 refer to the following chart.',
    source: 'Dokumen Dosen: READING 5–Q7',
    text: `Recommendations for adult Women 18-45
(Men 18-45, see page 16. Children under 18, see page 17)

Food Group                                               No. of recommended Daily Servings
Dairy Products (Milk and Milk Products, Eggs)             3
Meat (fish, Chicken, Beef)                                2
Vegetables (Carrots, Tomatoes, spinach)                   5
Fruit (oranges, Apples, Berries)                          3
Grains (bread, Cereal, Rice)                              4`,
    questions: [
      {
        id: 'drill-5',
        num: 5,
        clo: 'CLO 3',
        q: '5. According to this chart, what should women do every day?',
        options: [
          'Eat three servings of meat',
          'Eat cereal for breakfast',
          'Eat five servings of vegetables',
          'Eat more fruit than vegetables'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Eat five servings of vegetables.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Vegetables (Carrots, Tomatoes, spinach) : 5</u>"</em>'
      },
      {
        id: 'drill-6',
        num: 6,
        clo: 'CLO 3',
        q: '6. Which of the following is a dairy product?',
        options: [
          'Crackers',
          'Chicken',
          'Onions',
          'Cheese'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Cheese.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Dairy Products (Milk and Milk Products, Eggs)</u>"</em>.<br>Keju (cheese) adalah olahan susu.'
      },
      {
        id: 'drill-7',
        num: 7,
        clo: 'CLO 3',
        q: '7. Which of the following foods belongs to the grain group?',
        options: [
          'Oranges',
          'Rice',
          'Eggs',
          'Fish'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Rice.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Grains (bread, Cereal, Rice)</u>"</em>.'
      }
    ]
  },
  // 3. Telephone Listings (8-11)
  {
    id: 'p-listings',
    title: 'Questions 8–11 refer to the following List.',
    source: 'Dokumen Dosen: READING 8–Q11',
    text: `Telephone Listings:
Craig, Mary         1245 Grayson Ln.        541-0987
Craig, Samuel       1346 Bear Ct            541-3211
Lambert, Wm.        4567 Center St.         654-9087
Layton, Tim         1235 Grayson Ln         541-2345
Mc Grath, R.        1897 Lee Dr.            541-8765
Meyer, Walter       1346 Bear Ct            541-3211
Ryan, Patrick       5678 Taylor St.         541-9087`,
    questions: [
      {
        id: 'drill-8',
        num: 8,
        clo: 'CLO 3',
        q: '8. How many phone numbers which possibly take on the same area?',
        options: ['Four', 'Six', 'Five', 'Seven'],
        answer: 1,
        expl: 'Kunci Jawaban: B. Six.<br><strong>Analisis:</strong> Ada 6 nomor berawalan <u>541</u> (Mary, Samuel, Tim, R. Mc Grath, Walter, Patrick).'
      },
      {
        id: 'drill-9',
        num: 9,
        clo: 'CLO 3',
        q: '9. From the lists, it is obviously described that …lives in different area from others.',
        options: ['Craig, Samuel', 'Lambert, Wm.', 'Mc Grath, R.', 'Layton, Tim'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Lambert, Wm.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Lambert, Wm.  4567 Center St.  654-9087</u>"</em>.'
      },
      {
        id: 'drill-10',
        num: 10,
        clo: 'CLO 3',
        q: '10. Which two people are possibly living at the same address?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Samuel Craig and Walter Meyer.<br><strong>Bukti Pendukung:</strong> Keduanya beralamat di <u>1346 Bear Ct</u> dengan telepon <u>541-3211</u>.'
      },
      {
        id: 'drill-11',
        num: 11,
        clo: 'CLO 3',
        q: '11. Which two people are probably neighbors?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton.',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Mary Craig and Tim Layton.<br><strong>Bukti Pendukung:</strong> Keduanya bertetangga di <u>Grayson Ln.</u> (1245 dan 1235).'
      }
    ]
  },
  // 4. Job Vacancy (12-15)
  {
    id: 'p-vacancy',
    title: 'Questions 12–15 refer to the following text.',
    source: 'Dokumen Dosen: READING 12–Q15',
    text: `URGENTLY REQUIRED: Secretary
- Female, graduated from a reputable university
- Min. 5 years of work experience
- Good command of English (oral and written)
- Computer literate (min. Word, Excel, Internet)

Please submit your complete application, resume and recent photograph not more than 10 days after this ads to:
HRD PT CITRA ENERGY DEVELOPMENT
Wisma Emha Jln. Wijaya I No. IIA, Kebayoran Baru, Jakarta Selatan 12170
Fax no. 021-7207978
e-mail address: mitraenergy@cbn.net.id
(only short-listed candidates will be notified)`,
    questions: [
      {
        id: 'drill-12',
        num: 12,
        clo: 'CLO 3',
        q: '12. What is the text about?',
        options: ['Wisma Emha', 'A job vacancy', 'A senior secretary', 'An application center'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. A job vacancy.<br><strong>Bukti Pendukung:</strong> <u>"URGENTLY REQUIRED: Secretary"</u>.'
      },
      {
        id: 'drill-13',
        num: 13,
        clo: 'CLO 3',
        q: '13. The following are requirements asked, EXCEPT....',
        options: [
          'five years’ experience',
          'able to operate a computer',
          'able to speak and write in English',
          'application letter should be sent ten days after this ad'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. application letter should be sent ten days after this ad.<br><strong>Penjelasan:</strong> Teks menyatakan: <em>"<u>not more than 10 days after this ads</u>"</em> (maksimal dalam waktu 10 hari, bukan 10 hari setelahnya).'
      },
      {
        id: 'drill-14',
        num: 14,
        clo: 'CLO 3',
        q: '14. Which statement is TRUE based on the text above?',
        options: [
          'A mining company is looking for a consultant manager.',
          'The application letter is sent to the director of PT CITRA ENERGY DEVELOPMENT.',
          'The application letter can only be sent via email.',
          'The skill to communicate in English is required.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. The skill to communicate in English is required.<br><strong>Bukti Pendukung:</strong> <u>"Good command of English (oral and written)"</u>.'
      },
      {
        id: 'drill-15',
        num: 15,
        clo: 'CLO 3',
        q: '15. The word “reputable” in “Female, graduated from a reputable university” has the closest meaning to the word ….',
        options: ['famous', 'respectable', 'reliable', 'valid'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. respectable.'
      }
    ]
  },
  // 5. Gregor & Samia (16-18)
  {
    id: 'p-gregor',
    title: 'Questions 16–18 refer to the following email.',
    source: 'Dokumen Dosen: READING 16–Q18',
    text: `Hi Samia,
Just a quick email to say that sounds like a great idea. Saturday is better for me because I'm meeting my parents on Sunday. So, if that's still good for you, why don't you come here? Then you can see the new flat and all the work we've done on the kitchen since we moved in. We can eat at home and then go for a walk in the afternoon. It's going to be so good to catch up finally. I want to hear all about your new job!

Our address is 52 Charles Road, but it's a bit difficult to find because the house numbers are really strange here. If you turn left at the post office and keep going past the big white house on Charles Road, there's a small side street behind it with the houses 50–56 in. Don't ask me why the side street doesn't have a different name! But call me if you get lost and I'll come and get you.

Let me know if there's anything you do/don't like to eat. Really looking forward to seeing you!
See you soon!
Gregor`,
    questions: [
      {
        id: 'drill-16',
        num: 16,
        clo: 'CLO 3',
        q: '16. What day does Gregor prefer Samia to visit?',
        options: ['Sunday', 'Monday', 'Friday', 'Saturday'],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Saturday.<br><strong>Kalimat Pendukung:</strong> <u>"Saturday is better for me because I\'m meeting my parents on Sunday."</u>'
      },
      {
        id: 'drill-17',
        num: 17,
        clo: 'CLO 3',
        q: '17. Why does Gregor prefer Saturday?',
        options: [
          'Because he is meeting his parents on Sunday.',
          'Because he has a new job on Sunday.',
          'Because his new flat is free on Saturday.',
          'Because Samia cannot visit on Sunday.'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Because he is meeting his parents on Sunday.'
      },
      {
        id: 'drill-18',
        num: 18,
        clo: 'CLO 3',
        q: '18. What does Gregor want to know about Samia?',
        options: [
          'Her new address on Charles Road',
          'The food she likes or does not like',
          'Her parents\' plans in New Year',
          'Her new job in the new company'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. The food she likes or does not like.<br><strong>Kalimat Pendukung:</strong> <u>"Let me know if there\'s anything you do/don\'t like to eat."</u>'
      }
    ]
  },
  // 6. Jarvis Cleaner (19-22)
  {
    id: 'p-jarvis',
    title: 'Questions 19–22 refer to the following Advertisement.',
    source: 'Dokumen Dosen: READING 19–Q22',
    text: `Jarvis Miracle Cleaner is the one product engineers, mechanics and construction workers just cannot do without. Its unique patented formula allows you to quickly and easily remove dirt, grime, and oil from your hands without damaging your skin. For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry, and it is now available for home use for the first time.

Jarvis Deluxe Cleaner is a milder version of the industrial cleaver with a new yellow color and fresh lemon scent. Jarvis Deluxe Cleaner removes not just oil and grease but also paint, ink, and almost anything else you or your children get on your hands and skin. Jarvis Deluxe Cleaner has been tested and demonstrated to be gentle enough for even the most sensitive skin.

Bath products are now available at all good supermarkets and drugstores.`,
    questions: [
      {
        id: 'drill-19',
        num: 19,
        clo: 'CLO 3',
        q: '19. What is the main purpose of the passage?',
        options: [
          'To explain how to make a cleaning product',
          'To advertise Jarvis cleaning products',
          'To compare American and European cleaning products',
          'To warn about harmful effects of industrial cleaners'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To advertise Jarvis cleaning products.'
      },
      {
        id: 'drill-20',
        num: 20,
        clo: 'CLO 3',
        q: '20. How long has Jarvis Miracle Cleaner been the number 1 cleaning product in American industry?',
        options: ['10 years', '20 years', '40 years', '50 years'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. 40 years.<br><strong>Kalimat Pendukung:</strong> <u>"For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry..."</u>'
      },
      {
        id: 'drill-21',
        num: 21,
        clo: 'CLO 3',
        q: '21. According to the passage, where can Jarvis Deluxe Cleaner now be purchased?',
        options: [
          'Only at hardware stores',
          'At supermarkets and drugstores',
          'From construction companies',
          'Only in factories'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. At supermarkets and drugstores.<br><strong>Kalimat Pendukung:</strong> <u>"Bath products are now available at all good supermarkets and drugstores."</u>'
      },
      {
        id: 'drill-22',
        num: 22,
        clo: 'CLO 3',
        q: '22. The word Its in "Its unique patented formula allows you to quickly and easily remove dirt..." refers to:',
        options: [
          'Jarvis Miracle Cleaner',
          'Lemon oil',
          'Industrial dirt',
          'Construction workers'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Jarvis Miracle Cleaner.'
      }
    ]
  },
  // 7. Airport Baggage (23-25)
  {
    id: 'p-airport',
    title: 'Questions 23–25 refer to the following airport notice.',
    source: 'Dokumen Dosen: READING 23–Q25',
    text: `What can I take on the plane as hand luggage?
Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg.

You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, you will not be allowed to take it onto the plane. Staff will put it in the hold for you and you will have to pay extra.

Please make sure mobile phones and other devices are fully charged so that security staff can check them.

Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you've passed security. 

We hope you enjoy your flight!`,
    questions: [
      {
        id: 'drill-23',
        num: 23,
        clo: 'CLO 3',
        q: '23. What is the maximum weight for the suitcase?',
        options: ['5 kg', '10 kg', '15 kg', '20 kg'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. 10 kg.<br><strong>Kalimat Pendukung:</strong> <u>"...and weigh no more than 10kg."</u>'
      },
      {
        id: 'drill-24',
        num: 24,
        clo: 'CLO 3',
        q: '24. When are passengers allowed to take bottles bigger than 100ml onto the plane?',
        options: [
          'Before they arrive at the airport.',
          'Before they pass security.',
          'When they buy them after passing security.',
          'When they put them in their suitcase.'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. When they buy them after passing security.<br><strong>Kalimat Pendukung:</strong> <u>"Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you\'ve passed security."</u>'
      },
      {
        id: 'drill-25',
        num: 25,
        clo: 'CLO 3',
        q: '25. Why will passengers have to pay extra if their bag is too big or too heavy?',
        options: [
          'Because they need to buy another bag.',
          'Because they need to buy a new ticket.',
          'Because they need to pass security again.',
          'Because staff will put the bag in the hold.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Because staff will put the bag in the hold.<br><strong>Kalimat Pendukung:</strong> <u>"Staff will put it in the hold for you and you will have to pay extra."</u>'
      }
    ]
  },
  // 8. MIT Drones (26-30)
  {
    id: 'p-mit',
    title: 'Questions 26–30 refer to the following News.',
    source: 'Dokumen Dosen: READING 26–Q30',
    text: `Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing the payload the drone can carry or the distance it can travel.

Unraveling that conundrum is no easy task, but what happens if the designers don't know the exact specifications of each battery and motor? On top of that, the real-world performance of these components will likely be affected by unpredictable factors, like changing weather along the drone's route.

MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty. The framework allows them to model the performance trade-offs of a device with many interconnected parts, each of which could behave in unpredictable ways.

The research is published on the arXiv preprint server. Their technique captures the likelihood of many outcomes and trade-offs, giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios.

Ultimately, this framework could help engineers develop complex systems like autonomous vehicles, commercial aircraft, or even regional transportation networks that are more robust and reliable in the face of real-world unpredictability`,
    questions: [
      {
        id: 'drill-26',
        num: 26,
        clo: 'CLO 3',
        q: '26. What is the main focus of the passage?',
        options: [
          'The challenges of flying drones in bad weather',
          'MIT’s new framework to design complex systems under uncertainty',
          'The history of battery and motor technology',
          'The economic cost of developing autonomous vehicles'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. MIT’s new framework to design complex systems under uncertainty.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty."</u>'
      },
      {
        id: 'drill-27',
        num: 27,
        clo: 'CLO 3',
        q: '27. According to the text, what unpredictable factor can affect drone performance?',
        options: ['Motor type', 'Battery price', 'Weather conditions', 'Designer preferences'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Weather conditions.<br><strong>Kalimat Pendukung:</strong> <u>"...affected by unpredictable factors, like changing weather along the drone\'s route."</u>'
      },
      {
        id: 'drill-28',
        num: 28,
        clo: 'CLO 3',
        q: '28. What is the potential benefit of this new framework?',
        options: [
          'Making drones cheaper than ever before',
          'Eliminating the need for testing in real life',
          'Allowing designers to ignore unpredictable conditions',
          'Helping engineers build more reliable and robust complex systems'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Helping engineers build more reliable and robust complex systems.<br><strong>Kalimat Pendukung:</strong> <u>"Ultimately, this framework could help engineers develop complex systems... that are more robust and reliable"</u>.'
      },
      {
        id: 'drill-29',
        num: 29,
        clo: 'CLO 3',
        q: '29. What do existing approaches usually model?',
        options: [
          'Only best-case and worst-case scenarios',
          'The average-case scenarios',
          'The reliability of every motor',
          'The color of the drone'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Only best-case and worst-case scenarios.<br><strong>Kalimat Pendukung:</strong> <u>"...giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios."</u>'
      },
      {
        id: 'drill-30',
        num: 30,
        clo: 'CLO 3',
        q: '30. The word Their in “Their technique captures the likelihood of many outcomes and trade-offs” refers to:',
        options: ['The MIT researchers', 'The batteries', 'The motors', 'The designers'],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. The MIT researchers.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework... Their technique captures the likelihood"</u>.'
      }
    ]
  }
];

// ==========================================
// 4. WRITING MODELS (MEETING 5 DOSEN: 100-150 WORDS)
// ==========================================
const WRITING_TOPIC_MODELS = [
  {
    topic: 'The Importance of Technology in Daily Life',
    modelParagraph: `Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally. It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms. For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources. Technology also provides widespread digital entertainment, which people can readily access anywhere. Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors. Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.`,
    wordCount: 105,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally.' },
      { type: 'Supporting 1 (Compound)', text: 'It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms.' },
      { type: 'Supporting 2 (Complex)', text: 'For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources.' },
      { type: 'Supporting 3 (Simple)', text: 'Technology also provides widespread digital entertainment, which people can readily access anywhere.' },
      { type: 'Supporting 4 (Compound)', text: 'Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors.' },
      { type: 'Concluding Sentence (CS)', text: 'Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.' }
    ]
  },
  {
    topic: 'Why I Chose Informatics Engineering as My Major',
    modelParagraph: `I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood. Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically. When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively. Information technology continuously transforms modern healthcare, finance, and industrial infrastructure. In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly. In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.`,
    wordCount: 115,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood.' },
      { type: 'Supporting 1 (Compound)', text: 'Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically.' },
      { type: 'Supporting 2 (Complex)', text: 'When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively.' },
      { type: 'Supporting 3 (Simple)', text: 'Information technology continuously transforms modern healthcare, finance, and industrial infrastructure.' },
      { type: 'Supporting 4 (Compound)', text: 'In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly.' },
      { type: 'Concluding Sentence (CS)', text: 'In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.' }
    ]
  }
];

// ==========================================
// 5. UTS FULL SIMULATION QUESTION DATA (100 PTS)
// ==========================================
const UTS_EXAM_DATA = {
  listening: [
    {
      id: 'uts-l1',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[ACADEMIC LECTURE EXCERPT — COMPUTER SCIENCE]
Professor: "Good morning class. Today we are initiating our unit on algorithmic optimization. Now, many novice programmers assume optimization simply means shortening lines of code. However, our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time, especially in high-throughput database systems. Therefore, please observe this benchmark graph..."`,
      q: "1. What is the primary purpose of the professor's lecture?",
      options: [
        'To instruct students on how to shorten lines of program code',
        'To explain how data structures influence memory allocation and execution speed',
        'To announce an upcoming midterm examination date',
        'To demonstrate how to build an e-commerce database from scratch'
      ],
      answer: 1,
      expl: '<strong>Tujuan Utama yang Digarisbawahi:</strong> <em>"<u>our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time</u>"</em>.'
    },
    {
      id: 'uts-l2',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[CAMPUS CONSULTATION — STUDENT & ACADEMIC ADVISOR]
Advisor: "Come in, Dimas. I received your email regarding course prerequisites. You mentioned wanting to take Advanced Software Engineering next semester. However, the departmental catalog strictly requires that you must have completed Object-Oriented Programming with a minimum grade of B before enrolling."
Dimas: "I see. I took OOP last semester and received an A-, but my grade sheet hasn't updated on the online portal yet."
Advisor: "In that case, bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM, and we will manually unlock the enrollment system for you."`,
      q: '2. What specific action must the student take to enroll in the course?',
      options: [
        'Retake the Object-Oriented Programming course next semester',
        'Submit a signed instructor verification slip to the department office by Thursday 3 PM',
        'Pay an additional manual registration fee to the university registrar',
        'Send another email inquiry to the academic portal webmaster'
      ],
      answer: 1,
      expl: '<strong>Detail Spesifik yang Digarisbawahi:</strong> <em>"<u>bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM</u>"</em>.'
    },
    {
      id: 'uts-l3',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[SEMINAR ANNOUNCEMENT — FACULTY OF INFORMATICS]
Host: "Attention all attendees. Before Dr. Hartono delivers the keynote on Artificial Intelligence ethics, please take note of our workshop schedule. The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium as printed in the flyer. Furthermore, all participants requiring a certificate of participation must scan the QR code located near the exit doors prior to 4:30 PM."`,
      q: '3. What specific detail did the host correct regarding the workshop schedule?',
      options: [
        'The keynote speaker has been replaced by Dr. Hartono',
        'The breakout lab session will be held in Multimedia Lab 3 on the 2nd floor, not the auditorium',
        'The certificates will be mailed to participants\' home addresses',
        'The seminar will finish earlier at 12:00 PM'
      ],
      answer: 1,
      expl: '<strong>Koreksi Lokasi yang Digarisbawahi:</strong> <em>"<u>The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium</u> as printed in the flyer"</em>.'
    },
    {
      id: 'uts-l4',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[STUDY GROUP DISCUSSION — UNIVERSITY LIBRARY]
Aisha: "So for our research outline on cloud storage security, we already have our topic sentence and two supporting arguments regarding data encryption and redundancy. What we're lacking is empirical statistical evidence to support our second claim."
Budi: "Actually, I found a 2025 survey from the IEEE Computer Society showing that 73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms."
Aisha: "That is perfect! That precisely reinforces our argument that human administrative protocol is the critical vulnerability."`,
      q: '4. Which phrase best paraphrases the students\' consensus on cloud security vulnerability?',
      options: [
        'Cloud breaches are predominantly triggered by administrative configuration errors rather than flawed cryptography.',
        'Cryptographic algorithms are completely obsolete and insecure in modern distributed computing.',
        'Only 27% of organizations utilize cloud storage systems due to extreme risk.',
        'IEEE surveys should not be cited in academic computer science papers.'
      ],
      answer: 0,
      expl: '<strong>Parafrase Akademis yang Tepat:</strong> <em>"73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms"</em> diparafrase menjadi <em>"predominantly triggered by administrative configuration errors rather than flawed cryptography"</em>.'
    },
    {
      id: 'uts-l5',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[CAMPUS BRIEFING — UTS EXAM PREPARATION]
Proctor: "Welcome students. Please listen attentively to the examination guidelines. To answer the multiple-choice questions on your LJK sheet, a 2B pencil is mandatory; pens cannot be scanned by the optical grader. However, for Section 4, the paragraph outline writing task, you must use a black or blue pen. You are strictly prohibited from bringing cell phones or smartwatches to your desk. Arrive at least 30 minutes early, as any student arriving even one second late will face immediate disqualification."`,
      q: '5. What is the mandatory rule regarding the Writing section of the exam?',
      options: [
        'It must be filled in with a 2B pencil on the circle sheet',
        'It must be written using a pen (black or blue)',
        'It can be typed using a laptop or smartphone',
        'It is an optional bonus section that can be skipped'
      ],
      answer: 1,
      expl: '<strong>Aturan Resmi Dosen UMS:</strong> <em>"<u>while for the writing section, you should use a pen</u>"</em>. Pilihan ganda wajib pensil 2B, bagian menulis wajib pulpen.'
    }
  ],

  grammar: [
    {
      id: 'uts-g1',
      pts: 4,
      clo: 'CLO 2',
      q: '6. Identify the sentence component of the bracketed portion:\n"The software development team [carefully reviewed] the security audit logs."',
      options: [
        'Subject (S)',
        'Verb / Predicate (V)',
        'Direct Object (O)',
        'Subject Complement (C)'
      ],
      answer: 1,
      expl: '<strong>Analisis S-V-O-C-A:</strong> Bagian <em>"carefully reviewed"</em> adalah <strong>Verb / Predicate (V)</strong>.'
    },
    {
      id: 'uts-g2',
      pts: 4,
      clo: 'CLO 2',
      q: '7. Which coordinating conjunction (FANBOYS) logically completes the compound sentence?\n"The database server experienced a sudden voltage drop, _____ the automated backup protocol instantly switched power to the auxiliary generator."',
      options: ['for', 'so', 'nor', 'but'],
      answer: 1,
      expl: '<strong>Aturan FANBOYS:</strong> Konjungsi <strong>"so"</strong> menyatakan konsekuensi/akibat logis.'
    },
    {
      id: 'uts-g3',
      pts: 4,
      clo: 'CLO 2',
      q: '8. Choose the grammatically correct COMPLEX sentence with proper punctuation:',
      options: [
        'Although quantum computing holds immense potential, researchers still face significant physical constraints in hardware stabilization.',
        'Although quantum computing holds immense potential researchers still face significant physical constraints.',
        'Researchers still face significant physical constraints, although quantum computing holds immense potential.',
        'Because researchers face physical constraints and quantum computing holds immense potential.'
      ],
      answer: 0,
      expl: '<strong>Aturan Koma Kalimat Kompleks:</strong> Jika Dependent Clause diletakkan di depan, maka <strong>WAJIB</strong> diberi tanda koma.'
    },
    {
      id: 'uts-g4',
      pts: 4,
      clo: 'CLO 2',
      q: '9. Analyze the grammatical structure of the following sentence:\n"Neural networks require massive training datasets, but they can identify complex patterns that human analysts frequently overlook."',
      options: [
        'Simple Sentence',
        'Compound Sentence',
        'Complex Sentence',
        'Compound-Complex Sentence'
      ],
      answer: 3,
      expl: '<strong>Analisis Jenis Kalimat:</strong> Gabungan Compound (koordinasi "but") dan Complex (klausa dependen "that...").'
    },
    {
      id: 'uts-g5',
      pts: 4,
      clo: 'CLO 2',
      q: '10. Which of the following is a SENTENCE FRAGMENT (an incomplete sentence that must be avoided in academic writing)?',
      options: [
        'Firewalls filter unauthorized network traffic effectively.',
        'Because encryption keys must remain confidential to protect financial transactions.',
        'The engineer debugged the recursive function and recompiled the module.',
        'Modern microprocessors generate substantial heat under sustained heavy loads.'
      ],
      answer: 1,
      expl: '<strong>Sentence Fragment:</strong> Opsi B adalah klausa dependen yang berdiri sendiri tanpa induk kalimat.'
    }
  ],

  reading: [
    {
      id: 'uts-r1',
      pts: 5,
      clo: 'CLO 3',
      passage: `Airport Hand Baggage Regulations:
"Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg. You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, staff will put it in the hold for you and you will have to pay extra."`,
      q: '11. Under what condition is a passenger required to pay an extra fee at the boarding gate?',
      options: [
        'When carrying a fully charged smartphone into the cabin',
        'When purchasing duty-free perfumes after passing the security checkpoint',
        'When their cabin bag exceeds the permitted dimensions or weight limit and must be placed in the hold',
        'When traveling with only a single 5kg laptop briefcase'
      ],
      answer: 2,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>Staff will put it in the hold for you and you will have to pay extra</u>"</em>.'
    },
    {
      id: 'uts-r2',
      pts: 5,
      clo: 'CLO 3',
      passage: `Autonomous Drones Research:
"Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing payload. Existing engineering approaches usually model only best-case and worst-case scenarios. To address this challenge, MIT researchers have introduced a new framework to design complex systems under uncertainty. Their technique captures the likelihood of many outcomes and evaluates how tradeoffs affect total performance."`,
      q: '12. What limitation of existing engineering approaches did the MIT framework overcome?',
      options: [
        'Existing approaches were unable to test drones in outdoor environments',
        'Existing approaches only modeled extreme best-case and worst-case scenarios rather than probabilistic outcomes',
        'Existing approaches required too many human drone pilots',
        'Existing approaches completely neglected the aerodynamic design of aircraft wings'
      ],
      answer: 1,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>can usually only model best-case and worst-case scenarios</u>"</em>.'
    },
    {
      id: 'uts-r3',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Paragraph Structure:
"A well-structured academic paragraph is built around three foundational pillars: a concise topic sentence embodying a focused controlling idea, coherent supporting details fortified with empirical evidence or technical illustrations, and a synthesized concluding sentence that reinforces the thesis without merely mimicking the opening line."`,
      q: '13. What constitutes an effective Topic Sentence according to academic writing principles?',
      options: [
        'A broad announcement of a topic with no argumentative stance (e.g., "I will discuss computers.")',
        'A specific topic paired with a defined controlling idea that limits the scope of discussion',
        'A lengthy list of statistical data gathered from outside references',
        'A rhetorical question intended solely to entertain casual readers'
      ],
      answer: 1,
      expl: '<strong>Materi Dosen Pertemuan 5 & 7:</strong> Topic Sentence wajib memuat <strong>Specific Topic</strong> + <strong>Controlling Idea</strong>.'
    },
    {
      id: 'uts-r4',
      pts: 5,
      clo: 'CLO 3',
      passage: `Industrial Cleaning Products:
"For over 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry. Its unique patented formula allows technicians to quickly and safely dissolve petroleum residue without corroding treated metal surfaces."`,
      q: '14. In the text above, the possessive pronoun "Its" directly refers to:',
      options: [
        'American industry',
        'Petroleum residue',
        'Jarvis Miracle Cleaner',
        'Treated metal surfaces'
      ],
      answer: 2,
      expl: '<strong>Rujukan Pronoun:</strong> Kata <em>"Its"</em> merujuk ke <strong>Jarvis Miracle Cleaner</strong>.'
    },
    {
      id: 'uts-r5',
      pts: 5,
      clo: 'CLO 3',
      passage: `Corporate Recruitment Notice:
"A multinational renewable energy consortium is recruiting a Lead Cybersecurity Analyst. Candidates must possess a Bachelor's degree in Computer Science or Information Technology from a reputable academic institution, alongside verifiable credentials in ethical hacking."`,
      q: '15. The word "reputable" in the context of the recruitment notice is closest in meaning to:',
      options: [
        'inexpensive',
        'respectable and widely recognized',
        'geographically adjacent',
        'recently established'
      ],
      answer: 1,
      expl: '<strong>Kunci Resmi Dosen:</strong> <em>reputable = respectable</em>.'
    },
    {
      id: 'uts-r6',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Text Outlining:
"When synthesizing academic literature, effective scholars employ text outlining to map macro-structures. By isolating primary claims, secondary rationale, and empirical verifications, readers can discern whether an author relies on causal chains, comparative matrices, or chronological progressions."`,
      q: '16. What is the primary function of text outlining in academic reading?',
      options: [
        'To memorize every individual word in the dictionary',
        'To map macro-structures by organizing main claims, reasons, and evidence logically',
        'To replace the need to write academic citations',
        'To translate English texts automatically into another language'
      ],
      answer: 1,
      expl: '<strong>Fungsi Outlining:</strong> Memetakan struktur makro teks.'
    },
    {
      id: 'uts-r7',
      pts: 5,
      clo: 'CLO 3',
      passage: `Contextual Vocabulary Clues:
"Unlike volatile memory such as SRAM and DRAM which instantaneously purge data upon electrical disconnection, non-volatile storage media retain digital bits indefinitely even during sudden blackout events."`,
      q: '17. Based on the contextual contrast clue, what does the word "purge" mean?',
      options: [
        'permanently duplicate',
        'rapidly erase or eliminate',
        'safely encrypt',
        'physically accelerate'
      ],
      answer: 1,
      expl: '<strong>Contextual Clue:</strong> Lawan dari <em>"retain digital bits indefinitely"</em> adalah <em>purge</em> (menghapus/mengosongkan data).'
    }
  ]
};

// ==========================================
// 6. APPLICATION STATE & CONTROLLER
// ==========================================

const AppState = {
  activeTab: 'panel-reading',
  drillingAnswers: {},
  listeningAnswers: {},
  grammarAnswers: {},
  examAnswers: {},
  examTimer: null,
  examSecondsLeft: 90 * 60,
  examStarted: false,
  examSubmitted: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initGrammarPuzzles();
  initAccordions();
  renderListeningDrills();
  renderGrammarDrills();
  renderDrillingQuestions();
  initExamTimerControls();
  renderExamQuestions();
  initOutlineBuilder();
  renderWritingModels();
});


// ================= Interactive Word Puzzle Engine =================
const GRAMMAR_PUZZLES_DATA = [
  {
    id: 'puz-simple',
    tokens: ['Both software engineers', 'and data analysts', 'tested', 'the neural network.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Simple Sentence: Subjek Majemuk ("Both software engineers and data analysts") + 1 Finite Verb ("tested") + Objek ("the neural network"). Kalimat ini tetap Simple Sentence karena hanya memiliki 1 klausa independen.'
  },
  {
    id: 'puz-compound',
    tokens: ['The autonomous drone returned to base,', 'for', 'its primary battery', 'depleted below ten percent.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Compound Sentence: [Klausa Mandiri 1] , [FANBOYS "for"] [Klausa Mandiri 2]. Tanda koma wajib persis sebelum konjungsi for (makna: sebab/because).'
  },
  {
    id: 'puz-complex',
    tokens: ['Although he was nervous,', 'he delivered', 'an exceptional presentation.'],
    targetOrder: [0, 1, 2],
    ruleInfo: 'Pola Complex Sentence (Pola A): Dependent Clause di awal ("Although he was nervous") WAJIB diikuti tanda koma sebelum Independent Clause ("he delivered an exceptional presentation").'
  },
  {
    id: 'puz-trap',
    tokens: ['I like coding,', 'and', 'I also design', 'intuitive websites.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Perbaikan Comma Splice: Menambahkan tanda koma dan Coordinating Conjunction FANBOYS ("and") berhasil menyatukan dua klausa mandiri menjadi Compound Sentence yang sah secara akademis.'
  }
];

const PuzzleState = {
  'puz-simple': { current: [], used: [] },
  'puz-compound': { current: [], used: [] },
  'puz-complex': { current: [], used: [] },
  'puz-trap': { current: [], used: [] }
};

function initGrammarPuzzles() {
  GRAMMAR_PUZZLES_DATA.forEach(puz => {
    renderPuzzleBank(puz.id);
  });
}

function renderPuzzleBank(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  if (!puz) return;

  const bankEl = document.getElementById('bank-' + puzId);
  const slotEl = document.getElementById('slot-' + puzId);
  const placeholderEl = document.getElementById('placeholder-' + puzId);
  if (!bankEl || !slotEl) return;

  const state = PuzzleState[puzId];

  // Render tokens in bank (shuffled view initially if needed, here we provide chips)
  let bankHtml = '';
  // Deterministic scramble indices: [2, 0, 3, 1]
  const scrambleOrder = [2, 0, 3, 1].filter(idx => idx < puz.tokens.length);
  // Any remaining indices
  for (let i = 0; i < puz.tokens.length; i++) {
    if (!scrambleOrder.includes(i)) scrambleOrder.push(i);
  }

  scrambleOrder.forEach(idx => {
    const isUsed = state.used.includes(idx);
    bankHtml += `<button type="button" class="puzzle-chip ${isUsed ? 'used' : ''}" onclick="clickPuzzleToken('${puzId}', ${idx})">${escapeHtml(puz.tokens[idx])}</button>`;
  });
  bankEl.innerHTML = bankHtml;

  // Render tokens in drop slot
  if (state.current.length === 0) {
    if (placeholderEl) placeholderEl.style.display = 'inline';
    slotEl.innerHTML = `<span class="puzzle-drop-placeholder" id="placeholder-${puzId}">Klik kata di bawah untuk memindahkannya ke sini...</span>`;
  } else {
    let slotHtml = '';
    state.current.forEach((idx, slotIdx) => {
      slotHtml += `<button type="button" class="puzzle-chip placed" onclick="removePuzzleToken('${puzId}', ${slotIdx})">${escapeHtml(puz.tokens[idx])} ✕</button>`;
    });
    slotEl.innerHTML = slotHtml;
  }
}

window.clickPuzzleToken = function(puzId, tokenIdx) {
  const state = PuzzleState[puzId];
  if (!state || state.used.includes(tokenIdx)) return;

  state.current.push(tokenIdx);
  state.used.push(tokenIdx);
  renderPuzzleBank(puzId);

  // Hide feedback when editing
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.removePuzzleToken = function(puzId, slotIdx) {
  const state = PuzzleState[puzId];
  if (!state || slotIdx >= state.current.length) return;

  const tokenIdx = state.current[slotIdx];
  state.current.splice(slotIdx, 1);
  state.used = state.used.filter(idx => idx !== tokenIdx);
  renderPuzzleBank(puzId);

  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.checkPuzzle = function(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  const state = PuzzleState[puzId];
  const fb = document.getElementById('feedback-' + puzId);
  if (!puz || !state || !fb) return;

  if (state.current.length !== puz.targetOrder.length) {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '⚠️ Kepingan kalimat belum lengkap. Masukkan semua kata ke dalam slot sebelum memeriksa.';
    return;
  }

  const isCorrect = state.current.every((val, idx) => val === puz.targetOrder[idx]);

  if (isCorrect) {
    fb.className = 'puzzle-feedback-badge show correct';
    fb.innerHTML = `🎉 <strong>Susunan Benar!</strong> ${puz.ruleInfo}`;
  } else {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '❌ <strong>Susunan belum tepat.</strong> Perhatikan kembali posisi subjek, predikat (finite verb), atau letak tanda koma dan konjungsi!';
  }
};

window.resetPuzzle = function(puzId) {
  const state = PuzzleState[puzId];
  if (!state) return;
  state.current = [];
  state.used = [];
  renderPuzzleBank(puzId);
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

// ================= Tab Navigation =================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanelId = btn.getAttribute('data-target');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        AppState.activeTab = targetPanelId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// ================= Accordions =================
function initAccordions() {
  const moduleHeaders = document.querySelectorAll('.module-header');
  moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.module-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

// ================= Render Dedicated Listening Arena =================
function renderListeningDrills() {
  const container = document.getElementById('listening-content-container');
  if (!container) return;

  let html = '';
  LISTENING_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="passage-card" style="background: var(--blue-soft); border-color: var(--blue);">
          <h4>🎧 Audio Transcript & Dialogue Scenario:</h4>
          <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 14px; line-height: 1.6;">${escapeHtml(drill.transcript)}</pre>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="lis-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">CLO 1</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleListeningAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="lis-expl-${q.id}">
            <strong>💡 Penjelasan & Transkrip yang Digarisbawahi:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.handleListeningAnswer = function(drillId, questionId, selectedIdx) {
  const drill = LISTENING_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`lis-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`lis-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai transkrip percakapan audio resmi dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Opsi yang Anda pilih kurang akurat. Pelajari rujukan materi dan bukti transkrip di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 1 & 2 (Listening Comprehension — Extracting Specific Details & Note Taking)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Bukti Transkrip:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.listeningAnswers[questionId] = isCorrect;
  updateListeningBadge();
};

function updateListeningBadge() {
  const badge = document.getElementById('listening-progress-badge');
  if (!badge) return;
  const total = LISTENING_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.listeningAnswers).length;
  const correct = Object.values(AppState.listeningAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render Dedicated Grammar Arena =================
function renderGrammarDrills() {
  const container = document.getElementById('grammar-content-container');
  if (!container) return;

  let html = '';
  GRAMMAR_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-mustard" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="gram-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.cat || 'CLO 2'}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleGrammarAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="gram-expl-${q.id}">
            <strong>💡 Pembahasan Kaidah Gramatika:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.handleGrammarAnswer = function(drillId, questionId, selectedIdx) {
  const drill = GRAMMAR_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`gram-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`gram-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Analisis tata bahasa Anda tepat.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Analisis struktur kalimat Anda keliru. Pelajari tabel materi dan kaidah di bawah:</div>';

    const isMeeting3 = drillId.includes('pos');
    const rpsModuleHtml = isMeeting3
      ? '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 3 (The Basic Parts of Speech & Sentence Components S-V-O-C-A)</div>'
      : '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 4 (Simple, Compound Sentences [FANBOYS], and Complex Sentences)</div>';

    const miniTableHtml = isMeeting3
      ? '<div class="expl-section-block"><strong>📌 Rujukan Cepat Komponen Kalimat (Meeting 3):</strong><br>S (Pelaku) + V (Finite Verb) + O (Objek Langsung/Tak Langsung) + C (Pelengkap Subjek/Objek) + A (Keterangan waktu/tempat/cara).</div>'
      : '<div class="expl-section-block"><strong>📌 Rujukan Cepat Aturan Koma & Konjungsi (Meeting 4):</strong><br>• Compound: <code>[Klausa Bebas 1] , [FANBOYS] [Klausa Bebas 2]</code><br>• Complex Pola A: <code>[Subordinator + Klausa] , [Klausa Utama]</code> (Wajib Koma!)<br>• Complex Pola B: <code>[Klausa Utama] [Subordinator + Klausa]</code> (Dilarang Koma!)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      ${miniTableHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Kaidah Gramatika:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.grammarAnswers[questionId] = isCorrect;
  updateGrammarBadge();
};

function updateGrammarBadge() {
  const badge = document.getElementById('grammar-progress-badge');
  if (!badge) return;
  const total = GRAMMAR_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.grammarAnswers).length;
  const correct = Object.values(AppState.grammarAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render 30 Reading Questions =================
function renderDrillingQuestions() {
  const container = document.getElementById('drilling-content-container');
  if (!container) return;

  let html = '';
  let totalDrillQs = 0;

  DRILLING_PASSAGES.forEach((passage) => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(passage.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(passage.source)}</span>
          </div>
        </div>
        
        <div class="passage-card">
          <h4>📖 Reading Text / Prompt:</h4>
          <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 14.5px; line-height: 1.6;">${escapeHtml(passage.text)}</pre>
        </div>

        <div class="drilling-questions-wrap">
    `;

    passage.questions.forEach((q) => {
      totalDrillQs++;
      html += `
        <div class="question-block" id="drill-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.clo}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleDrillAnswer('${passage.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="drill-expl-${q.id}">
            <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateDrillStats(totalDrillQs);
}

window.handleDrillAnswer = function(passageId, questionId, selectedIdx) {
  const passage = DRILLING_PASSAGES.find(p => p.id === passageId);
  if (!passage) return;
  const question = passage.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`drill-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const explCard = document.getElementById(`drill-expl-${questionId}`);
  if (explCard) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai kunci hijau resmi naskah dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Anda memilih opsi yang keliru. Silakan pelajari rujukan materi dosen dan kalimat bukti di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan: Pertemuan 5 & 6 (Reading Comprehension — Main Ideas, Detail Scanning & Text Evidence)</div>';

    explCard.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    explCard.classList.add('show');
  }

  AppState.drillingAnswers[questionId] = {
    selected: selectedIdx,
    correct: isCorrect
  };

  updateDrillStats();
};

function updateDrillStats(totalOverride) {
  const statsEl = document.getElementById('drill-progress-badge');
  if (!statsEl) return;

  const total = totalOverride || 30;
  const answeredKeys = Object.keys(AppState.drillingAnswers);
  const correctCount = answeredKeys.filter(k => AppState.drillingAnswers[k].correct).length;

  statsEl.textContent = `Dijawab: ${answeredKeys.length} / ${total} | Benar: ${correctCount}`;
}

// ================= Render Writing Models =================
function renderWritingModels() {
  const container = document.getElementById('writing-models-container');
  if (!container) return;

  let html = '';
  WRITING_TOPIC_MODELS.forEach((m, idx) => {
    html += `
      <div class="card" style="margin-bottom: 20px;">
        <div class="card-header">
          <div>
            <h4 class="card-title" style="font-size: 18px;">Contoh Paragraf Akademik ${idx + 1}: ${escapeHtml(m.topic)}</h4>
            <span class="badge badge-teal" style="margin-top: 4px;">Panjang: ${m.wordCount} Kata (Standar Dosen: 100–150 Kata)</span>
          </div>
        </div>

        <div class="passage-card" style="background: var(--mustard-soft); border-color: var(--mustard); font-size: 15px;">
          ${escapeHtml(m.modelParagraph)}
        </div>

        <h5 style="margin: 12px 0 6px; font-family: var(--display); font-size: 14px;">Bedah Struktur Jenis Kalimat:</h5>
        <div class="rubrik-table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width: 180px;">Komponen Kalimat</th>
                <th>Kalimat dalam Paragraf</th>
              </tr>
            </thead>
            <tbody>
              ${m.analysis.map(a => `
                <tr>
                  <td><strong>${escapeHtml(a.type)}</strong></td>
                  <td>${escapeHtml(a.text)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= 90-Minute Exam Simulator =================
function initExamTimerControls() {
  const startBtn = document.getElementById('btn-timer-toggle');
  const resetBtn = document.getElementById('btn-timer-reset');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (!AppState.examStarted) {
        startExamTimer();
        startBtn.textContent = '⏸️ Pause Timer';
        startBtn.classList.remove('badge-mustard');
        startBtn.classList.add('badge-blue');
      } else {
        pauseExamTimer();
        startBtn.textContent = '▶️ Lanjutkan Ujian';
        startBtn.classList.remove('badge-blue');
        startBtn.classList.add('badge-mustard');
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Ulangi simulasi ujian dari awal (reset waktu 90 menit)?')) {
        resetExam();
      }
    });
  }
}

function startExamTimer() {
  AppState.examStarted = true;
  if (AppState.examTimer) clearInterval(AppState.examTimer);

  AppState.examTimer = setInterval(() => {
    if (AppState.examSecondsLeft > 0) {
      AppState.examSecondsLeft--;
      renderTimerDisplay();
    } else {
      clearInterval(AppState.examTimer);
      alert('⏰ WAKTU UJIAN 90 MENIT HABIS! Ujian otomatis dikumpulkan.');
      submitUTSExam();
    }
  }, 1000);
}

function pauseExamTimer() {
  AppState.examStarted = false;
  if (AppState.examTimer) {
    clearInterval(AppState.examTimer);
    AppState.examTimer = null;
  }
}

function resetExam() {
  pauseExamTimer();
  AppState.examSecondsLeft = 90 * 60;
  AppState.examAnswers = {};
  AppState.examSubmitted = false;
  renderTimerDisplay();

  const startBtn = document.getElementById('btn-timer-toggle');
  if (startBtn) startBtn.textContent = '▶️ Mulai Simulasi 90 Menit';

  const resultCard = document.getElementById('uts-result-card');
  if (resultCard) resultCard.classList.remove('show');

  // Re-enable options
  const buttons = document.querySelectorAll('.exam-opt-btn');
  buttons.forEach(b => {
    b.disabled = false;
    b.classList.remove('correct', 'wrong', 'selected');
    b.style.background = 'var(--paper)';
    b.style.fontWeight = 'normal';
  });

  const expls = document.querySelectorAll('.exam-expl');
  expls.forEach(e => e.classList.remove('show'));
}

function renderTimerDisplay() {
  const timerEl = document.getElementById('uts-timer-display');
  if (!timerEl) return;

  const m = Math.floor(AppState.examSecondsLeft / 60);
  const s = AppState.examSecondsLeft % 60;
  timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  if (AppState.examSecondsLeft <= 10 * 60) {
    timerEl.classList.add('danger');
  } else {
    timerEl.classList.remove('danger');
  }
}

// Render UTS Simulation Questions
function renderExamQuestions() {
  // 1. Listening
  const listeningContainer = document.getElementById('exam-listening-container');
  if (listeningContainer) {
    let html = '';
    UTS_EXAM_DATA.listening.forEach((q) => {
      html += createExamQuestionHTML(q, 'listening');
    });
    listeningContainer.innerHTML = html;
  }

  // 2. Grammar
  const grammarContainer = document.getElementById('exam-grammar-container');
  if (grammarContainer) {
    let html = '';
    UTS_EXAM_DATA.grammar.forEach((q) => {
      html += createExamQuestionHTML(q, 'grammar');
    });
    grammarContainer.innerHTML = html;
  }

  // 3. Reading
  const readingContainer = document.getElementById('exam-reading-container');
  if (readingContainer) {
    let html = '';
    UTS_EXAM_DATA.reading.forEach((q) => {
      html += createExamQuestionHTML(q, 'reading');
    });
    readingContainer.innerHTML = html;
  }
}

function createExamQuestionHTML(q, section) {
  let extraBox = '';
  if (q.audioSim) {
    extraBox = `
      <div class="passage-card" style="background: var(--blue-soft); border-color: var(--blue); margin-bottom: 12px;">
        <strong style="display:block; margin-bottom: 4px; font-family: var(--mono); font-size: 12px; color: #1e556e;">🎧 AUDIO TRANSCRIPT SIMULATION:</strong>
        <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.5;">${escapeHtml(q.audioSim)}</pre>
      </div>
    `;
  } else if (q.passage) {
    extraBox = `
      <div class="passage-card" style="margin-bottom: 12px;">
        <strong style="display:block; margin-bottom: 4px; font-family: var(--mono); font-size: 12px;">📖 READING EXCERPT:</strong>
        <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.5;">${escapeHtml(q.passage)}</pre>
      </div>
    `;
  }

  let optionsHTML = '';
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    optionsHTML += `
      <button type="button" class="opt-btn exam-opt-btn" id="opt-${q.id}-${idx}" onclick="selectExamAnswer('${q.id}', ${idx}, '${section}')">
        <span class="opt-letter">${letter}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `;
  });

  return `
    <div class="question-block" id="exam-q-${q.id}">
      ${extraBox}
      <div class="q-header">
        <span class="q-text">${escapeHtml(q.q)}</span>
        <div style="display:flex; gap:6px; align-items:center;">
          <span class="q-clo-badge">${q.clo}</span>
          <span class="badge badge-mustard" style="font-size:11px; padding:2px 8px;">${q.pts} pts</span>
        </div>
      </div>
      <div class="options-list">
        ${optionsHTML}
      </div>
      <div class="explanation-card exam-expl" id="expl-${q.id}">
        <strong>💡 Pembahasan Dosen (Underlined Phrase):</strong>
        <div style="margin-top: 4px; line-height: 1.5;">${q.expl}</div>
      </div>
    </div>
  `;
}

window.selectExamAnswer = function(questionId, selectedIdx, section) {
  if (AppState.examSubmitted) return;

  AppState.examAnswers[questionId] = {
    selected: selectedIdx,
    section: section
  };

  const box = document.getElementById(`exam-q-${questionId}`);
  if (box) {
    const buttons = box.querySelectorAll('.exam-opt-btn');
    buttons.forEach((b, idx) => {
      if (idx === selectedIdx) {
        b.style.borderColor = 'var(--ink)';
        b.style.background = 'var(--mustard-soft)';
        b.style.fontWeight = '700';
      } else {
        b.style.borderColor = 'var(--ink)';
        b.style.background = 'var(--paper)';
        b.style.fontWeight = 'normal';
      }
    });
  }

  updateLJKSummary();
};

function updateLJKSummary() {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const badge = document.getElementById('exam-ljk-counter');
  if (badge) {
    badge.textContent = `LJK Terisi: ${answeredCount} / 17 Soal MC`;
  }
}

// ================= Writing Outline & Word Count Evaluator =================
function initOutlineBuilder() {
  const tsInput = document.getElementById('outline-ts');
  const sd1Input = document.getElementById('outline-sd1');
  const sd2Input = document.getElementById('outline-sd2');
  const sd3Input = document.getElementById('outline-sd3');
  const csInput = document.getElementById('outline-cs');
  const fullParagraphArea = document.getElementById('full-paragraph-area');

  const inputs = [tsInput, sd1Input, sd2Input, sd3Input, csInput];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        evaluateWritingRubric();
        syncFullParagraphDraft();
      });
    }
  });

  if (fullParagraphArea) {
    fullParagraphArea.addEventListener('input', updateParagraphWordCounter);
  }

  const checkboxes = document.querySelectorAll('.checklist-item input');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', evaluateWritingRubric);
  });
}

function syncFullParagraphDraft() {
  const ts = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1 = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2 = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3 = document.getElementById('outline-sd3')?.value.trim() || '';
  const cs = document.getElementById('outline-cs')?.value.trim() || '';

  const area = document.getElementById('full-paragraph-area');
  if (area && !area.getAttribute('data-manual-edit')) {
    const sentences = [ts, sd1, sd2, sd3, cs].filter(Boolean);
    area.value = sentences.join(' ');
    updateParagraphWordCounter();
  }
}

// ================= Academic Word Counter Engine =================
function countAcademicWords(text) {
  if (!text || typeof text !== 'string') return 0;
  // Normalize whitespace (including non-breaking spaces, zero-width chars, newlines, tabs)
  const normalized = text
    .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    .trim();
  if (!normalized) return 0;
  // Match genuine academic words: letters/numbers with optional internal hyphens/apostrophes
  // Standalone symbols, punctuation, bullets, or multiple spaces/newlines are never counted
  const matches = normalized.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g);
  return matches ? matches.length : 0;
}

function updateParagraphWordCounter() {
  const area = document.getElementById('full-paragraph-area');
  const badge = document.getElementById('paragraph-word-counter');
  if (!area) return;

  // Mark as manually edited so auto-sync doesn't overwrite user's work
  area.setAttribute('data-manual-edit', 'true');

  const text = area.value || '';
  const words = countAcademicWords(text);

  // Compute detailed analytics
  const cleanNoSpace = text.replace(/\s+/g, '');
  const charsNoSpace = cleanNoSpace.length;
  const charsTotal = text.length;

  // Sentences: separated by ., ?, ! followed by space or end of string
  const sentenceMatches = text.trim().match(/[^.!?]+[.!?]+(\s|$)/g);
  const sentences = sentenceMatches ? sentenceMatches.length : (words > 0 ? 1 : 0);
  const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : 0;

  // Update DOM elements if present
  const exactNumEl = document.getElementById('counter-exact-num');
  if (exactNumEl) exactNumEl.textContent = words;

  const mWords = document.getElementById('m-words');
  if (mWords) mWords.textContent = words;

  const mCharsNoSpace = document.getElementById('m-chars-nospace');
  if (mCharsNoSpace) mCharsNoSpace.textContent = charsNoSpace;

  const mCharsTotal = document.getElementById('m-chars-total');
  if (mCharsTotal) mCharsTotal.textContent = charsTotal;

  const mSentences = document.getElementById('m-sentences');
  if (mSentences) mSentences.textContent = sentences;

  const mAvgSentence = document.getElementById('m-avg-sentence');
  if (mAvgSentence) mAvgSentence.textContent = avgWordsPerSentence;

  // Progress Bar (0 to 150 words = 0% to 100%)
  const progressBar = document.getElementById('counter-progress-bar');
  const progressPercent = Math.min(100, Math.round((words / 150) * 100));
  if (progressBar) {
    progressBar.style.width = `${progressPercent}%`;
  }

  // Status message & badge styling
  const feedbackEl = document.getElementById('counter-feedback-msg');

  if (words === 0) {
    if (badge) {
      badge.textContent = '⚪ Belum Ada Teks (Target: 100–150 Kata)';
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-info';
      feedbackEl.innerHTML = 'ℹ️ Masukkan draf paragraf Anda. Sistem menghitung token kata akademik murni (tidak menghitung spasi atau enter berulang).';
    }
  } else if (words < 100) {
    const diff = 100 - words;
    if (badge) {
      badge.textContent = `⚠️ ${words} Kata (Kurang ${diff} kata lagi)`;
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-warning';
      feedbackEl.innerHTML = `⚠️ <strong>Kurang ${diff} kata lagi</strong> untuk mencapai standar minimal 100 kata. Kembangkan supporting details Anda.`;
    }
  } else if (words <= 150) {
    if (badge) {
      badge.textContent = `✅ ${words} Kata (Optimal 100–150 Kata)`;
      badge.className = 'badge badge-teal';
    }
    if (progressBar) progressBar.style.background = 'var(--teal)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-success';
      feedbackEl.innerHTML = `✅ <strong>Sempurna!</strong> Panjang paragraf (${words} kata) memenuhi standar resmi dosen perkuliahan (100–150 kata).`;
    }
  } else {
    const over = words - 150;
    if (badge) {
      badge.textContent = `⛔ ${words} Kata (Kelebihan ${over} kata)`;
      badge.className = 'badge badge-tomato';
    }
    if (progressBar) progressBar.style.background = 'var(--tomato)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-danger';
      feedbackEl.innerHTML = `⛔ <strong>Melebihi batas ${over} kata!</strong> Ringkas kalimat Anda agar tidak melampaui batas 150 kata.`;
    }
  }
}

// Topic Selection & Studio Helpers
let currentSelectedTopicIdx = 0;

window.selectWritingTopic = function(idx) {
  currentSelectedTopicIdx = idx;
  const pills = document.querySelectorAll('.topic-pill');
  pills.forEach((p, i) => {
    if (i === idx) p.classList.add('active');
    else p.classList.remove('active');
  });
};

window.loadSelectedTopicModel = function() {
  const model = WRITING_TOPIC_MODELS[currentSelectedTopicIdx] || WRITING_TOPIC_MODELS[0];
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  area.value = model.modelParagraph;
  updateParagraphWordCounter();
};

window.copyParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area || !area.value.trim()) {
    alert('Area tulisan masih kosong.');
    return;
  }
  navigator.clipboard.writeText(area.value.trim()).then(() => {
    alert('Draf paragraf berhasil disalin ke clipboard!');
  }).catch(() => {
    area.select();
    document.execCommand('copy');
    alert('Draf paragraf berhasil disalin!');
  });
};

window.clearParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  if (confirm('Yakin ingin membersihkan area tulisan?')) {
    area.value = '';
    updateParagraphWordCounter();
  }
};

function evaluateWritingRubric() {
  let writingScore = 0;
  const tsVal = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1Val = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2Val = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3Val = document.getElementById('outline-sd3')?.value.trim() || '';
  const csVal = document.getElementById('outline-cs')?.value.trim() || '';

  // 1. Topic Sentence & Controlling Idea (max 5 pts)
  if (tsVal.length > 25) {
    writingScore += 5;
  } else if (tsVal.length > 10) {
    writingScore += 3;
  }

  // 2. Supporting Details 1-3 (max 6 pts: 2 pts each)
  if (sd1Val.length > 15) writingScore += 2;
  if (sd2Val.length > 15) writingScore += 2;
  if (sd3Val.length > 15) writingScore += 2;

  // 3. Concluding Sentence (max 4 pts)
  if (csVal.length > 20) {
    writingScore += 4;
  } else if (csVal.length > 8) {
    writingScore += 2;
  }

  // 4. Checklist Self-Audit (max 5 pts)
  const cbChecked = document.querySelectorAll('.checklist-item input:checked').length;
  writingScore += Math.min(5, Math.round((cbChecked / 5) * 5));

  writingScore = Math.min(20, writingScore);

  const scoreBadge = document.getElementById('writing-live-score');
  if (scoreBadge) {
    scoreBadge.textContent = `${writingScore} / 20 pts`;
  }

  return writingScore;
}

// ================= Submit UTS Exam =================
window.submitUTSExam = function() {
  if (AppState.examSubmitted) {
    alert('Ujian telah dikumpulkan. Silakan lihat hasil evaluasi di atas.');
    return;
  }

  pauseExamTimer();
  AppState.examSubmitted = true;

  let listeningScore = 0;
  let grammarScore = 0;
  let readingScore = 0;

  // Grade Listening (25 pts)
  UTS_EXAM_DATA.listening.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) listeningScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Grammar (20 pts)
  UTS_EXAM_DATA.grammar.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) grammarScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Reading (35 pts)
  UTS_EXAM_DATA.reading.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) readingScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Writing (20 pts)
  const writingScore = evaluateWritingRubric();

  const totalScore = listeningScore + grammarScore + readingScore + writingScore;

  // Render Result Card
  renderExamResultCard(totalScore, listeningScore, grammarScore, readingScore, writingScore);
};

function revealQuestionResult(q, userAns) {
  const box = document.getElementById(`exam-q-${q.id}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.exam-opt-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    } else if (userAns && idx === userAns.selected) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`expl-${q.id}`);
  if (expl) expl.classList.add('show');
}

function renderExamResultCard(total, lScore, gScore, rScore, wScore) {
  const resultCard = document.getElementById('uts-result-card');
  if (!resultCard) return;

  let predikat = 'A';
  let badgeClass = 'badge-teal';

  if (total >= 80) {
    predikat = 'A (Sangat Baik / Lulus Prima)';
    badgeClass = 'badge-teal';
  } else if (total >= 75) {
    predikat = 'AB (Baik Sekali)';
    badgeClass = 'badge-mustard';
  } else if (total >= 70) {
    predikat = 'B (Baik)';
    badgeClass = 'badge-blue';
  } else if (total >= 60) {
    predikat = 'C (Cukup / Perlu Review FANBOYS & Skimming)';
    badgeClass = 'badge-plum';
  } else {
    predikat = 'D / E (Perlu Drilling Intensif Ulang)';
    badgeClass = 'badge-tomato';
  }

  document.getElementById('res-total-score').textContent = `${total} / 100`;
  const predikatEl = document.getElementById('res-predikat');
  predikatEl.textContent = predikat;
  predikatEl.className = `result-badge-predikat ${badgeClass}`;

  document.getElementById('res-clo1').textContent = `${lScore} / 25 pts`;
  document.getElementById('res-clo2').textContent = `${gScore} / 20 pts`;
  document.getElementById('res-clo3').textContent = `${rScore} / 35 pts`;
  document.getElementById('res-clo4').textContent = `${wScore} / 20 pts`;

  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Utility: HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
