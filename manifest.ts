import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json'

export default defineManifest(async (env) => {
  // console.log("defineManifesttttt", env)
  return {
    manifest_version: 3,
    name: 'Organiser',
    description: 'Auto organize bookmarks',
    author:'Jory',
    version: packageJson.version,
    action: {
      default_title: 'Click to open sidebar',
      // default_popup: 'index.html',
      default_icon: {
        '32': 'emo.png',
        '72': 'emo.png',
        '128': 'emo.png',
        '512': 'emo.png',
      },
    },
    side_panel: {
      "default_path": "index.html"
    },
    content_scripts: [
      {
        matches: ['<all_urls>'],
        js: ['src/core/content-script.ts'],
        all_frames: true,
      },
    ],
    permissions: [
      "bookmarks",
      "tabs",
      "sidePanel"
    ],
    background: {
      service_worker: 'src/core/background.ts',
    },
  }
})
