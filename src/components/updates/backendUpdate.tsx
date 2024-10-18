import { getVersion } from "@tauri-apps/api/app";

export const checkBackendUpdates = async (setBackendUpdateAvailable: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> => {
    interface FileInfo {
        rfilename: string;
      }
      
    interface ModelData {
    siblings: FileInfo[];
    }
      
    const compareVersions = (current: string, latest: string): number => {
        const currentParts = current.replace(/^v/, '').split('.').map(Number);
        const latestParts = latest.replace(/^v/, '').split('.').map(Number);

        for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
            const currentVersionPart = currentParts[i] || 0; 
            const latestVersionPart = latestParts[i] || 0; 
            
            if (currentVersionPart > latestVersionPart) return 1; 
            if (currentVersionPart < latestVersionPart) return -1; 
        }
        
        return 0;
    };

    if (window.location.pathname === "/") {
    try {
        const response = await fetch('https://huggingface.co/api/models/bygimenez/Applio-App');
        if (!response.ok) {
            throw new Error('Error getting backend updates');
        }

        const modelData: ModelData = await response.json();
        
        const exeFiles = modelData.siblings.filter(file => 
            file.rfilename.startsWith('enviroment/') && file.rfilename.endsWith('.exe')
        );

        const latestFile = exeFiles.reduce<FileInfo>((latest, current) => {
            return current.rfilename > latest.rfilename ? current : latest;
        }, exeFiles[0]);

        const latestVersion = latestFile.rfilename.split('/')[1]; 
        const currentVersion = '0';

        const versionComparison = compareVersions(currentVersion, latestVersion);
        if (versionComparison < 0) {
            console.log(`New avaiable version: ${latestVersion}`);
            setBackendUpdateAvailable(true);
        } else {
            console.log('No updates available');
        }
    } catch (error) {
        console.error('Error getting backend updates:', error);
    }
    }
};