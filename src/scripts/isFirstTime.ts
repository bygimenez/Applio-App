import { Store } from "@tauri-apps/plugin-store";

async function checkFirstRun(): Promise<boolean> {
    try {
        const store = new Store("firstRun");
        const isFirstRun = await store.get('firstRun');

        if (isFirstRun === null) {
            await store.set('firstRun', true);
            return true;
        }
    } catch (error) {
        console.error('Error verifying first run:', error);
        return false;
    }
    return false;
}

async function isFirstRun(): Promise<boolean> {
    return await checkFirstRun();
}

async function setNotFirstRun(): Promise<boolean> {
    try {
        const store = new Store("firstRun");
        await store.set('firstRun', false);
        return true;
    } catch (error) {
        console.error('Error setting first run:', error);
        return false;
    }
}

export { checkFirstRun, isFirstRun, setNotFirstRun };