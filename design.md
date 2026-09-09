# Mother-Tongue Learning Assistant — Mobile Interface Design

## Product direction

Mother-Tongue Learning Assistant is an offline-first Android tablet learning companion for Jharkhand primary classrooms. It helps Hindi-medium teachers publish simple bilingual learning material and gives children a calm, read-only space to practise lessons, homework, worksheets, flashcards, and audio pronunciation.

The interface is designed for portrait orientation, one-handed use, low-cost Android tablets, large touch targets, high contrast, and occasional/no internet connectivity. The first prototype uses **Santhali** as the visible target language while keeping the language selector ready for Ho and Mundari.

## Screen list

| Screen | Primary content and functionality |
|---|---|
| Welcome / role selection | App logo, app name, offline status, and two clear entry choices: Student Login and Teacher Login. |
| Student Login | Simple student name/ID and classroom code fields, language choice, and local sign-in. No network is required. |
| Student Home | Greeting, selected language, sync status, learning progress, and cards for Homework, Lessons, Worksheets, Flashcards, and Translation Practice. |
| Student Homework | Teacher-published homework cards with subject, due label, completion state, and a read-only detail view. Students can mark work as completed locally. |
| Student Lessons | Offline list of published FLN lessons with Hindi and target-language text, play-audio action, learning outcome, and activity steps. |
| Student Worksheets | Bilingual worksheet cards aligned to foundational literacy and numeracy outcomes. A worksheet opens into a large, child-friendly activity view. |
| Student Flashcards | Visual word/number flashcards with Hindi term, Santhali term, image placeholder/icon treatment, and audio playback affordance. |
| Student Translation Practice | Short Hindi-to-Santhali classroom phrases, target-language response, and a microphone affordance for future voice practice. Prototype behavior remains local and deterministic. |
| Teacher Login | Teacher name, PIN, language selection, and local sign-in. The interface clearly labels the device as offline-ready. |
| Teacher Dashboard | Published content count, drafts, language pack, device sync status, and quick actions for Add Lesson, Add Homework, Create Worksheet, Add Flashcards, and Translation Phrasebook. |
| Teacher Content Library | Filterable local library of all teacher-created content. Each item shows type, language, publish state, and edit/delete controls. |
| Teacher Add/Edit Lesson | Form for Hindi source text, target-language translation, FLN outcome, activity instructions, and audio label. Save as draft or publish to student devices on the same local app state. |
| Teacher Add/Edit Homework | Form for title, subject, instructions, target language, due date label, and publish action. |
| Teacher Worksheet Builder | Form for worksheet title, bilingual prompt, answer type, outcome, and publish action. |
| Teacher Flashcard Builder | Form for Hindi word, target-language word, category, and visual symbol/emoji-free icon choice. |
| Teacher Phrasebook | Manage short classroom dialogue pairs for Hindi and target tribal language, with play-audio affordance and publish state. |
| Settings / Language Pack | Switch between Santhali, Ho, and Mundari labels where available, inspect offline content status, and sign out locally. |

## Key user flows

### Student flow

1. The user opens the app and chooses **Student Login**.
2. The student enters a local name or student ID and chooses the available language pack.
3. The student lands on Student Home and sees only published teacher content.
4. The student opens Homework, Lessons, Worksheets, Flashcards, or Translation Practice.
5. The student can read content, play bundled/local audio when available, complete an activity, and mark homework complete.
6. The completion state is stored locally so it remains available without internet.

### Teacher publishing flow

1. The user opens the app and chooses **Teacher Login**.
2. The teacher enters a local PIN and reaches the Teacher Dashboard.
3. The teacher selects a content type, enters Hindi source content, adds the target-language version, and chooses an FLN outcome.
4. The teacher saves a draft or taps **Publish to students**.
5. Published content immediately appears in the local Student Home content feed and is not editable from the student experience.
6. The teacher can revise or unpublish content from the Teacher Content Library.

### Offline flow

1. Every role, content record, completion state, language selection, and publish state is stored in local device storage.
2. The home status banner reports **Offline-ready** and displays the last local update time.
3. If internet is later available, a future sync adapter can synchronize the same content model; the prototype does not block any primary flow on connectivity.

## Color choices

The brand uses the supplied green, saffron orange, and deep navy logo palette. Green communicates growth and learning, saffron provides warm action emphasis, and navy supports legibility and trust.

| Token | Value | Use |
|---|---|---|
| Primary green | `#0B8F47` | Main actions, progress, active states |
| Deep green | `#08733A` | Pressed states and teacher publishing |
| Saffron | `#F28C00` | Student highlights, homework, warm accents |
| Soft saffron | `#FFF3DE` | Homework and flashcard backgrounds |
| Deep navy | `#102B57` | Headings, navigation, logo-aligned text |
| Paper | `#FFFDF8` | Main app background |
| Surface | `#FFFFFF` | Cards and form surfaces |
| Ink | `#152238` | Primary body text |
| Muted ink | `#667085` | Supporting metadata |
| Border | `#E8E5DD` | Dividers and card outlines |
| Success | `#238B5B` | Published/completed feedback |
| Warning | `#D97706` | Draft/offline notices |

## Accessibility and interaction rules

All primary buttons use a minimum 48 px touch target, clear pressed feedback, large text, and icon-plus-label actions. Read-only student cards avoid hidden gestures. Destructive teacher actions require a visible confirmation step. The app uses simple language, short labels, and color plus text so status is not communicated by color alone.

## Offline data vocabulary

The local store contains `UserSession`, `ContentItem`, `Lesson`, `Homework`, `Worksheet`, `Flashcard`, `PhrasePair`, `LanguagePack`, and `CompletionRecord` entities. A `ContentItem` carries `id`, `type`, `title`, `hindiText`, `targetText`, `language`, `outcome`, `status`, `createdAt`, and `updatedAt`. Students can read records where `status = published`; teachers can create, edit, publish, and archive records. Completion records are keyed by `studentId` and `contentId` and are always local-first.
