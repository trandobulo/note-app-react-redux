export interface INoteObj {
  category: string;
  created: string;
  content: string;
  id: string;
  active: boolean;
}

export interface INoteList {
  notes: INoteObj[];
  addNote(category: string, content: string): void;
  getNoteIndex(id: string): number;
  getNote(id: string): INoteObj | undefined;
  deleteNote(id: string): void;
  editNote(id: string, noteObj: INoteObj): void;
  archiveUnarchiveNote(id: string): void;
  getTotalActiveArchiveNotes(category: string): ISummary;
  getCategories(): string[];
}

interface ISummary {
  active: number;
  archived: number;
}

class NoteList implements INoteList {
  notes: INoteObj[];
  constructor() {
    this.notes = [];
  }

  addNote(category: string, content: string) {
    const date = new Date();

    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    const noteObj = {
      category: category,
      created: `${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`,
      content: content,
      id: `${this.notes.length}`,
      active: true,
    };

    this.notes.push(noteObj);
  }

  getNoteIndex(id: string): number {
    return this.notes.findIndex((note: INoteObj) => note.id === id);
  }

  getNote(id: string): INoteObj | undefined {
    return this.notes.find((note: INoteObj) => note.id === id);
  }

  deleteNote(id: string) {
    this.notes.splice(this.getNoteIndex(id), 1);
  }

  editNote(id: string, noteObj: INoteObj) {
    this.notes[this.getNoteIndex(id)] = { ...noteObj };
  }

  archiveUnarchiveNote(id: string) {
    this.notes[this.getNoteIndex(id)].active =
      !this.notes[this.getNoteIndex(id)].active;
  }

  getTotalActiveArchiveNotes(category: string): ISummary {
    return this.notes.reduce(
      function (total: { active: number; archived: number }, note) {
        if (note.category === category) {
          if (note.active) {
            total.active++;
            return total;
          } else {
            total.archived++;
            return total;
          }
        }
        return total;
      },
      { active: 0, archived: 0 }
    );
  }

  getCategories(): string[] {
    let categories: string[];
    categories = [];

    for (let note of this.notes) {
      if (!categories.includes(note.category)) {
        categories.push(note.category);
      }
    }
    return categories;
  }
}

export default NoteList;
