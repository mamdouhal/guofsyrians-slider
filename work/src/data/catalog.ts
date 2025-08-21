export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export interface ChildCategory {
  id: string;
  name: string;
  links: Link[];
}

export interface ParentCategory {
  id: string;
  name: string;
  children: ChildCategory[];
}

export const catalog: ParentCategory[] = [
  {
    id: 'content',
    name: 'Content & Media',
    children: [
      {
        id: 'articles',
        name: 'Articles & Blogs',
        links: [
          {
            id: 'medium',
            title: 'Medium',
            description: 'Professional publishing platform for writers and readers worldwide',
            url: 'https://medium.com',
            icon: '📝'
          },
          {
            id: 'dev-to',
            title: 'DEV Community',
            description: 'Community of software developers sharing knowledge and experiences',
            url: 'https://dev.to',
            icon: '💻'
          },
          {
            id: 'hashnode',
            title: 'Hashnode',
            description: 'Blogging platform for developers and tech writers with great SEO',
            url: 'https://hashnode.com',
            icon: '📖'
          },
          {
            id: 'substack',
            title: 'Substack',
            description: 'Newsletter platform for independent writers and creators',
            url: 'https://substack.com',
            icon: '📰'
          }
        ]
      },
      {
        id: 'videos',
        name: 'Video Content',
        links: [
          {
            id: 'youtube',
            title: 'YouTube',
            description: 'World\'s largest video sharing platform with billions of hours of content',
            url: 'https://youtube.com',
            icon: '📺'
          },
          {
            id: 'vimeo',
            title: 'Vimeo',
            description: 'Professional video hosting and streaming for creators and businesses',
            url: 'https://vimeo.com',
            icon: '🎬'
          },
          {
            id: 'twitch',
            title: 'Twitch',
            description: 'Live streaming platform for gaming and creative content creators',
            url: 'https://twitch.tv',
            icon: '🎮'
          },
          {
            id: 'tiktok',
            title: 'TikTok',
            description: 'Short-form video platform for entertainment and viral content',
            url: 'https://tiktok.com',
            icon: '🎵'
          }
        ]
      },
      {
        id: 'podcasts',
        name: 'Podcasts',
        links: [
          {
            id: 'spotify',
            title: 'Spotify Podcasts',
            description: 'Discover and listen to millions of podcasts on various topics',
            url: 'https://spotify.com/podcasts',
            icon: '🎧'
          },
          {
            id: 'apple-podcasts',
            title: 'Apple Podcasts',
            description: 'Apple\'s podcast platform with exclusive shows and series',
            url: 'https://podcasts.apple.com',
            icon: '🍎'
          }
        ]
      }
    ]
  },
  {
    id: 'development',
    name: 'Development Tools',
    children: [
      {
        id: 'editors',
        name: 'Code Editors',
        links: [
          {
            id: 'vscode',
            title: 'Visual Studio Code',
            description: 'Free source-code editor with debugging and Git integration',
            url: 'https://code.visualstudio.com',
            icon: '💾'
          },
          {
            id: 'webstorm',
            title: 'WebStorm',
            description: 'Professional IDE for JavaScript and web development',
            url: 'https://jetbrains.com/webstorm',
            icon: '🛠️'
          },
          {
            id: 'sublime',
            title: 'Sublime Text',
            description: 'Sophisticated text editor for code, markup and prose',
            url: 'https://sublimetext.com',
            icon: '✨'
          },
          {
            id: 'atom',
            title: 'Atom',
            description: 'Hackable text editor for the 21st Century',
            url: 'https://atom.io',
            icon: '⚛️'
          }
        ]
      },
      {
        id: 'frameworks',
        name: 'Frameworks',
        links: [
          {
            id: 'react',
            title: 'React',
            description: 'JavaScript library for building user interfaces',
            url: 'https://react.dev',
            icon: '⚛️'
          },
          {
            id: 'vue',
            title: 'Vue.js',
            description: 'Progressive JavaScript framework for building UIs',
            url: 'https://vuejs.org',
            icon: '�'
          },
          {
            id: 'angular',
            title: 'Angular',
            description: 'Platform for building mobile and desktop web applications',
            url: 'https://angular.io',
            icon: '🅰️'
          },
          {
            id: 'svelte',
            title: 'Svelte',
            description: 'Cybernetically enhanced web apps with great performance',
            url: 'https://svelte.dev',
            icon: '🧡'
          }
        ]
      },
      {
        id: 'deployment',
        name: 'Deployment & Hosting',
        links: [
          {
            id: 'vercel',
            title: 'Vercel',
            description: 'Platform for frontend developers to deploy and scale applications',
            url: 'https://vercel.com',
            icon: '🚀'
          },
          {
            id: 'netlify',
            title: 'Netlify',
            description: 'Web development platform for building and deploying modern sites',
            url: 'https://netlify.com',
            icon: '🌐'
          },
          {
            id: 'github-pages',
            title: 'GitHub Pages',
            description: 'Static site hosting directly from your GitHub repository',
            url: 'https://pages.github.com',
            icon: '📄'
          }
        ]
      }
    ]
  },
  {
    id: 'learning',
    name: 'Learning Resources',
    children: [
      {
        id: 'courses',
        name: 'Online Courses',
        links: [
          {
            id: 'coursera',
            title: 'Coursera',
            description: 'Online courses from universities and companies worldwide',
            url: 'https://coursera.org',
            icon: '🎓'
          },
          {
            id: 'udemy',
            title: 'Udemy',
            description: 'Online learning marketplace with courses on various topics',
            url: 'https://udemy.com',
            icon: '📚'
          },
          {
            id: 'pluralsight',
            title: 'Pluralsight',
            description: 'Technology skills platform for developers and IT professionals',
            url: 'https://pluralsight.com',
            icon: '💡'
          },
          {
            id: 'freecodecamp',
            title: 'freeCodeCamp',
            description: 'Learn to code for free with hands-on projects and certifications',
            url: 'https://freecodecamp.org',
            icon: '🔥'
          }
        ]
      },
      {
        id: 'documentation',
        name: 'Documentation',
        links: [
          {
            id: 'mdn',
            title: 'MDN Web Docs',
            description: 'Comprehensive web development documentation and guides',
            url: 'https://developer.mozilla.org',
            icon: '📋'
          },
          {
            id: 'stackoverflow',
            title: 'Stack Overflow',
            description: 'Question and answer site for professional programmers',
            url: 'https://stackoverflow.com',
            icon: '❓'
          },
          {
            id: 'github-docs',
            title: 'GitHub Docs',
            description: 'Official documentation for GitHub features and workflows',
            url: 'https://docs.github.com',
            icon: '📜'
          },
          {
            id: 'devdocs',
            title: 'DevDocs',
            description: 'Unified documentation for developer tools and languages',
            url: 'https://devdocs.io',
            icon: '📖'
          }
        ]
      },
      {
        id: 'tutorials',
        name: 'Tutorials & Guides',
        links: [
          {
            id: 'codecademy',
            title: 'Codecademy',
            description: 'Interactive coding lessons and hands-on projects',
            url: 'https://codecademy.com',
            icon: '🎯'
          },
          {
            id: 'w3schools',
            title: 'W3Schools',
            description: 'Web development tutorials and references',
            url: 'https://w3schools.com',
            icon: '🌍'
          }
        ]
      }
    ]
  },
  {
    id: 'productivity',
    name: 'Productivity Tools',
    children: [
      {
        id: 'project-management',
        name: 'Project Management',
        links: [
          {
            id: 'notion',
            title: 'Notion',
            description: 'All-in-one workspace for notes, docs, and project management',
            url: 'https://notion.so',
            icon: '📝'
          },
          {
            id: 'trello',
            title: 'Trello',
            description: 'Visual project management with boards, lists, and cards',
            url: 'https://trello.com',
            icon: '📋'
          },
          {
            id: 'asana',
            title: 'Asana',
            description: 'Team collaboration and project management platform',
            url: 'https://asana.com',
            icon: '✅'
          }
        ]
      },
      {
        id: 'design',
        name: 'Design Tools',
        links: [
          {
            id: 'figma',
            title: 'Figma',
            description: 'Collaborative interface design and prototyping tool',
            url: 'https://figma.com',
            icon: '🎨'
          },
          {
            id: 'canva',
            title: 'Canva',
            description: 'Easy-to-use design tool for graphics and presentations',
            url: 'https://canva.com',
            icon: '🖌️'
          },
          {
            id: 'sketch',
            title: 'Sketch',
            description: 'Digital design toolkit for creating user interfaces',
            url: 'https://sketch.com',
            icon: '💎'
          }
        ]
      }
    ]
  }
];
