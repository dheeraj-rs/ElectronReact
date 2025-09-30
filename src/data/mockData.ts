import { Project, Feature } from '../types';

export const features: Feature[] = [
  {
    id: '1',
    title: 'Cross-Platform Development',
    description: 'Build once, deploy everywhere. Create applications that run seamlessly on Windows, macOS, and Linux using Electron and React.',
    icon: 'Monitor',
    category: 'development'
  },
  {
    id: '2',
    title: 'Native Performance',
    description: 'Leverage Chromium and Node.js to deliver fast, responsive desktop applications with access to native APIs.',
    icon: 'Zap',
    category: 'performance'
  },
  {
    id: '3',
    title: 'Modern UI/UX',
    description: 'Use React and modern CSS frameworks to create beautiful, intuitive interfaces that users love.',
    icon: 'Palette',
    category: 'design'
  },
  {
    id: '4',
    title: 'Auto Updates',
    description: 'Keep your application up-to-date with built-in auto-update mechanisms and seamless version management.',
    icon: 'RefreshCw',
    category: 'features'
  },
  {
    id: '5',
    title: 'Native Integrations',
    description: 'Access file systems, system notifications, tray icons, and other native features through Electron APIs.',
    icon: 'Layers',
    category: 'features'
  },
  {
    id: '6',
    title: 'Secure & Reliable',
    description: 'Implement robust security measures, code signing, and secure storage for sensitive data.',
    icon: 'Shield',
    category: 'security'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Desktop Task Manager',
    description: 'A powerful task management application with offline support, notifications, and cross-platform sync capabilities.',
    techStack: ['Electron', 'React', 'TypeScript', 'SQLite'],
    platform: 'Cross-platform',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },
  {
    id: '2',
    name: 'Code Editor Pro',
    description: 'Professional code editor with syntax highlighting, Git integration, and extensible plugin system.',
    techStack: ['Electron', 'React', 'Monaco Editor', 'Node.js'],
    platform: 'Cross-platform',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
  },
  {
    id: '3',
    name: 'Media Converter Studio',
    description: 'Fast and efficient media conversion tool supporting multiple formats with batch processing capabilities.',
    techStack: ['Electron', 'React', 'FFmpeg', 'Tailwind CSS'],
    platform: 'Cross-platform',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg'
  },
  {
    id: '4',
    name: 'Finance Tracker',
    description: 'Personal finance management tool with budgeting, expense tracking, and financial insights visualization.',
    techStack: ['Electron', 'React', 'Chart.js', 'IndexedDB'],
    platform: 'Cross-platform',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg'
  },
  {
    id: '5',
    name: 'Screenshot Annotator',
    description: 'Capture, annotate, and share screenshots with powerful editing tools and cloud synchronization.',
    techStack: ['Electron', 'React', 'Canvas API', 'AWS S3'],
    platform: 'Cross-platform',
    featured: false,
    imageUrl: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg'
  },
  {
    id: '6',
    name: 'Database Manager',
    description: 'Universal database management tool with query editor, schema visualization, and performance monitoring.',
    techStack: ['Electron', 'React', 'SQL.js', 'D3.js'],
    platform: 'Cross-platform',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
  }
];
