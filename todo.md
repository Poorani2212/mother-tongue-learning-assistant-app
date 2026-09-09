# Project TODO

- [x] Replace starter home screen with branded role-selection experience
- [x] Add supplied Mother-Tongue Learning Assistant logo to all required app icon locations
- [x] Update app branding configuration with the requested app name
- [x] Implement Student Login with local/offline session state
- [x] Implement Teacher Login with local/offline session state
- [x] Add offline local content store for lessons, homework, worksheets, flashcards, and phrase pairs
- [x] Build Student Home with published content overview and offline status
- [x] Build read-only Student Homework flow with local completion state
- [x] Build Student Lessons flow with bilingual Hindi and target-language content
- [x] Build Student Worksheets flow aligned to FLN outcomes
- [x] Build Student Flashcards flow
- [x] Build Student Translation Practice / phrasebook flow
- [x] Build Teacher Dashboard and local content library
- [x] Build Teacher lesson creation and publishing flow
- [x] Build Teacher homework creation and publishing flow
- [x] Build Teacher worksheet creation and publishing flow
- [x] Build Teacher flashcard creation and publishing flow
- [x] Build Teacher phrasebook management flow
- [x] Add language selector for Santhali prototype with Ho and Mundari readiness
- [x] Add offline-first status and persistence feedback
- [x] Add deterministic tests for local content publishing and student read-only filtering
- [x] Run TypeScript, lint, and test validation
- [ ] Save final project checkpoint and deliver app version

- [x] Fix Audio button so it plays a bundled/local audio asset instead of only showing a demo alert
- [x] Fix Teacher Login validation and make the login path usable with a clear demo PIN
- [x] Re-run TypeScript, lint, and tests after the bug fixes

- [x] Add Hindi ↔ Santhali translation content and audio variants
- [x] Add Hindi ↔ Ho translation content and audio variants
- [x] Add Hindi ↔ Mundari translation content and audio variants
- [x] Make teacher publishing language-aware for all supported languages
- [x] Make student content and audio playback follow the selected language pack
- [x] Validate multilingual offline content and audio behavior

- [x] Add a dedicated Hindi Listen control beside the selected tribal-language audio control
- [x] Verify Hindi and tribal-language audio assets are both bundled and selectable offline

- [x] Add teacher custom Hindi voice-note recording with microphone permission handling
- [x] Save recorded voice-note metadata and local file URI offline
- [x] Add selected-language translation text for custom voice notes
- [x] Publish custom voice notes for student playback
- [x] Add deterministic tests for voice-note translation mapping and persistence

- [x] Add online voice-note transcription procedure using the built-in backend voice service
- [x] Add online Hindi-to-selected-language translation procedure using the built-in backend AI
- [x] Connect online detection and loading/error states to Teacher VoiceNoteComposer
- [x] Preserve manual/offline translation when internet or AI service is unavailable
- [x] Add deterministic tests for online fallback request shaping and failure fallback

- [x] Add device text-to-speech playback for translated tribal-language text
- [x] Add bundled tribal-language audio fallback when device TTS is unavailable
- [x] Add stop/replay behavior and accessible playback labels
- [x] Validate translated-text playback controls on web and Android-compatible builds

- [x] Add an in-section Home button for Student and Teacher users
- [x] Keep the active role and login session when returning Home
- [x] Validate Home navigation from content, create, and library sections

- [x] Add Teacher Delete action to published content cards
- [x] Add confirmation before deleting content
- [x] Remove deleted content from offline local storage and Student visibility
- [x] Validate deletion for regular content and voice notes

- [x] Fix Delete confirmation so the action completes on web preview and Android
- [x] Verify confirmed deletion removes the content from Teacher and Student views

- [ ] Add in-app Problem Statement content for the Jharkhand MTB-MLE challenge
- [ ] Add Idea / Solution content describing offline AI teaching support
- [ ] Add Unique Value Proposition content for voice bridge, pedagogy, and scale
- [ ] Add Technical Approach content for language packs, translation, audio, and offline sync
- [ ] Add Feasibility & Viability content for low-cost Android deployment
- [ ] Add navigation from Welcome/Home to the Solution Overview section
