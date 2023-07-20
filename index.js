db = connect("mongodb://localhost/my_music_db")

// songs collection
const songs = [
    {
        title: "Through the Dark",
        album: "Midnight Memories",
        artists: ["One Direction"]

    },
    {
        title: "Melting",
        album: "Por Vida",
        artists: ["Kali Uchis"]

    },
    {
        title: "Snooze",
        album: "SOS",
        artists: ["SZA"]

    },
    {
        title: "Die For You",
        album: "Die For Youe",
        artists: ["The Weeknd", "Ariana Grande"]

    },
    {
        title: "Come Inside of My Heart",
        album: "CLAPCLAPCLAP!",
        artists: ["IV of Spades"]

    },
    {
        title: "Adore You",
        album: "Fine Line",
        artists: ["Harry Styles"]

    },
    {
        title: "I Really Like You",
        album: "Emotion",
        artists: ["Carly Rae Jepsen"]

    },
    {
        title: "Never Not",
        album: "I met you when I was 18",
        artists: ["Lauv"]

    },
    {
        title: "Mine",
        album: "Cosmic",
        artists: ["Bazzi"]

    },
    {
        title: "Beautiful",
        album: "Beautiful",
        artists: ["Bazzi", "Camila Cabello"]

    }
]
db.songs.insertMany(songs);

// artists collection
const artists = [
    {
        name: "One Direction",
        date_of_birth: "23-07-2010",
        genres: ["Pop"]
    },
    {
        name: "Kali Uchis",
        date_of_birth: "17-07-1994",
        genres: ["R&B", "Soul"]
    },
    {
        name: "SZA",
        date_of_birth: "08-11-1989",
        genres: ["R&B", "Soul"]
    },
    {
        name: "The Weeknd",
        date_of_birth: "16-02-1990",
        genres: ["R&B", "Soul", "EDM"]
    },
    {
        name: "Ariana Grande",
        date_of_birth: "26-06-1993",
        genres: ["Pop", "R&B"]
    },
    {
        name: "IV of Spades",
        date_of_birth: "01-07-2014",
        genres: ["Pop Rock", "Indie", "Funk Rock"]
    },
    {
        name: "Harry Styles",
        date_of_birth: "01-02-1994",
        genres: ["Soft Rock", "Rock", "Britpop"]
    },
    {
        name: "Carly Rae Jepsen",
        date_of_birth: "21-11-1985",
        genres: ["Pop"]
    },
    {
        name: "Lauv",
        date_of_birth: "08-08-1994",
        genres: ["Pop", "Electropop", "R&B", "Alt-Pop"]
    },
    {
        name: "Bazzi",
        date_of_birth: "28-08-1997",
        genres: ["Pop", "R&B"]
    },
]
db.artists.insertMany(artists);

//popular songs collection
const popularSongs = [
    {
        title: "Through the Dark",
        plays: "91000",
        time_period: "2013 to 2023"
    },
    {
        title: "Melting",
        plays: "231000",
        time_period: "2015 to 2023"
    },
    {
        title: "Snooze",
        plays: 506000,
        time_period: "2022 to 2023"
    },
    {
        title: "Die For You",
        plays: 506000,
        time_period: "2023"
    },
    {
        title: "Come Inside of My Heart",
        plays: 157000,
        time_period: "2019 to 2023"
    },
    {
        title: "Adore You",
        plays: "1000000",
        time_period: "2019 to 2023"
    },
    {
        title: "I Really Like You",
        plays: 454000,
        time_period: "2015 to 2023"
    },
    {
        title: "Never Not",
        plays: 267000,
        time_period: "2018 to 2023"
    },
    {
        title: "Mine",
        plays: 975000,
        time_period: "2018 to 2023"
    },
    {
        title: "Beautiful",
        plays: 688000,
        time_period: "2018 to 2023"
    }
]
db.popular_songs.insertMany(popularSongs);