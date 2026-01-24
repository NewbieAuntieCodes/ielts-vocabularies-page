import { PracticeAttempt, StudentPreferences } from '../types';

const DB_NAME = 'ielts-speaking';
const DB_VERSION = 1;
const PREF_STORE = 'preferences';
const ATTEMPT_STORE = 'attempts';

const isIndexedDbAvailable = typeof indexedDB !== 'undefined';

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (!isIndexedDbAvailable) {
      reject(new Error('IndexedDB not available'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PREF_STORE)) {
        db.createObjectStore(PREF_STORE, { keyPath: 'studentId' });
      }
      if (!db.objectStoreNames.contains(ATTEMPT_STORE)) {
        const store = db.createObjectStore(ATTEMPT_STORE, { keyPath: 'id', autoIncrement: true });
        store.createIndex('byStudent', 'studentId', { unique: false });
        store.createIndex('byStudentCard', ['studentId', 'cardId'], { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const runRequest = <T>(request: IDBRequest<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const readStudentPreferences = async (studentId: string): Promise<StudentPreferences | null> => {
  if (!isIndexedDbAvailable) return null;
  try {
    const db = await openDatabase();
    const tx = db.transaction(PREF_STORE, 'readonly');
    const store = tx.objectStore(PREF_STORE);
    const result = await runRequest<StudentPreferences | undefined>(store.get(studentId));
    return result ?? null;
  } catch (error) {
    console.warn('Failed to read preferences from IndexedDB', error);
    return null;
  }
};

export const saveStudentPreferences = async (prefs: StudentPreferences): Promise<void> => {
  if (!isIndexedDbAvailable) return;
  try {
    const db = await openDatabase();
    const tx = db.transaction(PREF_STORE, 'readwrite');
    const store = tx.objectStore(PREF_STORE);
    store.put(prefs);
  } catch (error) {
    console.warn('Failed to save preferences to IndexedDB', error);
  }
};

export const savePracticeAttempt = async (attempt: PracticeAttempt): Promise<void> => {
  if (!isIndexedDbAvailable) return;
  try {
    const db = await openDatabase();
    const tx = db.transaction(ATTEMPT_STORE, 'readwrite');
    const store = tx.objectStore(ATTEMPT_STORE);
    store.put({ ...attempt, timestamp: attempt.timestamp || Date.now() });
  } catch (error) {
    console.warn('Failed to save practice attempt', error);
  }
};

export const listPracticeAttempts = async (studentId: string, cardId?: string): Promise<PracticeAttempt[]> => {
  if (!isIndexedDbAvailable) return [];
  try {
    const db = await openDatabase();
    const tx = db.transaction(ATTEMPT_STORE, 'readonly');
    const store = tx.objectStore(ATTEMPT_STORE);

    if (cardId) {
      const index = store.index('byStudentCard');
      const range = IDBKeyRange.only([studentId, cardId]);
      const request = index.getAll(range);
      return await runRequest<PracticeAttempt[]>(request);
    }

    const index = store.index('byStudent');
    const request = index.getAll(studentId);
    return await runRequest<PracticeAttempt[]>(request);
  } catch (error) {
    console.warn('Failed to read practice attempts', error);
    return [];
  }
};
