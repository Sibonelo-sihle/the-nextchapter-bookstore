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
    { id: 24, title: "Crushing It!", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780062674678-L.jpg" },
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
    { id: 36, title: "Daring Greatly", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781592407330-L.jpg" },
    { id: 37, title: "Principles", category: "Popular", price: 440, image: "https://covers.openlibrary.org/b/isbn/9781501124020-L.jpg" },
    { id: 38, title: "Ego is the Enemy", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781591847816-L.jpg" },
    { id: 39, title: "Digital Minimalism", category: "Popular", price: 385, image: "https://covers.openlibrary.org/b/isbn/9780525536512-L.jpg" },
    { id: 40, title: "The Hunger Games", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023528-L.jpg" },
    { id: 41, title: "Catching Fire", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023498-L.jpg" },
    { id: 42, title: "Mockingjay", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780439023511-L.jpg" },
    { id: 43, title: "The Shining", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg" },
    { id: 44, title: "Dracula", category: "Popular", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780141439846-L.jpg" },
    { id: 45, title: "Frankenstein", category: "Popular", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg" },
    { id: 46, title: "The Handmaid’s Tale", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780385490818-L.jpg" },
    { id: 47, title: "Gone Girl", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg" },
    { id: 48, title: "The Girl with the Dragon Tattoo", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780307454546-L.jpg" },
    { id: 49, title: "The Martian", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg" },
    { id: 50, title: "A Game of Thrones", category: "Popular", price: 430, image: "https://covers.openlibrary.org/b/isbn/9780553593716-L.jpg" },
    { id: 51, title: "The Kite Runner", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg" },
    { id: 52, title: "The Help", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780425232200-L.jpg" },
    { id: 53, title: "The Girl Who Drank the Moon", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781616205676-L.jpg" },
    { id: 54, title: "The Lovely Bones", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780316666343-L.jpg" },
    { id: 55, title: "The Outsiders", category: "Popular", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780142407332-L.jpg" },
    { id: 56, title: "The Perks of Being a Wallflower", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780671027346-L.jpg" },
    { id: 57, title: "The Picture of Dorian Gray", category: "Popular", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg" },
    { id: 58, title: "Little Women", category: "Popular", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780141439600-L.jpg" },
    { id: 59, title: "Moby Dick", category: "Popular", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780142437247-L.jpg" },
    { id: 60, title: "The Stand", category: "Popular", price: 440, image: "https://covers.openlibrary.org/b/isbn/9780307743688-L.jpg" },
    { id: 61, title: "The Girl on the Bus", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780316328098-L.jpg" },
    { id: 62, title: "The Midnight Library", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg" },
    { id: 63, title: "The Night Circus", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780307744432-L.jpg" },
    { id: 64, title: "The Goldfinch", category: "Popular", price: 410, image: "https://covers.openlibrary.org/b/isbn/9780316055437-L.jpg" },
    { id: 65, title: "Dune", category: "Popular", price: 430, image: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg" },
    { id: 66, title: "The Shadow and Bone", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781250027436-L.jpg" },
    { id: 67, title: "The Name of the Wind", category: "Popular", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg" },
    { id: 68, title: "The Giver of Stars", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780399562495-L.jpg" },
    { id: 69, title: "The Silent Wife", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780143123200-L.jpg" },
    { id: 70, title: "The Woman in the Window", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780062678416-L.jpg" },
    { id: 71, title: "The Housemaid", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781538742570-L.jpg" },
    { id: 72, title: "The Girl Who Lived", category: "Popular", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781503943407-L.jpg" },
    { id: 73, title: "The Paris Apartment", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780063003057-L.jpg" },
    { id: 74, title: "The Woman in Cabin 10", category: "Popular", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781501132957-L.jpg" },
    { id: 75, title: "The Lincoln Lawyer", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780446699556-L.jpg" },
    { id: 76, title: "Shutter Island", category: "Popular", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780061703236-L.jpg" },
    { id: 77, title: "The Maze Runner", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780385737951-L.jpg" },
    { id: 78, title: "The Girl Who Loved Tom Gordon", category: "Popular", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780684867625-L.jpg" },
    { id: 79, title: "The Silent Patient", category: "Popular", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg" },
    { id: 80, title: "Verity", category: "Popular", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781538724736-L.jpg" },
    { id: 81, title: "Project Hail Mary", category: "Popular", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg" },
    { id: 82, title: "Where the Crawdads Sing", category: "Popular", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780735219090-L.jpg" },
    { id: 83, title: "The Seven Husbands of Evelyn Hugo", category: "Popular", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781501139239-L.jpg" },
    { id: 84, title: "Tomorrow and Tomorrow and Tomorrow", category: "Popular", price: 410, image: "https://covers.openlibrary.org/b/isbn/9780593321201-L.jpg" },
    { id: 85, title: "Daisy Jones & The Six", category: "Popular", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781524798628-L.jpg" },
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
    { id: 96, title: "Love and Other Words", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781501128011-L.jpg" },
    { id: 97, title: "November 9", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781471154623-L.jpg" },
    { id: 98, title: "The Love Hypothesis", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780593336823-L.jpg" },
    { id: 99, title: "Twilight", category: "Romance", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780316015844-L.jpg" },
    { id: 100, title: "The Kiss Quotient", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780451490803-L.jpg" },
    { id: 101, title: "Outlander", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780440212560-L.jpg" },
    { id: 102, title: "A Walk to Remember", category: "Romance", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780446693806-L.jpg" },
    { id: 103, title: "The Wedding Date", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780399587689-L.jpg" },
    { id: 104, title: "The Spanish Love Deception", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781398515628-L.jpg" },
    { id: 105, title: "Beach Read", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781984806734-L.jpg" },
    { id: 106, title: "After You", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780143108863-L.jpg" },
    { id: 107, title: "The Light We Lost", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780735211209-L.jpg" },
    { id: 108, title: "Reminders of Him", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781542025607-L.jpg" },
    { id: 109, title: "Red, White & Royal Blue", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg" },
    { id: 110, title: "A Court of Thorns and Roses", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781619634442-L.jpg" },
    { id: 111, title: "The Bride Test", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780451490810-L.jpg" },
    { id: 112, title: "All Your Perfects", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781501193323-L.jpg" },
    { id: 113, title: "Shatter Me", category: "Romance", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780062085504-L.jpg" },
    { id: 114, title: "The Simple Wild", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781503940215-L.jpg" },
    { id: 115, title: "The Proposal", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780451492364-L.jpg" },
    { id: 116, title: "The Unhoneymooners", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781501128035-L.jpg" },
    { id: 117, title: "It Happened One Summer", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780063045651-L.jpg" },
    { id: 118, title: "Archer's Voice", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781503940216-L.jpg" },
    { id: 119, title: "The Roommate", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780593100882-L.jpg" },
    { id: 120, title: "Beautiful Disaster", category: "Romance", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781476712048-L.jpg" },
    { id: 121, title: "Book Lovers", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780593334836-L.jpg" },
    { id: 122, title: "People We Meet on Vacation", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781984806758-L.jpg" },
    { id: 123, title: "The Flatshare", category: "Romance", price: 365, image: "https://covers.openlibrary.org/b/isbn/9781250295637-L.jpg" },
    { id: 124, title: "Happy Place", category: "Romance", price: 395, image: "https://covers.openlibrary.org/b/isbn/9780593441275-L.jpg" },
    { id: 125, title: "The Seven Year Slip", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781984806093-L.jpg" },
    { id: 126, title: "One True Loves", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781476776903-L.jpg" },
    { id: 127, title: "Twisted Love", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781666613346-L.jpg" },
    { id: 128, title: "Twisted Games", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781666613353-L.jpg" },
    { id: 129, title: "Twisted Hate", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781666613360-L.jpg" },
    { id: 130, title: "Twisted Lies", category: "Romance", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781666613377-L.jpg" },
    { id: 131, title: "Icebreaker", category: "Romance", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781668026038-L.jpg" },
    { id: 132, title: "Things We Never Got Over", category: "Romance", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781736444801-L.jpg" },
    { id: 133, title: "The Dead Romantics", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780593336649-L.jpg" },
    { id: 134, title: "Love on the Brain", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780593336847-L.jpg" },
    { id: 135, title: "Final Offer", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781736444825-L.jpg" },
    { id: 136, title: "Terms and Conditions", category: "Romance", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781736444818-L.jpg" },
    { id: 137, title: "Better Than the Movies", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781534467637-L.jpg" },
    { id: 138, title: "The Summer of Broken Rules", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781728223896-L.jpg" },
    { id: 139, title: "A Not So Meet Cute", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781954314160-L.jpg" },
    { id: 140, title: "The Fine Print", category: "Romance", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781736444801-L.jpg" },
    { id: 141, title: "Part of Your World", category: "Romance", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781538704332-L.jpg" },
    { id: 142, title: "Yours Truly", category: "Romance", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781538704356-L.jpg" },
    { id: 143, title: "Just for the Summer", category: "Romance", price: 410, image: "https://covers.openlibrary.org/b/isbn/9781538704370-L.jpg" },
    { id: 144, title: "Funny Story", category: "Romance", price: 420, image: "https://covers.openlibrary.org/b/isbn/9780593441282-L.jpg" },
    { id: 145, title: "The Bromance Book Club", category: "Romance", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781984806093-L.jpg" },
    { id: 146, title: "The Heart Principle", category: "Romance", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780451490827-L.jpg" },
    { id: 147, title: "Window Shopping", category: "Romance", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781954314191-L.jpg" },
    { id: 148, title: "Practice Makes Perfect", category: "Romance", price: 365, image: "https://covers.openlibrary.org/b/isbn/9781728258508-L.jpg" },
    { id: 149, title: "Wildfire", category: "Romance", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781668026052-L.jpg" },
    { id: 150, title: "Check & Mate", category: "Romance", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780593486399-L.jpg" },

    // South Africa
    { id: 151, title: "Born a Crime", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780399588198-L.jpg" },
    { id: 152, title: "Long Walk to Freedom", category: "South Africa", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780316548182-L.jpg" },
    { id: 153, title: "Cry, the Beloved Country", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780743262170-L.jpg" },
    { id: 154, title: "Disgrace", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780140296402-L.jpg" },
    { id: 155, title: "The Power of One", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780345410054-L.jpg" },
    { id: 156, title: "Burger's Daughter", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780141185477-L.jpg" },
    { id: 157, title: "The Conservationist", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780140064025-L.jpg" },
    { id: 158, title: "July's People", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780140061406-L.jpg" },
    { id: 159, title: "Tsotsi", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780864866462-L.jpg" },
    { id: 160, title: "Spud", category: "South Africa", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780143027355-L.jpg" },
    { id: 161, title: "The Book of Negroes", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780007259533-L.jpg" },
    { id: 162, title: "Ways of Dying", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780195715217-L.jpg" },
    { id: 163, title: "The Heart of Redness", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780195715804-L.jpg" },
    { id: 164, title: "The Madonna of Excelsior", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780143025894-L.jpg" },
    { id: 165, title: "The Quiet Violence of Dreams", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781868421572-L.jpg" },
    { id: 166, title: "Country of My Skull", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780812970036-L.jpg" },
    { id: 167, title: "A Dry White Season", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780140067491-L.jpg" },
    { id: 168, title: "My Traitor's Heart", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780099743804-L.jpg" },
    { id: 169, title: "Red Dust", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780349106144-L.jpg" },
    { id: 170, title: "The Good Doctor", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780140290790-L.jpg" },
    { id: 171, title: "Kaffir Boy", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780452269330-L.jpg" },
    { id: 172, title: "Thirteen Cents", category: "South Africa", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780864863492-L.jpg" },
    { id: 173, title: "The Whale Caller", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780143025146-L.jpg" },
    { id: 174, title: "An Instant in the Wind", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780140065992-L.jpg" },
    { id: 175, title: "Mother to Mother", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781868420124-L.jpg" },
    { id: 176, title: "The Smell of Apples", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780099261841-L.jpg" },
    { id: 177, title: "The Bang-Bang Club", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780436209109-L.jpg" },
    { id: 178, title: "Blood River", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9780141024318-L.jpg" },
    { id: 179, title: "Shaka Zulu", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781868254187-L.jpg" },
    { id: 180, title: "The Covenant", category: "South Africa", price: 430, image: "https://covers.openlibrary.org/b/isbn/9780553264838-L.jpg" },
    { id: 181, title: "Fiela's Child", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780140074314-L.jpg" },
    { id: 182, title: "Johannesburg Noir", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781776090220-L.jpg" },
    { id: 183, title: "The Innocent", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780434017114-L.jpg" },
    { id: 184, title: "An Act of Defiance", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781501110306-L.jpg" },
    { id: 185, title: "No Time Like the Present", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780141044301-L.jpg" },
    { id: 186, title: "The Promise", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780141044332-L.jpg" },
    { id: 187, title: "The Story of an African Farm", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780140448039-L.jpg" },
    { id: 188, title: "A Place in the Sun", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090152-L.jpg" },
    { id: 189, title: "Toxic Heritage", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090305-L.jpg" },
    { id: 190, title: "A Lion Among Men", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9780795707705-L.jpg" },
    { id: 191, title: "A Sport of Nature", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780140079920-L.jpg" },
    { id: 192, title: "Karoo Boy", category: "South Africa", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780143523763-L.jpg" },
    { id: 193, title: "The Seed Thief", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090343-L.jpg" },
    { id: 194, title: "The Quarry", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090312-L.jpg" },
    { id: 195, title: "Romance on the Highveld", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090350-L.jpg" },
    { id: 196, title: "Passion and Pride", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090367-L.jpg" },
    { id: 197, title: "A Game of Life", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090374-L.jpg" },
    { id: 198, title: "Chasing Greatness", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090381-L.jpg" },
    { id: 199, title: "Winning Spirit", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090398-L.jpg" },
    { id: 200, title: "Running Free", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090404-L.jpg" },
    { id: 201, title: "Dreams of Glory", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090411-L.jpg" },
    { id: 202, title: "The Athlete's Mindset", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090428-L.jpg" },
    { id: 203, title: "Hearts of Fire", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090435-L.jpg" },
    { id: 204, title: "Legacy of Love", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090442-L.jpg" },
    { id: 205, title: "Sunset Romance", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090459-L.jpg" },
    { id: 206, title: "The Champion Within", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090466-L.jpg" },
    { id: 207, title: "South African Stories", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090473-L.jpg" },
    { id: 208, title: "Beyond the Horizon", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090480-L.jpg" },
    { id: 209, title: "Victory Lap", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090497-L.jpg" },
    { id: 210, title: "Legends of the Cape", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090503-L.jpg" },
    { id: 211, title: "Tales from the Veld", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090510-L.jpg" },
    { id: 212, title: "Heroes of the Game", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090527-L.jpg" },
    { id: 213, title: "Journey of Champions", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090534-L.jpg" },
    { id: 214, title: "Whispers of Love", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090541-L.jpg" },
    { id: 215, title: "Passion on the Veld", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090558-L.jpg" },
    { id: 216, title: "Hearts in Motion", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090565-L.jpg" },
    { id: 217, title: "Sunrise Over the Drakensberg", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090572-L.jpg" },
    { id: 218, title: "The Winning Goal", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090589-L.jpg" },
    { id: 219, title: "Fields of Glory", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090596-L.jpg" },
    { id: 220, title: "Legends Never Die", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090602-L.jpg" },
    { id: 221, title: "Afterland", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781473673595-L.jpg" },
    { id: 222, title: "The Yearning", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781415207437-L.jpg" },
    { id: 223, title: "Always Another Country", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg" },
    { id: 224, title: "Nervous Conditions", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781583222045-L.jpg" },
    { id: 225, title: "The Death of Rex Nhongo", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781447283485-L.jpg" },
    { id: 226, title: "Vusi the Great", category: "South Africa", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781776090603-L.jpg" },
    { id: 227, title: "Cape Town Confidential", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090604-L.jpg" },
    { id: 228, title: "Zulus in London", category: "South Africa", price: 365, image: "https://covers.openlibrary.org/b/isbn/9781776090605-L.jpg" },
    { id: 229, title: "Pretoria Pride", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090606-L.jpg" },
    { id: 230, title: "The Highveld Hero", category: "South Africa", price: 355, image: "https://covers.openlibrary.org/b/isbn/9781776090607-L.jpg" },
    { id: 231, title: "Garden Route Guide", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781776090608-L.jpg" },
    { id: 232, title: "Durban Days", category: "South Africa", price: 345, image: "https://covers.openlibrary.org/b/isbn/9781776090609-L.jpg" },
    { id: 233, title: "Knysna Nights", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090610-L.jpg" },
    { id: 234, title: "Stellenbosch Spirits", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090611-L.jpg" },
    { id: 235, title: "Limpopo Love", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090612-L.jpg" },
    { id: 236, title: "Karoo Kindle", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090613-L.jpg" },
    { id: 237, title: "The Soweto Story", category: "South Africa", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781776090614-L.jpg" },
    { id: 238, title: "Diamond Mines", category: "South Africa", price: 410, image: "https://covers.openlibrary.org/b/isbn/9781776090615-L.jpg" },
    { id: 239, title: "Table Mountain Tales", category: "South Africa", price: 385, image: "https://covers.openlibrary.org/b/isbn/9781776090616-L.jpg" },
    { id: 240, title: "Wild Coast Whispers", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090617-L.jpg" },
    { id: 241, title: "Robben Island Record", category: "South Africa", price: 420, image: "https://covers.openlibrary.org/b/isbn/9781776090618-L.jpg" },
    { id: 242, title: "The Trek", category: "South Africa", price: 370, image: "https://covers.openlibrary.org/b/isbn/9781776090619-L.jpg" },
    { id: 243, title: "Safari Secrets", category: "South Africa", price: 395, image: "https://covers.openlibrary.org/b/isbn/9781776090620-L.jpg" },
    { id: 244, title: "Veld Victory", category: "South Africa", price: 365, image: "https://covers.openlibrary.org/b/isbn/9781776090621-L.jpg" },
    { id: 245, title: "The Gold Rush", category: "South Africa", price: 380, image: "https://covers.openlibrary.org/b/isbn/9781776090622-L.jpg" },
    { id: 246, title: "Zulu Warrior", category: "South Africa", price: 390, image: "https://covers.openlibrary.org/b/isbn/9781776090623-L.jpg" },
    { id: 247, title: "The Proteas", category: "South Africa", price: 350, image: "https://covers.openlibrary.org/b/isbn/9781776090624-L.jpg" },
    { id: 248, title: "Springbok Glory", category: "South Africa", price: 400, image: "https://covers.openlibrary.org/b/isbn/9781776090625-L.jpg" },
    { id: 249, title: "Bafana Bafana", category: "South Africa", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781776090626-L.jpg" },
    { id: 250, title: "The Cape Doctor", category: "South Africa", price: 375, image: "https://covers.openlibrary.org/b/isbn/9781776090627-L.jpg" },

    // Kids
    { id: 251, title: "Harry Potter and the Sorcerer's Stone", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg" },
    { id: 252, title: "Matilda", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780142410370-L.jpg" },
    { id: 253, title: "Charlotte's Web", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780064400558-L.jpg" },
    { id: 254, title: "The Lion, the Witch and the Wardrobe", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780064471046-L.jpg" },
    { id: 255, title: "The Lightning Thief", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg" },
    { id: 256, title: "The Sea of Monsters", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780786856866-L.jpg" },
    { id: 257, title: "The Titan's Curse", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780786856867-L.jpg" },
    { id: 258, title: "The Battle of the Labyrinth", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780786856868-L.jpg" },
    { id: 259, title: "The Last Olympian", category: "Kids", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780786856869-L.jpg" },
    { id: 260, title: "Wonder", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780375869020-L.jpg" },
    { id: 261, title: "The BFG", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780142410387-L.jpg" },
    { id: 262, title: "James and the Giant Peach", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780142410363-L.jpg" },
    { id: 263, title: "Charlie and the Chocolate Factory", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780142410318-L.jpg" },
    { id: 264, title: "Holes", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780440414803-L.jpg" },
    { id: 265, title: "Bridge to Terabithia", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780064401845-L.jpg" },
    { id: 266, title: "Diary of a Wimpy Kid", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780810993136-L.jpg" },
    { id: 267, title: "Green Eggs and Ham", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780394800165-L.jpg" },
    { id: 268, title: "The Cat in the Hat", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780394800011-L.jpg" },
    { id: 269, title: "Goodnight Moon", category: "Kids", price: 220, image: "https://covers.openlibrary.org/b/isbn/9780060775858-L.jpg" },
    { id: 270, title: "The Very Hungry Caterpillar", category: "Kids", price: 230, image: "https://covers.openlibrary.org/b/isbn/9780399226908-L.jpg" },
    { id: 271, title: "Harry Potter and the Chamber of Secrets", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780439064873-L.jpg" },
    { id: 272, title: "Harry Potter and the Prisoner of Azkaban", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg" },
    { id: 273, title: "Harry Potter and the Goblet of Fire", category: "Kids", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780439139595-L.jpg" },
    { id: 274, title: "Harry Potter and the Order of the Phoenix", category: "Kids", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780439358071-L.jpg" },
    { id: 275, title: "Harry Potter and the Half-Blood Prince", category: "Kids", price: 360, image: "https://covers.openlibrary.org/b/isbn/9780439785969-L.jpg" },
    { id: 276, title: "Harry Potter and the Deathly Hallows", category: "Kids", price: 370, image: "https://covers.openlibrary.org/b/isbn/9780545010221-L.jpg" },
    { id: 277, title: "The Hobbit", category: "Kids", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg" },
    { id: 278, title: "A Wrinkle in Time", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780312367541-L.jpg" },
    { id: 279, title: "The Giver", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780385732550-L.jpg" },
    { id: 280, title: "Hatchet", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9781416936473-L.jpg" },
    { id: 281, title: "The Bad Guys", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780545912402-L.jpg" },
    { id: 282, title: "Dog Man", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780545935173-L.jpg" },
    { id: 283, title: "Captain Underpants", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780590846288-L.jpg" },
    { id: 284, title: "Smile", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780545132060-L.jpg" },
    { id: 285, title: "Wings of Fire", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780545341462-L.jpg" },
    { id: 286, title: "The Tale of Despereaux", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780763625290-L.jpg" },
    { id: 287, title: "Esperanza Rising", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780439120425-L.jpg" },
    { id: 288, title: "The Miraculous Journey of Edward Tulane", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780763625894-L.jpg" },
    { id: 289, title: "The One and Only Ivan", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780061992254-L.jpg" },
    { id: 290, title: "Inside Out & Back Again", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780061962783-L.jpg" },
    { id: 291, title: "Brown Bear, Brown Bear, What Do You See?", category: "Kids", price: 210, image: "https://covers.openlibrary.org/b/isbn/9780805047905-L.jpg" },
    { id: 292, title: "The Lorax", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780394823379-L.jpg" },
    { id: 293, title: "Oh, the Places You'll Go!", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780679805274-L.jpg" },
    { id: 294, title: "Where the Sidewalk Ends", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780060256679-L.jpg" },
    { id: 295, title: "The Phantom Tollbooth", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780394820378-L.jpg" },
    { id: 296, title: "Beezus and Ramona", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780380709182-L.jpg" },
    { id: 297, title: "A Bear Called Paddington", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780062312181-L.jpg" },
    { id: 298, title: "Winnie-the-Pooh", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780525444435-L.jpg" },
    { id: 299, title: "The Secret Garden", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780064401883-L.jpg" },
    { id: 300, title: "Peter Pan", category: "Kids", price: 240, image: "https://covers.openlibrary.org/b/isbn/9780141322575-L.jpg" },
    { id: 301, title: "Little House on the Prairie", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780064400022-L.jpg" },
    { id: 302, title: "Mary Poppins", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780152058104-L.jpg" },
    { id: 303, title: "Alice's Adventures in Wonderland", category: "Kids", price: 230, image: "https://covers.openlibrary.org/b/isbn/9780141439761-L.jpg" },
    { id: 304, title: "The Wind in the Willows", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780143039044-L.jpg" },
    { id: 305, title: "The Chronicles of Narnia", category: "Kids", price: 450, image: "https://covers.openlibrary.org/b/isbn/9780066238500-L.jpg" },
    { id: 306, title: "Pippi Longstocking", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780142402498-L.jpg" },
    { id: 307, title: "How to Train Your Dragon", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780316085274-L.jpg" },
    { id: 308, title: "Big Nate", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780061944345-L.jpg" },
    { id: 309, title: "The Baby-Sitters Club", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780545174756-L.jpg" },
    { id: 310, title: "Goosebumps", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780590436502-L.jpg" },
    { id: 311, title: "The 39 Clues", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780545060394-L.jpg" },
    { id: 312, title: "Spirit Animals", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780545522434-L.jpg" },
    { id: 313, title: "I Survived", category: "Kids", price: 240, image: "https://covers.openlibrary.org/b/isbn/9780545116138-L.jpg" },
    { id: 314, title: "Who Was?", category: "Kids", price: 220, image: "https://covers.openlibrary.org/b/isbn/9780448431062-L.jpg" },
    { id: 315, title: "What Is?", category: "Kids", price: 220, image: "https://covers.openlibrary.org/b/isbn/9780448484112-L.jpg" },
    { id: 316, title: "Dork Diaries", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9781416980063-L.jpg" },
    { id: 317, title: "Warrior Cats", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780060000028-L.jpg" },
    { id: 318, title: "The Land of Stories", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780316201575-L.jpg" },
    { id: 319, title: "Sisters Grimm", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780810993518-L.jpg" },
    { id: 320, title: "The Spiderwick Chronicles", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780689837388-L.jpg" },
    { id: 321, title: "Magic Tree House", category: "Kids", price: 220, image: "https://covers.openlibrary.org/b/isbn/9780679824114-L.jpg" },
    { id: 322, title: "Junie B. Jones", category: "Kids", price: 210, image: "https://covers.openlibrary.org/b/isbn/9780679826422-L.jpg" },
    { id: 323, title: "Flat Stanley", category: "Kids", price: 220, image: "https://covers.openlibrary.org/b/isbn/9780064400565-L.jpg" },
    { id: 324, title: "The Boxcar Children", category: "Kids", price: 230, image: "https://covers.openlibrary.org/b/isbn/9780807508527-L.jpg" },
    { id: 325, title: "Encyclopedia Brown", category: "Kids", price: 240, image: "https://covers.openlibrary.org/b/isbn/9780142408889-L.jpg" },
    { id: 326, title: "Nancy Drew", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780448095011-L.jpg" },
    { id: 327, title: "The Hardy Boys", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780448089010-L.jpg" },
    { id: 328, title: "Choose Your Own Adventure", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9781933390000-L.jpg" },
    { id: 329, title: "The Wild Robot", category: "Kids", price: 330, image: "https://covers.openlibrary.org/b/isbn/9780316381994-L.jpg" },
    { id: 330, title: "Amari and the Night Brothers", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780062975164-L.jpg" },
    { id: 331, title: "Tristan Strong", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781368039932-L.jpg" },
    { id: 332, title: "Aru Shah", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9781368012355-L.jpg" },
    { id: 333, title: "The School for Good and Evil", category: "Kids", price: 350, image: "https://covers.openlibrary.org/b/isbn/9780062104892-L.jpg" },
    { id: 334, title: "Keeper of the Lost Cities", category: "Kids", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781442445932-L.jpg" },
    { id: 335, title: "The Mysterious Benedict Society", category: "Kids", price: 340, image: "https://covers.openlibrary.org/b/isbn/9780316057776-L.jpg" },
    { id: 336, title: "Escape from Mr. Lemoncello's Library", category: "Kids", price: 320, image: "https://covers.openlibrary.org/b/isbn/9780307931443-L.jpg" },
    { id: 337, title: "The Graveyard Book", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780060530921-L.jpg" },
    { id: 338, title: "Coraline", category: "Kids", price: 300, image: "https://covers.openlibrary.org/b/isbn/9780380807345-L.jpg" },
    { id: 339, title: "The Borrowers", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780152047375-L.jpg" },
    { id: 340, title: "The Indian in the Cupboard", category: "Kids", price: 280, image: "https://covers.openlibrary.org/b/isbn/9780380600120-L.jpg" },
    { id: 341, title: "Frindle", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780689806698-L.jpg" },
    { id: 342, title: "Tales of a Fourth Grade Nothing", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780142408810-L.jpg" },
    { id: 343, title: "The Mouse and the Motorcycle", category: "Kids", price: 270, image: "https://covers.openlibrary.org/b/isbn/9780380709243-L.jpg" },
    { id: 344, title: "Mr. Popper's Penguins", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780316058438-L.jpg" },
    { id: 345, title: "Stuart Little", category: "Kids", price: 250, image: "https://covers.openlibrary.org/b/isbn/9780064400565-L.jpg" },
    { id: 346, title: "The Trumpet of the Swan", category: "Kids", price: 260, image: "https://covers.openlibrary.org/b/isbn/9780064408677-L.jpg" },
    { id: 347, title: "Lemony Snicket: A Series of Unfortunate Events", category: "Kids", price: 310, image: "https://covers.openlibrary.org/b/isbn/9780064407663-L.jpg" },
    { id: 348, title: "The Neverending Story", category: "Kids", price: 380, image: "https://covers.openlibrary.org/b/isbn/9780140386332-L.jpg" },
    { id: 349, title: "The Last Kids on Earth", category: "Kids", price: 290, image: "https://covers.openlibrary.org/b/isbn/9780670016617-L.jpg" },
    { id: 350, title: "The Ickabog", category: "Kids", price: 360, image: "https://covers.openlibrary.org/b/isbn/9781338732870-L.jpg" }
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
        any4:     { name: 'Any 4 Books for R1050', num: 4, filter: 'All', price: 1050 },
        romance3: { name: 'Romance Bundle – 3 Books for R900', num: 3, filter: 'Romance', price: 900 },
        kids3:    { name: 'Learning Pack – 3 Books for R650', num: 3, filter: 'Kids', price: 650 },
        hoover3:  { name: 'Colleen Hoover Love Set', num: 3, filter: 'Romance', price: 900 }
    };
    return bundles[type] || null;
}

function openBundleSelection(bundleType) {
    currentBundle = getBundleConfig(bundleType);
    if (!currentBundle) return alert("Invalid bundle type");

    selectedBundleBooks = []; // Reset selection
    const modal = document.getElementById('bundleModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('bundleTitle').innerText = currentBundle.name;
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

    const filtered = books.filter(b => 
        currentBundle.filter === 'All' || b.category === currentBundle.filter
    );

    grid.innerHTML = filtered.map(b => {
        const isSelected = selectedBundleBooks.some(s => s.id === b.id);
        return `
            <div class="book ${isSelected ? 'selected-bundle-item' : ''}">
                <img src="${b.image}" onerror="this.src='${FALLBACK_IMAGE}';">
                <h3>${b.title}</h3>
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
        selectedBundleBooks.splice(index, 1);
    } else if (selectedBundleBooks.length < currentBundle.num) {
        selectedBundleBooks.push(book);
    } else {
        alert(`You can only select ${currentBundle.num} books.`);
    }

    renderBundleSelectionBooks();
    updateAddBundleButton();
}

function updateAddBundleButton() {
    const btn = document.getElementById('addBundleToCart');
    if (btn) {
        btn.disabled = selectedBundleBooks.length !== currentBundle.num;
        btn.innerText = btn.disabled 
            ? `Select ${currentBundle.num - selectedBundleBooks.length} more` 
            : `Add Bundle to Cart (R${currentBundle.price})`;
    }
}

function addBundleToCart() {
    const bundleItem = {
        id: Date.now(), // Unique ID for the bundle entry
        type: 'bundle',
        name: currentBundle.name,
        books: [...selectedBundleBooks],
        price: currentBundle.price
    };

    cart.push(bundleItem);
    saveAndRefresh();
    alert("Bundle added! ✓");
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
        alert(`${book.title} added! ✓`);
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
            ? `<strong>${item.name}</strong><br><small>${item.books.map(b=>b.title).join(", ")}</small>` 
            : item.title;

        return `
            <div class="cart-item">
                <p>${displayName} — R${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    }).join("");

    document.getElementById("checkoutTotal").innerText = total;
    
    // Update Hidden PayFast Fields
    const desc = cart.map(i => i.type === 'bundle' ? i.name : i.title).join(", ");
    if(document.getElementById("pf_amount")) document.getElementById("pf_amount").value = total.toFixed(2);
    if(document.getElementById("pf_description")) document.getElementById("pf_description").value = desc;
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

// Standard setup on load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("bookGrid")) renderBooks();
    if (document.getElementById("bundleGrid")) renderBundleBooks();
    if (document.getElementById("checkoutItems")) renderCheckout();
    updateCartCount();

    window.onclick = (event) => {
        const modal = document.getElementById('bundleModal');
        if (event.target === modal) closeBundleModal();
    };
});

function togglePaymentSection(method) {
    const pfArea = document.getElementById('payfast_btn_area');
    const eftArea = document.getElementById('eft_btn_area');
    const form = document.getElementById('checkoutForm');

    if (method === 'payfast') {
        pfArea.style.display = 'block';
        eftArea.style.display = 'none';
        // Ensure form goes to PayFast
        form.action = "https://www.payfast.co.za/eng/process";
    } else {
        pfArea.style.display = 'none';
        eftArea.style.display = 'block';
        // Prevent form from trying to post to PayFast
        form.action = "#";
    }
}

function handleEFTOrder() {
    // 1. Validate inputs first
    const firstName = document.getElementById('cust_first').value;
    const address = document.getElementById('shippingAddress').value;

    if (!firstName || !address) {
        alert("Please fill in your name and shipping address first!");
        return;
    }

    // 2. Gather Order Info
    const total = document.getElementById("checkoutTotal").innerText;
    const items = cart.map(item => item.type === 'bundle' ? item.name : item.title).join(", ");

    // 3. Create WhatsApp Message
    const message = `Hi! I've placed an EFT order.\n\n👤 Name: ${firstName}\n📚 Items: ${items}\n💰 Total: R${total}\n📍 Address: ${address}\n\nI will send the Proof of Payment shortly.`;
    
    const whatsappLink = `https://wa.me/2764218448?text=${encodeURIComponent(message)}`;

    // 4. Confirm and Redirect
    if(confirm("Confirm order? You will be redirected to WhatsApp to send your Proof of Payment.")) {
        localStorage.removeItem("cart"); // Clear cart
        window.location.href = whatsappLink;
    }
}