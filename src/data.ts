export type SlideType = {
  type: "me" | "home" | "project",
  name: string,
  labels: {
    name: string,
    color: string,
    color2: string
  }[],
  description: string[],
  dots: string[],
  links: {
    name: string,
    link: string
  }[],
  miniature: string,
  iframe: string,
  image: string
}

export const slideList: SlideType[] = [
  {
    type: "me",
    name: "ABOUT ME",
    labels: [],
    description: ["I graduated from Game Research and Design at Kazimierz Wielki University in Bydgoszcz, where I gained solid theoretical background, but also practical skills in documentation management, work methodology, teamwork, feedback and data analysis, and above all - game design.",
	"I have been working and developing in the industry for over 6 years. I had the pleasure of working in small teams, where it was necessary to constantly expand my skills and leave my comfort zone. I contributed to the creation of a number of different games, which you can watch on the following slides.",
	"I am passionate about player psychology, User Experience and UI. For several years I ran a modest YouTube channel dedicated to gaming, which translated into the ability to prepare promotional materials, which were useful in every subsequent project.", 
	"As a hobby, I play tabletop, tabletop and TCG games, and I have also been running tabletop RPG games for years. I am also primarily an active video game player, I follow the industry and trends, also in the Indie games segment."],
    dots: [],
    links: [],
    miniature: "me.png",
    iframe: "",
    image: "me.png"
  },
  {
    type: "home",
    name: "About me",
    labels: [],
    description: ["About me dude"],
    dots: [],
    links: [],
    miniature: "home.svg",
    iframe: "",
    image: ""
  },
  {
    type: "project",
    name: "LUSTRA: LACHEA'S TALE (2025)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "UI/UX",
        color: "#091930",
        color2: "#214C74"
      },
      {
        name: "UE 5.5",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: [
      "Lustra: Lachea's Tale is a third-person action game combining deep narrative, exploration, settlement building and management.",
      "My role in the project was to design new mechanics, gameplay elements, environmental puzzles, maintain gameplay balance, as well as work on the open world layout, UI/UX design, work with documentation, and prepare marketing materials."
    ],
    dots: [
      "Designing new solutions and mechanics,",
      "Working on overall gameplay balance,",
      "Improving and iterating mechanics and solutions,",
      "Data collection and analysis,",
      "UI / UX design,",
      "Working on narrative and storyline,"
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/3301430/LUSTRA_Opowie_Lachei/"
      }
    ],
    miniature: "button_lustra.png",
    iframe: "https://youtu.be/TwhGpS3UW9M",
    image: ""
  },
  {
    type: "project",
    name: "PROJECT VERNE (2024)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "UI/UX",
        color: "#091930",
        color2: "#214C74"
      },
      {
        name: "UE 5",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: [
      "Project Verne is an action adventure game with RPG elements. We worked on it with the Paranoid Interactive team for 2 years. Unfortunately, the project has not been published yet.",
      "My role in the project was primarily gameplay design, player progression system, combat system, enemies and bosses and their behaviors, as well as level design, blocking cinematics and co-creating the story layer.",
	  "I can tell you more about the project upon request."
    ],
    dots: [
      "Designing new solutions and mechanics,",
      "Designing the game world, narrative, dialogues, directing cutscenes,",
      "Working on the overall balance of the game,",
      "Maintaining project documentation,",
      "UI / UX design,",
      "Level blocking, partial level art,"
    ],
    links: [
    ],
    miniature: "button_verne.png",
    iframe: "https://youtu.be/c9H_cw_zZnY",
    image: ""
  },
  {
    type: "project",
    name: "FROZENHEIM (2023)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "UI/UX",
        color: "#091930",
        color2: "#214C74"
      },
      {
        name: "UE 4",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["Frozenheim is a combination of RTS and city-builder with real-time combat and extensive colony management systems. The game features an extensive single-player campaign and allows for online multiplayer.",
	"I had the pleasure of developing the project since its release, adding improvements, player-requested features, developing game modes, working on gameplay balance and introducing new content. Developing the game after its release was a very exciting task for me."],
    dots: [
      "Designing new solutions and mechanics,",
      "Working on overall gameplay balance,",
      "Data collection and analysis,",
      "UI / UX design,",
      "Improving and iterating mechanics and solutions,",
      "Working with localization,"
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1134100/Frozenheim/"
      }
    ],
    miniature: "button_frozenheim.png",
    iframe: "https://youtu.be/VWxsrDdKBR8?si=-OPT0YobKJT5PD-n",
    image: ""
  },
  {
    type: "project",
    name: "SERIOUS FUN FOOTBALL (2022)",
    labels: [
      {
        name: "Code",
        color: "#39374F",
        color2: "#4F4C65"
      },
      {
        name: "UI/UX",
        color: "#091930",
        color2: "#214C74"
      },
      {
        name: "UE 4",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["Serious Fun Football is an arcade football game with simplified rules, played in a 3vs3 format. It includes a single player mode and online and local multiplayer modes.",
	"In this project I held the position of Developer - I was responsible for coding (at the EU Blueprints level) of the game systems, prototyping solutions, preparing shaders, working on optimization and network code, and designing and develping Widget Blueprints."],
    dots: [
      "Design, prototyping and implementation of solutions and game mechanics,",
	  "UI design, prototyping and implementation,",
	  "Preparing marketing materials,",
	  "Managing the game's profile on Steamworks,",
	  "Managing and moderating the game's social channels,",
	  "Implementing solutions connecting an external database for rankings,",
	  "Organizing and conducting closed tests and data analysis,"
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1392560/Serious_Fun_Football/"
      },
    ],
    miniature: "button_sff.svg",
    iframe: "https://www.youtube.com/watch?v=nI-mtS-ot3Y",
    image: "background.svg"
  },
  {
    type: "project",
    name: "WIGGLESTICKS (2020)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
	  {
        name: "Code",
        color: "#39374F",
        color2: "#4F4C65"
      },
      {
        name: "MOD",
        color: "#A7BF59",
        color2: "#C2DA74"
      }
    ],
    description: ["Wigglesticks is an original modification that adds a playable hero to Don't Starve Together. The mod has been among the 20 most downloaded heroes for over a year and has found its way onto the hard drives of over 14,000 players.",
	"To create the modification, I used graphic materials from another modification, but the entire coding and design layer was done by me in LUA.",
	"I also prepared all the marketing materials - trailer, promotional graphics etc."],
    dots: [
      "Designing characters and unique mechanics,",
	  "Programming mechanics in Lua,",
	  "Making updates and improvements,",
	  "Preparing promotional materials."
    ],
    links: [
      {
        name: "Steam",
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2403922371"
      },
    ],
    miniature: "button_wigglesticks.svg",
    iframe: "https://www.youtube.com/watch?v=OVikjSO3XAs&pp=ygUQd2lnZ2xlc3RpY2tzIG1vZA%3D%3D",
    image: "background.svg"
  },
  {
    type: "project",
    name: "DUSKVALE (2020)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
	  {
        name: "Code",
        color: "#39374F",
        color2: "#4F4C65"
      },
      {
        name: "Unity 3D",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["An original project lasting several months, the aim of which was to learn and improve skills in using Unity and programming in C#. I designed a simple RPG game with turn based combat, built a GDD for it and prototyped a playable demo.", 
	"The demo contains simple yet functional systems such as: hero equipment, dialogue system, turn-based combat system."],
    dots: [
      "Design, prototyping and implementation of solutions and game mechanics,",
	  "Programming mechanics in C#,",
	  "Designing and implementing UI,",
	  "Preparing promotional materials."
    ],
    links: [
      {
        name: "Demo",
        link: "https://drive.google.com/drive/folders/13HWzRhgadgPotpiH0R2x86EomfD_ruOx?usp=drive_link"
      },
      {
        name: "Teaser #1",
        link: "https://youtu.be/NhTMl-9u3Kg?si=6kbsUIQbz2rPvGkK"
      },
      {
        name: "GDD",
        link: "https://drive.google.com/file/d/1XuEYz7SVxGNHYSFWC7GKkYEM5ibQFGqs/view?usp=drive_link"
      },
    ],
    miniature: "button_duskvale.png",
    iframe: "https://www.youtube.com/watch?v=RUO_uADeohA&pp=ygUIZHVza3ZhbGU%3D",
    image: "background.svg"
  },
  {
    type: "project",
    name: "BOUNCEBALL (2023)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
	  {
        name: "Code",
        color: "#39374F",
        color2: "#4F4C65"
      },
      {
        name: "UE 5",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["Authorial project implemented as part of a several-day game jam. I worked alone using free assets available online. My main goal was to create a project that would be a playable, representative demo after completing the challenge.",
	"Bounceball is a simple arcade game. The player's task is to bounce the ball off the edges of closed levels so that its flight path intersects all the diamonds. The gameplay is fast, dynamic and above all satisfying."],
    dots: [
      "Design, prototyping and implementation of solutions and game mechanics,",
	  "Level design",
	  "Programming mechanics in UE Blueprints,",
	  "Designing and implementing UI,",
	  "Preparing promotional materials."
    ],
    links: [
      {
        name: "Demo",
        link: "https://drive.google.com/drive/folders/1aQYJDJURl4kymxdJKcNWwfhupECkyISH?usp=drive_link"
      }
    ],
    miniature: "button_bounceball.png",
    iframe: "https://youtu.be/P6EYlqCVnQ8",
    image: "background.svg"
  },
  {
    type: "project",
    name: "LEGENDARY BOXING BELT (2022)",
    labels: [
      {
        name: "LEVEL DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
	  {
        name: "Code",
        color: "#39374F",
        color2: "#4F4C65"
      },
      {
        name: "Unity 3D",
        color: "#335949",
        color2: "#4B7060"
      },
      {
        name: "VR",
        color: "#655E7D",
        color2: "#7C7495"
      }
    ],
    description: ["An arcade, action boxing game in a fantasy setting. A game with a humorous tone and pop culture references, in which the player takes on the role of an aspiring boxer. The player's goal is to win the highest possible distinction - the only legendary boxing belt. To do this, however, he must go through a series of fights and tournaments.",
	"My role in the project is to design levels, test, and prepare promotional materials for the game."],
    dots: [
	  "Level design,",
	  "Testing and data analysis,",
	  "Preparing promotional materials."
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1410660/Legendary_Boxing_Belt/"
      }
    ],
    miniature: "button_legendaryboxingbelt.png",
    iframe: "https://www.youtube.com/watch?v=MfczKGX3zH0&pp=ygUVbGVnZW5kYXJ5IGJveGluZyBiZWx0",
    image: "background.svg"
  },
  {
    type: "project",
    name: "DARKEST DUNGEON BOARDGAME MODS (2025)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "Boardgame",
        color: "#655E7D",
        color2: "#7C7495"
      }
    ],
    description: ["As a member of the unofficial modding group around the Darkest Dungeon board game, I have designed and made numerous Print&Play mods under the pseudonym Near. Our main goal was to remake all the content that was promised by the original creator of the game during crowdfunding capaign that has never been delivered.",
	"I have also created and managed a website that collects all the community's finished mods, for convenience and clarity."],
    dots: [
	  "Designing mechanics and systems,",
	  "Testing and data analysis,",
	  "Feedback and joint work with other members of the group,",
	  "Preparing components for the game in the Print&Play version"
    ],
    links: [
      {
        name: "Webpage",
        link: "https://danielminder.wixsite.com/dd-mods"
      }
    ],
    miniature: "button_ddmods.png",
    iframe: "https://www.youtube.com/watch?v=MfczKGX3zH0&pp=ygUVbGVnZW5kYXJ5IGJveGluZyBiZWx0",
    image: "background.svg"
  },
  {
    type: "project",
    name: "NEON PONG (2020)",
    labels: [
      {
        name: "GAME DESIGN",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "Unity 3D",
        color: "#335949",
        color2: "#4B7060"
      },
      {
        name: "VR",
        color: "#655E7D",
        color2: "#7C7495"
      }
    ],
    description: ["An arcade sports game, similar to squash, designed for virtual reality (VR) devices. The player's task is to hit the ball in such a way as to hit selected tiles on the wall. The game includes various game modes - with a shield instead of rackets, with special types of tiles, and based on colors."],
    dots: [
	  "Designing game mechanics and modes,",
	  "Testing and data analysis,",
	  "Preparing promotional materials."
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1124290/Neon_Pong/"
      }
    ],
    miniature: "button_neonpong.png",
    iframe: "https://youtu.be/6pjhvC1N0ck?si=NSCbzO4fuTglyVHu",
    image: "background.svg"
  },
  {
    type: "project",
    name: "FARMING LIFE (2021)",
    labels: [
      {
        name: "CINEMATICS",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "Unity 3D",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["A low-poly farming simulator. The player receives a neglected farm from one of the family members and decides to take care of it.",
	"My task, in the case of Farming Life, was to prepare an introductory movie sequence (cutscene) on the game engine, using Cinemachine. The whole thing was designed in consultation with a team of designers and programmers. The result can be seen below."],
    dots: [
	  "Designing and preparing cutscenes using Cinemachine."
    ],
    links: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1031270/Farming_Life/"
      }
    ],
    miniature: "button_farminglife.png",
    iframe: "https://drive.google.com/file/d/1P1z_Qr19HERnwRcxMTub1Te8UkO-brdC/view?usp=drive_link",
    image: "background.svg"
  },
  {
    type: "project",
    name: "RPG SCENARIOS",
    labels: [
      {
        name: "CINEMATICS",
        color: "#C0443A",
        color2: "#DA5D52"
      },
      {
        name: "Unity 3D",
        color: "#335949",
        color2: "#4B7060"
      }
    ],
    description: ["I have been regularly playing tabletop role-playing games for over 12 years, in the overwhelming majority of cases as a Game Master or host. I have had the opportunity to learn over 25 different games and prepare dozens of scenarios. I have also led adventures at conventions and meetings, led discussion panels and workshops on running such games.",
	"One of my most ambitious personal projects is my own tRPG game, which I work on in my free time."],
    dots: [
	  "Designing mechanics and systems,",
	  "Designing game worlds (worldbuilding),",
	  "Writing scripts and designing NPCs.",
    ],
    links: [
      {
        name: "Download",
        link: "https://drive.google.com/drive/folders/1pgiiLHPbiu9DoH40lr357a_fjq7x4oKx?usp=drive_link"
      }
    ],
    miniature: "button_rpg.png",
    iframe: "",
    image: "rpg_scenarios.png"
  },
]