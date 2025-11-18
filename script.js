// Global manhwa data
const manhwas = {
  "ch": {
    title: "ბნელი ჯადოქრის დაბრუნება სეზონი 1",
    folder: "images/",
    description: "მინჯუნ კიმი, უმაღლესი სკოლის მოსწავლე, სხვა სამყაროში ბნელი ჯადოქარი გახდა და ახლა თავისი სამყაროს დაცვა უწევს მიწისქვეშეთიდან მოსული მონსტრებისგან. დაბრუნების შემდეგ მას სურს მშვიდი ცხოვრება, მაგრამ მისი ბედი კვლავ ბრძოლაა. წაიკითხე ქართულად სრული ისტორია და აღმოაჩინე ბნელი მაგიის ძალა!",
    keywords: "ბნელი ჯადოქრის დაბრუნება, ქართულად, Dark Mage, ფანტასტიკა, მოქმედება, ბნელი ჯადოქრის დაბრუნება ჯარში, black mages return to enlistment ქართულად, შავი ჯადოქარი, ბნელი ჯადოქარი, Dark mage, მანჰვა",
    type: 'image',
    chapters: [
      { id: 1, pages: 16 }, { id: 2, pages: 15 }, { id: 3, pages: 20 },
      { id: 4, pages: 18 }, { id: 5, pages: 17 }, { id: 6, pages: 14 },
      { id: 7, pages: 12 }, { id: 8, pages: 15 }, { id: 9, pages: 11 },
      { id: 10, pages: 13 }, { id: 11, pages: 11 }, { id: 12, pages: 13 },
      { id: 13, pages: 15 }, { id: 14, pages: 15 }, { id: 15, pages: 12 },
      { id: 16, pages: 14 }, { id: 17, pages: 14 }, { id: 18, pages: 16, skipFirst: true  },
      { id: 19, pages: 16 }, { id: 20, pages: 19 }, { id: 21, pages: 12},
      { id: 22, pages: 37},
    ]
  },
  "w2_ch": {
    title: "რკინის სისხლიანი ხმლის მქონე მონადირის შურისძიება",
    folder: "images2/",
    description: "გაიგე ვიკირის, ბასკერვილების ოჯახის მოღალატე მონადირის ისტორია, რომელიც გილიოტინის ნაცვლად მოულოდნელ შანსს იღებს. იგი დაბრუნდა შურისძიებისთვის! სისხლიანი კლანის მონადირის ომი თავის ყოფილ პატრონზე. წაიკითხე დრამატული შურისძიების მანჰვა ქართულად.",
    keywords: "რკინის სისხლიანი ხმლის მქონე მონადირის შურისძიება, revenge of the Iron-Blooded sword hound ქართულად, მონადირის შურისძიება, შურისძიება, ფენტეზი, iron bloded swords Hunter, მანჰვა",
    type: 'image',
    chapters: [ { id: 1, pages: 10 }, { id: 2, pages: 10 },  { id: 3, pages: 10 },   { id: 4, pages: 10 },  { id: 5, pages: 11 },  { id: 6, pages: 12 },  { id: 7, pages: 12 },
                { id: 8, pages: 14 }, { id: 9, pages: 11 }, { id: 10, pages: 12 }, { id: 11, pages: 12 },
     ]
  },
  "w3_ch": {
    title: "წყეული რეინკარნაცია",
    folder: "images3/",
    description: "წაიკითხეთ მანჰვა 'წყეული რეინკარნაცია' ქართულად! მეომარი ჰამილი ხელახლა დაიბადა, როგორც დიდი ვერმუთის შთამომავალი, ევგენი ლიონჰარტი. მას აქვს მიღწევა, რომელიც წინა ცხოვრებაში არ ჰქონია. დაიწყე დაუმთავრებელი მოგზაურობა ახალ სამყაროში დემონებთან საბრძოლველად.",
    keywords: "წყეული რეინკარნაცია, ქართულად, Damn Reincarnation ქართულად, რეინკარნაცია, ფენტეზი, Reincarnation, წყეული რეინკარნაცია მანგა, წყეული რეინკარნაცია მანჰვა, მანჰვა",
    type: 'image',
    chapters: [ { id: 1, pages: 13 }, { id: 2, pages: 13 }, { id: 3, pages: 11 },
                { id: 4, pages: 13 }, { id: 5, pages: 12 }, { id: 6, pages: 14 },
    ]
  },
  "w4_ch": {
    title: "მალეე",
    folder: "images4/",
    description: "უახლესი მანჰვა, რომელიც მალე იქნება ხელმისაწვდომი Manhwageo-ზე! მოემზადეთ ახალი, დაუვიწყარი თავგადასავლებისთვის ქართულად. თვალი ადევნეთ განახლებებს!",
    keywords: "მალე, ახალი მანჰვა, სიახლეები, ქართულად, Manhwageo",
    type: 'image',
    chapters: []
  },
  "video_manhwa1": {
    title: "მალე",
    folder: "videos/",
    description: "აქ ჯერ არაფერია, თუმცა მალე ყველაფერი იქნება. თქვენგან მხოლოდ აქტიურობაა საჭირო!",
    keywords: "მეხუთე მანჰვა, მალე, ვიდეო მანჰვა, ქართულად",
    type: 'video',
    chapters: [ { id: 1, file: "w5_v1.mp4" } ]
  },
  "video_manhwa2": {
    title: "მალე",
    folder: "videos/",
    description: "თქვენი აქტიურობა უზრუნველყოფს ახალი თავების დამატებას. დაუბრუნდით შემდეგ მანჰვას მალე!",
    keywords: "მეექვსე მანჰვა, აქტიურობა, ვიდეო მანჰვა, ქართულად",
    type: 'video',
    chapters: [ { id: 1, file: "w6_v1.mp4" } ]
  }
};
// Expose manhwas to global scope for the module script in HTML
window.manhwas = manhwas;

let currentManhwaId = null;
let currentChapterId = null;
let currentOpenModalId = null;
let lastScrollTop = 0;
let scrollTimeout;

// Firebase functions (moved from module script)
// Ensure window.db, window.doc, etc. are available from the module script
const updateAndGetViews = async function(manhwaId) {
  if (!window.db || !window.doc || !window.getDoc || !window.updateDoc || !window.setDoc) {
    console.error("Firestore is not initialized yet.");
    return "შეცდომა";
  }
  const docRef = window.doc(window.db, "manhwa_views", manhwaId);
  try {
    const docSnap = await window.getDoc(docRef);
    let views = 0;
    if (docSnap.exists()) {
      views = docSnap.data().count + 1;
      await window.updateDoc(docRef, { count: views });
    } else {
      views = 1;
      await window.setDoc(docRef, { count: views });
    }
    return views;
  } catch (error) {
    console.error("ნახვების განახლების შეცდომა: ", error);
    return "შეცდომა";
  }
};
window.updateAndGetViews = updateAndGetViews; // Make it globally accessible

const getInitialViews = async function(manhwaId) {
    if (!window.db || !window.doc || !window.getDoc) {
        console.error("Firestore is not initialized yet.");
        return "შეცდომა";
    }
  const docRef = window.doc(window.db, "manhwa_views", manhwaId);
  try {
    const docSnap = await window.getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().count;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("საწყისი ნახვების წამოღების შეცდომა: ", error);
    return "შეცდომა";
  }
};
window.getInitialViews = getInitialViews; // Make it globally accessible


function toggleModal(id, doPushState = true) {
  const modal = document.getElementById(id);
  if (!modal) return; // Add check if modal exists
  
  const scrollButtons = document.querySelector('.scroll-buttons-container'); // Moved selector here

  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
    if (doPushState && currentOpenModalId === id) {
      history.back();
      currentOpenModalId = null;
    }
    if (id === 'chapterModal') {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      // Ensure elements exist before manipulating classes
      const header = document.getElementById('chapterModalHeader');
      const controls = document.getElementById('chapterModalControls');
      if (header) header.classList.remove('hidden');
      if (controls) controls.classList.remove('hidden');
      if (scrollButtons) scrollButtons.classList.remove('hidden'); 
      clearTimeout(scrollTimeout);
      if (currentManhwaId) {
         updateMainPageProgress(currentManhwaId);
      }
    }
  } else {
    modal.style.display = 'flex';
    currentOpenModalId = id;
    if (doPushState) {
      history.pushState({ modal: id }, '', `#${id}`);
    }
  }
}

function openChapterSelect(manhwaId) {
  currentManhwaId = manhwaId;
  const manhwaData = manhwas[manhwaId];
  if (!manhwaData) {
      console.error(`Manhwa data not found for ID: ${manhwaId}`);
      return;
  }
  const lastReadChapterId = parseInt(localStorage.getItem(`last_read_${manhwaId}`) || 0);

  document.getElementById('chapterSelectTitle').textContent = manhwaData.title;
  document.getElementById('manhwaDescription').textContent = manhwaData.description;

  const chapterButtons = document.getElementById('chapterButtons');
  chapterButtons.innerHTML = '';

  if (!manhwaData.chapters || manhwaData.chapters.length === 0) {
    chapterButtons.innerHTML = '<p style="text-align:center; color:#aaa; font-size: 0.9em;">თავები ჯერ არ არის დამატებული.</p>';
  } else {
    manhwaData.chapters.forEach(chapter => {
      const btn = document.createElement('button');
      btn.textContent = `თავი ${chapter.id}`;
      
      if (chapter.id < lastReadChapterId) {
         btn.classList.add('read');
      } else if (chapter.id === lastReadChapterId) {
         btn.classList.add('last-read');
      } else if (chapter.id === lastReadChapterId + 1) {
         btn.classList.add('next-up');
      }
      
      if (manhwaData.type === 'video') {
        btn.onclick = () => openChapter(chapter.id, chapter.file);
      } else {
        btn.onclick = () => openChapter(chapter.id, chapter.pages);
      }
      chapterButtons.appendChild(btn);
    });
  }

  const viewsElement = document.querySelector(`.box[data-manhwa-id="${manhwaId}"] .views-counter span`);
  if (viewsElement && typeof window.updateAndGetViews === 'function') {
    window.updateAndGetViews(manhwaId).then(views => {
      if (viewsElement) viewsElement.textContent = views;
    }).catch(error => {
      console.error("ნახვების განახლების შეცდომა openChapterSelect-დან: ", error);
      if (viewsElement) viewsElement.textContent = "შეცდომა";
    });
  }
  toggleModal('chapterSelect');
}

function loadChapterContent(chapterId, contentData) {
    currentChapterId = chapterId;
    const imagesContainer = document.getElementById('imagesContainer');
    if (!imagesContainer) return;
    imagesContainer.innerHTML = '<p class="loading-indicator">იტვირთება...</p>';
    imagesContainer.scrollTop = 0;

    const chapterTitleElement = document.getElementById('chapterTitle');
    const manhwaData = manhwas[currentManhwaId];
    if (!manhwaData) return;
    if(chapterTitleElement) chapterTitleElement.textContent = `${manhwaData.title} - თავი ${chapterId}`;

    const header = document.getElementById('chapterModalHeader');
    const controls = document.getElementById('chapterModalControls');
    const scrollButtons = document.querySelector('.scroll-buttons-container');

    if (header) header.classList.remove('hidden');
    if (controls) controls.classList.remove('hidden');
    if (scrollButtons) scrollButtons.classList.remove('hidden');
    clearTimeout(scrollTimeout);

    setTimeout(() => {
        if (!imagesContainer) return; // Re-check after timeout
        imagesContainer.innerHTML = '';
        if (manhwaData.type === 'image') {
            const chapterInfo = manhwaData.chapters.find(c => c.id === chapterId);
            const startPage = chapterInfo && chapterInfo.skipFirst ? 2 : 1;
            for (let i = startPage; i <= contentData; i++) {
                const img = document.createElement('img');
                img.src = `${manhwaData.folder}${currentManhwaId}${chapterId}_page${i}.jpg`;
                img.alt = `${manhwaData.title} - თავი ${chapterId}, გვერდი ${i}`;
                img.loading = 'lazy';
                img.onerror = function() {
                    // Try .png as a fallback
                    this.onerror=function(){
                        this.src = 'images/placeholder.jpg'; // Final fallback
                        this.alt = 'სურათი ვერ მოიძებნა';
                    };
                    this.src = `${manhwaData.folder}${currentManhwaId}${chapterId}_page${i}.png`;
                };
                imagesContainer.appendChild(img);
            }
        } else if (manhwaData.type === 'video') {
            const video = document.createElement('video');
            video.src = `${manhwaData.folder}${contentData}`;
            video.controls = true;
            video.preload = 'auto';
            video.style.maxWidth = '100%';
            video.style.height = 'auto';
            video.style.display = 'block';
            video.autoplay = true;
            video.onerror = function() {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = 'ვიდეოს ჩატვირთვის შეცდომა.';
                errorDiv.style.color = 'red';
                if(imagesContainer) imagesContainer.appendChild(errorDiv);
            };
            imagesContainer.appendChild(video);
        }
        updateNavigationButtons();
        updateProgressBar();
        
        if (currentManhwaId && currentChapterId) {
            const lastReadChapterId = parseInt(localStorage.getItem(`last_read_${currentManhwaId}`) || 0);
            if (currentChapterId > lastReadChapterId) {
                localStorage.setItem(`last_read_${currentManhwaId}`, currentChapterId);
            }
        }
    }, 500);
}

function openChapter(chapterId, contentData) {
    loadChapterContent(chapterId, contentData);
    toggleModal('chapterSelect', false);
    toggleModal('chapterModal', true);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevChapterBtn');
    const nextBtn = document.getElementById('nextChapterBtn');
    if (!prevBtn || !nextBtn || !manhwas[currentManhwaId]) return;

    const manhwaData = manhwas[currentManhwaId];
    const currentChapterIndex = manhwaData.chapters.findIndex(ch => ch.id === currentChapterId);
    prevBtn.disabled = currentChapterIndex <= 0;
    nextBtn.disabled = currentChapterIndex >= manhwaData.chapters.length - 1;
}

function navigateChapter(direction) {
    const manhwaData = manhwas[currentManhwaId];
    if (!manhwaData) return;
    const currentChapterIndex = manhwaData.chapters.findIndex(ch => ch.id === currentChapterId);
    const newChapterIndex = currentChapterIndex + direction;
    
    if (newChapterIndex >= 0 && newChapterIndex < manhwaData.chapters.length) {
        const newChapter = manhwaData.chapters[newChapterIndex];
        if (manhwaData.type === 'video') {
            loadChapterContent(newChapter.id, newChapter.file);
        } else {
            loadChapterContent(newChapter.id, newChapter.pages);
        }
    }
}

window.onpopstate = function(event) {
  const chapterModal = document.getElementById('chapterModal');
  const chapterSelect = document.getElementById('chapterSelect');

  if (chapterModal && chapterModal.style.display === 'flex') {
    toggleModal('chapterModal', false);
    if(currentManhwaId) openChapterSelect(currentManhwaId);
  } else if (chapterSelect && chapterSelect.style.display === 'flex') {
    toggleModal('chapterSelect', false);
  }
  currentOpenModalId = null;
};

window.onload = function() {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash === 'chapterSelect' || hash === 'chapterModal') {
            history.replaceState({}, '', window.location.pathname + window.location.search);
        }
    }
};

function updateMainPageProgress(manhwaId) {
    const box = document.querySelector(`.box[data-manhwa-id="${manhwaId}"]`);
    if (!box || !manhwas[manhwaId]) return;
    
    const oldIndicator = box.querySelector('.progress-indicator');
    if (oldIndicator) oldIndicator.remove();
    
    const lastReadChapterId = parseInt(localStorage.getItem(`last_read_${manhwaId}`) || 0);
    const manhwaData = manhwas[manhwaId];
    const totalChapters = manhwaData.chapters.length;

    if (lastReadChapterId > 0 && lastReadChapterId < totalChapters) {
        const indicator = document.createElement('div');
        indicator.classList.add('progress-indicator', 'new');
        indicator.textContent = `თავი ${lastReadChapterId + 1} (ახალი)`;
        box.appendChild(indicator);
    } else if (lastReadChapterId >= totalChapters && totalChapters > 0) {
        const indicator = document.createElement('div');
        indicator.classList.add('progress-indicator', 'read');
        indicator.textContent = 'დასრულებულია';
        box.appendChild(indicator);
    }
}

// Event Listeners for hiding/showing controls
const imagesContainer = document.getElementById('imagesContainer');
if (imagesContainer) {
    imagesContainer.addEventListener('scroll', function() {
        const scrollButtons = document.querySelector('.scroll-buttons-container');
        const currentScrollTop = this.scrollTop;
        const header = document.getElementById('chapterModalHeader');
        const controls = document.getElementById('chapterModalControls');
        clearTimeout(scrollTimeout);
        if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
            if (header) header.classList.add('hidden');
            if (controls) controls.classList.add('hidden');
            if (scrollButtons) scrollButtons.classList.add('hidden');
        } else if (lastScrollTop - currentScrollTop > 30) {
            if (header) header.classList.remove('hidden');
            if (controls) controls.classList.remove('hidden');
            if (scrollButtons) scrollButtons.classList.remove('hidden');
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        updateProgressBar();
    });

    imagesContainer.addEventListener('click', function() {
      const scrollButtons = document.querySelector('.scroll-buttons-container');
      const header = document.getElementById('chapterModalHeader');
      const controls = document.getElementById('chapterModalControls');
      
      if (!header || !controls || !scrollButtons) return; // Add null check

      if (header.classList.contains('hidden')) {
          header.classList.remove('hidden');
          controls.classList.remove('hidden');
          scrollButtons.classList.remove('hidden');
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
              header.classList.add('hidden');
              controls.classList.add('hidden');
              scrollButtons.classList.add('hidden');
          }, 2000);
      } else {
          header.classList.add('hidden');
          controls.classList.add('hidden');
          scrollButtons.classList.add('hidden');
      }
    });
}

// Fullscreen logic
const fullscreenBtn = document.getElementById('fullscreenBtn');
const chapterModal = document.getElementById('chapterModal');

if (fullscreenBtn && chapterModal) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            chapterModal.requestFullscreen().catch(err => {
                alert(`სრული ეკრანის რეჟიმის ჩართვის შეცდომა: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', () => {
        const icon = fullscreenBtn.querySelector('i');
        if (!icon) return;
        if (!document.fullscreenElement) {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        } else {
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
        }
    });
}

// Progress bar update function
function updateProgressBar() {
    const imagesContainer = document.getElementById('imagesContainer');
    const progressBar = document.getElementById('progressBar');
    if (!progressBar || !imagesContainer) return;
    const scrollableHeight = imagesContainer.scrollHeight - imagesContainer.clientHeight;
    if (scrollableHeight <= 0) {
        progressBar.style.width = '100%';
        return;
    }
    const progress = (imagesContainer.scrollTop / scrollableHeight) * 100;
    progressBar.style.width = `${progress}%`;
}

// Scroll buttons setup function
function setupScrollButtons() {
    const imagesContainer = document.getElementById('imagesContainer');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const scrollBottomBtn = document.getElementById('scrollBottomBtn');
    if (!imagesContainer || !scrollTopBtn || !scrollBottomBtn) return;
    scrollTopBtn.addEventListener('click', () => {
        imagesContainer.scrollTo({ top: 0, behavior: 'smooth' });
    });
    scrollBottomBtn.addEventListener('click', () => {
        imagesContainer.scrollTo({ top: imagesContainer.scrollHeight, behavior: 'smooth' });
    });
}

// Animated character setup function
function setupAnimatedCharacter() {
  const character = document.getElementById('animated-character');
  const walkSpeedBtn = document.getElementById('walkSpeedBtn');
  const runSpeedBtn = document.getElementById('runSpeedBtn');
  const toggleAnimationBtn = document.getElementById('toggleAnimationBtn');
  
  if (!character || !walkSpeedBtn || !runSpeedBtn || !toggleAnimationBtn) return;

  const animationFolderPath = 'images/';
  const idleFrames = 1, walkFrames = 2, runFrames = 2;
  const characterWidth = 110, characterHeight = 130;
  const walkSpeed = 0.5, runSpeed = 2;
  const idleInterval = 500, walkInterval = 450, runInterval = 300;
  let currentX = 0, direction = 1, animationFrame = 1;
  let currentSpeed = 0, currentInterval = idleInterval, currentAnimationType = 'idle';
  let animationIntervalId, movementIntervalId;
  let isAnimationRunning = false;
  character.style.width = `${characterWidth}px`;
  character.style.height = `${characterHeight}px`;

  function updateCharacterImage() {
    let maxFrames = (currentAnimationType === 'idle') ? idleFrames : (currentAnimationType === 'walk' ? walkFrames : runFrames);
    character.style.backgroundImage = `url('${animationFolderPath}animation_1_${currentAnimationType}_${animationFrame}.png')`;
    animationFrame = (animationFrame % maxFrames) + 1;
  }

  function moveCharacter() {
    if (!isAnimationRunning || currentAnimationType === 'idle') return;
    currentX += direction * currentSpeed;
    const maxX = window.innerWidth - characterWidth, minX = 0;
    if (currentX >= maxX) {
      currentX = maxX;
      direction = -1;
    } else if (currentX <= minX) {
      currentX = minX;
      direction = 1;
    }
    character.style.transform = `translateX(${currentX}px) scaleX(${direction})`;
  }

  function startAnimation(type, speed, interval) {
    if (animationIntervalId) clearInterval(animationIntervalId);
    if (movementIntervalId) clearInterval(movementIntervalId);
    currentAnimationType = type;
    currentSpeed = speed;
    currentInterval = interval;
    animationFrame = 1;
    isAnimationRunning = true;
    updateCharacterImage();
    animationIntervalId = setInterval(updateCharacterImage, currentInterval);
    if (type !== 'idle') {
        movementIntervalId = setInterval(moveCharacter, 10);
    }
    toggleAnimationBtn.textContent = 'გაჩერება';
    walkSpeedBtn.disabled = (type === 'walk');
    runSpeedBtn.disabled = (type === 'run');
  }

  walkSpeedBtn.onclick = () => startAnimation('walk', walkSpeed, walkInterval);
  runSpeedBtn.onclick = () => startAnimation('run', runSpeed, runInterval);
  toggleAnimationBtn.onclick = () => {
     if (isAnimationRunning) {
       clearInterval(animationIntervalId);
       clearInterval(movementIntervalId);
       isAnimationRunning = false;
       toggleAnimationBtn.textContent = 'გაგრძელება';
     } else {
       startAnimation(currentAnimationType, currentSpeed, currentInterval);
     }
   };
  startAnimation('walk', walkSpeed, walkInterval);
}

// Combined DOMContentLoaded Listener
document.addEventListener('DOMContentLoaded', async () => {
    // Initial Views Fetch (moved from module script)
    const manhwaBoxes = document.querySelectorAll('.box[data-manhwa-id]');
    for (const box of manhwaBoxes) {
      const manhwaId = box.dataset.manhwaId;
      if (manhwaId && window.manhwas[manhwaId]) { 
        const viewsElement = box.querySelector(`#views-${manhwaId}`);
        if (viewsElement && typeof window.getInitialViews === 'function') {
          const views = await window.getInitialViews(manhwaId);
          viewsElement.textContent = views;
        }
        
        const lastReadChapterId = parseInt(localStorage.getItem(`last_read_${manhwaId}`) || 0);
        const manhwaData = window.manhwas[manhwaId];
        const totalChapters = manhwaData.chapters.length;

        if (lastReadChapterId > 0 && lastReadChapterId < totalChapters) {
            const indicator = document.createElement('div');
            indicator.classList.add('progress-indicator', 'new');
            indicator.textContent = `თავი ${lastReadChapterId + 1} (ახალი)`;
            box.appendChild(indicator);
        } else if (lastReadChapterId >= totalChapters && totalChapters > 0) {
            const indicator = document.createElement('div');
            indicator.classList.add('progress-indicator', 'read');
            indicator.textContent = 'მიმდინარე'; // Changed from 'დასრულებულია' for clarity
            box.appendChild(indicator);
        }
      }
    }
    
    // Setup other components
    setupScrollButtons();
    setupAnimatedCharacter();
});
