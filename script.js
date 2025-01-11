    const emojis = [
            { emoji: "😊", name: "Smiling Face with Smiling Eyes", meaning: "A yellow face with smiling eyes and a warm, closed smile." },
            { emoji: "😂", name: "Face with Tears of Joy", meaning: "A yellow face with a big grin, uplifted eyebrows, and tears welling up from laughing." },
            { emoji: "❤️", name: "Red Heart", meaning: "A classic red love heart, used for expressions of love." },
            { emoji: "👍", name: "Thumbs Up", meaning: "A hand with thumb extended upwards, indicating approval." },
            { emoji: "🎉", name: "Party Popper", meaning: "A party popper, as used for celebrations and parties." },
            { emoji: "🌟", name: "Glowing Star", meaning: "A star that glows, often used to highlight something special." },
            { emoji: "🙌", name: "Raising Hands", meaning: "Two hands raised in the air, celebrating success or a good outcome." },
            { emoji: "😎", name: "Smiling Face with Sunglasses", meaning: "A yellow face with a wide grin and sunglasses, depicting a cool attitude." },
            { emoji: "🤔", name: "Thinking Face", meaning: "A face with a hand on its chin, pondering or thinking deeply." },
            { emoji: "😢", name: "Crying Face", meaning: "A face with a tear streaming down, showing sadness or pain." },
            { emoji: "💡", name: "Light Bulb", meaning: "A light bulb used to represent an idea or inspiration." },
            { emoji: "🔥", name: "Fire", meaning: "A flame, often used to signify something is awesome or on fire." },
            { emoji: "😴", name: "Sleeping Face", meaning: "A face with closed eyes and a mouth, indicating sleepiness." },
            { emoji: "🚀", name: "Rocket", meaning: "A rocket heading into space, representing speed, ambition, or exploration." },
            { emoji: "🌈", name: "Rainbow", meaning: "A colorful arc in the sky, often associated with hope and positivity." },
            { emoji: "🎶", name: "Musical Notes", meaning: "Three eighth notes (quavers), used to represent music or singing." },
            { emoji: "🌍", name: "Earth Globe Europe-Africa", meaning: "The globe shown with Europe and Africa visible." },
            { emoji: "🎂", name: "Birthday Cake", meaning: "A frosted cake with lit candles, used to celebrate birthdays." },
            { emoji: "🍕", name: "Pizza", meaning: "A slice of pepperoni pizza, a popular snack food." },
            { emoji: "🏀", name: "Basketball", meaning: "A basketball, used in the sport of basketball." },
            { emoji: "✈️", name: "Airplane", meaning: "An airplane taking off or flying." },
            { emoji: "🏆", name: "Trophy", meaning: "A trophy, used to celebrate victory or achievement." },
            { emoji: "🌹", name: "Rose", meaning: "A red rose, often used to express love or romance." },
            { emoji: "🍩", name: "Doughnut", meaning: "A classic doughnut with pink icing and sprinkles." },
            { emoji: "🐶", name: "Dog Face", meaning: "A friendly, cartoon-styled face of a dog." },
            { emoji: "🐱", name: "Cat Face", meaning: "A cartoon-styled face of a cat, often shown with whiskers." },
            { emoji: "🐼", name: "Panda Face", meaning: "A cartoon-styled face of a panda." },
            { emoji: "🦄", name: "Unicorn Face", meaning: "A mystical unicorn head in cartoon style." },
            { emoji: "🦋", name: "Butterfly", meaning: "A beautiful butterfly, often used to represent transformation." },
            { emoji: "🍎", name: "Red Apple", meaning: "A red apple, often associated with health or education." },
            { emoji: "🍉", name: "Watermelon", meaning: "A slice of watermelon, a refreshing summer fruit." },
            { emoji: "☀️", name: "Sun", meaning: "A bright yellow sun, often used to represent sunny weather." },
            { emoji: "☁️", name: "Cloud", meaning: "A fluffy white cloud, often used to represent cloudy weather." },
            { emoji: "⚡", name: "High Voltage", meaning: "A bolt of lightning, often used to represent energy or power." },
            { emoji: "❄️", name: "Snowflake", meaning: "A snowflake, often associated with winter or cold weather." },
            { emoji: "⛄", name: "Snowman", meaning: "A snowman, often associated with winter and holidays." },
            { emoji: "🌊", name: "Water Wave", meaning: "A wave of water, often used to represent the sea or surfing." },
            { emoji: "🎵", name: "Musical Note", meaning: "A single musical note, often used to represent music." },
            { emoji: "📚", name: "Books", meaning: "A stack of books, often used to represent studying or reading." },
            { emoji: "💻", name: "Laptop", meaning: "A laptop computer, often used to represent work or technology." },
            { emoji: "📱", name: "Mobile Phone", meaning: "A smartphone, often used to represent communication or technology." },
            { emoji: "🎧", name: "Headphone", meaning: "A pair of headphones, used for listening to music." },
            { emoji: "🎤", name: "Microphone", meaning: "A microphone, often used for singing or public speaking." },
            { emoji: "🖌️", name: "Paintbrush", meaning: "A paintbrush, often used to represent art or creativity." },
            { emoji: "✏️", name: "Pencil", meaning: "A classic wooden pencil, often used for writing or drawing." },
            { emoji: "📸", name: "Camera", meaning: "A camera, often used to capture photos." },
            { emoji: "⏰", name: "Alarm Clock", meaning: "An alarm clock, used to represent waking up or time." },
            { emoji: "🎮", name: "Video Game Controller", meaning: "A controller for a video game console, used to represent gaming." },
            { emoji: "🏓", name: "Ping Pong", meaning: "A paddle and a ball, representing the sport of table tennis." },
            { emoji: "🧩", name: "Puzzle Piece", meaning: "A jigsaw puzzle piece, often used to represent a problem-solving scenario." },
            { emoji: "🍔", name: "Hamburger", meaning: "A classic burger with a beef patty, lettuce, and tomato." },
            { emoji: "🍟", name: "French Fries", meaning: "A carton of crispy golden French fries." },
            { emoji: "🍭", name: "Lollipop", meaning: "A round, colorful lollipop." },
            { emoji: "🎲", name: "Game Die", meaning: "A single six-sided die, often used in board games." },
            { emoji: "🕹️", name: "Joystick", meaning: "A joystick used to play arcade or video games." },
            { emoji: "📖", name: "Open Book", meaning: "An open book, often used to represent learning or studying." },
            { emoji: "✒️", name: "Fountain Pen", meaning: "A pen with a nib, often used for formal writing." },
            { emoji: "🖊️", name: "Pen", meaning: "A simple pen, often used for everyday writing." },
            { emoji: "🔑", name: "Key", meaning: "A key, used to open doors or locks." },
            { emoji: "🔒", name: "Closed Lock", meaning: "A padlock in a closed position, representing security." },
            { emoji: "🌻", name: "Sunflower", meaning: "A bright yellow sunflower, representing warmth and positivity." },
            { emoji: "🌳", name: "Deciduous Tree", meaning: "A broad green tree, often used to represent nature or a forest." },
            { emoji: "🌵", name: "Cactus", meaning: "A spiky green cactus, often associated with deserts." },
            { emoji: "🌺", name: "Hibiscus", meaning: "A pink hibiscus flower, often used to represent beauty and tropical islands." },
            { emoji: "🌾", name: "Sheaf of Rice", meaning: "A golden sheaf of rice, often associated with farming or harvest." },
            { emoji: "🍒", name: "Cherries", meaning: "Two bright red cherries with green stems." },
            { emoji: "🍓", name: "Strawberry", meaning: "A ripe, juicy strawberry." },
            { emoji: "🍌", name: "Banana", meaning: "A ripe yellow banana, often associated with health and energy." },
            { emoji: "🥭", name: "Mango", meaning: "A ripe orange mango, often associated with summer and tropical flavors." },
            { emoji: "🧸", name: "Teddy Bear", meaning: "A cute, plush teddy bear, often used to represent childhood or comfort." },
            { emoji: "🎁", name: "Gift", meaning: "A wrapped present, often associated with celebrations or giving." },
            { emoji: "🎀", name: "Bow", meaning: "A decorative bow, often used for gifts." },
            { emoji: "🍋", name: "Lemon", meaning: "A bright yellow lemon, often associated with freshness." },
            { emoji: "⚽", name: "Soccer Ball", meaning: "A classic black-and-white soccer ball." },
            { emoji: "🏐", name: "Volleyball", meaning: "A volleyball, often used in the sport of volleyball." },
            { emoji: "🥎", name: "Softball", meaning: "A bright yellow softball used in sports." },
            { emoji: "❤️", name: "Red Heart", meaning: "To convey sincere declarations of love, gratitude, and affection"}
        ];

        const emojiGrid = document.getElementById("emoji-grid");
        const descriptionBox = document.getElementById("description");
        const emojiSymbol = document.getElementById("emoji-symbol");
        const emojiName = document.getElementById("emoji-name");
        const emojiMeaning = document.getElementById("emoji-meaning");

        emojis.forEach(emojiObj => {
            const emojiDiv = document.createElement("div");
            emojiDiv.classList.add("emoji");
            emojiDiv.textContent = emojiObj.emoji;
            emojiDiv.addEventListener("click", () => {
                emojiSymbol.textContent = emojiObj.emoji;
                emojiName.textContent = emojiObj.name;
                emojiMeaning.textContent = emojiObj.meaning;
                descriptionBox.style.display = "block";
            });
            emojiGrid.appendChild(emojiDiv);
        });


   
    