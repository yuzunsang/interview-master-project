import { create } from "zustand";

interface ICollectionFormData {
  name: string;
  image: string | null;
  description: string;
  access: "PUBLIC" | "PRIVATE";
  categoryId: string | null;
  changeName: (newName: string) => void;
  changeImage: (newImage: File | null | undefined) => void;
  changeCategoryId: (newId: string | null) => void;
  changeDescription: (newDescription: string) => void;
  changeAccess: (newAccess: "PUBLIC" | "PRIVATE") => void;
}

export const useCollectionFormStore = create<ICollectionFormData>((set) => ({
  name: "",
  image: null,
  description: "",
  access: "PUBLIC",
  categoryId: null,
  changeName: (newName) => {
    set(() => {
      return { name: newName };
    });
  },
  changeImage: (file) => {
    set((state) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          return { image: reader.result as string };
        };
      }
      return state;
    });
  },
  changeCategoryId: (newId) => {
    set(() => {
      return { categoryId: newId };
    });
  },
  changeDescription: (newDescription) => {
    set(() => {
      return { description: newDescription };
    });
  },
  changeAccess: (newAccess) => {
    set(() => {
      return { access: newAccess };
    });
  },
}));