import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "One of Favorite Manga",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: 2,
          firstName: "Eren ",
          lastName: "Yeager",
          username: "erenyeager@gmail.com",
          password: "eren123",
          userHandler: "erenyeagerist",
          profilePic:
            "https://wallpapers.com/images/hd/eren-yeager-pfp-with-bloody-hand-c2zlw9o3puu0ihar.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 6, 18, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Captain",
          lastName: "Levi",
          username: "levi@gmail.com",
          password: "levi123",
          userHandler: "captainlevii",
          profilePic:
            "https://superheroera.com/wp-content/uploads/2021/08/Attack-on-Titan-how-Strong-Is-Captain-Levi-c.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2022, 9, 12, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Naruto",
          lastName: "Uzumaki",
          username: "naruto@gmail.com",
          password: "naruto123",
          userHandler: "narutouzumaki",
          profilePic:
            "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 8, 22, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "erenyeager@gmail.com",
        text: "Great post!",
      },
    ],
    username: "abhisekpanda789@gmail.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "abhisek-panda",
    file: "https://static.tvtropes.org/pmwiki/pub/images/mv5bmzzkoge4otitm2rlzi00zgm5ltlhmdatzwqxotlhytm5nmzkxkeyxkfqcgdeqxvymti2otmwndcw_v1.jpg",
    createdAt: new Date(2022, 11, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A Building With A Rooftop Balcony. location :Leicester, England, United Kingdom      ",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: 2,
          firstName: "Eren ",
          lastName: "Yeager",
          username: "erenyeager@gmail.com",
          password: "eren123",
          userHandler: "erenyeagerist",
          profilePic:
            "https://wallpapers.com/images/hd/eren-yeager-pfp-with-bloody-hand-c2zlw9o3puu0ihar.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2001, 5, 15, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: 9,
          firstName: "Vinsmoke ",
          lastName: "Sanji",
          username: "sanji@onepiece.com",
          password: "Sanji123",
          userHandler: "Sanji123",
          bookmarks: [],
          followers: [],
          profilePic:
            "https://w0.peakpx.com/wallpaper/232/968/HD-wallpaper-sanji-anime-one-piece-manga.jpg",
          following: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Captain",
          lastName: "Levi",
          username: "levi@gmail.com",
          password: "levi123",
          userHandler: "captainlevii",
          profilePic:
            "https://superheroera.com/wp-content/uploads/2021/08/Attack-on-Titan-how-Strong-Is-Captain-Levi-c.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          createdAt: formatDate(2021, 5, 12, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Naruto",
          lastName: "Uzumaki",
          username: "naruto@gmail.com",
          password: "naruto123",
          userHandler: "narutouzumaki",
          profilePic:
            "https://i.pinimg.com/originals/c0/ff/5b/c0ff5be1deb59a06e0d4a4c303e986cf.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 25, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "erenyeager@gmail.com",
        text: "Great post!",
      },
      {
        _id: uuid(),
        username: "naruto@gmail.com",
        text: "Wow!",
      },
    ],
    username: "abhisekpanda789@gmail.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "abhisek-panda",
    file: "https://images.pexels.com/photos/3030041/pexels-photo-3030041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    createdAt: new Date(2023, 1, 9, 11, 10, 18),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Fort💖 ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: 2,
          firstName: "Mic",
          lastName: "Mouse",
          username: "erenyeager@gmail.com",
          password: "eren123",
          userHandler: "eren123",
          profilePic:
            "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2020, 5, 19, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Donald",
          lastName: "Duck",
          username: "levi@gmail.com",
          password: "captainlevii",
          userHandler: "captainlevii",
          profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--L4LzR5aY8SMjeSy4NreBVChBQ71_KnRKw&usqp=CAU",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 5, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "erenyeager@gmail.com",
        text: "Great post!",
      },
    ],
    username: "abhisekpanda789@gmail.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "abhisek-panda",
    file: "https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=400",
    createdAt: new Date(2023, 5, 18, 12, 8, 15),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Playing new Car game",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: 2,
          firstName: "Mic",
          lastName: "Mouse",
          username: "erenyeager@gmail.com",
          password: "eren123",
          userHandler: "eren123",
          profilePic:
            "https://img.favpng.com/13/15/19/jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-png-favpng-fKs3cdqFhSJqTx45uP9eX8RBE.jpg",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    file: "https://thumbs.gfycat.com/BelatedFatalAgama-size_restricted.gif",
    comments: [
      {
        _id: uuid(),
        username: "levi@gmail.com",
        text: "Great post!",
      },
    ],
    username: "luffy@onepiece.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "Luffy123",
    createdAt: new Date(2021, 5, 25, 12, 0, 0),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Clouds🔥",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file: "https://media.tenor.com/PLqmB_SmXQMAAAAM/clouds-sky.gif",
    comments: [
      {
        _id: uuid(),
        username: "levi@gmail.com",
        text: "Great post!",
      },
    ],
    username: "zoro@gmail.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "zoro123",
    createdAt: formatDate(2020, 5, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "continue ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    file: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdxN3N0ODYzbG5xeml3bTlvNnFmMWl5eXc3dWN0YndqOWJyb2s4diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduYJ5WzNGsAadKU/giphy.gif",
    comments: [
      {
        _id: uuid(),
        username: "levi@gmail.com",
        text: "Great post!",
      },
    ],
    username: "levi@gmail.com",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "captainlevii",
    createdAt: formatDate(2020, 5, 18, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Mountains 🔥 ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: 9,
          firstName: "Tom",
          lastName: "Cat",
          username: "sanji@onepiece.com",
          password: "Sanji123",
          userHandler: "Sanji123",
          bookmarks: [],
          followers: [],
          profilePic:
            "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
          following: [],
          createdAt: formatDate(2021, 5, 18, 26, 30),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto@gmail.com",
        text: "Great post!",
      },
    ],
    username: "guts@berserk.com",
    file: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=600",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "guts123",
    createdAt: formatDate(2020, 5, 12, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Be Like Water🌊 ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sponge",
          lastName: "Bob",
          username: "naruto@gmail.com",
          password: "naruto123",
          userHandler: "naruto123",
          profilePic:
            "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto@gmail.com",
        text: "Great post!",
      },
    ],
    username: "levi@gmail.com",
    file: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "captainlevii",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Be Like Water🌊 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto@gmail.com",
        text: "Great post!",
      },
    ],
    username: "zoro@gmail.com",
    file: "https://images.pexels.com/photos/16500107/pexels-photo-16500107/free-photo-of-sunrise-over-the-boats-in-the-harbor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "zoro123",
    createdAt: formatDate(2021, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "This is a beautiful image of an amazing Nature💖 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "naruto@gmail.com",
        text: "Great post!",
      },
    ],
    username: "sanji@onepiece.com",
    file: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:
      "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png",
    userHandler: "Sanji123",
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Be Like Water🌊 ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "zoro@gmail.com",
        text: "Great post!",
      },
    ],
    username: "naruto@gmail.com",
    file: "https://media3.giphy.com/media/LpkhKVwp6dpCg/giphy.webp?cid=ecf05e476hf4n0pnew9mrrqm0m2n628kwvgnpiv5mnc4vy3t&ep=v1_gifs_related&rid=giphy.webp&ct=g",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "naruto123",
    createdAt: formatDate(2020, 7, 16, 26, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Be Like Water🌊 ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Donald",
          lastName: "Duck",
          username: "levi@gmail.com",
          password: "captainlevii",
          userHandler: "captainlevii",
          profilePic:
            "https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-182458,msid-58980271/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg?from=mdr",
          link: "",
          bio: "",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(2021, 5, 15, 26, 30),
          updatedAt: formatDate(),
        },
        {
          _id: uuid(),
          firstName: "Sponge",
          lastName: "Bob",
          username: "naruto@gmail.com",
          password: "naruto123",
          userHandler: "naruto123",
          profilePic:
            "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
          bookmarks: [],
          followers: [],
          following: [],
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "zoro@gmail.com",
        text: "Great post!",
      },
    ],
    username: "erenyeager@gmail.com",
    file: "https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    profilePic:
      "https://www.xtrafondos.com/wallpapers/vertical/kakashi-hatake-3605.jpg",
    userHandler: "eren123",
    createdAt: formatDate(2022, 5, 15, 26, 30),
    updatedAt: formatDate(),
  },
];
