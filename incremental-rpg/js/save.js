/* old saving system (not working)
function setItem(key, value) { localStorage.setItem(key, JSON.stringify(value)); };
function getItem(key) { return JSON.parse(localStorage.getItem(key)); };
function removeItem(key) { localStorage.removeItem(key); };
function saveData() {
    for (var i = 0; i < allVars.length; i++) {
        setItem(key + allVars[i], window[allVars[i]]);
    };
    console.log("Game saved");
};
function loadData() {
    for (var i = 0; i < allVars.length; i++) {
        if (getItem(key + allVars[i]) != null && getItem(key + allVars[i]) != undefined) {
            window[allVars[i]] = getItem(key + allVars[i]);
        };
    };
};
function resetData() {
    for (var i = 0; i < allVars.length; i++) {
        removeItem(key + allVars[i]);
    };
};
*/
// new saving system (pretty shitty but working)
function manualSave() {
    var toSave = { player: player, miningBuildsOwned: miningBuildsOwned };
    var saved = JSON.stringify(toSave);
    var exportSave = btoa(saved);
    prompt("Here is your encoded save, keep-it safe!", exportSave);
};
function manualLoad() {
    var importSave = prompt("You need to import the code from the save button.", "Put your exported-save here!");
    var cleanSave = atob(importSave);
    var savegame = JSON.parse(cleanSave);
    var s = savegame;
    var sp = savegame.player;
    var sps = savegame.player.stats;
    var spi = savegame.player.item;
    ps.hp = sps.hp;
    ps.maxHp = sps.maxHp;
    ps.hpPerSec = sps.hpPerSec;
    ps.xp = sps.xp;
    ps.xpNeeded = sps.xpNeeded;
    ps.level = sps.level;
    ps.gold = sps.gold;
    ps.diamond = sps.diamond;
    ps.totalArmor = sps.totalArmor;
    p.helmet.armor = sp.helmet.armor;
    p.helmet.itemName = sp.helmet.itemName;
    p.armour.armor = sp.armour.armor;
    p.armour.itemName = sp.armour.itemName;
    p.gloves.armor = sp.gloves.armor;
    p.gloves.itemName = sp.gloves.itemName;
    p.boots.armor = sp.boots.armor;
    p.boots.itemName = sp.boots.itemName;
    p.amulet.armor = sp.amulet.armor;
    p.amulet.itemName = sp.amulet.itemName;
    p.sword.armor = sp.sword.armor;
    p.sword.itemName = sp.sword.itemName;
    pi.coal = spi.coal;
    pi.crystal = spi.crystal;
    pi.jade = spi.jade;
    pi.ruby = spi.ruby;
    pi.saphire = spi.saphire;
    miningBuildsOwned = savegame.miningBuildsOwned;
    Log("Game loaded!");
};
function saveData() {
    if (init == true) {
        var toSave = { player: player, miningBuildsOwned: miningBuildsOwned };
        localStorage.setItem("IncRPG_Save", JSON.stringify(toSave));
        Log("Game saved!");
    };
};
function loadData() {
    if (init == true) {
        var savegame = JSON.parse(localStorage.getItem("IncRPG_Save"));
        if (typeof savegame.player.stats.gold !== "undefined") {
            var s = savegame;
            var sp = savegame.player;
            var sps = savegame.player.stats;
            var spi = savegame.player.item;
            ps.hp = sps.hp;
            ps.maxHp = sps.maxHp;
            ps.hpPerSec = sps.hpPerSec;
            ps.xp = sps.xp;
            ps.xpNeeded = sps.xpNeeded;
            ps.level = sps.level;
            ps.gold = sps.gold;
            ps.diamond = sps.diamond;
            ps.totalArmor = sps.totalArmor;
            p.helmet.armor = sp.helmet.armor;
            p.helmet.itemName = sp.helmet.itemName;
            p.armour.armor = sp.armour.armor;
            p.armour.itemName = sp.armour.itemName;
            p.gloves.armor = sp.gloves.armor;
            p.gloves.itemName = sp.gloves.itemName;
            p.boots.armor = sp.boots.armor;
            p.boots.itemName = sp.boots.itemName;
            p.amulet.armor = sp.amulet.armor;
            p.amulet.itemName = sp.amulet.itemName;
            p.sword.armor = sp.sword.armor;
            p.sword.itemName = sp.sword.itemName;
            pi.coal = spi.coal;
            pi.crystal = spi.crystal;
            pi.jade = spi.jade;
            pi.ruby = spi.ruby;
            pi.saphire = spi.saphire;
            miningBuildsOwned = savegame.miningBuildsOwned;
            Log("Game loaded!");
        };
    };
};
function resetData() {
    if (confirm("Do you really want to wipe your save and reset everything from scratch?")) {
        clearInterval(saveInterval);
        localStorage.removeItem("IncRPG_Save");
        location.reload();
    };
};