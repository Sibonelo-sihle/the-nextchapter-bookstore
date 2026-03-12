let books = [
    // Popular
    { id: 1, title: "Atomic Habits", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781847941831-L.jpg" },
    { id: 2, title: "Rich Dad Poor Dad", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg" },
    { id: 3, title: "The Subtle Art of Not Giving a F*ck", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg" },
    { id: 4, title: "Think and Grow Rich", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg" },
    { id: 5, title: "Deep Work", category: "Popular", price: 410, image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg" },
    { id: 6, title: "The 5 AM Club", category: "Popular", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781443456629-L.jpg" },
    { id: 7, title: "The Alchemist", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg" },
    { id: 8, title: "The Power of Habit", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg" },
    { id: 9, title: "The Psychology of Money", category: "Popular", price: 410, image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg" },
    { id: 10, title: "Can't Hurt Me", category: "Popular", price: 430, image: "https://covers.openlibrary.org/b/isbn/9781544512280-L.jpg" },
    { id: 11, title: "The 48 Laws of Power", category: "Popular", price: 440, image: "https://covers.openlibrary.org/b/isbn/9780140280197-L.jpg" },
    { id: 12, title: "Ikigai", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg" },
    { id: 13, title: "The Mountain Is You", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg" },
    { id: 14, title: "Start With Why", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781591846444-L.jpg" },
    { id: 15, title: "Zero to One", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg" },
    { id: 16, title: "Outliers", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780316017930-L.jpg" },
    { id: 17, title: "The Four Agreements", category: "Popular", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781878424310-L.jpg" },
    { id: 18, title: "Man's Search for Meaning", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg" },
    { id: 19, title: "Sapiens", category: "Popular", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg" },
    { id: 20, title: "The Lean Startup", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg" },
    { id: 21, title: "Grit", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781501111105-L.jpg" },
    { id: 22, title: "12 Rules for Life", category: "Popular", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780345816023-L.jpg" },
    { id: 23, title: "Make Your Bed", category: "Popular", price: 330, image: "https://covers.openlibrary.org/b/isbn/9781455570249-L.jpg" },
    { id: 25, title: "The Magic of Thinking Big", category: "Popular", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780671646783-L.jpg" },
    { id: 26, title: "The Compound Effect", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781593157242-L.jpg" },
    { id: 27, title: "Meditations", category: "Popular", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780140449334-L.jpg" },
    { id: 28, title: "Think Like a Monk", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781982134488-L.jpg" },
    { id: 29, title: "Rework", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780307463746-L.jpg" },
    { id: 30, title: "The One Thing", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781885167774-L.jpg" },
    { id: 31, title: "Quiet", category: "Popular", price: 385, image: "https://covers.openlibrary.org/b/isbn/9780307352156-L.jpg" },
    { id: 32, title: "The 7 Habits of Highly Effective People", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg" },
    { id: 33, title: "Thinking, Fast and Slow", category: "Popular", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780374275631-L.jpg" },
    { id: 34, title: "How to Win Friends and Influence People", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg" },
    { id: 35, title: "Shoe Dog", category: "Popular", price: 410, image: "https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg" },
    { id: 37, title: "Principles", category: "Popular", price: 440, image: "https://covers.openlibrary.org/b/isbn/9781501124020-L.jpg" },
    { id: 38, title: "Ego is the Enemy", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781591847816-L.jpg" },
    { id: 39, title: "Digital Minimalism", category: "Popular", price: 385, image: "https://covers.openlibrary.org/b/isbn/9780525536512-L.jpg" },
    { id: 40, title: "The Hunger Games", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023528-L.jpg" },
    { id: 41, title: "Catching Fire", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023498-L.jpg" },
    { id: 42, title: "Mockingjay", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023511-L.jpg" },
    { id: 47, title: "Gone Girl", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg" },
    { id: 49, title: "The Martian", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg" },
    { id: 50, title: "A Game of Thrones", category: "Popular", price: 430, image: "https://covers.openlibrary.org/b/isbn/9780553593716-L.jpg" },
    { id: 51, title: "The Kite Runner", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg" },
    { id: 52, title: "The Help", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780425232200-L.jpg" },
    { id: 62, title: "The Midnight Library", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg" },
    { id: 65, title: "Dune", category: "Popular", price: 430, image: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
    { id: 79, title: "The Silent Patient", category: "Popular", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
    { id: 80, title: "Verity", category: "Popular", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781538724736-L.jpg" },
    { id: 81, title: "Project Hail Mary", category: "Popular", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
    { id: 82, title: "Where the Crawdads Sing", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780735219090-L.jpg" },
    { id: 83, title: "The Seven Husbands of Evelyn Hugo", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781501139239-L.jpg" },
    { id: 86, title: "Circe", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780316556347-L.jpg" },
    { id: 87, title: "Lessons in Chemistry", category: "Popular", price: 415, image: "https://covers.openlibrary.org/b/isbn/9780385547345-L.jpg" },

    // Romance
    { id: 88, title: "It Ends With Us", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg" },
    { id: 89, title: "Ugly Love", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781476753188-L.jpg" },
    { id: 90, title: "The Notebook", category: "Romance", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780446605236-L.jpg" },
    { id: 91, title: "Me Before You", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780143124542-L.jpg" },
    { id: 92, title: "The Fault in Our Stars", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780142424179-L.jpg" },
    { id: 93, title: "Pride and Prejudice", category: "Romance", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg" },
    { id: 94, title: "The Time Traveler's Wife", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780156029438-L.jpg" },
    { id: 95, title: "The Hating Game", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780062439598-L.jpg" },
    { id: 97, title: "November 9", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781471154623-L.jpg" },
    { id: 98, title: "The Love Hypothesis", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780593336823-L.jpg" },
    { id: 99, title: "Twilight", category: "Romance", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780316015844-L.jpg" },
    { id: 100, title: "The Kiss Quotient", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780451490803-L.jpg" },
    { id: 101, title: "Outlander", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780440212560-L.jpg" },
    { id: 102, title: "A Walk to Remember", category: "Romance", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780446693806-L.jpg" },
    { id: 104, title: "The Spanish Love Deception", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781398515628-L.jpg" },
    { id: 105, title: "Beach Read", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781984806734-L.jpg" },
    { id: 108, title: "Reminders of Him", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781542025607-L.jpg" },
    { id: 109, title: "Red, White & Royal Blue", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg" },
    { id: 110, title: "A Court of Thorns and Roses", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781619634442-L.jpg" },
    { id: 112, title: "All Your Perfects", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781501193323-L.jpg" },
    { id: 113, title: "Shatter Me", category: "Romance", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780062085504-L.jpg" },
    { id: 117, title: "It Happened One Summer", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780063045651-L.jpg" },
    { id: 121, title: "Book Lovers", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780593334836-L.jpg" },
    { id: 122, title: "People We Meet on Vacation", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781984806758-L.jpg" },
    { id: 124, title: "Happy Place", category: "Romance", price: 395, image: "https://covers.openlibrary.org/b/isbn/9780593441275-L.jpg" },
    { id: 127, title: "Twisted Love", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781666613346-L.jpg" },
    { id: 128, title: "Twisted Games", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781666613353-L.jpg" },
    { id: 131, title: "Icebreaker", category: "Romance", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781668026038-L.jpg" },
    { id: 132, title: "Things We Never Got Over", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781736444801-L.jpg" },
    { id: 134, title: "Love on the Brain", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780593336847-L.jpg" },
    { id: 144, title: "Funny Story", category: "Romance", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780593441282-L.jpg" },

    // South Africa
    { id: 151, title: "Born a Crime", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780399588198-L.jpg" },
    { id: 152, title: "Long Walk to Freedom", category: "South Africa", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780316548182-L.jpg" },
    { id: 153, title: "Cry, the Beloved Country", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780743262170-L.jpg" },
    { id: 154, title: "Disgrace", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780140296402-L.jpg" },
    { id: 155, title: "The Power of One", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780345410054-L.jpg" },
    { id: 159, title: "Tsotsi", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780864866462-L.jpg" },
    { id: 160, title: "Spud", category: "South Africa", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780143027355-L.jpg" },
    { id: 162, title: "Ways of Dying", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780195715217-L.jpg" },
    { id: 163, title: "The Heart of Redness", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780195715804-L.jpg" },
    { id: 166, title: "Country of My Skull", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780812970036-L.jpg" },
    { id: 167, title: "A Dry White Season", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780140067491-L.jpg" },
    { id: 171, title: "Kaffir Boy", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780452269330-L.jpg" },
    { id: 175, title: "Mother to Mother", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781868420124-L.jpg" },
    { id: 178, title: "Blood River", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780141024318-L.jpg" },
    { id: 179, title: "Shaka Zulu", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781868254187-L.jpg" },
    { id: 181, title: "Fiela's Child", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780140074314-L.jpg" },
    { id: 186, title: "The Promise", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780141044332-L.jpg" },
    { id: 187, title: "The Story of an African Farm", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780140448039-L.jpg" },
    { id: 221, title: "Afterland", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781473673595-L.jpg" },
    { id: 224, title: "Nervous Conditions", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781583222045-L.jpg" },
    { id: 248, title: "Springbok Glory", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781776090625-L.jpg" },

    // Kids
    { id: 251, title: "Harry Potter and the Sorcerer's Stone", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg" },
    { id: 252, title: "Matilda", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780142410370-L.jpg" },
    { id: 253, title: "Charlotte's Web", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780064400558-L.jpg" },
    { id: 254, title: "The Lion, the Witch and the Wardrobe", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780064471046-L.jpg" },
    { id: 255, title: "The Lightning Thief", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg" },
    { id: 260, title: "Wonder", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780375869020-L.jpg" },
    { id: 261, title: "The BFG", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780142410387-L.jpg" },
    { id: 262, title: "James and the Giant Peach", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780142410363-L.jpg" },
    { id: 263, title: "Charlie and the Chocolate Factory", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780142410318-L.jpg" },
    { id: 264, title: "Holes", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780440414803-L.jpg" },
    { id: 266, title: "Diary of a Wimpy Kid", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780810993136-L.jpg" },
    { id: 271, title: "Harry Potter and the Chamber of Secrets", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg" },
    { id: 272, title: "Harry Potter and the Prisoner of Azkaban", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg" },
    { id: 273, title: "Harry Potter and the Goblet of Fire", category: "Kids", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780439139595-L.jpg" },
    { id: 277, title: "The Hobbit", category: "Kids", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
    { id: 279, title: "The Giver", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780385732550-L.jpg" },
    { id: 282, title: "Dog Man", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780545935173-L.jpg" },
    { id: 285, title: "Wings of Fire", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780545341462-L.jpg" },
    { id: 287, title: "Esperanza Rising", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780439120425-L.jpg" },
    { id: 289, title: "The One and Only Ivan", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780061992254-L.jpg" },
    { id: 292, title: "The Lorax", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780394823379-L.jpg" },
    { id: 293, title: "Oh, the Places You'll Go!", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780679805274-L.jpg" },
    { id: 297, title: "A Bear Called Paddington", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780062312181-L.jpg" },
    { id: 299, title: "The Secret Garden", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780064401883-L.jpg" },
    { id: 300, title: "Peter Pan", category: "Kids", price: 240, image: "https://covers.openlibrary.org/b/isbn/9780141322575-L.jpg" },
    { id: 303, title: "Alice's Adventures in Wonderland", category: "Kids", price: 230, image: "https://covers.openlibrary.org/b/isbn/9780141439761-L.jpg" },
    { id: 305, title: "The Chronicles of Narnia", category: "Kids", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780066238500-L.jpg" },
    { id: 307, title: "How to Train Your Dragon", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780316085274-L.jpg" },
    { id: 329, title: "The Wild Robot", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780316381994-L.jpg" },
    { id: 334, title: "Keeper of the Lost Cities", category: "Kids", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781442445932-L.jpg" },
    { id: 337, title: "The Graveyard Book", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780060530921-L.jpg" },
    { id: 338, title: "Coraline", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780380807345-L.jpg" },
    { id: 347, title: "Lemony Snicket: A Series of Unfortunate Events", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780064407663-L.jpg" },
    { id: 349, title: "The Last Kids on Earth", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780670016617-L.jpg" },

    // Sports & Motivation
    { id: 400, title: "Open", category: "Sports & Motivation", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780547386652-L.jpg" },
    { id: 401, title: "The Mamba Mentality", category: "Sports & Motivation", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780374201234-L.jpg" },
    { id: 402, title: "Dare to Lead", category: "Sports & Motivation", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780399592522-L.jpg" },
    { id: 403, title: "Finding Ultra", category: "Sports & Motivation", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780307952189-L.jpg" },
    { id: 404, title: "Born to Run", category: "Sports & Motivation", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780307279187-L.jpg" },
    { id: 405, title: "The Score Takes Care of Itself", category: "Sports & Motivation", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781591843474-L.jpg" },
    { id: 406, title: "Legacy", category: "Sports & Motivation", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781472103536-L.jpg" },
    { id: 407, title: "Relentless", category: "Sports & Motivation", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781476714219-L.jpg" },
    { id: 408, title: "The Champion's Mind", category: "Sports & Motivation", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781623363482-L.jpg" },
    { id: 409, title: "Winning", category: "Sports & Motivation", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781982190873-L.jpg" },
    { id: 410, title: "Drive", category: "Sports & Motivation", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781594484803-L.jpg" },
    { id: 411, title: "The Art of Learning", category: "Sports & Motivation", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780743277464-L.jpg" },
    { id: 412, title: "How Bad Do You Want It?", category: "Sports & Motivation", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781937715410-L.jpg" },
    { id: 413, title: "Unbroken", category: "Sports & Motivation", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780812974492-L.jpg" },
    { id: 414, title: "The Obstacle Is the Way", category: "Sports & Motivation", price: 355, image: "https://covers.openlibrary.org/b/isbn/9781591846352-L.jpg" },
    { id: 415, title: "Total Competition", category: "Sports & Motivation", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781471156328-L.jpg" },
];

// ────────────────────────────────────────────────
// 1. DATA & STATE
// ────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = 'All';
let searchTerm = '';
let currentBundle = null;
let selectedBundleBooks = [];

const FALLBACK_IMAGE = "https://via.placeholder.com/200x300/cccccc/666666?text=No+Cover";

// ────────────────────────────────────────────────
// 2. CORE RENDERING (HOME & BUNDLE PAGE)
// ────────────────────────────────────────────────

function renderBooks() {
    const grid = document.getElementById("bookGrid");
    if (!grid) return;

    const filtered = books.filter(b =>
        (currentCategory === 'All' || b.category === currentCategory) &&
        b.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center;padding:40px;color:#666;">No books found. Try a different search.</p>';
        return;
    }

    grid.innerHTML = filtered.map(b => `
        <div class="book">
            <img src="${b.image}" alt="${b.title}" onerror="this.src='${FALLBACK_IMAGE}';">
            <h3>${b.title}</h3>
            <p>R${b.price}</p>
            <button onclick="addToCart(${b.id})">Add to Cart</button>
        </div>
    `).join("");
}

function renderBundleBooks() {
    const grid = document.getElementById("bundleGrid");
    if (!grid) return;

    grid.innerHTML = books.map(b => `
        <div class="book">
            <img src="${b.image}" alt="${b.title}" onerror="this.src='${FALLBACK_IMAGE}';">
            <h3>${b.title}</h3>
            <p>R${b.price}</p>
            <button onclick="addToCart(${b.id})">Add to Cart</button>
        </div>
    `).join("");
}

// ────────────────────────────────────────────────
// 3. BUNDLE SELECTION LOGIC (MODAL)
// ────────────────────────────────────────────────

function getBundleConfig(type) {
    const bundles = {
        any4:       { name: 'Any 4 Books for R1050', num: 4, filter: 'All', price: 1050 },
        romance3:   { name: 'Romance Bundle – 3 Books for R900', num: 3, filter: 'Romance', price: 900 },
        buy3get1:   { name: 'Buy 3 Get 1 Free – Pick 4 Books!', num: 4, filter: 'All', price: 1050, freeBook: true, payFor: 3 },
        starterpack:{ name: 'Starter Pack – 2 Books + 1 Kids Book', num: 3, filter: 'All', price: 750, isStarter: true },
    };
    return bundles[type] || null;
}

function openBundleSelection(bundleType) {
    currentBundle = getBundleConfig(bundleType);
    if (!currentBundle) return alert("Invalid bundle type");

    selectedBundleBooks = [];
    const modal = document.getElementById('bundleModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('bundleTitle').innerText = currentBundle.name;

        // Show instructions based on bundle type
        const instrEl = document.getElementById('bundleInstructions');
        if (instrEl) {
            if (currentBundle.freeBook) {
                instrEl.innerHTML = '🎉 Pick <strong>any 4 books</strong> — you only pay for 3! The cheapest book is FREE.';
            } else if (currentBundle.isStarter) {
                instrEl.innerHTML = '📦 Pick <strong>any 3 books</strong> to build your Starter Pack (R750 total).';
            } else {
                instrEl.innerHTML = `Please select <strong>${currentBundle.num} books</strong> to continue.`;
            }
        }

        renderBundleSelectionBooks();
        updateAddBundleButton();
    }
}

function closeBundleModal() {
    const modal = document.getElementById('bundleModal');
    if (modal) modal.style.display = 'none';
}

function renderBundleSelectionBooks() {
    const grid = document.getElementById("bundleBookGrid");
    if (!grid || !currentBundle) return;

    let filtered = books.filter(b =>
        currentBundle.filter === 'All' || b.category === currentBundle.filter
    );

    // For starter pack, show popular + kids
    if (currentBundle.isStarter) {
        filtered = books.filter(b => b.category === 'Popular' || b.category === 'Kids');
    }

    grid.innerHTML = filtered.map(b => {
        const isSelected = selectedBundleBooks.some(s => s.id === b.id);
        return `
            <div class="book ${isSelected ? 'selected-bundle-item' : ''}">
                <img src="${b.image}" onerror="this.src='${FALLBACK_IMAGE}';" alt="${b.title}">
                <h3>${b.title}</h3>
                <p>R${b.price}</p>
                <button onclick="toggleBundleBook(${b.id})">
                    ${isSelected ? '✅ Selected' : 'Select'}
                </button>
            </div>
        `;
    }).join("");
}

function toggleBundleBook(id) {
    const book = books.find(b => b.id === id);
    const index = selectedBundleBooks.findIndex(s => s.id === id);

    if (index > -1) {
        // Deselect
        selectedBundleBooks.splice(index, 1);
    } else if (selectedBundleBooks.length < currentBundle.num) {
        selectedBundleBooks.push(book);
    } else {
        alert(`You can only select ${currentBundle.num} books for this bundle.`);
    }

    renderBundleSelectionBooks();
    updateAddBundleButton();
}

function updateAddBundleButton() {
    const btn = document.getElementById('addBundleToCart');
    if (!btn) return;

    const needed = currentBundle.num - selectedBundleBooks.length;
    btn.disabled = selectedBundleBooks.length !== currentBundle.num;

    if (btn.disabled) {
        btn.innerText = `Select ${needed} more book${needed !== 1 ? 's' : ''}`;
    } else {
        // For buy3get1: show savings
        if (currentBundle.freeBook) {
            const sorted = [...selectedBundleBooks].sort((a, b) => a.price - b.price);
            const freeBookTitle = sorted[0].title;
            btn.innerText = `Add to Cart (R${currentBundle.price}) — "${freeBookTitle}" is FREE! 🎉`;
        } else {
            btn.innerText = `Add Bundle to Cart — R${currentBundle.price}`;
        }
    }
}

function addBundleToCart() {
    let bundleName = currentBundle.name;

    // For buy3get1, identify the free book (cheapest)
    if (currentBundle.freeBook) {
        const sorted = [...selectedBundleBooks].sort((a, b) => a.price - b.price);
        bundleName = `Buy 3 Get 1 Free Bundle (Free: ${sorted[0].title})`;
    }

    const bundleItem = {
        id: Date.now(),
        type: 'bundle',
        name: bundleName,
        books: [...selectedBundleBooks],
        price: currentBundle.price
    };

    cart.push(bundleItem);
    saveAndRefresh();
    alert("Bundle added to cart! ✓");
    closeBundleModal();
}

// ────────────────────────────────────────────────
// 4. CART & CHECKOUT
// ────────────────────────────────────────────────

function addToCart(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        cart.push({ ...book, type: 'single' });
        saveAndRefresh();
        alert(`"${book.title}" added to cart! ✓`);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    if (document.getElementById("checkoutItems")) renderCheckout();
}

function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = cart.length;
}

function renderCheckout() {
    const itemsDiv = document.getElementById("checkoutItems");
    if (!itemsDiv) return;

    let total = 0;
    itemsDiv.innerHTML = cart.map((item, index) => {
        total += item.price;
        const displayName = item.type === 'bundle'
            ? `<strong>${item.name}</strong><br><small>${item.books.map(b => b.title).join(", ")}</small>`
            : item.title;
        return `
            <div class="cart-item">
                <p>${displayName} — R${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    }).join("");

    if (cart.length === 0) {
        itemsDiv.innerHTML = '<p style="color:#666;text-align:center;padding:20px;">Your cart is empty. <a href="index.html">Browse books</a></p>';
    }

    document.getElementById("checkoutTotal").innerText = total;

    // Update hidden fields for form
    const desc = cart.map(i => i.type === 'bundle' ? i.name : i.title).join(", ");
    if (document.getElementById("pf_amount")) document.getElementById("pf_amount").value = total.toFixed(2);
    if (document.getElementById("pf_description")) document.getElementById("pf_description").value = desc;
    if (document.getElementById("hiddenOrder")) document.getElementById("hiddenOrder").value = desc;
    if (document.getElementById("hiddenTotal")) document.getElementById("hiddenTotal").value = total;
}

// ────────────────────────────────────────────────
// 5. UTILS & INITIALIZATION
// ────────────────────────────────────────────────

function filterCategory(cat) {
    currentCategory = cat;
    renderBooks();
}

function searchBooks() {
    searchTerm = document.getElementById("searchInput")?.value || '';
    renderBooks();
}

function openCart() {
    window.location.href = "checkout.html";
}

function applyDiscount() {
    const code = document.getElementById('discountCode')?.value?.trim().toUpperCase();
    const discountCodes = {
        'NEXTCHAPTER10': 0.10,
        'WELCOME15': 0.15,
        'BOOKS20': 0.20
    };

    if (discountCodes[code]) {
        const totalEl = document.getElementById('checkoutTotal');
        const currentTotal = parseFloat(totalEl.innerText);
        const discount = discountCodes[code];
        const newTotal = Math.round(currentTotal * (1 - discount));
        totalEl.innerText = newTotal;
        if (document.getElementById("pf_amount")) document.getElementById("pf_amount").value = newTotal.toFixed(2);
        alert(`Discount applied! ${(discount * 100)}% off.`);
    } else {
        alert("Invalid discount code.");
    }
}

function togglePaymentSection(method) {
    const pfArea = document.getElementById('payfast_btn_area');
    const eftArea = document.getElementById('eft_btn_area');
    const form = document.getElementById('checkoutForm');

    if (method === 'payfast') {
        pfArea.style.display = 'block';
        eftArea.style.display = 'none';
        form.action = "https://www.payfast.co.za/eng/process";
    } else {
        pfArea.style.display = 'none';
        eftArea.style.display = 'block';
        form.action = "#";
    }
}

function handleEFTOrder() {
    const firstName = document.getElementById('cust_first')?.value?.trim();
    const lastName = document.getElementById('cust_last')?.value?.trim();
    const email = document.getElementById('cust_email')?.value?.trim();
    const address = document.getElementById('shippingAddress')?.value?.trim();

    if (!firstName || !address || !email) {
        alert("Please fill in your name, email and shipping address first!");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const total = document.getElementById("checkoutTotal").innerText;
    const items = cart.map(item => item.type === 'bundle' ? item.name : item.title).join(", ");
    const fullName = `${firstName} ${lastName}`.trim();

    const message = `Hi! I'd like to place an EFT order.\n\n👤 Name: ${fullName}\n📧 Email: ${email}\n📚 Items: ${items}\n💰 Total: R${total}\n📍 Address: ${address}\n\nI will send Proof of Payment shortly. Thank you!`;

    const whatsappLink = `https://wa.me/27710383692?text=${encodeURIComponent(message)}`;

    if (confirm("Confirm your order? You will be redirected to WhatsApp to send your Proof of Payment.")) {
        localStorage.removeItem("cart");
        window.open(whatsappLink, '_blank');
        window.location.href = "thankyou.html";
    }
}

// Standard setup on load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("bookGrid")) renderBooks();
    if (document.getElementById("bundleGrid")) renderBundleBooks();
    if (document.getElementById("checkoutItems")) renderCheckout();
    updateCartCount();

    // Default EFT on checkout page (PayFast unavailable)
    const eftRadio = document.querySelector('input[value="eft"]');
    if (eftRadio) {
        eftRadio.checked = true;
        togglePaymentSection('eft');
    }

    window.onclick = (event) => {
        const modal = document.getElementById('bundleModal');
        if (event.target === modal) closeBundleModal();
    };
});
