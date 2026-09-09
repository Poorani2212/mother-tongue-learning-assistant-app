# Mother-Tongue Learning Assistant

> **AI-powered, offline-first teaching assistant for mother-tongue-based primary education**

## 🏆 Smart India Hackathon

- **Problem Statement ID:** 26042
- **Problem Statement:** AI-Powered Vernacular Pedagogy and Real-Time Translation Tool for Mother Tongue-Based Primary Education
- **Theme:** Smart Education
- **Category:** Software
- **Organization:** Government of Jharkhand
- **Department:** Department of Higher & Technical Education

---

## 📌 About the Project

Mother-Tongue Learning Assistant is a working prototype designed to help Hindi-medium primary school teachers communicate and teach more effectively in tribal students' mother tongues.

The prototype focuses on **Hindi ↔ Santhali** translation and provides an offline-first learning experience for areas with limited or unreliable internet connectivity.

The architecture is designed to support additional tribal language packs such as **Ho and Mundari** in future versions.

---

## 🎯 Problem

Tribal-area primary schools face several challenges:

- Shortage of teachers proficient in Ho, Mundari and Santhali.
- Most teachers are Hindi-medium trained.
- Limited digital NLP resources for low-resource tribal languages.
- Language barriers between teachers and students.
- Poor internet connectivity in many target deployment areas.
- Limited access to mother-tongue learning materials.

---

## 💡 Our Solution

The Mother-Tongue Learning Assistant provides:

- 🗣️ Hindi ↔ Santhali voice and text translation
- 🤖 AI-assisted curriculum translation
- 📚 Bilingual lesson generation
- 📝 Bilingual worksheet and assessment generation
- 🖼️ Visual flashcards with text and audio
- 📱 Offline-first learning support
- 💾 Local storage of learning progress
- 🔄 Synchronization when internet becomes available
- 🌐 Modular architecture for future tribal-language support

---

## 🚀 Key Features

### 1. Teacher Login
Teachers can access teaching tools and manage learning content.

### 2. Student Login
Students can access learning and practice activities.

### 3. Voice Translation
The intended translation pipeline is:

**Hindi Voice → Speech-to-Text → AI Translation → Santhali Text → Text-to-Speech → Santhali Voice**

The prototype targets interactive classroom communication with a sub-3-second response requirement.

### 4. AI Lesson Generator
Generates structured bilingual learning content based on class, subject and topic.

### 5. Worksheet Generator
Creates bilingual practice materials and assessment content.

### 6. Visual Flashcards
Uses images, text and audio to support foundational vocabulary learning.

### 7. Offline-First Operation
Core learning resources and locally stored progress are designed to remain available without continuous internet connectivity.

### 8. Online Synchronization
When connectivity is available, the system can synchronize content updates and learning progress.

---

## 🏗️ System Architecture

```text
                 Mother-Tongue Learning Assistant
                              │
                         Select Role
                       ┌──────┴──────┐
                       │             │
                 Teacher Login   Student Login
                       │             │
                       └──────┬──────┘
                              │
                    Hindi Voice / Text
                              │
                       Speech-to-Text
                              │
                      AI Translation
                     Hindi ↔ Santhali
                              │
                        Santhali Text
                              │
                       Text-to-Speech
                              │
                     Mother-Tongue Voice
                              │
                    Learning Progress
                              │
                    Local Storage / Sync
                       ┌──────┴──────┐
                       │             │
                  Offline Mode   Online Mode
                       │             │
                  Local AI/Data   Server Sync
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Mobile Application | React |
| Programming Language | TypeScript |
| Translation Model | IndicTrans2 |
| On-device AI | ONNX / TFLite |
| Offline Speech-to-Text | Whisper / compatible offline STT |
| Text-to-Speech | Offline TTS |
| Local Database | SQLite |
| Local Storage | AsyncStorage / equivalent local storage |
| Backend | Node.js |
| API | REST / tRPC |
| Synchronization | Content & Progress Sync |

> Model size, device performance and sub-3-second latency should be benchmarked on the target low-cost Android hardware before production deployment.

---

## 📱 Prototype

The current prototype demonstrates the application workflow and focuses on **Santhali** as the initial tribal language.

### Main Screens

- Language Selection
- Teacher Login
- Student Login
- Teacher Dashboard
- Voice Translation
- Lesson Generator
- Worksheet Generator
- Visual Flashcards
- Learning Progress
- Offline Mode

---

## 🌐 Offline-First Design

The target deployment environment may have unreliable internet connectivity.

Therefore, the system follows an offline-first approach:

```text
Initial Sync
     ↓
Download Required Resources
     ↓
Local AI + Local Database
     ↓
Learning / Translation
     ↓
Progress Saved Locally
     ↓
Internet Available?
     ↓
Sync Content + Progress
```

---

## 🎓 Educational Alignment

The solution is designed around mother-tongue-based primary education and supports foundational learning activities such as:

- Vocabulary building
- Simple explanations
- Classroom instructions
- Practice worksheets
- Assessments
- Visual learning
- Audio-based learning

The content-generation workflow is intended to align with **NIPUN Bharat foundational learning outcomes**.

---

## 🔐 Privacy & Security

- Offline processing is prioritized for core learning workflows.
- Learning progress can be stored locally.
- Data synchronization occurs when connectivity is available.
- Production deployment should use encrypted local storage and secure API communication.

---

## 🌱 Future Scope

- Full Ho language support
- Full Mundari language support
- Additional Indian tribal and low-resource languages
- Improved language datasets
- Teacher/language-expert validation
- Better noisy-environment speech recognition
- Further model quantization and optimization
- Deployment on low-cost Android tablets

---

## 📊 Expected Impact

### Students
- Better understanding through mother-tongue learning
- Improved participation
- Accessible audio-visual learning

### Teachers
- Reduced language barriers
- Easy access to bilingual teaching resources
- Increased confidence in multilingual classrooms

### Schools
- Offline learning capability
- Low-cost digital education support
- Scalable multilingual architecture

---

## 👥 Team

**Team Name:** Tribal Trans

**Team ID:** *Add your official SIH Team ID here*

**Members:**  
*Add team member names here*

---

## 🔗 Project Links

- **Prototype:** *Add prototype link*
- **Demo Video:** *Add demo video link*
- **GitHub Repository:** *This repository*
- **Presentation:** *Add PPT link if available*

---

## 📚 Research References

1. AI4Bharat, *IndicTrans2: Towards High-Quality and Accessible Machine Translation Models for all 22 Scheduled Indian Languages*, Transactions on Machine Learning Research, 2023.
2. *Enhancing NLP for Indic Languages With Limited Resources: A Study of Transformer Models for Translation and Summarization*, IEEE ICCCIT, 2025.
3. *Improving the Performance of Transformer Based Low Resource Speech Recognition for Indian Languages*, IEEE, 2020.
4. *Indian Language Resources – Speech Subcommittee Report*, IEEE, 2023.

---

## 📄 License

Add the appropriate open-source license based on the licenses of the code, models and datasets used in this project.

---

### 💚 Learn in Your Language. Teach with Confidence.
