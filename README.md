# 🎯 GunDetection Audio

GunDetection Audio is a modern web-based platform that simulates real-time gunshot detection using audio analysis and map visualization. This project was rebuilt using **Next.js** and focuses on frontend development, improving user experience through smooth animations and real-time interactivity. Originally based on the award-winning [GunShotDetector](https://github.com/RizPur/GunShotDetector), this project demonstrates how sound data can be processed and visualized for security and safety purposes.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blueviolet)](https://your-vercel-link.vercel.app)

## 🚀 Features

- **Real-time Audio Recording**: Users can record audio directly from the browser to simulate real-time sound analysis.
- **Simulated Gunshot Detection**: For demo purposes, the system simulates gunshot detection and instantly provides feedback.
- **Interactive Map**: Detected gunshot locations are visualized on a dynamic map using **React Leaflet**.
- **Smooth Animations**: **Framer Motion** is used for interactive animations that enhance the user experience.
- **Mobile-Responsive Design**: The app is designed to work seamlessly across different devices.

## 📸 Demo

Check out the live demo of **GunDetection Audio** here:

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blueviolet)](https://your-vercel-link.vercel.app)

![GunDetection Audio Screenshot](https://your-screenshot-link)

---

## 🛠️ Technologies

- **Next.js**: Rebuilt with Next.js for server-side rendering and API routes.
- **Tailwind CSS**: Provides modern and responsive styling.
- **Framer Motion**: Adds animations and interactive transitions.
- **React Leaflet**: For map rendering and gunshot location visualization.
- **Headless UI**: Used for modals and interactive components.
  
## 💡 Inspiration: [GunShotDetector](https://github.com/RizPur/GunShotDetector)

The original **GunShotDetector** project won the **JAIA Hackathon 2023** and featured machine learning models to detect and classify gunshots. The original tech stack involved:

- **Machine Learning Models**: Used CNN for classifying gunshot audio.
- **Backend**: Built with **Django** to manage real-time communications and data handling.
- **Frontend**: The original frontend was built with **React** and **Leaflet** for map visualizations.

This version of **GunDetection Audio** retains the core frontend features while simulating the detection process, and it’s built with **Next.js** for a smoother development experience.

---

## ⚙️ Installation

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dougsworth/GunAudioDetection.git
   cd GunAudioDetection
Install dependencies:
bash
Copy code
npm install
Run the development server:
bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.
📅 Future Enhancements

Machine Learning Integration: Implement real-time audio classification with ML models.
Notification System: Add real-time notifications for detected gunshots.
Enhanced Audio Analysis: Improve audio preprocessing for more accurate detection.
👥 Contributions

This project is open for contributions! Feel free to fork the repository and open a pull request with your improvements.

Fork the project.
Create your feature branch: git checkout -b feature-branch.
Commit your changes: git commit -m 'Add a feature'.
Push to the branch: git push origin feature-branch.
Open a pull request.
📄 License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

🎯 Contact and Acknowledgements

Inspired by the original work on GunShotDetector by the team at the JAIA Hackathon 2023, which included:

Douglas Byfield
Joel
David
Check out the original project in the link below:
https://github.com/RizPur/GunShotDetector

<<<<<<< HEAD
=======
```# GunAudioDetection

```
gun-detection-audio
├─ README.md
├─ backend
│  ├─ server.js
│  └─ uploads
└─ frontend
   ├─ .eslintrc.json
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_aarch64_0.106.15
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0 2.gz_
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1 2.gz_
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ 10.pack.gz
   │  │     │  ├─ 11.pack.gz
   │  │     │  ├─ 12.pack.gz
   │  │     │  ├─ 13.pack.gz
   │  │     │  ├─ 14.pack.gz
   │  │     │  ├─ 15.pack.gz
   │  │     │  ├─ 16.pack.gz
   │  │     │  ├─ 17.pack.gz
   │  │     │  ├─ 18.pack.gz
   │  │     │  ├─ 19.pack.gz
   │  │     │  ├─ 2 2.gz_
   │  │     │  ├─ 2.pack.gz
   │  │     │  ├─ 20.pack.gz
   │  │     │  ├─ 21.pack.gz
   │  │     │  ├─ 3 2.gz_
   │  │     │  ├─ 3.pack.gz
   │  │     │  ├─ 4 2.pack.gz
   │  │     │  ├─ 4.pack.gz
   │  │     │  ├─ 5.pack.gz
   │  │     │  ├─ 6.pack.gz
   │  │     │  ├─ 7 2.gz_
   │  │     │  ├─ 7.pack.gz
   │  │     │  ├─ 8.pack.gz
   │  │     │  ├─ 9.pack.gz
   │  │     │  ├─ index 2.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  ├─ index.pack.gz 2.gz_
   │  │     │  └─ index.pack.gz.old
   │  │     ├─ client-development-fallback
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  └─ index.pack.gz.old
   │  │     └─ server-development
   │  │        ├─ 0 2.pack.gz
   │  │        ├─ 0.pack.gz
   │  │        ├─ 1.pack.gz
   │  │        ├─ 10 2.pack.gz
   │  │        ├─ 10.pack.gz
   │  │        ├─ 11 2.pack.gz
   │  │        ├─ 11.pack.gz
   │  │        ├─ 12 2.pack.gz
   │  │        ├─ 12.pack.gz
   │  │        ├─ 13.pack.gz
   │  │        ├─ 14.pack.gz
   │  │        ├─ 2.pack.gz
   │  │        ├─ 3.pack.gz
   │  │        ├─ 4 2.pack.gz
   │  │        ├─ 4.pack.gz
   │  │        ├─ 5 2.pack.gz
   │  │        ├─ 5.pack.gz
   │  │        ├─ 6.pack.gz
   │  │        ├─ 7.pack.gz
   │  │        ├─ 8 2.gz_
   │  │        ├─ 8.pack.gz
   │  │        ├─ 9.pack.gz
   │  │        ├─ index 2.pack.gz
   │  │        ├─ index.pack.gz
   │  │        ├─ index.pack.gz 2.old
   │  │        └─ index.pack.gz.old
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ app
   │  │  │  ├─ favicon.ico
   │  │  │  │  └─ route.js
   │  │  │  ├─ page.js
   │  │  │  └─ page_client-reference-manifest.js
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ interception-route-rewrite-manifest.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages
   │  │  │  ├─ _app.js
   │  │  │  ├─ _document.js
   │  │  │  ├─ _error.js
   │  │  │  └─ api
   │  │  │     └─ detect-gunshot.js
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  ├─ server-reference-manifest.json
   │  │  ├─ vendor-chunks
   │  │  │  ├─ @headlessui.js
   │  │  │  ├─ @swc.js
   │  │  │  ├─ framer-motion.js
   │  │  │  ├─ leaflet.js
   │  │  │  └─ next.js
   │  │  ├─ webpack-api-runtime.js
   │  │  └─ webpack-runtime.js
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  ├─ app
   │  │  │  │  ├─ layout.js
   │  │  │  │  └─ page.js
   │  │  │  ├─ app-pages-internals.js
   │  │  │  ├─ main-app.js
   │  │  │  ├─ main.js
   │  │  │  ├─ pages
   │  │  │  │  ├─ _app.js
   │  │  │  │  └─ _error.js
   │  │  │  ├─ polyfills.js
   │  │  │  ├─ react-refresh.js
   │  │  │  └─ webpack.js
   │  │  ├─ css
   │  │  │  └─ app
   │  │  │     ├─ layout.css
   │  │  │     └─ page.css
   │  │  ├─ development
   │  │  │  ├─ _buildManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  └─ media
   │  │     ├─ 4473ecc91f70f139-s.p.woff
   │  │     ├─ 463dafcda517f24f-s.p.woff
   │  │     ├─ layers-2x.9859cd12.png
   │  │     ├─ layers.ef6db872.png
   │  │     └─ marker-icon.d577052a.png
   │  ├─ trace
   │  └─ types
   │     ├─ app
   │     │  ├─ layout.ts
   │     │  └─ page.ts
   │     └─ package.json
   ├─ README.md
   ├─ app
   │  ├─ about
   │  │  └─ page.tsx
   │  ├─ case-study
   │  │  └─ page.tsx
   │  ├─ components
   │  │  ├─ AudioRecorder.js
   │  │  ├─ JamaicaMap.js
   │  │  └─ Navbar.js
   │  ├─ favicon.ico
   │  ├─ fonts
   │  │  ├─ GeistMonoVF.woff
   │  │  └─ GeistVF.woff
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  └─ test
   │     └─ page.tsx
   ├─ next-env.d.ts
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  └─ api
   │     └─ detect-gunshot.js
   ├─ postcss.config.mjs
   ├─ public
   │  └─ alert.png
   ├─ tailwind.config.ts
   └─ tsconfig.json

```
```
gun-detection-audio
├─ README.md
├─ backend
│  ├─ server.js
│  └─ uploads
└─ frontend
   ├─ .eslintrc.json
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_aarch64_0.106.15
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0 2.gz_
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1 2.gz_
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ 10.pack.gz
   │  │     │  ├─ 11.pack.gz
   │  │     │  ├─ 12.pack.gz
   │  │     │  ├─ 13.pack.gz
   │  │     │  ├─ 14.pack.gz
   │  │     │  ├─ 15.pack.gz
   │  │     │  ├─ 16.pack.gz
   │  │     │  ├─ 17.pack.gz
   │  │     │  ├─ 18.pack.gz
   │  │     │  ├─ 19.pack.gz
   │  │     │  ├─ 2 2.gz_
   │  │     │  ├─ 2.pack.gz
   │  │     │  ├─ 20.pack.gz
   │  │     │  ├─ 21.pack.gz
   │  │     │  ├─ 3 2.gz_
   │  │     │  ├─ 3.pack.gz
   │  │     │  ├─ 4 2.pack.gz
   │  │     │  ├─ 4.pack.gz
   │  │     │  ├─ 5.pack.gz
   │  │     │  ├─ 6.pack.gz
   │  │     │  ├─ 7 2.gz_
   │  │     │  ├─ 7.pack.gz
   │  │     │  ├─ 8.pack.gz
   │  │     │  ├─ 9.pack.gz
   │  │     │  ├─ index 2.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  ├─ index.pack.gz 2.gz_
   │  │     │  └─ index.pack.gz.old
   │  │     ├─ client-development-fallback
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  └─ index.pack.gz.old
   │  │     └─ server-development
   │  │        ├─ 0 2.pack.gz
   │  │        ├─ 0.pack.gz
   │  │        ├─ 1.pack.gz
   │  │        ├─ 10 2.pack.gz
   │  │        ├─ 10.pack.gz
   │  │        ├─ 11 2.pack.gz
   │  │        ├─ 11.pack.gz
   │  │        ├─ 12 2.pack.gz
   │  │        ├─ 12.pack.gz
   │  │        ├─ 13.pack.gz
   │  │        ├─ 14.pack.gz
   │  │        ├─ 2.pack.gz
   │  │        ├─ 3.pack.gz
   │  │        ├─ 4 2.pack.gz
   │  │        ├─ 4.pack.gz
   │  │        ├─ 5 2.pack.gz
   │  │        ├─ 5.pack.gz
   │  │        ├─ 6.pack.gz
   │  │        ├─ 7.pack.gz
   │  │        ├─ 8 2.gz_
   │  │        ├─ 8.pack.gz
   │  │        ├─ 9.pack.gz
   │  │        ├─ index 2.pack.gz
   │  │        ├─ index.pack.gz
   │  │        ├─ index.pack.gz 2.old
   │  │        └─ index.pack.gz.old
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ app
   │  │  │  ├─ favicon.ico
   │  │  │  │  └─ route.js
   │  │  │  ├─ page.js
   │  │  │  └─ page_client-reference-manifest.js
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ interception-route-rewrite-manifest.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages
   │  │  │  ├─ _app.js
   │  │  │  ├─ _document.js
   │  │  │  ├─ _error.js
   │  │  │  └─ api
   │  │  │     └─ detect-gunshot.js
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  ├─ server-reference-manifest.json
   │  │  ├─ vendor-chunks
   │  │  │  ├─ @headlessui.js
   │  │  │  ├─ @swc.js
   │  │  │  ├─ framer-motion.js
   │  │  │  ├─ leaflet.js
   │  │  │  └─ next.js
   │  │  ├─ webpack-api-runtime.js
   │  │  └─ webpack-runtime.js
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  ├─ app
   │  │  │  │  ├─ layout.js
   │  │  │  │  └─ page.js
   │  │  │  ├─ app-pages-internals.js
   │  │  │  ├─ main-app.js
   │  │  │  ├─ main.js
   │  │  │  ├─ pages
   │  │  │  │  ├─ _app.js
   │  │  │  │  └─ _error.js
   │  │  │  ├─ polyfills.js
   │  │  │  ├─ react-refresh.js
   │  │  │  └─ webpack.js
   │  │  ├─ css
   │  │  │  └─ app
   │  │  │     ├─ layout.css
   │  │  │     └─ page.css
   │  │  ├─ development
   │  │  │  ├─ _buildManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  └─ media
   │  │     ├─ 4473ecc91f70f139-s.p.woff
   │  │     ├─ 463dafcda517f24f-s.p.woff
   │  │     ├─ layers-2x.9859cd12.png
   │  │     ├─ layers.ef6db872.png
   │  │     └─ marker-icon.d577052a.png
   │  ├─ trace
   │  └─ types
   │     ├─ app
   │     │  ├─ layout.ts
   │     │  └─ page.ts
   │     └─ package.json
   ├─ README.md
   ├─ app
   │  ├─ about
   │  │  └─ page.tsx
   │  ├─ case-study
   │  │  └─ page.tsx
   │  ├─ components
   │  │  ├─ AudioRecorder.js
   │  │  ├─ JamaicaMap.js
   │  │  └─ Navbar.js
   │  ├─ favicon.ico
   │  ├─ fonts
   │  │  ├─ GeistMonoVF.woff
   │  │  └─ GeistVF.woff
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  ├─ page.tsx
   │  └─ test
   │     └─ page.tsx
   ├─ next-env.d.ts
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ pages
   │  └─ api
   │     └─ detect-gunshot.js
   ├─ postcss.config.mjs
   ├─ public
   │  └─ alert.png
   ├─ tailwind.config.ts
   └─ tsconfig.json

```
>>>>>>> 35eeda3 (Removed backend and prepared for Vercel deployment)
