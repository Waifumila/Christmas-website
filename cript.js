// Bible verses array
const bibleVerses = [
    "ईश्वरले संसारलाई यति माया गर्नुभयो कि उहाँले आफ्नो एक मात्र छोरा दिनुभयो, जसले विश्वास गर्ने हरेक व्यक्ति च्यापने छैन, तर अनन्त जीवन पाउँछ। (युहन्ना 3:16) For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life. (John 3:16)" ,
    "तपाईंको मुटुमा शान्ति राख्नुहोस्। (यूहन्ना 14:27) Peace I leave with you; my peace I give you. (John 14:27)" ,
    "ईश्वर सँग सबै कुरा सम्भव छ। (मत्ती 19:26) With God, all things are possible. (Matthew 19:26)" ,
    "धन्य छ ती जो शान्ति बनाउँछन्, किनकि तिनीहरू ईश्वरको पुत्र भनिनेछन्। (मत्ती 5:9) Blessed are the peacemakers, for they will be called children of God. (Matthew 5:9)" ,
    "आज यो शहरमा तपाईंका लागि उद्धारको एक बचाउने आएका छन्। (लूका 2:11) Today in the town of David a Savior has been born to you; he is the Messiah, the Lord. (Luke 2:11)" ,
    "प्रभु हाम्रो पनाह र बल हो, संकटमा उत्तम सहायक। (भजन संहिता 46:1) God is our refuge and strength, an ever-present help in trouble. (Psalm 46:1)" ,
    "परमेश्वर हाम्रो प्रकाश र उद्धार हो, हामीलाई डर नलागोस्। (भजन संहिता 27:1) The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)",
    "(Isaiah 9:6) For to us a child is born, to us a son is given. हाम्रो लागि एउटा बालक जन्मेको छ, हामीलाई एउटा छोरा दिइएको छ।",
    "(Luke 2:10-11)Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you. तर स्वर्गदूतले तिनीहरूलाई भने, 'डराउनुहोस् छैन, म तपाईंलाई सबै मानिसहरूको लागि ठूलो खुशी ल्याउने राम्रो समाचार ल्याएको छु। आज दाउदको शहरमा तपाईंको लागि एक उद्धारक जन्मिएको छ, जो मसीह प्रभु हो।",
     "(John 3:16)For God so loved the world that he gave his one and only Son. ईश्वरले संसारलाई यति माया गर्नुभयो कि उहाँले आफ्नो एक मात्र छोरा दिनुभयो, जसले विश्वास गर्ने हरेक व्यक्ति नष्ट नहोस्, तर अनन्त जीवन पाउँछ।",
     "(Matthew 1:21) उहाँ एउटा छोरा जन्माउनेछ, र तिमीहरूले उसको नाम येशु राख्नुपर्छ, किनकि उ उहाँको जनतालाई उहाँको पापबाट बचाउनेछन्.He will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.",
    "(Luke 2:30-32)मेरो आँखाले तपाईंको उद्धार देखे जसलाई तपाईंले सबै जातिहरूको सामुन्ने तयार गर्नु भएको छ. My eyes have seen your salvation, which you have prepared in the sight of all nations",
"(Romans 15:13)आशोकापरमेश्वरले तपाईंलाई सबै खुशी र शान्ति दिनेछन्, जब तपाईं उहाँमाथि विश्वास गर्नुहुन्छ. May the God of hope fill you with all joy and peace as you trust in him",
"(Isaiah 60:17)उठ, चम्क, तपाईंको उज्यालो आएको छ, र परमेश्वरको महिमा तपाईंमाथि छाइरहेको छ. Arise, shine, for your light has come, and the glory of the Lord rises upon you",
   "(John 10:10)चोर केवल चोरी गर्न, मर्न र विनाश गर्न आउँछ; म त आइसकेको छु कि तिनीहरूले जीवन पाऊन् र पूर्ण जीवन पाऊन्. The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full",
   "(Luke 1:45)धन्य छ उनी जसले विश्वास गरिन् कि परमेश्वरले उहाँको प्रतिज्ञा पूरा गर्नेछन्//Blessed is she who has believed that the Lord would fulfill his promises to her",
   "(Romans 5:8)तर परमेश्वरले हामीसँग प्रेमको प्रदर्शन यसरी गरे: हामी पापी हौँदा पनि मसीहले हाम्रो लागि मर्नुभयो।//But God demonstrates his own love for us in this: While we were still sinners, Christ died for us",
   "(Romans 6:23)पापको पारिश्रमिक मृत्यु हो, तर परमेश्वरको उपहार मसीह येशु हाम्रो प्रभुमा अनन्त जीवन हो//For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord",
   ];

// Function to get and display a Bible verse
function getBibleVerse() {
   const userName = document.getElementById("name").value;
   
   if (!userName) {
       alert("Please enter your name first.");
       return;
   }
   
   // Randomly select a Bible verse
   const randomIndex = Math.floor(Math.random() * bibleVerses.length);
   const randomVerse = bibleVerses[randomIndex];
   
   // Display the message
   const bibleVerseDiv = document.getElementById("bibleVerse");
   bibleVerseDiv.innerHTML = `<p>Hello, <strong>${userName}</strong>! Here's a Bible verse for you:</p><p><em>${randomVerse}</em></p>`;
}
