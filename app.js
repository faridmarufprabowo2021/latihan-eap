/**
 * Ruang EAP — Application Logic & Question Engine
 * Universitas Muhammadiyah Surakarta — Teknik Informatika
 * 
 * 100% Sesuai Dokumen & Kunci Resmi Dosen:
 * READING Drilling ANS - Word (Questions 1 - 30 Lengkap dengan Kunci Hijau & Underline)
 */

// ==========================================
// 1. DOKUMEN RESMI DOSEN: 30 SOAL DRILLING LENGKAP
// Kunci jawaban disinkronkan 100% dengan highlight hijau dosen
// ==========================================

const DRILLING_PASSAGES = [
  // PASSAGE 1: QUESTIONS 1 - 4
  {
    id: 'p-laura',
    title: 'Questions 1–4 refer to the following email.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q1–Q4)',
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. To accept the internship.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I would like to accept the terms outlined in the offer</u>, but I\'d appreciate the opportunity to speak with you about altering the start date for the role."</em><br>Laura secara eksplisit menulis untuk menerima tawaran magang tersebut.'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. She is finishing fellowship program.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I\'m currently finishing up my fellowship program at the university</u> and will be taking exams until May 27, 2025, so I may need accommodations in this respect."</em>'
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
        answer: 2, // C (Hijau Dosen)
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. Reply to schedule a conversation about the start date.<br><strong>Penjelasan Logis:</strong><br>Karena Laura menanyakan kesediaan jadwal obrolan di akhir pekan, tindakan paling wajar dan profesional dari pihak HRD (Ms. Longueview) adalah membalas email untuk menyepakati waktu perbincangan terkait tanggal mulai magang.'
      }
    ]
  },

  // PASSAGE 2: QUESTIONS 5 - 7
  {
    id: 'p-chart',
    title: 'Questions 5–7 refer to the following chart.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q5–Q7)',
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
        answer: 2, // C (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): C. Eat five servings of vegetables.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Vegetables (Carrots, Tomatoes, spinach) : 5</u>"</em> servings per day.'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. Cheese.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Dairy Products (Milk and Milk Products, Eggs)</u>"</em>.<br>Keju (cheese) adalah produk olahan susu murni (dairy product).'
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. Rice.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Grains (bread, Cereal, Rice)</u>"</em>.<br>Beras/nasi (rice) masuk ke kelompok biji-bijian (grain group).'
      }
    ]
  },

  // PASSAGE 3: QUESTIONS 8 - 11
  {
    id: 'p-listings',
    title: 'Questions 8–11 refer to the following List.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q8–Q11)',
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
        options: [
          'Four',
          'Six',
          'Five',
          'Seven'
        ],
        answer: 1, // B (Kunci Logis: 6 nomor berawalan 541)
        expl: 'Kunci Jawaban: B. Six.<br><strong>Analisis Kode Area yang Digarisbawahi:</strong><br>Perhatikan awalan kode telepon pada daftar:<br>1. Mary Craig: <u>541</u>-0987<br>2. Samuel Craig: <u>541</u>-3211<br>3. Tim Layton: <u>541</u>-2345<br>4. R. Mc Grath: <u>541</u>-8765<br>5. Walter Meyer: <u>541</u>-3211<br>6. Patrick Ryan: <u>541</u>-9087<br>Ada <strong>6 nomor</strong> yang memiliki kode area yang sama (541), sedangkan Wm. Lambert memiliki kode area berbeda (654).'
      },
      {
        id: 'drill-9',
        num: 9,
        clo: 'CLO 3',
        q: '9. From the lists, it is obviously described that …lives in different area from others.',
        options: [
          'Craig, Samuel',
          'Lambert, Wm.',
          'Mc Grath, R.',
          'Layton, Tim'
        ],
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. Lambert, Wm.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br><em>"<u>Lambert, Wm.  4567 Center St.  654-9087</u>"</em>.<br>Semua kontak lain memiliki awalan telepon 541, hanya Wm. Lambert yang memiliki awalan 654 dan jalan Center St.'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. Samuel Craig and Walter Meyer.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br><em>"Craig, Samuel : <u>1346 Bear Ct</u>   <u>541-3211</u>"</em><br><em>"Meyer, Walter : <u>1346 Bear Ct</u>   <u>541-3211</u>"</em>.<br>Keduanya tercatat pada alamat jalan dan nomor telepon yang persis sama.'
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. Mary Craig and Tim Layton.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br><em>"Craig, Mary : <u>1245 Grayson Ln.</u>"</em> dan <em>"Layton, Tim : <u>1235 Grayson Ln</u>"</em>.<br>Keduanya berada di jalan yang sama dengan nomor urut rumah yang berdekatan (tetangga / neighbors).'
      }
    ]
  },

  // PASSAGE 4: QUESTIONS 12 - 15
  {
    id: 'p-vacancy',
    title: 'Questions 12–15 refer to the following text.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q12–Q15)',
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
        options: [
          'Wisma Emha',
          'A job vacancy',
          'A senior secretary',
          'An application center'
        ],
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. A job vacancy.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br><em>"<u>URGENTLY REQUIRED: Secretary</u>"</em>.<br>Teks di atas mengumumkan kebutuhan tenaga kerja / lowongan pekerjaan (job vacancy) untuk posisi sekretaris.'
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
        answer: 3, // D (Hijau Dosen Resmi!)
        expl: 'Kunci Resmi Dosen (Hijau): D. application letter should be sent ten days after this ad.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br>1. <em>"<u>Min. 5 years of work experience</u>"</em> (syarat tertera)<br>2. <em>"<u>Computer literate (min. Word, Excel, Internet)</u>"</em> (syarat tertera)<br>3. <em>"<u>Good command of English (oral and written)</u>"</em> (syarat tertera)<br>4. Pada teks tertulis: <em>"submit your complete application... <u>not more than 10 days after this ads</u>"</em> (maksimal dalam waktu 10 hari, bukan dikirim 10 hari setelahnya / ten days after). Selain itu batas waktu adalah instruksi administratif, bukan kualifikasi syarat pelamar (EXCEPT).'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. The skill to communicate in English is required.<br><strong>Bukti Pendukung yang Digarisbawahi:</strong><br><em>"<u>Good command of English (oral and written)</u>"</em>.<br>Keterampilan bahasa Inggris aktif lisan dan tulisan diwajibkan bagi pelamar.'
      },
      {
        id: 'drill-15',
        num: 15,
        clo: 'CLO 3',
        q: '15. The word “reputable” in “Female, graduated from a reputable university” (Line 2) has the closest meaning to the word ….',
        options: [
          'famous',
          'respectable',
          'reliable',
          'valid'
        ],
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. respectable.<br><strong>Makna Kontekstual yang Digarisbawahi:</strong><br>Kata <em>"reputable"</em> berarti universitas yang memiliki nama baik, terpandang, dan diakui secara luas (sinonim terdekat: <strong>respectable</strong>).'
      }
    ]
  },

  // PASSAGE 5: QUESTIONS 16 - 18
  {
    id: 'p-gregor',
    title: 'Questions 16–18 refer to the following email.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q16–Q18)',
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
        options: [
          'Sunday',
          'Monday',
          'Friday',
          'Saturday'
        ],
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. Saturday.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>Saturday is better for me</u> because I\'m meeting my parents on Sunday."</em>'
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
        answer: 0, // A (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): A. Because he is meeting his parents on Sunday.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"Saturday is better for me <u>because I\'m meeting my parents on Sunday</u>."</em>'
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. The food she likes or does not like.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>Let me know if there\'s anything you do/don\'t like to eat.</u>"</em>'
      }
    ]
  },

  // PASSAGE 6: QUESTIONS 19 - 22
  {
    id: 'p-jarvis',
    title: 'Questions 19–22 refer to the following Advertisement.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q19–Q22)',
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. To advertise Jarvis cleaning products.<br><strong>Tujuan Utama yang Digarisbawahi:</strong><br>Teks ini memperkenalkan manfaat produk pembersih Jarvis Miracle Cleaner dan varian Deluxe-nya untuk membujuk konsumen agar membelinya di supermarket/drugstore (mengiklankan produk).'
      },
      {
        id: 'drill-20',
        num: 20,
        clo: 'CLO 3',
        q: '20. How long has Jarvis Miracle Cleaner been the number 1 cleaning product in American industry?',
        options: [
          '10 years',
          '20 years',
          '40 years',
          '50 years'
        ],
        answer: 2, // C (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): C. 40 years.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry</u>..."</em>'
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. At supermarkets and drugstores.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"Bath products are now available <u>at all good supermarkets and drugstores</u>."</em>'
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
        answer: 0, // A (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): A. Jarvis Miracle Cleaner.<br><strong>Rujukan Pronoun yang Digarisbawahi:</strong><br><em>"Jarvis Miracle Cleaner is the one product... <u>Its unique patented formula</u> allows you to..."</em>.<br>Kata ganti kepemilikan tunggal <em>"Its"</em> merujuk langsung pada subjek <strong>Jarvis Miracle Cleaner</strong>.'
      }
    ]
  },

  // PASSAGE 7: QUESTIONS 23 - 25
  {
    id: 'p-airport',
    title: 'Questions 23–25 refer to the following airport notice.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q23–Q25)',
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
        options: [
          '5 kg',
          '10 kg',
          '15 kg',
          '20 kg'
        ],
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. 10 kg.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"It must be no bigger than 55cm x 22cm x 35cm and <u>weigh no more than 10kg</u>."</em>'
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
        answer: 2, // C (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): C. When they buy them after passing security.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"Liquids in bottles bigger than 100ml are allowed on board <u>if you buy them in the airport shops after you\'ve passed security</u>."</em>'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. Because staff will put the bag in the hold.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"If your bag is too big or too heavy... <u>Staff will put it in the hold for you and you will have to pay extra</u>."</em>'
      }
    ]
  },

  // PASSAGE 8: QUESTIONS 26 - 30
  {
    id: 'p-mit',
    title: 'Questions 26–30 refer to the following News.',
    source: 'Lecturer Document: READING Drilling ANS - Word (Q26–Q30)',
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
        answer: 1, // B (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): B. MIT’s new framework to design complex systems under uncertainty.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty</u>."</em>'
      },
      {
        id: 'drill-27',
        num: 27,
        clo: 'CLO 3',
        q: '27. According to the text, what unpredictable factor can affect drone performance?',
        options: [
          'Motor type',
          'Battery price',
          'Weather conditions',
          'Designer preferences'
        ],
        answer: 2, // C (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): C. Weather conditions.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"...affected by unpredictable factors, <u>like changing weather along the drone\'s route</u>."</em>'
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
        answer: 3, // D (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): D. Helping engineers build more reliable and robust complex systems.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"Ultimately, this framework could <u>help engineers develop complex systems... that are more robust and reliable</u> in the face of real-world unpredictability"</em>.'
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
        answer: 0, // A (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): A. Only best-case and worst-case scenarios.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"...giving designers more information than many existing approaches which, at most, <u>can usually only model best-case and worst-case scenarios</u>."</em>'
      },
      {
        id: 'drill-30',
        num: 30,
        clo: 'CLO 3',
        q: '30. The word Their in “Their technique captures the likelihood of many outcomes and trade-offs” refers to:',
        options: [
          'The MIT researchers',
          'The batteries',
          'The motors',
          'The designers'
        ],
        answer: 0, // A (Hijau Dosen)
        expl: 'Kunci Resmi Dosen (Hijau): A. The MIT researchers.<br><strong>Rujukan Pronoun yang Digarisbawahi:</strong><br><em>"<u>MIT researchers</u> developed a new framework... <u>Their technique</u> captures the likelihood of many outcomes..."</em>.<br>Kata ganti posesif <em>"Their"</em> mengacu pada subjek pelaku penelitian di kalimat sebelumnya, yaitu <strong>The MIT researchers</strong>.'
      }
    ]
  }
];

// ==========================================
// 2. UTS FULL SIMULATION QUESTION DATA (100 PTS)
// (Listening 25 pts, Grammar 20 pts, Reading 35 pts, Writing 20 pts)
// ==========================================

const UTS_EXAM_DATA = {
  // SECTION 1: LISTENING (25 pts / 5 Qs @ 5 pts)
  listening: [
    {
      id: 'uts-l1',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[ACADEMIC LECTURE EXCERPT — COMPUTER SCIENCE]
Professor: "Good morning class. Today we are initiating our unit on algorithmic optimization. Now, many novice programmers assume optimization simply means shortening lines of code. However, our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time, especially in high-throughput database systems. Therefore, please observe this benchmark graph..."`,
      q: '1. What is the primary purpose of the professor\'s lecture?',
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
Dimas: "I see. I took OOP last semester and received an A-, but my grade sheet hasn\'t updated on the online portal yet."
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
Aisha: "So for our research outline on cloud storage security, we already have our topic sentence and two supporting arguments regarding data encryption and redundancy. What we\'re lacking is empirical statistical evidence to support our second claim."
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

  // SECTION 2: STRUCTURE & GRAMMAR (20 pts / 5 Qs @ 4 pts)
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
      expl: '<strong>Analisis S-V-O-C-A:</strong> Bagian <em>"carefully reviewed"</em> adalah <strong>Verb / Predicate (V)</strong> yang menunjukkan tindakan verba utama dalam kalimat.'
    },
    {
      id: 'uts-g2',
      pts: 4,
      clo: 'CLO 2',
      q: '7. Which coordinating conjunction (FANBOYS) logically completes the compound sentence?\n"The database server experienced a sudden voltage drop, _____ the automated backup protocol instantly switched power to the auxiliary generator."',
      options: [
        'for',
        'so',
        'nor',
        'but'
      ],
      answer: 1,
      expl: '<strong>Aturan FANBOYS:</strong> Konjungsi <strong>"so"</strong> menyatakan konsekuensi/akibat logis (hasil dari jatuhnya tegangan server).'
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
      expl: '<strong>Aturan Koma Kalimat Kompleks:</strong> Jika Dependent Clause (diawali subordinating conjunction <em>"Although"</em>) diletakkan di depan, maka <strong>WAJIB</strong> diberi tanda koma sebelum Independent Clause.'
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
      expl: '<strong>Analisis Jenis Kalimat:</strong> Kalimat ini terdiri dari 2 Independent Clauses dihubungkan oleh <em>"but"</em> (Compound) dan klausa kedua memuat Dependent Relative Clause <em>"that human analysts frequently overlook"</em> (Complex). Gabungannya adalah <strong>Compound-Complex Sentence</strong>.'
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
      expl: '<strong>Sentence Fragment:</strong> Opsi B adalah klausa dependen (diawali <em>"Because"</em>) yang berdiri sendiri tanpa induk kalimat (Independent Clause), sehingga tidak utuh.'
    }
  ],

  // SECTION 3: READING COMPREHENSION (35 pts / 7 Qs @ 5 pts)
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
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>Staff will put it in the hold for you and you will have to pay extra</u>"</em> jika ukuran/bobot bagasi melebihi batas.'
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
      expl: '<strong>Materi Dosen Pertemuan 5 & 7:</strong> Topic Sentence wajib memuat <strong>Specific Topic</strong> + <strong>Controlling Idea</strong> yang membatasi fokus paragraf.'
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
      expl: '<strong>Rujukan Pronoun Soal Dosen:</strong> Kata <em>"Its"</em> merujuk langsung ke <strong>Jarvis Miracle Cleaner</strong>.'
    },
    {
      id: 'uts-r5',
      pts: 5,
      clo: 'CLO 3',
      passage: `Corporate Recruitment Notice:
"A multinational renewable energy consortium is recruiting a Lead Cybersecurity Analyst. Candidates must possess a Bachelor\'s degree in Computer Science or Information Technology from a reputable academic institution, alongside verifiable credentials in ethical hacking."`,
      q: '15. The word "reputable" in the context of the recruitment notice is closest in meaning to:',
      options: [
        'inexpensive',
        'respectable and widely recognized',
        'geographically adjacent',
        'recently established'
      ],
      answer: 1,
      expl: '<strong>Kunci Resmi Dosen:</strong> <em>reputable = respectable</em> (terpandang, bereputasi baik).'
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
      expl: '<strong>Fungsi Outlining:</strong> Memetakan struktur makro teks (main claims, supporting rationale, and organizational patterns).'
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
      expl: '<strong>Contextual Clue:</strong> Berlawanan dengan <em>"retain digital bits indefinitely"</em>, memori volatil akan <em>purge</em> (menghapus/mengosongkan data seketika saat listrik mati).'
    }
  ]
};

// ==========================================
// 3. APPLICATION STATE & CONTROLLER
// ==========================================

const AppState = {
  activeTab: 'panel-drilling',
  drillingAnswers: {},
  examAnswers: {},
  examTimer: null,
  examSecondsLeft: 90 * 60, // 90 mins
  examStarted: false,
  examSubmitted: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initAccordions();
  renderDrillingQuestions();
  initExamTimerControls();
  renderExamQuestions();
  initOutlineBuilder();
});

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

// ================= Accordion Modules =================
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

// ================= Render Drilling Questions =================
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

// Handle Drilling Answer Selection
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

  // Visual selection
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

// ================= Writing Outline Builder & Rubric =================
function initOutlineBuilder() {
  const tsInput = document.getElementById('outline-ts');
  const sd1Input = document.getElementById('outline-sd1');
  const sd2Input = document.getElementById('outline-sd2');
  const sd3Input = document.getElementById('outline-sd3');
  const csInput = document.getElementById('outline-cs');

  const inputs = [tsInput, sd1Input, sd2Input, sd3Input, csInput];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', evaluateWritingRubric);
    }
  });

  const checkboxes = document.querySelectorAll('.checklist-item input');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', evaluateWritingRubric);
  });
}

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
