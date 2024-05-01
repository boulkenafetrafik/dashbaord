import { persist } from "zustand/middleware";
import { create } from "zustand";


let appStore = (set) => (
    {
        dopen : true,
        updateOpen:(dopen) => set ((state) => ({dopen:dopen})),
    }
);

appStore = persist (appStore , {name:"my_app_store"});
export const useAppStore = create(appStore);