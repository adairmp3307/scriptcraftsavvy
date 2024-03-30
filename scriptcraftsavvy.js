// Create a class named ScriptCraftSavvy
class ScriptCraftSavvy {
    constructor() {
        this.scripts = [];
    }

    // Method: add a script to the ScriptCraftSavvy's collection
    addScript(script) {
        this.scripts.push(script);
        console.log(`Added "${script}" to the ScriptCraftSavvy's collection.`);
    }

    // Method: remove a script from the ScriptCraftSavvy's collection
    removeScript(script) {
        const index = this.scripts.indexOf(script);
        if (index !== -1) {
            this.scripts.splice(index, 1);
            console.log(`Removed "${script}" from the ScriptCraftSavvy's collection.`);
        } else {
            console.log(`"${script}" is not found in the ScriptCraftSavvy's collection.`);
        }
    }

    // Method: list all scripts in the ScriptCraftSavvy's collection
    listScripts() {
        console.log("Scripts in the ScriptCraftSavvy's collection:");
        this.scripts.forEach(script => {
            console.log(script);
        });
    }
}

// Create an instance of ScriptCraftSavvy named myScriptCraftSavvy
const myScriptCraftSavvy = new ScriptCraftSavvy();

// Add scripts to the ScriptCraftSavvy's collection
myScriptCraftSavvy.addScript("Script for data processing");
myScriptCraftSavvy.addScript("Utility script for file manipulation");
myScriptCraftSavvy.addScript("Script for API integration");

// List all scripts in the ScriptCraftSavvy's collection
myScriptCraftSavvy.listScripts();

// Remove a script from the ScriptCraftSavvy's collection
myScriptCraftSavvy.removeScript("Utility script for file manipulation");

// List all scripts in the ScriptCraftSavvy's collection after removal
myScriptCraftSavvy.listScripts();
